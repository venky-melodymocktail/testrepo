import Ihaveahomerental_1 from './Ihaveahomerental_1'
import Ihaveahomerental_2 from './Ihaveahomerental_2'
import Ihaveahomerental_3 from './Ihaveahomerental_3'
import Ihaveahomerental_4 from './Ihaveahomerental_4'
import './Ihaveahomerental.css'
import { observer } from 'mobx-react'

const Ihaveahomerental = observer(() => {
    return (
        <>
            <Ihaveahomerental_1 />
            <Ihaveahomerental_2 />
            <Ihaveahomerental_3 />
            <Ihaveahomerental_4 />
        </>
    )
})

export default Ihaveahomerental
