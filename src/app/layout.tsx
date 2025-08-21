"use client"
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import "./globals.css";
import { useState } from "react";


export default function RootLayout({ children }: {
  children:
  React.ReactNode
}) {
  const [open, setOpen] = useState(true);
  return (
    <html lang="en">
      <body >
        <div className="min-h-screen flex">
          <Sidebar open={open} setOpen={setOpen} />

          <div className={`flex-1 flex flex-col transition-all duration-300 ${open ? "lg:ml-64" : "lg:ml-16"
            }`} >
            <Topbar onToggle={() => setOpen((prev) => !prev)} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
