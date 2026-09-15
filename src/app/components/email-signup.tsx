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
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-center text-sm font-medium text-emerald-800">
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
          className="min-w-0 flex-1 rounded-xl border border-[#d9dfe8] bg-white px-4 py-3 text-[15px] text-[#1a2332] shadow-sm placeholder:text-[#9aa4b2] focus:border-[#1a2332] focus:outline-none focus:ring-1 focus:ring-[#1a2332]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex-none rounded-xl bg-[#1a2332] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#2b3a55] disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Notify Me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-[13px] text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
