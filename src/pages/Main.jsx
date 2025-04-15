import { Link } from 'react-router-dom';
import Maindata from '../components/header/maindata/Maindata';
import './Main.css';

const data1 = {
        src: '/assets/images/aesop_clean.PNG',
        title: '모두를 위한 클렌징',
        text: '향기롭고 거품이 적은 바디 클렌저는 피부 노폐물을 부드럽게 제거하고 상쾌하게 가꿔줍니다. 매주 1~2회 각질제거 스크럽을 사용해 피부 각질을 씻어내고 매끄럽고 윤기 있는 피부로 관리하세요.',
        link: '바디 클렌저 & 스크럽보기 둘러보기'
}

const data2 = [
     {
            src: '/assets/images/main5.PNG',
            title: '제품과 가이드',
            text: '엘레오스 너리싱 바디 클렌저로 한층 풍성해진 세정',
            text2: '부드러운 질감과 우디, 스파이시, 허브 향이 어우러진 엘레오스 너리싱 바디 클렌저는 샤워 공간을 감각적이고 즐거운 경험으로 채워줍니다.',
            link: '더 읽기'
        },
         {
            src: '/assets/images/main6.PNG',
            title: '온라인 제스처',
            text: '풍성한 온라인 경험을 위한 사려 깊은 제스처',
            text2: '이솝 공식 온라인 몰에서는 엄선된 제품 샘플, 시그니처 코튼 백, 무료 선물 포장 및 기프트 메시지 카드 등 다양하고 사려 깊은 제스처를 만나보실 수 있습니다.',
            link: '자세히 보기'
        },
         {
            src: '/assets/images/main7.PNG',
            title: '감사의 제스처',
            text: '기업체 구매',
            text2: '소중한 직원과 고객에게 감사의 마음을 표현하기에 적합한 폭넓은 기프트 옵션을 찾아보세요. 전문 지식을 갖춘 이솝 컨설턴트가 제품 선택부터 배송까지 도와드립니다.',
            link: '더 읽기'
        },
        {
            src: '/assets/images/main8.PNG',
            title: '가까운 프래그런스 아르무아 찾기',
            text: '일부 엄선된 매장에서만 만나볼 수 있는 몰입형 아로마 캐비닛은 전형적이지 않은 이솝 오 드 퍼퓸을 소개하기 위해 특별히 고안되었습니다.',
            link: '스토어 찾기'
        },
        {
            src: '/assets/images/main9.PNG',
            title: '스토어 로케이터',
            text: '매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.',
            link: '가까운 스토어 찾기'
        }
]

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
                    <ul> 
                        <li className='type'>
                            <Link>
                                <p className='typeimg'><img src='/assets/images/body1.jpg' alt='바디 클렌저' /></p>
                                <h2 className='typename'>엘레오스 너리싱 바디 클렌저</h2>
                                <p className='types'>깨끗하게 세정하고, 부드럽고 탄력 있는 피부로 가꿔줍니다</p>
                            </Link>
                        </li>
                        <li className='type'>
                            <Link>
                                <p><img src='/assets/images/body2.jpg' alt='바디 클렌저2' /></p>
                                <h2 className='typename'>엘레오스 아로마틱 핸드 밤</h2>
                                <p className='types'>날씨의 영향을 받은 손에 풍부한 수분을 공급하는 핸드 밤</p>
                            </Link>
                        </li>
                        <li className='type'>
                            <Link>
                                <p><img src='/assets/images/body3.jpg' alt='핸드 밤' /></p>
                                <h2 className='typename'>스크린3</h2>
                                <p className='types'>핸드 및 바디 케어 필수품 3종</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <Maindata 
                src={data1.src} title={data1.title} text={data1.text} link={data1.link}
            />
            <section className='main4'>
                <div className='main4-text'>
                    <p className='main4-text1'>바디</p>
                    <p className='main4-text2'>보살핌의 표현</p>
                    <p className='main4-text3'>이솝 제품은 피부를 세정하고 영양과 수분을 채워주는 등 
                        몸이 필요한 관리를 제공해줍니다. 각 제품의 독특한 기분 좋은 
                        아로마가 감각적인 즐거움을 선사합니다. 
                    </p>
                    <Link className='main-link'>바디 케어 모두 보기<img src='/assets/images/arrow.png' alt='rightArrow' /></Link>
                </div>
                <div className='main4-type'>
                    <ul> 
                        <li className='type'>
                            <Link>
                                <p className='typeimg'><img src='/assets/images/body1.jpg' alt='바디 클렌저' /></p>
                                <h2 className='typename'>엘레오스 너리싱 바디 클렌저</h2>
                                <p className='types'>깨끗하게 세정하고, 부드럽고 탄력 있는 피부로 가꿔줍니다</p>
                            </Link>
                        </li>
                        <li className='type'>
                            <Link>
                                <p><img src='/assets/images/main4.jpg' alt='제라늄 리프 바디 클렌저' /></p>
                                <h2 className='typename'>제라늄 리프 바디 클렌저</h2>
                                <p className='types'>상쾌함을 선사하는 부드러운 젤 타입 클렌저</p>
                            </Link>
                        </li>
                        <li className='type'>
                            <Link>
                                <p><img src='/assets/images/main4-2.jpg' alt='시트러스 멜란지 바디 클렌저' /></p>
                                <h2 className='typename'>시트러스 멜란지 바디 클렌저</h2>
                                <p className='types'>시트러스를 함유한 부드러운 클렌징 젤</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            {data2.map((data, i) => {
                 if(num % 2 === 0){
                    return answer = 'true';
                } else {
                    return answer = 'false';
                }
                return <Maindata key={i} src={data2[i].src} title={data2[i].title} text={data2[i].text} text2={data2[i].text2} link={data2[i].link} />
            })}
            <section className='language'>
                <div className='language-text'>
                    <p className='music'>‘Music is the language of the spirit.’ <br /></p>
                    <p className='kahlil'>Kahlil Gibran</p>
                </div>
            </section>
            <section className='approval'>
                <div className='approval-sub'>
                    <div className='approval-1'>
                        <p className='ptext'>비콥 인증</p>
                        <p className='ptext2'>이솝은 사회적, 환경적 성과, 투명성 및 책임성에 대한 엄격한 기준을 충족합니다.</p>
                    </div>
                    <div className='approval-2'>
                        <p className='ptext'>PETA 승인</p>
                        <p className='ptext2'>이솝은 국제적으로 인정받는 PETA의 비건 및 크루얼티 프리 목록에 포함되어 있습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;