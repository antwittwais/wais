"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0E1E3A] text-slate-100">
      {/* NAVBAR */}
      <motion.header
        className="sticky top-0 z-40 backdrop-blur border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: scrolled ? 0 : -4,
          backgroundColor: scrolled
            ? "rgba(14, 30, 58, 0.97)"
            : "rgba(14, 30, 58, 0.75)",
          boxShadow: scrolled
            ? "0 12px 30px rgba(0,0,0,0.6)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <img 
  src="/logo.png" 
  alt="WAIS Logo" 
  className="h-8 w-auto opacity-90"
/>


            <div className="leading-tight">
              <div className="font-semibold tracking-wide">WAIS</div>
              <div className="text-xs opacity-80">
                AI Systems That Work While You Sleep
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm opacity-90">
            <a href="#services" className="hover:opacity-100">
              Services
            </a>
            <a href="#about" className="hover:opacity-100">
              About
            </a>
            <a href="#demo" className="hover:opacity-100">
              Demo
            </a>
            <a href="#contact" className="hover:opacity-100">
              Contact
            </a>
          </nav>
        </div>
      </motion.header>

      {/* HERO */}
      <motion.section
        className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            AI Systems That Work{" "}
            <span className="text-blue-400">While You Sleep</span>
          </h1>
          <p className="mt-5 text-lg opacity-90 max-w-xl">
            WAIS designs simple, smart automations that save business owners 10+
            hours per week— without new logins or complex software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium hover:bg-blue-500"
            >
              Get a Free Automation Audit
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              See Services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm opacity-80">
            <div>✅ No-code delivery</div>
            <div>⚡ Fast 7-day setup</div>
            <div>🛠️ Works with tools you already use</div>
          </div>
        </motion.div>

        {/* WAIS Live Feed Card */}
        <motion.div
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl shadow-emerald-500/10 backdrop-blur-md"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16,185,129,0.25)" }}
        >
          <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
            <span className="font-medium text-slate-200">WAIS Live Feed</span>
            <span>Today</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="text-[11px] font-medium text-slate-400">
                New AI-qualified leads
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-400">17</p>
              <p className="mt-2 text-[11px] text-slate-500">
                From landing page, chatbots & follow-up sequences.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="text-[11px] font-medium text-slate-400">
                Pipeline value (90 days)
              </p>
              <p className="mt-1 text-2xl font-semibold text-cyan-300">
                $482k
              </p>
              <p className="mt-2 text-[11px] text-slate-500">
                Estimated commissions + equity opportunities.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 md:col-span-2">
              <p className="text-[11px] font-medium text-slate-400">
                WAIS is working on:
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                <li>
                  • Replying to a Facebook lead about mortgage protection.
                </li>
                <li>• Drafting a follow-up email for a seller finance deal.</li>
                <li>
                  • Booking a call for a business-owner key-person policy.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-[11px] text-slate-300">
            <span>
              “While I’m with my family, WAIS keeps talking to my leads.”
            </span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
              Always On
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        id="services"
        className="bg-[#050B18] border-t border-white/10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-semibold">Services</h2>
          <p className="mt-3 opacity-80 max-w-2xl">
            Pick a package or request a custom workflow. All plans include
            documentation and optional monthly support.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <motion.div
              className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Quick-Win Automation</h3>
                <span className="opacity-80 text-xs">$500–$750</span>
              </div>
              <ul className="space-y-2 opacity-90">
                <li>• 1 priority workflow automated</li>
                <li>• Lead capture → AI reply → sheet/CRM</li>
                <li>• Owner SMS alert + follow-up reminder</li>
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-blue-400/60 bg-blue-500/15 p-5 text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">AI Office Assistant</h3>
                <span className="opacity-90 text-xs">$1,500–$2,500</span>
              </div>
              <ul className="space-y-2 opacity-90">
                <li>• 3–5 automations across ops & marketing</li>
                <li>• AI-drafted emails & smart summaries</li>
                <li>• Simple dashboard for your team</li>
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Full Automation Suite</h3>
                <span className="opacity-80 text-xs">$3,000–$5,000+</span>
              </div>
              <ul className="space-y-2 opacity-90">
                <li>• End-to-end workflow audit & build</li>
                <li>• Custom playbooks & team training</li>
                <li>• 90-day optimization & support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold">About WAIS</h2>
        <p className="mt-4 opacity-90 max-w-2xl">
          WAIS brings enterprise-grade automation to real small businesses. We
          plug into the tools you already use and remove repetitive admin work
          so you can focus on growth, not grunt work.
        </p>
        <ul className="mt-6 space-y-2 text-sm opacity-90">
          <li>• Privacy-first: your data stays in your stack.</li>
          <li>• Speed: most builds delivered within 7 days.</li>
          <li>• Clear docs: everything is documented so you stay in control.</li>
        </ul>
      </motion.section>

      {/* DEMO */}
      <motion.section
        id="demo"
        className="bg-[#050B18] border-t border-white/10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-semibold">See a Live Demo</h2>
          <p className="mt-3 opacity-80 max-w-2xl">
            This 90-second walkthrough will show the lead → sheet → AI reply →
            SMS → reminder flow.
          </p>
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 aspect-video grid place-items-center text-sm opacity-70">
            Video placeholder – we’ll swap this for your Loom/YouTube demo
            later.
          </div>
        </div>
      </motion.section>

      {/* CONTACT / BOOKING */}
            {/* CONTACT / BOOKING */}
            <motion.section
        id="book"
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold">Book a Free Automation Audit</h2>
        <p className="mt-3 opacity-80 max-w-prose">
          Tell us a bit about your business and we’ll identify 2–3 processes you
          can automate immediately. No obligation.
        </p>

        <form
          className="mt-6 grid gap-4 max-w-lg text-sm"
          action="https://formsubmit.co/waisceo@gmail.com"
          method="POST"
        >
          {/* disable captcha & set email subject */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New WAIS Automation Audit Lead"
          />
          {/* where to redirect after success (your live site) */}
          <input
            type="hidden"
            name="_next"
            value="https://wais-roan.vercel.app/#book"
          />

          <input
            className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            name="name"
            required
          />
          <input
            className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Business / website (optional)"
            name="business"
          />
          <textarea
            className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What would you love to stop doing manually?"
            rows={4}
            name="message"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium hover:bg-blue-500"
          >
            Send
          </button>
        </form>

      </motion.section>


      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-80">
          <div>© {new Date().getFullYear()} WAIS. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="mailto:hello@wais.ai">hello@wais.ai</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
