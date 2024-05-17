import './App.css'
import './hover.css'
import './customCss.css'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation,
    Navigate,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import onLoad from './datalayer/onload'
import { useEffect } from 'react'
import dl from './datalayer/state'
import StripeCheckout from './components/main/StripeCheckout'

import Home from './views/Home'
import Travelsuggestions from './views/Travelsuggestions'
import Blogdetails from './views/Blogdetails'
import Moviesuggestions from './views/Moviesuggestions'
import Moviedetails from './views/Moviedetails'
import Login from './views/Login'
import Signup from './views/Signup'
import Address from './views/Address'
import Blogs from './views/Blogs'
import Visaquestions from './views/Visaquestions'
import Comments from './views/Comments'
import Faq from './views/Faq'
import Visaslotbooking from './views/Visaslotbooking'
import Studyabroad from './views/Studyabroad'
import Studyabroadslotbooking from './views/Studyabroadslotbooking'
import Studyabroadslotpayment from './views/Studyabroadslotpayment'
import Ridesharing from './views/Ridesharing'
import Ihavearide from './views/Ihavearide'
import Wantedride from './views/Wantedride'
import Aboutus from './views/Aboutus'
import Contactus from './views/Contactus'
import Empty from './views/Empty'
import Offeredride from './views/Offeredride'
import Accountblocked from './views/Accountblocked'
import Error from './views/Error'
import Ineedaride from './views/Ineedaride'
import Listmyride from './views/Listmyride'
import Listmyroomform from './views/Listmyroomform'
import Ineedaroomform from './views/Ineedaroomform'
import Listmyhomeform from './views/Listmyhomeform'
import Ineedahomeform from './views/Ineedahomeform'
import Rooms from './views/Rooms'
import Ihavearoom from './views/Ihavearoom'
import Homerentals from './views/Homerentals'
import Ihaveahomerental from './views/Ihaveahomerental'
import Offeredroomdetails from './views/Offeredroomdetails'
import Wantedroomdetails from './views/Wantedroomdetails'
import Offeredhomedetails from './views/Offeredhomedetails'
import Wantedhomedetails from './views/Wantedhomedetails'
import Rentallistings from './views/Rentallistings'
import Ridelistings from './views/Ridelistings'
import Questionlistings from './views/Questionlistings'
import Travelcompanionlisting from './views/Travelcompanionlisting'
import Moviebookmarks from './views/Moviebookmarks'
import Rentalbookmarks from './views/Rentalbookmarks'
import Ridebookmarks from './views/Ridebookmarks'
import Travelcompanionbookmarks from './views/Travelcompanionbookmarks'
import Blogbookmarks from './views/Blogbookmarks'
import Questionbookmarks from './views/Questionbookmarks'
import Profile from './views/Profile'
import Studyabroadbookings from './views/Studyabroadbookings'
import Visabookings from './views/Visabookings'
import Travelcompanion from './views/Travelcompanion'
import Iwanttobetravelcompanion from './views/Iwanttobetravelcompanion'
import Ineedatravelcompanionform from './views/Ineedatravelcompanionform'
import Iwanttobetcform from './views/Iwanttobetcform'
import Wantedtcdetails from './views/Wantedtcdetails'
import Offeredtcdetails from './views/Offeredtcdetails'
import LoadingModal from './modals/LoadingModal'
import LoginLgModal from './modals/LoginLgModal'
import LoginSModal from './modals/LoginSModal'
import ReportacommentLgModal from './modals/ReportacommentLgModal'
import EnterOtpLgModal from './modals/EnterOtpLgModal'
import EnterOtpSModal from './modals/EnterOtpSModal'
import AddressPopupLgModal from './modals/AddressPopupLgModal'
import AddressPopupSModal from './modals/AddressPopupSModal'
import PostYourNeedHomeLgModal from './modals/PostYourNeedHomeLgModal'
import PostYourNeedHomeSModal from './modals/PostYourNeedHomeSModal'
import PostYourNeedRoomLgModal from './modals/PostYourNeedRoomLgModal'
import PostYourNeedRoomSModal from './modals/PostYourNeedRoomSModal'
import ContactAdvertiserLgModal from './modals/ContactAdvertiserLgModal'
import PaymentSelectorModal from './modals/PaymentSelectorModal'
import PromoteLgModal from './modals/PromoteLgModal'
import EditVisaQnaModal from './modals/EditVisaQnaModal'
import FilterModal from './modals/FilterModal'
import PromoteSModal from './modals/PromoteSModal'
import ContactAdvertiserSModal from './modals/ContactAdvertiserSModal'
import NavigationMdModal from './modals/NavigationMdModal'
import NavigationSModal from './modals/NavigationSModal'
import NavigationXsModal from './modals/NavigationXsModal'
import EditVisaQnaSModal from './modals/EditVisaQnaSModal'
import ErrorGenericModal from './modals/ErrorGenericModal'
import ConfirmationGenericModal from './modals/ConfirmationGenericModal'
import ReportacommentSModal from './modals/ReportacommentSModal'
import LimitReachedModal from './modals/LimitReachedModal'
import FilterModalLg from './modals/FilterModalLg'
import LogOutPopupModal from './modals/LogoutPopupModal'
import WebinarPopup from './modals/WebinarPopup'
import { Helmet } from 'react-helmet'

