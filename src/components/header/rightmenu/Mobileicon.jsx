import { Link } from "react-router-dom";
import { useState } from "react";
import Side from "../Side";
import './Mobileicon.css';

const Mobileicon = () => {
    const [isSide, setIsSide] = useState(false);

    const handleSideOpen = () => {
        setIsSide(true);
    }

    return(
        <div className="mobileicon">
                <ul>
                    <li><Link to=''><img src="/assets/images/search-symbol.png" alt="검색"/></Link></li>
                    <li><Link to=''><img src="/assets/images/heart.png" alt="찜목록"/></Link></li>
                    <li className="cart"><Link to=''>카트</Link></li>
                    <li className="button"><button onClick={handleSideOpen}><img src="/assets/images/menu.png" alt="사이드메뉴"/></button></li>
                </ul>
                <Side isSide={isSide} setIsSide={setIsSide} />
        </div>
    )
}

export default Mobileicon;