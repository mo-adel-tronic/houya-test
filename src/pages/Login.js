import { useEffect, useState } from "react";
import usersData from "../data";
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [phone, setPhone] = useState('')
    const [invalidMsg, setInvalidMsg] = useState('')
    const navigate = useNavigate();

    const phonePatternChecker = () => {
        let patrn = /^\+\d{13}$/
        return phone ? phone.match(patrn) : []
    }
    const handlePhone = () => {
        if(phonePatternChecker() === null) {
            setInvalidMsg('phone number pattern is wrong')
        } else {
            setInvalidMsg('')
            if(phonePatternChecker().length) {
                return 'valid'
            }
        }
        return 'not valid'
    }

    
    useEffect(()=> {
        handlePhone()
    }, [phone])

    return (
      <form className="p-3 mt-3 text-center" onSubmit={(e) => {
        e.preventDefault()
        if(handlePhone() === 'valid') {
            let userExist = 0
            if(usersData) {
                usersData.map(user => {
                    if(phone === user.phone) {
                        userExist = 1
                    }
                })
            }
            if(userExist) {
                navigate('/generate-code/'+phone)
            } else {
                setInvalidMsg('this number is not exist')
            }
        } else {
            setInvalidMsg('invalid number')
        }
      }}>
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-phone" />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone number"
            onChange={(e)=> {
                setPhone(e.target.value)
            }}
          />
        </div>
        <div className="text-start ps-3 text-danger">
            <span>{invalidMsg}</span>
        </div>
        <button type="submit" className="btn mt-3">Login</button> 
      </form>
    );
  }
