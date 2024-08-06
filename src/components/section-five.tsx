import { useEffect, useState } from "react";
import axios from "axios";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
}

export const SectionFive = () => {
  const [apdodData, setApodData] = useState<ApodData | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchApodImage = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setApodData(response.data);
      } catch (error) {
        console.error("Error fetching APOD Image:", error);
      }
    };
    fetchApodImage();
  }, [apiKey]);

  if (!apdodData) return <div className="font-lekton bg-white">Loading...</div>;

  return (
    <section id="section5" className="w-full h-auto bg-neutral-300">
      <div className="pt-12 text-center md:text-left">
        <h2 className="font-ultra m-2 p-2 text-5xl lg:text-6xl text-black md:pt-10 md:pl-10 md:ml-10">
          Space is the Place
        </h2>
        <p className="font-lekton w-full text-xl m-auto md:ml-10 p-4 md:w-2/3 md:pl-10">
          I've always been fascinated by the Universe. This World we live in is
          such a unique and special place. So here is the Astronomical
          Image/Video of the Day as little reminder how beautiful this
          envoirenment is.
        </p>

        <div className="flex justify-center w-full h-auto">
          <div className="flex flex-col w-screen ml-10 mr-10 p-6">
            <h3 className=" flex font-ultra pt-4 pb-4 mb-2 text-3xl w-auto m-auto">
              {apdodData.title}
            </h3>
            {apdodData.media_type === "image" ? (
              <img
                src={apdodData.url}
                alt={apdodData.title}
                className="w-96 aspect-square md:w-2/5 m-auto"
              />
            ) : (
              <iframe
                className=" aspect-w-9 aspect-h-16 lg:m-auto lg:p-6 lg:w-2/3 lg:aspect-video"
                title={apdodData.title}
                src={apdodData.url}
                allow="encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
