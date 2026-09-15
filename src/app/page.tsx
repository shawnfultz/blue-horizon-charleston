import Image from "next/image";
import Link from "next/link";
import EmailSignup from "./components/email-signup";

const PHONE = "(912) 272-8389";
const PHONE_HREF = "tel:+19122728389";
const EMAIL = "jenleecharleston@kw.com";

/* Ink on paper, with the photograph carrying the only dark area on the page. */
const INK = "#16202e";
const MUTED = "#5a6676";
const LINE = "#e3e8ef";
const PAPER = "#fbfaf8";
const SAND = "#f4f1ec";
const GOLD = "#b8862c";

export default function Home() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative flex min-h-[82svh] flex-col items-center justify-center px-6 py-24 text-center">
        <Image
          src="/bridge.jpg"
          alt="Arthur Ravenel Jr. Bridge at sunset, Charleston SC"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

        <div className="relative z-10 flex max-w-2xl flex-col items-center text-white">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200 drop-shadow">
            Charleston &middot; South Carolina
          </p>
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg sm:text-7xl">
            Blue Horizon
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] drop-shadow sm:text-base">
            Team
          </p>

          <div className="my-8 h-px w-28 bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />

          <p className="text-2xl font-light leading-snug drop-shadow-md sm:text-3xl">
            Buying or selling in the Lowcountry,{" "}
            <span className="font-medium text-amber-100">with someone in your corner.</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold shadow-lg transition-transform hover:scale-[1.02]"
              style={{ color: INK }}
            >
              Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-white/50 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Send an email
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- intro */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Jen Lee, REALTOR&reg;</Eyebrow>
          <p className="mt-5 text-[22px] font-light leading-relaxed sm:text-[26px]">
            I help buyers and sellers across Charleston and the surrounding islands, with Keller
            Williams Realty Charleston-West Ashley.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- about */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl px-7 py-12 sm:px-14 sm:py-16" style={{ background: SAND }}>
            <Eyebrow>About Jen</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A different background, on purpose.
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed" style={{ color: MUTED }}>
              <p>
                Before real estate I spent my career in healthcare, most recently as an outpatient
                care manager, with a master&apos;s degree in social work behind it. That work was
                advocacy: sitting with people during complicated, high-stakes decisions, listening
                properly, and finding the option that actually fits them.
              </p>
              <p>
                A home is not a transaction to get through. It is where the rest of your life
                happens, and the decision deserves someone who slows down, explains the parts that
                are confusing, and says plainly when something is not right for you.
              </p>
              <p>
                That is what I bring to buying and selling: care with the details, straight answers,
                and the patience to make sure you understand every document you sign.
              </p>
            </div>

            <dl
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-8 sm:grid-cols-4"
              style={{ borderColor: "#e2ddd4" }}
            >
              <Fact label="License" value="SC #147724" />
              <Fact label="Brokerage" value="KW Charleston-West Ashley" />
              <Fact label="Serving" value="Charleston & the islands" />
              <Fact label="Works with" value="Buyers & sellers" />
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ services */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>How I help</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Whichever side of the deal you are on.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card
              title="Buying"
              body="From the first tour to the closing table. I explain what you are signing, flag what inspections turn up, and negotiate with your interests in front."
            />
            <Card
              title="Selling"
              body="Pricing grounded in what is actually happening on your street, preparation that earns its cost back, and marketing that reaches the people who buy here."
            />
            <Card
              title="Relocating"
              body="New to the Lowcountry? I will walk you through neighbourhoods, commutes, flood zones and what living here is really like before you commit."
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- areas */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Where I work</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Charleston and the Lowcountry
          </h2>
          <ul className="mt-9 flex flex-wrap justify-center gap-2.5">
            {[
              "Downtown Charleston",
              "West Ashley",
              "Mount Pleasant",
              "James Island",
              "Johns Island",
              "Daniel Island",
              "Sullivan's Island",
              "Isle of Palms",
              "Folly Beach",
              "North Charleston",
              "Summerville",
              "Goose Creek",
            ].map((area) => (
              <li
                key={area}
                className="rounded-full border bg-white px-4 py-2 text-[13px]"
                style={{ borderColor: LINE, color: MUTED }}
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ firstlook */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-3xl border px-7 py-12 text-center sm:px-14"
            style={{ background: "#ffffff", borderColor: LINE }}
          >
            <Eyebrow>First Look List</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              See it before it hits the feeds.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: MUTED }}>
              An occasional note when something worth knowing about comes up: a listing before it
              goes live, or a straight read on where the Charleston market actually is. No spam, and
              you can leave any time.
            </p>
            <div className="mt-8">
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- contact */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s talk about your move.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: MUTED }}>
            No pressure and no obligation. Even if you are a year out, it is worth a conversation
            now so the timing works when you are ready.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="w-full rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ background: INK }}
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-full rounded-full border bg-white px-7 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#f4f1ec] sm:w-auto"
              style={{ borderColor: LINE, color: INK }}
            >
              {EMAIL}
            </a>
          </div>

          <p className="mt-9 text-[13px] leading-relaxed" style={{ color: MUTED }}>
            Keller Williams Realty Charleston-West Ashley
            <br />
            1180 Sam Rittenberg Blvd, Suite 300, Charleston, SC 29407
          </p>

          <a
            href="https://instagram.com/BlueHorizonCHS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[13px] font-medium transition-opacity hover:opacity-70"
            style={{ color: GOLD }}
          >
            @BlueHorizonCHS
          </a>
        </div>
      </section>

      {/* -------------------------------------------------------------- footer */}
      <footer className="border-t px-6 py-12" style={{ borderColor: LINE, background: SAND }}>
        <div
          className="mx-auto max-w-4xl text-center text-[12px] leading-relaxed"
          style={{ color: MUTED }}
        >
          <p>
            Jen Lee, REALTOR<span className="align-super text-[9px]">&reg;</span>, South Carolina
            license #147724. Blue Horizon Team is a group of licensed real estate associates with
            Keller Williams Realty Charleston-West Ashley. Each Keller Williams
            <span className="align-super text-[9px]">&reg;</span> office is independently owned and
            operated.
          </p>
          <p className="mt-3">Equal Housing Opportunity. &copy; 2026 BHC Coastal Services LLC.</p>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/integrations/docusign" className="transition-opacity hover:opacity-70">
              Docusign integration
            </Link>
            <a href="https://blue-horizon-portal.vercel.app" className="transition-opacity hover:opacity-70">
              Agent portal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.25em]"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        className="text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "#8b7f6d" }}
      >
        {label}
      </dt>
      <dd className="mt-1.5 text-[14px] font-semibold leading-snug">{value}</dd>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="rounded-2xl border bg-white p-7 shadow-[0_1px_3px_rgba(22,32,46,0.05)]"
      style={{ borderColor: LINE }}
    >
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: MUTED }}>
        {body}
      </p>
    </div>
  );
}
