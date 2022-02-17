import classes from "../Users/Users.module.css";
import React, {useState} from "react";
import {initialStateType, UserType} from "../../Redux/userReducer";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage:number
    onPageChanged:(pageNumber: number)=>void
    portionSize:number
}

export const Pagination = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount=Math.ceil(pagesCount/props.portionSize)
    let[portionNumber,setPortionNumber]=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*props.portionSize+1
    let rightPortionPageNumber=portionNumber*props.portionSize
    return (
        <div>{portionNumber>1&&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}> PREW</button>}

            {pages.filter(p=>p>=leftPortionPageNumber&&p<=rightPortionPageNumber).map(m => <span
                onClick={() => props.onPageChanged(m)}
                className={props.currentPage === m ? classes.selectedPage : ''}> {m} </span>)}
            {portionNumber<portionCount&&<button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>

    )
}