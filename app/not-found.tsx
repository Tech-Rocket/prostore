"use client";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 w-1/3 border border-gray-300 rounded-lg shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Not found</h1>
        <p className="text-destrutive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4  ml-2 cursor-pointer rounded h-10"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
