import Studyabroadslotbooking_1 from './Studyabroadslotbooking_1'
import Studyabroadslotbooking_2 from './Studyabroadslotbooking_2'
import Studyabroadslotbooking_3 from './Studyabroadslotbooking_3'
import Studyabroadslotbooking_4 from './Studyabroadslotbooking_4'
import './Studyabroadslotbooking.css'
import { observer } from 'mobx-react'

const Studyabroadslotbooking = observer(() => {
    return (
        <>
            <Studyabroadslotbooking_1 />
            <Studyabroadslotbooking_2 />
            <Studyabroadslotbooking_3 />
            <Studyabroadslotbooking_4 />
        </>
    )
})

export default Studyabroadslotbooking
