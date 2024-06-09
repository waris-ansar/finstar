import Hero from "@/components/landingpage/Hero";
import Lenders from "@/components/landingpage/Lenders";
import Products from "@/components/landingpage/Products";
import Advantages from "@/components/landingpage/Advantages";
import Process from "@/components/landingpage/Process";
import Banner from "@/components/landingpage/Banner";
import Contact from "@/components/landingpage/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Lenders />
      <Products />
      <Advantages />
      <Process />
      <Banner />
      <Contact />
    </>
  );
}