function App() {
    const location = useLocation()

    var navigate = useNavigate()
    useEffect(() => {
        dl.functions.navigate = navigate
        if (!window.toast) {
            window.toast = toast
        }
        onLoad()
    }, [])
    return (
        <>
            <Helmet>
                <meta name="description" content="" />
                <meta
                    name="keywords"
                    content="melodymocktail, mocktail, melody, mocktail, nri"
                />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="Melody Mocktail" />
                <meta property="og:description" content="" />
                <meta
                    property="og:image"
                    content="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png"
                />
                <meta
                    property="og:url"
                    content="https://testing.melodymocktail.com/"
                />
                <meta name="twitter:title" content="Melody Mocktail" />
                <meta name="twitter:description" content="" />
                <meta
                    name="twitter:image"
                    content="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route
                            path="travelsuggestions"
                            element={<Travelsuggestions />}
                        />
                        <Route path="blogdetails" element={<Blogdetails />} />
                        <Route
                            path="moviesuggestions"
                            element={<Moviesuggestions />}
                        />
                        <Route path="moviedetails" element={<Moviedetails />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="address" element={<Address />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route
                            path="visaquestions"
                            element={<Visaquestions />}
                        />
                        <Route path="comments" element={<Comments />} />
                        <Route path="faq" element={<Faq />} />
                        <Route
                            path="visaslotbooking"
                            element={<Visaslotbooking />}
                        />
                        <Route path="studyabroad" element={<Studyabroad />} />
                        <Route
                            path="studyabroadslotbooking"
                            element={<Studyabroadslotbooking />}
                        />
                        <Route
                            path="studyabroadslotpayment"
                            element={<Studyabroadslotpayment />}
                        />
                        <Route path="ridesharing" element={<Ridesharing />} />
                        <Route path="ihavearide" element={<Ihavearide />} />
                        <Route path="wantedride" element={<Wantedride />} />
                        <Route path="aboutus" element={<Aboutus />} />
                        <Route path="contactus" element={<Contactus />} />
                        <Route path="empty" element={<Empty />} />
                        <Route path="offeredride" element={<Offeredride />} />
                        <Route
                            path="accountblocked"
                            element={<Accountblocked />}
                        />
                        <Route path="error" element={<Error />} />
                        <Route path="ineedaride" element={<Ineedaride />} />
                        <Route path="listmyride" element={<Listmyride />} />
                        <Route
                            path="listmyroomform"
                            element={<Listmyroomform />}
                        />
                        <Route
                            path="ineedaroomform"
                            element={<Ineedaroomform />}
                        />
                        <Route
                            path="listmyhomeform"
                            element={<Listmyhomeform />}
                        />
                        <Route
                            path="ineedahomeform"
                            element={<Ineedahomeform />}
                        />
                        <Route path="rooms" element={<Rooms />} />
                        <Route path="ihavearoom" element={<Ihavearoom />} />
                        <Route path="homerentals" element={<Homerentals />} />
                        <Route
                            path="ihaveahomerental"
                            element={<Ihaveahomerental />}
                        />
                        <Route
                            path="offeredroomdetails"
                            element={<Offeredroomdetails />}
                        />
                        <Route
                            path="wantedroomdetails"
                            element={<Wantedroomdetails />}
                        />
                        <Route
                            path="offeredhomedetails"
                            element={<Offeredhomedetails />}
                        />
                        <Route
                            path="wantedhomedetails"
                            element={<Wantedhomedetails />}
                        />
                        <Route
                            path="rentallistings"
                            element={<Rentallistings />}
                        />
                        <Route path="ridelistings" element={<Ridelistings />} />
                        <Route
                            path="questionlistings"
                            element={<Questionlistings />}
                        />
                        <Route
                            path="travelcompanionlisting"
                            element={<Travelcompanionlisting />}
                        />
                        <Route
                            path="moviebookmarks"
                            element={<Moviebookmarks />}
                        />
                        <Route
                            path="rentalbookmarks"
                            element={<Rentalbookmarks />}
                        />
                        <Route
                            path="ridebookmarks"
                            element={<Ridebookmarks />}
                        />
                        <Route
                            path="travelcompanionbookmarks"
                            element={<Travelcompanionbookmarks />}
                        />
                        <Route
                            path="blogbookmarks"
                            element={<Blogbookmarks />}
                        />
                        <Route
                            path="questionbookmarks"
                            element={<Questionbookmarks />}
                        />
                        <Route path="profile" element={<Profile />} />
                        <Route
                            path="studyabroadbookings"
                            element={<Studyabroadbookings />}
                        />
                        <Route path="visabookings" element={<Visabookings />} />
                        <Route
                            path="travelcompanion"
                            element={<Travelcompanion />}
                        />
                        <Route
                            path="iwanttobetravelcompanion"
                            element={<Iwanttobetravelcompanion />}
                        />
                        <Route
                            path="ineedatravelcompanionform"
                            element={<Ineedatravelcompanionform />}
                        />
                        <Route
                            path="iwanttobetcform"
                            element={<Iwanttobetcform />}
                        />
                        <Route
                            path="wantedtcdetails"
                            element={<Wantedtcdetails />}
                        />
                        <Route
                            path="offeredtcdetails"
                            element={<Offeredtcdetails />}
                        />
                        <Route
                            path="/"
                            element={<Navigate to="/home" />}
                        ></Route>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <LoadingModal />
            <LoginLgModal />
            <LoginSModal />
            <ReportacommentLgModal />
            <EnterOtpLgModal />
            <EnterOtpSModal />
            <AddressPopupLgModal />
            <AddressPopupSModal />
            <PostYourNeedHomeLgModal />
            <PostYourNeedHomeSModal />
            <PostYourNeedRoomLgModal />
            <PostYourNeedRoomSModal />
            <ContactAdvertiserLgModal />
            <PaymentSelectorModal />
            <PromoteLgModal />
            <EditVisaQnaModal />
            <FilterModal />
            <PromoteSModal />
            <ContactAdvertiserSModal />
            <NavigationMdModal />
            <NavigationSModal />
            <NavigationXsModal />
            <EditVisaQnaSModal />
            <ErrorGenericModal />
            <ConfirmationGenericModal />
            <ReportacommentSModal />
            <LimitReachedModal />
            <LogOutPopupModal />

            <StripeCheckout />

            {/* <WebinarPopup/> */}

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <FilterModalLg />
        </>
        // comment
    )
}

export default App
