import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Bar } from "react-chartjs-2";
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard({ orders, vehicles, vehicleUsageData }) {
    const chartData = {
        labels: vehicleUsageData.map((data) => data.vehicleName),
        datasets: [
            {
                label: "Jumlah Pemakaian",
                data: vehicleUsageData.map((data) => data.usageCount),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Pemesanan Kendaraan */}
                    <div className=" bg-white shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold mb-4">
                                Pemesanan Kendaraan
                            </h3>
                            <a
                                href="/admin/pemesanan/create"
                                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                            >
                                Tambah Pemesanan
                            </a>

                            <div className="mt-6 overflow-auto">
                                <h4 className="text-md font-semibold mb-4">
                                    Daftar Pemesanan
                                </h4>
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border">
                                                Nama Kendaraan
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Driver
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Approver
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td className="px-4 py-2 border">
                                                    {order.vehicle.name}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {order.driver.name}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {order.approver.name}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {order.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="py-12">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {/* Pemesanan Kendaraan */}
                            <div className="overflow-auto bg-white shadow-sm sm:rounded-lg mb-6">
                                <div className="p-6 text-gray-900">
                                    <h3 className="text-lg font-bold mb-4">
                                        Daftar Kendaraan
                                    </h3>
                                    <table className="min-w-full table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2 border">
                                                    Nama Kendaraan
                                                </th>
                                                <th className="px-4 py-2 border">
                                                    Jenis
                                                </th>
                                                <th className="px-4 py-2 border">
                                                    Konsumsi BBM (per 100 km)
                                                </th>
                                                <th className="px-4 py-2 border">
                                                    Jadwal Servis
                                                </th>
                                                <th className="px-4 py-2 border">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vehicles.map((vehicle) => (
                                                <tr key={vehicle.id}>
                                                    <td className="px-4 py-2 border">
                                                        {vehicle.name}
                                                    </td>
                                                    <td className="px-4 py-2 border">
                                                        {vehicle.type}
                                                    </td>
                                                    <td className="px-4 py-2 border">
                                                        {
                                                            vehicle.fuel_consumption
                                                        }{" "}
                                                        L
                                                    </td>
                                                    <td className="px-4 py-2 border">
                                                        {
                                                            vehicle.service_schedule
                                                        }
                                                    </td>
                                                    <td className="px-4 py-2 border">
                                                        {vehicle.status}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grafik Penggunaan Kendaraan */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold mb-4">
                                Grafik Penggunaan Kendaraan
                            </h3>
                            <div className="h-64">
                                <Bar data={chartData} />
                            </div>
                        </div>
                    </div>

                    {/* Laporan Periodik */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold mb-4">
                                Laporan Periodik
                            </h3>
                            <a
                                href="/admin/laporan/export"
                                className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg"
                            >
                                Export ke Excel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
