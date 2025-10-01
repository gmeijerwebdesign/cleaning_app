"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../api/db";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/pages");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center px-6 sm:px-12">
        <div className="max-w-md w-full">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Inloggen
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Voer je gegevens in om verder te gaan
            </p>
          </header>

          <form
            onSubmit={handleLogin}
            className="space-y-6 bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                E-mailadres
              </label>
              <input
                id="email"
                type="email"
                placeholder="jouw.email@voorbeeld.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Wachtwoord
              </label>
              <input
                id="password"
                type="password"
                placeholder="Hier uw wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              // disabled={loading}

              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition disabled:opacity-50"
            >
              {/* {loading ? "Bezig..." : "Inloggen"} */}
              Inloggen
            </button>

            <button
              type="button"
              // onClick={handlePasswordReset}
              className="w-full text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-2 underline focus:outline-none"
            >
              Wachtwoord vergeten?
            </button>

            {/* {message && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  message.toLowerCase().includes("fout")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {message}
              </p>
            )} */}
          </form>
        </div>
      </main>

      <footer className="bg-gray-50 text-center py-6 text-gray-400 text-xs select-none">
        &copy; {new Date().getFullYear()} Jouw Bedrijfsnaam
      </footer>
    </div>
  );
}
