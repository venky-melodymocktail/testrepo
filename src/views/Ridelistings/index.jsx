import Ridelistings_1 from './Ridelistings_1'
import Ridelistings_2 from './Ridelistings_2'
import Ridelistings_3 from './Ridelistings_3'
import Ridelistings_4 from './Ridelistings_4'
import './Ridelistings.css'
import { observer } from 'mobx-react'

const Ridelistings = observer(() => {
    return (
        <>
            <Ridelistings_1 />
            <Ridelistings_2 />
            <Ridelistings_3 />
            <Ridelistings_4 />
        </>
    )
})

export default Ridelistings
