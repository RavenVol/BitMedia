import React from 'react';

import '../../styles/css/sectionPricing.css';

const SectionPricing = () => (
  <article className="pricing">
    <h2 className="pricing__title">
      Afforadble Pricing and Packages
      <br/>
      choose your best one
    </h2>
    <p className="pricing__message">
      Monotonectally grow strategic process improvements vis-a-vis integrated resources.
    </p>
    <div className="pricing__packageWrap">
      <section className="package">
        <h3 className="package__title">Basic</h3>
        <img className="package__img" src="" alt="" />
        <p className="package__price">$29</p>
        <ul className="package__services">
          <li className="package__item">Push Notifications</li>
          <li className="package__item">Data Transfer</li>
          <li className="package__item">SQL Database</li>
          <li className="package__item">Search & SEO Analytics</li>
          <li className="package__item">24/7 Phone Support</li>
          <li className="package__item">2 months technical support</li>
          <li className="package__item">2+ profitable keyword</li>
        </ul>
        <button className="package__button" type="button">
          Purchase now
        </button>
      </section>

    </div>
  </article>
);

export default SectionPricing;
