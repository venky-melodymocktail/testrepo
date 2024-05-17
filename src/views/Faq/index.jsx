import Faq_1 from './Faq_1'
import Faq_2 from './Faq_2'
import Faq_3 from './Faq_3'
import Faq_4 from './Faq_4'
import './Faq.css'
import { observer } from 'mobx-react'

const Faq = observer(() => {
    return (
        <>
            <Faq_1 />
            <Faq_2 />
            <Faq_3 />
            <Faq_4 />
        </>
    )
})

export default Faq
