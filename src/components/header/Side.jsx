import { Link } from 'react-router-dom';
import './Side.css';

const Side = ({ isSide, setIsSide }) => {
    const handleSideClose = () => {
        setIsSide(false);
    };

    return (
        <div className={`Side ${isSide ? 'view' : ''}`}>
            <div className='side-inner'>
                <Link to='' className='side-logo'><img src='/assets/images/img.png' alt='이솝로고' /></Link>
                <nav className="side-gnb">
                    <ul>
                        <li><Link to=''>신제품 & 추천 제품</Link></li>
                        <li><Link to=''>스킨 케어</Link></li>
                        <li><Link to=''>핸드 & 바디</Link></li>
                        <li><Link to=''>홈</Link></li>
                        <li><Link to=''>헤어</Link></li>
                        <li><Link to=''>향수</Link></li>
                        <li><Link to=''>키트 & 트래블</Link></li>
                        <li><Link to=''>기프트 가이드</Link></li>
                    </ul>
                </nav>
                <div className="side-utills">
                    <ul>
                        <li><Link to=''>읽기</Link></li>
                        <li><Link to=''>스토어</Link></li>
                        <li><Link to=''>로그인</Link></li>
                        <li><Link to=''>문의하기</Link></li>
                    </ul>
                </div>

                <div className='side-footer'>
                    <Link to='' className='side-img'><img src='/assets/images/side.png' alt='사이드이미지' /></Link>
                    <p className='side-footer-title'>Product</p>
                    <p className='side-footer-text'>나만의 무대, 샤워의 시간: 엘레오스 너리싱 바디 클렌저로 한층 풍성해진 세정</p>
                </div>
                <p className='btn-close-side'>
                    <button onClick={handleSideClose}>
                        <span className='bar1'></span>
                        <span className='bar2'></span>
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Side;