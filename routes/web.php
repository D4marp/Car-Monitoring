<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReportController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['prefix' => '/admin', 'middleware' => "role:Admin"], function () {
    Route::get('/dashboard', [OrderController::class, 'index'])->name('admin.dashboard');
    Route::get('/pemesanan/create', [OrderController::class, 'create'])->name('admin.pemesanan.create');

    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/laporan/export', [ReportController::class, 'export'])->name('laporan.export');
});

Route::group(['prefix' => '/approver', 'middleware' => "role:Approver"], function () {
    Route::get('/dashboard', [OrderController::class, 'approvalIndex'])->name('approver.dashboard');

    Route::post('/orders/{id}/approve', [OrderController::class, 'approve'])->name('order.approve');
    Route::post('/orders/{id}/reject', [OrderController::class, 'reject'])->name('order.reject');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
