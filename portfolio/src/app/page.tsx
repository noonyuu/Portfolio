import Image from "next/image";
import icon from "../../public/rabbit.jpg";
import github from "../../public/github.svg"
import x from "../../public/x.jpg"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white text-TextBlack fixed flex items-center justify-between w-full h-[5%] z-50 bg-opacity-40">
        <div className="px-6 text-left">
          <h1 className="text-lg sm:text-xl text-center hidden sm:block">ぽーとふぉりお</h1>
        </div>
        <div className="px-6 text-right">
          <nav className="overflow-x-auto space-x-4 sm:space-x-8">
            <a href="#profile">Profile</a>
            <a href="#">Skills</a>
            <a href="#">Works</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-BackGrand z-40">
        <div className="w-screen h-screen text-black">
          {/* profile */}
          <div id="profile" className="fixed top-[10%] left-1/2 -translate-x-1/2 flex justify-center bg-slate-50 w-3/4 h-1/4 rounded-lg shadow-lg md:w-3/5 lg:w-2/5">
            <div className="w-full flex flex-row justify-center items-center space-x-16">
              <Image src={icon} alt="icon" objectFit="contain" className="w-28 h-28 rounded-full border" />
              <div className="flex flex-col items-center justify-center space-y-4">
                <ul className="text-xs text-gray-400 text-center">
                  <li>Name</li>
                  <li className="text-sm text-TextBlack">しみず</li>
                </ul>
                <ul className="text-xs text-gray-400 text-center">
                  <li>Job</li>
                  <li className="text-sm text-TextBlack">学生(26卒)</li>
                </ul>
              </div>
              <div className="fixed bottom-2 right-2 flex space-x-4">
                <a href="https://github.com/noonyuu">
                  <Image src={github} alt="github icon" width={30} height={30}></Image>
                </a>
                <a href="https://twitter.com/noonyuu">
                  <Image src={x} alt="github icon" width={25} height={25}></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
