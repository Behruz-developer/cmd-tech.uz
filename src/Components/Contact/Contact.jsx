import React from 'react'
import contact from '../../assets/images/contact.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="contact_box">
                    <div className="contact_card">
                        <img className='contact_img' src={contact} alt="" />
                        <div className="contact_content">
                            <div className="contact_card_text">
                                <h2 className="contact_title">Помощь с созданием сайтов </h2>
                                <p className="contact_subtitle">Поможем подобрать подходящий сайт или Telegram-бот</p>
                            </div>

                            <div className="contact_links">
                                <a href='https://t.me/Muhammadamin_Mirboqijonov' className="contact_link">Написать в Telegram</a>
                                <a href='tel:+998938091644' className="contact_link">Свяжитесь со мной</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
