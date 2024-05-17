import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmHeaderS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        buttonsVisible: 'flex',
        profileVisible: 'flex',
        addressVisible: 'flex',
        name: 'Uma Chawla',
        address: 'Levvitown, NY',
        profilePic:
            'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/profile.png)',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_480_26"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_336_111"
                    style={{
                        height: 80,
                        width: 560,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        paddingLeft: 30,
                        paddingRight: 30,
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow:
                            '0px 4px 20px rgba(0,0,0,0.10000000149011612)',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    <div
                        id="t18_336_112"
                        style={{
                            height: 52,
                            width: 164,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 50,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.viewsPlugin.showView('home')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <div
                            id="t18_336_113"
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
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png' !=
                            '' ? (
                                <img
                                    id="t18_336_114"
                                    style={{
                                        height: 33,
                                        width: 32,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_336_115"
                                style={{
                                    width: 127,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 2.5,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_336_116"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                    }}
                                >
                                    MELODY
                                </span>

                                <div
                                    id="t18_2234_9"
                                    style={{
                                        width: 127,
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
                                        id="t18_336_117"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                    >
                                        MOCKTAIL
                                    </span>

                                    <div
                                        id="t18_2234_7"
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
                                            id="t18_2234_8"
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
                    </div>

                    <div
                        id="t18_336_125"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 50,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_336_127"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 7.5,
                            }}
                        >
                            <div
                                id="t18_336_128"
                                style={{
                                    width: 75,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                <div
                                    id="t18_336_129"
                                    style={{
                                        height: 32,
                                        width: 75,
                                        borderRadius: 4,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: props.buttonsVisible,
                                        position: 'relative',
                                        overflow: 'visible',
                                        boxShadow:
                                            '0px 10px 10px rgba(0,0,0,0.07100000232458115)',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onLogIn && props.onLogIn(e)
                                    }}
                                >
                                    <span
                                        id="t18_336_130"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        LOG IN
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_336_131"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: props.profileVisible,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickProfile &&
                                        props.onClickProfile(e)
                                }}
                            >
                                {props.profilePic?.slice(4, -1).trim() != '' ? (
                                    <img
                                        id="t18_336_132"
                                        style={{
                                            height: 16,
                                            width: 16,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                            borderRadius: '16px',
                                        }}
                                        src={props.profilePic
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_336_133"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.name}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_672_116"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 7.5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickMenu && props.onClickMenu(e)
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/hamburger.png' !=
                            '' ? (
                                <img
                                    id="t18_336_134"
                                    style={{
                                        height: 17,
                                        width: 25,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.modalsPlugin.openModal(
                                            'navigationS'
                                        )
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/hamburger.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_480_20"
                    style={{
                        height: 37,
                        width: 560,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: props.addressVisible,
                        paddingLeft: 30,
                        paddingRight: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onChangeAddress && props.onChangeAddress(e)
                    }}
                >
                    <div
                        id="t18_480_21"
                        style={{
                            height: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                        }}
                    >
                        <div
                            id="t18_480_22"
                            style={{
                                height: 13,
                                width: 7,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 2.5,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon1.png' !=
                            '' ? (
                                <img
                                    id="t18_480_23"
                                    style={{
                                        height: 9,
                                        width: 7,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon1.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <span
                            id="t18_480_24"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                                marginLeft: 2.5,
                                marginRight: 0,
                            }}
                        >
                            {props.address}
                        </span>
                    </div>

                    <div
                        id="t18_672_117"
                        style={{
                            height: 16,
                            width: 57,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginRight: 0,
                        }}
                    >
                        <span
                            id="t18_480_25"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                            }}
                        >
                            CHANGE
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmHeaderS
