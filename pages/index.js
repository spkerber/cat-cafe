import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="WM Cafe - Home">
      <h2 className="text-center text-2xl font-bold my-4">WM Café Build Guide</h2>
      <div className="flex justify-center">
        <Image
          src="/images/cafe-sketch.jpg" // Adjust to your image path
          alt="WM Cafe Sketch"
          width={600}
          height={400}
          className="rounded-md shadow-lg"
        />
      </div>
      <p className="text-center text-lg my-4">
        A Cozy Space for Cats
      </p>
      <p className="text-center text-sm max-w-xl mx-auto">
        Inspired by traditional architecture and aesthetics, this build guide will help you create a perfect café hideaway for your feline friends.
      </p>
    </Layout>
  );
}