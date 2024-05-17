import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmWantedRideCardMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        from: '',
        to: '',
        price: '',
        spotAvailable: 0,
        adType: '',
        title: '',
        offeredBy: '',
        dateOfJourney: '',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        mmReferalVisible: 'flex',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_873_6096"
                style={{
                    flexDirection: 'column',
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
                    id="t18_873_6097"
                    style={{
                        width: 412,
                        borderRadius: 12,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_873_6098"
                        style={{
                            width: 412,
                            borderRadius: 12,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 14,
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
                            id="t18_873_6099"
                            style={{
                                width: 392,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingTop: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 0.5,
                            }}
                        >
                            <div
                                id="t18_873_6100"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
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
                                    id="t18_873_6101"
                                    style={{
                                        height: 22,
                                        width: 326,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 10,
                                    }}
                                >
                                    <div
                                        id="t18_873_6102"
                                        style={{
                                            width: 326,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_873_6103"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight: '40px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {props.title}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_873_6104"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_873_6105"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                        '' ? (
                                            <img
                                                id="t18_873_6106"
                                                style={{
                                                    height: 32,
                                                    width: 32,
                                                    display:
                                                        props.bookmarkinactive,
                                                    borderWidth: 0,
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
                                    </div>

                                    <div
                                        id="t18_873_6107"
                                        style={{
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
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png' !=
                                        '' ? (
                                            <img
                                                id="t18_873_6108"
                                                style={{
                                                    height: 32,
                                                    width: 32,
                                                    display:
                                                        props.bookmarkactive,
                                                    borderWidth: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    props.onClickRemoveBookmark &&
                                                        props.onClickRemoveBookmark(
                                                            e
                                                        )
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
                            </div>

                            <div
                                id="t18_873_6109"
                                style={{
                                    width: 316,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 2.5,
                                }}
                            >
                                <div
                                    id="t18_873_6110"
                                    style={{
                                        width: 102,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <span
                                        id="t18_873_6111"
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
                                id="t18_873_6112"
                                style={{
                                    height: 25,
                                    width: 194,
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
                                    top: -18.5380859375,
                                    left: -5,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_873_6113"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Melody Mocktail Preferred
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_873_6114"
                            style={{
                                height: 37,
                                width: 392,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderTopWidth: 1,
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0.5,
                                marginBottom: 0.5,
                            }}
                        >
                            <span
                                id="t18_873_6115"
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
                                id="t18_873_6116"
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
                            id="t18_873_6117"
                            style={{
                                height: 61,
                                width: 392,
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
                            <div
                                id="t18_874_6221"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 45,
                                }}
                            >
                                <div
                                    id="t18_873_6119"
                                    style={{
                                        height: 16,
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
                                        id="t18_873_6120"
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
                                        id="t18_873_6121"
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
                                    id="t18_873_6126"
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
                                        id="t18_873_6127"
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
                                        No. of people:
                                    </span>

                                    <span
                                        id="t18_873_6128"
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
                                id="t18_874_6222"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 45,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_873_6122"
                                    style={{
                                        height: 16,
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
                                        id="t18_873_6123"
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
                                        id="t18_873_6124"
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
                                    id="t18_873_6129"
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
                                        id="t18_873_6130"
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
                                        id="t18_873_6131"
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
                            id="t18_873_6132"
                            style={{
                                width: 378,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                display: 'flex',
                                paddingLeft: 20,
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
                                id="t18_873_6133"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 52.5,
                                }}
                            >
                                <span
                                    id="t18_873_6134"
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
                                    id="t18_873_6135"
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
                                id="t18_873_6136"
                                style={{
                                    height: 10,
                                    width: 86,
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
                                    marginLeft: 52.5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickContact &&
                                        props.onClickContact(e)
                                }}
                            >
                                <span
                                    id="t18_873_6137"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
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
    )
})
export default MmWantedRideCardMd
