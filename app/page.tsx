import { Keyword } from "./interactive";
import { ActivityGraph } from "./activity-graph";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-medium tracking-tight text-[var(--text)]">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-12 px-6 py-12 md:space-y-14 md:py-16">
      <section>
        <img
          src="/images/advaith-profile.jpg"
          alt="Advaith Arya G"
          width={64}
          height={64}
          className="mb-5 h-16 w-16 rounded-lg object-cover"
        />
        <h1 className="text-2xl font-medium tracking-tight">Advaith Arya G</h1>
        <p className="mt-1 text-[15px] text-[var(--text-tertiary)]">
          Based in Bangalore, India
        </p>
        <p className="mt-4 max-w-lg text-[17px] font-normal leading-7 text-[var(--text-secondary)]">
          I build{" "}
          <Keyword tooltip="small things that become useful systems">software</Keyword>{" "}
          that solves my problems. I care about{" "}
          <Keyword tooltip="how the pieces fit together">systems</Keyword>,{" "}
          <Keyword tooltip="how it feels to use">design</Keyword>, and{" "}
          <Keyword tooltip="fast enough to stay in flow">speed</Keyword>. Student
          based in Bangalore.
        </p>
        <p className="mt-4 max-w-lg text-[17px] font-normal leading-7 text-[var(--text-secondary)]">
          Hiring? Reach out via{" "}
          <Keyword tooltip="addvvaith@gmail.com">email</Keyword>.
        </p>
      </section>

      <section>
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="project-preview w-full overflow-visible">
            <img
              src="/images/webictrainer-project.png"
              alt="WebIC-Trainer"
              width={1200}
              height={630}
              className="aspect-[40/21] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-[15px] font-normal leading-6 text-[var(--text-secondary)]">
                <Keyword tooltip="browser-based digital logic lab">WebIC-Trainer</Keyword>{" "}
                lets you build, wire, simulate, and export{" "}
                <Keyword tooltip="classic digital logic chips">TTL IC circuits</Keyword>{" "}
                in the browser.
              </p>
              <p className="mt-3 text-[13px] text-[var(--text-secondary)]">
                Try it{" "}
                <a
                  href="https://webictrainer.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-preview-cta"
                >
                  here
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <SectionTitle>Activity</SectionTitle>
        <div className="mt-6">
          <ActivityGraph />
        </div>
      </section>

      <section>
        <SectionTitle>Connect</SectionTitle>
        <div className="mt-6 flex items-center gap-4 text-[var(--text-tertiary)]">
          <a
            href="https://x.com/advaitharyag"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="transition-colors hover:text-[var(--text)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[19px] w-[19px]"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/advaitharyag"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--text)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[19px] w-[19px]"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/advaitharyag/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--text)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[19px] w-[19px]"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8h4.44v15H.28V8Zm7.2 0h4.25v2.05h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.95 5.32 6.79V23h-4.43v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V23H7.48V8Z" />
            </svg>
          </a>
          <a
            href="mailto:addvvaith@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-[var(--text)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[19px] w-[19px]"
            >
              <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
              <path d="m3 6 9 6 9-6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
