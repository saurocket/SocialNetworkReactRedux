import classes from './Paginator.module.css';
import React, {useState} from "react";


type PropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (pageNumber:number) => void
    portionSize? : number
}

const Paginator:React.FC<PropsType>  = ({totalUsersCount, currentPage,
                   pageSize, onPageChanged, portionSize = 20}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPorionNumber = (portionNumber -1)*portionSize +1;
    let rightPortionNumber = portionNumber*portionSize;

    const buttonNextClick = () =>{

        setPortionNumber (portionNumber+1);

    }
    const buttonPrevClick = () => {

        setPortionNumber (portionNumber-1);
    }
    // @ts-ignore
    const disablePrev = ():boolean=> {
        if (portionNumber === 1){
            return true
        }
    }
    // @ts-ignore
    const disableNext = ():boolean => {
        if (portionNumber === portionCount){
            return true;
        }
    }


    return (
            <div className={classes.btnWrapper}>
                <button disabled={disablePrev()} onClick={buttonPrevClick}>Prev</button>
                {

                    pages.filter(p => p >=leftPorionNumber && p<=rightPortionNumber)
                    .map(p => {
                        return <span onClick={(e) => {
                            onPageChanged(p)
                        }}
                                     className={currentPage === p
                                         ? classes.addUserActive : classes.addUsers}>{p}</span>
                    })
                }
                <button disabled={disableNext()} onClick={buttonNextClick}>next</button>
            </div>

    )

}
const anor = 'dasd';
export default Paginator;