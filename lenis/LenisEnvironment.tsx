// Reference: https://github.com/darkroomengineering/lenis/tree/main
// Reference: https://www.youtube.com/watch?app=desktop&v=SwsMIrd4-sw
"use client"
import Lenis from "lenis";
import { useEffect } from "react"

export default function LenisEnvironment({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis(); // Initialize Lenis
    function raf(time: any) { // Use requestAnimationFrame to continuously update the scroll
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])
  return <>{children}</>
}