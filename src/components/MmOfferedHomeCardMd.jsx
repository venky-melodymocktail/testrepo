import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmOfferedHomeCardMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        title: '',
        location: '',
        price: '',
        type: '',
        stayLeaseType: '',
        availabilityFrom: '',
        AdType: '',
        postedBy: '',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        promotionVisible: 'flex',
        promotionDateVisible: 'flex',
        mmReferalVisible: 'flex',
        EditDeleteVisible: 'flex',
        image: 'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/blankImg.jpg)',
        rent: '',
        contactVisible: 'flex',
        promotionstartDate: '',
        promotionDayleft: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1212_8"
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1212_9"
                    style={{
                        width: 410,
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
                        id="t18_1212_10"
                        style={{
                            width: 410,
                            borderRadius: 12,
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 5,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            props.onClick && props.onClick(e)
                        }}
                    >
                        <div
                            id="t18_1212_11"
                            style={{
                                height: 205,
                                width: 390,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                backgroundImage: props.image,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_1212_12"
                                style={{
                                    width: 35,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                '' ? (
                                    <img
                                        id="t18_1212_13"
                                        style={{
                                            height: 35,
                                            width: 35,
                                            display: props.bookmarkinactive,
                                            borderWidth: 0,
                                            marginTop: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickBookmark &&
                                                props.onClickBookmark(e)
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_1212_14"
                                        style={{
                                            height: 35,
                                            width: 35,
                                            display: props.bookmarkactive,
                                            borderWidth: 0,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickRemoveBookmark &&
                                                props.onClickRemoveBookmark(e)
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_1212_15"
                            style={{
                                width: 410,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1212_16"
                                style={{
                                    width: 370,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginTop: 0,
                                    marginBottom: 0.5,
                                }}
                            >
                                <div
                                    id="t18_1212_17"
                                    style={{
                                        height: 49,
                                        width: 378,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: '-webkit-box',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <span
                                        id="t18_1212_18"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.363636016845703px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.title}
                                    </span>
                                </div>

                                <div
                                    id="t18_1212_19"
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
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon-listingcard.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1212_20"
                                            style={{
                                                height: 12.72265625,
                                                width: 10.52001953125,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 3,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon-listingcard.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_1212_21"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 3,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.location}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1918_585"
                                style={{
                                    height: 29,
                                    width: 390,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginTop: 0.5,
                                    marginBottom: 0.5,
                                }}
                            >
                                <span
                                    id="t18_1918_586"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3.5,
                                    }}
                                >
                                    Price:
                                </span>

                                <div
                                    id="t18_1918_587"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 3.5,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1918_588"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 700,
                                            color: 'rgba(28,167,139,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'center',
                                            marginLeft: 0,
                                        }}
                                    >
                                        {props.price}
                                    </span>

                                    <span
                                        id="t18_1918_589"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: 'rgba(28,167,139,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18px',
                                            textAlign: 'center',
                                            marginRight: 0,
                                        }}
                                    ></span>
                                </div>
                            </div>

                            <div
                                id="t18_1212_177"
                                style={{
                                    height: 69,
                                    width: 370,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginTop: 0.5,
                                    marginBottom: 0.5,
                                }}
                            >
                                <div
                                    id="t18_1212_178"
                                    style={{
                                        width: 208,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    <div
                                        id="t18_1212_179"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1212_180"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Type:
                                        </span>

                                        <span
                                            id="t18_1212_181"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.type}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1212_182"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 5.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1212_183"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Available from:
                                        </span>

                                        <span
                                            id="t18_1212_184"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.availabilityFrom}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1212_185"
                                    style={{
                                        width: 153,
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
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
                                        id="t18_1212_186"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1212_187"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Lease type:
                                        </span>

                                        <span
                                            id="t18_1212_188"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.stayLeaseType}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1212_189"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 5.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1212_190"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Ad type:
                                        </span>

                                        <span
                                            id="t18_1212_191"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.AdType}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1212_42"
                                style={{
                                    width: 380,
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1212_43"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 65,
                                    }}
                                >
                                    <span
                                        id="t18_1212_44"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 1.5,
                                        }}
                                    >
                                        Posted by:
                                    </span>

                                    <span
                                        id="t18_1212_45"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                            marginTop: 1.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {props.postedBy}
                                    </span>
                                </div>

                                <div
                                    id="t18_1212_46"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 65,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1212_47"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: props.EditDeleteVisible,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1212_48"
                                                style={{
                                                    height: 24,
                                                    width: 19,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 7.5,
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
                                            id="t18_1212_49"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 7.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1212_50"
                                                style={{
                                                    height: 9,
                                                    width: 49,
                                                    borderRadius: 4,
                                                    backgroundColor:
                                                        'rgba(186,15,23,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
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
                                                    id="t18_1212_51"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Edit
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1212_52"
                                        style={{
                                            height: 9,
                                            width: 80,
                                            borderRadius: 4,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: props.contactVisible,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickContact &&
                                                props.onClickContact(e)
                                        }}
                                    >
                                        <span
                                            id="t18_1212_53"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Contact
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1212_54"
                        style={{
                            height: 24,
                            width: 162,
                            backgroundImage:
                                'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/melodymocktailpreferred.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: props.mmReferalVisible,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 7,
                            paddingBottom: 7,
                            position: 'absolute',
                            overflow: 'visible',
                            borderWidth: 0,
                            top: 13.796875,
                            left: -4,
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                    >
                        <span
                            id="t18_1212_55"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
                                textAlign: 'center',
                            }}
                        >
                            Melody Mocktail Preferred
                        </span>
                    </div>

                    <div
                        id="t18_1212_56"
                        style={{
                            width: 410,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
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
                            id="t18_1212_57"
                            style={{
                                height: 30,
                                width: 144,
                                borderRadius: 5,
                                backgroundColor: 'rgba(244,186,84,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: props.promotionVisible,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickPromote && props.onClickPromote(e)
                            }}
                        >
                            <span
                                id="t18_1212_58"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 4.5,
                                }}
                            >
                                Promote it
                            </span>

                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/PromoteArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_1212_59"
                                    style={{
                                        height: 13.3359375,
                                        width: 13.820068359375,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 4.5,
                                        marginRight: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/PromoteArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1212_60"
                            style={{
                                height: 20,
                                width: 390,
                                borderRadius: 5,
                                backgroundColor: 'rgba(28,167,139,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.promotionDateVisible,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1212_61"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 55,
                                }}
                            >
                                {props.promotionstartDate}
                            </span>

                            <span
                                id="t18_1212_62"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(207,206,206,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 55,
                                    marginRight: 0,
                                }}
                            >
                                {props.promotionDayleft}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmOfferedHomeCardMd
