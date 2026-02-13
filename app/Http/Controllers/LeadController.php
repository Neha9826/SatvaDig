<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        // 1. Simple Validation
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'city' => 'nullable|string',
            'service_interest' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        // 2. Save the Lead
        Lead::create($validated);

        // 3. Return success (Inertia handles this without page reload)
        return back()->with('success', 'Request received! We will call you shortly.');
    }
}