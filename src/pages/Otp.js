import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './../AuthProvider';
import usersData, { OTP } from "../data";

export default function Otp() {
    const authContext = useContext(AuthContext)
    const [otp, setOtp] = useState(0)
    const navigate = useNavigate();
    const { num } = useParams();

    useEffect(()=> {
      if(otp == OTP) {
        if(usersData) {
          usersData.map(user => {
              if(num === user.phone) {
                localStorage.setItem('userData', JSON.stringify(user))
                authContext.setAuth(user)
              }
          })
        }
        navigate('/profile')
      } else {
        if(otp !== 0) {
          navigate('/login')
        }
      }
    }, [otp])

  return (
    <form className="p-3 mt-3 text-center">
        <div className="form-field d-flex align-items-center">
          <input
            type="number"
            name="otp"
            id="otp"
            placeholder="type otp"
            onChange={(e)=> {
                if(e.target.value.match(/^\d{4}$/) !== null) {
                    setOtp(e.target.value)
                }
            }}
          />
        </div>
      </form>
  )
}
