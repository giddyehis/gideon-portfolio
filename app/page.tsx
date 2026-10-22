import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Store from "@/components/Store";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
export default function Page() {
  return (
    <Motion>
      <Navbar /><main><Hero /><About /><Works /><Store /><News /><Contact /></main><Footer />
    </Motion>
  );
}
