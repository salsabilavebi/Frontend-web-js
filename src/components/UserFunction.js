import axios from 'axios'


export const login = async user => {
  try {
        const response = await axios
            .post('users/login', {
                email: user.email,
                password: user.password
            })
       
        return response.data
    } catch (err) {
        console.log(err)
    }
}