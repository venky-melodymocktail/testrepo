import './css/MmHeader.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmHeader = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        buttonsVisible: 'flex',
        profileVisible: 'flex',
        addressVisible: 'flex',
        name: 'Uma Chawla',
        address: 'Levvitown, NY',
        profilePic:
            'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/profile.png)',
        otherServicesVisible: 'flex',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_159_3"
                style={{
                    height: 120,
                    width: 1440,
                    backgroundColor: 'rgba(255,255,255,1.00)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.10000000149011612)',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 5,
                    zIndex: 100,
                }}
            >
                <div
                    id="t18_159_4"
                    style={{
                        height: 81,
                        width: 525,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 64,
                    }}
                >
                    <div
                        id="t18_159_5"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 23,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.viewsPlugin.showView('home')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png' !=
                        '' ? (
                            <img
                                id="t18_159_6"
                                style={{
                                    height: 54,
                                    width: 54,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 4.5,
                                }}
                                src={
                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_159_7"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4.5,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_159_8"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                }}
                            >
                                MELODY
                            </span>

                            <div
                                id="t18_2234_3"
                                style={{
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
                                <span
                                    id="t18_159_9"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2,
                                    }}
                                >
                                    MOCKTAIL
                                </span>

                                <div
                                    id="t18_2234_2"
                                    style={{
                                        height: 20,
                                        width: 50,
                                        borderRadius: 30,
                                        backgroundColor:
                                            'rgba(244,186,84,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_2227_290"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        BETA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_159_10"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: props.addressVisible,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 23,
                            marginRight: 0,
                        }}
                    >
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon1.png' !=
                        '' ? (
                            <img
                                id="t18_159_11"
                                style={{
                                    height: 20,
                                    width: 16,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                                src={
                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon1.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_159_12"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_159_13"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onChangeAddress &&
                                        props.onChangeAddress(e)
                                }}
                            >
                                <span
                                    id="t18_159_14"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    {props.address}
                                </span>

                                <span
                                    id="t18_159_15"
                                    onClick={() => {}}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 2.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    CHANGE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_162_38"
                    style={{
                        width: 689,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 64,
                        marginRight: 0,
                    }}
                >
                    <div
                        id="t18_159_16"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: props.otherServicesVisible,
                            paddingTop: 5,
                            paddingBottom: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 10,
                        }}
                    >
                        <div
                            id="t18_159_17"
                            style={{
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
                                id="t18_159_18"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingRight: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderRightWidth: 1,
                                    borderStyle: 'solid',
                                    marginLeft: 0,
                                    marginRight: 10,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickServices &&
                                        props.onClickServices(e)
                                }}
                            >
                                <span
                                    id="t18_159_19"
                                    className={'hvr-forward'}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Services
                                </span>
                            </div>

                            <div
                                id="t18_159_20"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingRight: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderRightWidth: 1,
                                    borderStyle: 'solid',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickBlogs && props.onClickBlogs(e)
                                }}
                            >
                                <span
                                    id="t18_159_21"
                                    className={'hvr-forward'}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Blogs
                                </span>
                            </div>

                            <div
                                id="t18_159_22"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'none',
                                    paddingRight: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderRightWidth: 1,
                                    borderStyle: 'solid',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickContactUs &&
                                        props.onClickContactUs(e)
                                }}
                            >
                                <span
                                    id="t18_159_23"
                                    className={'hvr-forward'}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    About us
                                </span>
                            </div>

                            <div
                                id="t18_159_24"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderRightWidth: 1,
                                    marginLeft: 10,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.common.goToDivId('4:504')
                                }}
                            >
                                <span
                                    id="t18_159_25"
                                    className={'hvr-forward'}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Contact us
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_162_37"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 10,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_159_26"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: props.buttonsVisible,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            <div
                                id="t18_159_27"
                                className={'mm-service1 hovereffectlogin-btn'}
                                style={{
                                    height: 39.150001525878906,
                                    width: 123,
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 10px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                    marginLeft: 0,
                                    marginRight: 7,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onLogIn && props.onLogIn(e)
                                }}
                            >
                                <span
                                    id="t18_159_28"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                    }}
                                >
                                    LOG IN
                                </span>
                            </div>

                            <div
                                id="t18_159_29"
                                className={'mm-service1 contact-btn'}
                                style={{
                                    height: 39.150001525878906,
                                    width: 123,
                                    borderRadius: 8,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 10px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginLeft: 7,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onSignUp && props.onSignUp(e)
                                }}
                            >
                                <span
                                    id="t18_159_30"
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
                                    SIGN UP
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_162_36"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: props.profileVisible,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickProfile && props.onClickProfile(e)
                            }}
                        >
                            {props.profilePic?.slice(4, -1).trim() != '' ? (
                                <img
                                    id="t18_162_35"
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4.5,
                                        borderRadius: '30px',
                                    }}
                                    src={props.profilePic?.slice(4, -1).trim()}
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_162_31"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 4.5,
                                    marginRight: 0,
                                }}
                            >
                                {props.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmHeader
