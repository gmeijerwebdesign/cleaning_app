// utils/useGetData.js
"use client";
import { useEffect, useState } from "react";
import { supabase } from "./db.js";

export function useGetData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("test").select();
      if (error) console.error(error);
      else setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading };
}
