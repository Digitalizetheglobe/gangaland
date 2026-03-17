import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Property from "@/components/about";
import Sports from "@/components/Sports";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import School from "@/components/School";
import Footer from "@/components/Footer";
import LocationAndNearby from "@/components/locationandnearby";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      {/* Background image – replace /hero-bg.jpg with your actual image path in /public */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(5,5,10,0.95) 0%, rgba(5,5,10,0.88) 38%, rgba(5,5,10,0.2) 60%), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      <Header />
      <Banner />
      <Counter />
      <Property />
      <Sports />
      <School />
      <Gallery />
      <Amenities />
      <FloorPlans />
      <LocationAndNearby />
      <Contact />
      <Footer />
    </main>
  );
}

