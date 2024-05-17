import Empty_1 from './Empty_1'
import './Empty.css'
import { observer } from 'mobx-react'

const Empty = observer(() => {
    return (
        <>
            <Empty_1 />
        </>
    )
})

export default Empty
