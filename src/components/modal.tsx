type Props = {
  toggleModal: () => void;
};

export default function Modal({ toggleModal }: Props) {
  return (
    <div id="modal">
      <div
        onClick={toggleModal}
        id="overlay"
        className="flex justify-center items-center bg-black bg-opacity-70 w-full h-screen absolute p-4 top-0 left-0 right-0 bottom-0 z-10"
      >
        <div
          id="modal-content"
          className="flex flex-wrap w-[600px] h-auto bg-red-100 border-4 rounded-md p-4 border-red-200 text-black "
        >
          <h2>A little more detail...</h2>
          <p>
            I'm currently on the path of becoming a web developer. With this
            page I want to show you who I am and give you a little insight into
            my interests and my skills. If you want to follow me on this path
            Close this message, scroll down, and explore the site. Please note:
            This page is responsive, but some features won't work properly yet.
            For the full experience, please consider using desktop view. Have
            Fun!
          </p>
          <button className="flex m-auto p-4" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
