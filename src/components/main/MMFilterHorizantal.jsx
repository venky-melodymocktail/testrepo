import _ from 'lodash'
import { makeAutoObservable } from 'mobx'
import { Observer, observer } from 'mobx-react'
import React, {
    Component,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MMFilterHorizantal = (props) => {
    var state = { ...props }
    let count = props.index ? props.index : 4
    const onChange = (index, optionIndex) => {
        // state.value[filter] = val
        let isMulti = state.dataSource[index].multi
        if (!isMulti) {
            let options = state.dataSource[index]['options']
            for (var i = 0; i < options.length; i++) {
                if (i != optionIndex) {
                    options[i].selected = false
                }
            }
        }
        state.dataSource[index]['options'][optionIndex].selected =
            !state.dataSource[index]['options'][optionIndex].selected

        props.onChange && props.onChange(state.dataSource)
        // setfilter(val)
    }

    const clearAll = () => {
        var filters = state.dataSource
        for (var i = 0; i < filters.length; i++) {
            // let options = filters[i].options;

            for (var j = 0; j < filters[i].options.length; j++) {
                filters[i].options[j].selected = false
            }
        }
        // alert(JSON.stringify(filters))
        props.onChange && props.onChange(state.dataSource)
    }

    // state.style.width = 376
    const filterList = state.dataSource

    return (
        <Observer>
            {() => (
                // <div style={{}}>
                <div
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        display: 'flex',
                    }}
                >
                    {/* <div
            style={{
              width: "100%",
              border: "1px solid rgba(207,206,206,1)",
              display: "flex",
            //   justifyContent: "space-between",
              height: 102,
              alignItems: "center",
              flexDirection:"row",
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <span
              style={{
                fontSize: 17,
                color: "rgba(88,89,91,1)",
                fontFamily: "Inter",
                fontWeight: "600",
              }}
            >
              Filters
            </span>
            <div
              onClick={() => {
                clearAll();
              }}
              style={{ cursor: "pointer" }}
            >
              <span
                style={{
                  fontSize: 17,
                  color: "rgba(186,15,23,1)",
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                CLEAR ALL
              </span>
            </div>
          </div> */}
                    {filterList.map((item, index) => {
                        return (
                            // <div style={{
                            //     margin: 0,
                            //   width: 180,
                            //   paddingLeft: "10px",
                            //   paddingRight: "10px",
                            //   boxShadow: "none",
                            //   border: "1px solid rgba(207,206,206,1)",
                            //   borderRadius:"4px",
                            //   borderBottomLeftRadius:"4px",
                            //   borderBottomRightRadius:"4px",
                            //   marginLeft:"10px",
                            //   height:45,
                            //   backgroundColor:"white"
                            // }}>
                            // </div>
                            <>
                                {index >= count ? null : (
                                    <Accordion
                                        // defaultExpanded={item.open ? true : false}
                                        // defaultExpanded={false}
                                        expanded = {item.open}
                                        onChange={
                                            ()=> {
                                                for(var i=0; i<filterList.length; i++){
                                                    
                                                    if(index==i){
                                                        null
                                                    }
                                                    else{
                                                        filterList[i].open = false
                                                    }
                                                }
                                                filterList[index].open = !filterList[index].open
                                                console.log(filterList[index].open)
                                            }

                                        }
                                        disableGutters
                                        sx={{
                                            margin: 0,
                                            // width: '200px',
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
                                                    marginRight:"10px"
                                                }}
                                            >
                                                {item.filterName}
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            style={{
                                                zIndex: 100,
                                                backgroundColor: 'white',
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                width: 150,
                                                borderColor:
                                                    'rgba(207,206,206,0.8)',
                                                borderRadius: 4,
                                                marginRight: -20,
                                                position: 'fixed',
                                            }}
                                        >
                                            {item.options.map(
                                                (option, optionIndex) => {
                                                    return (
                                                        <div
                                                            onClick={() => {
                                                                onChange(
                                                                    index,
                                                                    optionIndex
                                                                )
                                                            }}
                                                            style={{
                                                                flexDirection:
                                                                    'column',
                                                                marginTop: 5,
                                                                cursor: 'pointer',
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
                                )}
                            </>
                        )
                    })}
                </div>
                // </div>
            )}
        </Observer>
    )
}
export default MMFilterHorizantal
