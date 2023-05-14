"use client"
import { clear } from 'console';
// import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Form=()=> {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const formHandler:SubmitHandler<FieldValues> =async(data) => {
        console.log(data);
        await fetch('/api/formHandler',{
            method:"POST",
            body:JSON.stringify(data)
        })
    };

    return (
        <div>
            <form className='flex space-x-6' onSubmit={handleSubmit(formHandler)}>
                <div>
                    <label htmlFor=''>Email</label>
                    <input 
                      type='email'
                      className='border-4 border-red-500 rounded-xl p-2 outline-none '
                      {...register("email",
                        {   
                            required:"emial is required", 
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/

                            // pattern: {
                                // value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                // message: "Email is not valid."
                            // }
                        })
                      }
                      placeholder='Enter your Email'/> 
                        {errors.email && errors.email.type === "pattern" && (
                                    <p className="text-red-400">Email is required.</p>
                                )}
                    {/* </input> */}
                    {/* <p>{errors.email?.message}</p> */}
                    {/* {errors.email && <p className="errorMsg">{errors.email?.message}</p>} */}

                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' 
                      className='border-4 border-red-500 rounded-xl p-2 outline-none ' 
                      {...register("password",{required:true,minLength:6})}
                      placeholder='Enter your Password'/>
                    {/* </input> */}
                    {errors.password && errors.password.type === "required " && (
                                    <p className="text-red-400">minimum lenght 6 is reuired.</p>
                                )}
                </div>
                <div>
                    <button type='submit' className='border p-2 border-black'>Submit</button>
                </div>
            </form>
        </div>

  )
}

export default Form
