"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Saxton Mortgage's borrower portal, embedded.
 *
 * Their embed does two things beyond dropping in an iframe, and both are load-bearing:
 *
 *  - Attribution. Ad click IDs and UTM tags land on *this* page's URL, not on theirs, so the
 *    values have to be handed across the frame boundary or a lead that came from an ad looks
 *    like it arrived from nowhere. They are passed twice on purpose: on the query string in case
 *    the widget reads them before it has a listener, and by postMessage in case the frame was
 *    already loaded. The widget is expected to tolerate receiving them twice.
 *  - Height. A cross-origin frame cannot be measured from out here, so the widget posts its own
 *    height as the form grows and shrinks, and we follow it. Without this the frame keeps a fixed
 *    height and the application scrolls inside a box.
 *
 * Only messages from Saxton's origin are read. Everything the widget sends is treated as data:
 * the height is clamped, and nothing else it sends is acted on.
 */
const ORIGIN = "https://sop.saxtonmortgage.com";
const SRC = `${ORIGIN}/w/portal`;
const WIDGET = "portal";

const MIN_HEIGHT = 240;
const MAX_HEIGHT = 6000;
/** Roughly the height of the portal's landing state, so the page does not jump on first paint. */
const INITIAL_HEIGHT = 620;

/** Ad platform click IDs and campaign tags Saxton records against a lead. */
const TRACKED = [
  "fbclid", "gclid", "gclsrc", "wbraid", "gbraid", "msclkid", "ttclid",
  "li_fat_id", "twclid", "state",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
];

function attributionParams(): Record<string, string> {
  const found: Record<string, string> = {};
  try {
    const q = new URLSearchParams(window.location.search);
    for (const key of TRACKED) {
      const value = q.get(key);
      if (value) found[key] = value;
    }
    // Campaign tags beyond the named ones: utm_* is an open convention, not a fixed list.
    q.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm_") && value && !found[key]) found[key] = value;
    });
  } catch {
    // A URL we cannot parse is not worth failing the embed over.
  }
  return found;
}

export default function SaxtonWidget() {
  const frame = useRef<HTMLIFrameElement>(null);
  const attribution = useRef<Record<string, string>>({});
  const [src, setSrc] = useState(SRC);
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  useEffect(() => {
    const params = attributionParams();
    attribution.current = params;
    const hasAny = Object.keys(params).length > 0;

    // Setting src only when there is something to add keeps the ordinary visit to a single load.
    if (hasAny) setSrc(`${SRC}?${new URLSearchParams(params).toString()}`);

    function send(target: Window | null) {
      if (!target) return;
      try {
        target.postMessage(
          { type: "saxton-widget-attribution", attribution: attribution.current },
          ORIGIN,
        );
      } catch {
        // The frame can be gone or still cross-origin-guarded; the widget asks again when ready.
      }
    }

    function onMessage(event: MessageEvent) {
      if (event.origin !== ORIGIN) return;
      const data = event.data;
      if (!data || typeof data !== "object") return;
      if (data.widget !== WIDGET) return;

      if (data.type === "saxton-widget-ready") {
        send(event.source as Window | null);
        return;
      }
      if (data.type === "saxton-widget-height") {
        const px = Math.round(Number(data.px) || 0);
        if (px > 0) setHeight(Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, px)));
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={frame}
      src={src}
      title="Saxton Mortgage borrower portal"
      onLoad={() => {
        if (Object.keys(attribution.current).length === 0) return;
        try {
          frame.current?.contentWindow?.postMessage(
            { type: "saxton-widget-attribution", attribution: attribution.current },
            ORIGIN,
          );
        } catch {
          // Same as above: the ready handshake covers it.
        }
      }}
      style={{ width: "100%", height, border: 0, display: "block" }}
      scrolling="no"
    />
  );
}
