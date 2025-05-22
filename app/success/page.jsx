"use client";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-primary">
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center animate-fade-in">
        <FiCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-extrabold text-green-500 mb-2 drop-shadow">
          Message Sent!
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-md">
          Thank you for reaching out. I'll be in touch soon.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
SuccessPage.disableTransition = true;
