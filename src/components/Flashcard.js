const FlashcardDiv = (props) => {
    let updateFlashcard = (isFlashcardKnown, idx) => {
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

    return (
        <div className="flashcard-div">
            <div className="flashcard-div-paragraphs">
                <p className="word-flashcard"><span>słowo / wyrażenie: </span>{props.arr[props.idx].word}</p>
                <p className="definition-flashcard"><span>znaczenie: </span>{props.arr[props.idx].definition}</p>
            </div>
            <div className="flashcard-div-buttons">
                <button onClick={() => updateFlashcard(false, props.arr[props.idx].id)}>nie umiem</button>
                <button onClick={() => updateFlashcard(true, props.arr[props.idx].id)}>umiem</button>
            </div>
        </div>
    )
}

export default FlashcardDiv;