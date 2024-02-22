import Image from "next/image";
import icon from "../../public/rabbit.jpg";
import github from "../../public/github.svg";
import x from "../../public/x.jpg";
import Works from "./components/works/page";
import { Work, WorkItem } from "../works";

export default function Home() {
  const works = new Work();
  const list: WorkItem[] = works.View();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-Bar text-TextBlack fixed flex items-center justify-between w-full h-16 z-50">
        <div className="px-6 text-left">
          <h1 className="text-md sm:text-xl text-center sm:block">ぽーとふぉりお</h1>
        </div>
        <div className="px-6 text-right">
          <nav className="overflow-x-auto space-x-4 sm:space-x-8">
            <a href="#profile">Profile</a>
            <a href="#">Skills</a>
            <a href="#works">Works</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow z-40 mt-16">
        {/* アラート */}
        <div className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 rounded z-40" role="alert">
          <p className="font-bold">ただいま建築中。。。</p>
        </div>

        <div className="flex flex-col items-center w-full h-full">
          {/* profile */}
          {/* <div id="profile"> */}
          <h2 id="profile" className=" mb-8 text-TextBlack text-2xl tracking-widest pt-16">
            ~~Profile~~
          </h2>
          <div className="bg-slate-50 relative flex justify-center w-3/4 h-56 rounded-lg shadow-lg md:w-3/5 lg:w-2/5">
            <div className="w-full flex flex-row items-center justify-center space-x-16">
              <Image src={icon} alt="icon" objectFit="contain" className="w-28 h-28 rounded-full border" />
              <div className="flex flex-col items-center justify-center space-y-4">
                <ul className="text-xs text-gray-400 text-center">
                  <li>Name</li>
                  <li className="text-sm text-TextBlack">しみず</li>
                </ul>
                <ul className="text-xs text-gray-400 text-center">
                  <li>Jobs</li>
                  <li className="text-sm text-TextBlack">学生(26卒)</li>
                </ul>
              </div>
              <div className="absolute bottom-2 right-2 flex space-x-4">
                <a href="https://github.com/noonyuu">
                  <Image src={github} alt="github icon" width={30} height={30}></Image>
                </a>
                <a href="https://twitter.com/noonyuu">
                  <Image src={x} alt="github icon" width={25} height={25}></Image>
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* works */}
          {/* <div id="works"> */}
          <h2 id="works" className="mb-8 text-TextBlack text-2xl tracking-widest pt-16">
            ~~Works~~
          </h2>
          <div className="w-[60%] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:w-[50%]">
            {list.map((item, index) => (
              <Works key={index} image={item.image.src} title={item.title} detail={item.detail} skills={item.skills} member={item.member} />
            ))}
          </div>
          {/* </div> */}
        </div>
      </main>
      <footer className="bg-Bar text-TextBlack text-center mt-8">
        <p>&copy; 2024 - Copyright noonyuu.</p>
      </footer>
    </div>
  );
}
