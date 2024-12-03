import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      <Hero
        backgroundUrl="/placeholders/hero-lasko.mp4"
        title="Laško music:
Živi ritem zelenega srca!"
        cta="Razišči"
        isVideo
      />
      {/* /filler */}
      <div className="max-w-7xl mx-auto px-4 py-8 h-[1200px]" />
    </div>
  );
}
