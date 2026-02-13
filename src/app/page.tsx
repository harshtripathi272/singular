import {
  VideoBackground,
  Navigation,
  Hero,
  Philosophy,
  SystemLayers,
  Capabilities,
  Industries,
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
        <Capabilities />
        <Industries />
        <Trust />
        <Finale />
      </main>

      <Footer />
    </>
  );
}
