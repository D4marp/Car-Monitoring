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
                backgroundColor: "rgba(99, 102, 241, 0.6)",
            },
        ],
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    {/* Pemesanan Kendaraan */}
                    <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Pemesanan Kendaraan
                                </h3>
                                <a
                                    href="/admin/pemesanan/create"
                                    className="inline-block px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md"
                                >
                                    Tambah Pemesanan
                                </a>
                            </div>

                            <div className="mt-6 overflow-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Nama Kendaraan
                                            </th>
                                            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Driver
                                            </th>
                                            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Approver
                                            </th>
                                            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800"
                                            >
                                                <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                    {order.vehicle.name}
                                                </td>
                                                <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                    {order.driver.name}
                                                </td>
                                                <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                    {order.approver.name}
                                                </td>
                                                <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                    {order.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Grafik Penggunaan Kendaraan */}
                    <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Grafik Penggunaan Kendaraan
                            </h3>
                            <div className="h-64">
                                <Bar data={chartData} />
                            </div>
                        </div>
                    </div>

                    {/* Daftar Kendaraan */}
                    <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Daftar Kendaraan
                            </h3>
                            <table className="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Nama Kendaraan
                                        </th>
                                        <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Jenis
                                        </th>
                                        <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Konsumsi BBM
                                        </th>
                                        <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Jadwal Servis
                                        </th>
                                        <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((vehicle) => (
                                        <tr
                                            key={vehicle.id}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-800"
                                        >
                                            <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                {vehicle.name}
                                            </td>
                                            <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                {vehicle.type}
                                            </td>
                                            <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                {vehicle.fuel_consumption} L
                                            </td>
                                            <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                {vehicle.service_schedule}
                                            </td>
                                            <td className="px-4 py-2 border text-sm text-gray-700 dark:text-gray-300">
                                                {vehicle.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Laporan Periodik */}
                    <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Laporan Periodik
                                </h3>
                                <a
                                    href="/admin/laporan/export"
                                    className="inline-block px-5 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md"
                                >
                                    Export ke Excel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}