import Login_1 from './Login_1'
import Login_2 from './Login_2'
import Login_3 from './Login_3'
import Login_4 from './Login_4'
import './Login.css'
import { observer } from 'mobx-react'

const Login = observer(() => {
    return (
        <>
            <Login_1 />
            <Login_2 />
            <Login_3 />
            <Login_4 />
        </>
    )
})

export default Login
