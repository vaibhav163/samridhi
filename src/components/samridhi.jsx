import { useState } from "react";
import Banner1 from "../assets/ban1.png";
import Chart from "../assets/sell-now-chart.png";
import G1 from "../assets/gallery1.png";
import G2 from "../assets/gallery2.png";
import G3 from "../assets/gallery3.png";
// import G4 from "../assetsc/gallery4.jpg";
// import G5 from "../assetsc/gallery5.jpg";
// import G6 from "../assetsc/gallery6.jpg";
// import G7 from "../assetsc/gallery7.jpg";
// import G8 from "../assetsc/gallery8.jpg";
// import Blog1 from "../assetsc/blog1.jpg";
// import Blog2 from "../assetsc/blog2.jpg";
// import Blog3 from "../assetsc/blog3.jpg";
// import Testi1 from "../assetsc/testi1.jpg";
// import Testi2 from "../assetsc/testi2.jpg";
// import Testi3 from "../assetsc/testi3.jpg";
// import Testi4 from "../assetsc/testi4.jpg";

const IMG = {
  banner: Banner1,
  sellNowChart: Chart,
  // gallery1: G1,
  // gallery2: G2,
  // gallery3: G3,
  // gallery4: G4,
  // gallery5: G5,
  // gallery6: G6,
  // gallery7: G7,
  // gallery8: G8,
  // blog1: Blog1,
  // blog2: Blog2,
  // blog3: Blog3,
  // testi1: Testi1,
  // testi2: Testi2,
  // testi3: Testi3,
  // testi4: Testi4,
  // map: MapImg,
};

const G = "#C9A84C";
const GD = "#a07820";
const GL = "#f5e199";
const BG = "#0d0b08";
const BG2 = "#151209";
const WHITE = "#fff";
const GRAY = "rgba(255,255,255,0.6)";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Poppins:wght@300;400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Poppins',sans-serif;background:${BG};color:${WHITE};overflow-x:hidden;}

/* TOP BAR */
.topbar{background:#1a1506;border-bottom:1px solid rgba(201,168,76,0.2);padding:8px 0;font-size:13px;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:28px;}
.topbar span{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,0.75);}
.topbar a{color:${G};text-decoration:none;font-weight:600;display:flex;align-items:center;gap:6px;}

