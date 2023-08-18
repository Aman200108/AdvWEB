import React from "react";
import Adress from "./Adress/Adress";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <section class="contact-form">
    <div class="container">
        <div class="form-wrapper">
 <Adress/>
 <Form/>
 </div>
        </div>
        
    </section>
  );
};

export default Contact;