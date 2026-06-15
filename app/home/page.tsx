import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Planes from "@/components/Planes";
import Nosotros from "@/components/Nosotros";
import ClubHope from "@/components/ClubHope";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <div className="sticky top-0 z-10">
          <Hero />
        </div>

        <div className="sticky top-0 z-20 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <Planes />
        </div>

        <div className="sticky top-0 z-30 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <Nosotros />
        </div>

        <div className="sticky top-0 z-40 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <ClubHope />
        </div>

        <div className="sticky top-0 z-[45] rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <CTABanner />
        </div>

      </main>
      <Footer />
    </>
  );
}
