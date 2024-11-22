import React from 'react';
import useStore from '../../store/useStore';

const Tags = () => {
    const { activeTag, setActiveTag } = useStore(); // Zustand-dan qiymatlar va funksiyalarni olib keling

    const handleTagClick = (tag) => {
        setActiveTag(tag); // Tagni yangilash
    };

    return (
        <div className='tags'>
            <div className="container">
                <div className="tags_box">
                    {['Все проекты', 'Landing Page', 'Сайт-визитка', 'Корпоративный сайт', 'Блог-сайт', 'E-commerce', 'CRM-системы', 'SEO-оптимизация'].map((tag, index) => (
                        <a
                            key={index}
                            href="#!"
                            className={`tags_link ${activeTag === tag ? 'active' : ''}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tags;
