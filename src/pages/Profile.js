import { AuthContext } from './../AuthProvider';
import { useContext } from "react";
import Logo from "../components/logo/Logo";
import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function Profile() {
    const authContext = useContext(AuthContext)
  return (
    <>
    <Link to={'/'}>
    <Logo />
    </Link>
    <Title>{`${authContext.auth.first_name} ${authContext.auth.last_name}`}</Title>
    <p className='mt-3'>
        <b>first name:</b> {authContext.auth.first_name}<br/>
        <b>last name:</b> {authContext.auth.last_name}<br/>
        <b>phone:</b> {authContext.auth.phone}<br/>
        <b>email:</b> {authContext.auth.email}
    </p>
    </>
  )
}
