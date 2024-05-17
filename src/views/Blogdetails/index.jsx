import Blogdetails_1 from './Blogdetails_1'
import Blogdetails_2 from './Blogdetails_2'
import Blogdetails_3 from './Blogdetails_3'
import Blogdetails_4 from './Blogdetails_4'
import './Blogdetails.css'
import { observer } from 'mobx-react'
import NewBlogdetails_1 from './NewBlogdetails_1'
import NewBlogdetails_4 from './NewBlogdetails_4'
import NewBlogdetails_2 from './NewBlogdetails_2'

const Blogdetails = observer(() => {
    return (
        <>
            {/* <Blogdetails_1 />
             */}
            <NewBlogdetails_1 />
            {/* <Blogdetails_2 /> */}
            <NewBlogdetails_2 />
            <Blogdetails_3 />
            {/* <Blogdetails_4 /> */}
            <NewBlogdetails_4 />
        </>
    )
})

export default Blogdetails
