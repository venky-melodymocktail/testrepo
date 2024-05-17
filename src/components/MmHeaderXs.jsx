import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmHeaderXs = observer((mainprops) => {
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
                id="t18_480_19"
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
                    id="t18_336_135"
                    style={{
                        height: 60,
                        width: 360,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        display: 'flex',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow:
                            '0px 4px 20px rgba(0,0,0,0.10000000149011612)',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    <div
                        id="t18_480_12"
                        style={{
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
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png' !=
                        '' ? (
                            <img
                                id="t18_480_13"
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
                            id="t18_480_14"
                            style={{
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
                                id="t18_480_15"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                }}
                            >
                                MELODY
                            </span>

                            <div
                                id="t18_2234_12"
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
                                    id="t18_480_16"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2,
                                    }}
                                >
                                    MOCKTAIL
                                </span>

                                <div
                                    id="t18_2234_10"
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
                                        id="t18_2234_11"
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
                        id="t18_336_146"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 50,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_336_147"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {}}
                        >
                            <div
                                id="t18_336_148"
                                style={{
                                    height: 30,
                                    width: 80,
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
                                    marginTop: 0,
                                    marginBottom: 1,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onLogIn && props.onLogIn(e)
                                }}
                            >
                                <span
                                    id="t18_336_149"
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

                            <div
                                id="t18_336_150"
                                style={{
                                    height: 15,
                                    width: 106,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: props.profileVisible,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 1,
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
                                        id="t18_336_151"
                                        style={{
                                            height: 15,
                                            width: 15,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                            borderRadius: '13px',
                                        }}
                                        src={props.profilePic
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_336_152"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_336_139"
                    style={{
                        height: 30,
                        width: 360,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: props.addressVisible,
                        paddingLeft: 20,
                        paddingRight: 20,
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
                        id="t18_480_18"
                        style={{
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
                            id="t18_336_140"
                            style={{
                                height: 9,
                                width: 7,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
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
                                    id="t18_336_141"
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
                            id="t18_336_143"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 10,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '12.102272033691406px',
                                textAlign: 'left',
                                marginLeft: 2.5,
                                marginRight: 0,
                            }}
                        >
                            {props.address}
                        </span>
                    </div>

                    <div
                        id="t18_672_118"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginRight: 0,
                        }}
                    >
                        <span
                            id="t18_336_144"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 10,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '12.102272033691406px',
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
export default MmHeaderXs
