import './App.css';
import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import Button from './Button';
import Phrase from './Phrase';


function App() {

  const phraseArray = [
    "A vida é valiosa, cuide dela!",
    "Não desista, você é mais forte do que pensa.",
    "Fale sobre seus sentimentos, isso pode salvar vidas.",
    "Seja gentil, você nunca sabe o que alguém está enfrentando.",
    "A esperança é a luz que nos guia nas horas mais escuras.",
    "Você não está sozinho, estamos aqui para apoiar você.",
    "O amor e o apoio podem fazer toda a diferença.",
    "A saúde mental é tão importante quanto a saúde física.",
    "Cuide de sua mente, corpo e alma.",
    "O amanhã pode ser melhor se você continuar lutando hoje.",
    "O Setembro Amarelo é um mês de conscientização e apoio.",
    "Ouvir é a melhor forma de ajudar alguém em crise.",
    "A depressão não define quem você é.",
    "Não tenha medo de pedir ajuda.",
    "Sua história é importante e merece ser ouvida.",
    "A vida é um presente precioso.",
    "Você é digno de amor e felicidade.",
    "Seu bem-estar mental é prioridade.",
    "O sorriso esconde muitas dores, seja compreensivo.",
    "Às vezes, a cura está em pedir ajuda.",
    "A dor é real, mas a esperança também.",
    "Viver é a melhor opção.",
    "Você é forte o suficiente para superar qualquer desafio.",
    "A vida pode ser difícil, mas você é mais forte.",
    "A cada amanhecer, há uma nova chance de recomeçar.",
    "Você é capaz de conquistar seus sonhos.",
    "A escuridão não dura para sempre, o sol sempre retorna.",
    "Cada dia é uma nova oportunidade de ser feliz.",
    "Ame a si mesmo, você merece.",
    "Você é único e especial, não se compare aos outros.",
    "Ajudar os outros também é uma forma de se ajudar.",
    "O apoio da família e amigos é inestimável.",
    "A vida é uma jornada, não uma corrida.",
    "Pequenos passos podem levar a grandes mudanças.",
    "A terapia é um recurso valioso para a saúde mental.",
    "Não se sinta culpado por cuidar de si mesmo.",
    "Mantenha a esperança viva em seu coração.",
    "Você é uma pessoa incrível, acredite nisso.",
    "A cada dia, você fica mais forte e mais sábio.",
    "Compartilhe suas lutas, você não está sozinho.",
    "A prevenção do suicídio começa com o diálogo aberto.",
  ];
  
  const randomIndex = () => 
  {
    const randomNumber = Math.floor(Math.random() * (40 - 0 + 1)) + 0;

    return randomNumber;
  }
  const [phrase, setPhrase] = useState(phraseArray[randomIndex]);
  const setPhraseFunc = () => {
    setPhrase(phraseArray[randomPhrase()]);
  };
  return (
    <div>
      <Button func={setPhraseFunc} />
      <Phrase ph={phrase} />
    </div>
  );
}

export default App;
