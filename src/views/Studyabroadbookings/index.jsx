import Studyabroadbookings_1 from './Studyabroadbookings_1'
import Studyabroadbookings_2 from './Studyabroadbookings_2'
import Studyabroadbookings_3 from './Studyabroadbookings_3'
import Studyabroadbookings_4 from './Studyabroadbookings_4'
import './Studyabroadbookings.css'
import { observer } from 'mobx-react'

const Studyabroadbookings = observer(() => {
    return (
        <>
            <Studyabroadbookings_1 />
            <Studyabroadbookings_2 />
            <Studyabroadbookings_3 />
            <Studyabroadbookings_4 />
        </>
    )
})

export default Studyabroadbookings
