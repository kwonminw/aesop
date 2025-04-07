import { Link } from "react-router-dom";
import './HeadUtils.css';

const HeadUtils = () => {
    return(
        <div id="headutils">
            <Link>로그인</Link>
            <Link>위시리스트</Link>
            <Link>카트</Link>
        </div>
    )
}

export default HeadUtils;