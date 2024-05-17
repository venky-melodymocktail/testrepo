import Offeredtcdetails_1 from './Offeredtcdetails_1'
import Offeredtcdetails_2 from './Offeredtcdetails_2'
import Offeredtcdetails_3 from './Offeredtcdetails_3'
import Offeredtcdetails_4 from './Offeredtcdetails_4'
import './Offeredtcdetails.css'
import { observer } from 'mobx-react'

const Offeredtcdetails = observer(() => {
    return (
        <>
            <Offeredtcdetails_1 />
            <Offeredtcdetails_2 />
            <Offeredtcdetails_3 />
            <Offeredtcdetails_4 />
        </>
    )
})

export default Offeredtcdetails
