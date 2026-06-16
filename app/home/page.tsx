import Hero from "@/components/Hero";
import Planes from "@/components/Planes";
import Nosotros from "@/components/Nosotros";
import ClubHope from "@/components/ClubHope";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">

        <div className="sm:sticky sm:top-0 z-10">
          <Hero />
        </div>

        <div className="sm:sticky sm:top-0 z-20 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-white relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <Planes />
        </div>

        <div className="sm:sticky sm:top-0 z-30 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-white relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <Nosotros />
        </div>

        <div className="sm:sticky sm:top-0 z-40 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen gradient-dark relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <ClubHope />
        </div>

        <div className="sm:sticky sm:top-0 z-[45] rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-white relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <CTABanner />
        </div>

      </main>
    </>
  );
}
