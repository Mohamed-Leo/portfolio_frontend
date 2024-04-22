// import React from 'react';
import illustion from '../static/images/illustion.png';

// react hook form-----
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contactsection() {

    const {register , handleSubmit , reset , formState : {errors}} = useForm();

    return (
        <section className='contact_sec' id='connect'>
                {/* Start container */}
                <div className="container">
                    <div className="img_con">
                        {/* Start img */}
                        <img src={illustion} alt="illustions" />
                        {/* End img */}
                    </div>

                    {/* Start form */}
                    <form method='post' onSubmit={handleSubmit(data => {
                        console.log(data);
                        axios.post('http://127.0.0.1:8000/api/contacts-api' , data);
                        reset();
                    })}>
                        <h3>get in touch</h3>

                        {/* Start inputs_con */}
                        <div className="inputs_con">
                            {/* Start name */}
                            <div className="name">
                                {/* Start box */}
                                <div className = 'box'>
                                    <input type="text" {...register('firstname' , {required: 'first name is required',
                                    maxLength: {
                                        value : 20,
                                        message : 'max length is 20 chars'
                                    }})}
                                    placeholder='First Name' />
                                    <span>{errors.firstname?.message}</span>
                                </div>

                                <div className = 'box'>
                                    <input type="text" {...register('lastname' , { required: 'last name is required' ,
                                    minLength : {
                                        value : 4,
                                        message : 'min length is 4 chars'
                                    }})}
                                    placeholder='Last Name' />
                                    <span>{errors.lastname?.message}</span>
                                </div>
                                {/* End box */}
                            </div>
                            {/* End name */}

                            {/* Start data */}
                            <div className="data">
                                {/* Start box */}
                                <div className = 'box'>
                                    <input type="email" {...register('email' , {required : 'This is required'})}
                                    placeholder='Email Address' />
                                    <span>{errors.email?.message}</span>
                                </div>

                                <div className = 'box'>
                                    <input type="text" {...register('phone' , {required : 'This is required',
                                    minLength : {
                                        value :11,
                                        message: 'min lenght is 11 numbers'
                                    } ,
                                    maxLength: {
                                        value : 14,
                                        message:'max length is 14 numbers'
                                    }})}
                                    placeholder='Phone No.' />
                                    <span>{errors.phone?.message}</span>
                                </div>
                                {/* End box */}
                            </div>
                            {/* End data */}

                            {/* Start textarea */}
                                    <div className = 'box_area'>
                                        <textarea className='textarea' {...register('message' , {required : 'This is required'})}
                                        cols="30"
                                        rows="10"
                                        placeholder='Message' >
                                        </textarea>
                                        <span>{errors.message?.message}</span>
                                    </div>
                            {/* End textarea */}
                        </div>
                        {/* End inputs_con */}

                        {/* Start send_btn */}
                        <button type='submit' className="send_btn">
                            Send
                        </button>
                        {/* End send_btn */}
                    </form>
                    {/* End form */}
                </div>
            {/* End container */}
        </section>
    )
}
