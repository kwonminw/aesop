import { Link } from 'react-router-dom';
import './Side.css';

const Side = ({ isSide, setIsSide }) => {
    const handleSideClose = () => {
        setIsSide(false);
    };

    return (
        <div className={`Side ${isSide ? 'view' : ''}`}>
            <div className='side-inner'>
                <p className='side-logo'><img src='/assets/images/img.png' alt='이솝로고' /></p>
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
                        <li><Link>읽기</Link></li>
                        <li><Link>스토어</Link></li>
                        <li><Link>로그인</Link></li>
                        <li><Link>문의하기</Link></li>
                    </ul>
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