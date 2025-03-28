import React from 'react'
import './Contact.css'


export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "af9a1611-22ef-4a09-bf83-e26c8f236c69");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.location.reload();
      alert("Email sent Successfully")
    }
  };
  return (
    <div id='contact' className='contact container'>
      <h1>Contact me</h1>
      <div className="row container">
        <div className="col-md-6 col-12 contact-left text-start">
          <div className='d-flex gap-3'>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/20/FFFFFF/incoming-call.png" alt="incoming-call" />
            <p>+91 96550 94620</p>
          </div>
          <div className='d-flex gap-3'>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/20/FFFFFF/marker.png" alt="marker" />
            <p>Coimbatore, Tamilnadu</p>
          </div>
          <div className="d-flex gap-3">
            <img width="25" height="25" src="https://img.icons8.com/material-rounded/20/FFFFFF/new-post.png" alt="new-post" />
            <p>Kishoreanand2846@gmail.com</p>
          </div>

          <div className="profiles">
            <a href="https://www.linkedin.com/in/kishore-kumar-a-b4a268218/"><img width="50" height="50" src="https://img.icons8.com/color/100/linkedin.png" alt="linkedin"/></a>
            <a href="https://github.com/kishore-1927  "><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
          </div>

        </div>
        <div className='col-md-6 col-12'>
          <form onSubmit={onSubmit}>
            <div className=" contact-right gap-5">
              <h2>Let's Talk</h2>
              <div className='d-flex w-100 label-div'>
                <label htmlFor="name ">Name</label>
                <input className='ps-4' type="text" name="name" id="" placeholder='Enter Your name' />
              </div>
              <div className='label-div w-100'>
                <label htmlFor="email">Email</label>
                <input className='ps-4' type="email" name="email" id="" placeholder='Enter your email' />
              </div>
              <div className='label-div w-100'>
                <label htmlFor="message">message here</label>
                <textarea className='p-4 contact-message' type="text" name="message" id="" placeholder='Enter your Message here' />
              </div>
              <button className='w-25'>Send</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
