"use client";  // 👈 This is required to use `useUser()`

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p className="text-center text-lg text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Auth0 Next.js Starter Template</h1>
      {!user ? (
        <a href="/api/auth/login" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
          Login
        </a>
      ) : (
        <>
          <p className="mt-4 text-lg text-gray-700">Welcome, {user.name}!</p>
          <a href="/api/auth/logout" className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md">
            Logout
          </a>
        </>
      )}
    </div>
  );
}
