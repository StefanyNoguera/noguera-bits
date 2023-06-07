'use client';

import Image from 'next/image';
import {AiOutlineCaretDown} from "react-icons/ai";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import ReactCurvedText from 'react-curved-text';

export default function Home() {

  const router = useRouter();

  const formik = useFormik ({
    initialValues: {
      name: '',
      email: '',
      message: '',
      terms: '',
      asunto: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, 'Debe tener 30 caracteres o menos')
        .required('Su Nombre y Apellido son Requeridos'),
      email: Yup.string()
        .email('Correo electrónico inválido')
        .required('Su Correo Electrónico es Requerido'),
      message: Yup.string()
        .max(300, 'Debe tener 300 caracteres o menos')
        .required('Un Mensaje es Requerido'),
      terms: Yup.array().required('Requerido'),
      asunto: Yup.string()
        .max(40, 'Debe tener 40 caracteres o menos')
        .required('Un Asunto es Requerido'),
    }),

    onSubmit: (values) => {
      console.log(values);
      router.push('/success')
    },

  });

  return (
    <main className='min-w-screen-full'>
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

          <div className="mt-14 ml-5 md:mt-10 md:ml-20 md:mr-10 flex justify-between">
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl text-darkgray font-bold">Construye</h1>
              <div className='lg:flex'>
                <h1 className="z-10 mt-3 mr-3 text-6xl md:text-8xl lg:text-9xl text-darkgray font-bold"> Tus</h1>
                <h1 className=" z-10 mt-3 mr-3 text-6xl md:text-8xl lg:text-9xl text-darkgray font-bold"> Sueños.</h1>
              </div>
            </div>

            <div className='md:mr-20 relative'>
              <ReactCurvedText width='300'
              height={300}
              cx='150'
              cy='150'
              rx='130'
              ry='130'
              startOffset={50}
              reversed={false}
              text='¡Lo hacemos bien desde la primera vez!'
              textProps={{"style": {"fontSize": "29"}}}
              textPathProps={{"fill": "#ffffff"}}
              tspanProps={{"dy": "-6"}}
              ellipseProps={{"style": "fill: #ff3300"}}
              svgProps={{"style": {"transform": "rotate(0deg)"}}} />
            </div>
          </div>


          <div className=''>
            <div className="absolute inset-x-0 bottom-0 flex justify-center h-96 min-w-full lg:h-96 md:min-w-full">
              <Image
                src="/casa.png"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left top' }}
                alt="Casa"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-darkgray p-8 md:h-72 flex md:py-12 md:px-52 justify-between'>
        <div className='md:flex md:items-center'>
          <h1 className='font-bold md:text-6xl text-2xl text-lightblue'>50+</h1>
          <p className='text-gray md:pl-5 md:text-xl'>Proyectos <br />Completados</p>
        </div>
        <div className='md:flex md:items-center'>
          <h1 className='font-bold md:text-6xl text-2xl text-lightblue'>2+</h1>
          <p className='text-gray md:pl-5 md:text-xl'>Años de <br />Experiencia</p>
        </div>
        <div className='md:flex md:items-center'>
          <h1 className='font-bold md:text-6xl text-2xl text-lightblue'>10+</h1>
          <p className='text-gray md:pl-5 md:text-xl'>Clientes <br />Felices</p>
        </div>
      </div>

      <div className='bg-white h-screen md:h-96 p-8'>
        <h1 className='font-bold text-2xl md:px-10 md:py-8 text-darkgray'>¿Por qué nosotros?</h1>

        <div className='lg:flex lg:justify-between md:px-10 md:pb-6'>
          {/* <div className='mr-7 '> */}
            <div className='py-4 md:pr-4'>
              <div className='flex items-center pb-3'>
                <h1 className='text-center px-3 py-1 text-lightblue text-xl font-bold bg-darkgray'>1</h1>
                <h1 className='font-bold text-xl text-darkgray pl-2'>Equipo Profesional</h1>
              </div>
              <p className='text-darkgray'>
              Nuestro equipo experto en construcción convierte ideas en realidad mediante técnicas y tecnologías vanguardistas,
              en estrecha colaboración con nuestros clientes.
              </p>
            </div>

            <div className='py-4 md:pr-4'>
              <div className='flex items-center pb-3'>
                <h1 className='text-center px-3 py-1 text-lightblue text-xl font-bold bg-darkgray'>2</h1>
                <h1 className='font-bold text-xl text-darkgray pl-2'>Calidad y Excelencia</h1>
              </div>
              <p className='text-darkgray'>
              Superamos expectativas con resultados excepcionales, utilizando materiales de calidad y técnicas de
              construcción innovadoras para crear espacios funcionales y hermosos.
              </p>
            </div>
          {/* </div> */}

          {/* <div className=''> */}
            <div className='py-4 md:pr-4'>
              <div className='flex items-center pb-3'>
                <h1 className='text-center px-3 py-1 text-lightblue text-xl font-bold bg-darkgray'>3</h1>
                <h1 className='font-bold text-xl text-darkgray pl-2'>Plazos y Presupuestos</h1>
              </div>
              <p className='text-darkgray'>
              Nuestro equipo de gestión de proyectos eficiente cumple con plazos y presupuestos acordados, manteniendo
              comunicación abierta y transparente con nuestros clientes.
              </p>
            </div>

            <div className='py-4'>
              <div className='flex items-center pb-3'>
                <h1 className='text-center px-3 py-1 text-lightblue text-xl font-bold bg-darkgray'>4</h1>
                <h1 className='font-bold text-xl text-darkgray pl-2'>Testimonios y Referencias</h1>
              </div>
              <p className='text-darkgray'>
              Nuestra prioridad es la satisfacción del cliente, respaldada por testimonios positivos que resaltan nuestra
              profesionalidad, atención al detalle y compromiso con la excelencia.
              </p>
            </div>
          {/* </div> */}
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className='md:flex w-full bg-darkgray h-screen'
        >

          <div className='flex-1 p-8 md:px-20 text-gray'>
            <h1 className='md:text-2xl text-xl pb-2 pt-3 md:pt-14 font-bold'>Contáctanos!</h1>
            <p className='md:text-lg text-md '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

            <div className='mt-4'>
              <div className='pb-4'>
                <label
                  className='block font-bold text-sm pb-2'
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name ? <div className='text-red-500'>{formik.errors.name}</div> : 'Nombre y Apellido'}
                </label>
                <input
                  className='border-2 border-gray p-2 w-full md:w-1/2 focus:outline-none focus:border-lightblue text-darkgray'
                  type="text"
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Escribe tu nombre y apellido'
                />
              </div>
            </div>

            <div className='mt-4'>
              <div className='pb-4'>
                <label
                  className='block font-bold text-sm pb-2'
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : 'Correo Electrónico'}
                </label>
                <input
                  className='border-2 border-gray p-2 md:w-1/2 w-full focus:outline-none focus:border-lightblue text-darkgray'
                  type="email"
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Escribe tu correo electrónico'
                />
              </div>
            </div>

            <div className='mt-4'>
              <div className='pb-4'>
                <label
                  className='block font-bold text-sm pb-2'
                  htmlFor="asunto"
                >
                  {formik.touched.asunto && formik.errors.asunto ? <div className='text-red-500'>{formik.errors.asunto}</div> : 'Asunto'}
                </label>
                <input
                  className='border-2 border-gray p-2 w-full md:w-1/2 focus:outline-none focus:border-lightblue text-darkgray'
                  type="text"
                  name='asunto'
                  value={formik.values.asunto}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Escribe tu asunto'
                />
              </div>
            </div>

            <div className='mt-4'>
              <div className='pb-4'>
                <label
                  className='block font-bold text-sm pb-2'
                  htmlFor="message"
                >
                  {formik.touched.message && formik.errors.message ? <div className='text-red-500'>{formik.errors.message}</div> : 'Mensaje'}
                </label>
                <textarea
                  className='border-2 border-gray p-2 w-full md:w-1/2 focus:outline-none focus:border-lightblue text-darkgray'
                  name='message'
                  rows={2}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Escribe tu mensaje'>
                </textarea>
              </div>
            </div>

            <div className='mt-4'>
              <div className='pb-4'>
                <label
                  className='block font-bold text-sm pb-2'
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms ? <div className='text-red-500'>{formik.errors.terms}</div> : 'Términos y Condiciones'}
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    name='terms'
                    value='checked'
                    onChange={formik.handleChange}
                    className='h-5 w-5 text-lightblue border-2 focus:outline-lightblue'
                  />
                  <p className="text-xs">
                  Al usar este formulario, aceptas proporcionar información precisa
                  y nos comprometemos a mantener tus datos personales confidenciales.
                  </p>
                </div>
              </div>
              <button type="submit" className='bg-lightblue font-bold text-sm text-darkgray py-3 mt-6 rounded-lg w-full'>Enviar</button>
            </div>

          </div>

          <div className='relative flex-1'>
          <Image
            src="/dos-personas-construccion.avif"
            fill
            priority
            className='object-cover'
            alt="Ingeniero en obra."
          />
          </div>
        </form>
      </div>

    </main>
  );
}
