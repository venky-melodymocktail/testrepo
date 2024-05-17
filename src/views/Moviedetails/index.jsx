import Moviedetails_1 from './Moviedetails_1'
import Moviedetails_2 from './Moviedetails_2'
import Moviedetails_3 from './Moviedetails_3'
import Moviedetails_4 from './Moviedetails_4'
import './Moviedetails.css'
import { observer } from 'mobx-react'

const Moviedetails = observer(() => {
    return (
        <>
            <Moviedetails_1 />
            <Moviedetails_2 />
            <Moviedetails_3 />
            <Moviedetails_4 />
        </>
    )
})

export default Moviedetails
