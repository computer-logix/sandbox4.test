<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class RayController extends Controller
{
    public function phpRayTest()
    {
        ray('This is a test from PHP');

        return Inertia::render('Welcome');
    }
}
