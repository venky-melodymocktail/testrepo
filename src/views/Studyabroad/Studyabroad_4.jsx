import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state'
import { observer } from 'mobx-react'
import Lottie from 'react-lottie'

import MaterialSwitch from '../../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../../components/main/MaterialSelect.jsx'
import ReactDraft from '../../components/main/ReactDraft.jsx'
import MaterialMenu from '../../components/main/MaterialMenu.jsx'
import MMPagination from '../../components/main/MMPagination.jsx'
import MMFilter from '../../components/main/MMFilter.jsx'
import MaterialDate from '../../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../../components/main/MaterialRating.jsx'

import MmHeader from '../../components/MmHeader.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Studyabroad_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_815_5087')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fff',
            }}
        >
            <div
                id="t18_815_5087"
                style={{
                    width: 400,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 10,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_442_1422"
                    style={{
                        width: 400,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <MmHeaderXs
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal('AddressPopupS')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            // dl.functions.viewsPlugin.showView("profile")
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()
                            // var screens = [
                            //     "rentallistings",
                            //     "ridelistings",
                            //     "travelcompanionlisting",
                            //     "questionlistings",
                            //     "studyabroadbookings",
                            //     "visabookings",
                            //     "rentalbookmarks",
                            //     "ridebookmarks",
                            //     "travelcompanionbookmarks",
                            //     "moviebookmarks",
                            //     "blogbookmarks",
                            //     "questionbookmarks",
                            // ]
                            // var currentPath = dl.functions.common.getLastPath()
                            // for(var i=0; i<screens.length; i++){
                            //     if(screens[i]==currentPath){
                            //     	val.stopPropagation();

                            //     }
                            // }

                            dl.functions.modalsPlugin.openModal('navigationXs')
                        }}
                    />

                    <MmServiceSelectorXs {...dl.changes.serviceSelectorMini} />

                    <div
                        id="t18_2227_286"
                        style={{
                            height: 160,
                            width: 381,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_2227_287"
                            style={{
                                height: 84,
                                width: 372,
                                borderRadius: 10,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingTop: 20,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <span
                                id="t18_2227_288"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'center',
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                Need an expert advice? Book a slot to Secure
                                your spot for personalized guidance –
                                effortlessly book a one-on-one session or a
                                group session with our experts for tailored
                                advice and insights
                            </span>

                            <div
                                id="t18_2246_46"
                                style={{
                                    height: 28,
                                    width: 114,
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(244,186,84,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2246_47"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                    }}
                                >
                                    COMING SOON
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_442_1481"
                        style={{
                            width: 400,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        }}
                    >
                        <div
                            id="t18_815_5082"
                            style={{
                                width: 400,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 20,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }}
                            >
                                {dl.changes.studyAbroadBlogs.map(
                                    (item, index) => {
                                        return (
                                            <div>
                                                <MmBlogCardXs
                                                    {...item}
                                                    {...dl.changes
                                                        .studyAbroadBlogs}
                                                    onCreateBookmark={(val) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'studyAbroadBlogs',
                                                            index,
                                                            'blogs'
                                                        )
                                                    }}
                                                    onRemoveBookmark={(val) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'studyAbroadBlogs',
                                                            index,
                                                            'blogs'
                                                        )
                                                    }}
                                                    onClick={(val) => {
                                                        var blogId =
                                                            dl.changes
                                                                .studyAbroadBlogs[
                                                                index
                                                            ]._id
                                                        dl.functions.common.relativeRedirect(
                                                            `blogdetails?blogId=${blogId}`,
                                                            true
                                                        )
                                                    }}
                                                />
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_442_1686"
                            style={{
                                height: 9,
                                width: 75,
                                borderRadius: 5,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.viewsPlugin.showView('blogs')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                dl.changes.blogsFilter[0].options[1].selected = true
                                dl.functions.applyBlogFilter()
                            }}
                        >
                            <span
                                id="t18_442_1687"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                }}
                            >
                                View All
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1027_629"
                        style={{
                            height: 259,
                            width: 400,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: dl.changes.studyAbroadNoDataVisible,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1027_630"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png' !=
                            '' ? (
                                <img
                                    id="t18_1027_631"
                                    style={{
                                        height: 145,
                                        width: 223,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_1027_632"
                                style={{
                                    height: 52,
                                    width: 181,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1027_633"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    No records found
                                </span>

                                <div
                                    id="t18_1027_634"
                                    style={{
                                        height: 30,
                                        width: 181,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 2.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1027_635"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: 'rgba(167,167,167,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        We can’t find any item matching your
                                        search
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MmFooterXs />
                </div>
            </div>
        </div>
    )
})
export default Studyabroad_4
