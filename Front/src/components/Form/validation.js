const validation = (userData, errors, setErrors) => {
    if(!userData.username) 
<<<<<<< HEAD:Front/src/components/Form/validation.js
    setErrors({...errors,username: "Por favor completa este campo" });
    else if (userData.username.length> 35) 
          setErrors({ ...errors, username: "No puedes superar los 35 caracteres" });
=======
    setErrors({...errors,username:"Por favor completa este campo"});
    else if (userData.username.length> 35) 
          setErrors({...errors, username: "No puedes superar los 35 caracteres"});
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/validation.js
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ) {
        setErrors({...errors, username: "Email inválido" });
    } else {
<<<<<<< HEAD:Front/src/components/Form/validation.js
        setErrors({...errors,username: "" });
}

if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Longitud de password inválida" });
} else if (!/\d/.test(userData.password)) {
  setErrors({ ...errors, password: "Debe contener al menos un número" });
} else {
    setErrors({ ...errors, password: ""});    
=======
        setErrors({...errors,username:""});
}

if(userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors,password: "Longitud de password inválida" });
} else if(!/\d/.test(userData.password)) {
  setErrors({...errors, password: "Debe contener al menos un número"});
} else {
    setErrors({...errors, password: ""});    
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Form/validation.js
}

};
export default validation;  