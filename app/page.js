import Image from "next/image";
import Link from "next/link";
import Animated from "../components/Animated";
import styles from "./page.css";

export default function Home() {
  return (
    <main className="bg-amber-100">
      <section className="ressection grid grid-cols-2 h-screen">
          <div className=" res flex flex-col gap-4 items-center justify-center">
              <p className="head text-3xl font-bold text-center">
              The best URl shortener tool in the market
              </p>
              <div className=" py-10">
                <Animated/>
              </div>
              <p className="px-25  text-center">
                We are the most Straight forward Url shortener in the world.
                Shorten, share, and track your links with ease. Our URL Shortener turns long URLs into clean, memorable links that are perfect for social media, marketing campaigns, and everyday use—all in just one click.
              </p>
              <div className='flex gap-4 justify-start py-10 '>
                <Link href="/shorten"><button className='bg-amber-200 shadow-lg p-4 py-2 rounded-lg font-bold hover:bg-amber-400'>Try Now</button></Link>
                <Link target="_blank" href="/github"><button  className='bg-amber-200 shadow-lg p-4 py-2 rounded-lg font-bold hover:bg-amber-400'>Github</button></Link>
            </div>
          </div>
          <div className="image flex justify-start items-center relative">
              <Image className="mix-blend-darken"alt="an image of an vector" src={"/vector.avif"} fill="true"></Image>
          </div>
      </section>
    </main>  );
    
}
