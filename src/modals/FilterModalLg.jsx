import React, { useEffect } from 'react'
import dl from '../datalayer/state'
import Modal from '@mui/material/Modal'
import { observer } from 'mobx-react'
import OtpInput from 'react-otp-input'
import Lottie from 'react-lottie'
import ReCAPTCHA from 'react-google-recaptcha'

import { useState } from 'react'
import MaterialSwitch from '../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../components/main/MaterialSelect.jsx'
import ReactDraft from '../components/main/ReactDraft.jsx'
import MaterialMenu from '../components/main/MaterialMenu.jsx'
import MMPagination from '../components/main/MMPagination.jsx'
import MMFilter from '../components/main/MMFilter.jsx'
import MaterialDate from '../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../components/main/MaterialRating.jsx'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'

const colors = ['#f0f7fc', '#f0fcf1', '#fcf0f1']

const FilterModalLg = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(dl.modalsStatus['FilterLgModal'])
    useEffect(() => {
        if (!dl.modalsStatus['FilterLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['FilterLgModal']])

    const closeModal = () => {
        // setAnim('exitModalLeft')
        setTimeout(() => {
            dl.modalsStatus['FilterLgModal'] = false
            setAnim('')
            setShowModal(false)
        }, 750)
    }

    const clearAll = () => {
        var filters = dl.changes.universalFilter
        for (var i = 0; i < filters.length; i++) {
            // let options = filters[i].options;

            for (var j = 0; j < filters[i].options.length; j++) {
                filters[i].options[j].selected = false
            }
        }
        closeModal() // alert(JSON.stringify(filters))
        // props.onChange && props.onChange(state.dataSource)
    }

    return (
        <Modal
            className={anim}
            open={showModal}
            // open={true}
            disableAutoFocus={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => {
                closeModal()
            }}
        >
            <div
                className="popupModal"
                style={{
                    position: 'absolute',

                    top: '15vh',
                    left: '20%',

                    // height: '100vh',

                    backgroundColor: 'rgba(255,255,255,1.00)',

                    overflow: 'scroll',
                    // height:'70vh',
                    minHeight: '30vh',
                    maxHeight: '70vh',
                    width: '60%',
                    borderRadius: 20,
                    paddingBottom: 0,
                }}
            >
                <div
                    id="t18_1940_2"
                    style={{
                        height: '40px',
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        // paddingRight: 50,
                        position: 'fixed',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: '1px',
                        borderStyle: 'solid',
                        marginTop: 0,
                        marginBottom: 5,
                        backgroundColor: 'white',
                        paddingTop: 18,
                        zIndex: 100,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                >
                    <div
                        onClick={() => {
                            // dl.changes.universalFilter = dl.changes.offeredroomFilter
                            // dl.functions.modalsPlugin.openModal('filterLg')
                        }}
                        style={{
                            margin: 0,
                            width: 100,
                            height: 48,
                            paddingLeft: '20px',
                            paddingRight: '10px',
                            boxShadow: 'none',
                            // border: "1px solid rgba(207,206,206,1)",
                            // borderRadius:4,
                            marginLeft: '10px',
                            // backgroundColor:"white",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FilterListIcon
                            sx={{
                                color: '#b02a23',
                                fontSize: 25,
                                fontWeight: '700',
                            }}
                        />
                        <p
                            style={{
                                color: 'black',
                                fontSize: 22,
                                fontWeight: '700',
                                marginLeft: 10,
                            }}
                        >
                            Filters
                        </p>
                    </div>
                    <div
                        onClick={() => {
                            clearAll()
                        }}
                        style={{ cursor: 'pointer', marginRight: 30 }}
                    >
                        <span
                            style={{
                                fontSize: 17,
                                color: 'rgba(186,15,23,1)',
                                fontFamily: 'Inter',
                                fontWeight: '600',
                            }}
                        >
                            CLEAR ALL
                        </span>
                    </div>
                    {/* <>
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png' !=
                        '' ? (
                            <img
                                id="t18_1940_4"
                                style={{
                                    height: '15px',
                                    width: '15px',
                                    display: 'flex',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                    minWidth: '15px',
                                    marginRight:"20px"
                                }}
                                onClick={(e) => {
                                    dl.functions.modalsPlugin.closeModal(
                                        'filterLg'
                                    )
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}
                        </> */}
                </div>
                <div
                    id="t18_1641_199"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingBottom: 70,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginTop: '0px',
                        paddingTop: 50,
                    }}
                >
                    {/* <MMFilter
                        dataSource={dl.changes.universalFilter}
                        onChange={(val) => {
                            dl.functions.applyUniversalFilter()
                        }}
                    /> */}
                    <div
                        className="container"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: '90%',
                            overflowX: 'scroll',
                            // backgroundColor:"#dce3e2",
                            alignItems: 'center',
                            paddingLeft: '5%',
                        }}
                    >
                        {dl.changes.universalFilter.map((item, index) => {
                            return (
                                <div
                                    style={{
                                        width: '98%',
                                        // paddingRight:"2.5%",
                                        // height:60,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'white',
                                        paddingTop: 5,
                                        // marginTop:10
                                    }}
                                >
                                    <Accordion
                                        // defaultExpanded={item.open}
                                        defaultExpanded={true}
                                        disableGutters
                                        sx={{
                                            margin: 0,
                                            width: '100%',
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            boxShadow: 'none',
                                            // border: '1px solid rgba(207,206,206,1)',
                                            borderTopLeftRadius: '5px',
                                            borderTopRightRadius: '5px',
                                            borderBottomLeftRadius: '5px',
                                            borderBottomRightRadius: '5px',
                                            // marginLeft: '30px',
                                            marginTop: '15px',
                                        }}
                                    >
                                        <AccordionSummary
                                            // expandIcon={
                                            //     <ExpandMoreIcon
                                            //         sx={{
                                            //             color: '#b02a23',
                                            //             fontSize: 18,
                                            //             fontWeight: '700',
                                            //         }}
                                            //     />
                                            // }
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <div
                                                style={{
                                                    fontSize: '18px',
                                                    color: 'black',
                                                    fontWeight: '600',
                                                    fontFamily: 'Inter',
                                                    width: '90%',
                                                }}
                                            >
                                                {item.filterName}
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            style={{
                                                // zIndex: 100,
                                                backgroundColor:
                                                    index < 3
                                                        ? colors[index]
                                                        : colors[index % 3],
                                                // borderWidth: '1px',
                                                // borderStyle: 'solid',
                                                width: '98%',
                                                // borderColor: 'rgba(207,206,206,0.8)',
                                                borderRadius: 4,
                                                marginRight: -20,
                                                // position: 'fixed',
                                                marginBottom: 10,
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            {item.options.map(
                                                (option, optionIndex) => {
                                                    return (
                                                        <div
                                                            onClick={() => {
                                                                var filters =
                                                                    dl.changes
                                                                        .universalFilter
                                                                for (
                                                                    var i = 0;
                                                                    i <
                                                                    filters.length;
                                                                    i++
                                                                ) {
                                                                    // let options = filters[i].options;

                                                                    if (
                                                                        i ==
                                                                        index
                                                                    ) {
                                                                        for (
                                                                            var j = 0;
                                                                            j <
                                                                            filters[
                                                                                i
                                                                            ]
                                                                                .options
                                                                                .length;
                                                                            j++
                                                                        ) {
                                                                            filters[
                                                                                i
                                                                            ].options[
                                                                                j
                                                                            ].selected =
                                                                                false
                                                                            if (
                                                                                j ==
                                                                                optionIndex
                                                                            ) {
                                                                                filters[
                                                                                    i
                                                                                ].options[
                                                                                    j
                                                                                ].selected =
                                                                                    !filters[
                                                                                        i
                                                                                    ]
                                                                                        .options[
                                                                                        j
                                                                                    ]
                                                                                        .selected
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                let list =
                                                                    dl.changes
                                                                        .popupFilter
                                                                dl.changes[
                                                                    list
                                                                ] =
                                                                    dl.changes.universalFilter
                                                                // dl.functions.applyUniversalFilter()
                                                                // onChange(index, optionIndex)
                                                            }}
                                                            style={{
                                                                flexDirection:
                                                                    'column',
                                                                marginTop: 10,
                                                                cursor: 'pointer',
                                                                marginLeft: 0,
                                                                width: 230,
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    flexDirection:
                                                                        'row',
                                                                    display:
                                                                        'flex',
                                                                    alignItems:
                                                                        'center',
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
                                                                        fontSize:
                                                                            '18px',
                                                                        fontWeight:
                                                                            '500',
                                                                        marginLeft:
                                                                            '10px',
                                                                        fontFamily:
                                                                            'Inter',
                                                                    }}
                                                                >
                                                                    {
                                                                        option.name
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div
                    style={{
                        margin: 0,
                        width: '60%',
                        height: 70,
                        boxShadow: '0 0 15px 2px rgba(1, 1, 1, 0.5)',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'fixed',
                        zIndex: 100,
                        bottom: '13vh',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        flexDirection: 'row',
                    }}
                >
                    <div
                        style={{
                            height: 40,
                            // backgroundColor:"#ba0f17",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            marginLeft: 40,
                        }}
                        onClick={() => {
                            closeModal()
                        }}
                    >
                        <p
                            style={{
                                color: '#6f7173',
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Close
                        </p>
                    </div>

                    <div
                        style={{
                            marginRight: 20,
                        }}
                    >
                        <div
                            className=" hovereffectsignIn-btn"
                            onClick={() => {
                                dl.functions.applyUniversalFilter()
                            }}
                            style={{
                                width: 150,
                                height: 40,
                                backgroundColor: '#ba0f17',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                borderRadius: 5,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: 600,
                                }}
                            >
                                Apply Filter
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default FilterModalLg
