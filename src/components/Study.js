import { NavLink } from "react-router-dom";
import "../css/study.css";

const Study = (props) => {
    const newArr = props.list.filter(e => {
        return e.learnOrRevise === 0;
    })

    let id = Math.floor(Math.random() * newArr.length);
    
    // newfunc do napisania w innym komponencie (w wersji dla revision zmienna istorevise)
    // zmienić nazwę tej funkcji
    console.log(new Date().getTime());
   
    let newFunc = (isFlashcardKnown, idx) => {
        
        if (isFlashcardKnown) {
            props.setList(props.list.map(flashcard => {
                if (flashcard.id !== idx) {
                    return flashcard;
                } else {
                    const newInterval = props.rev[flashcard.learnOrRevise + 1]
                    const revDay = new Date();
                    revDay.setDate(new Date().getDate() + newInterval);
                    
                    return {
                        ...flashcard, 
                        learnOrRevise: flashcard.learnOrRevise + 1,
                        revisionDate: revDay
                    };
                }
            }));
            console.log(props.list)
        } else {
            props.setList(props.list);
        }
    }

    // FlashcardDiv w osobnym pliku
    const FlashcardDiv = () => {
        return (
            <div className="flashcard-div">
                <div className="flashcard-div-paragraphs">
                    <p className="word-flashcard"><span>słowo / wyrażenie: </span>{newArr[id].word}</p>
                    <p className="definition-flashcard"><span>znaczenie: </span>{newArr[id].definition}</p>
                </div>
                <div className="flashcard-div-buttons">
                    <button onClick={() => newFunc(false, newArr[id].id)}>nie umiem</button>
                    <button onClick={() => newFunc(true, newArr[id].id)}>umiem</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {newArr.length > 0 ? <FlashcardDiv /> : 
            <div className="flashcard-div empty-list"><h3>
                nie ma już żadnych słów do nauczenia. dodaj słowa do listy, aby dalej się uczyć
            </h3></div>}
            <NavLink to="/"><button className="return-btn">Wróć do strony głównej</button></NavLink>
        </div>
    )
}

export default Study;