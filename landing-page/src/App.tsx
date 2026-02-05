import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Statistic from "./components/Statistic"
import Feature from "./components/Feature"
import Tabs from "./components/Tabs"
import PricingCards from "./components/PricingCards"
import Testimonials from "./components/Testimonials"
import Form from "./components/Form"
import { Table } from "./components/Table"
import Footer from "./components/Footer"

export default function App() {
  return <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700">

    <Navbar />

    <main>
      <HeroSection />
      <Statistic />
      <Feature />
      <Tabs />
      <PricingCards />
      <Testimonials />
      <Form />
      <Table />
    </main>

    <Footer />

  </div>
}