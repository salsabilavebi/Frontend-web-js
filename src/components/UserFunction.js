import axios from 'axios'

export const register = async newUser => {
  const response = await axios
        .post('http://localhost:5000/users/register', {
            name: newUser.name,
        
            email: newUser.email,
            password: newUser.password
        })
    console.log('Registered')
    return response
}

export const login = async user => {
  try {
        const response = await axios
            .post('http://localhost:5000/login', {
                email: user.email,
                password: user.password
            })
        localStorage.setItem('usertoken', response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const submitLogin = async user =>{
    const data ={
        email: user.email,
        password: user.password
    }

    axios.post('http://localhost:5000/login', data )
    .then(result => {

        console.log(result)
    })
}