import Ineedahomeform_1 from './Ineedahomeform_1'
import Ineedahomeform_2 from './Ineedahomeform_2'
import Ineedahomeform_3 from './Ineedahomeform_3'
import Ineedahomeform_4 from './Ineedahomeform_4'
import './Ineedahomeform.css'
import { observer } from 'mobx-react'

const Ineedahomeform = observer(() => {
    return (
        <>
            <Ineedahomeform_1 />
            <Ineedahomeform_2 />
            <Ineedahomeform_3 />
            <Ineedahomeform_4 />
        </>
    )
})

export default Ineedahomeform
