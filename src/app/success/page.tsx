'use client';

import { useRouter } from "next/navigation"

export default function Success() {
  const router = useRouter();
  return (
    <main className="h-screen bg-darkgray flex items-center justify-center">
      <div className='w-1/2 bg-white p-16 text-gray rounded-lg text-center'>
        <h1 className="text-3xl pb-4 font-bold text-darkgray">Gracias por comunicarse con nosotros! ✨</h1>
        <p className="text-lg text-darkgray">
          Le hemos enviado un correo. Nos comunicaremos con usted tan pronto como podamos.
        </p>
      </div>
    </main>
  )
}
