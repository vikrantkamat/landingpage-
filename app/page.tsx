"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/vikrantkamat/",
    },
    {
      name: "Github",
      url: "https://github.com/vikrantkamat",
    },
    {
      name: "X",
      url: "https://x.com/vikkamat",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setIsOpen(true)
      setInputValue("")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy relative overflow-hidden">
      <h1 className="text-4xl font-bold text-white mb-8">Vikrant Kamat</h1>

      {/* Image in bottom left */}
      <div className="absolute bottom-0 left-0 w-1/4 md:w-1/4 min-w-[200px] max-w-[300px] z-0">
        <Image
          src="/device-image.png"
          alt="Pink device with graph"
          width={500}
          height={500}
          className="w-full h-auto drop-shadow-lg"
          priority
        />
      </div>

      {/* Chat input in the middle */}
      <div className="z-10 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
          <div className="relative w-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type 'links' to see my profiles..."
              className="w-full bg-gray-700 text-white rounded-full py-3 px-4 pr-10 focus:outline-none"
              onClick={() => !isOpen && setIsOpen(true)}
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
              <Send size={18} />
            </button>
          </div>
        </form>

        {isOpen && (
          <div className="bg-gray-700 rounded-lg shadow-xl p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-2">
                <div className="bg-gray-600 rounded-full p-2">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">Hey there! Here are my links:</p>
                </div>
              </div>

              {links.map((link, index) => (
                <div key={index} className="flex items-start justify-end gap-2">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-500 rounded-lg p-3 max-w-[80%] transition-colors"
                  >
                    <p className="text-white text-sm">{link.name}</p>
                  </Link>
                  <div className="bg-gray-500 rounded-full p-2">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
