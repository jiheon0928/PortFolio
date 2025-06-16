import Image from "next/image";
import { cardimage, contactInfo } from "./data/contactInfo";

export default function Introduce() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#181818] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="bg-white p-8 rounded-2xl w-[500px] flex flex-col md:flex-row items-center shadow-lg z-10">
        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-4 md:mb-0 md:mr-8">
          <Image
            src="/textures/introduce/jiheon.jpg"
            alt="profile"
            width={112}
            height={112}
            className="rounded-full"
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">이지헌</h1>
          <p className="text-lg text-gray-700 mb-2">Full Stack Developer</p>
          <div className="flex flex-col gap-1 text-gray-700 text-base mb-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{info.icon}</span>
                <span>{info.content}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-2">
            {cardimage.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="skill"
                width={28}
                height={28}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
