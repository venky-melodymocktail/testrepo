import Contactus_1 from './Contactus_1'
import Contactus_2 from './Contactus_2'
import Contactus_3 from './Contactus_3'
import Contactus_4 from './Contactus_4'
import './Contactus.css'
import { observer } from 'mobx-react'

const Contactus = observer(() => {
    return (
        <>
            <Contactus_1 />
            <Contactus_2 />
            <Contactus_3 />
            <Contactus_4 />
        </>
    )
})

export default Contactus
