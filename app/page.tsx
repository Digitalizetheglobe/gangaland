import Header from "./components/header";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
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
    </main>
  );
}

