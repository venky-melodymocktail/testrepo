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

const Offeredhomedetails_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1294_130')
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
                id="t18_1294_130"
                style={{
                    width: 900,
                    flexDirection: 'row',
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
                    id="t18_1294_131"
                    style={{
                        width: 900,
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
                        id="t18_1294_132"
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
                        <MmHeaderMd
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupLg'
                                )
                            }}
                            onClickMenu={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'navigationMd'
                                )
                            }}
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
                            id="t18_1294_135"
                            style={{
                                flexDirection: 'column',
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
                                id="t18_1294_136"
                                style={{
                                    width: 880,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 40,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 10,
                                }}
                            >
                                <div
                                    id="t18_1294_137"
                                    style={{
                                        width: 842,
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
                                        id="t18_1294_138"
                                        style={{
                                            width: 782,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 60,
                                            paddingTop: 30,
                                            paddingBottom: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1592_315"
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
                                                id="t18_1294_139"
                                                style={{
                                                    width: 584,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 10,
                                                }}
                                            >
                                                <div
                                                    id="t18_1294_140"
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
                                                        id="t18_1294_141"
                                                        style={{
                                                            width: 579,
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
                                                            id="t18_1294_142"
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
                                                        id="t18_1294_143"
                                                        style={{
                                                            minHeight: 19,
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
                                                                id="t18_1294_144"
                                                                style={{
                                                                    height: 12.71875,
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
                                                            id="t18_1294_145"
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
                                                id="t18_1592_312"
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
                                                    marginLeft: 10,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1592_313"
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
                                                    id="t18_1592_314"
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
                                            id="t18_1294_152"
                                            style={{
                                                width: 710,
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
                                                id="t18_1294_153"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 7.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1604_461"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1294_154"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
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
                                                id="t18_1604_511"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1604_512"
                                                        style={{
                                                            height: 35,
                                                            width: 35,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 7.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <div
                                                    id="t18_1604_513"
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
                                                            id="t18_1604_514"
                                                            style={{
                                                                height: 35,
                                                                width: 35.197265625,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 7.5,
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
                                                            id="t18_1604_515"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
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
                                                            id="t18_1604_516"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
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
                                                            id="t18_1604_517"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
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

                                    <div
                                        id="t18_1294_158"
                                        style={{
                                            width: 792,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .ownerDetails,
                                            paddingLeft: 50,
                                            paddingTop: 15,
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
    id='t18_1294_159'
    
    

    style={{flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,}}
    
    


>

    
    
    <div
    id='t18_1294_160'
    
    

    style={{height:35,width:509,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:9.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_161'
    
    

    

    style={{fontFamily:"Poppins",fontSize:30,fontWeight:400,color:"rgba(186,15,23,1)",letterSpacing:0,lineHeight:"45px",textAlign:"left",}}
                >
                    Owner details
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_162'
    
    

    style={{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:9.5,marginBottom:0,}}
    
    


>

    
    
    <div
    id='t18_1294_163'
    
    

    style={{height:90,width:200,borderRadius:12,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.age,position:"relative",overflow:"visible",borderWidth:0,marginLeft:0,marginRight:4.5,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_164'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginTop:0,}}
                >
                    Age:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_165'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.Age}
                    
                </span>    
    
    
</div>
    
    
    
    
    <div
    id='t18_1294_166'
    
    

    style={{height:90,width:200,borderRadius:12,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"column",alignItems:"center",justifyContent:"center",display:dl.changes.homeDetailsVisibleStatus.occupation,position:"relative",overflow:"visible",borderWidth:0,marginLeft:4.5,marginRight:0,}}
    
    


>

    
    
    <span
                   
    id='t18_1294_167'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:400,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginTop:0,}}
                >
                    Occupation:
                    
                </span>    
    
    
    <span
                   
    id='t18_1294_168'
    
    

    

    style={{fontFamily:"Poppins",fontSize:20,fontWeight:600,color:"rgba(0,0,0,1)",letterSpacing:0,lineHeight:"30px",textAlign:"center",marginBottom:0,}}
                >
                    {dl.changes.homeDetails.occupation}
                    
                </span>    
    
    
</div>
    
    
    
    
</div> 
    
    
    
    
</div>*/}
                                    </div>

                                    <div
                                        id="t18_1294_179"
                                        style={{
                                            height: 320,
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 30,
                                            paddingTop: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_180"
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
                                                marginBottom: 10,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_181"
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
                                            id="t18_1592_290"
                                            style={{
                                                height: 200,
                                                width: 804,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1592_291"
                                                style={{
                                                    height: 186,
                                                    width: 1500,
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
                                                                    <MmPhotoMd
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
                                                    id="t18_1592_293"
                                                    style={{
                                                        height: 17,
                                                        width: 17,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'absolute',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        top: 74.1875,
                                                        left: 4,
                                                        marginLeft: 10,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1592_294"
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
                                                    id="t18_1592_295"
                                                    style={{
                                                        height: 17,
                                                        width: 17,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'absolute',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        top: 74.1875,
                                                        left: 743,
                                                        marginLeft: 10,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1592_296"
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
                                        id="t18_1294_186"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 30,
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
                                            id="t18_1294_187"
                                            style={{
                                                width: 775,
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
                                                id="t18_1294_188"
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
                                                    id="t18_1294_189"
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
                                                id="t18_1294_190"
                                                style={{
                                                    width: 775,
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
                                                    id="t18_1294_191"
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
                                            id="t18_1294_192"
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
                                                id="t18_1294_193"
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
                                                    id="t18_1294_194"
                                                    style={{
                                                        width: 468,
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
                                                        id="t18_1294_195"
                                                        style={{
                                                            width: 712,
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
                                                            id="t18_1294_196"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 24,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '36px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            Charming Nice Two
                                                            Room Available for
                                                            Rent
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1294_197"
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
                                                            id="t18_1294_200"
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
                                                id="t18_1294_204"
                                                style={{
                                                    width: 770,
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
                                                    id="t18_1294_205"
                                                    style={{
                                                        width: 770,
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
                                                        id="t18_1294_206"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_207"
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
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Type:
                                                        </span>

                                                        <span
                                                            id="t18_1294_208"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
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
                                                                    .type
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1294_209"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_210"
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
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available from:
                                                        </span>

                                                        <span
                                                            id="t18_1294_211"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
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
                                                                    .availabilityFrom
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1294_212"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_213"
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
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available to:
                                                        </span>

                                                        <span
                                                            id="t18_1294_214"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
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
                                                                    .availabilityTo
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1294_225"
                                                    style={{
                                                        width: 770,
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
                                                        id="t18_1294_226"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_227"
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
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Stay/lease type
                                                        </span>

                                                        <span
                                                            id="t18_1294_228"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
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
                                                                    .stayLeaseType
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1294_229"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1294_230"
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
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Room furnishing:
                                                        </span>

                                                        <span
                                                            id="t18_1294_231"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
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
                                        id="t18_1294_232"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .amenities,
                                            paddingLeft: 30,
                                            paddingTop: 20,
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
                                            id="t18_1294_233"
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
                                            id="t18_1294_234"
                                            style={{
                                                width: 754,
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
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
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
                                        id="t18_1294_241"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 30,
                                            paddingTop: 20,
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
                                            id="t18_1294_242"
                                            style={{
                                                width: 726,
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
                                                id="t18_1294_243"
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
                                            id="t18_1294_244"
                                            style={{
                                                width: 754,
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
                                        id="t18_1294_251"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .homeDetailsVisibleStatus
                                                    .additionalInfo,
                                            paddingLeft: 30,
                                            paddingTop: 26,
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
                                            id="t18_1294_252"
                                            style={{
                                                width: 678,
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
                                                id="t18_1294_253"
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
                                            id="t18_1294_254"
                                            style={{
                                                width: 781,
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
                                                id="t18_1294_258"
                                                style={{
                                                    height: 90,
                                                    width: 200,
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
                                                    id="t18_1294_259"
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
                                                    id="t18_1294_260"
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
                                                id="t18_1294_261"
                                                style={{
                                                    height: 90,
                                                    width: 200,
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
                                                    id="t18_1294_262"
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
                                                    id="t18_1294_263"
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
                                        id="t18_1294_264"
                                        style={{
                                            height: 171,
                                            width: 842,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 40,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_265"
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
                                                id="t18_1294_266"
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
                                            id="t18_1294_267"
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
                                                    id="t18_1294_268"
                                                    style={{
                                                        height: 39.1328125,
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
                                                id="t18_1294_269"
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

                            <MmFooterMd />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Offeredhomedetails_2
