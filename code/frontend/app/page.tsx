export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="card-shell" aria-label="Character counter">
        <h1 id="title">Character Counter</h1>
        <p>Type below and watch the count change.</p>

        <div className="composer">
          <label htmlFor="input">Your text</label>
          <textarea id="input" aria-describedby="count hint" placeholder="Type something" />
          <div className="meta">
            <div className="count" id="count" aria-live="polite">
              <span>0</span> characters
            </div>
            <button type="button" id="clear">
              Clear
            </button>
          </div>
          <p className="hint" id="hint">
            Nothing you type leaves this page.
          </p>
        </div>
      </section>
    </main>
  );
}
