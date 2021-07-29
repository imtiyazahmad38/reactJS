import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';


const useForm = (initialValues,validate) => {
	const [inputs,setInputs] = useState(initialValues);
	const [errors,setErrors] = useState({});
    const [loading,setLoading]=useState(false);
    const [response,setResponse]=useState([])
	const { userId, firstName, lastName, email, password, profileImage, phoneNumber } = useState();
	let history = useHistory();
	
	const HandleSubmit = (event) => {
		
		event.preventDefault();
		const validationErrors = validate(inputs);
		const noErrors = Object.keys(validationErrors).length === 0;
		setErrors(validationErrors);
		if(noErrors){
			console.log("Authenticated",inputs);
            let request = {"request":{"type":"login","devicetype":"I"},"requestinfo":{"phoneNumber":inputs.phoneNumber,"password":inputs.password}}

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };
        
            return fetch('http://api.mifragroup.com/WebService/getResponse', requestOptions)
            .then(res=>res.json()).then(result=>{
                setResponse(result.response)
                console.log(response)
                setLoading(false)
				localStorage.setItem('userId', result.response.userInfo.userId);
				localStorage.setItem('firstName', result.response.userInfo.firstName);
				localStorage.setItem('lastName', result.response.userInfo.lastName);
				localStorage.setItem('email', result.response.userInfo.email);
				localStorage.setItem('password', result.response.userInfo.password);
				localStorage.setItem('profileImage', result.response.userInfo.profileImage);
				localStorage.setItem('phoneNumber', result.response.userInfo.phoneNumber);
				history.push("/Myaccount")
            }).catch(ex=>{
                setLoading(false)
                setResponse([])
            })




		}else{
            
			console.log("errors try again",validationErrors);
		}
		
	}

	const handleInputChange = (event) => {
    	event.persist();
    	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  	}

	return {
    	HandleSubmit,
   		handleInputChange,
    	inputs,
    	errors
  	};
}

export default useForm;