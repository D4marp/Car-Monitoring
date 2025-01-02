<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan 10 data kendaraan dengan pemakaian BBM yang masuk akal
        Vehicle::create([
            'name' => 'Toyota Avanza',
            'type' => 'Passenger',
            'fuel_consumption' => 7.5,  // 7.5 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Honda Civic',
            'type' => 'Passenger',
            'fuel_consumption' => 8.0,  // 8.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Toyota Hilux',
            'type' => 'Pickup',
            'fuel_consumption' => 10.0, // 10.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Isuzu D-Max',
            'type' => 'Pickup',
            'fuel_consumption' => 9.0,  // 9.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'BMW X5',
            'type' => 'SUV',
            'fuel_consumption' => 11.5, // 11.5 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Ford Ranger',
            'type' => 'Pickup',
            'fuel_consumption' => 12.0, // 12.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Suzuki Swift',
            'type' => 'Passenger',
            'fuel_consumption' => 6.0,  // 6.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Mitsubishi Pajero',
            'type' => 'SUV',
            'fuel_consumption' => 13.0, // 13.0 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Hyundai Santa Fe',
            'type' => 'SUV',
            'fuel_consumption' => 10.5, // 10.5 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);

        Vehicle::create([
            'name' => 'Nissan X-Trail',
            'type' => 'SUV',
            'fuel_consumption' => 9.5,  // 9.5 liter per 100 km
            'service_schedule' => now()->addMonths(6),
            'status' => 'available',
        ]);
    }
}
