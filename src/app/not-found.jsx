import Link from "next/link";

function NotFound() {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
        <div>
            <h1 className='text-4xl font-bold text-center'>404</h1>
            <hr />
            <h3 className="text-center">Not Found</h3>

            <Link href="/" className="text-center text-slate-400 hover:cursor-pointer hover:text-slate-200 mt-4">Volver al inicio</Link>
        </div>
    </section>
  )
}

export default NotFound;