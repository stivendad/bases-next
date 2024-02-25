import { Navbar } from "@/components";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center p-24">
        <samp className="text-lg">Hola Mundo</samp>
        {children}
      </main>
    </>
  );
}