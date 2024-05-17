import Profile_1 from './Profile_1'
import Profile_2 from './Profile_2'
import Profile_3 from './Profile_3'
import Profile_4 from './Profile_4'
import './Profile.css'
import { observer } from 'mobx-react'

const Profile = observer(() => {
    return (
        <>
            <Profile_1 />
            <Profile_2 />
            <Profile_3 />
            <Profile_4 />
        </>
    )
})

export default Profile
