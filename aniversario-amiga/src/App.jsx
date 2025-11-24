import React, { useMemo } from "react";
import Typewriter from "./components/Typewriter.jsx";
import Quiz from "./components/Quiz.jsx";
import StarfieldBackground from "./components/StarfieldBackground.jsx";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

export default function App() {
  const greeting = useMemo(() => getGreeting(), []);

  // 🔁 Troque essas infos pela de vocês
  const friendName = "Alice";
  const shortSubtitle = "Hoje o mundo ficou oficialmente mais bonito.";

  const letterText = `
Oi, ${friendName} 💜

Cada linha desse site é um pouquinho de tempo que eu quis gastar pensando em você.
É simples, mas é sincero 💜 eu torço de verdade para que esse novo ano
seja leve, cheio de coisas bonitas, pessoas que te respeite e momentos que te façam sorrir
sem nem perceber.

Obrigado por ser quem você é, por todas as conversas, por me aguentar do jeito que eu sou
e por deixar meus dias mais legais.

Feliz aniversário. Você merece o mundo, de verdade.

De: alguém que tem muita sorte de te conhecer.
`;

  return (
    <div className="app-container">
      <StarfieldBackground />

      <main className="content">
        <section className="card hero">
          <p className="hero-greeting">
            {greeting}, {friendName} ✨
          </p>
          <h1 className="hero-title">Feliz aniversário!</h1>
          <p className="hero-subtitle">{shortSubtitle}</p>

          <Typewriter
            text="Antes de tudo: coloca um sorriso no rosto e aproveita esse momento só seu."
            speed={40}
          />
        </section>

        <section className="card quiz-section">
          <h2 className="section-title">Um mini quiz sobre a gente 🎲</h2>
          <p className="section-text">
            Não é prova, não vale nota. É só uma forma de revisitar alguns sentimentos.
          </p>
          <p className="section-text">No final tem um presente (em forma de palavras).</p>
          <Quiz />
        </section>

        <section className="card letter-section" id="carta">
          <h2 className="section-title">Uma carta pra você 💌</h2>
          {/* <p className="section-text small">
            Se você já terminou o quiz, considere isto seu “presente destravado”.
          </p> */}
          <details className="letter-details">
            <summary className="letter-summary">
              Clique aqui para abrir a carta
            </summary>
            <p className="letter-text">
              {letterText.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </details>
        </section>

        <footer className="footer">
          <p>
            Feito com 💜 e um pouquinho de
            carinho.
          </p>
          <p className="footer-small">
            💜 Eu te amo desde sempre para sempre 💜
          </p>
        </footer>
      </main>
    </div>
  );
}