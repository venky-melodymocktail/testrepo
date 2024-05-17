import Blogs_1 from './Blogs_1'
import Blogs_2 from './Blogs_2'
import Blogs_3 from './Blogs_3'
import Blogs_4 from './Blogs_4'
import './Blogs.css'
import { observer } from 'mobx-react'

const Blogs = observer(() => {
    return (
        <>
            <Blogs_1 />
            <Blogs_2 />
            <Blogs_3 />
            <Blogs_4 />
        </>
    )
})

export default Blogs
