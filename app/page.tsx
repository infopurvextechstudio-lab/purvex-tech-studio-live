import Navbar from "@/components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070B14] pt-28">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold text-white">
            Purvex Tech Studio
          </h1>
        </section>
      </main>
    </>
  );
}