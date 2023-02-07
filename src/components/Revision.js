import { useState } from "react";
import { NavLink } from "react-router-dom";
import FlashcardDiv from "./Flashcard";

const Revision = (props) => {
    const newArr = props.list.filter(e => {
        if (new Date().getTime() >= new Date(e.revisionDate).getTime() &&
            e.learnOrRevise >= 1 && e.learnOrRevise < 7) {
            return e;
        }
    })

    const [id, setId] = useState(Math.floor(Math.random() * newArr.length));

    return (
        <div>
            {newArr.length > 0 ? <FlashcardDiv arr={newArr} list={props.list} 
            setList={props.setList} rev={props.rev} idx={id} setIdx={setId} /> : 
            <div className="flashcard-div empty-list"><h3>
                nie ma już żadnych słów do nauczenia. dodaj słowa do listy, aby dalej się uczyć
            </h3></div>}
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default Revision;