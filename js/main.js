// Samridhi Gold Buyer — shared site behaviour
var EMAILJS_PUBLIC_KEY = 'xLfYDZXLlR6IeQ-C6';
var EMAILJS_SERVICE_ID = 'service_fkmfynb';
var EMAILJS_TEMPLATE_ID = 'template_bdjcyq6';

document.addEventListener('DOMContentLoaded', function () {
  // Init EmailJS once
  if (window.emailjs) {
    try { window.emailjs.init(EMAILJS_PUBLIC_KEY); } catch (err) { /* ignore */ }
  }

  function sendEnquiry(data, onOk, onErr) {
    if (!window.emailjs) { onErr('EmailJS not ready'); return; }
    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data).then(onOk).catch(onErr);
  }

  // Thank-you overlay — shown for 2 seconds after a successful form submit
  function showThankYou(msg) {
    var ty = document.getElementById('thankyou-overlay');
    if (!ty) {
      ty = document.createElement('div');
      ty.id = 'thankyou-overlay';
      ty.className = 'thankyou-overlay';
      ty.innerHTML = '<div class="thankyou-card"><div class="ty-check">✓</div><h3>Thank You!</h3><p class="ty-msg"></p></div>';
      document.body.appendChild(ty);
    }
    ty.querySelector('.ty-msg').textContent = msg || "We've received your details and will contact you shortly.";
    ty.classList.add('show');
    setTimeout(function () { ty.classList.remove('show'); }, 2000);
  }

  // Mobile menu toggle
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

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (answer) answer.classList.toggle('open', !expanded);
    });
  });

  // Duplicate trust strip items for seamless infinite scroll
  var track = document.querySelector('.trust-track');
  if (track && !track.dataset.doubled) {
    track.innerHTML += track.innerHTML;
    track.dataset.doubled = 'true';
  }

  // Hero quote form (top of homepage)
  var heroForm = document.getElementById('hero-form');
  var heroStatus = document.getElementById('hero-form-status');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = heroForm.name.value;
      var phone = heroForm.phone.value;
      var item = heroForm.item.value;
      if (heroStatus) heroStatus.textContent = 'Sending…';
      sendEnquiry(
        { name: name, mobile: phone, email: 'Not Provided', message: 'Wants to sell: ' + item, from_name: name, phone: phone, item_to_sell: item },
        function () {
          if (heroStatus) heroStatus.textContent = '✅ Sent! Our team will call you shortly.';
          showThankYou("We've got your details — our team will call you shortly.");
          window.open('https://wa.me/919953211815?text=Hi!%20I%20am%20' + encodeURIComponent(name) + '%20(' + encodeURIComponent(phone) + ').%20I%20want%20to%20sell%20' + encodeURIComponent(item) + '.', '_blank');
          heroForm.reset();
        },
        function () {
          if (heroStatus) heroStatus.textContent = '❌ Could not send. Please call or WhatsApp us instead.';
        }
      );
    });
  }

  // Lead popup — shows once per session, a few seconds after home page loads
  var popup = document.getElementById('lead-popup');
  if (popup) {
    function getFlag() {
      try { return sessionStorage.getItem('sgb_popup_shown'); }
      catch (err) { return null; }
    }
    function setFlag() {
      try { sessionStorage.setItem('sgb_popup_shown', '1'); }
      catch (err) { /* storage unavailable — popup will just show every load */ }
    }
    if (!getFlag()) {
      setTimeout(function () {
        popup.classList.add('open');
        setFlag();
      }, 4000);
    }
    var closePopup = function () { popup.classList.remove('open'); };
    var closeBtn = popup.querySelector('.popup-close');
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closePopup();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });

    var popupForm = document.getElementById('lead-popup-form');
    var popupStatus = document.getElementById('popup-status');
    if (popupForm) {
      popupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = popupForm.name.value;
        var phone = popupForm.phone.value;
        if (popupStatus) popupStatus.textContent = 'Sending…';
        sendEnquiry(
          { name: name, mobile: phone, email: 'Not Provided', message: 'Homepage popup — free gold valuation request', from_name: name, phone: phone, item_to_sell: 'Free Gold Valuation Request' },
          function () {
            if (popupStatus) popupStatus.textContent = '✅ Sent! Our team will contact you shortly.';
            showThankYou("We've got your details — our team will contact you shortly.");
            window.open('https://wa.me/919953211815?text=Hi!%20I%20am%20' + encodeURIComponent(name) + '%20(' + encodeURIComponent(phone) + ').%20I%20want%20a%20free%20gold%20valuation.', '_blank');
            popupForm.reset();
            setTimeout(closePopup, 1500);
          },
          function () {
            if (popupStatus) popupStatus.textContent = '❌ Could not send. Please call or WhatsApp us instead.';
          }
        );
      });
    }
  }

  // Contact page form
  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('contact-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value;
      var phone = form.phone.value;
      var message = form.message.value;
      if (formStatus) formStatus.textContent = 'Sending…';
      sendEnquiry(
        { name: name, mobile: phone, email: 'Not Provided', message: message, from_name: name, phone: phone, item_to_sell: message || 'General Enquiry' },
        function () {
          if (formStatus) formStatus.textContent = '✅ Sent! Our team will contact you shortly.';
          showThankYou("We've got your message — our team will contact you shortly.");
          form.reset();
        },
        function () {
          if (formStatus) formStatus.textContent = '❌ Could not send. Please call or WhatsApp us instead.';
        }
      );
    });
  }
});
