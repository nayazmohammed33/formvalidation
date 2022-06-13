import React, { useEffect, useState } from 'react';
import styles from  './../Popup/style.css';
import { useAlert } from 'react-alert';
import { Alert } from 'react-alert'

function Popup(props) {
 

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);


    const [fname, setfname]=useState("");
    const [comment, setcomment]=useState("");
    const [rating, setrating]=useState("");

    const initialvalues={fname:"", comment:""}
    const [formvalues, setformvalues]=useState(initialvalues);
    const [formerrors, setformerrors]=useState({});
    const [issubmit,setissubmit] =useState(false);

    const [btnpopd, Setbtnpopd] = useState(false);
  
   



   
    const handlchange=(e)=>{
      console.log(e.target);
      const {name, value}=e.target;
      setformvalues({...formvalues,[name]:value});
      console.log(formvalues);

    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`
        fname: ${fname}
        comment: ${comment}
        rating: ${rating}
        Accepted Terms: ${acceptedTerms}
      `);

      setformerrors(validate(formvalues));
      setissubmit(true);
     
    }

    useEffect(()=>{
      console.log(formvalues);
      if(Object.keys(formvalues).length ===0 && issubmit  ){
        console.log(formvalues);
      }
    },[formerrors]);



    const validate=(values)=>{
      const errors={};
      
      if(!values.fname){
        errors.fname="Name Required!";
      }

      if(!values.comment){
        errors.comment="Comment Required!";
      }


      return errors;

    }

    const btnalert =()=>{
      alert(JSON.stringify(formvalues));
      Setbtnpopd(false);
      
    }

    const btnclose =()=>{
      setissubmit(false);
    }



  return (props.trigger)?(
   


    <div className='popup'>
        

        <form onSubmit={handleSubmit}    className={styles.formcon}>
          <pre>{JSON.stringify(formvalues)}</pre>
      <h1>Submit Comment</h1>


      <label>
        RATING
        <input
          name="text"
          type="number"
          value={formvalues.rating}
          min="1"
           max="5"
          onChange={e => setrating(e.target.value)}
          required />
      </label>

      <label>
        Name
        <input
          name="fname"
          type="text"
          value={formvalues.fname}
          minlength="2"
          onChange={handlchange}
          required />
          
      </label>
      <p>{formerrors.fname}</p>
      
      <label>
       Comment
        <input
          name="comment"
          type="text"
          value={formvalues.comment}
          onChange={handlchange}
          
          required />
      </label>

     

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={handlchange}

          required />
        I accept the terms of service        
      </label>

      <Popup trigger={btnpopd}>
                 
                </Popup>

      <button  onClick={btnalert} >Submit</button>
    </form>
      
    </div>
  ): "";
}

export default Popup;
