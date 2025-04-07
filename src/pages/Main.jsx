import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <section className='main1'>
                <div className='main-banner'>
                    <img src='/assets/images/aesop_main.banner.PNG' alt='메인 배너 이미지' />
                </div>
                <div className='main-text'>
                    <p className='main-text1'>리미티드 에디션</p>
                    <p className='main-text2'>다채로운 색과 향이 어우러진 조합</p><br />
                    <p className='main-text3'>이솝 공식 온라인 몰에서 엘레오스 너리싱 바디 클렌저를 구매하시면 손 염색
                        코튼 백을 선물로 드립니다.</p>
                    <p className='main-text4'>*재고 소진 시 별도의 안내 없이 변동되거나 증정 종료될 수 있습니다. (주문 건 당 1개 증정).</p>
                    <Link className='main-link'>엘레오스 너리싱 바디 클렌저 둘러보기<img src='/assets/images/arrow.png' alt='rightArrow' /></Link>
                </div>
            </section>
            <section className='main2'>
                <div className='main2-type'>
                    <Link className='type'><img src='/assets/images/body.PNG' alt='바디 클렌저' />엘레오스 너리싱 바디 클렌저</Link>
                    <Link className='type'><img src='/assets/images/body2.PNG' alt='바디 클렌저2' />엘레오스 아로마틱 핸드 밤</Link>
                    <Link className='type'>스크린3</Link>
                </div>
            </section>
        </div>
    )
}

export default Main;