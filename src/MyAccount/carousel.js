import React,{useState,useEffect} from 'react';
import Slider from 'infinite-react-carousel';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Carousel= () => {
    // const [loading,setLoading]=useState(false);
    // const [response,setResponse]=useState([])
    // let request = {"request":{"type":"getBannerSlider","devicetype":"I"},"requestinfo":{}}
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch("http://api.mifragroup.com/WebService/getResponse",{
    //         method: 'post',
    //         crossDomain:true,
    //         headers: {'Content-Type':'application/json'},
    //         body:JSON.stringify(request)
             
    //      }).then(res=>res.json()).then(result=>{
    //         setResponse(result.response.images)
    //         setLoading(false)
    //     }).catch(ex=>{
    //         setLoading(false)
    //         setResponse([])
    //     })
    // },[])
    const settings =  {
        autoplay: true,
        className: 'corousel',
        dots: true,
        dotsScroll: 2
      };
    return (
        <div className="corousel">
            <Slider { ...settings }>
          <div>
            <img  src="https://picsum.photos/800/301/?random" alt="1" width="100%"/>
          </div>
          <div>
            <img  src="https://picsum.photos/800/302/?random" alt="1" width="100%"/>
          </div>
          <div>
            <img  src="https://picsum.photos/800/303/?random" alt="1" width="100%"/>
          </div>
          <div>
            <img  src="https://picsum.photos/800/304/?random" alt="1" width="100%"/>
          </div>
        </Slider>
        </div>
    )
}

export default Carousel
