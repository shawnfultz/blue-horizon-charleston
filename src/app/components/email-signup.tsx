"use client";

import { useState, type FormEvent } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-center text-sm font-medium text-emerald-200">
        You&apos;re on the list. I&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-2.5">
      <label htmlFor="first-look-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="first-look-email"
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/45 focus:border-[#e5b95c] focus:outline-none focus:ring-1 focus:ring-[#e5b95c]/60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex-none rounded-xl bg-[#e5b95c] px-6 py-3 text-[15px] font-semibold text-[#0e2c40] transition-colors hover:bg-[#f0c977] disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Notify Me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-[13px] text-red-300">{errorMsg}</p>
      )}
    </form>
  );
}
