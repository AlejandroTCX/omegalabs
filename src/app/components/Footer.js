import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center p-4  text-pantone-2020">
      <ul className="flex space-x-4 text-xl">
        <li className='flex flex-col'>
          <Link href="https://www.linkedin.com/in/alejandro-tolentino-cárdenas-8468511b7">
            Linkedin
            <Image 
            src="/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}/>
          </Link>
        </li>
        <li>
          <Link href="/about">
           about
          </Link>
        </li>
        {/* Añade más enlaces según sea necesario */}
      </ul>
    </footer>
  );
}
