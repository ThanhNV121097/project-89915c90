import { CharacterCounterCard } from "../components/CharacterCounterCard";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="card-shell" aria-label="Character counter">
        <CharacterCounterCard />
      </section>
    </main>
  );
}
