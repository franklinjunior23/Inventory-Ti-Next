import Link from "next/link";

// PAGE LOGIN 
export default function Home() {
  return (
    <main className=' w-screen h-screen grid place-content-center'>
      <h3 className='text-2xl'>Login Page</h3>
      <Link href={'dashboard'}>Ir Al dashboard</Link>
    </main>
  )
}
