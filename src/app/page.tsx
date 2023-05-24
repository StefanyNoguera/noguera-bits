import Image from 'next/image';
import {AiOutlineCaretDown} from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray min-h-screen">

      <div className="mx-10 h-full flex flex-col justify-between">

        <nav className="flex justify-between pt-7">
          <div className="bg-stone-800 text-stone-100 p-2">
            <h1>NOGUERA.BITS</h1>
          </div>

          <div className="flex p-2">
            <h1 className="text-stone-800">CONTACT</h1>
            <p className="pt-1"><AiOutlineCaretDown/></p>
          </div>
        </nav>

        <div className="flex-grow">
          <div className="absolute inset-x-0 bottom-0 flex justify-center h-80 min-w-full md:h-96 md:min-w-full">
            <Image
              src="/casa.png"
              fill= "relative"
              style={{ objectFit: 'cover', objectPosition: 'left top'}}
              alt="Picture of the author"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
