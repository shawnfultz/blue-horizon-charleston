import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docusign Integration | Blue Horizon Team",
  description:
    "How the Blue Horizon Team uses the Docusign eSignature API to prepare, send and file South Carolina REALTORS® forms for our clients.",
  openGraph: {
    title: "Docusign Integration | Blue Horizon Team",
    description:
      "How the Blue Horizon Team uses the Docusign eSignature API to prepare, send and file South Carolina REALTORS® forms.",
    url: "https://bluehorizoncharleston.com/integrations/docusign",
    siteName: "Blue Horizon Team",
    locale: "en_US",
    type: "article",
  },
};

/* Same coastal palette as the homepage: deep ocean masthead, light body below it. */
const INK = "#0d2436";
const MUTED = "#52687c";
const MIST = "#f7fafc";
const SHALLOW = "#e7f0f6";
const DEEP = "#0e2c40";
const BRASS = "#c08f31";
const LINE = "#d6e5ee";

export default function DocusignIntegration() {
  return (
    <div className="min-h-screen" style={{ background: MIST, color: INK }}>
      <header className="px-6 py-14 text-white sm:py-20" style={{ background: DEEP }}>
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-white/45 transition-colors hover:text-white/80">
            &larr; Blue Horizon Team
          </Link>
          <p
            className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#e5b95c" }}
          >
            Integration overview
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Docusign eSignature</h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/70">
            A private integration that prepares South Carolina REALTORS
            <span className="align-super text-xs">&reg;</span> forms, sends them for signature
            through Docusign, and files the signed copies. Built for and used by the licensed
            agents of the Blue Horizon Team.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Section title="Who uses it">
          <p>
            This is an internal business tool. It is used by licensed real estate agents of the Blue
            Horizon Team, operating through BHC Coastal Services LLC in Charleston, South Carolina.
            It is not sold, resold, licensed or distributed to other companies, and no other
            organization operates it.
          </p>
          <p>
            Buyers and sellers never sign in to the tool. They receive a normal Docusign signing
            request by email and sign in Docusign, exactly as they would with any other agent.
          </p>
        </Section>

        <Section title="What it does">
          <p>
            Real estate contracts in South Carolina are standard forms published by South Carolina
            REALTORS<span className="align-super text-xs">®</span>. The same details get written onto
            them over and over: the brokerage, the licence number, the property, the price, the
            deadlines. Doing that by hand invites mistakes on documents that are legally binding.
          </p>
          <ol className="mt-5 space-y-3">
            <Step n={1}>
              The agent picks a form and the people signing it, then fills in the terms of the deal.
            </Step>
            <Step n={2}>
              The tool renders a preview of the completed document and checks it before anything is
              sent: brokerage details present, a buyer selected, the key terms filled in.
            </Step>
            <Step n={3}>
              An envelope is created from a stored Docusign template. Signature, initial, date, text
              and checkbox fields are positioned to match the printed form. Signers who are not part
              of this transaction are removed, so a single-buyer contract does not carry empty
              signature lines.
            </Step>
            <Step n={4}>
              Docusign emails each signer in the correct order. A buyer signs first, the agent or the
              other party follows.
            </Step>
            <Step n={5}>
              Status returns to the tool as signing progresses. When the envelope completes, the
              signed document and the certificate of completion are filed automatically.
            </Step>
          </ol>
        </Section>

        <Section title="Forms it handles">
          <ul className="space-y-2.5">
            <Item>
              South Carolina Disclosure of Real Estate Brokerage Relationships, which state law
              requires at first substantive contact.
            </Item>
            <Item>
              SCR Form 130, Exclusive Right to Buy/Lease Buyer Agency Contract.
            </Item>
            <Item>
              SCR Form 310, Agreement to Buy and Sell Real Estate (Residential).
            </Item>
          </ul>
        </Section>

        <Section title="How it uses the Docusign API" tone={SHALLOW}>
          <p>
            The integration uses the Docusign eSignature REST API and authenticates with the JWT
            Grant flow, using an RSA key pair. No Docusign password is ever collected or stored.
          </p>
          <ul className="mt-5 space-y-2.5">
            <Item>
              <Term>Templates</Term> — each blank form is stored once as a Docusign template with the
              field positions that match the printed document.
            </Item>
            <Item>
              <Term>Envelopes and recipients</Term> — an envelope is created from a template for a
              specific transaction, field values are applied, unused recipients are removed, and the
              envelope is sent.
            </Item>
            <Item>
              <Term>Embedded views</Term> — the agent can open the envelope inside Docusign to review
              the tagged document before it goes out.
            </Item>
            <Item>
              <Term>Docusign Connect</Term> — signing progress is received over a webhook, verified
              with an HMAC signature, so status stays current without polling.
            </Item>
            <Item>
              <Term>Documents</Term> — once complete, the signed PDF and the certificate of completion
              are retrieved and filed with the transaction record.
            </Item>
          </ul>
        </Section>

        <Section title="Information it holds">
          <p>
            Only what is needed to produce a contract: the name, email and phone number of the people
            signing, the terms of the transaction, and the resulting signed documents. This is stored
            in a private database hosted in the United States and reached over encrypted connections.
          </p>
          <p>
            Access is limited to the agents of the Blue Horizon Team. Nothing is sold, shared with
            advertisers, or used for any purpose beyond completing the transaction the client asked
            us to handle. Docusign remains the system of record for signatures and audit trails.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Technical questions about this integration, including from Docusign, can go to{" "}
            <a
              href="mailto:shawn@1322customs.com"
              className="font-medium underline-offset-4 hover:underline" style={{ color: BRASS }}
            >
              shawn@1322customs.com
            </a>
            .
          </p>
        </Section>

        <footer className="mt-16 border-t pt-8 text-xs leading-relaxed" style={{ borderColor: LINE, color: MUTED }}>
          <p>
            Blue Horizon Team is a group of licensed real estate associates with Keller Williams
            Realty Charleston-West Ashley. Each Keller Williams<span className="align-super">®</span>{" "}
            office is independently owned and operated. © 2026 BHC Coastal Services LLC.
          </p>
          <p className="mt-3">
            Docusign is a trademark of Docusign, Inc. This page describes how we use their product
            and is not published by or affiliated with Docusign.
          </p>
        </footer>
      </div>
    </div>
  );
}

function Section({
  title,
  tone,
  children,
}: {
  title: string;
  tone?: string;
  children: React.ReactNode;
}) {
  if (tone) {
    return (
      <section className="mb-11 rounded-2xl px-7 py-9 sm:px-9" style={{ background: tone }}>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
        <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: MUTED }}>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="mb-11 border-t pt-9 first:border-t-0 first:pt-0" style={{ borderColor: LINE }}>
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: MUTED }}>
        {children}
      </div>
    </section>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span
        className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ background: BRASS }}
      >
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: BRASS }} />
      <span>{children}</span>
    </li>
  );
}

function Term({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold" style={{ color: INK }}>{children}</span>;
}
