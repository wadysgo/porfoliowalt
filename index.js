import '../../index.css'
import cv from '../../assets/CV.pdf'
import 'tailwindcss/dist/tailwind.css';

export function Inicio() {
    return <>

        <section id='inicio' className='w-full flex justify-center items-center
        cl:w-full cl:h-full cl:mt-20
        sm:w-full sm:h-screen
        md:w-full md:h-screen
        xl:w-full xl:flex xl:justify-center xl:items-center xl:h-full
        '>
            <div className='w-11/12 flex justify-center items-center
            cl:w-full cl:h-screen cl:flex-col
            sm:w-full sm:h-screen sm:flex-col
            xl:w-11/12 xl:m-0 xl:p-0 xl:h-full xl:flex-row
            '>

                <div className='inicio-info flex justify-center items-start flex-col text-white w-2/4
                cl:items-center cl:text-center
                sm:items-center sm:text-center
                xl:inicio-info xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-white xl:w-3/4 xl:full
                '

                >
                    <h4 className='text-3xl m-3 sombraTexto
                    cl:text-lg
                    sm:text-xl sm:m-0 sm:font-light
                    md:text-2xl
                    xl:text-3xl
                    '>Bienvenido, soy</h4>

                    <h2 className='text-7xl m-2 sombraTexto
                    cl:text-4xl
                    sm:text-5xl
                    md:text-5xl
                    xl:text-6xl
                    '>Walter Sanchez</h2>

                    <h6 className='text-xl m-3 font-extralight sombraTexto
                    cl:text-base
                    sm:text-lg
                    xl:text-xl
                    '> QA anality Software/ Analista Funcional Devops Junior</h6>


                    <a href={cv} download="Cv.pdf" className='ml-2
                    cl:m-0
                    sm:m-0
                    '>
                        <button className='mt-5 w-32 h-10 bg-red-600 rounded-full sombraImagen
                        cl:mt-1 cl:mb-5
                        sm:mt-1 sm:mb-5
                        xl:mt-5 xl:w-32 xl:h-10
                        '>Descargar Cv</button>
                    </a>

                </div>
                <div className='inicio-extra w-1/3 flex justify-center items-center flex-col text-white text-center
                cl:w-full cl:text-center
                cl:flex-col
                sm:flex-col
                md:w-2/3
                 xl:m-0 xl:inicio-extra xl:w-11/12 xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-white xl:text-center
                '>

                    <h4 className='text-sm font-medium text-orange-500 pl-14 sombraTexto
                    cl:text-sm cl:p-0
                    sm:text-sm sm:p-0
                    md:text-base
                    xl:p-0 
                    '>- - - - - - - - Sitio Web - - - - - - - -</h4>

                    <h6 className='font-extralight text-lg pl-14 sombraTexto
                    cl:p-0
                    sm:p-0
                    '>Bienvenido a mi Sitio Web,<br />
                    
                        aquí podras encontrar todo<br />
                        sobre mi, habilidades, estu-<br />
                        dios, contacto, etc.<br /></h6>

                    <h6 className='sombraTexto text-orange-500 font-extralight text-lg pl-14
                    cl:p-0 cl:text-sm
                    sm:p-0 sm:text-sm
                    md:text-lg
                    '>- - ¡Gracias por visitarme!. - -</h6>

                </div>
            </div>
        </section>
    </>
}