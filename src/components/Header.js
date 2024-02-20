function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="flex justify-between items-end">
            <div className="logo font-extrabold text-4xl">Duy Portfolio</div>
            <div>
              <ul className="flex gap-8">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 cursor-pointer hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 cursor-pointer hover:text-white"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 cursor-pointer hover:text-white"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
