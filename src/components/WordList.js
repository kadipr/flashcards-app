import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "../css/word-list.css";

const WordList = (props) => {

    return (
        <div className="word-list-wrapper">
            <header>
                <div className="word-list-header">
                    <h2>lista słów</h2>
                </div>

                <div className="adding-box">
                    <input placeholder="słowo" />
                    <input placeholder="definicja" />
                    {/* css przycisku */}
                    <button onClick={props.add}>dodaj fiszkę</button>
                </div>

                <ul className="list">
                    {props.list.map(e => {
                        return (
                            <li key={e.id}>
                                {/* poprawić flex elementów */}
                                <span>{e.word} </span><span>{e.definition} </span>
                                {/* poprawic liczby w ponizszej linijce */}
                                <span>{e.learnOrRevise === 0 ? "do nauki" : 
                                e.learnOrRevise === 5 ? "nauczone" : `powtórka za ${e.id}`}</span>
                                <button onClick={() => props.delBtn(e.id)}>x</button>
                            </li>
                        )
                    })}
                </ul>

            </header>
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default WordList;