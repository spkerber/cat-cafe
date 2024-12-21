import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          WM Café Build Guide
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-32 mb-32">
        <div className="relative mb-8 md:mb-16">
          <Image
            src="/WMCafeSketch.jpg"
            alt="Original WM Cafe Sketch"
            width={800}
            height={600}
            className="shadow-small hover:shadow-medium transition-shadow duration-200"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            A Cozy Space for Cats
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Inspired by traditional architecture and aesthetics, this build guide will help you create a perfect café hideaway for your feline friends.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/schematic"
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View Schematic
            </Link>
            <Link 
              href="/instructions"
              className="bg-transparent hover:bg-black hover:text-white text-black font-bold py-3 px-12 lg:px-8 border border-black duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Instructions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}