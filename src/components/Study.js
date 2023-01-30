import { NavLink } from "react-router-dom";

const Study = (props) => {
    const newArr = props.list.filter(e => {
        return e.learnOrRevise === 0;
    })

    let id = Math.floor(Math.random() * newArr.length);

    let newFunc = (isFlashcardKnown, idx) => {

        if (isFlashcardKnown) {
            props.setList(props.list.map(flashcard => {
                if (flashcard.id !== idx) {
                    return flashcard;
                } else {
                    return {...flashcard, learnOrRevise: flashcard.learnOrRevise + 1};
                }
            }));
            console.log(props.list)
        } else {
            props.setList(props.list);
        }
    }

    const FlashcardDiv = () => {
        return (
            <div>
                <p className="word-flashcard">{newArr[id].word}</p>
                <p className="definition-flashcard">{newArr[id].definition}</p>
                <button onClick={() => newFunc(false, newArr[id].id)}>nie umiem</button>
                <button onClick={() => newFunc(true, newArr[id].id)}>umiem</button>
            </div>
        )
    }

    return (
        <div>
            {newArr.length > 0 ? <FlashcardDiv /> : 
            <p>nie ma już żadnych słów do nauczenia</p>}
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default Study;