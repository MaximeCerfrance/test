import Link from 'next/link';

export default function Home() {
  return (
    <main style={{padding:"2rem", fontFamily:"sans-serif"}}>
      <h1>Capsule Temporelle</h1>
      <p>Prototype d'application SaaS de capsule temporelle numérique.</p>
      <ul>
        <li><Link href="/api/capsules">API Capsules</Link></li>
      </ul>
    </main>
  );
}
