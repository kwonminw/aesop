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
                </section>
            </div>
        </footer>
    )
}

export default Footer;