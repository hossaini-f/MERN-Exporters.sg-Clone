function validateFormFields (values){
    
    let errors = {};
    if(!values.username){
        errors.username = "Email Address is required.";
    }
    if(!values.password){
        errors.password = "Password is required.";
    }
    return errors;
}
export default validateFormFields;