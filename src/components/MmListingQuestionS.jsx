import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmListingQuestionS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        _id: '',
        question: '',
        category: '',
        commentCount: 0,
        bookmarkactiveVisible: 'flex',
        bookmarkInactiveVisible: 'flex',
        reportVisible: 'flex',
        deleteVisible: 'flex',
        editVisible: 'flex',
        postedOn: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1266_1862"
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
                    id="t18_1266_1863"
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
                        id="t18_1266_1864"
                        style={{
                            width: 477,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 20,
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
                            id="t18_1266_1865"
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
                                id="t18_1266_1866"
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
                                <span
                                    id="t18_1266_1867"
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
                            id="t18_1266_1868"
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
                                id="t18_1266_1869"
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
                                id="t18_1266_1870"
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
                        id="t18_1266_1871"
                        style={{
                            width: 486,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 80,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 10,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_1266_1872"
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
                                marginRight: 40,
                            }}
                        >
                            <div
                                id="t18_1266_1873"
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
                                    marginLeft: 0,
                                    marginRight: 12.5,
                                }}
                            >
                                <div
                                    id="t18_1266_1874"
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
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveComment.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1266_1875"
                                            style={{
                                                height: 18,
                                                width: 18,
                                                display: 'none',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveComment.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1266_1876"
                                            style={{
                                                height: 18,
                                                width: 18,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <span
                                    id="t18_1266_1877"
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
                                id="t18_1266_1878"
                                style={{
                                    height: 19.86474609375,
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
                                        id="t18_1266_1879"
                                        style={{
                                            height: 19.86474609375,
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
                                    id="t18_1266_1880"
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
                                id="t18_1266_1881"
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
                                    id="t18_1266_1882"
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
                                        id="t18_1266_1883"
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
                                                id="t18_1266_1884"
                                                style={{
                                                    height: 18.10986328125,
                                                    width: 16,
                                                    display:
                                                        props.bookmarkInactiveVisible,
                                                    borderWidth: 0,
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
                                        id="t18_1266_1885"
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
                                                id="t18_1266_1886"
                                                style={{
                                                    height: 18.0645751953125,
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
                                    id="t18_1266_1887"
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
                                    {dl.changes.bookmarkInactiveVisible}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1266_1896"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 40,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_1266_1891"
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
                                    marginTop: 0,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png' !=
                                '' ? (
                                    <img
                                        id="t18_1266_1892"
                                        style={{
                                            height: 16,
                                            width: 13,
                                            display: props.deleteVisible,
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 4,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickDelete &&
                                                props.onClickDelete(e)
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_1266_1893"
                                    style={{
                                        height: 24,
                                        width: 76,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        itemSpacing: 15,
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 4,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1266_1894"
                                        style={{
                                            height: 4,
                                            width: 56,
                                            borderRadius: 4,
                                            backgroundColor:
                                                'rgba(186,15,23,1)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: props.editVisible,
                                            itemSpacing: 10,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickEdit &&
                                                props.onClickEdit(e)
                                        }}
                                    >
                                        <span
                                            id="t18_1266_1895"
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
                                            Edit
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1266_1888"
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
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickReport &&
                                        props.onClickReport(e)
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png' !=
                                '' ? (
                                    <img
                                        id="t18_1266_1889"
                                        style={{
                                            height: 19,
                                            width: 19,
                                            display: props.reportVisible,
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
                                    id="t18_1266_1890"
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
                                        display: props.reportVisible,
                                    }}
                                >
                                    Report
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmListingQuestionS
