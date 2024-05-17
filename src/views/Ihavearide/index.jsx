import Ihavearide_1 from './Ihavearide_1'
import Ihavearide_2 from './Ihavearide_2'
import Ihavearide_3 from './Ihavearide_3'
import Ihavearide_4 from './Ihavearide_4'
import './Ihavearide.css'
import { observer } from 'mobx-react'

const Ihavearide = observer(() => {
    return (
        <>
            <Ihavearide_1 />
            <Ihavearide_2 />
            <Ihavearide_3 />
            <Ihavearide_4 />
        </>
    )
})

export default Ihavearide
