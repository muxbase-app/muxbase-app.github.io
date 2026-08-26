import Image from 'next/image';

const githubUrl = 'https://github.com/muxbase-app/muxbase';

const agents = ['Claude Code', 'Codex', 'OpenCode', 'Pi', 'Shell'];

const features = [
  {
    number: '01',
    title: 'See the whole fleet',
    description:
      'Monitor every agent from one window. Move from a fleet-wide overview to a focused terminal without losing context.',
  },
  {
    number: '02',
    title: 'Isolate every change',
    description:
      'Give each implementation task its own Git worktree and branch, so parallel agents stay independent until you choose to integrate them.',
  },
  {
    number: '03',
    title: 'Review before merge',
    description:
      'Connect live execution to diffs, activity, summaries, tokens, and worktree state. Review the result before it reaches your base branch.',
  },
  {
    number: '04',
    title: 'Keep control local',
    description:
      'MuxBase coordinates the agent CLIs and tools already on your Mac. No MuxBase account, hosted backend, or background daemon required.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MuxBase',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS 13 or newer',
  url: 'https://muxbase-app.github.io/',
  codeRepository: githubUrl,
  downloadUrl: `${githubUrl}#install`,
  license: `${githubUrl}/blob/main/LICENSE`,
  description:
    'Open-source mission control for running and reviewing multiple AI coding agents from one macOS desktop app.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="MuxBase home">
          <span className="brand-mark" aria-hidden="true">
            &gt;_
          </span>
          <span>MuxBase</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#agents">Agents</a>
          <a href={`${githubUrl}#install`}>Install</a>
          <a className="nav-github" href={githubUrl}>
            GitHub
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="eyebrow">
          <span className="status-dot" /> Open source · macOS 13+
        </div>
        <h1>
          One control plane.
          <br />
          <span>Every coding agent.</span>
        </h1>
        <p className="hero-copy">
          Run Claude Code, Codex, OpenCode, and Pi side by side. Monitor
          progress, isolate implementation work, inspect changes, and merge
          from one desktop app.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={`${githubUrl}#install`}>
            Install MuxBase <span aria-hidden="true">↗</span>
          </a>
          <a className="button secondary" href={githubUrl}>
            View on GitHub
          </a>
        </div>

        <div className="product-frame">
          <div className="frame-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>Fleet · aurora-engine</p>
          </div>
          <Image
            src="/assets/muxbase-demo-static.webp"
            alt="MuxBase Fleet view showing four parallel AI coding agent sessions"
            width={1600}
            height={900}
            priority
          />
        </div>
      </section>

      <section className="agents shell" id="agents" aria-label="Supported agents">
        <p>Bring the agents you already use</p>
        <div className="agent-list">
          {agents.map((agent) => (
            <span key={agent}>{agent}</span>
          ))}
        </div>
      </section>

      <section className="problem shell">
        <p className="section-label">The operations layer</p>
        <div className="problem-grid">
          <h2>One agent is a conversation. A fleet is an operations problem.</h2>
          <p>
            Scattered terminals, unclear status, and overlapping edits create
            more coordination work as your agent count grows. MuxBase turns
            those sessions into one observable, deliberate workflow.
          </p>
        </div>
      </section>

      <section className="features shell" id="features">
        {features.map((feature) => (
          <article className="feature" key={feature.number}>
            <span aria-hidden="true">{feature.number}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="workflow shell">
        <div>
          <p className="section-label">A complete loop</p>
          <h2>Launch. Observe. Review. Integrate.</h2>
        </div>
        <ol>
          <li>
            <span aria-hidden="true">01</span>Choose an agent and describe the task.
          </li>
          <li>
            <span aria-hidden="true">02</span>Run it directly or inside an isolated worktree.
          </li>
          <li>
            <span aria-hidden="true">03</span>Watch activity and inspect the resulting diff.
          </li>
          <li>
            <span aria-hidden="true">04</span>Merge deliberately when the work is ready.
          </li>
        </ol>
      </section>

      <section className="cta shell">
        <div>
          <p className="section-label">Your agents. One window.</p>
          <h2>Bring order to parallel development.</h2>
        </div>
        <div className="cta-actions">
          <a className="button primary" href={`${githubUrl}#install`}>
            Get started <span aria-hidden="true">↗</span>
          </a>
          <p>MIT licensed · Local first · Open source</p>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            &gt;_
          </span>
          <span>MuxBase</span>
        </a>
        <p>Mission control for AI coding agents.</p>
        <nav aria-label="Footer navigation">
          <a href={githubUrl}>GitHub</a>
          <a href={`${githubUrl}/discussions`}>Discussions</a>
          <a href={`${githubUrl}/blob/main/LICENSE`}>MIT License</a>
        </nav>
      </footer>
      </main>
    </>
  );
}
