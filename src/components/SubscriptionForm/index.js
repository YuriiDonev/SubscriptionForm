import React, { useState, useEffect } from 'react';
import './SubscriptionForm.css';

function SubscriptionForm({ submitForm, link1, link2 }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [value, setInputValue] = useState('');

  const handleScrollEvent = () => {
    if (window.scrollY === 0) {
      setFormVisible(false);
    } else {
      setFormVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(value);
  };

  return (
    <section className={`subscription-section--fixed-footer${isFormVisible ? ' visible' : ' hidden'}`}>
      <div className='container fixed-footer-container'>
        <h2 className='subscribe-header--fixed-footer'>Sign up for Key Values' weekly newsletter!</h2>

        <div className='mc-field-group subscribe-form-input-container'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='required email subscribe-email-input subscribe-email-input--fixed-footer'
              placeholder='Enter email address'
              value={value}
              onChange={handleChange}
            />
            <input
              type='submit'
              value='SUBSCRIBE'
              className='subscribe-btn--fixed-footer'
            />
          </form>
        </div>

        <div className='footer-note fixed-footer'>
          or say hi <span role='img' aria-label='hi'>👋</span>
          <span>
            <a href={link1.href} className='twitter-follow-btn fixed-footer' target='_blank' rel='noopener noreferrer'>{link1.name}</a>
            <a href={link2.href} className='twitter-follow-btn fixed-footer' target='_blank' rel='noopener noreferrer'>{link2.name}</a>
          </span>
        </div>
      </div>

    </section>
  );
}

export default SubscriptionForm;
