import Signup_1 from './Signup_1'
import Signup_2 from './Signup_2'
import Signup_3 from './Signup_3'
import Signup_4 from './Signup_4'
import './Signup.css'
import { observer } from 'mobx-react'

const Signup = observer(() => {
    return (
        <>
            <Signup_1 />
            <Signup_2 />
            <Signup_3 />
            <Signup_4 />
        </>
    )
})

export default Signup
