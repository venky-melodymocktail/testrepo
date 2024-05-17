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
} from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'

import MMFilterHorizantal from '../../components/main/MMFilterHorizantal.jsx'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import _ from 'lodash'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const Blogs_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_541_163')
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
                backgroundColor: '#fff',
            }}
        >
            <div
                id="t18_541_163"
                style={{
                    // height: 1968,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 30,
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
                    id="t18_165_535"
                    style={{
                        width: 1420,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        // paddingLeft: 10,
                        // paddingRight: 10,
                        paddingTop: 73,
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
                        id="t18_916_10406"
                        style={{
                            height: 70,
                            width: 1119,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 27,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 4,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_916_10407"
                            style={{
                                width: 1001,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10408"
                                    style={{
                                        height: 28,
                                        width: 28,
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
                                id="t18_916_10409"
                                placeholder="Search Blogs"
                                value={dl.changes.blogSearchString}
                                style={{
                                    height: 52,
                                    width: 963,
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
                                    fontSize: 20,
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
                            id="t18_916_10411"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 9,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10412"
                                    style={{
                                        height: 20,
                                        width: 20,
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
                            id="t18_916_10413"
                            style={{
                                height: 35,
                                width: 35,
                                borderRadius: 50,
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
                                marginLeft: 9,
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
                                    id="t18_916_10414"
                                    style={{
                                        height: 31,
                                        width: 31,
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
                    <div
                        style={{
                            width: '95%',
                            marginTop: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        {/* <FormControl
                            sx={{
                                width: 200,
                                // height: 45,
                                marginRight: 1,
                                padding: '0px',
                                // padding: 0,
                            }}
                            size="small"
                            error
                        >
                            <InputLabel id="demo-multiple-name-label">
                                Categories
                            </InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={
                                    dl.changes.blogsFilter[0].selected
                                        ? dl.changes.blogsFilter[0].selected
                                        : []
                                }
                                onChange={(event) => {
                                    const {
                                        target: { value },
                                    } = event
                                    var val =
                                        typeof value === 'string'
                                            ? value.split(',')
                                            : value

                                    // console.log(val)
                                    dl.changes.blogsFilter[0].selected = val
                                    for (
                                        var i = 0;
                                        i <
                                        dl.changes.blogsFilter[0].options
                                            .length;
                                        i++
                                    ) {
                                        dl.changes.blogsFilter[0].options[
                                            i
                                        ].selected = false
                                    }
                                    for (var obj in val) {
                                        console.log(val[obj])
                                        var optionSelected = val[obj]
                                        // dl.changes.blogsFilter[0].selected.
                                        var index = _.findIndex(
                                            dl.changes.blogsFilter[0].options,
                                            {
                                                name: optionSelected,
                                            }
                                        )
                                        dl.changes.blogsFilter[0].options[
                                            index
                                        ].selected = true
                                    }

                                    dl.functions.applyBlogFilter()
                                    dl.functions.getBlogSubcategory()
                                }}
                                input={<OutlinedInput label="Categories" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {dl.changes.blogsFilter[0].options.map(
                                    (option, optionIndex) => (
                                        <MenuItem
                                            sx={{
                                                fontSize: '14px',
                                            }}
                                            key={option.name}
                                            value={option.name}
                                        >
                                            <Checkbox
                                                checked={option.selected}
                                                sx={{
                                                    color: 'gery',
                                                    '&.Mui-checked': {
                                                        color: 'rgb(186, 15, 23)',
                                                    },
                                                }}
                                            />
                                            <ListItemText
                                                primary={option.name}
                                            />
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl> */}
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
                                width: '200px',
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
                                        fontSize: '18px',
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
                                    width: 200,
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
                                                            fontSize: '18px',
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
                                    width: '200px',
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
                                        fontSize: '18px',
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
                                    width: 200,
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
                                                            fontSize: '18px',
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
                </div>

                <div
                    id="t18_165_540"
                    style={{
                        maxWidth: 1440,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    {/* <MMFilter
                        dataSource={dl.changes.blogsFilter}
                        onChange={(val) => {
                            dl.changes.blogsFilter = val
                            dl.functions.applyBlogFilter()
                        }}
                    /> */}

                    <div
                        id="t18_165_588"
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderLeftWidth: 1,
                            borderStyle: 'solid',
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_165_589"
                            style={{
                                width: '95%',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 30,
                                paddingBottom: 40,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
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
                                                        dl.changes.blogsList[
                                                            index
                                                        ]._id
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
                            id="t18_1025_461"
                            style={{
                                height: 397,
                                width: '95%',
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
                                id="t18_1025_462"
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
                                        id="t18_1025_463"
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
                                    id="t18_1025_464"
                                    style={{
                                        height: 65,
                                        width: 254,
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
                                        id="t18_1025_465"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 2.5,
                                        }}
                                    >
                                        No records found
                                    </span>

                                    <div
                                        id="t18_1025_466"
                                        style={{
                                            height: 38,
                                            width: 254,
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
                                            id="t18_1025_467"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: 'rgba(167,167,167,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            We can’t find any item matching your
                                            search
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_541_159"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                                width: '100%',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                id="t18_165_645"
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    // paddingLeft: 60,
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderTopWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        var run = async () => {
                                            dl.changes.paginationState.active =
                                                val
                                            var page = String(val)
                                            var res =
                                                await dl.functions.getBlogs(
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
                        </div>
                    </div>
                </div>

                <div
                    id="t18_166_679"
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
                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Blogs_1
