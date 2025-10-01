"use client";

import AuthWrapper from "./authwrapper.js";
import { supabase } from "./api/db.js";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut(); // log de user uit
    router.push("/login"); // redirect naar login
  };

  return (
    <AuthWrapper>
      {(user) => (
        <main>
          <h1>Dashboard</h1>
          <p>Welcome {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </main>
      )}
    </AuthWrapper>
  );
}
