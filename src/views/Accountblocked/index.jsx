import Accountblocked_1 from './Accountblocked_1'
import Accountblocked_2 from './Accountblocked_2'
import Accountblocked_3 from './Accountblocked_3'
import Accountblocked_4 from './Accountblocked_4'
import './Accountblocked.css'
import { observer } from 'mobx-react'

const Accountblocked = observer(() => {
    return (
        <>
            <Accountblocked_1 />
            <Accountblocked_2 />
            <Accountblocked_3 />
            <Accountblocked_4 />
        </>
    )
})

export default Accountblocked
