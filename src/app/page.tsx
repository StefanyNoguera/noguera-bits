import Image from 'next/image';
import {AiOutlineCaretDown} from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray h-screen">

      <div className="mx-10">
        <section>
          <nav className="flex justify-between pt-7">
            <div className="bg-stone-800 text-stone-100 p-2">
              <h1>NOGUERA.BITS</h1>
            </div>

            <div className="flex p-2">
              <h1 className="text-stone-800">CONTACT</h1>
              <p className="pt-1"><AiOutlineCaretDown/></p>
            </div>

          </nav>
        </section>

      <section>
        <div className="pt-4 flex justify-center items-center flex-grow">
          <Image
            src="/casa.png"
            fill="inherit"
              
            alt="Picture of the author"
          />
        </div>
      </section>


      </div>
    </main>
  )
}
