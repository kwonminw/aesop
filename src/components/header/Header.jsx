import { Link } from "react-router-dom";
import { Tabletmenu, HeadUtils, Mobileicon } from "./";
import Gnb from "./Gnb";
import './Header.css';


const Header = () => {
    return(
        <header id="header">
            <div className="header_inner">
                <h1 className="logo"><Link to=''><img src="/assets/images/img.png" alt="이솝"/></Link></h1>
                    <div className="header_left">
                        <Tabletmenu />
                        <Gnb />
                        <p className="search"><Link><img src="/assets/images/search-symbol.png" /></Link></p>
                    </div>
                    <div className="header_right">
                        <Mobileicon />
                        <HeadUtils />
                    </div>
            </div>
        </header>
    )
}

export default Header;