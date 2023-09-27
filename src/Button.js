import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./button.css";
import Paragraph from "./Paragraph";

const Button = () => {
  const phraseArray = [
    "Acredite em si mesmo e você estará no caminho certo.",
    "O sucesso nasce do desejo, determinação e persistência em superar obstáculos.",
    "A única limitação que você tem é aquela que você coloca em si mesmo.",
    "A jornada de mil milhas começa com um único passo.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "Você é mais forte do que imagina, mais corajoso do que pensa e mais talentoso do que sabe.",
    "Acredite no impossível e não deixe ninguém te dizer o contrário.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nada é impossível, a palavra em si diz 'eu sou possível'.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "Quando uma porta da felicidade se fecha, outra se abre; mas frequentemente olhamos tanto para a porta fechada que não vemos a que foi aberta para nós.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Se você quer algo que nunca teve, você deve fazer algo que nunca fez.",
    "O sucesso é a consequência do trabalho duro, dedicação e aprender com o fracasso.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Quanto maior o obstáculo, mais glória em superá-lo.",
    "O verdadeiro segredo para o sucesso é o entusiasmo.",
    "Você é capaz de coisas incríveis.",
    "Seja o tipo de pessoa que você quer conhecer.",
    "Acredite em seus sonhos e eles podem se tornar realidade.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "Não é sobre quantas vezes você cai, mas quantas vezes você se levanta.",
    "A força não vem da capacidade física. Ela vem de uma vontade indomável.",
    "Quando você quer alguma coisa, todo o universo conspira para que você realize seu desejo.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Lembre-se: você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
    "Não deixe que o que você não pode fazer atrapalhe o que você pode fazer.",
    "A persistência é o caminho do êxito.",
    "Você é o autor da sua história de vida. Escreva um conto incrível.",
    "A jornada de mil milhas começa com um único passo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Seja você mesmo, todos os outros já existem.",
    "Pense grande e seus feitos serão grandes.",
    "Não importa onde você esteja, você está exatamente onde deveria estar.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e faça delas grandes.",
    "A vitória é doceest quando você conhece o gosto do fracasso.",
    "Nunca é tarde demais para ser o que você poderia ter sido."
  ];

  const randomPhrase = () => {
    const randomNumber = Math.floor(Math.random() * (40 - 0 + 1)) + 0;

    return randomNumber;
  };

  const [phrase, setPhrase] = useState(phraseArray[randomPhrase()]);

  const setPhraseFunc = () => {
    setPhrase(phraseArray[randomPhrase()]);
  };

  return (
    <div>
      <button className="button" onClick={setPhraseFunc}>
        Clique aqui!
      </button>
      <Paragraph phrase={phrase} />
    </div>
  );
};

export default Button;
