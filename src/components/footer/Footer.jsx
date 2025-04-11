import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return(
        <footer className='Footer'>
            <div className='footer-base'>
                <section className='footer-communication'>
                    <h2>이솝 커뮤니케이션</h2>
                        <div className='line'></div>
                        <p>제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을
                        받아보실 수 있도록 이솝 이메일을 구독하세요.</p>
                </section>
                <section className='footer-information'>
                    <div className='information-sub'>
                        <div className='sub'>
                            <input className='checkbox1' 
                                type='checkbox'
                            />
                            <p className='text1'>본인은 만 14세 이상입니다 (필수)</p>
                        </div>
                        <div className='sub'>
                            <input className='checkbox2' 
                                type='checkbox'
                            />
                            <p className='text2'>개인정보수집 및 이용에 동의합니다 (필수)</p>
                        </div>
                        <div className='scroll-container'>
                            <div className='scroll-container-inner'>
                                <div className='container-box'>
                                    <textarea name="box" id="box">
                                        <p>이솝은 이솝의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로, 
                                            고객님이 동의 해지하시기 전까지, 고객님께 이메일로 보내 드립니다. 
                                            마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도 되고, 
                                            그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
                                        </p>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className='sub'>
                            <input className='checkbox3' 
                                type='checkbox'
                            />
                            <p className='text3'>마케팅 정보 수신에 동의합니다 (필수)</p>
                        </div>
                        <div className='scroll-container'>
                            <div className='scroll-container-inner'>
                                <div className='container-box'>
                                    <textarea name="box" id="box">
                                        <p>이솝은 이솝의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로, 
                                            고객님이 동의 해지하시기 전까지, 고객님께 이메일로 보내 드립니다. 
                                            마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도 되고, 
                                            그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
                                        </p>
                                    </textarea>
                                </div>
                            </div>
                            <div className='adress'>
                                <input 
                                    type='placehoder'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='footer-item'>
                    <h2>주문 및 지원</h2>
                    <div className='line'></div>
                        <ul>
                            <li><Link to='/'>문의하기</Link></li>
                            <li><Link to='/'>자주 묻는 질문</Link></li>
                            <li><Link to='/'>배송</Link></li>
                            <li><Link to='/'>반품</Link></li>
                            <li><Link to='/'>배송 조회하기</Link></li>
                            <li><Link to='/'>주문 내역</Link></li>
                            <li><Link to='/'>이용 약관</Link></li>
                        </ul>
                </section>
                <section className='footer-item2'>
                    <h2>서비스</h2>
                    <div className='line'></div>
                        <ul>
                            <li><Link to='/'>기업체 구매</Link></li>
                            <li><Link to='/'>1:1 채팅 상담​</Link></li>
                            <li><Link to='/'>린스 앤 리턴 캠페인</Link></li>
                        </ul>
                </section>
                <section className='footer-item3'>
                    <h2>위치 기본 설정</h2>
                    <div className='line'></div>
                        <ul>
                            <p>배송: <br /></p>
                            <li><Link to='/'>대한민국</Link></li>
                            <p>언어: <br /></p>
                            <li><Link to='/'>한국어​</Link></li>
                        </ul>
                </section>
                <section className='footer-item4'>
                    <h2>지속가능성</h2>
                    <div className='line'></div>
                        <p>이솝은 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은 브랜드입니다.</p>
                </section>
                <section className='footer-item5'>
                    <h2>소개</h2>
                    <div className='line'></div>
                        <ul>
                            <li><Link to='/'>브랜드 스토리</Link></li>
                            <li><Link to='/'>이솝 재단​</Link></li>
                            <li><Link to='/'>채용</Link></li>
                            <li><Link to='/'>개인정보처리방침</Link></li>
                            <li><Link to='/'>영상정보처리기기 운영/관리 방침</Link></li>
                            <li><Link to='/'>정품 인증</Link></li>
                            <li><Link to='/'>쿠키 정책</Link></li>
                        </ul>
                </section>
                <section className='footer-item6'>
                    <h2>소셜</h2>
                    <div className='line'></div>
                        <ul>
                            <li><Link to='/'>Instagram</Link></li>
                            <li><Link to='/'>Twitter</Link></li>
                            <li><Link to='/'>LinkedIn</Link></li>
                            <li><Link to='/'>Kakao Plus Friend</Link></li>
                        </ul>
                </section>
                <section className='footer-item7'>
                    <h2>기업 정보</h2>
                    <div className='line'></div>
                        <div className='footer-item7-sub'>
                            <p>상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 도산대로45길 10-6 이솝코리아 
                                | 대표자: ANTOINE PIERRE BOURGEOIS(앙트안삐에르부르주아) | 대표전화: 1800-1987 | 대표 이메일: 
                                aesop@aesop.com | 호스팅 사업자: SAP Hybris | 사업자 등록 번호: 220-88-56014 사업자정보확인 | 통신판매업 
                                신고번호: 2014-서울강남-02300
                            </p>
                        </div>
                </section>
                <section className='footer-banner'>
                    <div className='footer-banner-sub'>
                        <div className='line'></div>
                        <div className='footer-logo'>
                            <p>© Aesop</p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;