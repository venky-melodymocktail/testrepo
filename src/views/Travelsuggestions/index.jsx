import Travelsuggestions_1 from './Travelsuggestions_1'
import Travelsuggestions_2 from './Travelsuggestions_2'
import Travelsuggestions_3 from './Travelsuggestions_3'
import Travelsuggestions_4 from './Travelsuggestions_4'
import './Travelsuggestions.css'
import { observer } from 'mobx-react'

const Travelsuggestions = observer(() => {
    return (
        <>
            <Travelsuggestions_1 />
            <Travelsuggestions_2 />
            <Travelsuggestions_3 />
            <Travelsuggestions_4 />
        </>
    )
})

export default Travelsuggestions
