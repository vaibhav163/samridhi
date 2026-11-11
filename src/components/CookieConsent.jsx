import React, { useState, useEffect, useCallback } from "react";
import { showToast } from "../lib/toast.jsx";

// Cookie consent banner + preferences panel.
// - Choice stored in localStorage under 'sgb-consent'.
// - Head sets gtag consent defaults to DENIED (see src/lib/head.js); this
//   component pushes a consent UPDATE once the visitor chooses, and
//   re-applies a stored choice silently on later visits.
// - Footer "Cookie Settings" link reopens the panel by dispatching the
//   'sgb-cookie-settings' window event.
// Renders nothing during SSR / before mount, so prerendered HTML and
// hydration always match.
const KEY = "sgb-consent";

function readStored() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function applyConsent(c) {
  const analytics = c.analytics ? "granted" : "denied";
  const marketing = c.marketing ? "granted" : "denied";
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analytics,
      ad_storage: marketing,
      ad_user_data: marketing,
      ad_personalization: marketing,
    });
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_analytics: c.analytics ? "granted" : "denied",
    consent_marketing: c.marketing ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      applyConsent(stored);
      setAnalytics(!!stored.analytics);
      setMarketing(!!stored.marketing);
    } else {
      const t = setTimeout(() => setBanner(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const openPrefs = useCallback(() => {
    const stored = readStored();
    if (stored) {
      setAnalytics(!!stored.analytics);
      setMarketing(!!stored.marketing);
    }
    setBanner(false);
    setPrefsOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("sgb-cookie-settings", openPrefs);
    return () => window.removeEventListener("sgb-cookie-settings", openPrefs);
  }, [openPrefs]);

  const save = (choice) => {
    const c = { necessary: true, analytics: !!choice.analytics, marketing: !!choice.marketing, ts: Date.now() };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(c));
    } catch (e) { /* storage unavailable — consent update still applies */ }
    applyConsent(c);
    setBanner(false);
    setPrefsOpen(false);
    showToast("Cookie preferences saved.", "success");
  };

  if (!banner && !prefsOpen) return null;

  return (
    <>
      {banner ? (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
          <p className="cookie-text">
            🍪 We use cookies to improve this site and measure visits. Analytics and marketing
            cookies run only if you allow them. Read our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <div className="cookie-btns">
            <button type="button" className="btn-gold cookie-btn" onClick={() => save({ analytics: true, marketing: true })}>Accept All</button>
            <button type="button" className="btn-outline cookie-btn" onClick={() => save({ analytics: false, marketing: false })}>Reject</button>
            <button type="button" className="cookie-customise" onClick={openPrefs}>Customise</button>
          </div>
        </div>
      ) : null}
      {prefsOpen ? (
        <div className="cookie-overlay" role="dialog" aria-modal="true" aria-labelledby="cookie-prefs-title">
          <div className="cookie-panel">
            <button type="button" className="cookie-close" aria-label="Close cookie settings" onClick={() => setPrefsOpen(false)}>×</button>
            <h3 id="cookie-prefs-title">Cookie Preferences</h3>
            <p className="cookie-panel-desc">Choose what this site may store. Essential cookies are always on — they keep the site working.</p>
            <div className="cookie-row">
              <div>
                <strong>Essential</strong>
                <p>Security, load balancing and remembering this very choice.</p>
              </div>
              <span className="cookie-always">Always on</span>
            </div>
            <div className="cookie-row">
              <div>
                <strong>Analytics</strong>
                <p>Google Tag Manager / Analytics — helps us see which pages help sellers most.</p>
              </div>
              <label className="cookie-switch">
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
                <span className="cookie-slider" aria-hidden="true"></span>
                <span className="cookie-switch-lbl">{analytics ? "On" : "Off"}</span>
              </label>
            </div>
            <div className="cookie-row">
              <div>
                <strong>Marketing</strong>
                <p>Advertising cookies used to measure and improve our campaigns.</p>
              </div>
              <label className="cookie-switch">
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
                <span className="cookie-slider" aria-hidden="true"></span>
                <span className="cookie-switch-lbl">{marketing ? "On" : "Off"}</span>
              </label>
            </div>
            <div className="cookie-btns cookie-panel-btns">
              <button type="button" className="btn-gold cookie-btn" onClick={() => save({ analytics, marketing })}>Save Preferences</button>
              <button type="button" className="btn-outline cookie-btn" onClick={() => save({ analytics: true, marketing: true })}>Accept All</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
