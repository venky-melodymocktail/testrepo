import Wantedride_1 from './Wantedride_1'
import Wantedride_2 from './Wantedride_2'
import Wantedride_3 from './Wantedride_3'
import Wantedride_4 from './Wantedride_4'
import './Wantedride.css'
import { observer } from 'mobx-react'

const Wantedride = observer(() => {
    return (
        <>
            <Wantedride_1 />
            <Wantedride_2 />
            <Wantedride_3 />
            <Wantedride_4 />
        </>
    )
})

export default Wantedride
