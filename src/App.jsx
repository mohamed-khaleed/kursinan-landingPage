import "./App.css";
import FooterSec from "./components/FooterSec";

import NavBar from "./components/NavBar";

import ProductPriceSection from "./components/ProductPriceSection";
import Section from "./components/Section";
import Tabs from "./components/Tabs";

import Hero from "./components/hero";
import Testimonial from "./components/testimonial";
import WhyUs from "./components/whyUs";

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <Section>
        <WhyUs />
      </Section>
      <Section>
        <Tabs />
      </Section>
      <Section>
        {" "}
        <ProductPriceSection />
      </Section>
      <Section>
        {" "}
        <Testimonial />
      </Section>
      <Section>
        {" "}
        <FooterSec />
      </Section>
    </>
  );
}

export default App;
