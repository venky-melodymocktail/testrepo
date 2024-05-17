import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state'
import { observer } from 'mobx-react'
import Lottie from 'react-lottie'

import MaterialSwitch from '../../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../../components/main/MaterialSelect.jsx'
import ReactDraft from '../../components/main/ReactDraft.jsx'
import MaterialMenu from '../../components/main/MaterialMenu.jsx'
import MMPagination from '../../components/main/MMPagination.jsx'
import MMFilter from '../../components/main/MMFilter.jsx'
import MaterialDate from '../../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../../components/main/MaterialRating.jsx'

import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmComment from '../../components/MmComment.jsx'

const Bloglisti_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_180_1340')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fff',
                overflowX: 'hidden',
            }}
        >
            <div
                id="t18_180_1340"
                style={{
                    width: 1440,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 10,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                }}
            >
                <MmHeader
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
                    }}
                    onSignUp={(val) => {
                        dl.functions.viewsPlugin.showView('signup')
                    }}
                    onLogIn={(val) => {
                        dl.functions.viewsPlugin.showView('login')
                    }}
                    onClickServices={(val) => {}}
                    onClickBlogs={(val) => {}}
                    onClickAboutUs={(val) => {}}
                    onClickContactUs={(val) => {}}
                    onClickProfile={(val) => {
                        dl.functions.viewsPlugin.showView('profile')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                />

                <div
                    id="t18_52_112"
                    style={{
                        width: 1440,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_52_417"
                        style={{
                            width: 1246,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 66,
                            paddingBottom: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_52_412"
                            style={{
                                width: 806,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 42.5,
                            }}
                        >
                            <div
                                id="t18_885_6526"
                                style={{
                                    width: 806,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_52_153"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15,
                                    }}
                                >
                                    <span
                                        id="t18_52_139"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 40,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '48.409088134765625px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7,
                                        }}
                                    >
                                        {dl.changes.blogDetail.title}
                                    </span>

                                    <span
                                        id="t18_52_151"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 22,
                                            fontWeight: 400,
                                            color: 'rgba(158,156,156,1)',
                                            letterSpacing: 0,
                                            lineHeight: '26.625px',
                                            textAlign: 'left',
                                            marginTop: 7,
                                            marginBottom: 7,
                                        }}
                                    >
                                        By Kim Jonathan, 03 Jun 2022
                                    </span>

                                    <div
                                        id="t18_885_6518"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_885_6519"
                                            style={{
                                                height: 35,
                                                width: 35,
                                                backgroundImage:
                                                    'url(https://s3-alpha-sig.figma.com/img/c883/678d/26d1b40cd5d9ac22805b81463a97437d?Expires=1691971200&Signature=pu3Iica~6zhLTPcgw749pEax~y~-c1MHp4B95Hs7wn5J25GM2gssmz~DUslSfQ2hvXlUxVxE1KfOE0jg7~l10MEX5i9-IEMknYQ5Pm2rfqogJ0OhQuD1p2ufseO~R9EOquWPMQhUhxD2LaZ6Jn8jlQ~Xv06H7elPlYAagXIPv26LollS7sSn1mEhKPrR1JOc5zWM-qB779lN0iDUL2ZEWn0ahPoSIXQSikswZ2mVOb4Xs2nvFEb2CZsXvoPDs~9q7HdXuyzV8rc194cNTI0vwZW-5t0X-WNsEg3ceKflXqng2Fgbw~uo53bGccBA2iWGt7-mLy50Y-7r3QwCb8tviQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                display: 'flex',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                var currentUrl =
                                                    window.location.href
                                                dl.functions.common.copyToClipboard(
                                                    currentUrl
                                                )
                                            }}
                                        ></div>

                                        <div
                                            id="t18_885_6520"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 7.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_885_6521"
                                                style={{
                                                    height: 35,
                                                    width: 35.197265625,
                                                    backgroundImage:
                                                        'url(https://s3-alpha-sig.figma.com/img/8fa3/4740/6d01f6e828db7c3f2bcfc25116a1fc72?Expires=1691971200&Signature=OSkUPNjIEPJogP2zV-rZx6JuYf3xUBxba6GyMei8o1gib3wmEOwEfz4Q28O5wWUW~tnwiBQZlJWf08woZAYsy5Kk2YuFiMn~2QMv47B0eGeFcxJavkRckIZgWSNhD0oTJbbHS5OOiPV01EIfniiDBrh~zqS1hV78hXgcIUCJhudfpi9JjZ-kPkUc7j8K~5FMFevTzVcs6KutimI0Aw9~oGkjE8XWm78cF3BwMBkOEA~qYqIRtIn7K~rJXt5Zt~kIShXulU6IDb1b7xsd49AGF-MyoXb6rp3-9RcTUBGoOxh~MgzNIyx3VEv7nwN~et0JCDttKBqOqne0~SMIWdYXBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat:
                                                        'no-repeat',
                                                    backgroundPosition:
                                                        'center',
                                                    display: 'flex',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var currentUrl =
                                                        window.location.href
                                                    dl.functions.common.socialShare.shareOnFacebook(
                                                        currentUrl
                                                    )
                                                }}
                                            ></div>

                                            <div
                                                id="t18_885_6522"
                                                style={{
                                                    height: 35,
                                                    width: 35,
                                                    backgroundImage:
                                                        'url(https://s3-alpha-sig.figma.com/img/bd65/5849/9b2dd4031bff9c63be376aa799140db8?Expires=1691971200&Signature=MnVOIkYDBjyQjdsHwkDnVXtCwbbYVIhiO-vKQQ7VQu-PZJnl2WbLs9U0AQofdW2eb5B34-IUf9dmthuW75fvtBcN2xfnpslg0fYHfr~ENb3A-phn47QVcbCnqxpFDqiW3C3E5QhRim3IPsiF~qByfwyq6zLxt-Z2Sbyjas7JSPwFHdjRPEZx4ZlnkcKbs8AIMMK~mW67Yf-m5nmlkqwNkSq0B3UgP8l6hAL-a2s3ZVNtEeBXLfHqWVXYHAT1toVaKOH9F4rFYcSKGpeV9MWb0LJVERfAFFVAyXRUh3s0L0DdGb4LBx8ylGBXPFH3e1tYDzmBh6SZVG4xUQVj4d53WA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat:
                                                        'no-repeat',
                                                    backgroundPosition:
                                                        'center',
                                                    display: 'flex',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var currentUrl =
                                                        window.location.href
                                                    dl.functions.common.socialShare.shareOnTwitter(
                                                        currentUrl
                                                    )
                                                }}
                                            ></div>

                                            <div
                                                id="t18_885_6523"
                                                style={{
                                                    height: 35,
                                                    width: 35,
                                                    backgroundImage:
                                                        'url(https://s3-alpha-sig.figma.com/img/20db/ac5f/19b318467825cab30d82beeba5ecf0f5?Expires=1691971200&Signature=ikeCLR13omHKqFbCBkfgIi5IUEFwzmRL-X7GeDt-k1j-AMLM8-~lwu5OESlWKi1FqvVQ5zm0a2KSuQRYQ7sx~EeV0PWuKTuxThsHmnYRML7BwNHnZhi1jkdL56~hKM8j2XkdxC9khwCU31BxsaKj9IqRzqIpTBxZUYvxfMJl4oJ~j2gdeLxXL8rNHRyz2j3dGAOx-Ar69R~0eH8ZZMOm26L5sFLOvezZ7YKs8Y8ijOCCDnjvNvBiy3hTKHEV1XGpyjOF59edfmpj~cAraWcO9UngjddEk4SHZZDbZSP1mPXrucmhNSvcCKHhc3MG9DGzzC7YdlIt79LDUHSKxVsdAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat:
                                                        'no-repeat',
                                                    backgroundPosition:
                                                        'center',
                                                    display: 'flex',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var currentUrl =
                                                        window.location.href
                                                    dl.functions.common.socialShare.shareOnWhatsApp(
                                                        currentUrl
                                                    )
                                                }}
                                            ></div>

                                            <div
                                                id="t18_885_6524"
                                                style={{
                                                    height: 35,
                                                    width: 35,
                                                    backgroundImage:
                                                        'url(https://s3-alpha-sig.figma.com/img/e86c/48dd/c088030901d67185e08894cf29978459?Expires=1691971200&Signature=jiYMsy4JfVnRBM6NoRoHFiJvKe2Q3yzSKbZ~kp5XKv-8V8w30N3d-wmr~lYzYeH4SyLziz7R3JL0WuWJWxKxYptirYbVjRGwJzV5GBS3g9b9De5v4-iZ9bPLfqYT3jJ8YHf1EQ1qFio~fePWoXucqUtGrJ1G3R21nEIta~4Hk~e~UAT5snAfh8iOmFCynSs5zPjycq~Zf8TVxcbtSQy~T0Bw09Zk4GBCzf3NLKQAUYZ0AHAqZoM9BasuDRrRWGl7cvD5IZCwP3r3yTEC99Qo5tJsgMYJYpwI5QFLvPexhHJ7fp6YhfuBvwYKQk00DQmlhx85S4Vx7tOEdL6hXMmy0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat:
                                                        'no-repeat',
                                                    backgroundPosition:
                                                        'center',
                                                    display: 'flex',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var currentUrl =
                                                        window.location.href
                                                    dl.functions.common.socialShare.shareOnLinkedIn(
                                                        currentUrl
                                                    )
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        width: 806,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 0,
                                    }}
                                >
                                    {
                                        <div
                                            style={{ width: '100%' }}
                                            dangerouslySetInnerHTML={{
                                                __html: dl.changes.blogDetail
                                                    .description,
                                            }}
                                        />
                                    }
                                </div>
                            </div>

                            <div
                                id="t18_52_411"
                                style={{
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
                                    id="t18_52_390"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 30,
                                    }}
                                >
                                    <div
                                        id="t18_52_389"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 12,
                                        }}
                                    >
                                        <div
                                            id="t18_52_383"
                                            style={{
                                                width: 778,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 53,
                                                paddingBottom: 13,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderBottomWidth: 1,
                                                borderStyle: 'solid',
                                                marginTop: 0,
                                                marginBottom: 22,
                                            }}
                                        >
                                            <span
                                                id="t18_52_380"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    color: 'rgba(112,112,112,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '24.204544067382812px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {dl.changes.noOfComments}
                                            </span>
                                        </div>

                                        <textarea
                                            id="t18_52_384"
                                            placeholder="Write a comment"
                                            style={{
                                                height: 98,
                                                width: 756,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 32,
                                                paddingRight: 10,
                                                paddingTop: 12,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 22,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                                itemSpacing: 10,
                                                fontFamily: 'Raleway',
                                                fontSize: 17,
                                                color: 'rgba(184,178,178,1)',
                                                fontWeight: 400,
                                                textAlign: 'left',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value
                                                dl.changes.newComment = val
                                            }}
                                        ></textarea>
                                    </div>

                                    <div
                                        id="t18_52_388"
                                        style={{
                                            width: 798,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_52_385"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 14.5,
                                            }}
                                        >
                                            Cancel
                                        </span>

                                        <div
                                            id="t18_52_387"
                                            style={{
                                                height: 14,
                                                width: 93,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(244,186,84,1.00)',
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
                                                marginLeft: 14.5,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                var userToken =
                                                    dl.functions.common.getCookie(
                                                        'userToken'
                                                    )
                                                if (userToken) {
                                                    var params =
                                                        dl.functions.common.getParams()
                                                    var blogId = params.blogId

                                                    var body = {
                                                        comment:
                                                            dl.changes
                                                                .newComment,
                                                        blogId: blogId,
                                                    }
                                                    dl.functions.createBlogComment(
                                                        body
                                                    )
                                                } else {
                                                    dl.functions.modalsPlugin.openModal(
                                                        'loginLg'
                                                    )
                                                }
                                            }}
                                        >
                                            <span
                                                id="t18_52_386"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    color: 'rgba(38,50,56,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Publish
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_52_410"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 30,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        {dl.changes.blogComments.map(
                                            (item, index) => {
                                                return (
                                                    <div>
                                                        <MmComment
                                                            {...item}
                                                            {...dl.changes
                                                                .blogComments}
                                                            onClickDelete={(
                                                                val
                                                            ) => {
                                                                const run =
                                                                    async () => {
                                                                        var commentId =
                                                                            dl
                                                                                .changes
                                                                                .blogComments[
                                                                                index
                                                                            ]
                                                                                .commentId
                                                                        var body =
                                                                            {
                                                                                id: commentId,
                                                                            }
                                                                        var res =
                                                                            await dl.functions.deleteBlogComment(
                                                                                body
                                                                            )
                                                                        // alert(commentId)
                                                                    }
                                                                run()
                                                            }}
                                                            onClickReport={(
                                                                val
                                                            ) => {
                                                                var userToken =
                                                                    dl.functions.common.getCookie(
                                                                        'userToken'
                                                                    )
                                                                const run =
                                                                    async () => {
                                                                        if (
                                                                            userToken
                                                                        ) {
                                                                            var commentId =
                                                                                dl
                                                                                    .changes
                                                                                    .blogComments[
                                                                                    index
                                                                                ]
                                                                                    .commentId
                                                                            var body =
                                                                                {
                                                                                    id: commentId,
                                                                                    status: 'active',
                                                                                }
                                                                            var res =
                                                                                await dl.functions.reportBlogComment(
                                                                                    body
                                                                                )
                                                                        } else {
                                                                            alert(
                                                                                'You need to login'
                                                                            )
                                                                        }
                                                                    }
                                                                run()
                                                            }}
                                                        />
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_52_416"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 42.5,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_52_413"
                                style={{
                                    height: 207,
                                    width: 355,
                                    backgroundImage:
                                        dl.changes.addSpaces.BlogDetailsAd1.lg,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    if (
                                        dl.changes.addSpaces['BlogDetailsAd1']
                                            .redirectURL
                                    ) {
                                        window.open(
                                            dl.changes.addSpaces[
                                                'BlogDetailsAd1'
                                            ].redirectURL,
                                            '_blank'
                                        )
                                    }
                                    // alert(JSON.stringify(dl.changes.addSpaces["BlogDetailsAd1"]))
                                }}
                            ></div>

                            <div
                                id="t18_52_414"
                                style={{
                                    height: 710,
                                    width: 355,
                                    backgroundImage:
                                        dl.changes.addSpaces.BlogDetailsAd2.lg,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 15.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    if (
                                        dl.changes.addSpaces['BlogDetailsAd2']
                                            .redirectURL
                                    ) {
                                        window.open(
                                            dl.changes.addSpaces[
                                                'BlogDetailsAd2'
                                            ].redirectURL,
                                            '_blank'
                                        )
                                    }
                                }}
                            ></div>
                        </div>
                    </div>

                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Bloglisti_1