/* NAV */
nav{background:${BG};border-bottom:1px solid rgba(201,168,76,0.15);position:sticky;top:0;z-index:999;}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:68px;}
.logo{font-family:'Playfair Display',serif;font-size:24px;font-weight:900;color:${G};letter-spacing:0.5px;text-decoration:none;}
.logo span{color:${WHITE};}
.nav-links{display:flex;align-items:center;gap:6px;list-style:none;}
.nav-links a{color:rgba(255,255,255,0.82);text-decoration:none;font-size:14px;font-weight:500;padding:8px 14px;border-radius:6px;transition:all 0.2s;white-space:nowrap;}
.nav-links a:hover{color:${G};background:rgba(201,168,76,0.08);}
.nav-links .dropdown{position:relative;}
.nav-links .dropdown:hover .dropdown-menu{display:block;}
.dropdown-menu{display:none;position:absolute;top:100%;left:0;background:#1a1506;border:1px solid rgba(201,168,76,0.2);border-radius:8px;min-width:200px;padding:8px 0;z-index:100;box-shadow:0 8px 32px rgba(0,0,0,0.5);}
.dropdown-menu a{display:block;padding:10px 18px;color:rgba(255,255,255,0.75);font-size:13px;border-radius:0;}
.dropdown-menu a:hover{color:${G};background:rgba(201,168,76,0.08);}
.nav-phone{background:${G};color:#000;padding:10px 20px;border-radius:6px;font-weight:700;font-size:13px;text-decoration:none;white-space:nowrap;}
.nav-phone:hover{background:${GL};}
.hamburger{display:none;background:none;border:none;color:${WHITE};font-size:26px;cursor:pointer;}
.mobile-menu{display:none;flex-direction:column;background:#0f0c07;padding:16px 20px;gap:4px;border-top:1px solid rgba(201,168,76,0.15);}
.mobile-menu a{color:rgba(255,255,255,0.8);text-decoration:none;padding:12px 0;font-size:15px;border-bottom:1px solid rgba(255,255,255,0.06);}
.mobile-menu.open{display:flex;}

/* HERO */
.hero{min-height:90vh;background:linear-gradient(120deg,#0d0b08 55%,#1a1205 100%);display:flex;align-items:center;position:relative;overflow:hidden;}
.hero::after{content:'';position:absolute;right:0;top:0;bottom:0;width:45%;background:linear-gradient(135deg,rgba(201,168,76,0.07),rgba(201,168,76,0.02));clip-path:polygon(10% 0,100% 0,100% 100%,0 100%);}
.hero-inner{max-width:1200px;margin:0 auto;padding:60px 20px;display:flex;align-items:center;gap:60px;width:100%;position:relative;z-index:1;}
.hero-left{flex:1;}
.hero-tag{display:inline-block;background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.35);color:${G};font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:22px;}
.hero-title{font-family:'Playfair Display',serif;font-size:clamp(36px,4.5vw,62px);font-weight:900;line-height:1.1;margin-bottom:8px;}
.hero-title .gold{color:${G};}
.hero-subtitle{font-size:16px;color:${GRAY};line-height:1.75;margin:20px 0 36px;max-width:500px;}
.hero-bullets{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:36px;}
.hero-bullets li{display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:rgba(255,255,255,0.78);}
.hero-bullets li::before{content:'✓';color:${G};font-weight:700;flex-shrink:0;margin-top:1px;}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
.btn-gold{background:linear-gradient(135deg,${G},${GD});color:#000;padding:14px 32px;border-radius:8px;font-weight:700;font-size:15px;border:none;cursor:pointer;text-decoration:none;transition:all 0.2s;}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(201,168,76,0.4);}
.btn-outline{background:transparent;color:${G};border:2px solid ${G};padding:13px 30px;border-radius:8px;font-weight:600;font-size:15px;cursor:pointer;text-decoration:none;transition:all 0.2s;}
.btn-outline:hover{background:rgba(201,168,76,0.1);}
.hero-right{flex:0 0 420px;}
.hero-img-box{border-radius:20px;overflow:hidden;border:2px solid rgba(201,168,76,0.2);background:rgba(201,168,76,0.05);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(201,168,76,0.45);font-size:14px;}
.hero-img-box .ph-icon{font-size:56px;}

/* TRUST SCROLLING STRIP */
.trust-strip{background:linear-gradient(90deg,${GD},${G},#e8c86a,${G},${GD});padding:0;overflow:hidden;}
.trust-track{display:flex;animation:scroll 30s linear infinite;width:max-content;}
.trust-track:hover{animation-play-state:paused;}
.trust-item{display:flex;align-items:center;gap:10px;padding:18px 32px;white-space:nowrap;border-right:1px solid rgba(0,0,0,0.15);}
.trust-item .ti-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#000;}
.trust-item .ti-lbl{font-size:11px;font-weight:600;color:rgba(0,0,0,0.65);text-transform:uppercase;letter-spacing:0.5px;}
@keyframes scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* SECTION SHARED */
.sec{padding:80px 20px;}
.sec-dark{background:${BG2};}
.sec-gold-bg{background:linear-gradient(135deg,#1a1205,#0d0b08);}
.ctr{max-width:1200px;margin:0 auto;}
.eyebrow{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${G};margin-bottom:10px;}
.sec-title{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,40px);font-weight:700;line-height:1.2;margin-bottom:14px;}
.sec-desc{font-size:15px;color:${GRAY};line-height:1.8;max-width:580px;}

/* FEATURES ICONS SCROLL */
.features-scroll{overflow-x:auto;padding-bottom:8px;margin-top:48px;}
.features-scroll::-webkit-scrollbar{height:4px;}
.features-scroll::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.3);border-radius:4px;}
.features-grid{display:flex;gap:16px;min-width:max-content;}
.feat-card{background:rgba(255,255,255,0.04);border:1px solid rgba(201,168,76,0.15);border-radius:14px;padding:24px 20px;text-align:center;width:160px;flex-shrink:0;transition:all 0.25s;}
.feat-card:hover{border-color:${G};background:rgba(201,168,76,0.07);transform:translateY(-3px);}
.feat-icon{font-size:36px;margin-bottom:12px;}
.feat-title{font-size:13px;font-weight:700;color:${WHITE};margin-bottom:4px;}
.feat-sub{font-size:11px;color:${GRAY};line-height:1.5;}

/* COMPARISON */
.compare-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px;}
.compare-col{border-radius:16px;padding:32px;}
.compare-col.bad{background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.2);}
.compare-col.good{background:rgba(201,168,76,0.07);border:1px solid rgba(201,168,76,0.3);}
.compare-col h3{font-size:17px;font-weight:700;margin-bottom:20px;display:flex;align-items:center;gap:8px;}
.compare-col.bad h3{color:#ef4444;}
.compare-col.good h3{color:${G};}
.compare-list{list-style:none;display:flex;flex-direction:column;gap:13px;}
.compare-list li{font-size:14px;color:rgba(255,255,255,0.72);display:flex;align-items:flex-start;gap:10px;line-height:1.5;}
.compare-list li .ci{flex-shrink:0;margin-top:2px;}

/* WHAT WE BUY CARDS */
.buy-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.buy-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.12);border-radius:16px;padding:32px;display:flex;gap:24px;align-items:flex-start;transition:all 0.25s;}
.buy-card:hover{border-color:rgba(201,168,76,0.45);background:rgba(201,168,76,0.05);transform:translateY(-3px);}
.buy-card-icon{font-size:44px;flex-shrink:0;}
.buy-card h3{font-family:'Playfair Display',serif;font-size:20px;color:${G};margin-bottom:10px;}
.buy-card p{font-size:13.5px;color:${GRAY};line-height:1.75;}
.buy-card a{display:inline-block;margin-top:14px;color:${G};font-size:13px;font-weight:600;text-decoration:none;border-bottom:1px solid rgba(201,168,76,0.4);}

/* PROCESS */
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:48px;position:relative;}
.process-steps::before{content:'';position:absolute;top:32px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,${G},transparent);opacity:0.3;}
.p-step{text-align:center;position:relative;}
.p-num{width:64px;height:64px;border-radius:50%;background:rgba(201,168,76,0.1);border:2px solid ${G};display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:24px;font-weight:900;color:${G};margin:0 auto 18px;}
.p-step h4{font-size:15px;font-weight:700;margin-bottom:8px;}
.p-step p{font-size:13px;color:${GRAY};line-height:1.6;}

/* WHY SELL NOW */
.sell-now-wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-top:48px;}
.sell-now-img{border-radius:18px;overflow:hidden;border:2px solid rgba(201,168,76,0.2);background:rgba(201,168,76,0.05);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(201,168,76,0.4);font-size:13px;}
.sell-now-img .ph-icon{font-size:52px;}
.sell-bullets{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:24px;}
.sell-bullets li{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;color:rgba(255,255,255,0.78);line-height:1.5;}
.sell-bullets li .dot{width:8px;height:8px;border-radius:50%;background:${G};flex-shrink:0;margin-top:6px;}

