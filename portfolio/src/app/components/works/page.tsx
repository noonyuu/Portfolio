"use client";

import { useState } from "react";
import Image from "next/image";
import Close from "../../../../public/close.svg"

export default function Home({ image, title, detail, skills }: { image: string; title: string; detail: string; skills: Array<string> }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {!showModal && (
        <div className="flex justify-center">
          <div className="w-52 h-64 bg-white border border-gray-200 rounded-lg shadow" onClick={openModal}>
            <img src={image} alt="" className="w-52 h-28 rounded-tl-lg rounded-tr-lg" />
            <div className="h-32 text-center space-y-5 mt-5">
              <a href="#">
                <h5 className="font-mono text-sm font-bold tracking-tight text-gray-900">{title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
              <p className="text-black text-sm font-light">{detail}</p>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black w-2/3 p-4 rounded-lg relative lg:w-1/3 lg:p-8">
            <button onClick={closeModal} className="absolute -top-4 -right-4 p-2">
              <Image src={Close} alt="" className="h-8 w-8"></Image>
            </button>
            <img src={image} alt="" className="w-full rounded-lg" />
            <h2 className="my-4 text-center">{title}</h2>
            <p>{detail}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Skills</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {skills.map((skill, index) => (
                  <span key={index} className="ml-4">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
