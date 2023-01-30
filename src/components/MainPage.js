import { NavLink } from "react-router-dom";
import "../css/main-page.css";

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
            <nav>
                <ul>
                    <li><NavLink to="/wordlist"><button>lista słów</button></NavLink></li>
                    <li><NavLink to="/study"><button>nauka</button></NavLink></li>
                    <li><NavLink to="/revision"><button>powtórki</button></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainPage;