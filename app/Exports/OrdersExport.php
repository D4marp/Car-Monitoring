<?php

namespace App\Exports;

use App\Models\Order;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class OrdersExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Order::with(['vehicle', 'driver', 'approver'])
            ->get()
            ->map(function ($order) {
                return [
                    'Nama Kendaraan' => $order->vehicle->name ?? 'N/A',
                    'Driver' => $order->driver->name ?? 'N/A',
                    'Approver' => $order->approver->name ?? 'N/A',
                    'Status' => ucfirst($order->status),
                    'Tanggal Pemesanan' => $order->request_date,
                    'Tanggal Persetujuan' => $order->approved_by ? $order->updated_at->format('Y-m-d') : 'N/A',
                ];
            });
    }

    public function headings(): array
    {
        return [
            'Nama Kendaraan',
            'Driver',
            'Approver',
            'Status',
            'Tanggal Pemesanan',
            'Tanggal Persetujuan',
        ];
    }
}
