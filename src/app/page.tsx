import Image from "next/image";
import EmailSignup from "./components/email-signup";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-white">
      {/* Background image */}
      <Image
        src="/bridge.jpg"
        alt="Arthur Ravenel Jr. Bridge at sunset, Charleston SC"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <main className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Brand mark */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/80">
            Charleston, SC
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        {/* Logo / Brand name */}
        <h1 className="mb-2 text-5xl font-bold tracking-tight drop-shadow-lg sm:text-6xl">
          Blue Horizon
        </h1>
        <p className="mb-6 text-lg font-light tracking-[0.15em] text-blue-200/80 sm:text-xl">
          TEAM
        </p>

        {/* Divider */}
        <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Tagline */}
        <p className="mb-4 text-xl font-light leading-relaxed text-white/90 drop-shadow sm:text-2xl">
          Your Lowcountry real estate experience,{" "}
          <span className="text-amber-300">reimagined.</span>
        </p>

        <p className="mb-12 max-w-md text-sm leading-relaxed text-white/60">
          Luxury homes, historic estates, and waterfront living in Charleston.
          We&apos;re building something special&mdash;stay tuned.
        </p>

        {/* Email signup */}
        <div className="mb-12 w-full flex justify-center">
          <EmailSignup />
        </div>

        {/* Social link */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/BlueHorizonCHS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 transition-colors hover:text-amber-300/80"
          >
            @BlueHorizonCHS
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 z-10 text-center text-[11px] leading-relaxed text-white/30">
        <p>
          Blue Horizon Team is a group of licensed real estate associates.
        </p>
        <p className="mt-1">
          &copy; 2026 BHC Coastal Services LLC &middot; Photo by{" "}
          <a
            href="https://unsplash.com/photos/q86md0sqdBA"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/50"
          >
            David Martin
          </a>{" "}
          on Unsplash
        </p>
      </footer>
    </div>
  );
}
