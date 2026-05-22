export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Healthcare Ops
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict Patient No-Shows.<br />
          <span className="text-[#58a6ff]">Optimize Every Slot.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload appointment history or connect your EHR. Our ML model scores each upcoming appointment by no-show risk so you can overbook smartly and send targeted reminders — reducing revenue loss without burning out staff.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Free Trial — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-8">
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">87%</p>
            <p className="text-sm text-[#8b949e] mt-1">Prediction accuracy</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">-34%</p>
            <p className="text-sm text-[#8b949e] mt-1">No-show rate reduction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">+$4k</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg monthly revenue recovered</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Per practice location</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited appointment predictions",
              "CSV upload & REST API integration",
              "Automated SMS/email reminder targeting",
              "Overbooking optimization dashboard",
              "EHR webhook support",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the no-show prediction work?",
              a: "We analyze historical appointment data — including patient demographics, appointment type, lead time, day of week, and past no-show history — using a gradient-boosted ML model trained on millions of healthcare appointments."
            },
            {
              q: "Is patient data HIPAA compliant?",
              a: "Yes. All data is encrypted at rest and in transit. We sign BAAs with all customers and store data in SOC 2 Type II certified infrastructure. Patient PII is never used for model training across accounts."
            },
            {
              q: "Can I integrate with my existing EHR?",
              a: "We support CSV bulk upload, a REST API for real-time scoring, and webhook listeners compatible with major EHR systems including Epic, Cerner, and Athenahealth."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} NoShow Predictor. All rights reserved.
      </footer>
    </main>
  );
}
