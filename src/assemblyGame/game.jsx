import React from "react";
import { useState } from "react";
import "./game.css";
import { languages } from "./language";

export default function AssemblyEndGame() {
  const languageElements = languages.map((item) => {
    const style = {
      backgroundColor: item.backgroundColor,
      color: item.color,
    };
    return (
      <span style={style} key={item.name} className="lang">
        {item.name}
      </span>
    );
  });

  const [currentWord, setCurrentWord] = useState("react");

  const letters = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElements = alphabets
    .split("")
    .map((alpha) => <button key={alpha}>{alpha}</button>);

  return (
    <main>
      <header>
        <h1>Assembly : End Game</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world save
          from Assembly!
        </p>
      </header>

      <section className="game-status">
        <h2>You Win</h2>
        <p>Well done 🥳</p>
      </section>

      <section className="language">{languageElements}</section>

      <section className="word">{letters}</section>

      <section className="keyboard">{alphabetElements}</section>

      <button className="newGame">New game</button>
    </main>
  );
}
