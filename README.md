# SatvaDig

A modern service-oriented website built with Laravel 12, Inertia.js, and React. The project combines a public-facing consultancy/business website with dynamic content, lead capture, authentication, user profiles, and a protected dashboard.

## Overview

SatvaDig uses Laravel for the backend and Inertia.js + React for the frontend experience.

The homepage is data-driven rather than being a static landing page: active services, recent testimonials, and published blog posts are loaded from the backend and passed into the React page.

## Features

### Public website

- Dynamic homepage
- About page
- Consultancy/services page
- Contact page
- Services displayed from active database records
- Latest active testimonials
- Latest published blog posts

### Lead capture

- Contact/lead submission endpoint
- Dedicated Laravel controller for storing leads

### Authentication & user area

- Laravel authentication flow
- Protected, verified dashboard
- User profile editing
- Profile update and account deletion
- Laravel Sanctum support for API authentication

### Administration

The project includes Filament for administration and content-management capabilities.

## Tech Stack

**Backend**
- PHP 8.2+
- Laravel 12
- Eloquent ORM
- Laravel Sanctum
- Laravel Breeze

**Frontend**
- React 18
- Inertia.js 2
- Vite 7
- Tailwind CSS
- Headless UI
- Framer Motion

**Developer tooling**
- Axios
- Ziggy
- PHPUnit
- Laravel Pint
- Laravel Sail

## Architecture

The application follows a Laravel + Inertia architecture:

```text
Browser
   ↓
React UI
   ↓
Inertia.js
   ↓
Laravel routes/controllers
   ↓
Eloquent models
   ↓
Database
```

The homepage demonstrates the data flow clearly: Laravel queries active services, active testimonials, and published blogs, then renders the `Welcome` React page with that server-provided data.

## Repository Structure

```text
app/
  Http/Controllers/    # Leads, profiles and application controllers
  Models/              # Services, testimonials, blogs and other domain models

resources/
  js/                  # React/Inertia application
  views/               # Laravel/Inertia server views

routes/
  web.php              # Public, authenticated and lead routes
  auth.php             # Authentication routes

database/
  migrations/
  seeders/
  factories/

public/
  # Public assets

tests/
  # Application tests
```

## Getting Started

### Requirements

- PHP 8.2+
- Composer
- Node.js and npm
- A database supported by Laravel

### Installation

```bash
git clone https://github.com/Neha9826/SatvaDig.git
cd SatvaDig

composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

npm install
npm run build
```

Configure database and other application values in `.env`.

### Development

The repository provides a Composer development workflow for running Laravel, the queue listener, application logs, and Vite together:

```bash
composer run dev
```

For frontend-only Vite development:

```bash
npm run dev
```

### Tests

```bash
composer test
```

## Engineering Highlights

- Laravel + Inertia architecture with React
- Server-driven page data through Inertia
- Dynamic service, testimonial, and blog content
- Protected and verified dashboard
- Profile lifecycle management
- Lead capture through a dedicated controller
- Filament administration support
- Motion-rich React UI using Framer Motion
- Vite-based frontend build pipeline

## Project Status

Active web application project with a modern Laravel/React architecture.

## Author

**Neha Pattnayak**  
Full Stack Engineer

## License

This project is proprietary unless otherwise specified by the repository owner.
