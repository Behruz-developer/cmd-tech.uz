import React, { useState } from 'react'

const Footer = () => {

    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        // Prefiksni +998 qilib to'g'irlash
        if (!inputValue.startsWith("+998")) {
            inputValue = "+998 ";
        }

        // Faqat raqamlarni +998 dan keyin boshqarish
        const numericPart = inputValue.replace(/[^0-9]/g, "").slice(3); // +998 dan keyingi raqamlar
        let formattedValue = "+998";

        if (numericPart.length > 0) {
            formattedValue += ` (${numericPart.slice(0, 2)}`;
        }
        if (numericPart.length >= 3) {
            formattedValue += `) ${numericPart.slice(2, 5)}`;
        }
        if (numericPart.length >= 6) {
            formattedValue += `-${numericPart.slice(5, 7)}`;
        }
        if (numericPart.length >= 8) {
            formattedValue += `-${numericPart.slice(7, 9)}`;
        }

        setValue(formattedValue.trim());
    }; 5
    const sendToTelegram = async () => {
        const token = "7009020594:AAEJ1NaaXfj3nCs6hRmRLpaLZwWpFeOQH6w";
        const chat_id = "-1002057883516";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const message = `Телефон: ${value}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message,
                }),
            });

            if (response.ok) {
                alert("Номер успешно отправлен!");
                setValue(""); // Inputni tozalash
            } else {
                alert("Ошибка при отправке сообщения.");
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Не удалось отправить сообщение.");
        }
    };
    return (
        <div className='footer'>
            <div className="container">
                <h2 className="footer_title">ИТ-команда CMD TECH → Все проекты</h2>
                <div className="footer_box">
                    <a href="tel:+998938091644" className="footer_phone">+998 (93) 809-16-44</a>
                    <div className="footer_card_box">
                        <div className="footer_card">
                            <p className="footer_subtitle">Все проекты</p>
                            <ul className="footer_list">
                                <li><a href="#!" className="footer_link">Каталог</a></li>
                                <li><a href="#!" className="footer_link">Landing Page</a></li>
                                <li><a href="#!" className="footer_link">Сайт-визитка</a></li>
                                <li><a href="#!" className="footer_link">Корпоративный сайт</a></li>
                                <li><a href="#!" className="footer_link">Блог-сайт</a></li>
                                <li><a href="#!" className="footer_link">E-commerce</a></li>
                                <li><a href="#!" className="footer_link">CRM-системы</a></li>
                                <li><a href="#!" className="footer_link">SEO-оптимизация</a></li>
                            </ul>
                        </div>
                        <div className="footer_card">
                            <p className="footer_subtitle">Социальные сети</p>
                            <ul className="footer_list">
                                <li><a href="#!" className="footer_link">Телеграм</a></li>
                                <li><a href="#!" className="footer_link">Инстаграм</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_card">
                        <p className="footer_subtitle">Социальные сети</p>
                        <p className="footer_link">Хотите современный веб-сайт? Оставьте номер, <br /> и мы свяжемся с вами!
                        </p>
                        <div className="footer_email">
                            <input className='footer_input' type="text" value={value} onChange={handleInputChange} placeholder="+998 XX XXX XX XX" />
                            <button className='footer_btn' onClick={sendToTelegram}>Звонок</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
