import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Reservation from "../components/Reservation";
import Self from "../components/Self";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <Self />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
