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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('email');
            $table->string('phone', 50)->nullable();
            $table->string('destination')->nullable();
            $table->string('inquiry_type', 50)->default('tour');
            $table->date('travel_date')->nullable();
            $table->integer('travelers')->default(1);
            $table->text('message')->nullable();
            $table->string('status', 50)->default('new');
            $table->timestamps();

            // Indexes
            $table->index('status');
            $table->index('inquiry_type');
            $table->index('created_at');
            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
