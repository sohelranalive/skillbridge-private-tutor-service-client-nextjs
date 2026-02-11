"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LogoutButton() {
  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out");
    const { data, error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <div className="pt-6 border-t border-gray-200">
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all"
      >
        <span className="text-xl">⏻</span>
        Logout
      </button>
    </div>
  );
}
