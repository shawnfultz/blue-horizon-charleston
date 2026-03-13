import EmailSignup from "./components/email-signup";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#0f1b2d] via-[#1a2e4a] to-[#0c1a2e] px-6 text-white">
      {/* Subtle decorative element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

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
        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-6xl">
          Blue Horizon
        </h1>
        <p className="mb-6 text-lg font-light tracking-[0.15em] text-blue-200/70 sm:text-xl">
          TEAM
        </p>

        {/* Divider */}
        <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* Tagline */}
        <p className="mb-4 text-xl font-light leading-relaxed text-white/80 sm:text-2xl">
          Your Lowcountry real estate experience,{" "}
          <span className="text-amber-300/90">reimagined.</span>
        </p>

        <p className="mb-12 max-w-md text-sm leading-relaxed text-white/50">
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
            className="text-sm text-white/40 transition-colors hover:text-amber-300/80"
          >
            @BlueHorizonCHS
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-[11px] leading-relaxed text-white/25">
        <p>
          Blue Horizon Team is a group of licensed real estate associates.
        </p>
        <p className="mt-1">&copy; 2026 BHC Coastal Services LLC</p>
      </footer>
    </div>
  );
}
