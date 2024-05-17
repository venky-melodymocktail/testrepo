import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'
import DoubleTick from '../assets/doubleTick_Green.png'

const MmQuestionS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        _id: '',
        question: '',
        category: '',
        commentCount: '',
        cOn: '',
        answer: '',
        bookmarkactiveVisible: 'flex',
        bookmarkInactiveVisible: 'flex',
        postedOn: '',
        answered: false,
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_756_95"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 15,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_756_96"
                    style={{
                        width: 537,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 20,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 1,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: 'rgba(207,206,206,1)',
                        borderStyle: 'solid',
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onClick && props.onClick(e)
                    }}
                >
                    <div
                        id="t18_756_97"
                        style={{
                            width: 477,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 25,
                            paddingRight: 40,
                            paddingTop: 15,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 10,
                        }}
                    >
                        <div
                            id="t18_756_98"
                            style={{
                                width: 488,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 4,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            <div
                                id="t18_756_99"
                                style={{
                                    width: 490,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 6,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: -20,
                                        marginBottom: -6,
                                        marginRight: 2,
                                    }}
                                >
                                    {props.answered ? (
                                        <img
                                            src={DoubleTick}
                                            style={{
                                                height: 18,
                                            }}
                                        />
                                    ) : (
                                        <div
                                            style={{ width: 18, height: 18 }}
                                        ></div>
                                    )}
                                </div>
                                <span
                                    id="t18_756_100"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {props.question}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_756_101"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 10,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_756_102"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'center',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                {props.category}
                            </span>

                            <span
                                id="t18_756_103"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                {props.postedOn}
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_756_104"
                        style={{
                            height: 44,
                            width: 486,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 100,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 10,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_756_105"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 25,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 50,
                            }}
                        >
                            <div
                                id="t18_756_106"
                                style={{
                                    height: 18,
                                    width: 123,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 8,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 12.5,
                                }}
                            >
                                <div
                                    id="t18_756_124"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onClickComments &&
                                            props.onClickComments(e)
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png' !=
                                    '' ? (
                                        <img
                                            id="t18_756_107"
                                            style={{
                                                height: 18,
                                                width: 18,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {'https://s3-alpha-sig.figma.com/img/cbf7/3c75/5b0a294f7de478c7d65ce45d2ef5117c?Expires=1683504000&Signature=F6LcUtt-Jc3Z1CroXpAGkQO07i8L95kLffIxYKb1CsPNwIVptCwRAqBOo1Zj4SzrXOTFN3SbRK-2dcG2~FIAgVoIx~nLplDC~7TySH4phyw1JoMFSNfnTugWmMaTSy8Icpm4ZU72BTOu~uI3nRn6DhGO9wgOGXX9HkWcQunJdniUIbewjk7BlBpTjeFdNyfLfu1rcFrySMv2HWy0TxyLQjNVf76PveaMWVO~nZgEvFjIM5~C3baSOEOGoJP5yqMKhvG3rlNw-5mGBz7SktLDsnSjSPJU8iUcNVytpruMJFEdjY0sEekSnhekC0vw4vqkO7O~yYd-engyq8L0XWxhAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                                    '' ? (
                                        <img
                                            id="t18_756_123"
                                            style={{
                                                height: 18,
                                                width: 18,
                                                display: 'none',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                            src={
                                                'https://s3-alpha-sig.figma.com/img/cbf7/3c75/5b0a294f7de478c7d65ce45d2ef5117c?Expires=1683504000&Signature=F6LcUtt-Jc3Z1CroXpAGkQO07i8L95kLffIxYKb1CsPNwIVptCwRAqBOo1Zj4SzrXOTFN3SbRK-2dcG2~FIAgVoIx~nLplDC~7TySH4phyw1JoMFSNfnTugWmMaTSy8Icpm4ZU72BTOu~uI3nRn6DhGO9wgOGXX9HkWcQunJdniUIbewjk7BlBpTjeFdNyfLfu1rcFrySMv2HWy0TxyLQjNVf76PveaMWVO~nZgEvFjIM5~C3baSOEOGoJP5yqMKhvG3rlNw-5mGBz7SktLDsnSjSPJU8iUcNVytpruMJFEdjY0sEekSnhekC0vw4vqkO7O~yYd-engyq8L0XWxhAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <span
                                    id="t18_756_108"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(23,23,20,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'center',
                                        marginLeft: 4,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.commentCount}
                                </span>
                            </div>

                            <div
                                id="t18_756_109"
                                style={{
                                    height: 19.86468505859375,
                                    width: 80.35009765625,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 8,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickLink && props.onClickLink(e)
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CopyLink.png' !=
                                '' ? (
                                    <img
                                        id="t18_756_110"
                                        style={{
                                            height: 21.86468505859375,
                                            width: 17.35009765625,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 4,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CopyLink.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_756_111"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(23,23,20,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'center',
                                        marginLeft: 4,
                                        marginRight: 0,
                                    }}
                                >
                                    Copy link
                                </span>
                            </div>

                            <div
                                id="t18_756_112"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 8,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 12.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_756_113"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4,
                                    }}
                                >
                                    <div
                                        id="t18_756_114"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            itemSpacing: 10,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveSave.png' !=
                                        '' ? (
                                            <img
                                                id="t18_756_115"
                                                style={{
                                                    height: 18.10986328125,
                                                    width: 16,
                                                    display:
                                                        props.bookmarkInactiveVisible,
                                                    borderWidth: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    props.onSave &&
                                                        props.onSave(e)
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveSave.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div
                                        id="t18_756_116"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            itemSpacing: 10,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginRight: 0,
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveSave.png' !=
                                        '' ? (
                                            <img
                                                id="t18_756_117"
                                                style={{
                                                    height: 18.06451416015625,
                                                    width: 16,
                                                    display:
                                                        props.bookmarkactiveVisible,
                                                    borderWidth: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    props.onUnsave &&
                                                        props.onUnsave(e)
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveSave.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>

                                <span
                                    id="t18_756_118"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(23,23,20,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'center',
                                        marginLeft: 4,
                                        marginRight: 0,
                                    }}
                                >
                                    Save
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_756_119"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 50,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickReport && props.onClickReport(e)
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png' !=
                            '' ? (
                                <img
                                    id="t18_756_120"
                                    style={{
                                        height: 19,
                                        width: 19,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_756_121"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'center',
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                Report
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmQuestionS
