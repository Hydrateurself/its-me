import { useState } from "react";
import ShapeDeviderFour from "../Shapes/shape-devider-four";
import { motion } from "framer-motion";

type Image = {
  id: number;
  src: string;
  alt: string;
  modalcontent: string;
};

type Props = {
  skills: Image[];
};

export const skillsData: Image[] = [
  {
    id: 1,
    src: "/Images/software-skills/bash.png",
    alt: "image of bash logo",
    modalcontent:
      "This is Bash. As a developer, this is my second home. My Terminal is my savespace. It also tells you something about my OS. 🤓",
  },
  {
    id: 2,
    src: "/Images/software-skills/bun.png",
    alt: "image of bun logo",
    modalcontent:
      "The Bun package installer. My package installer of choice at the moment. Right now I can't decide between NPM and Bun. I'am testing. One thing is for sure: this logo is cute as f$%*k!",
  },
  {
    id: 3,
    src: "/Images/software-skills/css3.png",
    alt: "image of css 3 logo",
    modalcontent: "CSS We know it, we love it. Style matters, Team Flexbox!",
  },
  {
    id: 4,
    src: "/Images/software-skills/docker.png",
    alt: "image of docker logo",
    modalcontent:
      "I just learned Docker, and I like it. Containerization for the win!",
  },
  {
    id: 5,
    src: "/Images/software-skills/express.png",
    alt: "image of express logo",
    modalcontent:
      "Let's have a look behind the scenes. Express helps me to manage the backend. It's definitely worth a look.",
  },
  {
    id: 6,
    src: "/Images/software-skills/git-hub.png",
    alt: "image of git hub logo",
    modalcontent:
      "I think I don't have to introduce this little kitty. Github, the Instagram of the tech industry. Follow me and leave a like. 😉",
  },
  {
    id: 7,
    src: "/Images/software-skills/git.png",
    alt: "image of git logo",
    modalcontent:
      "The power of VERSION CONTROL! Git is truly a lifesaver when working in a team.",
  },
  {
    id: 8,
    src: "/Images/software-skills/html5.png",
    alt: "image of html 5 logo",
    modalcontent:
      "HTML is the mother of the Internet. Still standing strong in the more and more dynamic World Wide Web.",
  },
  {
    id: 9,
    src: "/Images/software-skills/java-script.png",
    alt: "image of java script logo",
    modalcontent:
      "Let's get interactive. JavaScript revolutionized web development. People have all kinds of opinions on this. I like it. It's the foundation of my work.",
  },
  {
    id: 10,
    src: "/Images/software-skills/next.png",
    alt: "image of next logo",
    modalcontent:
      "Next.js combines the two worlds in one go. Front- and Backend. It simplyfies many things, and therefore I like this framework. I've done a few projects with it and need to gain more experience on this one. ",
  },
  {
    id: 11,
    src: "/Images/software-skills/npm.png",
    alt: "image of npm logo",
    modalcontent:
      "This is the first package installer I worked with. It recently got updated with some nice features and is now again a valid opponent to Bun. Though they still have the sweet logo.🤭",
  },
  {
    id: 12,
    src: "/Images/software-skills/postgres.png",
    alt: "image of postgres logo",
    modalcontent:
      "PostgreSQL is the database solution I chose to work with. I'm still open to new tools and databases. I like databases. 🤓",
  },
  {
    id: 13,
    src: "/Images/software-skills/react.png",
    alt: "image of react logo",
    modalcontent:
      "REACT, my go-to tool on this list. I really enjoy working with it. Even this site is built on top of React. Great library 10/10 would recommend.",
  },
  {
    id: 14,
    src: "/Images/software-skills/tailwind.png",
    alt: "image of tailwind logo",
    modalcontent:
      "Tailwind CSS takes styling to another level. I really like the default settings. Styling with tailwind is straight forward. ",
  },
  {
    id: 15,
    src: "/Images/software-skills/type-script.png",
    alt: "image of typescript logo",
    modalcontent:
      "Typsecript makes debugging for me a little easier. In Vanilla JS, things can get confusing. Having types is a great thing. ",
  },
  {
    id: 16,
    src: "/Images/software-skills/vs-code.png",
    alt: "image of vs code logo",
    modalcontent:
      "VS Code is for now my code editor of choice. I thought about changing to VIM and some point, but for now I stick with it.",
  },
];

export const SectionFour = ({ skills }: Props) => {
  const [hoveredItems, setHoveredItems] = useState<null | number>(null);

  return (
    <section id="section4" className="flex w-full h-auto flex-col bg-black">
      <div className="w-full">
        <ShapeDeviderFour />
      </div>
      <div>
        <h2 className=" font-ultra text-5xl lg:text-6xl text-red-50 p-4 mb-2 md:ml-10">
          Some tools i can work with
        </h2>
        <p className="font-lekton md:ml-10 p-4 text-xl text-red-50">
          Here is a little look inside my toolbox. These are the basis of my
          daily work. Hover over the fields to get some more information.
        </p>
      </div>
      <div className="w-auto h-auto flex items-center justify-center">
        <div className="max-w-screen-sm h-auto p-4 grid grid-cols-3 md:grid-cols-4 gap-10 ">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={skill.id}
              onMouseOver={() => setHoveredItems(skill.id)}
              onMouseLeave={() => setHoveredItems(null)}
              className="w-24 md:w-28 aspect-square p-4 border-4 border-red-200 rounded-md shadow-lg bg-red-50"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-full h-full object-contain"
              />
              {hoveredItems === skill.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    minWidth: "300px",
                    width: "min-content",
                    position: "fixed",
                    top: "30%",
                    left: skill.id % 4 ? "50%" : "-230%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    borderRadius: "8px",
                    zIndex: 10,
                  }}
                >
                  {skill.modalcontent}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
