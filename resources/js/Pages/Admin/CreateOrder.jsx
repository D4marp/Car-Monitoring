import { useForm } from "@inertiajs/react"; // Ensure useForm is imported
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function CreateOrder({ vehicles, drivers, approvers }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        vehicle_id: "",
        driver_id: "",
        approver_id: "",
        request_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("orders.store"), {
            data: {
                vehicle_id: data.vehicle_id,
                driver_id: data.driver_id,
                approver_id: data.approver_id,
                request_date: data.request_date,
            },
            onFinish: () => {
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <Link href="/admin/dashboard">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 cursor-pointer">
                        Admin Dashboard
                    </h2>
                </Link>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Form Pemesanan Kendaraan */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-semibold mb-4">
                                Tambah Pemesanan
                            </h3>

                            <form onSubmit={handleSubmit}>
                                {/* Pilih Kendaraan */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="vehicle_id"
                                        className="block text-gray-700"
                                    >
                                        Pilih Kendaraan
                                    </label>
                                    <select
                                        id="vehicle_id"
                                        name="vehicle_id"
                                        value={data.vehicle_id}
                                        onChange={(e) =>
                                            setData(
                                                "vehicle_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">
                                            Pilih Kendaraan
                                        </option>
                                        {vehicles.map((vehicle) => (
                                            <option
                                                key={vehicle.id}
                                                value={vehicle.id}
                                            >
                                                {vehicle.name} - {vehicle.type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Pilih Driver */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="driver_id"
                                        className="block text-gray-700"
                                    >
                                        Pilih Driver
                                    </label>
                                    <select
                                        id="driver_id"
                                        name="driver_id"
                                        value={data.driver_id}
                                        onChange={(e) =>
                                            setData("driver_id", e.target.value)
                                        }
                                        className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Driver</option>
                                        {drivers.map((driver) => (
                                            <option
                                                key={driver.id}
                                                value={driver.id}
                                            >
                                                {driver.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Pilih Approver */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="approver_id"
                                        className="block text-gray-700"
                                    >
                                        Pilih Pihak yang Menyetujui
                                    </label>
                                    <select
                                        id="approver_id"
                                        name="approver_id"
                                        value={data.approver_id}
                                        onChange={(e) =>
                                            setData(
                                                "approver_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Approver</option>
                                        {approvers.map((approver) => (
                                            <option
                                                key={approver.id}
                                                value={approver.id}
                                            >
                                                {approver.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Tanggal Pemesanan */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="request_date"
                                        className="block text-gray-700"
                                    >
                                        Tanggal Pemesanan
                                    </label>
                                    <input
                                        type="date"
                                        id="request_date"
                                        name="request_date"
                                        value={data.request_date}
                                        onChange={(e) =>
                                            setData(
                                                "request_date",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                                    disabled={processing}
                                >
                                    {processing
                                        ? "Sedang memproses..."
                                        : "Simpan Pemesanan"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
