import { AuthContext } from './../AuthProvider';
import { useContext } from "react";
import Logo from "../components/logo/Logo";
import Guest from '../components/Guest';
import Member from '../components/Member';

export default function Home() {
    const authContext = useContext(AuthContext)
  return (
    <>
    <Logo />
    {JSON.stringify(authContext.auth) === '{}' ? 
    (<Guest />)
    : 
    (<Member user={`${authContext.auth.first_name} ${authContext.auth.last_name}`} />)}
    </>
  )
}