/* VIDEO / AD SECTION */
.ads-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.ad-card{border-radius:14px;overflow:hidden;border:1px solid rgba(201,168,76,0.15);background:rgba(255,255,255,0.03);}
.ad-thumb{aspect-ratio:16/9;background:rgba(201,168,76,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;color:rgba(201,168,76,0.45);font-size:13px;border-bottom:1px solid rgba(201,168,76,0.1);}
.ad-thumb .play{font-size:48px;}
.ad-caption{padding:14px 18px;font-size:13px;color:rgba(255,255,255,0.6);}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.testi-card{border-radius:14px;overflow:hidden;border:1px solid rgba(201,168,76,0.15);background:rgba(255,255,255,0.03);}
.testi-vid{aspect-ratio:16/9;background:rgba(201,168,76,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;color:rgba(201,168,76,0.4);font-size:13px;}
.testi-vid .play{font-size:44px;}
.testi-info{padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.testi-info .name{font-weight:600;font-size:14px;}
.testi-info .area{font-size:12px;color:${G};}

/* LOCATION SECTION */
.location-wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;margin-top:48px;}
.map-box{border-radius:16px;overflow:hidden;border:2px solid rgba(201,168,76,0.2);background:rgba(201,168,76,0.04);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(201,168,76,0.4);font-size:14px;}
.map-box .ph-icon{font-size:52px;}
.loc-info h3{font-family:'Playfair Display',serif;font-size:28px;color:${G};margin-bottom:10px;}
.loc-address{font-size:15px;color:${GRAY};line-height:1.8;margin-bottom:28px;}
.loc-rows{display:flex;flex-direction:column;gap:14px;}
.loc-row{display:flex;align-items:center;gap:14px;}
.loc-row .icon{font-size:20px;flex-shrink:0;}
.loc-row p{font-size:14px;color:${GRAY};}
.loc-row p strong{color:${WHITE};}
.loc-btns{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap;}

/* GALLERY / STORE PHOTOS */
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px;}
.gallery-item{border-radius:12px;overflow:hidden;border:2px dashed rgba(201,168,76,0.25);background:rgba(201,168,76,0.04);aspect-ratio:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:rgba(201,168,76,0.4);font-size:12px;cursor:pointer;transition:all 0.2s;}
.gallery-item:hover{border-color:${G};background:rgba(201,168,76,0.08);}
.gallery-item .ph-icon{font-size:30px;}

/* FAQ */
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:48px;align-items:start;}
.faq-item{border:1px solid rgba(201,168,76,0.12);border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.03);}
.faq-q{padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:600;font-size:14px;gap:12px;transition:background 0.2s;}
.faq-q:hover{background:rgba(201,168,76,0.06);}
.faq-q .ch{color:${G};font-size:20px;flex-shrink:0;transition:transform 0.3s;}
.faq-q.open .ch{transform:rotate(180deg);}
.faq-a{max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.3s;font-size:13.5px;color:${GRAY};line-height:1.8;padding:0 20px;}
.faq-a.open{max-height:300px;padding:0 20px 18px;}

