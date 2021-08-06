import React,{useState,useEffect} from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home=() =>{
    const [loading,setLoading]=useState(false);
    let history = useHistory();
    const clicMe=() =>{
        history.push("/login")
    }
    const registration=() =>{
        history.push("/registration")
    }
    const [response,setResponse]=useState([])
    let request = {"request":{"type":"getCategoryList","devicetype":"I"},"requestinfo":{"pageNo":"1"}}
    useEffect(()=>{
        setLoading(true)
        fetch("http://api.mifragroup.com/WebService/getResponse",{
            method: 'post',
            crossDomain:true,
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(request)
             
    }).then(res=>res.json()).then(result=>{
            setResponse(result.response.categoryList)
            setLoading(false)
        }).catch(ex=>{
            setLoading(false)
            setResponse([])
        })
    },[])

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        flexGrow: 1,
        },
        menuButton: {
        marginRight: theme.spacing(2),
        },
        title: {
        flexGrow: 1,
        },
    }),
    );

    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            I am superman
            </Typography>
            <Button color="inherit" onClick={e=>clicMe()}>Login</Button>
            <Button color="inherit" onClick={e=>registration()}>Registration</Button>
            </Toolbar>
            </AppBar>
            </div>
            <table>
            <tr>
                <td>Cat name</td>
                <td>Cat Image</td>
            </tr>
            {loading!==true?response.length>0?response.map(obj=>(

                
                    <tr key={obj.categoryId}>
                        <td>{obj.name}</td>
                        <td>{obj.image}</td>
                    </tr>

                


            )):<Alert severity="error">This is an error message!</Alert>:<p>loading</p>}
            </table>
        </React.Fragment>

    )
}
export default Home;