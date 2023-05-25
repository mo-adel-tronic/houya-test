import { Link } from "react-router-dom";

export default function RegisterLink() {
  return (
    <div className="text-center fs-6 mt-2">
        <Link to={"/register"}>Register</Link>
    </div>
  )
}
