const Header = () => {
  return (
    <div className="bg-[#1a7ca0] py-4 px-6 flex justify-between items-center rounded-sm md:m-3 m-0">
      <h1 className="text-white text-2xl font-bold md:ml:0 ml-9">
        Welcome back!
      </h1>
      <div className="flex items-center gap-4">
        <button className="text-white hover:bg-[#156b8c] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>
        <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/placeholder.svg?height=36&width=36"
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
