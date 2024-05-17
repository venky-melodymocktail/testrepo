import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmOfferedHomeCard = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        title: '2BHK Flat in NewYork DownTown',
        location: 'New York',
        price: '$3000/month',
        type: 'condo',
        stayLeaseType: 'short term',
        availabilityFrom: 'today',
        AdType: 'Offered',
        postedBy: 'shivam',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        promotionVisible: 'flex',
        promotionDateVisible: 'flex',
        mmReferalVisible: 'flex',
        EditDeleteVisible: 'flex',
        image: 'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)',
        rent: '$2000',
        contactVisible: 'flex',
        promotionstartDate: 'Being promoted from 10 May’23',
        promotionDayleft: '9 days left',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1037_1599"
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 10,
                    paddingRight: 15,
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
                    id="t18_1037_1600"
                    style={{
                        width: 466,
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
                        id="t18_1037_1601"
                        className={' serviceCard'}
                        style={{
                            width: 466,
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
                        }}
                    >
                        <div
                            id="t18_1037_1602"
                            style={{
                                height: 227,
                                width: 446,
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
                                id="t18_1037_1603"
                                style={{
                                    width: 38,
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
                                        id="t18_1037_1604"
                                        style={{
                                            height: 38,
                                            width: 38,
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
                                        id="t18_1037_1605"
                                        style={{
                                            height: 38,
                                            width: 38,
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
                            id="t18_1037_1608"
                            style={{
                                width: 466,
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
                                id="t18_1037_1609"
                                style={{
                                    height: 98,
                                    width: 426,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingRight: 20,
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
                                    id="t18_1037_1610"
                                    style={{
                                        height: 52,
                                        width: 421,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: '-webkit-box',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                        textOverflow: 'ellipsis',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    <span
                                        id="t18_1037_1611"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '23.784090042114258px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.title}
                                    </span>
                                </div>

                                <div
                                    id="t18_1037_1612"
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
                                            id="t18_1037_1613"
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
                                        id="t18_1037_1614"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
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
                                id="t18_1037_1620"
                                style={{
                                    height: 61,
                                    width: 426,
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
                                    id="t18_1037_1621"
                                    style={{
                                        width: 224,
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
                                        id="t18_1037_1622"
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
                                            id="t18_1037_1623"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Type:
                                        </span>

                                        <span
                                            id="t18_1037_1624"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.type}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1037_1625"
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
                                            id="t18_1037_1626"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Available from:
                                        </span>

                                        <span
                                            id="t18_1037_1627"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
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
                                    id="t18_1037_1628"
                                    style={{
                                        width: 190,
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
                                        id="t18_1037_1629"
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
                                            id="t18_1037_1630"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Lease type:
                                        </span>

                                        <span
                                            id="t18_1037_1631"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 1.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {props.stayLeaseType}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1037_1632"
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
                                            id="t18_1037_1633"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 1.5,
                                            }}
                                        >
                                            Ad type:
                                        </span>

                                        <span
                                            id="t18_1037_1634"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
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
                                id="t18_1037_1635"
                                style={{
                                    width: 436,
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
                                    id="t18_1037_1636"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 70,
                                    }}
                                >
                                    <span
                                        id="t18_1037_1637"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 1.5,
                                        }}
                                    >
                                        Posted by:
                                    </span>

                                    <span
                                        id="t18_1037_1638"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                            marginTop: 1.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {props.postedBy}
                                    </span>
                                </div>

                                <div
                                    id="t18_1037_1639"
                                    style={{
                                        width: 134,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 70,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1037_1640"
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
                                            id="t18_1189_765"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    props.EditDeleteVisible,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                            }}
                                        >
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1189_766"
                                                    style={{
                                                        height: 26,
                                                        width: 21,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 7.5,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        props.onClickDelete &&
                                                            props.onClickDelete(
                                                                e
                                                            )
                                                    }}
                                                    src={
                                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1189_767"
                                                className={' contact-btn'}
                                                style={{
                                                    height: 12,
                                                    width: 78,
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
                                                    marginLeft: 7.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    props.onClickEdit &&
                                                        props.onClickEdit(e)
                                                }}
                                            >
                                                <span
                                                    id="t18_1189_768"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Edit
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1037_1648"
                                            className={' contact-btn'}
                                            style={{
                                                height: 12,
                                                width: 110,
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
                                                id="t18_1037_1649"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '18.15340805053711px',
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
                    </div>

                    <div
                        id="t18_1037_1606"
                        style={{
                            height: 28,
                            width: 208,
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
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'absolute',
                            overflow: 'visible',
                            borderWidth: 0,
                            top: 13.796875,
                            left: -5,
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                    >
                        <span
                            id="t18_1037_1607"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'center',
                            }}
                        >
                            Melody Mocktail Preferred
                        </span>
                    </div>

                    <div
                        id="t18_1037_1650"
                        style={{
                            width: 466,
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
                            id="t18_1037_1651"
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
                                id="t18_1037_1652"
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
                                    id="t18_1037_1653"
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
                            id="t18_1037_1654"
                            style={{
                                height: 20,
                                width: 446,
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
                                id="t18_1037_1655"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 70,
                                }}
                            >
                                {props.promotionstartDate}
                            </span>

                            <span
                                id="t18_1037_1656"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: 'rgba(207,206,206,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginLeft: 70,
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
export default MmOfferedHomeCard
