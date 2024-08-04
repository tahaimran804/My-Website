import React, { useState } from 'react'
const Contact = () => {
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Number: '',
        msg: '',
    });

    const InputValue = (event) => {
        const { name, value } = event.target;

        setData((PreverValue) => {
            return {
                ...PreverValue,
                [name]: value
            }
        })
    }

    const FromSubmit = (e) => {
        e.preventDefault();
        alert(
            `${data.Name} ${data.Email} ${data.Number} ${data.msg}`
        )
    }




    return (
        <>
            <div className='container mt-4 '>
                <h1 className='text-center'>Contact Us</h1>
                <div className='mt-2' >
                    <form onSubmit={FromSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name='Name' onChange={InputValue} value={data.Name} placeholder="john smith" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name='Email' onChange={InputValue} value={data.Email} placeholder="name@example.com" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name='Number' onChange={InputValue} value={data.Number} placeholder="12345678910" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Summary</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' onChange={InputValue} value={data.msg}></textarea>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-primary mb-3">Confirm identity</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact