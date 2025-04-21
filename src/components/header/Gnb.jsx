import { Link } from "react-router-dom";
import './Gnb.css';

const Gnb = () => {
    return (
        <div className="gnb-wrapper">
        <nav className="gnb">
            <ul>
                <li>
                    <Link to="/">신제품&추천 제품</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>오르너 오 드 퍼퓸</Link></li>
                                <li><Link to='/'>스크린1</Link></li>
                                <li><Link to='/'>스크린3</Link></li>
                                <li><Link to='/'>프래그런스 앤솔러지 볼륨I</Link></li>
                                <li><Link to='/'>비레레 오 드 퍼퓸</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">스킨케어</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>페이셜 클렌저</Link></li>
                                <li><Link to='/'>트리트먼트&마스크</Link></li>
                                <li><Link to='/'>토너</Link></li>
                                <li><Link to='/'>하이드레이터&모이스처라이저</Link></li>
                                <li><Link to='/'>립&아이</Link></li>
                                <li><Link to='/'>쉐이빙</Link></li>
                                <li><Link to='/'>선 케어</Link></li>
                                <li><Link to='/'>스킨 케어 키트</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">핸드&바디</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>핸드 워시 & 밤</Link></li>
                                <li><Link to='/'>바 솝</Link></li>
                                <li><Link to='/'>바디 클렌저&스크럽</Link></li>
                                <li><Link to='/'>바디 밤 & 오일</Link></li>
                                <li><Link to='/'>데오도란트</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">홈</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>룸 스프레이</Link></li>
                                <li><Link to='/'>인센스</Link></li>
                                <li><Link to='/'>캔들</Link></li>
                                <li><Link to='/'>오일 버너 블렌드</Link></li>
                                <li><Link to='/'>디자인 오브제</Link></li>
                                <li><Link to='/'>탈취제&반려동물</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">헤어</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>샴푸 & 컨디셔너</Link></li>
                                <li><Link to='/'>헤어 트리트먼트</Link></li>
                                <li><Link to='/'>그루밍</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">향수</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>플로럴</Link></li>
                                <li><Link to='/'>프레쉬</Link></li>
                                <li><Link to='/'>우디</Link></li>
                                <li><Link to='/'>오퓰런트</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">키트&트래블</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>시즈널 기프트 키트</Link></li>
                                <li><Link to='/'>스킨 케어 키트</Link></li>
                                <li><Link to='/'>핸드 & 바디 케어 키트</Link></li>
                                <li><Link to='/'>트래블</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">기프트 가이드</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>시즈널 기프트 키트</Link></li>
                                <li><Link to='/'>사랑을 꽃피우는 기프트</Link></li>
                                <li><Link to='/'>기프트 번들</Link></li>
                                <li><Link to='/'>홈 케어 기프트</Link></li>
                                <li><Link to='/'>트래블 기프트</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Gnb;