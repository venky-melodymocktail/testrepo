import Wantedhomedetails_1 from './Wantedhomedetails_1'
import Wantedhomedetails_2 from './Wantedhomedetails_2'
import Wantedhomedetails_3 from './Wantedhomedetails_3'
import Wantedhomedetails_4 from './Wantedhomedetails_4'
import './Wantedhomedetails.css'
import { observer } from 'mobx-react'

const Wantedhomedetails = observer(() => {
    return (
        <>
            <Wantedhomedetails_1 />
            <Wantedhomedetails_2 />
            <Wantedhomedetails_3 />
            <Wantedhomedetails_4 />
        </>
    )
})

export default Wantedhomedetails
