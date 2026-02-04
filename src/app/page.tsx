import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-white p-6 text-center overflow-hidden overscroll-none">
      <div className="max-w-md space-y-6">
        {/* Logo / Brand */}
        <div className="space-y-2">
          <Image src="/assets/logo.png" alt="Grail Logo" width={80} height={80} className="mx-auto mb-4" />
          <h1 className="text-6xl font-black tracking-tighter text-slate-900">
            GRAIL
          </h1>
          <p className="text-xl font-medium text-slate-500">
            Tu Wishlist Inteligente.
          </p>
        </div>

        {/* Value Prop */}
        <p className="text-slate-600 leading-relaxed">
          Guarda productos de cualquier tienda. Monitorea precios en tiempo real. 
          Disponible pronto en iOS.
        </p>

        {/* Beta Badge */}
        <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
          <span className="mr-1.5 relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          En Desarrollo (Beta Privada)
        </div>
      </div>

      {/* Footer Legal */}
      <footer className="absolute bottom-6 w-full text-center">
        <div className="flex justify-center gap-6 text-sm text-slate-400">
          <Link href="/legal/privacy" className="hover:text-slate-900 transition-colors">
            Privacidad
          </Link>
          <Link href="/legal/terms" className="hover:text-slate-900 transition-colors">
            Términos
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-300">
          © {new Date().getFullYear()} Grail App.
        </p>
      </footer>
    </main>
  );
}