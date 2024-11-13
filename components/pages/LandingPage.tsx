import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function LandingPage() {
  return (
    <div className="">
      <Hero />
      <div>
        <Nav />
        <div className="h-screen bg-pink-500" />
        {/* <Services /> */}
      </div>
    </div>
  )
}