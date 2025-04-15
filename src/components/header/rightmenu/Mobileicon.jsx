import { Link } from "react-router-dom";
import './Mobileicon.css';

const Mobileicon = () => {
    return(
        <div className="mobileicon">
                <ul>
                    <li><Link to=''><img src="/assets/images/search-symbol.png" alt="검색"/></Link></li>
                    <li><Link to=''><img src="/assets/images/heart.png" alt="찜목록"/></Link></li>
                    <li className="cart"><Link to=''>카트</Link></li>
                    <li className="button"><button><img src="/assets/images/menu.png" alt="메뉴목록"/></button></li>
                </ul>
        </div>
    )
}

export default Mobileicon;