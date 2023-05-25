import { Link } from "react-router-dom";
import Title from "./Title";
import RegisterLink from './RegisterLink';

export default function Guest() {
  return (
    <>
      <div className="text-center">
        <Title>Welcome to Anonymous Company</Title>
        <Link to={"/login"} className="btn mt-5">
          Login
        </Link>
      </div>
      <RegisterLink />
    </>
  );
}
