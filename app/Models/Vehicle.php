<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = 'vehicles';

    protected $fillable = [
        'name', 'type', 'fuel_consumption', 'service_schedule', 'status',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

