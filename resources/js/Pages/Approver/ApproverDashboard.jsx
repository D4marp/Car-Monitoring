import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function ApproverDashboard({ orders, approvals }) {
    const handleApprove = (orderId) => {
        Inertia.post(route("order.approve", orderId));
    };

    const handleRejected = (orderId) => {
        Inertia.post(route("order.reject", orderId));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Approver Dashboard
                </h2>
            }
        >
            <Head title="Approver Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-2xl font-semibold mb-4">
                                Pending Approvals
                            </h3>
                            <p className="mb-6">
                                Berikut adalah pemesanan kendaraan yang menunggu
                                persetujuan Anda.
                            </p>

                            {/* Render Orders with Pending Status */}
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-xl font-semibold mb-4">
                                    Orders Pending Approval
                                </h4>
                                <ul>
                                    {orders.map((order) => (
                                        <li key={order.id} className="mb-3">
                                            <div className="flex justify-between">
                                                <span>
                                                    Pesanan #{order.id} -{" "}
                                                    {order.vehicle?.name ||
                                                        "Unknown Vehicle"}
                                                </span>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleApprove(
                                                                order.id
                                                            )
                                                        }
                                                        className="px-4 py-2 text-white bg-green-500 rounded-lg mr-2"
                                                    >
                                                        Setujui
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleRejected(
                                                                order.id
                                                            )
                                                        }
                                                        className="px-4 py-2 text-white bg-red-500 rounded-lg"
                                                    >
                                                        Tolak
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                Driver:{" "}
                                                {order.driver?.name ||
                                                    "Unknown Driver"}{" "}
                                                | Tanggal:{" "}
                                                {new Date(
                                                    order.request_date
                                                ).toLocaleDateString()}{" "}
                                                | Status: {order.status}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Render Approvals with Vehicle and Driver Details */}
                            <div className="bg-gray-100 p-4 rounded-lg mt-6">
                                <h4 className="text-xl font-semibold mb-4">
                                    Approved Orders
                                </h4>
                                <ul>
                                    {approvals.map((approval) => (
                                        <li key={approval.id} className="mb-3">
                                            <div className="flex justify-between">
                                                <span>
                                                    {approval.order?.vehicle
                                                        ?.name ||
                                                        "Unknown Vehicle"}{" "}
                                                    -{" "}
                                                    {approval.order?.driver
                                                        ?.name ||
                                                        "Unknown Driver"}
                                                </span>
                                                <span
                                                    className={`text-sm ${
                                                        approval.status ===
                                                        "accepted"
                                                            ? "text-green-500"
                                                            : "text-red-500"
                                                    }`}
                                                >
                                                    {approval.status ===
                                                    "accepted"
                                                        ? "Accepted"
                                                        : "Rejected"}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
