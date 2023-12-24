import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { SIGNUP,headers} from '../ApiServices/ServiceUrls'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [message, setMessage] = useState({ type: "", display: false, content: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userDetails = {
            email: data.get('email'),
            userName: data.get('userName'),
            password: data.get('password'),
            mobileNumber: data.get('mobileNumber'),
        }
        signUp(userDetails);
    };

    const signUp =(data) =>{
        try {
            axios.post(SIGNUP, data, headers)
                .then(res => {
                    if(res.data.message==="SUCCESS"){
                        setMessage({type:"success",display:true,content:res.data.message});
                        setTimeout(function(){
                            setMessage({display:false})
                            navigate('/login');
                        }, 3000);
                    }else{
                        setMessage({type:"warning",display:true,content:res.data.message});
                        setTimeout(function(){
                            setMessage({display:false})
                        }, 3000);
                    }
                    
                }).catch(error => {
                    setMessage({type:"warning",display:true,content:error.message});
                    setTimeout(function(){
                        setMessage({display:false})
                    }, 3000);
                })
        } catch (e) {
            console.log(e);
        }
      }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {message.display ? <Alert severity={message.type}>{message.content}</Alert> : <></>}
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="userName"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="User Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="mobileNumber"
                                    required
                                    fullWidth
                                    id="mobileNumber"
                                    label="Mobile Number"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Remember Me"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}