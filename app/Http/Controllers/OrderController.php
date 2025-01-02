<?php

// app/Http/Controllers/OrderController.php
namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Models\Order;
use App\Models\Approval;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index()
    {
        $vehicleUsageData = DB::table('orders')
        ->select('vehicles.name as vehicleName', DB::raw('count(orders.id) as usageCount'))
        ->join('vehicles', 'orders.vehicle_id', '=', 'vehicles.id')
        ->groupBy('vehicles.name')
        ->get();

        $orders = Order::with('vehicle', 'driver', 'approver')->get();
        $vehicles = Vehicle::all();
        return Inertia::render('Admin/AdminDashboard', [
            'orders' => $orders,
            'vehicles' => $vehicles,
            'vehicleUsageData' => $vehicleUsageData,
        ]);
    }

    public function create()
    {
        $vehicles = Vehicle::where('status', 'available')->get();
        $drivers = User::role('driver')->get();
        $approvers = User::role('approver')->get();
        return Inertia::render('Admin/CreateOrder', compact('vehicles', 'drivers', 'approvers'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'vehicle_id' => 'required|exists:vehicles,id',
            'driver_id' => 'required|exists:users,id',
            'approver_id' => 'required|exists:users,id',
            'request_date' => 'required|date',
        ]);

        $order = Order::create([
            'vehicle_id' => $request->vehicle_id,
            'driver_id' => $request->driver_id,
            'approver_id' => $request->approver_id,
            'request_date' => $request->request_date,
            'status' => 'pending', // Status awal adalah 'pending'
        ]);

        return redirect()->route('admin.dashboard');
    }

    public function approvalIndex()
    {
        $orders = Order::with('vehicle', 'driver')->where('approver_id', auth()->user()->id)->where('status', 'pending')->get();
        $approvals = Approval::with('order.vehicle', 'order.driver')->where('approver_id', auth()->user()->id)->get();
        
        return Inertia::render('Approver/ApproverDashboard', [
            'orders' => $orders,
            'approvals' => $approvals,
        ]);
    }

    public function approve($id)
    {
        $order = Order::findOrFail($id);
        if ($order->status !== 'pending') {
            return redirect()->route('approver.dashboard');
        }

        $order->status = 'approved';
        $order->approved_by = auth()->user()->id;
        $order->save();

        $vehicle = $order->vehicle;
        if ($vehicle) {
            $vehicle->status = 'in_use';
            $vehicle->save();
        }

        Approval::create([
            'order_id' => $order->id,
            'approver_id' => auth()->user()->id,
            'status' => 'accepted',
            'approved_at' => now(),
        ]);

        return redirect()->route('approver.dashboard');
    }

    public function reject($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'rejected';
        $order->save();

        Approval::create([
            'order_id' => $order->id,
            'approver_id' => auth()->user()->id,
            'status' => 'rejected',
            'approved_at' => now(),
        ]);

        return redirect()->route('approver.dashboard');
    }
}
