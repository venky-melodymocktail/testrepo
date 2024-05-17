import Moviebookmarks_1 from './Moviebookmarks_1'
import Moviebookmarks_2 from './Moviebookmarks_2'
import Moviebookmarks_3 from './Moviebookmarks_3'
import Moviebookmarks_4 from './Moviebookmarks_4'
import './Moviebookmarks.css'
import { observer } from 'mobx-react'

const Moviebookmarks = observer(() => {
    return (
        <>
            <Moviebookmarks_1 />
            <Moviebookmarks_2 />
            <Moviebookmarks_3 />
            <Moviebookmarks_4 />
        </>
    )
})

export default Moviebookmarks
