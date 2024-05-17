import Offeredhomedetails_1 from './Offeredhomedetails_1'
import Offeredhomedetails_2 from './Offeredhomedetails_2'
import Offeredhomedetails_3 from './Offeredhomedetails_3'
import Offeredhomedetails_4 from './Offeredhomedetails_4'
import './Offeredhomedetails.css'
import { observer } from 'mobx-react'

const Offeredhomedetails = observer(() => {
    return (
        <>
            <Offeredhomedetails_1 />
            <Offeredhomedetails_2 />
            <Offeredhomedetails_3 />
            <Offeredhomedetails_4 />
        </>
    )
})

export default Offeredhomedetails
