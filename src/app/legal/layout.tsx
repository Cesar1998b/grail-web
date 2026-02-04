import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="p-6 max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors">
          GRAIL APP
        </Link>
      </nav>
      {children}
    </>
  );
}