<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->updateOrInsert(
            ['email' => 'john.doe@gmail.com'],
            [
                'id' => 2,
                'name' => 'john',
                'email_verified_at' => null,
                'password' => Hash::make('Demo@123'),
                'remember_token' => null,
                'last_login' => Carbon::parse('2025-07-28 23:56:02'),
                'created_at' => Carbon::parse('2025-07-26 15:05:37'),
                'updated_at' => Carbon::parse('2025-07-26 15:05:37'),
                'super' => 1,
            ]
        );
    }
}
