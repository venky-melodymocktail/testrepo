import Visabookings_1 from './Visabookings_1'
import Visabookings_2 from './Visabookings_2'
import Visabookings_3 from './Visabookings_3'
import Visabookings_4 from './Visabookings_4'
import './Visabookings.css'
import { observer } from 'mobx-react'

const Visabookings = observer(() => {
    return (
        <>
            <Visabookings_1 />
            <Visabookings_2 />
            <Visabookings_3 />
            <Visabookings_4 />
        </>
    )
})

export default Visabookings
