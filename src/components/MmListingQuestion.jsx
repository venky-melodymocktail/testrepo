import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmListingQuestion = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        _id: '',
        question: '',
        category: '',
        commentCount: 0,
        bookmarkactiveVisible: 'flex',
        bookmarkInactiveVisible: 'flex',
        reportVisible: 'none',
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
                id="t18_1266_1826"
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
                    id="t18_1266_1827"
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
                        id="t18_1266_1828"
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
                            id="t18_1266_1829"
                            style={{
                                width: 765,
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
                                id="t18_1266_1830"
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
                                <span
                                    id="t18_1266_1831"
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
                            id="t18_1266_1832"
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
                                id="t18_1266_1833"
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
                                id="t18_1266_1834"
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
                        id="t18_1266_1835"
                        style={{
                            width: 749,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 270,
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 15,
                            paddingBottom: 15,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 10,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_1266_1836"
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
                                marginRight: 135,
                            }}
                        >
                            <div
                                id="t18_1266_1837"
                                style={{
                                    height: 18,
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
                                    id="t18_1266_1838"
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
                                        id="t18_1266_1839"
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
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveComment.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1266_1840"
                                                style={{
                                                    height: 18,
                                                    width: 18,
                                                    display: 'none',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveComment.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div
                                        id="t18_1266_1841"
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
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1266_1842"
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
                                </div>

                                <span
                                    id="t18_1266_1843"
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
                                id="t18_1266_1844"
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
                                        id="t18_1266_1845"
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
                                    id="t18_1266_1846"
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
                                id="t18_1266_1847"
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
                                    id="t18_1266_1848"
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
                                        id="t18_1266_1849"
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
                                                id="t18_1266_1850"
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
                                        id="t18_1266_1851"
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
                                                id="t18_1266_1852"
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
                                    id="t18_1266_1853"
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
                                        display: props.bookmarkactiveVisible,
                                    }}
                                >
                                    Save
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1266_1861"
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
                                marginLeft: 135,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_1266_1857"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 29,
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
                                        id="t18_1266_1858"
                                        style={{
                                            height: 25.75,
                                            width: 21,
                                            display: props.deleteVisible,
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 14.5,
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
                                    id="t18_1266_1859"
                                    className={' contact-btn'}
                                    style={{
                                        height: 12,
                                        width: 79,
                                        borderRadius: 4,
                                        backgroundColor: 'rgba(186,15,23,1)',
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
                                        marginLeft: 14.5,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onClickEdit &&
                                            props.onClickEdit(e)
                                    }}
                                >
                                    <span
                                        id="t18_1266_1860"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Edit
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1266_1854"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: props.reportVisible,
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
                                        id="t18_1266_1855"
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
                                    id="t18_1266_1856"
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
        </div>
    )
})
export default MmListingQuestion
