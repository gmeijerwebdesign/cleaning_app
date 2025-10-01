"use client";
import { useGetData } from "../api/useGetData.js";
import AuthForm from "../components/AuthForm.js";

export default function page() {
  const { data, loading } = useGetData();
  console.log(data);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <AuthForm />
    </div>
  );
}
