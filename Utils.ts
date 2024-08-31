export const validate = ({
    userCredentials  , 
    setErrors
} : {
    userCredentials : {email : string, password :string} , 
    setErrors : (errors : {})=>void
}) => {
    let valid = true;
    let errors = {} as { email?: string, password?: string };

    if (!userCredentials.email) {
        errors.email = 'Email is required';
        valid = false;
    }

    if (!userCredentials.password) {
        errors.password = 'Password is required';
        valid = false;
    }

    setErrors(errors);
    return valid;
}

export const handleSubmit = async ({
    e,
    userCredentials  , 
    setErrors
} : {
    e : React.FormEvent<HTMLFormElement>,
    userCredentials : {email : string, password :string} , 
    setErrors : (errors : {})=>void
})=>{
    e.preventDefault();
    if (!validate({userCredentials , setErrors})) {
        return;
    }
    try {
        const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(userCredentials),  
        });

       if(!response.ok){
        const errorData = await response.json();
        setErrors({apiRes : errorData.detail})
        return
       }
        const data = await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}