export const OTP = 1234
const users = localStorage.getItem('users')
let usersData = null
if(users !== null && users !== '{}') {
    usersData = JSON.parse(users)   
}

export default usersData;