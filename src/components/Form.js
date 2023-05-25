import Title from "../components/Title";
import Logo from './../components/logo/Logo';
import RegisterLink from "../components/RegisterLink";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../AuthProvider';
import { useContext, useEffect } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Otp from "../pages/Otp";

export default function Form(props) {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(()=> {
    if(JSON.stringify(authContext.auth) !== '{}') {
      navigate('/profile')
    }
  }, [])

  return (
    <>
        <Link to={'/'}>
          <Logo />
        </Link>
        <Title>
          {props.page !== 'otp'? `${props.page} to Anonymous Company`: `wait until recieving otp then write it below`}
        </Title>
        {props.page === 'login'&& (<><Login /><RegisterLink /></>)}
        {props.page === 'register' && (<Register />)}
        {props.page ==='otp'&& <Otp />}
    </>
  )
}
