import React from 'react'

import { Button, Spacer } from "@nextui-org/react"; 
import {MdOutlineToys} from "react-icons/md";
import {RiTShirt2Fill} from "react-icons/ri"; 
import {TbDevices, TbShoe} from "react-icons/tb";

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
        }
     ]; 
  return (
      <div className={ "grid md:grid-cols-4 grid-cols-2 gap-8 w-full " }>
          {
              data.map((item, index) => {
                    return (<span>
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
                        <Spacer  x={2} />
                        </span>
                    )
                }
          ,)}
    </div>
  )
}

export default ButtonGroupCategories; 