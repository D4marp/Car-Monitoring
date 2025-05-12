<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // admin
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123'),
        ]);
        $admin->assignRole('Admin');

        // approver
        $approver = User::create([
            'name' => 'Approval User',
            'email' => 'approver@example.com',
            'password' => bcrypt('approver123'),
        ]);
        $approver->assignRole('Approver');

        // driver
        $driver = User::create([
            'name' => 'Driver User',
            'email' => 'driver@example.com',
            'password' => bcrypt('driver123'),
        ]);
        $driver->assignRole('Driver');
    }
}
