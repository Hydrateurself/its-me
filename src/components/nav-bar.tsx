export const NavBar = () => {
  return (
    <nav className="flex justify-center items-center text-red-100 w-full h-auto bg-neutral-300 overflow-hidden">
      <ul className="font-ultra p-2 flex gap-2 md:gap-10 w-full md:w-1/2 justify-center items-center border-4 border-red-100 rounded-full mt-2 mb-2 bg-red-500 shadow-xl cursor-pointer">
        <li>
          <a>Reddit</a>
        </li>
        <li>
          <a href="#section3">Principals</a>
        </li>
        <li>
          <a href="#section4">Skills</a>
        </li>
        <li>
          <a href="#section5">NASA</a>
        </li>
        <li>
          <a href="#section6">End</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
