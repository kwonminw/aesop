import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import HeadUtils from "./HeadUtils";
import './Header.css';

const Header = () => {
    return(
        <header id="header">
            <div className="header_inner">
                <div className="header_left">
                    <h1 className="logo"><Link to=''><img src="/assets/images/img.png" alt="이솝"/></Link></h1>
                    <Gnb />
                </div>
                <HeadUtils />
            </div>
        </header>
    )
}

export default Header;