<<<<<<< HEAD:Front/src/components/Form/Form.jsx
import React from "react";
import { useState } from "react";
import  validation  from "./validation";
//import style from "./Form.module.css";
=======
import { useState } from "react";
import validation from "./validation";
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/Form.jsx

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState ({
        username: "",
        password: "",
    });
<<<<<<< HEAD:Front/src/components/Form/Form.jsx

   
=======
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/Form.jsx
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

<<<<<<< HEAD:Front/src/components/Form/Form.jsx
        setUserData({ ...userData, [property]: value });
        validation({ ...userData, [property]: value }, errors, setErrors);
    };
    
   const submitHandler = (event) => {
   event.preventDefault();
    login(userData);
   };
   //handleSubmit
=======
        setUserData({...userData,[property]: value});
        validation({...userData,[property]: value}, errors, setErrors);
    };

    const submitHandler = (event) => {
      event.preventDefault();
      login(userData);
    };

>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/Form.jsx
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username:</label>
<<<<<<< HEAD:Front/src/components/Form/Form.jsx
                <input 
                type="text" 
=======
                <input type="text" 
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/Form.jsx
                name="username" 
                value={userData.username} 
                onChange={handleInputChange}
                />
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                />
            </div>
<<<<<<< HEAD:Front/src/components/Form/Form.jsx
           <button type="submit" >LOGIN</button>
        </form>
    ); 
=======
            <button type="submit">LOGIN</button>
        </form>
    );
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/Form.jsx
};
export default Form;