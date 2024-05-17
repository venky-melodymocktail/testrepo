import Blogbookmarks_1 from './Blogbookmarks_1'
import Blogbookmarks_2 from './Blogbookmarks_2'
import Blogbookmarks_3 from './Blogbookmarks_3'
import Blogbookmarks_4 from './Blogbookmarks_4'
import './Blogbookmarks.css'
import { observer } from 'mobx-react'

const Blogbookmarks = observer(() => {
    return (
        <>
            <Blogbookmarks_1 />
            <Blogbookmarks_2 />
            <Blogbookmarks_3 />
            <Blogbookmarks_4 />
        </>
    )
})

export default Blogbookmarks
