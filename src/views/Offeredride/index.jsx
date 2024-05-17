import Offeredride_1 from './Offeredride_1'
import Offeredride_2 from './Offeredride_2'
import Offeredride_3 from './Offeredride_3'
import Offeredride_4 from './Offeredride_4'
import './Offeredride.css'
import { observer } from 'mobx-react'

const Offeredride = observer(() => {
    return (
        <>
            <Offeredride_1 />
            <Offeredride_2 />
            <Offeredride_3 />
            <Offeredride_4 />
        </>
    )
})

export default Offeredride
