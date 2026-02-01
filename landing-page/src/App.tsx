import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

export default function App() {
  return <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700">

    <Navbar />

    <main>
      <HeroSection />
    </main>

  </div>
}