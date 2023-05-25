import { useState } from "react";

export default function Register() {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [invalidMsg, setInvalidMsg] = useState('')

    const patternChecker = () => {
        let patrn = {}
        let phonePatrn = /^\+\d{13}$/
        let mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let names = /^\w+$/
        patrn.phone = phone ? phone.match(phonePatrn) : []
        patrn.email = email ? email.match(mailPattern) : []
        patrn.fname = fname ? fname.match(names) : []
        patrn.lname = lname ? lname.match(names) : []
        return patrn
    }

    const handleForm = () => {
        if(patternChecker().email.length && patternChecker().phone.length && patternChecker().lname.length && patternChecker().fname.length) {
            let users = localStorage.getItem('users')
            let userObj = {phone, email, first_name: fname, last_name: lname}
            if(users !== null && users !== '{}') {
                let usersData = JSON.parse(users)
                usersData.push(userObj)
                localStorage.setItem('users', JSON.stringify(usersData))
            }
            localStorage.setItem('users', JSON.stringify([userObj]))
            window.location.assign(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/login`)
        }
        setInvalidMsg('not valid')
    }
    return (
      <form className="p-3 mt-3 text-center" onSubmit={(e)=> {
        e.preventDefault()
        handleForm()
      }}>
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-user-o" />
          <input
            type="text"
            name="first"
            id="first"
            placeholder="first name"
            onChange={(e)=> {
                setFname(e.target.value)
            }}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-user-o" />
          <input
            type="text"
            name="last"
            id="last"
            placeholder="last name"
            onChange={(e)=> {
                setLname(e.target.value)
            }}
          />
        </div>
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
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-envelope-o" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e)=> {
                setEmail(e.target.value)
            }}
          />
        </div>
        <div className="text-start ps-3 text-danger">
            <span>{invalidMsg}</span>
        </div>
        <button type="submit" className="btn mt-3">Register</button>
      </form>
    );
  }