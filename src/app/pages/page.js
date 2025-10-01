"use client";
import { supabase } from "../api/db.js";
import { useRouter } from "next/navigation";
import { useUser } from "../user-context";

export default function Dashboard() {
  const user = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
