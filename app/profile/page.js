"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  const { user } = session;
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <Image
          src={user?.image || "/default-avatar.png"}
          alt="Profile"
          width={96}
          height={96}
          className="mx-auto rounded-full shadow mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600">{user?.email}</p>

        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl shadow transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
