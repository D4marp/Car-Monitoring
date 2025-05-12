import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById("screenshot-container")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Monitoring Kendaraan" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
                {/* Header Section */}
                <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md dark:bg-gray-900">
                    <div className="flex items-center">
                        <svg
                            className="h-10 w-10 text-blue-500"
                            viewBox="0 0 62 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Logo SVG */}
                        </svg>
                        <span className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">
                            Monitoring Kendaraan
                        </span>
                    </div>
                    <nav className="flex items-center space-x-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-4 py-2 rounded-md text-gray-700 bg-blue-100 hover:bg-blue-200 dark:text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-4 py-2 rounded-md text-gray-700 bg-blue-100 hover:bg-blue-200 dark:text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content Section */}
                <main className="container mx-auto px-6 py-12">
                    <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                        Selamat Datang di Monitoring Kendaraan
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                        Kelola dan pantau konsumsi BBM, armada kendaraan, serta jadwal servis
                        kendaraan dengan mudah.
                    </p>

                    <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <a
                            href="#vehicle-monitoring"
                            className="group block bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
                        >
                            <div className="relative w-full h-48 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                                <img
                                    src="https://via.placeholder.com/400x200"
                                    alt="Vehicle Monitoring"
                                    className="w-full h-full object-cover group-hover:scale-105 transition"
                                    onError={handleImageError}
                                />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                Vehicle Monitoring
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Pantau konsumsi BBM, jadwal servis, dan riwayat pemakaian kendaraan.
                            </p>
                        </a>

                        {/* Card 2 */}
                        <a
                            href="#fleet-management"
                            className="group block bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full dark:bg-blue-900">
                                <svg
                                    className="w-6 h-6 text-blue-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Fleet Icon */}
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                Fleet Management
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Kelola armada kendaraan termasuk kendaraan milik perusahaan.
                            </p>
                        </a>

                        {/* Card 3 */}
                        <a
                            href="#vehicle-service"
                            className="group block bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full dark:bg-blue-900">
                                <svg
                                    className="w-6 h-6 text-blue-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Service Icon */}
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                Vehicle Service Schedule
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Pantau jadwal servis kendaraan secara efisien.
                            </p>
                        </a>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="mt-12 py-8 bg-blue-50 text-center text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Monitoring Kendaraan. All rights
                        reserved.
                    </p>
                    <p>
                        Laravel v{laravelVersion} - PHP v{phpVersion}
                    </p>
                </footer>
            </div>
        </>
    );
}