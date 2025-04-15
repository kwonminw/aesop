import { Link } from "react-router-dom";

const Maindata = ({ src, title, text, link }) => {
    return(
        <section className='main3'>
                <div className='main3-sub'>
                    <div className='main3-banner'>
                        <img src={src} alt={title} />
                    </div>
                    <div className='main3-text'>
                        <p className='main3-text1'>{title}</p>
                        <p className='main3-text2'>{text}</p>
                        <Link to={link} className='main-link'>바디 클렌저 & 스크럽보기 둘러보기<img src='/assets/images/arrow.png' alt='rightArrow' /></Link>
                    </div>
                </div>
            </section>
    )
}

export default Maindata;