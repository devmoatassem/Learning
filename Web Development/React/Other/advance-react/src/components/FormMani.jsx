import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";


function FormMani(){
    const [forminp,setForminp] = useState({
        name:"",
        email:"",
        role:"role",
        password:"",
        passTouched:false
    })
    const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
    };
    const getIsFormValid = () => {
        
        return (
            forminp.name && 
            validateEmail(forminp.email) && 
            forminp.password.length>=8 && 
            forminp.role!="role"
            
        )
    };
    const clearForm = () => {
        setForminp(
            {
                name:"",
                email:"",
                role:"role",
                password:"",
                passTouched:false
            }
        )
        
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Account created!");
        clearForm();
    };
  return (
    <div className="App">

      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>Full name</label>
            <input 
            value={forminp.name} 
            onChange={(e)=>{
                setForminp(
                    {...forminp, name:e.target.value}
                    )}} 
            placeholder="Last name"
            />

            {/* { ...password }: This part spreads the previous values of the password state object. It creates a shallow copy of the existing state, ensuring that any other properties of the password state object (aside from value) are retained. This is important because you don't want to lose any other information stored in the password state. */}
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
            value={forminp.email} 
            onChange={(e)=>{
                setForminp(
                    {...forminp, email:e.target.value}
                    )}} 
            placeholder="Email address" 
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
            value={forminp.password}
            onChange={(e)=>{
                setForminp(
                    {...forminp, password:e.target.value}
                )
            }}
            onBlur={(e)=>{
                setForminp(
                    {...forminp, passTouched:true}
                )
            }}
            placeholder="Password" 
            />
            {(forminp.passTouched && forminp.password.length<8) ? (
                <PasswordErrorMessage/> 
            ):null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select 
            value={forminp.role}
            onChange={
                (e)=>{
                    setForminp(
                        {...forminp,role:e.target.value}
                    )
                }
            }>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );

}

export default FormMani;