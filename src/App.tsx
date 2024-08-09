import { SectionOne } from "./components/sections/section-one";
import { NavBar } from "./components/nav-bar";
import SectionTwo from "./components/sections/section-two";
import SectionThree from "./components/sections/section-three";
import SectionFour, { skillsData } from "./components/sections/section-four";
import { SectionFive } from "./components/sections/section-five";
import { SectionSix } from "./components/sections/section-six";
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
