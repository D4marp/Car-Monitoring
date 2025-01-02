import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [vehicleUsage, setVehicleUsage] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderData, setOrderData] = useState({
        vehicleName: "",
        date: "",
        reason: "",
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-semibold mb-4">
                                Riwayat Pemakaian Kendaraan
                            </h3>
                            <ul>
                                {vehicleUsage.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{item.vehicleName}</strong> -{" "}
                                        {item.date} - {item.mileage} km
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-lg font-semibold mt-8 mb-4">
                                Permintaan Pemesanan Kendaraan
                            </h3>
                            {pendingRequests.length > 0 ? (
                                <ul>
                                    {pendingRequests.map((request, index) => (
                                        <li key={index} className="mb-2">
                                            <div className="flex justify-between">
                                                <span>
                                                    <strong>
                                                        {request.vehicleName}
                                                    </strong>{" "}
                                                    - {request.date}
                                                </span>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                                    Terima
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No pending requests</p>
                            )}

                            {/* Tombol untuk membuka formulir pemesanan */}
                            <button
                                onClick={() => setShowOrderForm(true)}
                                className="mt-8 bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Pemesanan Kendaraan
                            </button>

                            {/* Formulir Pemesanan Kendaraan */}
                            {showOrderForm && (
                                <div className="mt-6 bg-gray-100 p-6 rounded">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Formulir Pemesanan Kendaraan
                                    </h3>
                                    <form onSubmit={handleOrderSubmit}>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="vehicleName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Kendaraan
                                            </label>
                                            <input
                                                type="text"
                                                id="vehicleName"
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                                value={orderData.vehicleName}
                                                onChange={(e) =>
                                                    setOrderData({
                                                        ...orderData,
                                                        vehicleName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="date"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Tanggal Pemesanan
                                            </label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                                value={orderData.date}
                                                onChange={(e) =>
                                                    setOrderData({
                                                        ...orderData,
                                                        date: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="reason"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Alasan Pemesanan
                                            </label>
                                            <textarea
                                                id="reason"
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                                rows="4"
                                                value={orderData.reason}
                                                onChange={(e) =>
                                                    setOrderData({
                                                        ...orderData,
                                                        reason: e.target.value,
                                                    })
                                                }
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Kirim Pemesanan
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
