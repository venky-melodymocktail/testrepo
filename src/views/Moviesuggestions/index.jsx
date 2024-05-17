import Moviesuggestions_1 from './Moviesuggestions_1'
import Moviesuggestions_2 from './Moviesuggestions_2'
import Moviesuggestions_3 from './Moviesuggestions_3'
import Moviesuggestions_4 from './Moviesuggestions_4'
import './Moviesuggestions.css'
import { observer } from 'mobx-react'

const Moviesuggestions = observer(() => {
    return (
        <>
            <Moviesuggestions_1 />
            <Moviesuggestions_2 />
            <Moviesuggestions_3 />
            <Moviesuggestions_4 />
        </>
    )
})

export default Moviesuggestions