/* BLOG */
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;}
.blog-card{border-radius:14px;overflow:hidden;border:1px solid rgba(201,168,76,0.12);background:rgba(255,255,255,0.03);transition:all 0.25s;}
.blog-card:hover{border-color:rgba(201,168,76,0.4);transform:translateY(-3px);}
.blog-thumb{aspect-ratio:16/9;background:rgba(201,168,76,0.06);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:rgba(201,168,76,0.4);font-size:12px;}
.blog-thumb .ph-icon{font-size:32px;}
.blog-body{padding:20px;}
.blog-cat{font-size:11px;color:${G};font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;}
.blog-body h4{font-size:15px;font-weight:700;line-height:1.4;color:${WHITE};}

/* FLOATING ACTION */
.floating{position:fixed;right:20px;bottom:24px;display:flex;flex-direction:column;gap:12px;z-index:1000;}
.fab{width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;font-size:24px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4);transition:transform 0.2s;}
.fab:hover{transform:scale(1.1);}
.fab-wa{background:#25D366;}
.fab-ph{background:${G};}

/* CTA BAND */
.cta-band{background:linear-gradient(135deg,rgba(201,168,76,0.18),rgba(139,105,20,0.18));border-top:1px solid rgba(201,168,76,0.25);border-bottom:1px solid rgba(201,168,76,0.25);padding:72px 20px;text-align:center;}
.cta-band .sec-title{max-width:600px;margin:0 auto 12px;}
.cta-band p{font-size:16px;color:${GRAY};margin-bottom:36px;}
.cta-phone{font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:${G};margin-bottom:6px;}
.cta-phone-label{font-size:13px;color:rgba(255,255,255,0.35);margin-bottom:32px;}
.cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;}

/* FOOTER */
footer{background:#08060300;background:#060402;padding:56px 20px 24px;border-top:1px solid rgba(201,168,76,0.12);}
.footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
.footer-brand{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:${G};margin-bottom:14px;}
.footer-brand span{color:${WHITE};}
.footer-desc{font-size:13px;color:rgba(255,255,255,0.38);line-height:1.8;margin-bottom:20px;}
.footer-social{display:flex;gap:10px;}
.social-btn{width:36px;height:36px;border-radius:50%;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.25);display:flex;align-items:center;justify-content:center;font-size:15px;text-decoration:none;transition:all 0.2s;}
.social-btn:hover{background:${G};color:#000;}
.f-col h4{font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${G};margin-bottom:18px;}
.f-col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
.f-col ul a{color:rgba(255,255,255,0.42);font-size:13px;text-decoration:none;transition:color 0.2s;}
.f-col ul a:hover{color:${G};}
.footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,0.22);}

