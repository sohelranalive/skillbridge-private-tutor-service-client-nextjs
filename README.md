# SkillBridge Private Tutor Service - Frontend

## Overview

The SkillBridge Private Tutor Service frontend is a modern **Next.js 16** application built with **TypeScript** and **React 19**. It provides an intuitive user interface for students to find and book tutors, tutors to manage their profiles and availability, and administrators to oversee platform operations. The frontend communicates with the backend API and implements client-side authentication using **Better-Auth**.

## Table of Contents

- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Application Routes](#application-routes)
- [Component Structure](#component-structure)
- [Service Layer](#service-layer)
- [Authentication](#authentication)
- [Styling](#styling)

## Architecture

The frontend follows **Next.js App Router** architecture with:

- **Server Components**: Default rendering for better performance
- **Client Components**: Interactive UI elements
- **Server Actions**: Type-safe data mutations
- **Service Layer**: Centralized API communication
- **Layout Groups**: Organized route structure
- **TypeScript**: Full type safety

### Application Flow

```
User Interaction
    ↓
React Components (UI)
    ↓
Service Layer (API Calls)
    ↓
Better-Auth Client (Authentication)
    ↓
Backend API (HTTP Requests)
    ↓
Response Handling & State Update
```

## Technology Stack

### Core Framework
- **Framework**: Next.js v16.1.6
- **React**: v19.2.3
- **Language**: TypeScript v5

### UI & Styling
- **CSS Framework**: TailwindCSS v4
- **Component Library**: Radix UI v1.4.3
- **Icons**: Lucide React v0.563.0
- **Class Utilities**: clsx, tailwind-merge, class-variance-authority
- **Animations**: tw-animate-css
- **Theme**: next-themes v0.4.6 (dark/light mode)

### Forms & Validation
- **Form Library**: @tanstack/react-form v1.28.0
- **Validation**: Zod v4.3.6
- **Next.js Integration**: @tanstack/react-form-nextjs

### Authentication
- **Library**: Better-Auth v1.4.18 (client)

### Data Visualization
- **Charts**: Recharts v3.7.0 (admin dashboard analytics)

### Notifications
- **Toast Notifications**: Sonner v2.0.7

### Environment Management
- **Environment Variables**: @t3-oss/env-nextjs v0.13.10

### Development Tools
- **Linter**: ESLint v9
- **ESLint Config**: eslint-config-next v16.1.6

## Project Structure

```
Frnotend/
├── .next/                    # Next.js build output
├── node_modules/
├── public/                   # Static assets
│   ├── images/
│   └── icons/
├── src/
│   ├── actions/              # Server Actions
│   │   ├── adminAction.ts
│   │   ├── studentAction.ts
│   │   ├── tutorAction.ts
│   │   └── userAction.ts
│   ├── app/                  # Next.js App Router
│   │   ├── (commonLayout)/  # Public pages layout
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── profile/
│   │   │   ├── reviews/
│   │   │   └── tutors/      # Tutor listing & details
│   │   ├── (dashboardLayout)/  # Dashboard layout
│   │   │   ├── layout.tsx
│   │   │   ├── admin-dashboard/
│   │   │   │   ├── categories/
│   │   │   │   ├── bookings/
│   │   │   │   ├── users/
│   │   │   │   └── ...
│   │   │   ├── student-dashboard/
│   │   │   │   ├── bookings/
│   │   │   │   ├── reviews/
│   │   │   │   └── ...
│   │   │   └── tutor-dashboard/
│   │   │       ├── profile/
│   │   │       ├── availability/
│   │   │       ├── bookings/
│   │   │       └── reviews/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── favicon.ico
│   ├── components/           # Reusable components
│   │   ├── authentications/ # Auth forms
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── SocialLogin.tsx
│   │   ├── dashboard/       # Dashboard components
│   │   │   ├── Sidebar.tsx
│   │   │   └── DashboardCard.tsx
│   │   ├── home-layout/     # Homepage components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedTutors.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── ...
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── ...
│   │   └── ui/              # UI primitives (shadcn/radix)
│   │       └── ...
│   ├── constants/            # Constants & config
│   │   ├── routes.ts
│   │   └── config.ts
│   ├── lib/
│   │   └── auth-client.ts   # Better-Auth client config
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── service/              # API service layer
│   │   ├── admin.service.ts
│   │   ├── student.service.ts
│   │   ├── tutor.service.ts
│   │   └── user.service.ts
│   ├── types/                # TypeScript type definitions
│   │   ├── user.ts
│   │   ├── tutor.ts
│   │   ├── booking.ts
│   │   ├── review.ts
│   │   └── ...
│   └── env.ts               # Environment variable schema
├── .env                      # Environment variables (local)
├── .gitignore
├── components.json           # shadcn/ui config
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs        # PostCSS config
├── proxy.ts                  # Development proxy (if needed)
├── README.md                 # This file
└── tsconfig.json             # TypeScript configuration
```

## Features

### User Roles & Permissions

The application supports **three distinct user roles**:

#### 1. **Student**
- Browse and search tutors by subject, category, ratings, price
- View tutor profiles with reviews and availability
- Book tutoring sessions
- Manage bookings (view upcoming/past sessions)
- Write, edit, and delete reviews
- View personal dashboard

#### 2. **Tutor**
- Create and manage tutor profile
- Set subjects, pricing, education, languages
- Manage availability slots (time-based scheduling)
- View and manage bookings
- See reviews from students
- Access tutor-specific dashboard

#### 3. **Admin**
- View all users, tutors, bookings
- Manage user status (ban/activate)
- Create, update, delete tutor categories
- Platform-wide analytics and statistics
- Administrative dashboard with insights

### Core Functionality

#### Authentication
- Email/password registration and login
- Social authentication (Google, GitHub)
- Session management
- Role-based access control
- Automatic redirect based on role

#### Tutor Discovery
- **Advanced Search**: Filter by subjects, categories, price, ratings
- **Featured Tutors**: Highlighted on homepage
- **Sorting**: Price, ratings, availability
- **Pagination**: Efficient browsing of large tutor lists
- **Detailed Profiles**: View tutor education, languages, reviews, availability

#### Booking System
- **Time Slot Selection**: Choose from tutor's available times
- **Subject-Specific Booking**: Book for specific subjects
- **Booking Management**: View, track upcoming and past bookings
- **Conflict Prevention**: Backend prevents double bookings

#### Review System
- **Star Ratings**: 1-5 star rating system
- **Written Reviews**: Detailed feedback
- **Review Management**: Students can edit/delete their reviews
- **Average Rating Display**: Calculated and shown on tutor profiles

#### Dashboard Features
- **Student Dashboard**:
  - Upcoming bookings calendar
  - Booking history
  - Review management
  
- **Tutor Dashboard**:
  - Profile editing
  - Availability management (add/delete time slots)
  - Booking overview
  - Review analytics
  
- **Admin Dashboard**:
  - User management
  - Category management
  - Booking overview
  - Platform statistics with charts

## Installation & Setup

### Prerequisites
- Node.js v20 or higher
- pnpm (or npm)
- Backend API running

### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd skillbridge-private-tutor-service-client-nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Copy variables from `.env.example` (if available)
   - Configure API URL and other settings

4. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

The application will connect to the backend API automatically.

## Environment Variables

Create a `.env` file in the `Frnotend` directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
# or for production
# NEXT_PUBLIC_API_URL=https://your-backend-api.com

# Authentication (optional, for server-side auth)
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Environment Validation

The app uses `@t3-oss/env-nextjs` for type-safe environment variables:

**src/env.ts**:
```typescript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
```

## Available Scripts

```json
{
  "dev": "next dev",           // Start development server (localhost:3000)
  "build": "next build",       // Build production bundle
  "start": "next start",       // Start production server
  "lint": "eslint"            // Run ESLint
}
```

### Development
```bash
pnpm dev          # Start dev server with hot reload
pnpm lint         # Check code quality
```

### Production
```bash
pnpm build        # Create optimized production build
pnpm start        # Start production server
```

## Application Routes

### Public Routes (commonLayout)

```
/                           # Homepage with featured tutors
/login                      # User login page
/register                   # User registration
/tutors                     # Browse all tutors (with filters)
/tutors/[id]                # Individual tutor profile
/reviews                    # All platform reviews
/profile                    # User profile (authenticated)
```

### Protected Dashboard Routes (dashboardLayout)

#### Student Dashboard
```
/student-dashboard          # Student overview
/student-dashboard/bookings # Manage bookings
/student-dashboard/reviews  # Manage reviews
```

#### Tutor Dashboard
```
/tutor-dashboard            # Tutor overview
/tutor-dashboard/profile    # Edit tutor profile
/tutor-dashboard/availability  # Manage time slots
/tutor-dashboard/bookings   # View tutor bookings
/tutor-dashboard/reviews    # View tutor reviews
```

#### Admin Dashboard
```
/admin-dashboard            # Admin overview & analytics
/admin-dashboard/users      # Manage all users
/admin-dashboard/categories # Manage tutor categories
/admin-dashboard/bookings   # View all bookings
/admin-dashboard/tutors     # Tutor verification & management
```

## Component Structure

### Layout Components

**Root Layout** (`app/layout.tsx`):
- Wraps entire application
- Provides theme provider
- Global font configuration

**Common Layout** (`app/(commonLayout)/layout.tsx`):
- Public pages wrapper
- Header/Footer navigation
- Shared public page styling

**Dashboard Layout** (`app/(dashboardLayout)/layout.tsx`):
- Protected dashboard wrapper
- Sidebar navigation
- Role-specific menu items

### Reusable Components

#### Authentication Components
- **LoginForm**: Email/password login with validation
- **RegisterForm**: User registration with role selection
- **SocialLogin**: Google/GitHub OAuth buttons

#### Dashboard Components
- **Sidebar**: Navigation menu with role-based items
- **DashboardCard**: Statistics display cards
- **DataTable**: Reusable table for listings

#### Home Layout Components
- **Header**: Top navigation with auth buttons
- **Footer**: Site information and links
- **Hero**: Landing page hero section
- **FeaturedTutors**: Carousel of top-rated tutors
- **Categories**: Subject category cards
- **Testimonials**: Student reviews showcase

#### UI Components (Radix-based)
Built using **shadcn/ui** pattern:
- Button, Input, Select, Dialog
- Card, Badge, Avatar
- Toast (via Sonner)
- And more...

## Service Layer

The application uses a **centralized service layer** for all API calls:

### Admin Service (`admin.service.ts`)

```typescript
adminService.getCategory()              // Get all categories
adminService.getBooking()               // Get all bookings
adminService.getUser()                  // Get all users
adminService.updateUserStatus(id, data) // Update user status
adminService.addCategory(data)          // Add new category
adminService.updateCategory(id, data)   // Update category
adminService.deleteCategory(id)         // Delete category
```

### Student Service (`student.service.ts`)

```typescript
studentService.getReview()                    // Get all reviews
studentService.getExistingBooking(params)     // Check booking exists
studentService.createBooking(data)            // Create new booking
studentService.getBookingByStudentId(id)      // Get student bookings
studentService.getStudentReviews(id)          // Get student reviews
studentService.writeReview(data)              // Write new review
studentService.updateReview(id, data)         // Update review
studentService.deleteReview(id)               // Delete review
```

### Tutor Service (`tutor.service.ts`)

```typescript
tutorService.getTutor(params, options)        // Get filtered tutors
tutorService.getTutorById(id)                 // Get tutor by ID
tutorService.getTutorByUserId(id)             // Get tutor by user ID
tutorService.updateTutorById(id, data)        // Update tutor profile
tutorService.getBookingByTutorId(id)          // Get tutor bookings
tutorService.getReviewsBtTutorId(id)          // Get tutor reviews
tutorService.getTutorAvailability(id)         // Get availability slots
tutorService.setAvailability(data)            // Create availability
tutorService.deleteAvailability(id)           // Delete availability
```

### Service Pattern

All services follow a consistent pattern:

```typescript
export const serviceName = {
  methodName: async function (params?, options?) {
    try {
      const cookieStore = await cookies();  // For authenticated requests
      const res = await fetch(API_URL + endpoint, {
        method: 'GET/POST/PATCH/DELETE',
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(payload),  // For POST/PATCH
      });
      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: 'Something went wrong' } };
    }
  },
};
```

**Features**:
- Consistent error handling
- Cookie-based authentication
- Type-safe responses
- Server-side data fetching (Next.js cookies API)

## Authentication

### Better-Auth Client Configuration

**src/lib/auth-client.ts**:
```typescript
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
  fetchOptions: {
    credentials: "include",  // Include cookies in requests
  },
});
```

### Usage in Components

```typescript
import { authClient } from "@/lib/auth-client";

// Get current session
const { data: session } = authClient.useSession();

// Sign in
await authClient.signIn.email({
  email: "user@example.com",
  password: "password123",
});

// Sign out
await authClient.signOut();

// Social login
await authClient.signIn.social({
  provider: "google",
});
```

### Protected Routes

Routes are protected using middleware or client-side checks:

```typescript
// Check if user is authenticated
if (!session) {
  redirect('/login');
}

// Check user role
if (session.user.role !== 'ADMIN') {
  redirect('/');
}
```

## Styling

### TailwindCSS v4

The application uses **TailwindCSS v4** with:
- **Utility-First**: Compose designs with utility classes
- **Custom Configuration**: Defined in `postcss.config.mjs`
- **Theme Customization**: Custom colors, fonts, spacing

### Global Styles (`globals.css`)

```css
@import "tailwindcss";

@theme {
  /* Custom theme variables */
  --color-primary: ...;
  --radius: ...;
}

/* Global styles */
body {
  /* Base styles */
}
```

### Dark Mode Support

Using **next-themes**:

```typescript
import { ThemeProvider } from "next-themes";

<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

Toggle theme:
```typescript
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
setTheme(theme === "dark" ? "light" : "dark");
```

### Component Variants

Using **class-variance-authority** for variant-based components:

```typescript
import { cva } from "class-variance-authority";

const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "bg-primary text-white",
      outline: "border border-primary",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      lg: "px-4 py-2 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});
```

## Data Visualization

### Recharts Integration

Admin dashboard uses **Recharts** for analytics:

```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

<LineChart data={bookingData}>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
</LineChart>
```

**Chart Types Used**:
- Line charts for booking trends
- Bar charts for category statistics
- Pie charts for user role distribution

## Form Management

### TanStack React Form

Forms use **@tanstack/react-form** with Zod validation:

```typescript
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const form = useForm({
  defaultValues: { email: "", password: "" },
  onSubmit: async ({ value }) => {
    await authClient.signIn.email(value);
  },
  validatorAdapter: zodValidator(),
});
```

**Features**:
- Type-safe forms
- Real-time validation
- Error handling
- Server action integration

## Notifications

### Sonner Toast

Global notifications using **Sonner**:

```typescript
import { toast } from "sonner";

// Success
toast.success("Booking created successfully!");

// Error
toast.error("Failed to create booking");

// Loading
const toastId = toast.loading("Creating booking...");
toast.success("Done!", { id: toastId });

// Custom
toast("Custom message", {
  description: "Additional details",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
});
```

## Performance Optimizations

### Next.js Features Used

1. **Server Components**: Default for better performance
2. **Image Optimization**: `next/image` for automatic optimization
3. **Route Caching**: Configured per route
4. **Revalidation**: ISR for tutor listings

Example with caching:
```typescript
// Revalidate tutor list every 60 seconds
tutorService.getTutor(params, { revalidate: 60 });
```

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components
- Lazy loading for images

## Development Best Practices

### TypeScript Usage
- Strict type checking enabled
- Interface/Type definitions in `src/types/`
- No `any` types (use `unknown` when needed)

### Component Guidelines
- **Single Responsibility**: One component, one purpose
- **Reusability**: Extract common UI patterns
- **Props Typing**: Always type component props
- **Server vs Client**: Default to Server Components

### API Integration
- Use service layer for all API calls
- Handle loading and error states
- Implement optimistic updates where appropriate

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Deployment

### Vercel Deployment (Recommended)

1. **Push to Git** (GitHub, GitLab, Bitbucket)
2. **Connect on Vercel**: Import repository
3. **Configure Environment Variables** in Vercel dashboard
4. **Deploy**: Automatic on every push

### Build Configuration

**next.config.ts**:
```typescript
const nextConfig = {
  // Custom configuration
  images: {
    domains: ['your-image-domain.com'],
  },
};
```

### Environment Setup
- Development: `.env` (local)
- Production: Vercel dashboard or `.env.production`

## Troubleshooting

### Common Issues

**Issue**: API calls failing
- **Solution**: Verify `NEXT_PUBLIC_API_URL` in `.env`
- Check if backend is running

**Issue**: Authentication not working
- **Solution**: Ensure cookies are enabled
- Check CORS settings on backend

**Issue**: Styles not applying
- **Solution**: Rebuild TailwindCSS: `pnpm dev` (restart)
- Clear `.next` folder

## Support & Resources

**Repository**: SkillBridge Private Tutor Service
**Framework Docs**: [Next.js Documentation](https://nextjs.org/docs)
**React Docs**: [React Documentation](https://react.dev)
**TailwindCSS**: [Tailwind Docs](https://tailwindcss.com/docs)
**Better-Auth**: [Better-Auth Docs](https://better-auth.com)

---

**Last Updated**: February 2026  
**Version**: 0.1.0  
**License**: Private
