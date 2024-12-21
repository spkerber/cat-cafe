import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-stone-700 mb-8">Welcome to the Cat Café Build Guide</h2>
      
      <div className="relative w-full max-w-2xl mx-auto mb-8">
        <Image
          src="/WMCafeSketch.jpg"
          alt="Original WM Cafe Sketch"
          width={800}
          height={600}
          className="rounded-lg shadow-md"
          priority
        />
      </div>
      
      <p className="mt-8 text-stone-600 max-w-xl mx-auto">
        A cozy space inspired by traditional aesthetics, designed for our feline friends.
      </p>
    </div>
  )
}