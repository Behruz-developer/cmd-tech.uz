import React from 'react';
import typographyImage from '../../assets/images/typography.png'; // Rasmingizga mos yo'lni qo'shing

const Card = () => {
    return (
        <div className="card">
            <div className="container">
                <h2 className='products_title'>Телеграм-боты </h2>
                <div className="card_box">
                    <a href='#!' className="card_card">
                        <img src={typographyImage} alt="Typography" className="card_image" />
                        <div className="card_content">
                            <p className="card_tagline">Графический дизайн и коммуникации<br />С нуля • Освоить навык</p>
                            <h3 className="card_title">Типография: о форме и содержании</h3>
                            <div className="card_details">
                                <p className="card_date">11 ноября • 1 месяц</p>
                            </div>
                        </div>
                    </a>
                    <a href='#!' className="card_card">
                        <img src={typographyImage} alt="Typography" className="card_image" />
                        <div className="card_content">
                            <p className="card_tagline">Графический дизайн и коммуникации<br />С нуля • Освоить навык</p>
                            <h3 className="card_title">UX/UI: проектирование
                                пользовательского
                                интерфейса</h3>
                            <div className="card_details">
                                <p className="card_date">11 ноября • 1 месяц</p>
                            </div>
                        </div>
                    </a>
                    <a href='#!' className="card_card">
                        <img src={typographyImage} alt="Typography" className="card_image" />
                        <div className="card_content">
                            <p className="card_tagline">Графический дизайн и коммуникации<br />С нуля • Освоить навык</p>
                            <h3 className="card_title">Типография: о форме и содержании</h3>
                            <div className="card_details">
                                <p className="card_date">11 ноября • 1 месяц</p>
                            </div>
                        </div>
                    </a>
                    <a href='#!' className="card_card">
                        <img src={typographyImage} alt="Typography" className="card_image" />
                        <div className="card_content">
                            <p className="card_tagline">Графический дизайн и коммуникации<br />С нуля • Освоить навык</p>
                            <h3 className="card_title">Типография: о форме и содержании</h3>
                            <div className="card_details">
                                <p className="card_date">11 ноября • 1 месяц</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
