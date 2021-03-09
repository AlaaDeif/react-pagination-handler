import React, { useState, useEffect } from 'react'

export const Pagination = ({items, itemsPerPage,  paginationContainer, listContainer, paginationLabel, edgButton, groupButton, singleButton, pageButton, activePageButton, pagesLimit }) => {

    //Functional states
    const [errors, setErrors] =  useState(null)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [productsPerPage, setProductsPerPage] = useState(12)
    const [ paginationLimit, setPaginationLimit ] = useState(2)
    const [ maxPaginationLimit, setMaxPaginationLimit ] = useState(0)
    const [ minPaginationLimit, setMinPaginationLimit ] = useState(0)

    //Style states
    const [ itemsContainer, setItemsContainer ] = useState({display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly', width:'100%', boxSizing:'border-box'})
    const [pgnContainer, setPgnContainer] = useState({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
    const [pgnText, setPgnText] = useState({
        margin: '10px',
        fontSize: '1.25rem'
    })
    const [edgBtn, setEdgBtn] = useState({
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        margin: '5px',
        outline: 'none',
        fontSize: '1.25rem',
    })
    const [grbBtn, setGrbBtn] = useState({
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        margin: '5px',
        outline: 'none',
        fontSize: '1.25rem'
    })
    const [singleBtn, setSingleBtn] = useState({
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        margin: '5px',
        outline: 'none',
        fontSize: '1.25rem'
    })
    const [pageBtn, setPageBtn] = useState({
        cursor: 'pointer',
        outline: 'none',
        borderRadius: 'none',
        border: 'none',
        background: 'none',
        fontSize: '1.05rem'
    })
    const [activePageBtn, setActivePageBtn] = useState({
        cursor: 'pointer',
        outline: 'none',
        borderRadius: 'none',
        border: 'none',
        background: 'none',
        textDecoration: 'underline',
        fontSize: '1.15rem'
    })

    //First render states
    useEffect(()=>{
        !items ? setErrors('Please provide your array of JSX') : setData(items);
        paginationContainer && setPgnContainer(paginationContainer)
        listContainer && setItemsContainer(listContainer)
        itemsPerPage && setProductsPerPage(itemsPerPage)
        paginationLabel && setPgnText(paginationLabel)
        edgButton && setEdgBtn(edgButton)
        groupButton && setGrbBtn(groupButton)
        singleButton && setSingleBtn(singleButton)
        pageButton && setPageBtn(pageButton)
        activePageButton && setActivePageBtn(activePageButton)
        pagesLimit && setPaginationLimit(pagesLimit)
        setCurrentPage(1)
    },[])

    // Items section logic
    const lastItemIndex = currentPage * productsPerPage;
    const firstItemIndex = lastItemIndex - productsPerPage;
    const renderedItems = data.slice(firstItemIndex, lastItemIndex);

    // Pagination section logic
    let pageNumbers = Math.ceil(data.length / productsPerPage);
    let pageNumbersArray = Array.from(
        { length: pageNumbers },
        (h, k) => k + 1
    );

    useEffect(()=> {
        const prevPages = currentPage - paginationLimit
        const nextPages = currentPage + paginationLimit
        prevPages <= 1 ? setMinPaginationLimit(0) : setMinPaginationLimit(prevPages - 1)
        nextPages > pageNumbers ? setMaxPaginationLimit(pageNumbers) : setMaxPaginationLimit(nextPages)
    }, [currentPage])

    const lastIndex = pageNumbers - paginationLimit
    

    const prevPage = ()=> setCurrentPage(currentPage - 1)

    const nextPage = ()=> setCurrentPage(currentPage + 1)
    const nextGroupFun = ()=> setCurrentPage(currentPage + paginationLimit +1)

    const preGroupFun = (e)=> setCurrentPage(currentPage - paginationLimit -1)

    const renderedPagination = pageNumbersArray.slice(minPaginationLimit, maxPaginationLimit)
    
    const paginationBtn = renderedPagination.map(btn => (
        <button style={ btn == currentPage ? activePageBtn : pageBtn } onClick={()=> setCurrentPage(btn)}>{btn}</button>
    ))

    let nextGroup = null;
    let preGroup = null;

    if(pageNumbers > paginationLimit){
        nextGroup = <button style={grbBtn} onClick={nextGroupFun}>
            ...
        </button>
        preGroup = <button style={grbBtn} onClick={preGroupFun}>
            ...
        </button>
    }

    const lastPage = ()=> setCurrentPage(pageNumbers)
    const firstPage = ()=> setCurrentPage(1)

        //render the component
    return errors ? (
        <div style={{boxSizing:'border-box', color: 'red', textAlign: 'center'}}>
            <p>Error: {errors}</p>
            <p>If you fetching the data please be sure you receive it before pass it as props</p>
        </div>
    ) : (
        <div>
            <div style={itemsContainer}>
                {renderedItems}
            </div>
            {data.length > productsPerPage && (
                <div style={pgnContainer}>
                <label style={pgnText}>Page </label>
                    {currentPage > paginationLimit && (
                        <button onClick={firstPage} style={edgBtn}>&#xab;</button>
                    )}
                    {currentPage > 1 && (
                        <button style={singleBtn}  onClick={prevPage}>&#x2039;</button>
                    )}
                    {minPaginationLimit >= 1 && preGroup }
                    {paginationBtn}
                    {currentPage < lastIndex && nextGroup }
                    {currentPage < pageNumbers && (
                        <button style={singleBtn} onClick={nextPage}>&#x203A;</button>
                    )}
                    {currentPage <= lastIndex && (
                        <button onClick={lastPage} style={edgBtn}>&#xbb;</button>
                    )}
                <label style={pgnText}> / {pageNumbers}</label>
            </div>)}
        </div>
    )
}
