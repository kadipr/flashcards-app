import { NavLink } from "react-router-dom";
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
                                <span className="bold">{e.word} </span>
                                <span className="bold">{e.definition} </span>
                                {/* poprawic liczby w ponizszej linijce */}
                                <span>{e.learnOrRevise === 0 ? "do nauki" : 
                                // podac za ile dni nastepna powtórka
                                e.learnOrRevise === 6 ? "nauczone" : `powtórka za ${e.revisionDate}`}</span>
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