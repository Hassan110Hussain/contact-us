import { MdMessage } from 'react-icons/md'
import { IoCall } from "react-icons/io5";
import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdEmail } from "react-icons/md";
import {useState} from 'react';

const ContractForm = () => {

  const [name, setName] = useState('amash')
  const [email, setEmail] = useState('123@gmail.com')
  const [text, setText] = useState('subscribe')

  const onSubmit = (event) => {
    event.preventDefault(); 

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px'/>}/>
            <Button 
            text='VIA CALL' icon={<IoCall fontSize='24px'/>}/>
          </div>
          <Button
          isOutline={true}
          text='VIA EMAIL FORM' icon={<MdEmail fontSize='24px'/>}/>
          <form onSubmit={onSubmit}>
            <div className={styles.container2}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
            </div>
            <div className={styles.container2}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
            </div>
            <div className={styles.container2}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows='20'/>
            </div>
            <div style={{display: 'flex', justifyContent: 'end'
            }}>
            <Button text='SUBMIT' />
            </div>
            <div>
             {name +' '+ email +' '+ text}
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/serv.svg" alt="contact image" />
        </div>
        </section>
  )
}

export default ContractForm