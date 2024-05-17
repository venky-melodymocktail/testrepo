import Ridebookmarks_1 from './Ridebookmarks_1'
import Ridebookmarks_2 from './Ridebookmarks_2'
import Ridebookmarks_3 from './Ridebookmarks_3'
import Ridebookmarks_4 from './Ridebookmarks_4'
import './Ridebookmarks.css'
import { observer } from 'mobx-react'

const Ridebookmarks = observer(() => {
    return (
        <>
            <Ridebookmarks_1 />
            <Ridebookmarks_2 />
            <Ridebookmarks_3 />
            <Ridebookmarks_4 />
        </>
    )
})

export default Ridebookmarks
