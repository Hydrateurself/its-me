export const NavBar = () => {
  return (
    <nav className="flex justify-center items-center text-red-100 w-full h-auto bg-neutral-300">
      <ul className="font-ultra p-2 flex gap-2 md:gap-10 w-full justify-center items-center border-4 border-red-100 rounded-full mt-2 mb-2 md:ml-4 md:mr-4 bg-red-500 shadow-xl cursor-pointer">
        <li>
          <a>Thats</a>
        </li>
        <li>
          <a href="#section3">Who</a>
        </li>
        <li>
          <a href="#section4">I</a>
        </li>
        <li>
          <a href="#section5">Am</a>
        </li>
        <li>
          <a href="#section6"> 🤍</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
