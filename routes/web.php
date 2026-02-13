<?php

use App\Http\Controllers\LeadController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Blog;
use Inertia\Inertia;

// 1. Home Page (Merged Breeze Auth variables + Dynamic Website Data)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        // Auth & App variables (From Laravel Breeze)
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        
        // Dynamic variables for your Homepage sections
        'dynamicServices' => Service::where('is_active', true)->take(6)->get(),
        'testimonials' => Testimonial::where('is_active', true)->latest()->take(4)->get(),
        'blogs' => Blog::where('is_published', true)->latest()->take(3)->get(),
    ]);
})->name('home');

// 2. About Page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// 3. Consultancy / Services Page
Route::get('/consultancy', function () {
    return Inertia::render('Consultancy');
})->name('consultancy');

// 4. Contact Page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Lead Form Submission
Route::post('/leads', [LeadController::class, 'store'])->name('leads.store');

// Admin / User Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// User Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';