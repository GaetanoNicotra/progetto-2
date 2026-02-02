import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Statistic from "./components/Statistic"
import Feature from "./components/Feature"
import Tabs from "./components/Tabs"
export default function App() {
  return <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700">

    <Navbar />

    <main>
      <HeroSection />
      <Statistic />
      <Feature />
      <Tabs />
    </main>

  </div>
}