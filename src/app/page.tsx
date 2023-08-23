import Slug from "@/components/pages/home/slug";
import Features from "@/components/pages/home/features";
import Logos from "@/components/pages/home/logos";
import Arch from "@/components/pages/home/arch";
import Benefits from "@/components/pages/home/benefits";
import Community from "@/components/common/community";

export default function Home() {
  return (
      <>
        <Slug />

        <Features />
          {/*
        <Logos />
        <Arch />
        <Benefits />
        <Community />
        */}
      </>
  );
}
