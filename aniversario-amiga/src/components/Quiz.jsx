import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "Qual foi o primeiro assunto que a gente conversou de verdade?",
    placeholder: "Ex: sobre trabalho, sobre série, sobre qualquer coisa...",
  },
  {
    question: "Uma coisa que você acha que combina comigo?",
    placeholder: "Pode ser uma qualidade, defeito, mania...",
  },
  {
    question: "Se você tivesse que resumir nossa conexão em uma palavra, qual seria?",
    placeholder: "Ex: Conexão, Reciprocidade, Conforto, Rara, Leal...",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState(
    QUESTIONS.map(() => "")
  );
  const [finished, setFinished] = useState(false);

  function handleChange(index, value) {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const allFilled = answers.every((a) => a.trim().length > 0);
    if (!allFilled) {
      alert("Responde tudo bonitinho antes 😏");
      return;
    }

    setFinished(true);
    const letterSection = document.getElementById("carta");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div>
      <form className="quiz-form" onSubmit={handleSubmit}>
        {QUESTIONS.map((q, i) => (
          <div className="quiz-item" key={i}>
            <label className="quiz-label">
              {i + 1}. {q.question}
            </label>
            <textarea
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="quiz-textarea"
              placeholder={q.placeholder}
            />
          </div>
        ))}

        <button type="submit" className="quiz-button">
          Ver meu “presente” 💝
        </button>
      </form>

      {finished && (
        <p className="quiz-finish-msg">
          Pronto! Agora desce um pouquinho a página e abre a carta. 😉
        </p>
      )}
    </div>
  );
}
