<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vehicle_id')->constrained()->onDelete('cascade'); // foreign key untuk vehicles
            $table->foreignId('driver_id')->constrained('users')->onDelete('cascade'); // foreign key untuk users (driver)
            $table->foreignId('approver_id')->constrained('users')->onDelete('cascade'); // foreign key untuk users (approver)
            $table->date('request_date');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('set null'); // foreign key untuk users (approved_by) yang nullable
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

// <?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// return new class extends Migration
// {
//     /**
//      * Run the migrations.
//      */
//     public function up(): void
//     {
//         Schema::create('approvals', function (Blueprint $table) {
//             $table->id();
//             $table->foreignId('order_id')->constrained()->onDelete('cascade');
//             $table->foreignId('approver_id')->constrained('users')->onDelete('cascade');
//             $table->enum('status', ['rejected', 'accepted', 'on_review'])->default('on_review');
//             $table->timestamp('approved_at')->nullable();
//             $table->timestamps();
//         });
//     }

//     /**
//      * Reverse the migrations.
//      */
//     public function down(): void
//     {
//         Schema::dropIfExists('approvals');
//     }
// };
