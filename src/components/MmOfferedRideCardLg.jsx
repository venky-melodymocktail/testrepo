import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmOfferedRideCardLg = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        from: '',
        to: '',
        price: '',
        spotAvailable: 0,
        dateOfJourney: '',
        adType: '',
        title: '',
        offeredBy: '',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        mmReferalVisible: 'none',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_822_5588"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 10,
                    paddingRight: 15,
                    paddingBottom: 25,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_189_1441"
                    className={' serviceCard'}
                    style={{
                        width: 466,
                        borderRadius: 12,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onClick && props.onClick(e)
                    }}
                >
                    <div
                        id="t18_189_1442"
                        style={{
                            width: 430,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingBottom: 8,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 0,
                            marginBottom: 4,
                        }}
                    >
                        <div
                            id="t18_189_1443"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_822_5134"
                                style={{
                                    width: 382,
                                    flexDirection: 'row',
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
                                <span
                                    id="t18_189_1444"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '80px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {props.title}
                                </span>
                            </div>

                            <div
                                id="t18_822_5133"
                                style={{
                                    flexDirection: 'column',
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
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                '' ? (
                                    <img
                                        id="t18_189_1445"
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
                                        id="t18_822_5132"
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
                            id="t18_869_5595"
                            style={{
                                height: 16,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_189_1447"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                }}
                            >
                                {props.dateOfJourney}
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_189_1448"
                        style={{
                            width: 430,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 8,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 4,
                            marginBottom: 4,
                        }}
                    >
                        <span
                            id="t18_189_1449"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                                marginLeft: 0,
                                marginRight: 3.5,
                            }}
                        >
                            Price:
                        </span>

                        <span
                            id="t18_189_1450"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 700,
                                color: 'rgba(28,167,139,1)',
                                letterSpacing: 0,
                                lineHeight: '21.784090042114258px',
                                textAlign: 'left',
                                marginLeft: 3.5,
                                marginRight: 0,
                            }}
                        >
                            {props.price}
                        </span>
                    </div>

                    <div
                        id="t18_189_1451"
                        style={{
                            width: 430,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 8,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 4,
                            marginBottom: 4,
                        }}
                    >
                        <div
                            id="t18_189_1452"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 60,
                            }}
                        >
                            <div
                                id="t18_189_1453"
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
                                    id="t18_189_1454"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3.5,
                                    }}
                                >
                                    From:
                                </span>

                                <span
                                    id="t18_189_1455"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 3.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.from}
                                </span>
                            </div>

                            <div
                                id="t18_189_1456"
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
                                    id="t18_189_1457"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    Available spots:
                                </span>

                                <span
                                    id="t18_189_1458"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.spotAvailable}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_189_1459"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 60,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_189_1460"
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
                                    id="t18_189_1461"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3,
                                    }}
                                >
                                    To:
                                </span>

                                <span
                                    id="t18_189_1462"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 3,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.to}
                                </span>
                            </div>

                            <div
                                id="t18_189_1463"
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
                                    id="t18_189_1464"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 1.5,
                                    }}
                                >
                                    Ad type:
                                </span>

                                <span
                                    id="t18_189_1465"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 1.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.adType}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_189_1466"
                        style={{
                            width: 430,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 4,
                            marginBottom: 4,
                        }}
                    >
                        <div
                            id="t18_189_1467"
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
                                id="t18_189_1468"
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
                                id="t18_189_1469"
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
                                {props.offeredBy}
                            </span>
                        </div>

                        <div
                            id="t18_189_1470"
                            className={' contact-btn'}
                            style={{
                                height: 12,
                                width: 110,
                                borderRadius: 4,
                                backgroundColor: 'rgba(186,15,23,1.00)',
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
                                marginLeft: 70,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickContact && props.onClickContact(e)
                            }}
                        >
                            <span
                                id="t18_189_1471"
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
                                Contact
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_189_1472"
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
                            top: -14,
                            left: -5,
                            marginTop: 4,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_189_1473"
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
                </div>
            </div>
        </div>
    )
})
export default MmOfferedRideCardLg
