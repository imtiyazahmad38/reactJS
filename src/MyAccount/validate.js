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

const regvalidate = (inputs) =>{
    const errors = {};
    //firstName errors   
   if (!inputs.firstName) {
    errors.firstName = 'Please enter First Name.';
    }
    //lastName errors   
    if (!inputs.lastName) {
        errors.lastName = 'Please enter Last Name.';
    }
    //email errors
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);   
    if (!pattern.test(inputs.email)) {
        errors.email = 'Please enter valid email address.';
    }
    //phoneNumber errors   
   if (!inputs.phoneNumber) {
       errors.phoneNumber = 'Check phoneNumber';
   } 

   var patternphone = new RegExp(/^[0-9\b]+$/);
   if (!patternphone.test(inputs.phoneNumber)) { 
    errors.phoneNumber = 'Please enter only number.'; 
   }else if(inputs.phoneNumber.length !== 10){
    errors.phoneNumber = 'Please enter valid phone number.';  
   }


   //Password Errors
   if(!inputs.password  || inputs.password.length<6){
       errors.password = 'Check Password'
   }
    //match password
    if(inputs.password !== inputs.cpassword){
        errors.cpassword = 'password does not match'
    }

   return errors;
}

export {validate, regvalidate};