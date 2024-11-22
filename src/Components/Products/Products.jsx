import React, { useEffect, useState } from 'react';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import question from '../../assets/images/question.svg';
import arrow from '../../assets/images/arrow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useStore from '../../store/useStore';

const Products = () => {
    const { activeTag } = useStore(); // Zustand orqali aktiv tagni olish
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const products = [
        { id: 1, tag: 'Landing Page', subtitle: 'TADBIRKOR', term: '1 месяцев', image: product1 },
        { id: 2, tag: 'Сайт-визитка', subtitle: 'TOURFETTO', term: '1 месяцев', image: product2 },
        { id: 3, tag: 'Корпоративный сайт', subtitle: 'BORN UZBEK', term: '1 месяцев', image: product3 },
        { id: 4, tag: 'Блог-сайт', subtitle: 'YAQINLAR', term: '1 месяцев', image: product3 },
        { id: 5, tag: 'E-commerce', subtitle: 'WELLRISE', term: '1 месяцев', image: product1 },
        { id: 6, tag: 'CRM-системы', subtitle: 'DRCHIROPRACTOR', term: '1 месяцев', image: product2 },
        { id: 7, tag: 'SEO-оптимизация', subtitle: 'AQUADOCTOR', term: '1 месяцев', image: product3 },
        { id: 8, tag: 'Landing Page', subtitle: 'DISCOVERYPLAST', term: '1 месяцев', image: product3 },
        { id: 9, tag: 'Корпоративный сайт', subtitle: 'ELEKSAN', term: '1 месяцев', image: product1 }
    ];

    // Filtrlangan mahsulotlar
    const filteredProducts = activeTag === 'Все проекты'
        ? products // Hammasini ko'rsatadi
        : products.filter(product => product.tag === activeTag);

    const showMore = () => {
        setVisibleCount(filteredProducts.length);
    };

    return (
        <div className='products'>
            <div className="container">
                <h2 className='products_title'>
                    Веб-сайты <span>({filteredProducts.length})</span>
                    <img src={question} alt="question icon" />
                </h2>
                <div className="products_box">
                    {filteredProducts.slice(0, visibleCount).map((product, index) => (
                        <a
                            href="#!"
                            key={product.id}
                            className="products_card"
                            data-aos="fade-up"
                            data-aos-offset={index % 2 === 0 ? 200 : 50}
                        >
                            <img src={product.image} alt={product.subtitle} />
                            <div className="products_card_text">
                                <p className="products_tag">{product.tag}</p>
                                <p className="products_subtitle">{product.subtitle}</p>
                                <p className="products_term">{product.term}</p>
                                <a href="#!" className="products_link">подробно</a>
                            </div>
                        </a>
                    ))}
                </div>
                {visibleCount < filteredProducts.length && (
                    <button className="products_btn" onClick={showMore}>
                        более <img src={arrow} alt="arrow icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Products;
