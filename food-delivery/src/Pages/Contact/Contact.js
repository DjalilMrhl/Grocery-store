import "./Contact.scss";
import React, { useEffect, useState } from "react";

function Contact() {


  useEffect(() => {
   window.scrollTo(0,400)
  }, [])
  

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e)=> {
        setForm(prev=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit = (e)=> {
        e.target.reset()
        console.log(form);
    }

  return (
    <section className="contact" id="contact">
      <h1>Contact Us</h1>
      <div className="contact--container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" name="name" onChange={handleChange} required/>
          <input type="email" placeholder="Your email" name="email" onChange={handleChange} required/>
          <textarea name="message" placeholder="Your message . . ." style={{resize: 'none'}} cols="30" rows="10" minLength={20} maxLength={100} onChange={handleChange} required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
