import { ShapeDeviderSix } from "../Shapes/shape-devider-six";

export const SectionSix = () => {
  return (
    <>
      <div className="bg-neutral-300">
        <ShapeDeviderSix />
      </div>
      <section
        id="section6"
        className="w-full h-auto bg-blue-300 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50"
      >
        <h2 className="font-ultra text-4xl lg:text-6xl pl-4 pr-4 pt-4 md:p-6 md:ml-10 text-neutral-700">
          You reached the end of the page
        </h2>
        <div className="flex flex-col md:flex-row justify-center w-full p-4 md:p-6 gap-6">
          <p className="font-lekton flex text-lg md:text-2xl w-full md:w-[400px] md:pl-6 md:pr-6">
            Yeah, that's it! That's my personal website, for now. I hope that I
            could give you a little insight on who I'm and what my interests
            are. This site will change over time as I increase on my journey.
            Maybe you like to check it out at a later point. To finish this
            little adventure, here is a picture of me facetiming with a hamster.
            Why? Just for fun. It's important to have a little fun every now and
            then. to enjoy things as they are.
          </p>
          <div>
            <img
              className="w-full h-auto"
              src="/Images/iphone.png"
              alt="Me Facetiming with a hamster"
            />
          </div>
        </div>
      </section>
    </>
  );
};
