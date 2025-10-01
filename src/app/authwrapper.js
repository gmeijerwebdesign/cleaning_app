"use client";
import { useEffect, useState } from "react";
import { supabase } from "./api/db.js";
import { useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push("/login");
      else setUser(data.session.user);
    });
  }, []);

  return user ? children(user) : <p>Loading...</p>;
}
