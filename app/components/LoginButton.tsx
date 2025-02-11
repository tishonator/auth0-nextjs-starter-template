"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/api/auth/login")}
      className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-md">
      Login
    </button>
  );
}
