import "../css/word-list.css";

const List = (props) => {
    const difference = (date) => {
        const diffInMilliseconds = new Date(date).getTime() - new Date().getTime();

        const dayInMs = 1000 * 60 * 60 * 24;
        const hoursInMs = 1000 * 60 * 60;
        const minutesInMs = 1000 * 60;

        if (diffInMilliseconds - dayInMs > 0) {
            return Math.floor(diffInMilliseconds / dayInMs) + " dni";
        } else if (diffInMilliseconds - hoursInMs > 0) {
            return Math.floor(diffInMilliseconds / hoursInMs) + " godzin";
        } else if (diffInMilliseconds > 0) {
            return Math.floor(diffInMilliseconds / minutesInMs) + " minut";
        } else {
            return "0 minut";
        }
    }

    return (
        <ul className="list">
            {props.l.map(e => {
                return (
                    <li key={e.id}>
                        <span className="bold">{e.word} </span>
                        <span className="bold">{e.definition} </span>
                        <span>{e.learnOrRevise === 0 ? "do nauki" : 
                        e.learnOrRevise === 7 ? "nauczone" : `powtórka za ${difference(e.revisionDate)}`}</span>
                        <button onClick={() => props.deleteBtn(e.id)}>x</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;