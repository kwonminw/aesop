import { Link } from "react-router-dom";
import './HeadUtils.css';

const HeadUtils = () => {
    return(
        <div id="HeadUtils">
            <Link>Login</Link>
            <Link>Join</Link>
            <Link>Cart</Link>
        </div>
    )
}

export default HeadUtils;