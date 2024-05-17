import Studyabroad_1 from './Studyabroad_1'
import Studyabroad_2 from './Studyabroad_2'
import Studyabroad_3 from './Studyabroad_3'
import Studyabroad_4 from './Studyabroad_4'
import './Studyabroad.css'
import { observer } from 'mobx-react'

const Studyabroad = observer(() => {
    return (
        <>
            <Studyabroad_1 />
            <Studyabroad_2 />
            <Studyabroad_3 />
            <Studyabroad_4 />
        </>
    )
})

export default Studyabroad
