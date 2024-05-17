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
import MmFooter from '../../components/MmFooter.jsx'
import MmImageArray from '../../components/MmImageArray.jsx'
import MmArrayComp from '../../components/MmArrayComp.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmPhotoMd from '../../components/MmPhotoMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompSs from '../../components/MmArrayCompSs.jsx'
import MmPhotoXs from '../../components/MmPhotoXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'

const Offeredhomedetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1195_1381')
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
                id="t18_1195_1381"
                style={{
                    width: 1440,
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
                    id="t18_1195_1382"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1195_1383"
                        style={{
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
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />

                        <div
                            id="t18_1195_1386"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1195_1387"
                                style={{
                                    width: 1420,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 88,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 38,
                                }}
                            >
                                <div
                                    id="t18_1195_1388"
                                    style={{
                                        borderRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1195_1389"
                                        style={{
                                            width: 958,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 60,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1604_536"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 4.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1195_1390"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 35,
                                                }}
                                            >
                                                <div
                                                    id="t18_1195_1391"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1195_1392"
                                                        style={{
                                                            width: 728,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1393"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 28,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '33.8863639831543px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .title
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1394"
                                                        style={{
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png' !=
                                                        '' ? (
                                                            <img
                                                                id="t18_1195_1395"
                                                                style={{
                                                                    height: 12.72265625,
                                                                    width: 10.51953125,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 0,
                                                                    marginRight: 3,
                                                                }}
                                                                src={
                                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png'
                                                                }
                                                            ></img>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        <span
                                                            id="t18_1195_1396"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 16,
                                                                fontWeight: 500,
                                                                color: 'rgba(113,113,113,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '19.363636016845703px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 3,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .location
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1604_533"
                                                style={{
                                                    height: 38,
                                                    width: 140,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 35,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1604_534"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 25,
                                                        fontWeight: 700,
                                                        color: 'rgba(28,167,139,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '37.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 2,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .preferredRent
                                                    }
                                                </span>

                                                <span
                                                    id="t18_1604_535"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 18,
                                                        fontWeight: 600,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '27px',
                                                        textAlign: 'left',
                                                        marginLeft: 2,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .priceMode
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1318_185"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 4.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1195_1403"
                                                style={{
                                                    width: 893,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                            >
                                                <div
                                                    id="t18_1195_1404"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1318_177"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 17,
                                                            fontWeight: 400,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '25.5px',
                                                            textAlign: 'left',
                                                            marginLeft: 0,
                                                            marginRight: 2.5,
                                                        }}
                                                    >
                                                        Posted by:
                                                    </span>

                                                    <span
                                                        id="t18_1195_1405"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 17,
                                                            fontWeight: 400,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '25.5px',
                                                            textAlign: 'left',
                                                            marginLeft: 2.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .homeDetails
                                                                .postedBy
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1318_178"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 10,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1318_179"
                                                        style={{
                                                            height: 35,
                                                            width: 35,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 7.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            var currentUrl =
                                                                window.location
                                                                    .href
                                                            dl.functions.common.copyToClipboard(
                                                                currentUrl
                                                            )
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <div
                                                    id="t18_1318_180"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 7.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_181"
                                                            style={{
                                                                height: 35,
                                                                width: 35.197265625,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnFacebook(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_182"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnTwitter(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_183"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnWhatsApp(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_184"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 0,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnLinkedIn(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1409"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .ownerDetails,
                                            paddingLeft: 50,
                                            paddingTop: 15,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderTopWidth: 1,
                                            borderBottomWidth: 0,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1410"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            {/* <div
    id='t18_1195_1411'
    
    

    style={{width:591,flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:9.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1195_1412'
    
    

    

    style={{fontFamily:"Poppins",fontSize:30,fontWeight:400,color:"rgba(186,15,23,1)",letterSpacing:0,lineHeight:"45px",textAlign:"left",}}
                >
                    Owner details
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1195_1413'
    
    

    style={{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:9.5,marginBottom:0,}}
    
    


>

    
    
    <div
    id='t18_1195_1414'
    
    

    style={{height:104,width:261,borderRadius:20,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.age,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:0,marginRight:14.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1195_1415'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginTop:0,}}
                >
                    Age:
                    
                </span>    
    
    
    <span
                   
    id='t18_1318_175'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.Age}
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1195_1416'
    
    

    style={{height:104,width:261,borderRadius:20,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.occupation,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:14.5,marginRight:0,}}
    
    


>

    
    
    <span
                   
    id='t18_1195_1417'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginTop:0,}}
                >
                    Occupation:
                    
                </span>    
    
    
    <span
                   
    id='t18_1318_176'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.occupation}
                    
                </span>    
    
    
</div> 
    
    
    
    
</div>*/}
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1433"
                                        style={{
                                            width: 979,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 40,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1434"
                                            style={{
                                                width: 936,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1435"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Photos
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1354_3"
                                            style={{
                                                width: 960,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderWidth: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <div
                                                id="t18_1320_224"
                                                style={{
                                                    width: 2100,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {dl.changes.homeDetails.images.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmImageArray
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .homeDetails
                                                                            .images}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1320_226"
                                            style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'absolute',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                top: 213.0625,
                                                left: 963.5,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                let id = '1354:3'
                                                if (
                                                    !document.getElementById(id)
                                                ) {
                                                    id = 't18_1354_3'
                                                }
                                                const container =
                                                    document.getElementById(id)
                                                container.scroll({
                                                    left:
                                                        container.scrollLeft +
                                                        378, // Scroll by 100 pixels horizontally
                                                    behavior: 'smooth', // Smooth scrolling behavior
                                                })
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1320_227"
                                                    style={{
                                                        height: 24,
                                                        width: 14,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>

                                        <div
                                            id="t18_1320_228"
                                            style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'absolute',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                top: 213.0625,
                                                left: 56.5,
                                                marginTop: 10,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                let id = '1354:3'
                                                if (
                                                    !document.getElementById(id)
                                                ) {
                                                    id = 't18_1354_3'
                                                }
                                                const container =
                                                    document.getElementById(id)
                                                container.scroll({
                                                    left:
                                                        container.scrollLeft -
                                                        378, // Scroll by 100 pixels horizontally
                                                    behavior: 'smooth', // Smooth scrolling behavior
                                                })
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1320_229"
                                                    style={{
                                                        height: 24,
                                                        width: 14,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1440"
                                        style={{
                                            width: 969,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 50,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderTopWidth: 1,
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1441"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 28.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1195_1442"
                                                style={{
                                                    width: 148,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1195_1443"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 30,
                                                        fontWeight: 400,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '45px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Overview
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1195_1444"
                                                style={{
                                                    width: 910,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1195_1445"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .description
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1195_1446"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 28.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1195_1447"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 19,
                                                }}
                                            >
                                                <div
                                                    id="t18_1195_1448"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1195_1449"
                                                        style={{
                                                            width: 642,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1450"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 28,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '42px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .title
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1451"
                                                        style={{
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1454"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 16,
                                                                fontWeight: 500,
                                                                color: 'rgba(113,113,113,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '19.363636016845703px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 3,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .location
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1195_1458"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 19,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1195_1459"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 16.5,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1195_1460"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1461"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Type:
                                                        </span>

                                                        <span
                                                            id="t18_1195_1462"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .type
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1463"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1464"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available from:
                                                        </span>

                                                        <span
                                                            id="t18_1195_1465"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .availabilityFrom
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1466"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1467"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available to:
                                                        </span>

                                                        <span
                                                            id="t18_1195_1468"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .availabilityTo
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1195_1469"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 16.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1195_1470"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1471"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Lease type:
                                                        </span>

                                                        <span
                                                            id="t18_1195_1472"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .stayLeaseType
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1473"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'none',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1474"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            No. of people:
                                                        </span>

                                                        <span
                                                            id="t18_1195_1475"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .noOfPeople
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1195_1476"
                                                        style={{
                                                            height: 104,
                                                            width: 261,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display:
                                                                dl.changes
                                                                    .homeDetailsVisibleStatus
                                                                    .roomFurnished,
                                                            paddingLeft: 10,
                                                            paddingRight: 10,
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1195_1477"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Room furnishing:
                                                        </span>

                                                        <span
                                                            id="t18_1318_186"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .homeDetails
                                                                    .roomFurnishingRequired
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1478"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .amenities,
                                            paddingLeft: 50,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <span
                                            id="t18_1195_1479"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 30,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '45px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            Amenities
                                        </span>

                                        <div
                                            id="t18_1318_187"
                                            style={{
                                                width: 925,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.needARoomDetails.amenities.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .needARoomDetails
                                                                        .amenities}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1497"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 50,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1498"
                                            style={{
                                                width: 912,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1499"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Utilities
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1318_190"
                                            style={{
                                                width: 925,
                                                flexDirection: 'column',
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.homeDetails.utilities.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .homeDetails
                                                                        .utilities}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1517"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .additionalInfo,
                                            paddingLeft: 50,
                                            paddingTop: 25,
                                            paddingBottom: 25,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1518"
                                            style={{
                                                width: 920,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 9.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1519"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Additional Info
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1195_1520"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 9.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1195_1524"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .homeDetailsVisibleStatus
                                                            .smokingPolicy,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 19.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1195_1525"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Smoking Policy:
                                                </span>

                                                <span
                                                    id="t18_1195_1526"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .smokingPolicy
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1195_1527"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .homeDetailsVisibleStatus
                                                            .petFriendly,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 19.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1195_1528"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Pet friendly:
                                                </span>

                                                <span
                                                    id="t18_1195_1529"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .petFriendly
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1530"
                                        style={{
                                            height: 177,
                                            width: 1018,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 50,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1195_1531"
                                            style={{
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
                                                marginBottom: 9.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1532"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    fontSize: 20,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '23.479999542236328px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Interested in this property?
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1195_1533"
                                            className={' contact-btn'}
                                            style={{
                                                height: 65,
                                                width: 251,
                                                borderRadius: 10,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 9.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                var userToken =
                                                    dl.functions.common.getCookie(
                                                        'userToken'
                                                    )
                                                if (userToken) {
                                                    dl.changes.contactUSForm.serviceType =
                                                        'home'
                                                    dl.changes.contactUSForm.serviceId =
                                                        dl.changes.homeDetails._id
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
                                                    ) {
                                                        dl.changes.contactUSForm.countryCode =
                                                            '+91'
                                                        dl.changes.contactUSForm.phone =
                                                            dl.changes.userDetail.phone.substring(
                                                                3
                                                            )
                                                    } else {
                                                        dl.changes.contactUSForm.countryCode =
                                                            '+1'
                                                        dl.changes.contactUSForm.phone =
                                                            dl.changes.userDetail.phone.substring(
                                                                2
                                                            )
                                                    }
                                                    dl.functions.modalsPlugin.openModal(
                                                        'contactAdvertiserLg'
                                                    )
                                                } else {
                                                    dl.functions.modalsPlugin.openModal(
                                                        'loginLg'
                                                    )
                                                }
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1195_1534"
                                                    style={{
                                                        height: 39.12890625,
                                                        width: 38.8798828125,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 7,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <span
                                                id="t18_1195_1535"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 25,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '30.25568199157715px',
                                                    textAlign: 'left',
                                                    marginLeft: 7,
                                                    marginRight: 0,
                                                }}
                                            >
                                                CONTACT
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <MmFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Offeredhomedetails_1
