export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100 text-slate-900">
      <header className="relative flex flex-col gap-6 px-6 py-16 sm:px-12 lg:px-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-[-10%] top-[-30%] h-[320px] w-[320px] rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute left-[-15%] bottom-[-40%] h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-3xl" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
            Proposal 1 · Standard Waste & Gadget Recycling Service
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
            R1,200 Eco-Conscious Recycling for Households across Gauteng
          </h1>
          <p className="max-w-2xl text-lg text-slate-700 sm:text-xl">
            Trusted by Amahlubi Family Holdings to help families and students clear clutter responsibly,
            drive community impact, and keep e-waste out of landfills.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Prepared For",
              value: "Residential Clients · Small Households",
            },
            {
              label: "Prepared By",
              value: "Amahlubi Family Holdings",
            },
            {
              label: "Registered Office",
              value: "1277 King Fisher Street, Kaalfontein, Midrand, Gauteng, 1685",
            },
            {
              label: "Director",
              value: "Mr. Mluleki Wiseman Hadebe",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-emerald-100 bg-white/70 p-4 shadow-sm backdrop-blur"
            >
              <p className="text-xs uppercase tracking-widest text-emerald-500">
                {item.label}
              </p>
              <p className="mt-2 text-base font-semibold text-emerald-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 sm:px-12 lg:px-0">
        <section className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-emerald-100 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-emerald-950">
                Service Overview
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Thank you for considering Amahlubi Family Holdings for your waste and electronic
                recycling needs. Our Standard Package offers an affordable, planet-first service for
                clearing out household waste and unused electronics while uplifting schools and community
                centres across Gauteng.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-emerald-50 p-6 text-emerald-900">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Investment
              </span>
              <div className="text-4xl font-bold">R1,200</div>
              <p className="text-sm leading-relaxed text-emerald-700">
                Inclusive of collection logistics, processing, refurbishing, and donation coordination.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Waste Collection",
              detail: "Doorstep pickup of up to 30kg of non-hazardous household waste, sorted for proper processing.",
            },
            {
              title: "Gadget Recycling",
              detail: "Collection and secure handling of up to 5 electronic devices including phones, laptops, tablets, and chargers.",
            },
            {
              title: "Repurpose & Donate",
              detail: "Functional gadgets are data-wiped and donated to schools or community centres. Repairable tech is refurbished in-house and redirected to learners.",
            },
            {
              title: "Responsible Disposal",
              detail: "E-waste that cannot be revived is dismantled and recycled through certified recyclers — never sent to landfill.",
            },
            {
              title: "Data Sanitisation",
              detail: "Factory reset and software wipes conducted before any device leaves our custody for redistribution.",
            },
            {
              title: "One-Time Pickup",
              detail: "Collection scheduled within 5–7 working days anywhere in Gauteng, coordinated for your convenience.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6 rounded-3xl bg-white/90 p-10 shadow-lg ring-1 ring-emerald-100">
            <h2 className="text-3xl font-semibold text-emerald-950">
              Community Impact Workflow
            </h2>
            <ol className="space-y-4 text-slate-700">
              {[
                {
                  step: "1. Collection & Sorting",
                  desc: "Teams log each item on pickup, weigh waste, and separate electronics for assessment.",
                },
                {
                  step: "2. Secure Processing",
                  desc: "Technicians perform data sanitisation, testing, and repairs guided by a strict handling protocol.",
                },
                {
                  step: "3. Redistribution",
                  desc: "Working devices are cleaned and donated to partner schools and community hubs that rely on updated technology.",
                },
                {
                  step: "4. Ethical Recycling",
                  desc: "Non-repairable items are dismantled and recycled responsibly to meet South African e-waste regulations.",
                },
                {
                  step: "5. Impact Confirmation",
                  desc: "A personalised email summary confirms donation outcomes and environmental impact metrics.",
                },
              ].map((item) => (
                <li key={item.step} className="rounded-2xl border border-emerald-50 bg-emerald-50/40 p-4">
                  <p className="text-base font-semibold text-emerald-800">{item.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="flex flex-col justify-between gap-6 rounded-3xl bg-emerald-900 p-10 text-emerald-50 shadow-xl">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Ideal For</h2>
              <p className="text-sm leading-relaxed text-emerald-100">
                Families, students, or individuals ready to declutter responsibly while empowering education.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Households upgrading phones, laptops, or tablets",
                  "Student residences clearing semester-end electronics",
                  "Community-minded clients seeking curbside convenience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[2px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl bg-emerald-950/40 p-6">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-emerald-700/40 pb-2">
                  <dt className="text-emerald-200">TAX Number</dt>
                  <dd className="font-semibold text-emerald-50">9245125274</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-emerald-700/40 pb-2">
                  <dt className="text-emerald-200">Registration</dt>
                  <dd className="font-semibold text-emerald-50">2024/214615/07</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-emerald-200">Turnaround</dt>
                  <dd className="font-semibold text-emerald-50">5–7 working days</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-emerald-100">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-emerald-950">
                Next Steps to Book Your Service
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Booking is straightforward — provide the essentials and our scheduling team will confirm your pickup.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  "Share your preferred pickup date and collection address.",
                  "List the gadgets earmarked for recycling or donation, if known.",
                  "Confirm whether you will pay via EFT or cash on pickup.",
                  "Receive a confirmation with pickup window and prep checklist.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl bg-emerald-50 p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  Contact
                </p>
                <p className="text-lg font-semibold text-emerald-900">
                  Amahlubi Family Holdings Scheduling Desk
                </p>
                <p className="text-sm text-slate-600">
                  Drop us an email or call to confirm your collection details and lock in your pickup slot.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:bookings@amahlubifamily.co.za"
                  className="w-full rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-emerald-500"
                >
                  bookings@amahlubifamily.co.za
                </a>
                <a
                  href="tel:+27110000000"
                  className="w-full rounded-full border border-emerald-500 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  +27 (0)11 000 0000
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Office Hours · Monday to Friday, 08:30–17:00 · Gauteng coverage guaranteed within 5–7 working days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Amahlubi Family Holdings · Driven by responsible recycling.</p>
          <p>Registered Office: 1277 King Fisher Street, Kaalfontein, Midrand, Gauteng, 1685</p>
        </div>
      </footer>
    </div>
  );
}
