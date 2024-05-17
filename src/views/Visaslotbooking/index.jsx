import Visaslotbooking_1 from './Visaslotbooking_1'
import Visaslotbooking_2 from './Visaslotbooking_2'
import Visaslotbooking_3 from './Visaslotbooking_3'
import Visaslotbooking_4 from './Visaslotbooking_4'
import './Visaslotbooking.css'
import { observer } from 'mobx-react'

const Visaslotbooking = observer(() => {
    return (
        <>
            <Visaslotbooking_1 />
            <Visaslotbooking_2 />
            <Visaslotbooking_3 />
            <Visaslotbooking_4 />
        </>
    )
})

export default Visaslotbooking
