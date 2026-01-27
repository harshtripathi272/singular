import {
  VideoBackground,
  Navigation,
  Hero,
  Philosophy,
  SystemLayers,
  Trust,
  Finale,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navigation />

      <main>
        <Hero />
        <Philosophy />
        <SystemLayers />
        <Trust />
        <Finale />
      </main>

      <Footer />
    </>
  );
}
