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
import LogoutIcon from '@mui/icons-material/Logout'

const Profile_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1309_1106')
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
                id="t18_1309_1106"
                style={{
                    width: 1440,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_598_128"
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
                    <MmHeader
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
                        }}
                        onSignUp={(val) => {
                            dl.functions.viewsPlugin.showView('signup')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickServices={(val) => {
                            dl.functions.common.goToDivId('4:346')
                        }}
                        onClickBlogs={(val) => {
                            dl.functions.common.goToDivId('4:412')
                        }}
                        onClickAboutUs={(val) => {
                            dl.functions.common.goToDivId('4:481')
                        }}
                        onClickContactUs={(val) => {
                            dl.functions.common.goToDivId('4:481')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_1284_3178"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_598_131"
                            style={{
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_598_132"
                                style={{
                                    height: 753,
                                    width: 358,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                }}
                            >
                                <div
                                    id="t18_598_133"
                                    style={{
                                        height: 111,
                                        width: 258,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 100,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderRightWidth: 1,
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_598_134"
                                        style={{
                                            height: 11,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_598_135"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 17,
                                                fontWeight: 600,
                                                color: 'rgba(88,89,91,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '20.573863983154297px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Account
                                        </span>
                                    </div>

                                    <div
                                        id="t18_598_136"
                                        style={{
                                            height: 20,
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
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_598_137"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {dl.changes.userDetail.name}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_598_138"
                                    style={{
                                        height: 584,
                                        width: 358,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 48,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderRightWidth: 1,
                                        borderStyle: 'solid',
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_598_139"
                                        className={' contact-btn'}
                                        style={{
                                            height: 52,
                                            width: 173,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 29,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/af025091104778487f59418d2b833be290fe5ae0.png' !=
                                        '' ? (
                                            <img
                                                id="t18_598_140"
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/af025091104778487f59418d2b833be290fe5ae0.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_598_141"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                                marginLeft: 5.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Profile
                                        </span>
                                    </div>

                                    <div
                                        id="t18_598_142"
                                        className={' grayshadoweffect-btn'}
                                        style={{
                                            height: 52,
                                            width: 173,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 29,
                                            marginBottom: 29,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.viewsPlugin.showView(
                                                'rentallistings'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3e86f62f4b3c01fe2c67234c0dfe14cded05f0ac.png' !=
                                        '' ? (
                                            <img
                                                id="t18_598_143"
                                                style={{
                                                    height: 17.6015625,
                                                    width: 20.080078125,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 4.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3e86f62f4b3c01fe2c67234c0dfe14cded05f0ac.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_598_144"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                                marginLeft: 4.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            My Listings
                                        </span>
                                    </div>

                                    <div
                                        id="t18_598_145"
                                        className={' grayshadoweffect-btn'}
                                        style={{
                                            height: 52,
                                            width: 173,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 29,
                                            marginBottom: 29,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.viewsPlugin.showView(
                                                'studyabroadbookings'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/920261ee1602e2824bf24d47a1afa346f325ae9a.png' !=
                                        '' ? (
                                            <img
                                                id="t18_598_146"
                                                style={{
                                                    height: 18.921875,
                                                    width: 20.169921875,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 4.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/920261ee1602e2824bf24d47a1afa346f325ae9a.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_598_147"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                                marginLeft: 4.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            My Bookings
                                        </span>
                                    </div>

                                    <div
                                        id="t18_598_148"
                                        className={' grayshadoweffect-btn'}
                                        style={{
                                            height: 52,
                                            width: 173,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 29,
                                            marginBottom: 29,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.viewsPlugin.showView(
                                                'rentalbookmarks'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/97319f975e094821cce4576862473b6ee7a16fca.png' !=
                                        '' ? (
                                            <img
                                                id="t18_598_149"
                                                style={{
                                                    height: 21,
                                                    width: 19,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/97319f975e094821cce4576862473b6ee7a16fca.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_598_150"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                                marginLeft: 5.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Bookmarks
                                        </span>
                                    </div>
                                    <div
                                        className={' grayshadoweffect-btn'}
                                        style={{
                                            height: 52,
                                            width: 173,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 29,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            // dl.functions.viewsPlugin.showView(
                                            //     'rentalbookmarks'
                                            // )
                                            // var currentPath =
                                            //     dl.functions.common.getLastPath()
                                            // dl.functions.onLoadFunctions[
                                            //     currentPath
                                            // ]()
                                            dl.functions.modalsPlugin.openModal(
                                                'logOutPopup'
                                            )

                                            // alert("Logout")
                                        }}
                                    >
                                        <LogoutIcon
                                            style={{
                                                height: 21,
                                                width: 19,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5.5,
                                            }}
                                            color="rgba(0,0,0,1)"
                                        />

                                        <span
                                            id="t18_598_150"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                                marginLeft: 5.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_598_151"
                                style={{
                                    height: 733,
                                    width: 1062,
                                    flexDirection: 'column',
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
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_598_152"
                                    style={{
                                        height: 400,
                                        width: 672,
                                        borderRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        id="t18_1475_3"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
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
                                                id="t18_598_195"
                                                style={{
                                                    height: 184,
                                                    width: 184,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                    borderRadius: '92px',
                                                }}
                                                src={dl.changes.userDetail.profilePic
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_1475_4"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'absolute',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                top: -8.3125,
                                                left: 132,
                                                marginTop: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/9f4473d5-913c-495f-9fc5-668336854d96.png' !=
                                            '' ? (
                                                <div style={{
                                                    height: 41,
                                                        width: 41,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                        alignItems:"center",
                                                        justifyContent:"center",
                                                        backgroundColor: 'rgba(186,15,23,1)',
                                                        borderRadius:"50%"
                                                }}>
                                                <img
                                                    id="t18_598_201"
                                                    style={{
                                                        height: 25,
                                                        width: 25,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        var id = '1471:782'
                                                        var element =
                                                            document.getElementById(
                                                                id
                                                            )
                                                        if (!element) {
                                                            id = 't18_1471_782'
                                                        }
                                                        document
                                                            .getElementById(id)
                                                            .click()
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
                                    </div>

                                    <span
                                        id="t18_598_158"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 28,
                                            fontWeight: 600,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '33.8863639831543px',
                                            textAlign: 'left',
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        {dl.changes.userDetail.profileName}
                                    </span>

                                    <div
                                        id="t18_598_159"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        <div
                                            id="t18_598_160"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a0763d02d9081bde31bf53d9d27988caad28084e.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_598_161"
                                                    style={{
                                                        height: 16,
                                                        width: 16,
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
                                                id="t18_598_162"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(120,117,117,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                    marginLeft: 5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {dl.changes.userDetail.phone}
                                            </span>
                                        </div>

                                        <div
                                            id="t18_598_163"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3d7b8fc1757cbfb2863337819b8914e71a25e7ff.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_598_164"
                                                    style={{
                                                        height: 13,
                                                        width: 16,
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
                                                id="t18_598_165"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(120,117,117,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                    marginLeft: 5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {dl.changes.userDetail.email}
                                            </span>
                                        </div>
                                    </div>

                                    <input
                                        id="t18_1471_782"
                                        style={{
                                            height: -10,
                                            width: 370,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .profileScreenUploadComponent,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.files

                                            const run = async () => {
                                                var image = []
                                                for (
                                                    var i = 0;
                                                    i < val.length;
                                                    i++
                                                ) {
                                                    // var obj = {
                                                    //     file: val[i],
                                                    //     imgUrl: `url(${URL.createObjectURL(val[i])})`
                                                    // }
                                                    var uploadedimage =
                                                        await dl.functions.common.neutrodev.generateAndUpload(
                                                            val[i],
                                                            false,
                                                            'OdocRewT1nf/GhB3RCq1Xg=='
                                                        )
                                                    image.push(uploadedimage)
                                                }
                                                var body = { profilePic: image }
                                                var res =
                                                    await dl.functions.updateProfileImage(
                                                        body
                                                    )
                                                if (res.status == 200) {
                                                    dl.functions.getUserDetail()
                                                }
                                            }

                                            run()
                                        }}
                                        type="file"
                                        multiple
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MmFooter {...dl.changes.iHaveAhomeForm.photos} />
                </div>
            </div>
        </div>
    )
})
export default Profile_1
