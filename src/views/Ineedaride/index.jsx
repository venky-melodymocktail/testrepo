import Ineedaride_1 from './Ineedaride_1'
import Ineedaride_2 from './Ineedaride_2'
import Ineedaride_3 from './Ineedaride_3'
import Ineedaride_4 from './Ineedaride_4'
import './Ineedaride.css'
import { observer } from 'mobx-react'

const Ineedaride = observer(() => {
    return (
        <>
            <Ineedaride_1 />
            <Ineedaride_2 />
            <Ineedaride_3 />
            <Ineedaride_4 />
        </>
    )
})

export default Ineedaride
