"use client";
import { useEffect, useState } from "react";
import { supabase } from "./api/db";
import { useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
  const [user, setUser] = useState(undefined); // `undefined` = loading, `null` = geen user
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        setUser(null);
        router.push("/login");
      } else {
        setUser(data.session.user);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          setUser(null);
          router.push("/login");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [router]);

  // SSR output = <div /> → geen mismatch
  if (user === undefined) return <div />;

  if (user === null) return null;

  return <>{children(user)}</>;
}
