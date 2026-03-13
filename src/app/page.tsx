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
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />

      <main className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Logo / Brand name */}
        <h1 className="mb-1 text-5xl font-bold tracking-tight drop-shadow-lg sm:text-7xl">
          Blue Horizon
        </h1>
        <p className="mb-2 text-base font-semibold uppercase tracking-[0.25em] text-white/90 drop-shadow sm:text-lg">
          TEAM
        </p>
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-amber-300 drop-shadow">
          Charleston, South Carolina
        </p>

        {/* Divider */}
        <div className="mb-8 h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

        {/* Tagline */}
        <p className="mb-4 text-xl font-light leading-relaxed text-white drop-shadow-md sm:text-2xl">
          Your Lowcountry real estate experience,{" "}
          <span className="font-medium text-amber-200">reimagined.</span>
        </p>

        <p className="mb-12 max-w-md text-sm leading-relaxed text-white/70 drop-shadow">
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
        <p className="mt-1">&copy; 2026 BHC Coastal Services LLC</p>
      </footer>
    </div>
  );
}
