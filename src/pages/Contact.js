import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai"
import Container from '../components/Container'

const Contact = () => {
   return (
      <>
         <Meta title={"Contact Us"} />
         <BreadCrumb title="Contact Us" />
         <Container class1="contact-wrapper py-5 home-wrapper-2">
            <div className="row">
               <div className="col-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5424.727697534695!2d108.26376918785061!3d15.96860739606684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2zxJDhuqFpIGjhu41jIEZQVCAoRlBUIHVuaXZlcnNpdHkp!5e0!3m2!1sen!2s!4v1695742418258!5m2!1sen!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <div className="col-12 mt-5">
                  <div className="contact-inner-wrapper d-flex justify-content-between">
                     <div>
                        <h3 className="contact-title mb-4">Contact</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                           <div>
                              <input type="text" className="form-control" placeholder='Name' />
                           </div>
                           <div>
                              <input type="email" className="form-control" placeholder='Email' />
                           </div>
                           <div>
                              <input type="tel" className="form-control" placeholder='Mobile Number' />
                           </div>
                           <div>
                              <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                           </div>
                           <div>
                              <button className="button border-0">Submit</button>
                           </div>
                        </form>
                     </div>
                     <div>
                        <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                        <div>
                           <ul className='ps-0'>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                 <AiOutlineHome className='fs-5' />
                                 <address className='mb-0'>Ngu Hanh Son, Da Nang</address>
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                 <AiOutlinePhone className='fs-5' />
                                 <a href="tel: +84 852656550">+84 852656550</a>
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                 <AiOutlineMail className='fs-5' />
                                 <a href="mailto: f-digitic@gmail.com">f-digitic@gmail.com</a>
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                 <AiOutlineInfoCircle className='fs-5' />
                                 <p className='mb-0'>Monday – Friday 8 AM – 8 PM</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </>
   )
}

export default Contact