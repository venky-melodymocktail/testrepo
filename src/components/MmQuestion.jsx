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

const MmQuestion = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        _id: '',
        question: '',
        category: '',
        commentCount: '',
        postedOn: '',
        answer: '',
        bookmarkactiveVisible: 'none',
        bookmarkInactiveVisible: 'flex',
        answered: false,
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_756_122"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                    cursor: 'pointer',
                }}
                onClick={(e) => {
                    props.onClick && props.onClick(e)
                }}
            >
                <div
                    id="t18_201_1362"
                    className={' serviceCard'}
                    style={{
                        width: 831,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 20,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 2,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: 'rgba(207,206,206,1)',
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_201_1363"
                        style={{
                            width: 749,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 20,
                            paddingLeft: 40,
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
                            id="t18_201_1364"
                            style={{
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
                                marginBottom: 10,
                            }}
                        >
                            <div
                                id="t18_201_1365"
                                style={{
                                    width: 765,
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
                                        marginLeft: -30,
                                        marginBottom: -6,
                                        marginRight: 5,
                                    }}
                                >
                                    {props.answered ? (
                                        <img
                                            src={DoubleTick}
                                            style={{
                                                height: 25,
                                            }}
                                        />
                                    ) : (
                                        <div
                                            style={{ width: 25, height: 25 }}
                                        ></div>
                                    )}
                                </div>
                                <span
                                    id="t18_201_1366"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {props.question}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_201_1369"
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
                                marginTop: 10,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_201_1370"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'center',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                {props.category}
                            </span>

                            <span
                                id="t18_201_1371"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
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
                        id="t18_201_1372"
                        style={{
                            height: 46,
                            width: 749,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 345,
                            paddingLeft: 40,
                            paddingRight: 40,
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
                            id="t18_201_1373"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 39,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 172.5,
                            }}
                        >
                            <div
                                id="t18_201_1374"
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
                                    marginRight: 19.5,
                                }}
                            >
                                <div
                                    id="t18_755_42"
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
                                        id="t18_755_44"
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
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png' !=
                                        '' ? (
                                            <img
                                                id="t18_201_1375"
                                                style={{
                                                    height: 18,
                                                    width: 18,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div
                                        id="t18_755_43"
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
                                        {'https://s3-alpha-sig.figma.com/img/cbf7/3c75/5b0a294f7de478c7d65ce45d2ef5117c?Expires=1683504000&Signature=F6LcUtt-Jc3Z1CroXpAGkQO07i8L95kLffIxYKb1CsPNwIVptCwRAqBOo1Zj4SzrXOTFN3SbRK-2dcG2~FIAgVoIx~nLplDC~7TySH4phyw1JoMFSNfnTugWmMaTSy8Icpm4ZU72BTOu~uI3nRn6DhGO9wgOGXX9HkWcQunJdniUIbewjk7BlBpTjeFdNyfLfu1rcFrySMv2HWy0TxyLQjNVf76PveaMWVO~nZgEvFjIM5~C3baSOEOGoJP5yqMKhvG3rlNw-5mGBz7SktLDsnSjSPJU8iUcNVytpruMJFEdjY0sEekSnhekC0vw4vqkO7O~yYd-engyq8L0XWxhAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                                        '' ? (
                                            <img
                                                id="t18_755_41"
                                                style={{
                                                    height: 18,
                                                    width: 18,
                                                    display: 'none',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://s3-alpha-sig.figma.com/img/cbf7/3c75/5b0a294f7de478c7d65ce45d2ef5117c?Expires=1683504000&Signature=F6LcUtt-Jc3Z1CroXpAGkQO07i8L95kLffIxYKb1CsPNwIVptCwRAqBOo1Zj4SzrXOTFN3SbRK-2dcG2~FIAgVoIx~nLplDC~7TySH4phyw1JoMFSNfnTugWmMaTSy8Icpm4ZU72BTOu~uI3nRn6DhGO9wgOGXX9HkWcQunJdniUIbewjk7BlBpTjeFdNyfLfu1rcFrySMv2HWy0TxyLQjNVf76PveaMWVO~nZgEvFjIM5~C3baSOEOGoJP5yqMKhvG3rlNw-5mGBz7SktLDsnSjSPJU8iUcNVytpruMJFEdjY0sEekSnhekC0vw4vqkO7O~yYd-engyq8L0XWxhAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>

                                <span
                                    id="t18_201_1376"
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
                                id="t18_201_1377"
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
                                    marginLeft: 19.5,
                                    marginRight: 19.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickLink && props.onClickLink(e)
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CopyLink.png' !=
                                '' ? (
                                    <img
                                        id="t18_201_1378"
                                        style={{
                                            height: 19.86468505859375,
                                            width: 15.35009765625,
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
                                    id="t18_201_1379"
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
                                id="t18_201_1380"
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
                                    marginLeft: 19.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_209_362"
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
                                        id="t18_755_46"
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
                                                id="t18_201_1381"
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
                                        id="t18_755_45"
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
                                                id="t18_209_361"
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
                                    id="t18_201_1382"
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
                            id="t18_201_1383"
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
                                marginLeft: 172.5,
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
                                    id="t18_201_1384"
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
                                id="t18_201_1385"
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
export default MmQuestion
