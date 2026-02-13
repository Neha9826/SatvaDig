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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            
            // Link to the User (Client)
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            // Service Details (e.g., 'Home Vastu', 'Factory Vastu')
            $table->string('service_type'); 

            // Appointment Info
            $table->dateTime('scheduled_at');
            $table->string('status')->default('pending'); // pending, confirmed, cancelled

            // Property Details for "Site Analysis"
            $table->string('city'); 
            $table->string('property_type'); // e.g., 'Flat', 'Villa', 'Plot'
            
            // Optional notes
            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
