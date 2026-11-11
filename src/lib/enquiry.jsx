import emailjs from "@emailjs/browser";
import { showToast } from "./toast.jsx";

// Same shared EmailJS account as the owner's other sites (Ace / Eldeco / ATS /
// Samridhi static v2). Forms are wired here, inside React, so they work
// identically in `npm run dev` and in the prerendered production build.
export const EMAILJS_PUBLIC_KEY = "xLfYDZXLlR6IeQ-C6";
export const EMAILJS_SERVICE_ID = "service_fkmfynb";
export const EMAILJS_TEMPLATE_ID = "template_bdjcyq6";
export const WHATSAPP_NUMBER = "919953211815";

let inited = false;
function ensureInit() {
  if (!inited) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    inited = true;
  }
}

export function sourcePage() {
  if (typeof window === "undefined") return "";
  return window.location.pathname.replace(/\//g, "") || "index.html";
}

export function track(event, label) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, label: label || "" });
  if (typeof window.gtag === "function") window.gtag("event", event, { event_label: label || "" });
}

export function showThankYou(msg) {
  if (typeof document === "undefined") return;
  let ty = document.getElementById("thankyou-overlay");
  if (!ty) {
    ty = document.createElement("div");
    ty.id = "thankyou-overlay";
    ty.className = "thankyou-overlay";
    ty.innerHTML =
      '<div class="thankyou-card"><div class="ty-check">✓</div><h3>Thank You!</h3><p class="ty-msg"></p></div>';
    document.body.appendChild(ty);
  }
  ty.querySelector(".ty-msg").textContent = msg;
  ty.classList.add("show");
  setTimeout(() => ty.classList.remove("show"), 2600);
}

export function whatsappFallbackUrl(name, phone, item) {
  const text =
    "Hi! I am " + name + " (" + phone + "). I want to sell: " + item +
    ". (via " + (typeof window !== "undefined" ? window.location.pathname : "") + ")";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

// Sends one enquiry. Resolves on EmailJS success, rejects on failure.
// Params match the v2 static site's main.js exactly.
export async function sendEnquiry({ name, phone, item }) {
  ensureInit();
  const page = sourcePage();
  const params = {
    name,
    mobile: phone,
    email: "Not Provided",
    message: "Website enquiry (" + page + ") — wants to sell: " + item,
    from_name: name,
    phone,
    item_to_sell: item,
    source_page: page,
  };
  const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
  track("enquiry_submit", page);
  return res;
}

// React hook-free submit handler factory.
// `getItem(form)` extracts the item/message string from the form.
// `setStatus` receives: { state: "sending" } | { state: "ok" } |
// { state: "fail", name, phone, item }.
// `afterSuccess` optional (e.g. close the lead popup).
export function makeSubmitHandler(getItem, setStatus, afterSuccess) {
  return async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = (form.name.value || "").trim();
    const phone = (form.phone.value || "").trim();
    const item = getItem(form);
    setStatus({ state: "sending" });
    try {
      await sendEnquiry({ name, phone, item });
      setStatus({ state: "ok" });
      showThankYou("We've got your details — our team will call you shortly.");
      showToast("Enquiry sent! Our team will call you shortly.", "success");
      form.reset();
      if (afterSuccess) afterSuccess();
    } catch (err) {
      setStatus({ state: "fail", name, phone, item });
      showToast("Could not send online — tap the WhatsApp link below the form instead.", "error");
    }
  };
}

// Renders the status line under a form, matching v2 copy.
import React from "react";
export function EnquiryStatus({ status, defaultText }) {
  if (!status) return <>{defaultText}</>;
  if (status.state === "sending") return <>Sending…</>;
  if (status.state === "ok") return <>✅ Sent! Our team will call you shortly.</>;
  if (status.state === "fail")
    return (
      <>
        Could not send online.{" "}
        <a href={whatsappFallbackUrl(status.name, status.phone, status.item)} target="_blank" rel="noreferrer">
          Tap here to WhatsApp us instead →
        </a>
      </>
    );
  return <>{defaultText}</>;
}
