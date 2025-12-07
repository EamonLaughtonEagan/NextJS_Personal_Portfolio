"use client"

import Link from "next/link"
import { useState, useRef, useEffect, use } from "react"

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Hobbies",
    "Contact",
  ]

  const filteredItems = menuItems.filter(item =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div ref={dropdownRef} className="relative col-span-2 w-1/2">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full h-8 border border-line rounded-sm text-sm px-3 py-2 bg-background hover:bg-gray-950 transition-colors flex items-center justify-center cursor-pointer gap-2 ${isOpen ? "rounded-b-none border-b-0" : "rounded-sm"}`}
        >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-gray-400 text-sm truncate max-w-[150px] sm:max-w-none">
              Portfolio [Eamon Laughton-Eagan]
            </span>
        </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-t-0 rounded-t-none bg-sidebar border border-line rounded-sm shadow-lg z-10">
          <div className="p-2">
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Type to search..."
              className="w-full border border-gray-500 rounded-sm text-sm px-3 py-2 bg-transparent text-white focus:outline-none  cursor-pointer focus:border-blue-500"
            />
          </div>
            <div className="max-h-80 overflow-y-auto flex flex-col">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                    <Link
                        key={index}
                        href={`/${item.toLowerCase()}`}
                        onClick={() => {
                        setIsOpen(false)
                        setSearchValue("")

                        }}
                        className="w-full px-3 py-2 text-left text-sm text-white hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                        {item}
                        </Link>
                        ))
                    ) : (
                        <div className="px-3 py-2 text-sm">No results found</div>
                )}
            </div>
        </div>
      )}
    </div>
  )
}

export default Search