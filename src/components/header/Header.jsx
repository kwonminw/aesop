import { Link } from "react-router-dom";
import { Tabletmenu, HeadUtils, Mobileicon } from "./";
import { useState } from "react";
import Gnb from "./Gnb";
import './Header.css';

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  const handleSearchView = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header id="header">
      <div className="header_inner">
        <h1 className="logo">
          <Link to=''><img src="/assets/images/img.png" alt="이솝" /></Link>
        </h1>
        <div className="header_left">
          <Tabletmenu />
          <Gnb />
          <div className="search">
            <button onClick={handleSearchView} className="search_button">
              <img src="/assets/images/search-symbol.png" alt="검색" />
            </button>
          </div>
        </div>
        <div className="header_right">
          <Mobileicon handleSearchView={handleSearchView} />
          <HeadUtils />
        </div>
      </div>
      {isSearch && (
        <div className="aesop_search_modal">
          <div className="aesop_modal_content">
            <input type="text" placeholder="검색어를 입력해주세요" className="aesop_input" />
            <button onClick={handleSearchView} className="aesop_close">Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;