import Travelcompanionbookmarks_1 from './Travelcompanionbookmarks_1'
import Travelcompanionbookmarks_2 from './Travelcompanionbookmarks_2'
import Travelcompanionbookmarks_3 from './Travelcompanionbookmarks_3'
import Travelcompanionbookmarks_4 from './Travelcompanionbookmarks_4'
import './Travelcompanionbookmarks.css'
import { observer } from 'mobx-react'

const Travelcompanionbookmarks = observer(() => {
    return (
        <>
            <Travelcompanionbookmarks_1 />
            <Travelcompanionbookmarks_2 />
            <Travelcompanionbookmarks_3 />
            <Travelcompanionbookmarks_4 />
        </>
    )
})

export default Travelcompanionbookmarks
