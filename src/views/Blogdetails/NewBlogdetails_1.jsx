import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state.js'
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
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmCommentS from '../../components/MmCommentS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmBlogCommentS from '../../components/MmBlogCommentS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmCommentXs from '../../components/MmCommentXs.jsx'
import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet'
import ViatorWidget from '../../components/ViatorWidget.jsx'
import rehypeRaw from 'rehype-raw'
import rehypeReact from 'rehype-react'
import remarkGfm from 'remark-gfm'
import ViataBanner from '../../components/ViataBanner.jsx'

console.log(dl.changes.blogDetail.description)

const NewBlogdetails_1 = observer(() => {
    useEffect(async () => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_180_1340')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
            }
        }

        // console.log(dl.changes.blogDetail.title)
        // console.log(blogId)

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        // var params = dl.functions.common.getParams()
        // var blogId = params.blogId

        // await dl.functions.getBlogDetail(blogId)
        // Setmeta(true)

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
            }}
        >
            {/* {meta ? ( */}
            <Helmet>
                <meta
                    name="description"
                    content="This is a description of my page"
                />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Your Name" />
                <meta
                    property="og:title"
                    content={dl.changes.blogDetail.title}
                />
                <meta
                    property="og:description"
                    content={dl.changes.blogDetail.description}
                />
                {/* <meta property="og:image:type" content="image/jpeg" /> */}
                <meta
                    property="og:image"
                    content={dl.changes.blogDetail.mainImage}
                />
                <meta
                    property="og:url"
                    content="https://testing.melodymocktail.com/blogdetails"
                />
                <meta
                    name="twitter:title"
                    content={dl.changes.blogDetail.title}
                />
                <meta
                    name="twitter:description"
                    content={dl.changes.blogDetail.description}
                />
                <meta
                    name="twitter:image"
                    content={dl.changes.blogDetail.mainImage}
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            {/* ) : null} */}

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
                    marginTop: 0,
                    marginBottom: 0,
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
                    onClickServices={(val) => {
                        dl.functions.common.goToDivId('4:346')
                    }}
                    onClickBlogs={(val) => {
                        dl.functions.common.goToDivId('4:412')
                    }}
                    onClickAboutUs={(val) => {
                        dl.functions.common.goToDivId('4:481')
                    }}
                    onClickContactUs={(val) => {
                        dl.functions.common.goToDivId('4:481')
                    }}
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
                        style={{
                            width: 1440,
                            height: 350,
                            backgroundImage: `url(${dl.changes.blogDetail.titleImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            position: 'absolute',
                            top: 0,
                        }}
                    ></div>
                    <div
                        id="t18_52_417"
                        style={{
                            width: 1246,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 300,
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
                                overflow: 'hidden',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 42.5,
                            }}
                        >
                            <div
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
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 150,
                                            height: 150,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: 5,
                                            backgroundImage: `url(${dl.changes.blogDetail.mainImage})`,
                                            marginRight: '50px',
                                        }}
                                    ></div>
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
                                            marginTop: 40,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                        '' ? (
                                            <img
                                                className="hoverZoom-1x5"
                                                id="t18_885_6519"
                                                style={{
                                                    height: 35,
                                                    width: 35,
                                                    display: 'flex',
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
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_885_6521"
                                                    className="hoverZoom-1x5"
                                                    style={{
                                                        height: 35,
                                                        width: 35.197265625,
                                                        display: 'flex',
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
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_885_6522"
                                                    className="hoverZoom-1x5"
                                                    style={{
                                                        height: 35,
                                                        width: 35,
                                                        display: 'flex',
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
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_885_6523"
                                                    className="hoverZoom-1x5"
                                                    style={{
                                                        height: 35,
                                                        width: 35,
                                                        display: 'flex',
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
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_885_6524"
                                                    className="hoverZoom-1x5"
                                                    style={{
                                                        height: 35,
                                                        width: 35,
                                                        display: 'flex',
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
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

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
                                        marginTop: 20,
                                        marginBottom: 7,
                                    }}
                                >
                                    {dl.changes.blogDetail.title}
                                </span>
                                <div
                                    style={{
                                        width: 806,
                                        flexDirection: 'column',
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
                                    {/* {
                                        <div
                                            style={{ width: '100%' }}
                                            dangerouslySetInnerHTML={{
                                                __html: dl.changes.blogDetail.description
                                            }}
                                        />
                                    } */}
                                    {/* <Markdown
                                        rehypePlugins={[rehypeReact]}
                                        children={
                                            dl.changes.blogDetail.description
                                        }
                                        rendrenderers={renderers}
                                    /> */}
                                    <Markdown
                                        // children={}
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            code(props) {
                                                // const { node, ...rest } = props
                                                return (
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <ViatorWidget
                                                            link={props.link}
                                                            partnerId={
                                                                props.partnerId
                                                            }
                                                            wedgetref={
                                                                props.wedgetref
                                                            }
                                                        />
                                                    </div>
                                                )
                                            },
                                            img(props) {
                                                const { node, ...rest } = props
                                                return (
                                                    <img
                                                        {...props}
                                                        style={{
                                                            width: '100%',
                                                            // height: 'auto',
                                                            maxHeight: '500px',
                                                            objectFit:
                                                                'contain',
                                                        }}
                                                    />
                                                )
                                            },
                                        }}
                                    >
                                        {dl.changes.blogDetail.description}
                                    </Markdown>
                                </div>
                                {/* <div
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                    }}
                                >
                                    <ViatorWidget />
                                </div> */}

                                {/* <img
                                    style={{
                                        width:'100%',
                                        height:"auto"
                                    }}
                                    // src='https://images.unsplash.com/photo-1711810805616-565b5f277d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                /> */}
                            </div>

                            {/* /////////////////////////////////////////////////// */}
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
                                            value={dl.changes.newComment}
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
                                                fontFamily: 'Inter',
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
                                            onClick={() => {
                                                dl.changes.newComment = ''
                                            }}
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
                                                cursor: 'pointer',
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
                                                    var blogId = 2

                                                    var body = {
                                                        comment:
                                                            dl.changes
                                                                .newComment,
                                                        blogId: blogId,
                                                    }
                                                    if (body.comment == '') {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'errorGeneric'
                                                        )
                                                        dl.changes.errorGenericMessages =
                                                            'Plese Enter your comment'
                                                    } else {
                                                        dl.functions.createBlogComment(
                                                            body
                                                        )
                                                    }
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
                                            justifyContent: 'center',
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
                                                                // var userToken = dl.functions.common.getCookie("userToken")
                                                                // const run = async() => {
                                                                //     if(userToken){
                                                                //         var commentId = dl.changes.blogComments[index].commentId
                                                                //         var body = {
                                                                //             "id": commentId,
                                                                //             "status": "active"
                                                                //         }
                                                                //         var res = await dl.functions.reportBlogComment(body)
                                                                //     }
                                                                //     else{
                                                                //         alert("You need to login")
                                                                //     }
                                                                // }
                                                                // run()
                                                                dl.functions.onReport(
                                                                    dl.changes
                                                                        .blogComments[
                                                                        index
                                                                    ].commentId,
                                                                    'blogcomments',
                                                                    'large'
                                                                )
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
                                paddingTop: 100,
                            }}
                        >
                            {dl.changes.addSpaces.BlogDetailsAd1.lg
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_52_413"
                                    style={{
                                        height: 207,
                                        width: 355,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'BlogDetailsAd1'
                                            ].redirectURL
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
                                    src={dl.changes.addSpaces.BlogDetailsAd1.lg
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}

                            {dl.changes.addSpaces.BlogDetailsAd2.lg
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_52_414"
                                    style={{
                                        height: 710,
                                        width: 355,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 15.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'BlogDetailsAd2'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'BlogDetailsAd2'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.BlogDetailsAd2.lg
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}

                            {dl.changes.blogDetail.banner ? (
                                <div
                                    style={{
                                        width: 355,
                                        position: 'sticky',
                                        top: '150px',
                                        zIndex: 50,
                                    }}
                                >
                                    <Markdown
                                        // children={}
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            code(props) {
                                                // const { node, ...rest } = props
                                                return (
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <ViataBanner />
                                                    </div>
                                                )
                                            },
                                        }}
                                    >
                                        {dl.changes.blogDetail.banner}
                                    </Markdown>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {dl.changes.blogDetail.banner ? (
                        <div
                            style={{
                                width: 355,
                                position: 'sticky',
                                top: '150px',
                                // zIndex: 50,
                            }}
                        >
                            <Markdown
                                // children={}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code(props) {
                                        // const { node, ...rest } = props
                                        return (
                                            <div
                                                style={{
                                                    width: '100%',
                                                }}
                                            >
                                                <ViataBanner />
                                            </div>
                                        )
                                    },
                                }}
                            >
                                {dl.changes.blogDetail.banner}
                            </Markdown>
                        </div>
                    ) : null}
                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default NewBlogdetails_1
