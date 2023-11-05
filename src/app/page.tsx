import Slug from "@/components/pages/home/slug";
import Features from "@/components/pages/home/features";
import Logos from "@/components/pages/home/logos";
import Says from "@/components/pages/home/says";
import Arch from "@/components/pages/home/arch";
import Deploy from "@/components/pages/home/deploy";
import Faq from "@/components/pages/home/faq";
import Start from "@/components/pages/home/start";
import Benefits from "@/components/pages/home/benefits";
import Community from "@/components/common/community";

export default function Home() {
  return (
      <>
        <Slug />
        <Logos />
        <Features />
        <Arch />
        <Deploy />
        <Says/>
        <Faq/>
        <Start/>
          {/*
        <Benefits />
        <Community />
        */}
      </>
  );
}
