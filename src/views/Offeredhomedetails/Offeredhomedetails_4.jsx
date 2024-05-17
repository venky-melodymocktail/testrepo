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

const Offeredhomedetails_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1294_418')
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
                id="t18_1294_418"
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
                    id="t18_1294_419"
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
                    <div
                        id="t18_1294_420"
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
                        <MmHeaderXs
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
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

                                dl.functions.modalsPlugin.openModal(
                                    'navigationXs'
                                )
                            }}
                        />

                        <div
                            id="t18_1294_423"
                            style={{
                                width: 380,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 30,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1294_424"
                                style={{
                                    width: 361,
                                    borderRadius: 20,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1294_425"
                                    style={{
                                        width: 351,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
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
                                    }}
                                >
                                    <div
                                        id="t18_1294_426"
                                        style={{
                                            width: 331,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 4.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_427"
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
                                            <div
                                                id="t18_1294_428"
                                                style={{
                                                    width: 332,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1294_429"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1294_430"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1294_431"
                                                        style={{
                                                            height: 12.71875,
                                                            width: 10.51953125,
                                                            display: 'flex',
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
                                                    id="t18_1294_432"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '14.522727012634277px',
                                                        textAlign: 'left',
                                                        marginLeft: 3,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1592_319"
                                        style={{
                                            height: 38,
                                            width: 140,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 4.5,
                                            marginBottom: 4.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1592_320"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight: '27px',
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
                                            id="t18_1592_321"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '21px',
                                                textAlign: 'left',
                                                marginLeft: 2,
                                                marginRight: 0,
                                            }}
                                        >
                                            {dl.changes.homeDetails.priceMode}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_439"
                                        style={{
                                            width: 302,
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
                                            id="t18_1294_440"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1604_463"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '18px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                Posted by:
                                            </span>

                                            <span
                                                id="t18_1294_441"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '18px',
                                                    textAlign: 'left',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.homeDetails
                                                        .postedBy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1604_525"
                                            style={{
                                                height: 15,
                                                width: 103.0849609375,
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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1604_526"
                                                    style={{
                                                        height: 15,
                                                        width: 15,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 3.5,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        var currentUrl =
                                                            window.location.href
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
                                                id="t18_1604_527"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 3.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1604_528"
                                                        style={{
                                                            height: 15,
                                                            width: 15.0849609375,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 3.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            var currentUrl =
                                                                window.location
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
                                                        id="t18_1604_529"
                                                        style={{
                                                            height: 15,
                                                            width: 15,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 3.5,
                                                            marginRight: 3.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            var currentUrl =
                                                                window.location
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
                                                        id="t18_1604_530"
                                                        style={{
                                                            height: 15,
                                                            width: 15,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 3.5,
                                                            marginRight: 3.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            var currentUrl =
                                                                window.location
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

                                                <div
                                                    id="t18_1604_531"
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
                                                        marginLeft: 3.5,
                                                        marginRight: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        var currentUrl =
                                                            window.location.href
                                                        dl.functions.common.socialShare.shareOnLinkedIn(
                                                            currentUrl
                                                        )
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1604_532"
                                                            style={{
                                                                height: 15,
                                                                width: 15,
                                                                display: 'flex',
                                                                borderWidth: 0,
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
                                </div>

                                <div
                                    id="t18_1294_445"
                                    style={{
                                        width: 351,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .ownerDetails,
                                        paddingLeft: 10,
                                        paddingTop: 15,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderTopWidth: 1,
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    {/* <div
    id='t18_1294_446'
    
    

    style={{width:269,flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,}}
    
    


>

    
    
    <div
    id='t18_1294_447'
    
    

    style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:4.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_448'
    
    

    

    style={{fontFamily:"Poppins",fontSize:16,fontWeight:400,color:"rgba(186,15,23,1)",letterSpacing:0,lineHeight:"24px",textAlign:"left",}}
                >
                    Owner details
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_449'
    
    

    style={{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:4.5,marginBottom:0,}}
    
    


>

    
    
    <div
    id='t18_1294_450'
    
    

    style={{height:37,width:84,borderRadius:5,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.age,paddingLeft:10,paddingRight:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:0,marginRight:4.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_451'
    
    

    

    style={{fontFamily:"Poppins",fontSize:12,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"18px",textAlign:"center",marginLeft:0,marginRight:2.5,}}
                >
                    Age:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_452'
    
    

    

    style={{fontFamily:"Poppins",fontSize:12,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"18px",textAlign:"center",marginLeft:2.5,marginRight:0,}}
                >
                    {dl.changes.homeDetails.Age}
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_453'
    
    

    style={{height:37,width:128,borderRadius:5,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.occupation,paddingLeft:10,paddingRight:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:4.5,marginRight:0,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_454'
    
    

    

    style={{fontFamily:"Poppins",fontSize:12,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"18px",textAlign:"center",marginLeft:0,marginRight:2.5,}}
                >
                    Occupation:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_455'
    
    

    

    style={{fontFamily:"Poppins",fontSize:12,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"18px",textAlign:"center",marginLeft:2.5,marginRight:0,}}
                >
                    {dl.changes.homeDetails.occupation}
                    
                </span>    
    
    
</div>
    
    
    
    
</div>
    
    
    
    
</div> */}
                                </div>

                                <div
                                    id="t18_1294_466"
                                    style={{
                                        height: 207,
                                        width: 361,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1294_467"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 7,
                                        }}
                                    >
                                        <span
                                            id="t18_1294_468"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Photos
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1592_304"
                                        style={{
                                            width: 357,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1592_305"
                                            style={{
                                                height: 112,
                                                width: 1000,
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
                                                id="t18_1592_306"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingRight: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
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
                                                                    <MmPhotoXs
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

                                            <div
                                                id="t18_1592_308"
                                                style={{
                                                    height: 0,
                                                    width: 0,
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
                                                    top: 46.1875,
                                                    left: 2.5,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1592_309"
                                                        style={{
                                                            height: 11,
                                                            width: 6,
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

                                            <div
                                                id="t18_1592_310"
                                                style={{
                                                    height: 0,
                                                    width: 0,
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
                                                    top: 46.1875,
                                                    left: 337.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1592_311"
                                                        style={{
                                                            height: 10.203125,
                                                            width: 6,
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
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1294_472"
                                    style={{
                                        width: 351,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingTop: 10,
                                        paddingBottom: 20,
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
                                        id="t18_1294_473"
                                        style={{
                                            width: 334,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_474"
                                            style={{
                                                width: 148,
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
                                            }}
                                        >
                                            <span
                                                id="t18_1294_475"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Overview
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1294_476"
                                            style={{
                                                width: 335,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_477"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '18px',
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
                                        id="t18_1294_478"
                                        style={{
                                            width: 340,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_479"
                                            style={{
                                                width: 338,
                                                flexDirection: 'column',
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
                                            <div
                                                id="t18_1294_480"
                                                style={{
                                                    width: 338,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_481"
                                                    style={{
                                                        width: 339,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_482"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'left',
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
                                                    id="t18_1294_483"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_486"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 12,
                                                            fontWeight: 500,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '14.522727012634277px',
                                                            textAlign: 'left',
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
                                            id="t18_1294_490"
                                            style={{
                                                width: 338,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
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
                                                id="t18_1294_491"
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
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_492"
                                                    style={{
                                                        height: 37,
                                                        width: 122,
                                                        borderRadius: 5,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_493"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginLeft: 0,
                                                            marginRight: 1,
                                                        }}
                                                    >
                                                        Type:
                                                    </span>

                                                    <span
                                                        id="t18_1294_494"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginLeft: 1,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .homeDetails
                                                                .type
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1294_495"
                                                style={{
                                                    height: 42,
                                                    width: 173,
                                                    borderRadius: 5,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1294_496"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '18px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1,
                                                    }}
                                                >
                                                    Available from:
                                                </span>

                                                <span
                                                    id="t18_1294_497"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '18px',
                                                        textAlign: 'center',
                                                        marginLeft: 1,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .availabilityFrom
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1294_498"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_499"
                                                    style={{
                                                        height: 37,
                                                        width: 174,
                                                        borderRadius: 5,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_500"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        Available to:
                                                    </span>

                                                    <span
                                                        id="t18_1294_501"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginRight: 0,
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
                                                id="t18_1294_502"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_503"
                                                    style={{
                                                        height: 37,
                                                        width: 174,
                                                        borderRadius: 5,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_504"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        Stay/lease type :
                                                    </span>

                                                    <span
                                                        id="t18_1294_505"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '18px',
                                                            textAlign: 'center',
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .homeDetails
                                                                .stayLeaseType
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1294_506"
                                                style={{
                                                    height: 37,
                                                    width: 178,
                                                    borderRadius: 5,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .homeDetailsVisibleStatus
                                                            .roomFurnished,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1294_507"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '18px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1,
                                                    }}
                                                >
                                                    Room furnishing:
                                                </span>

                                                <span
                                                    id="t18_1294_508"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '18px',
                                                        textAlign: 'center',
                                                        marginLeft: 1,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.homeDetails
                                                            .roomFurnishingRequired
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1294_513"
                                    style={{
                                        width: 351,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .amenities,
                                        paddingLeft: 10,
                                        paddingTop: 10,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <span
                                        id="t18_1294_514"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Amenities
                                    </span>

                                    <div
                                        id="t18_1294_515"
                                        style={{
                                            width: 335,
                                            flexDirection: 'row',
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
                                            {dl.changes.homeDetails.amenities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayCompS
                                                                {...item}
                                                                {...dl.changes
                                                                    .homeDetails
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
                                    id="t18_1294_522"
                                    style={{
                                        width: 351,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingTop: 10,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <span
                                        id="t18_1294_523"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Utilities
                                    </span>

                                    <div
                                        id="t18_1294_524"
                                        style={{
                                            width: 335,
                                            flexDirection: 'row',
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
                                            {dl.changes.homeDetails.utilities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayCompS
                                                                {...item}
                                                                {...dl.changes
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
                                    id="t18_1294_531"
                                    style={{
                                        width: 351,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .additionalInfo,
                                        paddingLeft: 10,
                                        paddingTop: 15,
                                        paddingBottom: 15,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1294_532"
                                        style={{
                                            width: 336,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        <span
                                            id="t18_1294_533"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Additional Info
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_534"
                                        style={{
                                            flexDirection: 'column',
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
                                        <div
                                            id="t18_1294_538"
                                            style={{
                                                height: 30,
                                                width: 260,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes
                                                        .homeDetailsVisibleStatus
                                                        .smokingPolicy,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_539"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '15px',
                                                    textAlign: 'center',
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                Smoking Policy:
                                            </span>

                                            <span
                                                id="t18_1294_540"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '18px',
                                                    textAlign: 'center',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.homeDetails
                                                        .smokingPolicy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1294_541"
                                            style={{
                                                height: 30,
                                                width: 255,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes
                                                        .homeDetailsVisibleStatus
                                                        .petFriendly,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_542"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '15px',
                                                    textAlign: 'center',
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                Pet friendly:
                                            </span>

                                            <span
                                                id="t18_1294_543"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '18px',
                                                    textAlign: 'center',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
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
                                    id="t18_1294_544"
                                    style={{
                                        height: 105,
                                        width: 361,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1294_545"
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
                                            marginBottom: 5,
                                        }}
                                    >
                                        <span
                                            id="t18_1294_546"
                                            style={{
                                                fontFamily: 'Raleway',
                                                fontSize: 12,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.088000297546387px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested in this property?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_547"
                                        style={{
                                            height: 30,
                                            width: 106,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 5,
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
                                                    dl.changes.userDetail.phone
                                                        .length > 12
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
                                                    'contactAdvertiserS'
                                                )
                                            } else {
                                                dl.functions.modalsPlugin.openModal(
                                                    'loginS'
                                                )
                                            }
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1294_548"
                                                style={{
                                                    height: 14.546875,
                                                    width: 16,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_1294_549"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 2.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            CONTACT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Offeredhomedetails_4
