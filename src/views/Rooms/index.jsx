import Rooms_1 from './Rooms_1'
import Rooms_2 from './Rooms_2'
import Rooms_3 from './Rooms_3'
import Rooms_4 from './Rooms_4'
import './Rooms.css'
import { observer } from 'mobx-react'

const Rooms = observer(() => {
    return (
        <>
            <Rooms_1 />
            <Rooms_2 />
            <Rooms_3 />
            <Rooms_4 />
        </>
    )
})

export default Rooms
