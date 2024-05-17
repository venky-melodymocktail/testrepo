import Comments_1 from './Comments_1'
import Comments_2 from './Comments_2'
import Comments_3 from './Comments_3'
import Comments_4 from './Comments_4'
import './Comments.css'
import { observer } from 'mobx-react'

const Comments = observer(() => {
    return (
        <>
            <Comments_1 />
            <Comments_2 />
            <Comments_3 />
            <Comments_4 />
        </>
    )
})

export default Comments
