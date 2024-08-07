import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MotherBoardSvg from "../Animated/motherBoardSVG";
import ShapeDeviderSvg from "../Shapes/shape-devider";
import Modal from "../modal";

export const SectionOne = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
  return (
    <section
      id="section1"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <div className="absolute w-full h-screen bg-cover">
        <MotherBoardSvg />
      </div>
      <div
        id="background-div"
        className="flex justify-center items-center h-5/6"
      >
        <div className="rounded w-11/12 h-3/4 flex justify-center items-center flex-col shadow-2xl custom-backdrop border-4 border-neutral-300">
          <h1 className="font-ultra text-5xl lg:text-8xl text-red-50 p-8">
            Hey I'am <br /> Benedict
          </h1>
          <div>
            <motion.button
              onClick={toggleModal}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              className="font-lekton text-black font-bold text-xl rounded-full border-4 border-red-200 w-52 bg-red-100 py-2 px-4 active:bg-red-100"
            >
              Click Me!
            </motion.button>
          </div>
          <div className="flex flex-col justify-center items-center w-2/3 mt-6">
            <div className=" flex flex-col justify-center items-center h-50 bg-red-100 border-4 border-red-200 shadow-lg shadow-red-300 -mr-2 pb-2 text-xl z-10 rounded-md p-4 text-center">
              <p className="text-black text-sm flex m-auto font-lekton self-center font-bold pb-2 md:text-2xl">
                Try to solve the riddle, for some extra information!
              </p>
              <p className="flex font-barcode text-black text-sm md:text-2xl self center">
                Hey, let's build a better web and make it accessible to
                everyone. Who needs it? For a future of knowledge!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <ShapeDeviderSvg />
      </div>
      {modal ? <Modal toggleModal={toggleModal} /> : null}
    </section>
  );
};

export default SectionOne;
