import Ihavearoom_1 from './Ihavearoom_1'
import Ihavearoom_2 from './Ihavearoom_2'
import Ihavearoom_3 from './Ihavearoom_3'
import Ihavearoom_4 from './Ihavearoom_4'
import './Ihavearoom.css'
import { observer } from 'mobx-react'

const Ihavearoom = observer(() => {
    return (
        <>
            <Ihavearoom_1 />
            <Ihavearoom_2 />
            <Ihavearoom_3 />
            <Ihavearoom_4 />
        </>
    )
})

export default Ihavearoom
