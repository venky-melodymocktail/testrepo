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

import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'

const Profile_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1284_3181')
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
                id="t18_1284_3181"
                style={{
                    width: 400,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_598_228"
                    style={{
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

                    <div
                        id="t18_598_231"
                        style={{
                            height: 8,
                            width: 400,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_598_232"
                            style={{
                                height: 30,
                                width: 340,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 30,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_598_233"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_598_234"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Account << Profile'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_598_235"
                        style={{
                            height: 324,
                            width: 400,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_598_236"
                            style={{
                                height: 261,
                                width: 331,
                                borderRadius: 12,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(167,167,167,1)',
                                borderStyle: 'solid',
                            }}
                        >
                            <div
                                id="t18_598_237"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 10,
                                }}
                            >
                                {dl.changes.userDetail.profilePic
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_598_238"
                                        style={{
                                            height: 106.2265625,
                                            width: 106.23046875,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: -15,
                                            borderRadius: '103px',
                                        }}
                                        src={dl.changes.userDetail.profilePic
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/9f4473d5-913c-495f-9fc5-668336854d96.png' !=
                                '' ? (
                                    <div style={{
                                        height: 25,
                                            width: 25,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: -15,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            borderRadius:"50%",
                                            justifyContent:"center",
                                            alignItems:"center",
                                            backgroundColor: 'rgba(186,15,23,1)',
                                    }}>
                                    <img
                                        id="t18_598_239"
                                        style={{
                                            height: 15,
                                            width: 15,
                                            display: 'flex',
                                            borderWidth: 0,
                                            // marginLeft: -15,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var id = '1471:782'
                                            var element =
                                                document.getElementById(id)
                                            if (!element) {
                                                id = 't18_1471_782'
                                            }
                                            document.getElementById(id).click()
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/9f4473d5-913c-495f-9fc5-668336854d96.png'
                                        }
                                    ></img>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <span
                                id="t18_598_240"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                            >
                                {dl.changes.userDetail.profileName}
                            </span>

                            <div
                                id="t18_598_241"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 10,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_598_242"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 4,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a0763d02d9081bde31bf53d9d27988caad28084e.png' !=
                                    '' ? (
                                        <img
                                            id="t18_598_243"
                                            style={{
                                                height: 13,
                                                width: 14,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a0763d02d9081bde31bf53d9d27988caad28084e.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_598_244"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(120,117,117,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {dl.changes.userDetail.phone}
                                    </span>
                                </div>

                                <div
                                    id="t18_598_245"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 4,
                                        marginBottom: 4,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3d7b8fc1757cbfb2863337819b8914e71a25e7ff.png' !=
                                    '' ? (
                                        <img
                                            id="t18_598_246"
                                            style={{
                                                height: 11,
                                                width: 14,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3d7b8fc1757cbfb2863337819b8914e71a25e7ff.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_598_247"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(120,117,117,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {dl.changes.userDetail.email}
                                    </span>
                                </div>

                                <div
                                    id="t18_1471_785"
                                    style={{
                                        height: -10,
                                        width: 264,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        borderWidth: 0,
                                        marginTop: 4,
                                        marginBottom: 0,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <MmFooterXs {...dl.changes.paginationState} />
                </div>
            </div>
        </div>
    )
})
export default Profile_4
