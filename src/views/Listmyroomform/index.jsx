import Listmyroomform_1 from './Listmyroomform_1'
import Listmyroomform_2 from './Listmyroomform_2'
import Listmyroomform_3 from './Listmyroomform_3'
import Listmyroomform_4 from './Listmyroomform_4'
import './Listmyroomform.css'
import { observer } from 'mobx-react'

const Listmyroomform = observer(() => {
    return (
        <>
            <Listmyroomform_1 />
            <Listmyroomform_2 />
            <Listmyroomform_3 />
            <Listmyroomform_4 />
        </>
    )
})

export default Listmyroomform
