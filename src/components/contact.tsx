import styled from 'styled-components';
import { useState } from 'react';

const ContactDiv = styled.div`
    h2{
        text-decoration: underline;
        font-size: 3vw;
    }
    .management{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        justify-content: center;
    }
`

function Contact(){
    const initialValues = {email: '', type: 'Catering', name: '', date: '', amount: '', notes: '', timeFrame: false}
    const [formValues, setFormValues] = useState(initialValues)
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        setFormValues(initialValues)
        alert(`We have sent management an email about your ${formValues.type} inquiry! We will get back to you soon!`)
    }
    const handleChange = (e:any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    function SpecificForm(){
        if(formValues.type === "Catering"){
            return (
                <div className='catering'>
                    <h1> Catering</h1>
                    <div className='info'>
                        <label >Date</label>
                        <input type='date' name='date' value={formValues.date} onChange={handleChange} ></input>
                    </div>
                    <div className='info'>
                        <label>How many people to feed:</label>
                        <input type='number' name='amount' value={formValues.amount} onChange={handleChange} />
                    </div>
                    <div className='info notes'>
                        <label>Any additional notes before we contact you?</label>
                        <input type='text' name='notes' value={formValues.notes} onChange={handleChange} />
                    </div>
                </div>
            )
        }else if(formValues.type === "Reservations"){
            return (
                <div className='reservations'>
                    <h1> Reservations</h1>
                    <div className='info'>
                        <label >Date</label>
                        <input type='date' name='date' value={formValues.date} onChange={handleChange} ></input>
                    </div>
                    <div className='info'>
                        <label>How many people we are seating:</label>
                        <input type='number' name='amount' value={formValues.amount} onChange={handleChange} />
                    </div>
                    <div className='info notes'>
                        <label>Any additional notes?</label>
                        <input type='text' name='notes' value={formValues.notes} onChange={handleChange} />
                    </div>
                </div>
            )
        }else if(formValues.type === "Careers"){
            return (
                <div className='careers'>
                    <h1> Looking for your next part time job?</h1>
                    <div className='info'>
                        <label >Full name</label>
                        <input type='text' name='name' value={formValues.name} onChange={handleChange} ></input>
                    </div>
                    <div className='info'>
                        <label>Can you work from 9:00 PM - 9:00 AM? (a 6 hour shift in that time frame)</label>
                        <input type='checkbox' name='timeFrame' checked={formValues.timeFrame} onChange={handleChange} />
                    </div>
                    <div className='info notes'>
                        <label>Any additional notes before we contact you?</label>
                        <input type='text' name='notes' value={formValues.notes} onChange={handleChange} />
                    </div>
                </div>
            )
        }else if(formValues.type === "Concerns"){
            return (
                <div className='careers'>
                    <h1> Have any concerns for management?</h1>
                    <div className='info'>
                        <label >Full name</label>
                        <input type='text' name='name' value={formValues.name} onChange={handleChange} ></input>
                    </div>
                    <div className='info notes'>
                        <label>How can we help you?</label>
                        <input type='text' name='notes' value={formValues.notes} onChange={handleChange} />
                    </div>
                </div>
            )
        }
    }

    return(
        <ContactDiv>
            <h2> Contact Us</h2>
            <section className='management'>
                <h3>Question for management?</h3>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input  
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <select 
                        name='type'
                        onChange={handleChange}
                        value={formValues.type}
                    >
                        <option value="Catering">Catering</option>
                        <option value="Reservations">Reservations</option>
                        <option value="Careers">Careers</option>
                        <option value="Concerns">Concerns</option>
                    </select>
                    {
                        SpecificForm()
                    }
                    <button>Submit</button>
                </form>
            </section>
        </ContactDiv>
    )
}

export default Contact