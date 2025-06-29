import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800 min-h-screen">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Ooops! Pagina no encontrada</p>
                    <p className="mt-4 mb-8 text-gray-600">Te sugerimos que vuelvas a la pagina principal</p>
                    <Link href={"/"} rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-black text-gray-50">
                        Volver a la pagina principal
                    </Link>
                </div>
            </div>
        </section>
    )
}