import Questionlistings_1 from './Questionlistings_1'
import Questionlistings_2 from './Questionlistings_2'
import Questionlistings_3 from './Questionlistings_3'
import Questionlistings_4 from './Questionlistings_4'
import './Questionlistings.css'
import { observer } from 'mobx-react'

const Questionlistings = observer(() => {
    return (
        <>
            <Questionlistings_1 />
            <Questionlistings_2 />
            <Questionlistings_3 />
            <Questionlistings_4 />
        </>
    )
})

export default Questionlistings
