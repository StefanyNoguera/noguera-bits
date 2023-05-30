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

      <h1 className='font-bold text-3xl md:m-12 text-darkgray'>¿Por qué nosotros?</h1>

      <div className='flex justify-between md:m-16'>
        {/* <div className='mr-7 '> */}
          <div className='m-5 '>
            <h1 className='font-bold text-xl text-darkgray'>Equipo Profesional</h1>
            <p>
            Nuestro equipo profesional altamente cualificado de arquitectos, ingenieros y expertos en
            construcción trabaja en estrecha colaboración con nuestros clientes para convertir sus ideas en
            realidad, utilizando técnicas y tecnologías de vanguardia.
            </p>
          </div>

          <div className='m-5'>
            <h1 className='font-bold text-xl text-darkgray'>Calidad y Excelencia</h1>
            <p>
            Nos enorgullece ofrecer resultados excepcionales en cada proyecto, superando las expectativas
            de nuestros clientes. Utilizamos los mejores materiales y técnicas de construcción para garantizar
            la calidad y durabilidad de nuestros proyectos, creando espacios funcionales y hermosos.
            </p>
          </div>
        {/* </div> */}

        {/* <div className=''> */}
          <div className='m-5'>
            <h1 className='font-bold text-xl text-darkgray'>Cumplimiento de Plazos y Presupuestos</h1>
            <p>
            Nuestro equipo de gestión de proyectos altamente capacitado planifica y coordina cada etapa de la
            construcción de manera eficiente. Nos comprometemos a cumplir con los plazos y presupuestos acordados,
            manteniendo una comunicación abierta y transparente con nuestros clientes.
            </p>
          </div>

          <div className='m-5'>
            <h1 className='font-bold text-xl text-darkgray'>Testimonios y Referencias</h1>
            <p>
            La satisfacción de nuestros clientes es nuestra prioridad. Hemos recibido testimonios positivos
            de clientes satisfechos que destacan nuestra profesionalidad, atención al detalle y compromiso con
            la excelencia. Nuestro historial de referencias y testimonios respalda nuestro enfoque centrado en el cliente.
            </p>
          </div>
        {/* </div> */}
      </div>

    </main>
  );
}
