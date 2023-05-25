import { Outlet } from "react-router-dom";
import './wrapper.css'

export default function Wrapper() {
  return (
    <div className='wrapper'>
        <Outlet />
    </div>
  )
}
