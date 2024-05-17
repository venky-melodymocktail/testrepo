import Listmyhomeform_1 from './Listmyhomeform_1'
import Listmyhomeform_2 from './Listmyhomeform_2'
import Listmyhomeform_3 from './Listmyhomeform_3'
import Listmyhomeform_4 from './Listmyhomeform_4'
import './Listmyhomeform.css'
import { observer } from 'mobx-react'

const Listmyhomeform = observer(() => {
    return (
        <>
            <Listmyhomeform_1 />
            <Listmyhomeform_2 />
            <Listmyhomeform_3 />
            <Listmyhomeform_4 />
        </>
    )
})

export default Listmyhomeform
