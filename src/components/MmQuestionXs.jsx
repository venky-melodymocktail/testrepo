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

const MmQuestionXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        _id: '',
        question: '',
        category: '',
        commentCount: '',
        cOn: '',
        answer: '',
        bookmarkactiveVisible: '',
        bookmarkInactiveVisible: '',
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
                id="t18_790_4326"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 15,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1266_1898"
                    style={{
                        width: 350,
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
                        id="t18_1266_1899"
                        style={{
                            width: 350,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
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
                            id="t18_1266_1900"
                            style={{
                                width: 290,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 25,
                                paddingRight: 40,
                                paddingTop: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <div
                                id="t18_1266_1901"
                                style={{
                                    width: 318,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                <div
                                    id="t18_1266_1902"
                                    style={{
                                        width: 318,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            marginLeft: -20,
                                            marginBottom: -7,
                                            marginRight: 3,
                                        }}
                                    >
                                        {props.answered ? (
                                            <img
                                                src={DoubleTick}
                                                style={{
                                                    height: 15,
                                                }}
                                            />
                                        ) : (
                                            <div
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                    <span
                                        id="t18_1266_1903"
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
                                id="t18_1266_1904"
                                style={{
                                    flexDirection: 'row',
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
                                <span
                                    id="t18_1266_1905"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'center',
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    {props.category}
                                </span>

                                <span
                                    id="t18_1266_1906"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.postedOn}
                                </span>
                            </div>

                            <div
                                id="t18_1266_1907"
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
                                        id="t18_1266_1908"
                                        style={{
                                            height: 13,
                                            width: 14,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_1266_1909"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'center',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    Report
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1266_1910"
                            style={{
                                width: 328,
                                backgroundColor: 'rgba(248,246,246,1.00)',
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
                                marginTop: 10,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1266_1911"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 20,
                                }}
                            >
                                <div
                                    id="t18_1266_1912"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 17.5,
                                    }}
                                >
                                    <div
                                        id="t18_1266_1913"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                    >
                                        <div
                                            id="t18_1266_1914"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                        >
                                            {'https://s3-alpha-sig.figma.com/img/88b1/5ea2/226b04a46b7541e07d9544853a1d9050?Expires=1694995200&Signature=koeC9AZp6r8a9R3XAZ3LWO5ldqcn-SvSgxBXsFWcS1~zXfnjN0KEMMqUMEt0LeCEbdVvsBZsS7L3EafsDnaMaD71FJdXPw3Z0oSrdIY58EhW6jx23K6G3cWD~roURhBbYEaVInCPHuR2JtIMgpsTjWEdeZMHgdHE7oUQ82tOgwArZxuM67khaAN-9gqZnOewHz5nqH~NzQ8s1KWz~Grn0oBA3zGPYRw437BIg-QTbNCfSbf6rXQzkfo7S7OwO1wnKYeVREN8HuomzkdCCzdcgcns67s6En8BBP0Lc-Pqfkkll0gpd4wr6LpyCeOXwEmFRhngWylLCj4igXQp0AGLNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                                            '' ? (
                                                <img
                                                    id="t18_1266_1915"
                                                    style={{
                                                        height: 13,
                                                        width: 13,
                                                        display: 'none',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://s3-alpha-sig.figma.com/img/88b1/5ea2/226b04a46b7541e07d9544853a1d9050?Expires=1694995200&Signature=koeC9AZp6r8a9R3XAZ3LWO5ldqcn-SvSgxBXsFWcS1~zXfnjN0KEMMqUMEt0LeCEbdVvsBZsS7L3EafsDnaMaD71FJdXPw3Z0oSrdIY58EhW6jx23K6G3cWD~roURhBbYEaVInCPHuR2JtIMgpsTjWEdeZMHgdHE7oUQ82tOgwArZxuM67khaAN-9gqZnOewHz5nqH~NzQ8s1KWz~Grn0oBA3zGPYRw437BIg-QTbNCfSbf6rXQzkfo7S7OwO1wnKYeVREN8HuomzkdCCzdcgcns67s6En8BBP0Lc-Pqfkkll0gpd4wr6LpyCeOXwEmFRhngWylLCj4igXQp0AGLNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>

                                        <div
                                            id="t18_1266_1916"
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
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveComment.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1266_1917"
                                                    style={{
                                                        height: 13,
                                                        width: 13,
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
                                        id="t18_1266_1918"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 400,
                                            color: 'rgba(23,23,20,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'center',
                                            marginLeft: 2,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.commentCount}
                                    </span>
                                </div>

                                <div
                                    id="t18_1266_1919"
                                    style={{
                                        height: 20,
                                        width: 66,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 17.5,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onClickLink &&
                                            props.onClickLink(e)
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CopyLink.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1266_1920"
                                            style={{
                                                height: 16,
                                                width: 12,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 2,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CopyLink.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_1266_1921"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 400,
                                            color: 'rgba(23,23,20,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'center',
                                            marginLeft: 2,
                                            marginRight: 0,
                                        }}
                                    >
                                        Copy link
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1266_1934"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 20,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_1266_1922"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onSave && props.onSave(e)
                                    }}
                                >
                                    <div
                                        id="t18_1266_1923"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                    >
                                        <div
                                            id="t18_1266_1924"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                        >
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveSave.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1266_1925"
                                                    style={{
                                                        height: 15,
                                                        width: 13,
                                                        display:
                                                            props.bookmarkactiveVisible,
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ActiveSave.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>

                                        <div
                                            id="t18_1266_1926"
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
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/InactiveSave.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1266_1927"
                                                    style={{
                                                        height: 15,
                                                        width: 13,
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
                                    </div>

                                    <span
                                        id="t18_1266_1928"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 400,
                                            color: 'rgba(23,23,20,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'center',
                                            marginLeft: 2,
                                            marginRight: 0,
                                            display:
                                                props.bookmarkInactiveVisible,
                                        }}
                                    >
                                        Save
                                    </span>
                                </div>

                                <div
                                    id="t18_1266_1929"
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
                                    {'https://s3-alpha-sig.figma.com/img/f9cb/c8c1/80728e9a4da0d6b39301960bbab93267?Expires=1694995200&Signature=VQwYZUx-mNqhAP7Tehr2Mvkgx2QnfhmlvoqdYztiULrOP6h4MtONuN0BuVitNUjiyrNhmIGskvig1Uw-OJJnmtjPOimQGQDr3ki0SBUIxuVdgyNMvBuhPHZDOrTJSJpUqYTe~FGKGIbShrSptlKB61UEe3lWL1rFXs8eR3bz~y3gmdQrBS2gGtqOF5i9BO7Cav7QzMkwEI6fxTBCY-v-wjQFaSL4ECd5ynz06rO13S0KBN2aV5jeNzqQb5Zon6QT4ioyOXJbY8FKF8DWoMCUeqdFh8cA6~3Wjclc-ARZGG033YP9xgyjqHTh-YSW1AxAcQizoyi1e2akerM550rW6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                                    '' ? (
                                        <img
                                            id="t18_1266_1930"
                                            style={{
                                                height: 14,
                                                width: 11,
                                                display: 'none',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 2.5,
                                            }}
                                            src={
                                                'https://s3-alpha-sig.figma.com/img/f9cb/c8c1/80728e9a4da0d6b39301960bbab93267?Expires=1694995200&Signature=VQwYZUx-mNqhAP7Tehr2Mvkgx2QnfhmlvoqdYztiULrOP6h4MtONuN0BuVitNUjiyrNhmIGskvig1Uw-OJJnmtjPOimQGQDr3ki0SBUIxuVdgyNMvBuhPHZDOrTJSJpUqYTe~FGKGIbShrSptlKB61UEe3lWL1rFXs8eR3bz~y3gmdQrBS2gGtqOF5i9BO7Cav7QzMkwEI6fxTBCY-v-wjQFaSL4ECd5ynz06rO13S0KBN2aV5jeNzqQb5Zon6QT4ioyOXJbY8FKF8DWoMCUeqdFh8cA6~3Wjclc-ARZGG033YP9xgyjqHTh-YSW1AxAcQizoyi1e2akerM550rW6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1266_1931"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1266_1932"
                                            style={{
                                                height: 1,
                                                width: 50,
                                                borderRadius: 4,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'none',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1266_1933"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Edit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmQuestionXs
