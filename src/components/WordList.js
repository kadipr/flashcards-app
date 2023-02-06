import { NavLink } from "react-router-dom";
import "../css/word-list.css";
import List from "./List";

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
                    <button onClick={props.add}>dodaj fiszkę</button>
                </div>

                <List l={props.list} deleteBtn={props.delBtn} />
                

            </header>
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default WordList;