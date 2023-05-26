import Image from 'next/image';
import {AiOutlineCaretDown} from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-white to-gray min-h-screen">
        <div className="mx-5 md:mx-10 min-h-screen-full flex flex-col justify-between">

          <nav className="flex justify-between pt-5">
            <div className="text-darkgray font-bold md:text-lg tracking-wide p-2">
              <h1>NOGUERA.BITS</h1>
            </div>

            <div className="flex p-2">
              <h1 className="text-darkgray font-normal pr-1">CONTACTO</h1>
              <p className="pt-1 text-darkgray"><AiOutlineCaretDown/></p>
            </div>
          </nav>

          <div className="mt-14 ml-5 md:mt-10 md:ml-20">
            <h1 className="text-5xl md:text-9xl text-darkgray font-bold">Build Your</h1>
            <h1 className="mt-3 text-5xl md:text-9xl text-darkgray font-bold"> Dream Place.</h1>
          </div>

          <div className=''>
            <div className="absolute inset-x-0 bottom-0 flex justify-center h-96 min-w-full lg:h-96 md:min-w-full">
              <Image
                src="/casa.png"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left top' }}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-darkgray h-72 flex py-12 px-52 justify-between'>
        <div className='flex items-center'>
          <h1 className='font-bold text-6xl text-lightblue'>50+</h1>
          <p className='text-gray pl-5 text-xl'>Proyectos <br />Completados</p>
        </div>
        <div className='flex items-center'>
          <h1 className='font-bold text-6xl text-lightblue'>5+</h1>
          <p className='text-gray pl-5 text-xl'>Años de <br />Experiencia</p>
        </div>
        <div className='flex items-center'>
          <h1 className='font-bold text-6xl text-lightblue'>10+</h1>
          <p className='text-gray pl-5 text-xl'>Clientes <br />Felices</p>
        </div>
      </div>

    </main>
  );
}
