import {  useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const from = () => {
  
  const formRef = useRef();
  const [done, setDone] = useState(false)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_do88m07",
        "template_zt32dbe",
        formRef.current,
        "yrNY2ZGMuPy4oOnAt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
  <section 
  id="kontak"  className='mb-32 p-8 text-center bg-p1'>
      <h2 className='text-3xl font-bold mb-12'>Cont<span className='bg-span rounded-md'>act us</span></h2>
    <div className='max-w-[700px] mx-auto px-3 lg:px-6  bg-p2'>
      
      <form   ref={formRef} onSubmit={handleSubmit} className='p-10'>
         <div className='form-group mb-6'>
          <input type='text' className='  block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-b-font rounded transition ease-in-out m-0 focus:bg-input focus:outline-none' placeholder='Masukan Nama'  name='User_name' />
        </div>
        <div className='form-group mb-6'>
          <input type='email' className=' block w-full px-3 py-1.5 text-base  font-normal bg-white bg-clip-padding border border-solid border-font rounded transition ease-in-out m-0 focus:bg-input   focus:outline-none  '  placeholder='Masukan Alamat Email' name='user_email'  />
        </div>
        <div className='form-group mb-6'>
          <textarea className='  block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-font rounded transition ease-in-out  m-0 focus:text-span focus:bg-input focus:border-span focus:outline-none '  rows='3' placeholder='Pesan' name='message'   ></textarea>
        </div>
        <div className='text-center mb-6'>
          <h1>Silahkan kirimkan
            Saya pesan</h1>
        </div>
        <button className='bg-span mt-8 hover:bg-hover text-white font-bold py-2 px-4 rounded-full'>Kirim Pesan</button>
      </form>
    </div>
  </section>
  )
}

export default from
