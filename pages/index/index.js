import Layout from "../../components/Layout";
import HelloSection from "../index/components/HelloSection";
import AboutSection from "../index/components/AboutSection";
import AffairsSection from "./components/AffairsSection/AffairsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import "../../styles/index.css";

export default () => (
  <Layout>
    <HelloSection />
    <AboutSection />
    <span className="main__dash w-full block" />
    <AffairsSection />
    <span className="main__dash w-full block" />
    <ContactSection />
  </Layout>
);
