import Ineedaroomform_1 from './Ineedaroomform_1'
import Ineedaroomform_2 from './Ineedaroomform_2'
import Ineedaroomform_3 from './Ineedaroomform_3'
import Ineedaroomform_4 from './Ineedaroomform_4'
import './Ineedaroomform.css'
import { observer } from 'mobx-react'

const Ineedaroomform = observer(() => {
    return (
        <>
            <Ineedaroomform_1 />
            <Ineedaroomform_2 />
            <Ineedaroomform_3 />
            <Ineedaroomform_4 />
        </>
    )
})

export default Ineedaroomform
