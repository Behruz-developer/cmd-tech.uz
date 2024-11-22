import React from 'react'
import upcoming from '../../assets/images/upcoming.png'

const Upcoming = () => {
    return (
        <div className='upcoming'>
            <div className="container">
                <div className="upcoming_box">
                    <img className='upcoming_img' src={upcoming} alt="" />
                    <div className="upcoming_card">
                        <h2 className="upcoming_title">Все <br /> проекты</h2>
                        <p className="upcoming_text">Помогаем создавать веб-сайты, Telegram-боты и настраивать рекламу с SEO.
                            Доверьте интернет-маркетинг профессионалам и экономьте время!
                            Начните с нами уже сегодня. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
