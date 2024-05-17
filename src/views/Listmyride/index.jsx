import Listmyride_1 from './Listmyride_1'
import Listmyride_2 from './Listmyride_2'
import Listmyride_3 from './Listmyride_3'
import Listmyride_4 from './Listmyride_4'
import './Listmyride.css'
import { observer } from 'mobx-react'

const Listmyride = observer(() => {
    return (
        <>
            <Listmyride_1 />
            <Listmyride_2 />
            <Listmyride_3 />
            <Listmyride_4 />
        </>
    )
})

export default Listmyride
