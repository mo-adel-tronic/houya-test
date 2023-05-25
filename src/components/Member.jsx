import { Link } from "react-router-dom";
import Title from "./Title";
import { AuthContext } from './../AuthProvider';
import { useContext } from "react";

export default function Member(props) {
  const authContext = useContext(AuthContext)
  return (
    <>
      <div className="text-center">
        <Title>Welcome {props.user} to Anonymous Company</Title>
        <Link to={"/profile"} className="btn mt-5">
          profile
        </Link>
      </div>
      <div className="text-center fs-6 mt-2">
        <Link className="text-danger" onClick={()=> {
          localStorage.removeItem('userData')
          authContext.setAuth({})
        }}>Logout</Link>
      </div>
    </>
  );
}
