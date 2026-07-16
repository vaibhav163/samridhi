import { useState, useEffect, useRef } from "react";

/* ============================================================
   LeadPopupForm
   - Auto-opens a set number of seconds after the page loads
   - Collects: Name, Phone Number, What they want to sell
   - Sends via EmailJS (same pattern as your other landing pages)
   - Won't re-show in the same browser session once closed/submitted
   ============================================================ */

const G = "#A9791C";
const GD = "#8B6314";
const DARK = "#211B0E";
const GRAY = "rgba(33,27,14,0.62)";

const css = `
.lp-overlay{position:fixed;inset:0;background:rgba(33,27,14,0.55);backdrop-filter:blur(3px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;animation:lpFade 0.25s ease;}
@keyframes lpFade{from{opacity:0;}to{opacity:1;}}
.lp-modal{background:#fff;border-radius:18px;max-width:420px;width:100%;padding:36px 32px 28px;position:relative;box-shadow:0 24px 60px rgba(33,27,14,0.35);border:1px solid rgba(169,121,28,0.2);animation:lpPop 0.3s cubic-bezier(.2,.8,.3,1.2);font-family:'Poppins',sans-serif;}
@keyframes lpPop{from{transform:scale(0.92) translateY(10px);opacity:0;}to{transform:scale(1) translateY(0);opacity:1;}}
.lp-close{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:none;background:rgba(33,27,14,0.06);color:${DARK};font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
.lp-close:hover{background:rgba(33,27,14,0.12);}
.lp-tag{display:inline-block;background:rgba(169,121,28,0.12);color:${G};font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:14px;}
.lp-title{font-family:'Playfair Display',serif;font-size:24px;font-weight:800;color:${DARK};line-height:1.25;margin-bottom:6px;}
.lp-title span{color:${G};}
.lp-sub{font-size:13.5px;color:${GRAY};line-height:1.6;margin-bottom:22px;}
.lp-field{margin-bottom:14px;}
.lp-label{display:block;font-size:12.5px;font-weight:600;color:${DARK};margin-bottom:6px;}
.lp-input{width:100%;padding:12px 14px;border:1.5px solid rgba(169,121,28,0.25);border-radius:9px;font-size:14px;font-family:inherit;color:${DARK};background:#fdfbf6;outline:none;transition:border-color 0.2s;}
.lp-input:focus{border-color:${G};}
.lp-input::placeholder{color:rgba(33,27,14,0.35);}
.lp-options{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.lp-opt{border:1.5px solid rgba(169,121,28,0.25);border-radius:9px;padding:12px 6px;text-align:center;cursor:pointer;font-size:12.5px;font-weight:600;color:${DARK};background:#fdfbf6;transition:all 0.2s;user-select:none;}
.lp-opt .lp-opt-icon{display:block;font-size:20px;margin-bottom:4px;}
.lp-opt:hover{border-color:${G};}
.lp-opt.active{border-color:${G};background:rgba(169,121,28,0.1);color:${G};}
.lp-error{font-size:12px;color:#dc2626;margin-top:5px;}
.lp-submit{width:100%;margin-top:8px;background:linear-gradient(135deg,${G},${GD});color:#fff;border:none;padding:14px;border-radius:9px;font-weight:700;font-size:14.5px;cursor:pointer;transition:all 0.2s;}
.lp-submit:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 22px rgba(169,121,28,0.35);}
.lp-submit:disabled{opacity:0.6;cursor:not-allowed;}
.lp-note{font-size:11px;color:rgba(33,27,14,0.4);text-align:center;margin-top:12px;line-height:1.5;}
.lp-success{text-align:center;padding:20px 0 10px;}
.lp-success-icon{font-size:44px;margin-bottom:12px;}
.lp-success h3{font-family:'Playfair Display',serif;font-size:20px;color:${DARK};margin-bottom:8px;}
.lp-success p{font-size:13.5px;color:${GRAY};line-height:1.6;}
@media(max-width:480px){
  .lp-modal{padding:28px 22px 22px;}
  .lp-title{font-size:20px;}
  .lp-options{grid-template-columns:repeat(3,1fr);}
}
`;

