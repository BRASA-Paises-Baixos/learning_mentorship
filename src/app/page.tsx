const ebookHighlights = [
  {
    title: "Design Systems for Scale",
    focus: "64-page playbook",
    detail: "Component governance, token strategy, and rollout plans.",
  },
  {
    title: "Product-Led Motion",
    focus: "48-page framework",
    detail: "Activation, retention, and growth loops for SaaS teams.",
  },
  {
    title: "AI for Real Work",
    focus: "52-page guide",
    detail: "Responsible workflows, prompts, and evaluation checklists.",
  },
];

const videoHighlights = [
  {
    title: "From Idea to MVP",
    focus: "6-part masterclass",
    detail: "Founder-led sprints with live teardown sessions.",
  },
  {
    title: "Conversion Architecture",
    focus: "4-part workshop",
    detail: "Positioning, landing pages, and pricing strategy.",
  },
  {
    title: "Executive Communication",
    focus: "5-part series",
    detail: "Narratives, stakeholder buy-in, and update cadences.",
  },
];

const mentors = [
  {
    name: "Avery Chen",
    role: "Product Strategy",
    detail: "Former VP Product, scaled teams from 5 to 80.",
  },
  {
    name: "Diego Navarro",
    role: "Growth + GTM",
    detail: "Built revenue engines for category-defining SaaS.",
  },
  {
    name: "Lena Morozov",
    role: "Design Leadership",
    detail: "Led design systems at global fintech platforms.",
  },
];

const differentiators = [
  {
    title: "Curated, not crowded",
    detail:
      "Every module is edited, structured, and reviewed by operators. No noise, no filler.",
  },
  {
    title: "Mentor-authored insight",
    detail:
      "Learn from people who have shipped products, not recycled summaries or generic AI output.",
  },
  {
    title: "Always up to date",
    detail:
      "Quarterly refreshes, new case studies, and drop-in updates across the library.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-sora)] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="relative">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/30 via-blue-300/30 to-purple-300/30 blur-3xl dark:from-indigo-500/20 dark:via-blue-400/20 dark:to-purple-400/20" />
          <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/30 via-indigo-300/30 to-purple-200/30 blur-3xl dark:from-blue-500/20 dark:via-indigo-500/20 dark:to-purple-500/20" />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
            <div className="flex flex-col gap-10">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-300">
                Premium Learning Library
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Master the work that moves your career forward.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                  Lumina Learn is a premium collection of ebooks and video learning
                  designed by mentors who have built category-defining products. No fluff.
                  Just the strategies, frameworks, and playbooks that drive real results.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  href="https://gumroad.com/l/your-product"
                >
                  Get Access
                </a>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  New drops every month · Access on any device
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Deep-focus ebooks",
                  detail:
                    "Playbooks written like internal memos: focused, strategic, and easy to apply.",
                },
                {
                  title: "Cinematic video lessons",
                  detail:
                    "Short, structured modules with clear outcomes and real artifacts.",
                },
                {
                  title: "Mentor-led updates",
                  detail:
                    "Fresh insights and case studies added quarterly with zero noise.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/50"
                >
                  <h3 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                Ebooks and video learning that feel like executive briefings.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Each topic combines a concise ebook with a complementary video series so
                you can apply the material immediately.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950 dark:text-white">
                    Ebook Library
                  </h3>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                    12 titles
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {ebookHighlights.map((ebook) => (
                    <div
                      key={ebook.title}
                      className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950"
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {ebook.title}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                        {ebook.focus}
                      </div>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        {ebook.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950 dark:text-white">
                    Video Studio
                  </h3>
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
                    28 sessions
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {videoHighlights.map((video) => (
                    <div
                      key={video.title}
                      className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950"
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {video.title}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                        {video.focus}
                      </div>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        {video.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                Mentors as authors, not influencers.
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Every lesson is written and recorded by operators who have built
                teams, scaled products, and shipped at high-growth companies. You’re
                learning the internal playbook, not a highlight reel.
              </p>
            </div>
            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div
                  key={mentor.name}
                  className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {mentor.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {mentor.role}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {mentor.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                Why this platform beats free content or AI summaries.
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                The web is crowded. We combine mentor-led knowledge, structured
                outcomes, and deliberate pacing so you can move faster with less
                noise.
              </p>
            </div>
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/50"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 p-10 text-white shadow-xl dark:border-slate-800/80">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-purple-400/30 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold sm:text-4xl">
                  Ready to get access?
                </h2>
                <p className="mt-3 max-w-xl text-base text-white/70">
                  Join leaders who want a focused, premium learning experience for
                  modern product and growth work.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
                href="https://gumroad.com/l/your-product"
              >
                Get Access
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
