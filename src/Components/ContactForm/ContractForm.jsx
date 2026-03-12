import { MdMessage } from 'react-icons/md'
import { IoCall } from "react-icons/io5";
import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdEmail } from "react-icons/md";
import {useState} from 'react';

const ContractForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleContactMethod = (method) => {
    setContactMethod(method);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Form is valid - simulate submission
    console.log('Form submitted:', { ...formData, contactMethod });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
      setContactMethod(null);
    }, 3000);
  };

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button 
              text='VIA SUPPORT CHAT' 
              icon={<MdMessage fontSize='24px'/>}
              onClick={() => handleContactMethod('chat')}
              className={contactMethod === 'chat' ? styles.active : ''}
            />
            <Button 
              text='VIA CALL' 
              icon={<IoCall fontSize='24px'/>}
              onClick={() => handleContactMethod('call')}
              className={contactMethod === 'call' ? styles.active : ''}
            />
          </div>
          <Button
            isOutline={true}
            text='VIA EMAIL FORM' 
            icon={<MdEmail fontSize='24px'/>}
            onClick={() => handleContactMethod('email')}
            className={contactMethod === 'email' ? styles.active : ''}
          />
          
          {submitted ? (
            <div className={styles.success_message}>
              <h3>Thank you for contacting us!</h3>
              <p>We&apos;ve received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className={styles.container2}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? styles.input_error : ''}
                />
                {errors.name && <span className={styles.error_text}>{errors.name}</span>}
              </div>
              
              <div className={styles.container2}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? styles.input_error : ''}
                />
                {errors.email && <span className={styles.error_text}>{errors.email}</span>}
              </div>
              
              <div className={styles.container2}>
                <label htmlFor="message">Message</label>
                <textarea 
                  name='message' 
                  id='message'
                  rows='8'
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? styles.input_error : ''}
                />
                {errors.message && <span className={styles.error_text}>{errors.message}</span>}
              </div>
              
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button text='SUBMIT' type='submit' />
              </div>
            </form>
          )}
        </div>
        <div className={styles.contact_image}>
          <img src="/images/serv.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContractForm
