"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/api/auth/logout")}
      className="px-6 py-2 mt-4 bg-red-600 text-white rounded-md">
      Logout
    </button>
  );
}
