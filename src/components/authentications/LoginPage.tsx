"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });
  };

  const handleGithubLogIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:3000",
    });
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // console.log("Inside Sign In");
      const toastId = toast.loading("Signing In");
      try {
        const { data, error } = await authClient.signIn.email(value);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("User sign in successful", { id: toastId });
        window.location.href = "/";
      } catch (error) {
        toast.error("Something went wrong, please try again", { id: toastId });
      }
    },
  });

  return (
    <div className="auth-page min-h-screen flex items-center justify-center p-6">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-scale">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl transform -rotate-6 shadow-xl">
              SB
            </div>
            <span className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SkillBridge
            </span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 animate-slide-up">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleGoogleLogIn()}
              type="button"
              className="w-full flex items-center justify-center gap-3 p-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={() => handleGithubLogIn()}
              type="button"
              className="w-full flex items-center justify-center gap-3 p-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Login Form */}
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="space-y-5"
          >
            {/* Name Field */}
            <form.Field
              name="email"
              validators={{
                onChange: loginSchema.shape.email,
              }}
            >
              {(field) => (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none transition-all ${
                      field.state.meta.errors.length > 0
                        ? "border-red-500 focus:border-red-600"
                        : "border-gray-200 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-500"
                    }`}
                    placeholder="you@example.com"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {/* {field.state.meta.errors[0]} */}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Password Field */}
            <form.Field
              name="password"
              validators={{
                onChange: loginSchema.shape.password,
              }}
            >
              {(field) => (
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none transition-all ${
                      field.state.meta.errors.length > 0
                        ? "border-red-500 focus:border-red-600"
                        : "border-gray-200 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-500"
                    }`}
                    placeholder="••••••••"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {/* {field.state.meta.errors[0]} */}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Submit Button */}
            <button
              form="login-form"
              type="submit"
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-300 dark:shadow-purple-900/30 hover:shadow-xl transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          <Link
            href="/terms"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Terms
          </Link>
          {" • "}
          <Link
            href="/privacy"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Privacy
          </Link>
          {" • "}
          <Link
            href="/help"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
