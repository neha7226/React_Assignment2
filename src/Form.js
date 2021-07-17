import React,{useState} from 'react';

const Form = ( ) => {
    const [userRegistration,setUserRegistration]=useState(
        {
            FirstName:"",
            LastName:"",
            email:"",
            subject:"React"
        }
    );

    const [records,setRecords]=useState([]);
    const handleInput=(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name] :value})
       
    }

    
    const handleSubmit =(e) => {
        e.preventDefault();

        const newRecord ={ ...userRegistration, id:new Date().getTime().toString()}
        setRecords([...records,newRecord])

        // setUserRegistration({FirstName:"",LastName:"",email:"",subject:"react"});
    }
    return (
        <div>
            <div className="center">
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="text" autoComplete="off" name="FirstName" 
                value={userRegistration.FirstName}
                onChange={handleInput}
                id="FirstName"></input>
                <spna></spna>
                <label htmlFor="FirstName">First Name</label>
            </div>

            <div className="txt_field">
                
                <input type="text"  autoComplete="off" name="LastName" 
                value={userRegistration.LastName}
                onChange={handleInput}
                id="SecondName"></input>
                <spna></spna>
                <label htmlFor="LastName" >Last Name</label>
            </div>

            <div className="txt_field">
                
                <input type="text" autoComplete="off" name="email" 
                value={userRegistration.email}
                onChange={handleInput}
                id="Email"></input>
                <spna></spna>
                <label htmlFor="Email">Email</label>
            </div>

            <div >
            <label htmlFor="subject" className="sub">Subject </label>
                <select name="subject" value={userRegistration.subject}
                onChange={handleInput}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='NodeJs'>Node Js</option>
                    <option value='Java'>Java</option>
                </select>
                <spna></spna>
                
            </div>

            <div>
                <button className="submit" type="submit">Register</button>
            </div>
            </form>
            </div>

            <div className="details">
                {
                    records.map((curElem)=>{
                        const{id,FirstName,LastName,email,subject}=curElem;
                        return(
                            
                            <div key={curElem.id}>
                            <p>{FirstName}&ensp;</p>
                            <p>{LastName}&ensp;</p>
                            <p>{email}&ensp;</p>
                            <p>{subject}&ensp;</p>
                        </div>
                        )
                        
                        
                    }

                    )
                }
            </div>

        </div>
    )
}

export default Form;