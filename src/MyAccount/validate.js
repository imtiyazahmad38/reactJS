const validate = (inputs) => {
    //phoneNumber errors
   const errors = {};
   if (!inputs.phoneNumber) {
       errors.phoneNumber = 'Check phoneNumber';
   } 

   //Password Errors
   if(!inputs.password  || inputs.password.length<6){
       errors.password = 'Check Password'
   }
   return errors;
}

export default validate;