import { SectionOne } from "./components/section-one";
import { NavBar } from "./components/nav-bar";
import SectionTwo from "./components/section-two";
import SectionThree from "./components/section-three";
import SectionFour, { skillsData } from "./components/section-four";
import { SectionFive } from "./components/section-five";
import { SectionSix } from "./components/section-six";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour skills={skillsData} />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
