import Wantedroomdetails_1 from './Wantedroomdetails_1'
import Wantedroomdetails_2 from './Wantedroomdetails_2'
import Wantedroomdetails_3 from './Wantedroomdetails_3'
import Wantedroomdetails_4 from './Wantedroomdetails_4'
import './Wantedroomdetails.css'
import { observer } from 'mobx-react'

const Wantedroomdetails = observer(() => {
    return (
        <>
            <Wantedroomdetails_1 />
            <Wantedroomdetails_2 />
            <Wantedroomdetails_3 />
            <Wantedroomdetails_4 />
        </>
    )
})

export default Wantedroomdetails
