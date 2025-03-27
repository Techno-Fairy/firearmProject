'use client';
import React from "react";
import LeftPanel from "./components/LeftPanel";
import Navbar from "./components/Navbar";

export default function Home() {

    return (
      <div className="flex flex-col h-screen">
        <Navbar />
  
        <div className="flex flex-1">
          <LeftPanel />
          
          <main className="flex-1 p-5">
            {/* Main page content */}
            <h1 className="text-2xl font-bold">FIREARM MANAGEMENT SYSTEM</h1>
          </main>
        </div>
      </div>
    );
  }
  