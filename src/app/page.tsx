import { Navbar } from '@/components/home/navbar';

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Hello World</h1>
      </main>
    </>
  );
}