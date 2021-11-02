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
        width: 100%;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 85%;
        align-items: center;
        justify-content: center;
        border: 2px solid #EDB34D;
        padding: 5px;
        border-radius: 7px;
        .subSection{
            width: 80%;
            .info{
                padding: 1vw;
            }
        }
        button{
            text-decoration: none;
            color: #2D5578;
            background-color: #EDB34D;
            font-weight: bold;
            padding: 5px;
            border-radius: 7px;
            transition: 0.3s;
            font-size: 2vw;
            :hover{
                background-color: #2D5578;
                color: #EDB34D;
                border: 2px solid #EDB34D;
            }
        }
        .notes{
            display: flex;
            flex-direction: column;
            input{
                height: 3rem;
            }
        }
        .category{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1vw;
            select{
                height: 2rem;
            }
        }
        .first{
            padding: 2vw;
        }
        h4{
            font-size: 4vw;
        }
        input{
            width: 100%;
            text-align: center;
            height: 2rem;
        }
        select{
            width: 100%;
            text-align: center;
        }
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
                <div className='catering subSection'>
                    <h4 id='type'> Catering</h4>
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
                <div className='reservations subSection'>
                    <h4 id='type'> Reservations</h4>
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
                <div className='careers subSection'>
                    <h4 id='type'> Looking for your next part time job?</h4>
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
                <div className='careers subSection'>
                    <h4 id='type'> Have any concerns for management?</h4>
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
                    <div className='subSection first'>
                        <div className='info'>
                            <label>Email</label>
                            <input  
                                type='email'
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                            />  
                        </div>
                        <div className='category'>
                            <label>Inquiry Category?</label>
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
                        </div>
                    </div>
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