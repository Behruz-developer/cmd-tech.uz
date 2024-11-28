import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useStore from '../../store/useStore';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import product6 from '../../assets/images/product6.png';
import product7 from '../../assets/images/product7.png';
import product8 from '../../assets/images/product8.png';
import product9 from '../../assets/images/product9.png';
import product10 from '../../assets/images/product10.png';
import product11 from '../../assets/images/product11.png';
import question from '../../assets/images/question.svg';
import arrow from '../../assets/images/arrow.png';

const Products = () => {
    const { activeTag } = useStore();
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const products = [
        { id: 1, tag: ['Корпоративный сайт'], subtitle: 'TADBIRKOR', term: '1 месяцев', image: product1, url: 'https://tadbirkor-uz.netlify.app' },
        { id: 2, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'TOURFETTO', term: '1 месяцев', image: product2, url: 'https://tourfetto.uz/' },
        { id: 3, tag: ['Landing Page'], subtitle: 'CRYSTAL AVENUE', term: '1 месяцев', image: product10, url: 'https://crystalavenue.txt.group/' },
        { id: 4, tag: ['Landing Page'], subtitle: 'BORN UZBEK', term: '1 месяцев', image: product3, url: 'https://born-uzbek.netlify.app' },
        { id: 5, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'WELLRICE', term: '1 месяцев', image: product4, url: 'https://wellrise.uz/' },
        { id: 6, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'EURO LIGHT', term: '1 месяцев', image: product5, url: 'https://euro-light.uz/ru' },
        { id: 7, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'DR CHIROPRACTOR', term: '1 месяцев', image: product6, url: 'https://drchiropractor.uz/' },
        { id: 8, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'AQUADOCTOR', term: '1 месяцев', image: product7, url: 'https://www.aquadoctor.uz/ru' },
        { id: 9, tag: ['Корпоративный сайт', 'SEO-оптимизация'], subtitle: 'ELEKSAN', term: '1 месяцев', image: product8, url: 'https://eleksan.uz/ru' },
        { id: 10, tag: ['Landing Page'], subtitle: 'BRILLIANT CENTRE', term: '1 месяцев', image: product9, url: 'https://brilliantcentre.txt.group/' },
        { id: 11, tag: ['Блог-сайт', 'SEO-оптимизация'], subtitle: 'THE REGISTAN', term: '1 месяцев', image: product11, url: 'https://theregistan.uz/' }
    ];

    const filteredProducts = activeTag === 'Все проекты'
        ? products
        : products.filter(product => product.tag.includes(activeTag));

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
                            href={product.url}
                            key={product.id}
                            className="products_card"
                            data-aos="fade-up"
                            data-aos-offset={index % 2 === 0 ? 200 : 50}
                        >
                            <img src={product.image} alt={product.subtitle} />
                            <div className="products_card_text">
                                <p className="products_tag">{product.tag.join(' • ')}</p>
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
