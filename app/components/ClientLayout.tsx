"use client"

import { useState, ReactNode } from "react";
import Navbar from "./navigation/Navbar";
import LeftSidebar from "./navigation/LeftSidebar";
import RightSidebar from "./navigation/RightSidebar";
import { Menu, X } from "lucide-react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-background text-white shrink-0 border-b border-[#1e1e1e]">
        <Navbar />
      </div>
      
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-16 left-4 z-50 p-2 bg-sidebar border border-line rounded-md hover:bg-[#2a2d2e] transition-colors"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex flex-1 overflow-hidden border-r border-l-line bg-sidebar">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 top-14"
            onClick={closeSidebar}
          />
        )}

        {/* Left Sidebar - Hidden on mobile, slides in when open */}
        <div
          className={`
            fixed lg:relative
            top-14 lg:top-0
            inset-y-0 left-0
            w-64 lg:w-auto
            bg-sidebar
            transform transition-transform duration-300 ease-in-out
            z-40
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto
          `}
        >
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-background text-white overflow-y-auto">
          {children}
        </div>

        {/* Right Sidebar - Hidden on small and medium screens */}
        <div className="hidden xl:block w-64 bg-sidebar text-white p-5 border-l-line overflow-y-auto border-l shrink-0">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}