export const NavBar = () => {
  return (
    <nav className="flex justify-center items-center text-red-100 w-full h-auto bg-black">
      <ul className="font-ultra pt-2 pb-2 pl-4 pr-4 flex gap-2 md:gap-10 w-auto justify-center items-start border-4 border-red-100 rounded-full mt-2 mb-2 md:ml-4 md:mr-4 bg-black shadow-xl cursor-pointer">
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
