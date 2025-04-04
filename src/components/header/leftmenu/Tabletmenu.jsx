import { Link } from "react-router-dom";
import HeadUtils from "../rightmenu/HeadUtils";
import './Tabletmenu.css';

const Tabletmenu = () => {
    return(
        <div className="tabletmenu">
                <ul>
                    <li><Link to='/'>구매하기</Link></li>
                    <li><Link to='/'>읽기</Link></li>
                    <li><Link to='/'>스토어</Link></li>
                </ul>
        </div>
    )
}

export default Tabletmenu;