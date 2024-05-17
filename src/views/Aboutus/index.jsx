import Aboutus_1 from './Aboutus_1'
import Aboutus_2 from './Aboutus_2'
import Aboutus_3 from './Aboutus_3'
import Aboutus_4 from './Aboutus_4'
import './Aboutus.css'
import { observer } from 'mobx-react'

const Aboutus = observer(() => {
    return (
        <>
            <Aboutus_1 />
            <Aboutus_2 />
            <Aboutus_3 />
            <Aboutus_4 />
        </>
    )
})

export default Aboutus
