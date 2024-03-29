import EventsBar from "@/components/home/EventsBar";
import Events from "@/components/home/EventsDivider";
import FAQs from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";
import Sponsors from "@/components/home/Sponsors";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <Events />
      <EventsBar />
      <Sponsors />
      <FAQs />
    </main>
  );
}
