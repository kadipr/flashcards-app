import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import WordList from "./components/WordList";
import Study from "./components/Study";
import Revision from "./components/Revision";
import "./app.css";

function App() {
  const [words, setWords] = useState(JSON.parse(localStorage.getItem('words')) || []);

  useEffect(() => {
    console.log(1)
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const revisions = {
    1: 1,
    2: 3,
    3: 7,
    4: 14,
    5: 30,
    6: 90,
     7: 0
  }


  // const revisions = {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0
  // }

  const addWords = (e) => {
    const [w, d] = e.target.parentNode.children;

    if (w.value === "" || d.value === "") {
      alert("Podaj słowo i definicję");
      return;
    }

    const newObj = {
      id: new Date().getTime(), 
      word: w.value, 
      definition: d.value,
      learnOrRevise: 0,
      revisionDate: null
    }
    setWords(prev => [...prev, newObj])
    w.value = "";
    d.value = "";
  }

  const delFlashcard = (id) => {
    const newArray = [];

    words.forEach(el => {
      if (el.id !== id) newArray.push(el);
    })

    setWords(newArray);
  }

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wordlist" element={<WordList add={addWords} delBtn={delFlashcard} list={words} />} />
        <Route path="/study" element={<Study list={words} setList={setWords} rev={revisions} />} />
        <Route path="/Revision" element={<Revision list={words} setList={setWords} rev={revisions} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
