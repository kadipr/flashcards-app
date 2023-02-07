const FlashcardDiv = (props) => {

    const updateFlashcard = (isFlashcardKnown, idx, setIdx) => {
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
        } else {
            setIdx(Math.floor(Math.random() * props.arr.length));
        }
    }

    return (
        <div className="flashcard-div">
            <div className="flashcard-div-paragraphs">
                <p className="word-flashcard"><span>słowo / wyrażenie: </span>{props.arr[props.idx].word}</p>
                <p className="definition-flashcard"><span>znaczenie: </span>{props.arr[props.idx].definition}</p>
            </div>
            <div className="flashcard-div-buttons">
                <button onClick={() => updateFlashcard(false, props.arr[props.idx].id, props.setIdx)}>nie umiem</button>
                <button onClick={() => updateFlashcard(true, props.arr[props.idx].id, props.setIdx)}>umiem</button>
            </div>
        </div>
    )
}

export default FlashcardDiv;