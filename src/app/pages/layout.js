"use client";
import AuthWrapper from "../authwrapper";
import Header from "../components/nav/header";
import { UserContext } from "../user-context";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <body className="min-h-screen flex flex-col">
      <AuthWrapper>
        {(user) => (
          <UserContext.Provider value={user}>
            <Header user={user} />
            <main className="flex-grow p-6">{children}</main>
            <footer className="bg-gray-50 text-center py-6 text-gray-400 text-xs select-none">
              &copy; {new Date().getFullYear()} Cyclus bedrijfsoftware
            </footer>
          </UserContext.Provider>
        )}
      </AuthWrapper>
    </body>
  );
}
