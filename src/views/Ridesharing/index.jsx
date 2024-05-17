import Ridesharing_1 from './Ridesharing_1'
import Ridesharing_2 from './Ridesharing_2'
import Ridesharing_3 from './Ridesharing_3'
import Ridesharing_4 from './Ridesharing_4'
import './Ridesharing.css'
import { observer } from 'mobx-react'

const Ridesharing = observer(() => {
    return (
        <>
            <Ridesharing_1 />
            <Ridesharing_2 />
            <Ridesharing_3 />
            <Ridesharing_4 />
        </>
    )
})

export default Ridesharing
