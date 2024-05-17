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

const Offeredhomedetails_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1294_272')
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
                id="t18_1294_272"
                style={{
                    width: 620,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1294_273"
                    style={{
                        width: 620,
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
                        id="t18_1294_274"
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
                        <MmHeaderS
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
                            }}
                            onClickMenu={(val) => {}}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                dl.functions.viewsPlugin.showView('profile')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />

                        <div
                            id="t18_1294_277"
                            style={{
                                width: 601,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 47,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1294_278"
                                style={{
                                    width: 580,
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
                                    id="t18_1294_279"
                                    style={{
                                        width: 560,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 20,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1294_280"
                                        style={{
                                            width: 546,
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
                                            id="t18_1294_281"
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
                                                id="t18_1294_282"
                                                style={{
                                                    width: 383,
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
                                                    id="t18_1294_283"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
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
                                                id="t18_1294_284"
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
                                                        id="t18_1294_285"
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
                                                    id="t18_1294_286"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
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
                                        id="t18_1592_316"
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
                                            id="t18_1592_317"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 21,
                                                fontWeight: 700,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight: '31.5px',
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
                                            id="t18_1592_318"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'left',
                                                marginLeft: 2,
                                                marginRight: 0,
                                            }}
                                        >
                                            {dl.changes.homeDetails.priceMode}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_293"
                                        style={{
                                            width: 467,
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
                                            id="t18_1294_294"
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
                                                id="t18_1604_462"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '22.5px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                            >
                                                Posted by:
                                            </span>

                                            <span
                                                id="t18_1294_295"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '22.5px',
                                                    textAlign: 'left',
                                                    marginLeft: 5,
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
                                            id="t18_1294_296"
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
                                            <div
                                                id="t18_1604_518"
                                                style={{
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
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1604_519"
                                                        style={{
                                                            height: 35,
                                                            width: 35,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <div
                                                    id="t18_1604_520"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1604_521"
                                                            style={{
                                                                height: 35,
                                                                width: 35.197265625,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 5,
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
                                                            id="t18_1604_522"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 5,
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
                                                            id="t18_1604_523"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 5,
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
                                                            id="t18_1604_524"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 0,
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
                                    id="t18_1294_299"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .ownerDetails,
                                        paddingLeft: 20,
                                        paddingTop: 5,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderTopWidth: 0,
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    {/* <div
    id='t18_1294_300'
    
    

    style={{width:425,flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,}}
    
    


>

    
    
    <div
    id='t18_1294_301'
    
    

    style={{width:425,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:7.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_302'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:400,color:"rgba(186,15,23,1)",letterSpacing:0,lineHeight:"30px",textAlign:"left",}}
                >
                    Owner details
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_303'
    
    

    style={{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:7.5,marginBottom:0,}}
    
    


>

    
    
    <div
    id='t18_1294_304'
    
    

    style={{height:40,width:130,borderRadius:10,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.age,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:0,marginRight:4.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1594_322'
    
    

    

    style={{fontFamily:"Poppins",fontSize:16,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"24px",textAlign:"center",marginTop:0,}}
                >
                    Age:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_305'
    
    

    

    style={{fontFamily:"Poppins",fontSize:16,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"24px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.Age}
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_306'
    
    

    style={{height:60,width:150,borderRadius:10,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.occupation,position:"relative",overflow:"visible",borderWidth:0,marginLeft:4.5,marginRight:0,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_307'
    
    

    

    style={{fontFamily:"Poppins",fontSize:14,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"21px",textAlign:"center",marginTop:0,}}
                >
                    Occupation:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_308'
    
    

    

    style={{fontFamily:"Poppins",fontSize:14,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"21px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.occupation}
                    
                </span>    
    
    
</div>
    
    
    
    
</div> 
    
    
    
    
</div>*/}
                                </div>

                                <div
                                    id="t18_1294_321"
                                    style={{
                                        height: 221,
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 5,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1294_322"
                                        style={{
                                            width: 473,
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
                                            id="t18_1294_323"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '30px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Photos
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1592_297"
                                        style={{
                                            height: 152,
                                            width: 560,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1592_298"
                                            style={{
                                                height: 139,
                                                width: 1400,
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
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
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

                                            <div
                                                id="t18_1592_300"
                                                style={{
                                                    height: 17,
                                                    width: 17,
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
                                                    top: 50.515625,
                                                    left: 0.5,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1592_301"
                                                        style={{
                                                            height: 16,
                                                            width: 9,
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
                                                id="t18_1592_302"
                                                style={{
                                                    height: 17,
                                                    width: 17,
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
                                                    top: 50.515625,
                                                    left: 510.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1592_303"
                                                        style={{
                                                            height: 15.296875,
                                                            width: 9,
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
                                    id="t18_1294_328"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
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
                                        id="t18_1294_329"
                                        style={{
                                            width: 540,
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
                                            id="t18_1294_330"
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
                                                id="t18_1294_331"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 20,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '30px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Overview
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1294_332"
                                            style={{
                                                width: 541,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_333"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
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
                                        id="t18_1294_334"
                                        style={{
                                            width: 538,
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
                                            id="t18_1294_335"
                                            style={{
                                                width: 538,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 19,
                                            }}
                                        >
                                            <div
                                                id="t18_1294_336"
                                                style={{
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
                                                    id="t18_1294_337"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1294_338"
                                                        style={{
                                                            width: 362,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1294_339"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 16,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24px',
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
                                                </div>

                                                <div
                                                    id="t18_1294_340"
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
                                                        id="t18_1294_343"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '16.94318199157715px',
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
                                            id="t18_1294_347"
                                            style={{
                                                width: 538,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 19,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1294_348"
                                                style={{
                                                    width: 538,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 12.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_349"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_350"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Type:
                                                    </span>

                                                    <span
                                                        id="t18_1294_351"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
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
                                                    id="t18_1294_352"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_353"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Available from:
                                                    </span>

                                                    <span
                                                        id="t18_1294_354"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
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
                                                    id="t18_1294_355"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_356"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Available to:
                                                    </span>

                                                    <span
                                                        id="t18_1294_357"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
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
                                                id="t18_1294_368"
                                                style={{
                                                    width: 538,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 12.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_369"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_370"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Stay/lease type:
                                                    </span>

                                                    <span
                                                        id="t18_1294_371"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
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
                                                    id="t18_1294_372"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .homeDetailsVisibleStatus
                                                                .roomFurnished,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_373"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Room furnishing:
                                                    </span>

                                                    <span
                                                        id="t18_1294_374"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
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
                                    id="t18_1294_375"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .amenities,
                                        paddingLeft: 20,
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
                                        id="t18_1294_376"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 20,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '30px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Amenities
                                    </span>

                                    <div
                                        id="t18_1294_377"
                                        style={{
                                            width: 547,
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
                                                            <MmArrayCompSs
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
                                    id="t18_1294_386"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
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
                                        id="t18_1294_387"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 20,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '30px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Utilities
                                    </span>

                                    <div
                                        id="t18_1294_388"
                                        style={{
                                            width: 547,
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
                                                            <MmArrayCompSs
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
                                    id="t18_1294_397"
                                    style={{
                                        height: 150,
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.homeDetailsVisibleStatus
                                                .additionalInfo,
                                        paddingLeft: 20,
                                        paddingTop: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1294_398"
                                        style={{
                                            width: 441,
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
                                            id="t18_1294_399"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '30px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Additional Info
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_400"
                                        style={{
                                            width: 492,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_404"
                                            style={{
                                                height: 60,
                                                width: 150,
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
                                                marginRight: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_405"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                }}
                                            >
                                                Smoking Policy:
                                            </span>

                                            <span
                                                id="t18_1294_406"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
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
                                            id="t18_1294_407"
                                            style={{
                                                height: 60,
                                                width: 150,
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
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_408"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                }}
                                            >
                                                Pet friendly:
                                            </span>

                                            <span
                                                id="t18_1294_409"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
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
                                    id="t18_1294_410"
                                    style={{
                                        height: 132,
                                        width: 580,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1294_411"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
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
                                            id="t18_1294_412"
                                            style={{
                                                fontFamily: 'Raleway',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.784000396728516px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested in this property?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1294_413"
                                        style={{
                                            height: 50,
                                            width: 200,
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
                                                id="t18_1294_414"
                                                style={{
                                                    height: 32,
                                                    width: 34,
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
                                            id="t18_1294_415"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
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

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Offeredhomedetails_3
