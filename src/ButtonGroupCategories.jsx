import React from 'react'

import { Button, Spacer } from "@nextui-org/react"; 
import {MdOutlineToys, MdOutlineLocalGroceryStore, MdOutlineTableBar, MdSportsTennis, MdDirectionsCar} from "react-icons/md";
import {RiTShirt2Fill} from "react-icons/ri"; 
import {TbDevices, TbShoe, TbPerfume} from "react-icons/tb";
import {BsFillPostcardHeartFill} from "react-icons/bs"
const ButtonGroupCategories = () => {

    const data = [
        {
            type: "toys", 
            icon: <MdOutlineToys size={30} />
        }
        , {
            type: "clothes",
            icon: <RiTShirt2Fill size={ 30 } />
        }
        , {
            type: "shoes",
            icon: <TbShoe size={ 30 } />
        }
        , {
            type: "electronics",
            icon: <TbDevices size={ 30 } />
        }, 
        {
            type: "groceries",
            icon: <MdOutlineLocalGroceryStore size={ 30 } />
        }, 
        {
            type: "furniture",
            icon: <MdOutlineTableBar size={ 30 } />
        },
        {
            type: "personal Care",
            icon: <TbPerfume size={ 30 } />
        }, 
        {
            type: "sports",
            icon: <MdSportsTennis size={ 30 } />
        }, 
        {
            type: "vehicles",
            icon: <MdDirectionsCar size={ 30 } />
        }, 
        {
            type: "Gift card", 
            icon: <BsFillPostcardHeartFill size={ 30 } />
        }
     ]; 
  return (
      <div className={ "gap-6 w-full   flex  md:overflow-visible overflow-scroll md:flex-wrap" }>
          {
              data.map((item, index) => {
                    return (
                        <Button
                            key={ index }

                            color="warning"
                            flat
                            css={
                                {
                                    width: "100px", 
                                    height: "100px",
                                }
                            }
                            ripple
                        >
                            <div className={"flex flex-col items-center justify-center"}>
                            { item.icon }
                                <div>{ item.type }</div>
                            </div>

                                                        
                        </Button>
                    )
                }
          ,)}
    </div>
  )
}

export default ButtonGroupCategories; 