import Travelcompanionlisting_1 from './Travelcompanionlisting_1'
import Travelcompanionlisting_2 from './Travelcompanionlisting_2'
import Travelcompanionlisting_3 from './Travelcompanionlisting_3'
import Travelcompanionlisting_4 from './Travelcompanionlisting_4'
import './Travelcompanionlisting.css'
import { observer } from 'mobx-react'

const Travelcompanionlisting = observer(() => {
    return (
        <>
            <Travelcompanionlisting_1 />
            <Travelcompanionlisting_2 />
            <Travelcompanionlisting_3 />
            <Travelcompanionlisting_4 />
        </>
    )
})

export default Travelcompanionlisting
