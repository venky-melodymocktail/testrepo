import Homerentals_1 from './Homerentals_1'
import Homerentals_2 from './Homerentals_2'
import Homerentals_3 from './Homerentals_3'
import Homerentals_4 from './Homerentals_4'
import './Homerentals.css'
import { observer } from 'mobx-react'

const Homerentals = observer(() => {
    return (
        <>
            <Homerentals_1 />
            <Homerentals_2 />
            <Homerentals_3 />
            <Homerentals_4 />
        </>
    )
})

export default Homerentals
