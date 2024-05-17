import Rentalbookmarks_1 from './Rentalbookmarks_1'
import Rentalbookmarks_2 from './Rentalbookmarks_2'
import Rentalbookmarks_3 from './Rentalbookmarks_3'
import Rentalbookmarks_4 from './Rentalbookmarks_4'
import './Rentalbookmarks.css'
import { observer } from 'mobx-react'

const Rentalbookmarks = observer(() => {
    return (
        <>
            <Rentalbookmarks_1 />
            <Rentalbookmarks_2 />
            <Rentalbookmarks_3 />
            <Rentalbookmarks_4 />
        </>
    )
})

export default Rentalbookmarks
