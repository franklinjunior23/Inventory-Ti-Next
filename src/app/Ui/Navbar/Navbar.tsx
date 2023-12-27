import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <header className="  bg-black/90 rounded-xl md:rounded-RadiosMd p-8 text-white">
      <Link
        href={"/dashboard"}
        className=" pb-8  border-b border-white/30 flex justify-center items-center text-xl gap-3"
      >
        <img
          src="https://www.intiscorp.com.pe/wp-content/uploads/2022/10/1-1-1.png"
          width={60}
          alt=""
        />
        <h2>INTISCORP</h2>
      </Link>
    </header>
  );
}
