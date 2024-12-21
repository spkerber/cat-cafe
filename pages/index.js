import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-12 text-center">
        WM Café Build Guide
      </h1>

      {/* Image and Description Container */}
      <div className="mb-16">
        {/* Sketch Image */}
        <div className="relative w-full mb-8">
          <Image
            src="/WMCafeSketch.jpg"
            alt="Original Cat Cafe Sketch"
            width={800}
            height={600}
            className="rounded-lg shadow-md mx-auto"
            priority
          />
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            A Cozy Space for Cats
          </h2>
          <p className="text-lg mb-8 text-neutral-600">
            Inspired by traditional architecture and aesthetics, this build guide will help you create a perfect café hideaway for your feline friends.
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <Link 
              href="/schematic"
              className="inline-block px-6 py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            >
              View Schematic
            </Link>
            <Link 
              href="/instructions"
              className="inline-block px-6 py-3 rounded-lg border border-neutral-800 text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Read Instructions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}