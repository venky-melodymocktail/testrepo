import Error_1 from './Error_1'
import Error_2 from './Error_2'
import Error_3 from './Error_3'
import Error_4 from './Error_4'
import './Error.css'
import { observer } from 'mobx-react'

const Error = observer(() => {
    return (
        <>
            <Error_1 />
            <Error_2 />
            <Error_3 />
            <Error_4 />
        </>
    )
})

export default Error
