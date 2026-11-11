// Samridhi Gold Buyers — shared site behaviour (v2, React build)
// NOTE: Enquiry FORMS are wired inside React (src/lib/enquiry.js, using the
// @emailjs/browser package) so they work in dev AND production. This file
// only handles: click tracking, mobile menu, FAQ accordion, trust strip,
// and the lead-popup show/close behaviour. Do NOT add form wiring here —
// it would double-send with the React handlers.
document.addEventListener('DOMContentLoaded', function () {
  window.dataLayer = window.dataLayer || [];

  function track(event, label) {
    window.dataLayer.push({ event: event, label: label || '' });
    if (typeof gtag === 'function') gtag('event', event, { event_label: label || '' });
  }
  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener('click', function () { track('click_call', location.pathname); });
  });
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
    a.addEventListener('click', function () { track('click_whatsapp', location.pathname); });
  });
  document.querySelectorAll('a[href*="google.com/maps"], a[href*="maps.app.goo.gl"], a[href*="goo.gl/maps"]').forEach(function (a) {
    a.addEventListener('click', function () { track('click_directions', location.pathname); });
  });

  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (answer) answer.classList.toggle('open', !expanded);
    });
  });
  var track2 = document.querySelector('.trust-track');
  if (track2 && !track2.dataset.doubled) { track2.innerHTML += track2.innerHTML; track2.dataset.doubled = 'true'; }

  var popup = document.getElementById('lead-popup');
  if (popup) {
    var shown = false;
    try { shown = !!sessionStorage.getItem('sgb_popup_shown'); } catch (e) {}
    if (!shown) {
      setTimeout(function () {
        popup.classList.add('open');
        try { sessionStorage.setItem('sgb_popup_shown', '1'); } catch (e) {}
      }, 5000);
    }
    var close = function () { popup.classList.remove('open'); };
    var cb = popup.querySelector('.popup-close');
    if (cb) cb.addEventListener('click', close);
    popup.addEventListener('click', function (e) { if (e.target === popup) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
});