const ITEMS = [
  { key: "Gold", icon: "🥇" },
  { key: "Silver", icon: "🥈" },
  { key: "Diamond", icon: "💎" },
];

export default function LeadPopupForm({
  delaySeconds = 6,
  storageKey = "lp_popup_shown",
  siteName = "Samridhi Gold Buyer",
  phone = "+919953211815",
  emailjsServiceId = "service_8nc78lg",
  emailjsTemplateId = "template_c2m2uqc",
  emailjsPublicKey = "HGs3FzQXGgwWUiYwe",
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [item, setItem] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const scriptLoaded = useRef(false);

  // Load EmailJS script once
  useEffect(() => {
    if (scriptLoaded.current || window.emailjs) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) window.emailjs.init(emailjsPublicKey);
    };
    document.body.appendChild(script);
    scriptLoaded.current = true;
  }, [emailjsPublicKey]);

  // Auto-open after delay, once per session
  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(storageKey) === "1";
    } catch (e) {}
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(storageKey, "1");
      } catch (e) {}
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds, storageKey]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (!phoneNum.trim()) errs.phoneNum = "Please enter your phone number";
    else if (!/^[0-9+\s-]{7,15}$/.test(phoneNum.trim())) errs.phoneNum = "Enter a valid phone number";
    if (!item) errs.item = "Please select what you want to sell";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const send = () => {
      if (window.emailjs) {
        window.emailjs
          .send(emailjsServiceId, emailjsTemplateId, {
            from_name: name,
            phone: phoneNum,
            item_to_sell: item,
            site: siteName,
          })
          .then(() => {
            setSubmitting(false);
            setSuccess(true);
          })
          .catch(() => {
            setSubmitting(false);
            setSuccess(true); // still show success to the user; log failure separately if needed
          });
      } else {
        setSubmitting(false);
        setSuccess(true);
      }
    };

    send();
  };

  const closeModal = () => setOpen(false);

  if (!open) return null;

  return (
    <>
      <style>{css}</style>
      <div className="lp-overlay" onClick={closeModal}>
        <div className="lp-modal" onClick={(e) => e.stopPropagation()}>
          <button className="lp-close" onClick={closeModal} aria-label="Close">✕</button>

          {success ? (
            <div className="lp-success">
              <div className="lp-success-icon">✅</div>
              <h3>Thank You, {name.split(" ")[0]}!</h3>
              <p>
                We've received your details. Our team will call you shortly on{" "}
                {phoneNum} to help you sell your {item.toLowerCase()}.
              </p>
            </div>
          ) : (
            <>
              <div className="lp-tag">⭐ Limited Time Offer</div>
              <h2 className="lp-title">
                Get the <span>Best Price</span> for Your Gold, Silver &amp; Diamonds
              </h2>
              <p className="lp-sub">
                Share your details and our team will call you back with a free, no-obligation valuation.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="lp-field">
                  <label className="lp-label">Full Name</label>
                  <input
                    className="lp-input"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <div className="lp-error">{errors.name}</div>}
                </div>

                <div className="lp-field">
                  <label className="lp-label">Phone Number</label>
                  <input
                    className="lp-input"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                  {errors.phoneNum && <div className="lp-error">{errors.phoneNum}</div>}
                </div>

                <div className="lp-field">
                  <label className="lp-label">What would you like to sell?</label>
                  <div className="lp-options">
                    {ITEMS.map((opt) => (
                      <div
                        key={opt.key}
                        className={`lp-opt${item === opt.key ? " active" : ""}`}
                        onClick={() => setItem(opt.key)}
                      >
                        <span className="lp-opt-icon">{opt.icon}</span>
                        {opt.key}
                      </div>
                    ))}
                  </div>
                  {errors.item && <div className="lp-error">{errors.item}</div>}
                </div>

                <button className="lp-submit" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Get My Free Valuation"}
                </button>

                <p className="lp-note">
                  By submitting, you agree to be contacted by {siteName} via call/WhatsApp.
                  <br />
                  Or call us directly at <a href={`tel:${phone}`} style={{ color: G, fontWeight: 600 }}>{phone}</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}