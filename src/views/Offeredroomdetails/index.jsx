import Offeredroomdetails_1 from './Offeredroomdetails_1'
import Offeredroomdetails_2 from './Offeredroomdetails_2'
import Offeredroomdetails_3 from './Offeredroomdetails_3'
import Offeredroomdetails_4 from './Offeredroomdetails_4'
import './Offeredroomdetails.css'
import { observer } from 'mobx-react'

const Offeredroomdetails = observer(() => {
    return (
        <>
            <Offeredroomdetails_1 />
            <Offeredroomdetails_2 />
            <Offeredroomdetails_3 />
            <Offeredroomdetails_4 />
        </>
    )
})

export default Offeredroomdetails
