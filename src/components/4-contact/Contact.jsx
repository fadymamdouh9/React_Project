
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animee/done.json';
import contactAnimation from '../../../public/animee/contact.json';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgpgyle");

  
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail'></span>
        Contact us 
      </h1>
      <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
      <div className='flex'>
        <form onSubmit={handleSubmit} className=''>
          <div className='flex'>
        <label htmlFor="email">Email Address</label>
      <input autoComplete='off' required type="email" name='email' id='email' />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
      </div>
      <div className='flex' style={{marginTop:"24px"}}>
      <label htmlFor="massage">your massage</label>
      <textarea required name="message" id="massage" ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button type="submit" disabled={state.submitting} className='submit'>
        {state.submitting ? "submitting ...." : "submit"}
        </button>
        {state.succeeded && (
          
          <p className='flex' style={{ fontSize:"18px" , marginTop:"1.7rem"}}>
            <Lottie loop={false} style={{height:33}} animationData={doneAnimation} />
            Your message has been sent successfully \0/
          </p>
        )}

        </form>
        <div className=' animation'>
        <Lottie className='contact-Animation'  animationData={contactAnimation} />

        </div>

      </div>
      
    </section>
  );
}

export default Contact;
