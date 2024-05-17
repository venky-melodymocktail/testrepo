import Home_1 from './Home_1'
import Home_2 from './Home_2'
import Home_3 from './Home_3'
import Home_4 from './Home_4'
import './Home.css'
import { observer } from 'mobx-react'

const Home = observer(() => {
    return (
        <>
            <Home_1 />
            <Home_2 />
            <Home_3 />
            <Home_4 />
        </>
    )
})

export default Home
