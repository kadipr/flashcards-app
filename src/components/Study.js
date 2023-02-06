import { NavLink } from "react-router-dom";
import "../css/study.css";
import FlashcardDiv from "./Flashcard";

const Study = (props) => {
    const newArr = props.list.filter(e => {
        return e.learnOrRevise === 0;
    })

    let id = Math.floor(Math.random() * newArr.length);

    return (
        <div>
            {newArr.length > 0 ? <FlashcardDiv arr={newArr} idx={id}list={props.list} setList={props.setList} rev={props.rev} /> : 
            <div className="flashcard-div empty-list"><h3>
                nie ma już żadnych słów do nauczenia. dodaj słowa do listy, aby dalej się uczyć
            </h3></div>}
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default Study;