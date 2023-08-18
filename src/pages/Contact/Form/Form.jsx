import React from 'react'

const Form = () => {
  return (

    <form action="" class="form">
    <h1 class="lg-heading text-black">Contact Us</h1>
    <p class="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="" id="username" required/>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="" id="email" required/>
    </div>
    <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" name="" id="phone" required/>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea name="" id="message"> </textarea>
    </div>
    <button type="submit" class='form-btn'>Submit</button>
</form>

  )
}

export default Form