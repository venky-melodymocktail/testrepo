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
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Select,
} from '@mui/material'
import MMFilterHorizantal from '../../components/main/MMFilterHorizantal.jsx'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Blogs_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_521_791')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
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
                backgroundColor: 'rgba(255,255,255,1.00)',
            }}
        >
            <div
                id="t18_521_791"
                style={{
                    width: 900,
                    backgroundColor: 'rgba(255,255,255,1.00)',
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
                <MmHeaderMd
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
                    }}
                    onClickMenu={(val) => {
                        dl.functions.modalsPlugin.openModal('navigationMd')
                    }}
                    onLogIn={(val) => {
                        dl.functions.viewsPlugin.showView('login')
                    }}
                    onClickProfile={(val) => {
                        dl.functions.viewsPlugin.showView('profile')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                />

                <div
                    id="t18_521_840"
                    style={{
                        height: 45,
                        width: 880,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 50,
                        paddingBottom: 50,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_916_10397"
                        style={{
                            height: 59,
                            width: 672,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 27,
                            paddingRight: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 3,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_916_10398"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10399"
                                    style={{
                                        height: 21,
                                        width: 21,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <input
                                id="t18_916_10400"
                                placeholder="Search Blogs"
                                value={dl.changes.blogSearchString}
                                style={{
                                    height: 40,
                                    width: 559,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    color: 'rgba(113,113,113,1)',
                                    fontWeight: 400,
                                    textAlign: 'left',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.blogSearchString = val
                                }}
                                type="text"
                            ></input>
                        </div>

                        <div
                            id="t18_916_10402"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10403"
                                    style={{
                                        height: 15,
                                        width: 15,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.blogSearchString = ''
                                        dl.functions.searchBlog(
                                            dl.changes.blogSearchString
                                        )
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_916_10404"
                            style={{
                                height: '35px',
                                width: '35px',
                                borderRadius: 50,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: '13px',
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var run = async () => {
                                    var res = await dl.functions.searchBlog(
                                        dl.changes.blogSearchString
                                    )
                                    // alert(JSON.stringify(res))
                                }

                                run()
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10405"
                                    style={{
                                        height: 23,
                                        width: 23,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_1683_102"
                    style={{
                        width: 816,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 34,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        style={{
                            width: '95%',
                            marginTop: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <Accordion
                            // defaultExpanded={item.open ? true : false}
                            // defaultExpanded={false}
                            expanded={dl.changes.blogsFilter[0].open}
                            onChange={() => {
                                // for (
                                //     var i = 0;
                                //     i < dl.changes.blogsFilter[0].length;
                                //     i++
                                // ) {
                                //     if (index == i) {
                                //         null
                                //     } else {
                                //         dl.changes.blogsFilter[0].open = false
                                //     }
                                // }
                                dl.changes.blogsFilter[0].open =
                                    !dl.changes.blogsFilter[0].open
                                console.log(dl.changes.blogsFilter[0].open)
                            }}
                            disableGutters
                            sx={{
                                margin: 0,
                                width: '150px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                boxShadow: 'none',
                                border: '1px solid rgba(207,206,206,1)',
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px',
                                borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px',
                                marginRight: '20px',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: '#b02a23',
                                            fontSize: 18,
                                            fontWeight: '700',
                                            // marginLeft:'10px'
                                        }}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div
                                    style={{
                                        fontSize: '16px',
                                        color: 'black',
                                        fontWeight: '600',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        marginRight: '10px',
                                    }}
                                >
                                    {dl.changes.blogsFilter[0].filterName}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                style={{
                                    zIndex: 100,
                                    backgroundColor: 'white',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    width: 150,
                                    borderColor: 'rgba(207,206,206,0.8)',
                                    borderRadius: 4,
                                    // marginRight: -0,
                                    position: 'fixed',
                                }}
                            >
                                {dl.changes.blogsFilter[0].options.map(
                                    (option, optionIndex) => {
                                        return (
                                            <div
                                                onClick={() => {
                                                    // onChange(index, optionIndex)
                                                    for (
                                                        var i = 0;
                                                        i <
                                                        dl.changes
                                                            .blogsFilter[0]
                                                            .options.length;
                                                        i++
                                                    ) {
                                                        if (i != optionIndex) {
                                                            dl.changes.blogsFilter[0].options[
                                                                i
                                                            ].selected = false
                                                        }
                                                    }
                                                    dl.changes.blogsFilter[0].options[
                                                        optionIndex
                                                    ].selected =
                                                        !dl.changes
                                                            .blogsFilter[0]
                                                            .options[
                                                            optionIndex
                                                        ].selected
                                                    // dl.changes.blogsFilter = index
                                                    dl.functions.applyBlogFilter()
                                                    dl.functions.getBlogSubcategory(
                                                        option.name
                                                    )
                                                    dl.changes.blogsFilter[0].open =
                                                        !dl.changes
                                                            .blogsFilter[0].open
                                                }}
                                                style={{
                                                    flexDirection: 'column',
                                                    marginTop: 5,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        flexDirection: 'row',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {option.selected ? (
                                                        <div
                                                            style={{
                                                                width: '16px',
                                                                height: '16px',
                                                                borderRadius:
                                                                    '8px',
                                                                backgroundColor:
                                                                    'rgba(186,15,23,1)',
                                                            }}
                                                        ></div>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: '14px',
                                                                height: '14px',
                                                                borderRadius:
                                                                    '7px',
                                                                borderWidth:
                                                                    '1px',
                                                                borderColor:
                                                                    '#8a8988',
                                                                borderStyle:
                                                                    'solid',
                                                            }}
                                                        ></div>
                                                    )}

                                                    <div
                                                        style={{
                                                            color: '#575653',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            marginLeft: '10px',
                                                            fontFamily: 'Inter',
                                                        }}
                                                    >
                                                        {option.name}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </AccordionDetails>
                        </Accordion>
                        {/* subcategory selector */}
                        <Accordion
                            // defaultExpanded={item.open ? true : false}
                            // defaultExpanded={false}
                            disabled={
                                dl.changes.blogsFilter[1].options.length > 0
                                    ? false
                                    : true
                            }
                            expanded={dl.changes.blogsFilter[1].open}
                            onChange={() => {
                                // for (
                                //     var i = 0;
                                //     i < dl.changes.blogsFilter[0].length;
                                //     i++
                                // ) {
                                //     if (index == i) {
                                //         null
                                //     } else {
                                //         dl.changes.blogsFilter[0].open = false
                                //     }
                                // }
                                dl.changes.blogsFilter[1].open =
                                    !dl.changes.blogsFilter[1].open
                                console.log(dl.changes.blogsFilter[1].open)
                            }}
                            disableGutters
                            sx={[
                                {
                                    margin: 0,
                                    width: '150px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    boxShadow: 'none',
                                    border: '1px solid rgba(207,206,206,1)',
                                    borderTopLeftRadius: '5px',
                                    borderTopRightRadius: '5px',
                                    borderBottomLeftRadius: '5px',
                                    borderBottomRightRadius: '5px',
                                    marginRight: '20px',
                                },
                                dl.changes.blogsFilter[1].options.length > 0
                                    ? { cursor: 'pointer' }
                                    : { cursor: 'not-allowed' },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: '#b02a23',
                                            fontSize: 18,
                                            fontWeight: '700',
                                            // marginLeft:'10px'
                                        }}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div
                                    style={{
                                        fontSize: '16px',
                                        color: 'black',
                                        fontWeight: '600',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        marginRight: '10px',
                                    }}
                                >
                                    {dl.changes.blogsFilter[1].filterName}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                style={{
                                    zIndex: 100,
                                    backgroundColor: 'white',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    width: 150,
                                    borderColor: 'rgba(207,206,206,0.8)',
                                    borderRadius: 4,
                                    // marginRight: -0,
                                    position: 'fixed',
                                }}
                            >
                                {dl.changes.blogsFilter[1].options.map(
                                    (option, optionIndex) => {
                                        return (
                                            <div
                                                onClick={() => {
                                                    // onChange(index, optionIndex)
                                                    for (
                                                        var i = 0;
                                                        i <
                                                        dl.changes
                                                            .blogsFilter[1]
                                                            .options.length;
                                                        i++
                                                    ) {
                                                        if (i != optionIndex) {
                                                            dl.changes.blogsFilter[1].options[
                                                                i
                                                            ].selected = false
                                                        }
                                                    }
                                                    dl.changes.blogsFilter[1].options[
                                                        optionIndex
                                                    ].selected =
                                                        !dl.changes
                                                            .blogsFilter[1]
                                                            .options[
                                                            optionIndex
                                                        ].selected
                                                    // dl.changes.blogsFilter = index
                                                    dl.functions.applyBlogFilter()
                                                    dl.changes.blogsFilter[1].open =
                                                        !dl.changes
                                                            .blogsFilter[1].open
                                                }}
                                                style={{
                                                    flexDirection: 'column',
                                                    marginTop: 5,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        flexDirection: 'row',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {option.selected ? (
                                                        <div
                                                            style={{
                                                                width: '16px',
                                                                height: '16px',
                                                                borderRadius:
                                                                    '8px',
                                                                backgroundColor:
                                                                    'rgba(186,15,23,1)',
                                                            }}
                                                        ></div>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: '14px',
                                                                height: '14px',
                                                                borderRadius:
                                                                    '7px',
                                                                borderWidth:
                                                                    '1px',
                                                                borderColor:
                                                                    '#8a8988',
                                                                borderStyle:
                                                                    'solid',
                                                            }}
                                                        ></div>
                                                    )}

                                                    <div
                                                        style={{
                                                            color: '#575653',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            marginLeft: '10px',
                                                            fontFamily: 'Inter',
                                                        }}
                                                    >
                                                        {option.name}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </AccordionDetails>
                        </Accordion>

                        <Button
                            disabled={
                                dl.changes.blogQuery.length > 0 ? false : true
                            }
                            // disabled={true}
                            onClick={() => {
                                dl.changes.blogQuery = ''
                                for (
                                    var i = 0;
                                    i <
                                    dl.changes.blogsFilter[1].options.length;
                                    i++
                                ) {
                                    dl.changes.blogsFilter[1].options[
                                        i
                                    ].selected = false
                                }

                                for (
                                    var i = 0;
                                    i <
                                    dl.changes.blogsFilter[0].options.length;
                                    i++
                                ) {
                                    dl.changes.blogsFilter[0].options[
                                        i
                                    ].selected = false
                                }
                                dl.functions.applyBlogFilter()
                            }}
                            variant="contained"
                            color="error"
                            // className="contact-btn"
                            style={{
                                margin: 0,
                                width: '100px',
                                height: 40,
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                // boxShadow: 'none',
                                // border: '1px solid rgba(207,206,206,1)',
                                border: 0,
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px',
                                borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px',
                                marginRight: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                // backgroundColor: 'rgb(186, 15, 23)',
                            }}
                        >
                            <div
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 600,
                                }}
                            >
                                Clear
                            </div>
                        </Button>

                        {/* <MMFilterHorizantal
                            dataSource={dl.changes.blogsFilter}
                            onChange={(val) => {
                                dl.changes.blogsFilter = val
                                dl.functions.applyBlogFilter()
                            }}
                        /> */}
                    </div>
                    {/* <div
                        id="t18_1683_103"
                        style={{
                            width: 141,
                            borderRadius: 7,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 7.5,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.setUniversalFilters()
                            dl.functions.modalsPlugin.openModal('filter')
                        }}
                    >
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                        '' ? (
                            <img
                                id="t18_1683_104"
                                style={{
                                    height: 12,
                                    width: 17,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_1683_105"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 20,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24.204544067382812px',
                                textAlign: 'center',
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            Filters
                        </span>
                    </div> */}

                    {/* <div
                        id="t18_1683_106"
                        style={{
                            width: 690,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
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
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.universalFiltersList.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmFilterMd
                                                {...item}
                                                {...dl.changes
                                                    .universalFiltersList}
                                                onRemove={(val) => {
                                                    dl.changes.universalFiltersList.splice(
                                                        index,
                                                        1
                                                    )
                                                    dl.changes.universalFilter[
                                                        item.filterIndex
                                                    ].options[
                                                        item.optionIndex
                                                    ].selected = false
                                                    dl.functions.applyUniversalFilter()
                                                }}
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div> */}
                </div>

                <div
                    id="t18_521_868"
                    style={{
                        width: 900,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 35,
                        paddingBottom: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {dl.changes.blogsList.map((item, index) => {
                            return (
                                <div>
                                    <MmBlogCard
                                        {...item}
                                        {...dl.changes.blogsList}
                                        onCreateBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsList',
                                                index,
                                                'blogs'
                                            )
                                        }}
                                        onRemoveBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsList',
                                                index,
                                                'blogs'
                                            )
                                        }}
                                        onClick={(val) => {
                                            var blogId =
                                                dl.changes.blogsList[index]._id
                                            dl.functions.common.relativeRedirect(
                                                `blogdetails?blogId=${blogId}`,
                                                true
                                            )
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div
                    id="t18_1025_509"
                    style={{
                        height: 397,
                        width: 900,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: dl.changes.blogNoDataVisible,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1027_661"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png' !=
                        '' ? (
                            <img
                                id="t18_1025_510"
                                style={{
                                    height: 236,
                                    width: 365,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_1025_511"
                            style={{
                                height: 58,
                                width: 211,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1025_512"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                No records found
                            </span>

                            <div
                                id="t18_1025_513"
                                style={{
                                    height: 34,
                                    width: 211,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1025_514"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: 'rgba(167,167,167,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'center',
                                    }}
                                >
                                    We can’t find any item matching your search
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_521_879"
                    style={{
                        width: 900,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 30,
                        paddingBottom: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <MMPagination
                        total={dl.changes.paginationState.total}
                        active={dl.changes.paginationState.active}
                        onChange={(val) => {
                            var run = async () => {
                                dl.changes.paginationState.active = val
                                var page = String(val)
                                var res = await dl.functions.getBlogs(
                                    '12',
                                    '',
                                    page
                                )
                                // alert(JSON.stringify(res))
                                dl.changes.blogsList = res.result
                            }

                            run()
                        }}
                    />
                </div>

                <MmFooterMd />
            </div>
        </div>
    )
})
export default Blogs_2
