import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [filter, setFilter] = useState('Everything');

  const filterItems = (category) => {
    if (category === 'Everything') {
      setItems(Menu);
    } else {
      const filteredItems = Menu.filter(item => item.category === category);
      setItems(filteredItems);
    }
    setFilter(category);
  };

  return (
    <section id="portfolio" className="work container section"> {/* id eklendi */}
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className={`work__item ${filter === 'Everything' ? 'active' : ''}`} onClick={() => filterItems('Everything')}>Everything</span>
        <span className={`work__item ${filter === 'Creative' ? 'active' : ''}`} onClick={() => filterItems('Creative')}>Creative</span>
        <span className={`work__item ${filter === 'Art' ? 'active' : ''}`} onClick={() => filterItems('Art')}>Art</span>
        <span className={`work__item ${filter === 'Design' ? 'active' : ''}`} onClick={() => filterItems('Design')}>Design</span>
        <span className={`work__item ${filter === 'Branding' ? 'active' : ''}`} onClick={() => filterItems('Branding')}>Branding</span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div key={id} className="work__card">
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work_img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href='#home' className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
