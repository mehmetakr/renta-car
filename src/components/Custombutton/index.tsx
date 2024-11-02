
import React from "react"


import { ButtonPropsType } from "../../types"



const CustomButton: React.FC<ButtonPropsType> = ({
        disabled,
        title,
        designs,
        btnType,
        rIcon,
        handleclick ,
}) => {


        return (


                <button onClick={handleclick} className={`${designs} custom-btn bg-primary-blue rounded-full hover `}
                        disabled={disabled}
                        type={btnType}>

                        <span className="flex-1"> {title}</span>


                        {rIcon && (

                                <div className="relative w-6- h-6">

                                        <img src={rIcon} />
                                </div>

                        )}
                </button>

        )
}
export default CustomButton