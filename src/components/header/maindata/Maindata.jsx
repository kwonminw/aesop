import { Link } from "react-router-dom";

const Maindata = ({ src, title, text, text2, link, answer }) => {
    return(
        <section className='main3'>
            <div className={`main3-sub ${answer?'right':''}`}>
                <div className='main3-banner'>
                    <img src={src} alt={title} />
                </div>
                <div className='main3-text'>
                    <p className='main3-text1'>{title}</p>
                    <p className='main3-text2'>{text}</p>
                    { text2 && text2 }
                    <Link to={link} className='main-link'>바디 클렌저 & 스크럽보기 둘러보기<img src='/assets/images/arrow.png' alt='rightArrow' /></Link>
                </div>
            </div>
        </section>
    )
}

export default Maindata;