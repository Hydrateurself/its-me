import { Cards } from "./reddit-cards";
import { VideoCards } from "./video-card";

export const SectionTwo = () => {
  return (
    <section
      id="section2"
      className="w-full h-200 flex flex-col bg-green-200 bg-gradient-to-b from-green-200 via-green-100 to-green-200 overflow-hidden"
    >
      <div className="m-2 p-2 w-3/4 md:ml-10">
        <h2 className="flex font-ultra text-5xl lg:text-6xl mb-6 mt-2 text-black">
          It's me, i guess...
        </h2>
        <p className="font-lekton text-black w-auto md:w-96 text-xl">
          How do you get to know a person best? Naturally, through their
          algorithm. I created my personal feed from a forum I enjoy scrolling
          sometimes. I'am not that obsessed with social media, but this app got
          my attention for sure!
        </p>
      </div>
      <div
        id="reddit-whole"
        className="m-auto mb-16 w-[370px] bg-black border-8 filter shadow-xl shadow-black rounded-3xl border-gray-500"
      >
        <div
          id="top-middle"
          className="w-[150px] h-[15px] mx-auto bg-gray-500 rounded-b-lg"
        ></div>
        <div
          id="reddit-head"
          className="flex flex-row justify-between p-2 items-center max-w-[375px]"
        >
          <div id="reddit-head-left" className="flex flex-row gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <h2 className="text-orange-500 font-roboto-700 text-2xl font-bold">
              bene
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              width="15px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div id="reddit-head-right" className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <img
              src="Images/profile.png"
              alt="A Profile Picture of me in an elipse"
            />
          </div>
        </div>
        <div
          id="reddit-content"
          className="w-full h-[600px] flex flex-col items-center justify- overflow-y-scroll scroll-smooth gap-3 scrollbar-hide"
        >
          <Cards
            title="b/cats"
            description="Yeah so basically I love my Cats. I mean, look at them! The're sooo cute."
            src="/Images/cats.png"
            alt="A picture of my two cats sitting on a couch"
          />
          <Cards
            title="b/piano"
            description="This is my Piano. I love playing the keys and exploring the world of sound. Music in genral plays a big role in my life"
            src="/Images/piano.jpeg"
            alt="A picture of my piano"
          />
          <Cards
            title="b/drums"
            description="God is in the rhythm! I always wanted to play drums as a kid. Unfortenatly this could not happen. Now i fullfilled my dream and started learning the drums one year ago."
            src="/Images/drums.jpeg"
            alt="A picture of two drum sticks laying on a snare drum"
          />
          <VideoCards
            title="b/skate"
            description="Skateboarding has been a big part of my life for almost 13 years. I alwyas enjoyed the freedom of riding a skateboard and just be who you are. Nowadays I don't skate much anymore"
            src="/Images/skate.MP4"
            alt={"A video of me skating"}
          />
          <Cards
            title="b/family"
            description="This is me and my dad. I love him! He always supports me in what I'am doing no matter what."
            src="/Images/me-and-dad.jpeg"
            alt="A picture of me and my dad"
          />
          <Cards
            title="b/outdoor"
            description="Being in the woods feels good. I enjoy wandering through nature with my girlfriend"
            src="/Images/zig-zag-wanderer.jpeg"
            alt="A picture of me wandering in the woods"
          />
          <Cards
            title="b/friends"
            description="Fun with friends while camping. We eat pretty well in the wild i guess."
            src="/Images/zwenki.jpeg"
            alt="A picture of some food on a camp fire."
          />
          <Cards
            title="b/bike"
            description="I want to ride my bicycle bicycle bicycle!"
            src="/Images/bike.jpeg"
            alt="A picture of my bike."
          />
        </div>
        <div
          id="reddit-bottom"
          className="w-[375px] h-auto flex flex-row justify-around py-2"
        >
          <div id="home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div id="community">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </div>
          <div id="plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div id="chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
          <div id="notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
