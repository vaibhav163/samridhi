// Toast notifications — imperative utility, safe to call from anywhere
// (enquiry flow, cookie consent). Creates its own container in the DOM,
// auto-dismisses, click to dismiss early. Animation is disabled under
// prefers-reduced-motion via the .toast rules in style.css.
export function showToast(message, type = "success", ms = 4200) {
  if (typeof document === "undefined") return;
  let wrap = document.getElementById("toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.id = "toast-wrap";
    wrap.className = "toast-wrap";
    wrap.setAttribute("aria-live", "polite");
    document.body.appendChild(wrap);
  }
  const el = document.createElement("div");
  el.className = "toast toast-" + (type === "error" ? "error" : "success");
  el.setAttribute("role", "status");
  el.innerHTML =
    '<span class="toast-icon">' + (type === "error" ? "⚠️" : "✓") + "</span>" +
    '<span class="toast-msg"></span>';
  el.querySelector(".toast-msg").textContent = message;
  const dismiss = () => {
    el.classList.add("toast-out");
    setTimeout(() => el.remove(), 250);
  };
  el.addEventListener("click", dismiss);
  wrap.appendChild(el);
  // Keep at most 3 toasts stacked.
  while (wrap.children.length > 3) wrap.firstChild.remove();
  setTimeout(dismiss, ms);
}
