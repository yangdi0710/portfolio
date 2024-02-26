function Header() {
  return (
    <>
      <header>
        <div className="flex justify-between items-end mx-32 mt-10">
          <div className="logo font-extrabold text-4xl">Duy Portfolio</div>
          <div>
            <ul className="flex gap-8">
              <li>
                <a
                  href="#project"
                  className="text-gray-400 cursor-pointer hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-400 cursor-pointer hover:text-white"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  className="text-gray-400 cursor-pointer hover:text-white"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