/* RESPONSIVE */
@media(max-width:960px){
  .hero-inner{flex-direction:column;}
  .hero-right{width:100%;flex:none;}
  .compare-wrap,.sell-now-wrap,.location-wrap,.faq-grid{grid-template-columns:1fr;}
  .process-steps{grid-template-columns:repeat(2,1fr);}
  .process-steps::before{display:none;}
  .buy-cards{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .blog-grid{grid-template-columns:1fr;}
  .ads-grid,.testi-grid{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr 1fr;}
  .nav-links{display:none;}
  .hamburger{display:block;}
  .nav-phone-desktop{display:none;}
}
@media(max-width:600px){
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .footer-grid{grid-template-columns:1fr;}
  .footer-bottom{flex-direction:column;gap:8px;text-align:center;}
  .cta-phone{font-size:32px;}
}
  /* Universal fit for any image inside these placeholder boxes */
.hero-img-box img,
.sell-now-img img,
.gallery-item img,
.blog-thumb img,
.ad-thumb img,
.testi-vid img,
.map-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
`;

const features = [
  { icon:"🏆", title:"Trusted Buyer", sub:"Greater Noida's Most Trusted" },
  { icon:"🔬", title:"XRF Testing", sub:"100% Accurate Karatmeter" },
  { icon:"🛡️", title:"No Damage", sub:"Non-Destructive Process" },
  { icon:"💳", title:"Instant Pay", sub:"Cash / NEFT / RTGS" },
  { icon:"📱", title:"100% Digital", sub:"Digital KYC & Invoice" },
  { icon:"⚖️", title:"Govt Certified", sub:"Certified Weights & Balance" },
  { icon:"👨‍💼", title:"Gold Experts", sub:"Certified Professionals" },
  { icon:"😊", title:"Best Price", sub:"Highest Payout Guaranteed" },
  { icon:"📅", title:"7 Days Open", sub:"10 AM – 7 PM Always" },
  { icon:"🆓", title:"Free Testing", sub:"Zero Cost Evaluation" },
];

const faqs = [
  { q:"What ID proof is required for selling gold?", a:"Any one valid photo ID: Aadhaar Card, Voter ID, Driving Licence, or Passport. PAN card is required for transactions of ₹2 lakh and above." },
  { q:"Will my ornaments get damaged during testing?", a:"No! We use XRF Karatmeter technology — completely non-destructive. Your jewellery stays untouched and intact throughout the entire process." },
  { q:"Can I sell gold without a hallmark?", a:"Yes. We accept gold without hallmarks. The value will be determined based on actual purity after testing with our Karatmeter machine." },
  { q:"What are your working hours?", a:"We are open 7 days a week including Sundays, from 10:00 AM to 7:00 PM." },
  { q:"What is the mode of payment?", a:"We offer instant payment via Cash, NEFT, or RTGS — whichever is most convenient for you. Payment is made immediately after you accept our offer." },
  { q:"Do you buy silver and diamonds too?", a:"Yes! We buy silver jewellery, diamond jewellery, and gold/silver coins in addition to gold jewellery." },
  { q:"How long does the entire process take?", a:"The complete process from testing to payment takes only 10–15 minutes. Fast, simple, and hassle-free." },
  { q:"Can I sell gold without a purchase bill?", a:"Yes. You can sell gold with just a valid ID proof like Aadhaar or Voter ID. Having a bill may help in some cases, but it is not mandatory." },
  { q:"What is the minimum age to sell gold?", a:"You must be at least 21 years old and provide a valid ID proof to sell gold at our store." },
  { q:"Can I sell broken or tampered jewellery?", a:"Yes, we accept broken or tampered gold. Please bring a valid ID proof. Having the original purchase bill can sometimes help get better value." },
];

export default function SamridhiGold() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMobileOpen(false); };

  return (
    <>
      <style>{css}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <span>📅 7 Days Open</span>
          <span>🕐 10 AM – 7 PM</span>
          <a href="tel:+919953211815">📞 +91 9953211815</a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a className="logo" href="#">Samridhi <span>Gold Buyer</span></a>
          <ul className="nav-links">
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("hero")}}>Home</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("about")}}>About Us</a></li>
            <li className="dropdown">
              <a href="#">What We Buy ▾</a>
              <div className="dropdown-menu">
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash Against Gold</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Silver</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Diamonds</a>
                <a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>Cash For Coins</a>
              </div>
            </li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("location")}}>Our Branch</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("gallery")}}>Gallery</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("faq")}}>FAQs</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("contact")}}>Contact Us</a></li>
          </ul>
          <a className="nav-phone nav-phone-desktop" href="tel:+919953211815">📞 Call Now</a>
          <button className="hamburger" onClick={()=>setMobileOpen(o=>!o)}>☰</button>
        </div>
        <div className={`mobile-menu ${mobileOpen?"open":""}`}>
          {[["hero","Home"],["about","About Us"],["what-we-buy","What We Buy"],["process","How It Works"],["location","Our Branch"],["gallery","Gallery"],["faq","FAQs"],["contact","Contact Us"]].map(([id,label])=>(
            <a href="#" key={id} onClick={e=>{e.preventDefault();scrollTo(id)}}>{label}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">⭐ Greater Noida's Trusted Gold Buyer</div>
            <h1 className="hero-title">
              Sona Do,<br/><span className="gold">Paisa Lo</span>
            </h1>
            <ul className="hero-bullets">
              <li>Most jewellers make you lose 15–20% without you even knowing</li>
              <li>Get the full, accurate value — without your jewellery being spoiled</li>
              <li>100% accurate, non-destructive, transparent XRF Karatmeter testing</li>
            </ul>
            <div className="hero-btns">
              <a className="btn-gold" href="tel:+919953211815">📞 Talk to Us Now</a>
              <button className="btn-outline" onClick={()=>scrollTo("process")}>See How It Works →</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-img-box">
              <span className="ph-icon"><img src={Banner1} alt="Banner Image" /></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-track">
          {[...Array(2)].map((_,rep)=>(
            [
              ["New Business","Greater Noida"],
              ["100%","Transparent Testing"],
              ["Best Price","Guaranteed"],
              ["15 Min","Quick Process"],
              ["7 Days","Always Open"],
              ["XRF","Karatmeter Testing"],
              ["Instant","Cash Payment"],
              ["Free","Gold Valuation"],
              ["Certified","Gold Experts"],
              ["4.9★","Google Rating"],
            ].map(([n,l],i)=>(
              <div className="trust-item" key={`${rep}-${i}`}>
                <div>
                  <div className="ti-num">{n}</div>
                  <div className="ti-lbl">{l}</div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>

      {/* ABOUT / FEATURES */}
      <section className="sec" id="about">
        <div className="ctr">
          <div className="eyebrow">Who We Are</div>
          <h2 className="sec-title">Samridhi Gold Buyer — Greater Noida's Most Trusted</h2>
          <p className="sec-desc">We are a team of certified gold buying professionals serving Greater Noida. Our mission is simple: give you the highest, most accurate value for your gold — transparently, instantly, and without any damage to your jewellery.</p>
          <div className="features-scroll">
            <div className="features-grid">
              {features.map(f=>(
                <div className="feat-card" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-sub">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DON'T SELL BEFORE — COMPARISON */}
      <section className="sec sec-dark">
        <div className="ctr">
          <div className="eyebrow">Our Edge</div>
          <h2 className="sec-title">Don't Sell Your Gold Before You Read This</h2>
          <div className="compare-wrap">
            <div className="compare-col bad">
              <h3>❌ What Most People Experience</h3>
              <ul className="compare-list">
                {["Most people don't get the true value of their gold","Jewellery gets damaged during purity testing (acid test)","Customers are asked to trust the process with no proof","Payment methods are unclear, delayed, or unsafe","Privacy, safety, and security are not guaranteed","Shops are in unsafe areas with untrained staff","People end up dealing with unverified, non-reputable buyers"].map(t=>(
                  <li key={t}><span className="ci">❌</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col good">
              <h3>✅ How Samridhi Does It Differently</h3>
              <ul className="compare-list">
                {["See the exact purity of your gold with advanced Karatmeter testing","Jewellery tested completely damage-free — no acid, no scratching","Live purity results shown on screen — full transparency, no guesswork","Safe instant payment via Cash, NEFT, or RTGS","100% private, secure, and transparent process","Store in a prime, safe location in Greater Noida","Samridhi is a trusted brand with certified, professional staff"].map(t=>(
                  <li key={t}><span className="ci">✅</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUY */}
      <section className="sec" id="what-we-buy">
        <div className="ctr">
          <div className="eyebrow">What We Do</div>
          <h2 className="sec-title">We Buy All Kinds of Gold, Silver & Diamond Jewellery</h2>
          <div className="buy-cards">
            {[
              { icon:"🥇", title:"Get Instant Cash For Gold", desc:"We buy all types of gold jewellery — rings, necklaces, bangles, chains, earrings. With or without hallmark, with or without bill, old or new, broken or intact. Advanced Karatmeter testing ensures you get the highest accurate value.", link:"Cash Against Gold" },
              { icon:"🥈", title:"Cash For Silver", desc:"Planning to sell silver jewellery, utensils, or coins? We are one of the prominent silver buyers in Greater Noida. Our process is short and simple — bring your silver, get it weighed and valued, walk out with cash.", link:"Cash For Silver" },
              { icon:"💎", title:"Cash For Diamond Jewellery", desc:"We offer the most reliable cash for diamond jewellery. We accept all kinds of diamonds — old, new, used, set in rings, necklaces, or bracelets. Our team conducts authentic evaluation to give you the best value.", link:"Cash For Diamonds" },
              { icon:"🪙", title:"Cash For Gold & Silver Coins", desc:"Investment coins, temple coins, commemorative coins — we buy all types of gold and silver coins at competitive live market rates. Turn your idle coins into instant cash today.", link:"Cash For Coins" },
            ].map(c=>(
              <div className="buy-card" key={c.title}>
                <div className="buy-card-icon">{c.icon}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <a href="#" onClick={e=>{e.preventDefault();scrollTo("contact")}}>{c.link} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec-dark" id="process">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Simple. Fast. Transparent.</h2>
          <p className="sec-desc">The entire process takes just 10–15 minutes. No hidden steps, no surprises, no damage to your jewellery.</p>
          <div className="process-steps">
            {[
              { n:"01", title:"Walk Into Our Store", desc:"Visit our Greater Noida branch with your gold jewellery and a valid photo ID (Aadhaar, Voter ID, Passport, or Driving Licence)." },
              { n:"02", title:"Free XRF Testing", desc:"We test your gold's purity live using German Karatmeter technology. Results displayed on screen in front of you. 100% transparent, no damage." },
              { n:"03", title:"Best Price Offer", desc:"We present our best price based on live market rate, purity, and weight. You are free to compare with other buyers before deciding." },
              { n:"04", title:"Instant Payment", desc:"Accept the offer and receive instant payment by Cash, NEFT, or RTGS. The entire process is done in 10–15 minutes." },
            ].map(s=>(
              <div className="p-step" key={s.n}>
                <div className="p-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SELL NOW */}
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Why Sell Gold Now?</div>
          <h2 className="sec-title">It's the Best Time to Sell Your Gold</h2>
          <div className="sell-now-wrap">
            <div className="sell-now-img">
              <span className="ph-icon"><img src={Chart} alt="rate Chart" /> </span>
            </div>
            <div>
              <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.8}}>
                Gold prices are at historic peak levels right now. If you bought gold earlier at lower prices, today you are sitting on a significant profit. It's the perfect time to turn your idle gold into maximum cash.
              </p>
              <ul className="sell-bullets">
                {["Gold is trading at historic peak levels","You may have bought gold at much lower prices earlier","Today you're sitting on a big profit — cash it in!","Perfect time to sell while prices are high","Turn unused or idle gold into maximum money","Invest the cash in better opportunities"].map(t=>(
                  <li key={t}><span className="dot"></span>{t}</li>
                ))}
              </ul>
              <div style={{marginTop:28}}>
                <a className="btn-gold" href="tel:+919953211815">📞 Get Free Valuation Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS / ADS */}
      {/* <section className="sec sec-dark" id="videos">
        <div className="ctr">
          <div className="eyebrow">Featured Videos</div>
          <h2 className="sec-title">Watch & Learn</h2>
          <p className="sec-desc">Add your promotional videos or customer testimonial videos here.</p>
          <div className="ads-grid">
            {["Your Promo Video 1","Your Promo Video 2"].map((v,i)=>(
              <div className="ad-card" key={i}>
                <div className="ad-thumb">
                  <span className="play">▶️</span>
                  <span>{v}</span>
                  <span style={{fontSize:11,opacity:0.6}}>Paste your YouTube embed link</span>
                </div>
                <div className="ad-caption">Add your video caption / description here</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      {/* <section className="sec">
        <div className="ctr">
          <div className="eyebrow">Testimonials</div>
          <h2 className="sec-title">Real Stories, Real Trust</h2>
          <p className="sec-desc">Hear from our happy customers in Greater Noida who got the best value for their gold.</p>
          <div className="testi-grid">
            {[["Happy Customer","Greater Noida Sector 1"],["Happy Customer","Greater Noida Sector 10"],["Happy Customer","Greater Noida Sector 27"],["Happy Customer","Greater Noida Sector 44"]].map(([name,area],i)=>(
              <div className="testi-card" key={i}>
                <div className="testi-vid">
                  <span className="play">▶️</span>
                  <span>Customer Video {i+1}</span>
                  <span style={{fontSize:11,opacity:0.6}}>Add YouTube link</span>
                </div>
                <div className="testi-info">
                  <div className="name">{name}</div>
                  <div className="area">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* GALLERY / STORE PHOTOS */}
      <section className="sec sec-dark" id="gallery">
        <div className="ctr">
          <div className="eyebrow">Our Store</div>
          <h2 className="sec-title">Find Samridhi Gold Buyer Near You</h2>
          <p className="sec-desc">Walk into our Greater Noida branch for instant testing and get cash for gold on the spot.</p>
          <div className="gallery-grid">
            {[G1,G2,G3].map(i=>(
              <div className="gallery-item" key={i}>
                <span className="ph-icon"><img src={i}/> </span>
                <span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="sec" id="location">
        <div className="ctr">
          <div className="eyebrow">Our Branch</div>
          <h2 className="sec-title">Visit Samridhi Gold Buyer</h2>
          <div className="location-wrap">
            <div className="map-box">
              <span className="ph-icon"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85404.14669650557!2d77.22106880000001!3d28.576972799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa6796a6831%3A0xc542a68808102fd2!2sSAMRIDHI%20GOLD%20BUYERS!5e1!3m2!1sen!2sin!4v1784198898282!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </span>
              <span></span>
              
            </div>
            <div className="loc-info">
              <h3>Samridhi Gold Buyer</h3>
              <p className="loc-address">
                [Your Shop Name & Number],<br/>
                [Street / Market Name],<br/>
                Greater Noida, Uttar Pradesh — 201310
              </p>
              <div className="loc-rows">
                <div className="loc-row"><span className="icon">📞</span><p><strong>Call / WhatsApp:</strong> +91 9953211815</p></div>
                <div className="loc-row"><span className="icon">🕐</span><p><strong>Hours:</strong> 10:00 AM – 7:00 PM, 7 Days a Week</p></div>
                <div className="loc-row"><span className="icon">📍</span><p><strong>Nearest Landmark:</strong> [Add landmark here]</p></div>
                <div className="loc-row"><span className="icon">🚇</span><p><strong>Metro / Transport:</strong> [Nearest metro or bus stop]</p></div>
                <div className="loc-row"><span className="icon">📧</span><p><strong>Email:</strong> samridhigold@gmail.com</p></div>
              </div>
              <div className="loc-btns">
                <a className="btn-gold" href="tel:+919953211815">📞 Call Now</a>
                <a className="btn-outline" href="https://wa.me/919953211815" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-dark" id="faq">
        <div className="ctr">
          <div className="eyebrow">FAQ</div>
          <h2 className="sec-title">Your Questions, Answered</h2>
          <div className="faq-grid">
            {faqs.map((f,i)=>(
              <div className="faq-item" key={i}>
                <div className={`faq-q${openFaq===i?" open":""}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <span>{f.q}</span>
                  <span className="ch">⌄</span>
                </div>
                <div className={`faq-a${openFaq===i?" open":""}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">Our Blog</div>
          <h2 className="sec-title">Gold Buying Insights</h2>
          <div className="blog-grid">
            {[
              "Why Gold Prices Are at an All-Time High in 2025",
              "Top Questions to Ask Before Selling Your Gold Jewellery",
              "How to Get the Best Value When Selling Gold in Greater Noida",
            ].map((title,i)=>(
              <div className="blog-card" key={i}>
                <div className="blog-thumb">
                  <span className="ph-icon">🖼️</span>
                  <span>Blog Thumbnail {i+1}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-cat">Gold Buying Tips</div>
                  <h4>{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band" id="contact">
        <div className="eyebrow" style={{textAlign:"center",marginBottom:12}}>Get In Touch</div>
        <h2 className="sec-title" style={{textAlign:"center",maxWidth:600,margin:"0 auto 12px"}}>Ready to Sell Your Gold for the Best Price?</h2>
        <p style={{fontSize:16,color:GRAY,marginBottom:28,maxWidth:500,margin:"0 auto 28px"}}>Walk in to our Greater Noida branch or call us now. Free valuation, no obligations, instant payment.</p>
        <div className="cta-phone" href="tel:+919953211815">📞 +91 9953211815</div>
        <div className="cta-phone-label" href="https://wa.me/919953211815" >Call or WhatsApp — we respond instantly</div>
        <div className="cta-btns">
          <a className="btn-gold" href="tel:+919953211815" style={{fontSize:16,padding:"15px 40px"}}>Call Now</a>
          <a className="btn-outline" href="https://wa.me/919953211815" target="_blank" rel="noreferrer" style={{fontSize:16,padding:"14px 40px"}}>💬 WhatsApp Us</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Samridhi <span>Gold Buyer</span></div>
            <p className="footer-desc">Greater Noida's trusted destination for selling gold, silver, diamonds, and coins. Transparent testing, best prices, instant payment — always.</p>
            <div className="footer-social">
              {["📘","📸","🐦","▶️"].map((s,i)=>(
                <a className="social-btn" href="#" key={i}>{s}</a>
              ))}
            </div>
          </div>
          <div className="f-col">
            <h4>Quick Links</h4>
            <ul>
              {[["hero","Home"],["about","About Us"],["location","Our Branch"],["gallery","Gallery"],["faq","FAQs"],["contact","Contact Us"]].map(([id,l])=>(
                <li key={id}><a href="#" onClick={e=>{e.preventDefault();scrollTo(id)}}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="f-col">
            <h4>What We Buy</h4>
            <ul>
              {["Cash Against Gold","Cash For Silver","Cash For Diamonds","Cash For Gold/Silver Coins"].map(l=>(
                <li key={l}><a href="#" onClick={e=>{e.preventDefault();scrollTo("what-we-buy")}}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="f-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919953211815">📞 +91 9953211815</a></li>
              <li><a href="https://wa.me/919953211815">💬 WhatsApp Us</a></li>
              <li><a href="mailto:samridhigoldbuyer@gmail.com">📧 Email Us</a></li>
              <li><a href="#" onClick={e=>{e.preventDefault();scrollTo("location")}}>📍 Greater Noida, UP</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Samridhi Gold Buyer. All Rights Reserved. Greater Noida, Uttar Pradesh.</span>
          <span>Open 7 Days | 10 AM – 7 PM</span>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating">
        <a className="fab fab-wa" href="https://wa.me/919953211815" target="_blank" rel="noreferrer" title="WhatsApp">💬</a>
        <a className="fab fab-ph" href="tel:+919953211815" title="Call Now">📞</a>
      </div>
    </>
  );
}
