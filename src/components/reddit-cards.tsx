type Props = {
  description: string;
  title: string;
  src: string;
  alt: string;
};

export const Cards = ({ description, title, src, alt }: Props) => {
  return (
    <div
      id="card"
      className="flex flex-col h-auto w-[350px] text-white bg-black"
    >
      <div
        id="head"
        className="flex px-2 py-4  h-auto justify-between items-center"
      >
        <div id="head-left" className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            width="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="font-roboto">{title}</p>
        </div>
        <div id="head-right" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            width="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-auto ">
        <div id="description" className="flex w-[350px] h-auto content-center">
          <p className="fonto-roboto text-sm p-2"> {description}</p>
        </div>
        <div id="image" className="flex justify-center ">
          <img
            className="rounded-md object-fill w-full h-auto"
            src={src}
            alt={alt}
          />
        </div>
      </div>
      {/* ============================
          BEGIN OF FOOTER SECTION
          =========================== */}
      <div id="footer" className="flex flex-row gap-5 p-4">
        <div
          id="likes"
          className="flex justify-center w-20 h-auto rounded-3xl border-2 border-white border-solid"
        >
          <small className=" font-roboto font-bold">6354</small>
        </div>
        <div
          id="chats-symbol"
          className="flex flex-row justify-center w-20 h-auto rounded-3xl border-2 border-white border-solid gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            width="15px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <small className="font-roboto font-bold">335</small>
        </div>
        <div
          id="shared"
          className="flex justify-center w-[100px] h-auto rounded-3xl border-2 border-white border-solid gap-2"
        >
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
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <small className="font-bold">25 Tsd.</small>
        </div>
      </div>
    </div>
  );
};

export default Cards;
