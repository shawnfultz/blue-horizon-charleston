import Image from "next/image";
import Link from "next/link";
import EmailSignup from "./components/email-signup";

const PHONE = "(912) 272-8389";
const PHONE_HREF = "tel:+19122728389";
const EMAIL = "jenleecharleston@kw.com";

export default function Home() {
  return (
    <div className="bg-[#0f1520] text-white">
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative flex min-h-[92svh] flex-col items-center justify-center px-6 py-20 text-center">
        <Image
          src="/bridge.jpg"
          alt="Arthur Ravenel Jr. Bridge at sunset, Charleston SC"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0f1520]" />

        <div className="relative z-10 flex max-w-2xl flex-col items-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300/90 drop-shadow">
            Charleston &middot; South Carolina
          </p>
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg sm:text-7xl">
            Blue Horizon
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/85 drop-shadow sm:text-base">
            Team
          </p>

          <div className="my-8 h-px w-28 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <p className="text-2xl font-light leading-snug drop-shadow-md sm:text-3xl">
            Buying or selling in the Lowcountry,{" "}
            <span className="font-medium text-amber-200">with someone in your corner.</span>
          </p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 drop-shadow">
            I&apos;m Jen Lee, a REALTOR<span className="align-super text-[10px]">&reg;</span> with
            Keller Williams Realty Charleston-West Ashley. I help buyers and sellers across
            Charleston and the surrounding islands.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-amber-400 px-7 py-3.5 text-[15px] font-semibold text-[#1a2332] transition-colors hover:bg-amber-300"
            >
              Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10"
            >
              Send an email
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- about */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
            About Jen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A different background, on purpose.
          </h2>
          <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-white/70">
            <p>
              Before real estate I spent my career in healthcare, most recently as an outpatient
              care manager, with a master&apos;s degree in social work behind it. That work was
              advocacy: sitting with people during complicated, high-stakes decisions, listening
              properly, and finding the option that actually fits them.
            </p>
            <p>
              A home is not a transaction to get through. It is where the rest of your life
              happens, and the decision deserves someone who slows down, explains the parts that
              are confusing, and tells you plainly when something is not right for you.
            </p>
            <p>
              That is what I bring to buying and selling: care with the details, straight answers,
              and the patience to make sure you understand every document you sign.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            <Fact label="License" value="SC #147724" />
            <Fact label="Brokerage" value="KW Charleston-West Ashley" />
            <Fact label="Serving" value="Charleston &amp; the islands" />
            <Fact label="Works with" value="Buyers &amp; sellers" />
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------ services */}
      <section className="border-y border-white/10 bg-[#131b29] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
            How I help
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Whichever side of the deal you are on.
          </h2>

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
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
            Where I work
          </p>
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
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[13px] text-white/75"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ firstlook */}
      <section className="border-y border-white/10 bg-[#131b29] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
            First Look List
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            See it before it hits the feeds.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/65">
            An occasional note when something worth knowing about comes up: a listing before it
            goes live, or a straight read on where the Charleston market actually is. No spam, and
            you can leave any time.
          </p>
          <div className="mt-9 w-full">
            <EmailSignup />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- contact */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s talk about your move.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
            No pressure and no obligation. Even if you are a year out, it is worth a conversation
            now so the timing works when you are ready.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="w-full rounded-full bg-amber-400 px-7 py-3.5 text-[15px] font-semibold text-[#1a2332] transition-colors hover:bg-amber-300 sm:w-auto"
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-full rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              {EMAIL}
            </a>
          </div>

          <p className="mt-9 text-[13px] leading-relaxed text-white/45">
            Keller Williams Realty Charleston-West Ashley
            <br />
            1180 Sam Rittenberg Blvd, Suite 300, Charleston, SC 29407
          </p>

          <a
            href="https://instagram.com/BlueHorizonCHS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[13px] text-white/45 transition-colors hover:text-amber-300/80"
          >
            @BlueHorizonCHS
          </a>
        </div>
      </section>

      {/* -------------------------------------------------------------- footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center text-[12px] leading-relaxed text-white/35">
          <p>
            Jen Lee, REALTOR<span className="align-super text-[9px]">&reg;</span>, South Carolina
            license #147724. Blue Horizon Team is a group of licensed real estate associates with
            Keller Williams Realty Charleston-West Ashley. Each Keller Williams
            <span className="align-super text-[9px]">&reg;</span> office is independently owned and
            operated.
          </p>
          <p className="mt-3">
            Equal Housing Opportunity. &copy; 2026 BHC Coastal Services LLC.
          </p>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/integrations/docusign"
              className="transition-colors hover:text-white/70"
            >
              Docusign integration
            </Link>
            <a
              href="https://blue-horizon-portal.vercel.app"
              className="transition-colors hover:text-white/70"
            >
              Agent portal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
        {label}
      </dt>
      <dd className="mt-1.5 text-[14px] font-medium leading-snug text-white/85">{value}</dd>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-white/65">{body}</p>
    </div>
  );
}
