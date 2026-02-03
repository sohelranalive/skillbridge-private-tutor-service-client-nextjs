"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserRole } from "@/types";
import { authClient } from "@/lib/auth-client";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function RegisterPage() {
  const [userType, setUserType] = useState("STUDENT");
  const [step, setStep] = useState<"type" | "form">("type");
  const router = useRouter();

  const selectUserType = (type: UserRole) => {
    setUserType(type);
    form.setFieldValue("role", type);
    setStep("form");
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      image: "",
      role: userType,
    },
    onSubmit: async ({ value }) => {
      const payload = {
        ...value,
        image: value.image?.trim() || undefined,
        phone: value.phone?.trim() || undefined,
      };

      const toastId = toast.loading("Creating User");
      try {
        const { data, error } = await authClient.signUp.email(payload);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("User created successfully", { id: toastId });
        router.push("/login?registered=true");
      } catch (error) {
        toast.error("Something went wrong, please try again", { id: toastId });
      }
    },
  });

  return (
    <div className="auth-page min-h-screen flex items-center justify-center p-6">
      {/* Background */}
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

        {/* Register Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 animate-slide-up">
          {step === "type" ? (
            /* Step 1: Choose User Type */
            <div>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Join SkillBridge 🚀
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose how you want to get started
                </p>
              </div>

              <div className="space-y-4">
                {/* Student Option */}
                <button
                  onClick={() => selectUserType("STUDENT")}
                  className="w-full p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all group text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform">
                      👨‍🎓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        I want to learn
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Find expert tutors and start learning new skills
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Tutor Option */}
                <button
                  onClick={() => selectUserType("TUTOR")}
                  className="w-full p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-purple-600 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform">
                      👨‍🏫
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        I want to teach
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Share your expertise and earn income teaching others
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
          ) : (
            /* Step 2: Registration Form */
            <div>
              <div className="mb-6">
                <button
                  onClick={() => setStep("type")}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-3xl ${
                      userType === "student"
                        ? "bg-linear-to-br from-blue-500 to-indigo-600"
                        : "bg-linear-to-br from-purple-500 to-pink-600"
                    }`}
                  >
                    {userType === "STUDENT" ? "👨‍🎓" : "👨‍🏫"}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Create {userType === "STUDENT" ? "Student" : "Tutor"}{" "}
                      Account
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fill in your details to get started
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <form
                id="register-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="space-y-4"
              >
                {/* Name Field */}
                <form.Field
                  name="name"
                  validators={{
                    onChange: registerSchema.shape.name,
                  }}
                >
                  {(field) => (
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none transition-all ${
                          field.state.meta.errors.length > 0
                            ? "border-red-500 focus:border-red-600"
                            : "border-gray-200 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-500"
                        }`}
                        placeholder="John Doe"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400"></p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Email Field */}
                <form.Field
                  name="email"
                  validators={{
                    onChange: registerSchema.shape.email,
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
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400"></p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Image Field */}
                <form.Field name="image">
                  {(field) => (
                    <div>
                      <label
                        htmlFor="image"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Profile Image URL (optional)
                      </label>
                      <input
                        id="image"
                        type="url"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none transition-all ${
                          field.state.meta.errors.length > 0
                            ? "border-red-500 focus:border-red-600"
                            : "border-gray-200 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-500"
                        }`}
                        placeholder="https://example.com/avatar.png"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Phone Field */}
                <form.Field name="phone">
                  {(field) => (
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none transition-all ${
                          field.state.meta.errors.length > 0
                            ? "border-red-500 focus:border-red-600"
                            : "border-gray-200 dark:border-gray-700 focus:border-indigo-600 dark:focus:border-indigo-500"
                        }`}
                        placeholder="+49 151 23456789"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Password Field */}
                <form.Field
                  name="password"
                  validators={{
                    onChange: registerSchema.shape.password,
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
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400"></p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Submit Button */}
                <button
                  form="register-form"
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-300 dark:shadow-purple-900/30 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Register
                </button>
              </form>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
