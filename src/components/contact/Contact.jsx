import { useEffect, useRef, useState } from 'react'
import'./contact.scss'
import emailjs from '@emailjs/browser';

const Contact = () => {


const [inputFields,setInputFields]=useState({
  name:"",
  email:"",
  message:"",
})

const [errors, setErrors] = useState({});
const [submitting, setSubmitting] = useState(false);


const formRef=useRef();

  
  const validateValues = (inputValues) => {  

    const errors={};

    if(!inputValues.name.trim()){
      errors.name="Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!inputValues.email.trim() || !emailRegex.test(inputValues.email)){
      errors.email="Valid email is require";
    }
    if(!inputValues.message.trim()){
      errors.message="i would appreciate if you leave me a message"
    }

    return errors;
  }


  const handleChange = (e)=>{

    setInputFields({...inputFields,[e.target.name]:e.target.value});

  }

  const handleSubmit = (event) => {
   event.preventDefault();
   setErrors(validateValues(inputFields));
   setSubmitting(true)
  
     
    
 


 };
  const finishSubmit = () => {
   emailjs.sendForm('service_xm1eb1r', 'template_f8ct7ho', formRef.current, 'F-g51kvPvliVc23a0')
      .then((result) => {
      }, (error) => {
        console.log(error)
      });
      setInputFields({name:"",email:"",message:""})
    }
 useEffect(() => {
   if (Object.keys(errors).length === 0 && submitting) {
     finishSubmit();
   }
 }, [errors]);
  


  
  return (
    <div className='container'>
      <div className='ContectTxt'>
        <h1>Let's work together</h1>
        <div className='txtinfo'>
            <h2>Mail</h2>
            <span>hafedhoussain@gmail.com</span>
        </div>
        <div className='txtinfo'>
            <h2>Address</h2>
            <span>Morocco, Marrakech</span>
        </div>
        <div className='txtinfo'>
            <h2>Phone</h2>
            <span>+212 602428068</span>
        </div>
      </div>
      <div className='contactForm'>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text'  placeholder='Name' name="name" 
              value={inputFields.name}
              onChange={handleChange}
            />
            {
                errors.name &&  (<div className="error-msg">
                                {/* <i class="fa fa-times-circle"></i> */}
                                  {errors.name} 
                                </div>)
            }
            <input type='text'  placeholder='Email' name="email" 
               value={inputFields.email}
               onChange={handleChange}
            />
            {
              errors.email && (<div className="error-msg">
                                {/* <i class="fa fa-times-circle"></i> */}
                              {errors.email} 
                              </div>)
            }
            <textarea rows={8} name="message" id="" placeholder='Message'
               value={inputFields.message}
               onChange={handleChange}
            ></textarea>
            {
              errors.message && (
                <div className="error-msg">
                                {/* <i class="fa fa-times-circle"></i> */}
                                  {errors.message} 
                </div>
              )

            }
            {
              Object.keys(errors).length===0  && submitting ?(
                <div className="success-msg">
                                {/* <i class="fa fa-times-circle"></i> */}
                                  Successfully submitted ✓ 
                </div>
              ):null
            }
            <button>Submit</button>
         
        </form>
      </div>
    </div>
  )
}

export default Contact


