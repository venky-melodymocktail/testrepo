import Visaquestions_1 from './Visaquestions_1'
import Visaquestions_2 from './Visaquestions_2'
import Visaquestions_3 from './Visaquestions_3'
import Visaquestions_4 from './Visaquestions_4'
import './Visaquestions.css'
import { observer } from 'mobx-react'

const Visaquestions = observer(() => {
    return (
        <>
            <Visaquestions_1 />
            <Visaquestions_2 />
            <Visaquestions_3 />
            <Visaquestions_4 />
        </>
    )
})

export default Visaquestions
