import { motion } from "framer-motion";
import { Robo } from "../Animated/robo";
import { Flower } from "../Animated/flower";
import { World } from "../Animated/world";

const firstText = `I am a very creative person, whether in music or in everyday life. I love to think creatively and discover new ways and approaches. So it plays one of the biggest roles in my life. Expressing myself through my creative actions is very important to me and a big part of my personality.`;

const secondText = `Communication is one of my strengths. Over the course of my life, I have learned to communicate openly and honestly. In my opinion it is essential in order to be able to make progress with other people in a society and to avoid misunderstandings.`;

const thirdText = `Equality has always been very important to me. In my educational work with people, I have always aimed to create access and overcome barriers, regardless of ethnic origin, social status, or physical disabilities.`;

export default function SectionThree() {
  return (
    <section
      id="section3"
      className="w-full h-auto bg-green-200 bg-gradient-to-b from-red-100 via-red-100 to-red-50 flex flex-col relative overflow-hidden"
    >
      <h2 className="font-ultra text-5xl lg:text-6xl text-neutral-700 p-4 md:ml-10 mb-6">
        What really drives me
      </h2>
      <div
        id="textcontainer"
        className="max-w-screen-md mx-auto md:grid md:grid-cols-2 md:gap-8 p-4 text-black text-sm md:text-xl"
      >
        <div className="mb-8 md:mb-0">
          <motion.h3
            className="font-ultra mb-2 text-2xl text-neutral-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            Creativity
          </motion.h3>
          <motion.p
            id="first-text"
            className="font-lekton leading-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 5 }}
          >
            {firstText}
          </motion.p>
        </div>
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <Robo />
        </div>
        <div className="mb-8 md:mb-8 md:col-start-2 md:row-start-2">
          <motion.h3
            className="font-ultra mb-2 text-2x text-neutral-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            Communication
          </motion.h3>
          <motion.p
            id="second-text"
            className="font-lekton leading-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 5 }}
          >
            {secondText}
          </motion.p>
        </div>
        <div className="flex justify-center items-center mb-8 md:mb-0 md:col-start-1 md:row-start-2">
          <World />
        </div>
        <div className="mb-8 md:mb-0">
          <motion.h3
            className="font-ultra mb-2 text-2xl text-neutral-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            Accessibility
          </motion.h3>
          <motion.p
            id="third-text"
            className="font-lekton leading-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 5 }}
          >
            {thirdText}
          </motion.p>
        </div>
        <div className="flex justify-center items-center">
          <Flower />
        </div>
      </div>
    </section>
  );
}
