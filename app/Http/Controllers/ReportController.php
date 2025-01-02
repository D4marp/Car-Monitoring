<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\OrdersExport;

class ReportController extends Controller
{
    public function export()
    {
        $fileName = 'laporan_pemesanan_kendaraan_' . now()->format('Y_m_d_His') . '.xlsx';

        return Excel::download(new OrdersExport, $fileName);
    }
}
