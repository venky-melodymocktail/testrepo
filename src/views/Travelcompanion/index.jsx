import Travelcompanion_1 from './Travelcompanion_1'
import Travelcompanion_2 from './Travelcompanion_2'
import Travelcompanion_3 from './Travelcompanion_3'
import Travelcompanion_4 from './Travelcompanion_4'
import './Travelcompanion.css'
import { observer } from 'mobx-react'

const Travelcompanion = observer(() => {
    return (
        <>
            <Travelcompanion_1 />
            <Travelcompanion_2 />
            <Travelcompanion_3 />
            <Travelcompanion_4 />
        </>
    )
})

export default Travelcompanion
