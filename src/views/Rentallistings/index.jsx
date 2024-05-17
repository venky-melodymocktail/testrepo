import Rentallistings_1 from './Rentallistings_1'
import Rentallistings_2 from './Rentallistings_2'
import Rentallistings_3 from './Rentallistings_3'
import Rentallistings_4 from './Rentallistings_4'
import './Rentallistings.css'
import { observer } from 'mobx-react'

const Rentallistings = observer(() => {
    return (
        <>
            <Rentallistings_1 />
            <Rentallistings_2 />
            <Rentallistings_3 />
            <Rentallistings_4 />
        </>
    )
})

export default Rentallistings
