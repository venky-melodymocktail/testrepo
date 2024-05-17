import Questionbookmarks_1 from './Questionbookmarks_1'
import Questionbookmarks_2 from './Questionbookmarks_2'
import Questionbookmarks_3 from './Questionbookmarks_3'
import Questionbookmarks_4 from './Questionbookmarks_4'
import './Questionbookmarks.css'
import { observer } from 'mobx-react'

const Questionbookmarks = observer(() => {
    return (
        <>
            <Questionbookmarks_1 />
            <Questionbookmarks_2 />
            <Questionbookmarks_3 />
            <Questionbookmarks_4 />
        </>
    )
})

export default Questionbookmarks
