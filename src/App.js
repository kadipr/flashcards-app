import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import WordList from "./components/WordList";
import Study from "./components/Study";
import Revision from "./components/Revision";
import "./app.css";

function App() {
  // zapisać w localStorage
  const [words, setWords] = useState([]);

  const addWords = (e) => {
    const [w, d] = e.target.parentNode.children;

    if (w.value === "" || d.value === "") {
      alert("Podaj słowo i definicję");
      return;
    }

    // dodać nowa właściwość, która będzie odpowiadać za to czy dane słowo
    // jest do nauki/ do powtorki za 1/ 3 dni/itd/ nauczone
    const newObj = {
      id: new Date().getTime(), 
      word: w.value, 
      definition: d.value,
      learnOrRevise: 0
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
        <Route path="/study" element={<Study list={words} setList={setWords} />} />
        <Route path="/Revision" element={<Revision list={words} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
