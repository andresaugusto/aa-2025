'use client'

import { Key } from "react";
import { MotionButton, MotionDiv } from "./animation/Motion";
import { ChevronDown } from "lucide-react";

export default function Nav() {
  const sections = [
    {
      title: "aA",
      id: "aa",
    },
    {
      title: "Services",
      id: "services",
    },
    {
      title: "Work",
      id: "work",
    },
    {
      title: "History",
      id: "history",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ]
  return (
    <nav
      className="z-50 sticky top-md m-md rounded-md p-sm flex items-center justify-between bg-gradient-to-b from-black to-black/50"
    >
      {
        sections.map((section: Record<any, any>, key: Key, ) => {
          return (
            <button
              key={key}
              onClick={() => (
                document.getElementById(`${section.id}`)?.scrollIntoView({
                  behavior: "smooth"
                })
              )}
              className="flex items-center text-xs py-sm px-md"
            >
              {section.title}
            </button>
          )
        })
      }
    </nav>
  )
}