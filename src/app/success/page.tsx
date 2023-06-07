'use client';

import { useRouter } from "next/navigation"

export default function Success() {
  const router = useRouter();
  return (
    <main className="h-screen bg-darkgray flex items-center justify-center">
      <div className='md:w-1/2 bg-white mx-8 p-8 md:p-16 text-gray rounded-lg text-center'>
        <h1 className="md:text-3xl text-xl pb-4 font-bold text-darkgray">Gracias por comunicarse con nosotros! ✨</h1>
        <p className="md:text-lg text-md text-darkgray">
          Le hemos enviado un correo. Nos comunicaremos con usted tan pronto como podamos.
        </p>
      </div>
    </main>
  )
}
