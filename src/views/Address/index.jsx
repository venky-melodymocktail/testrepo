import Address_1 from './Address_1'
import Address_2 from './Address_2'
import Address_3 from './Address_3'
import Address_4 from './Address_4'
import './Address.css'
import { observer } from 'mobx-react'

const Address = observer(() => {
    return (
        <>
            <Address_1 />
            <Address_2 />
            <Address_3 />
            <Address_4 />
        </>
    )
})

export default Address
