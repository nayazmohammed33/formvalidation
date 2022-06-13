import React, { useContext } from "react";
import { AppContext } from "../../context/App";
import { Btn } from "../index";
import img from "../../asset/img";
import "./MainRight.css";
import Popup from "../Popup/Popup";
import { useState } from "react";

export default function MainRight() {
    const appContext = useContext(AppContext);
    const [btnpopup, Setbtnpopup] = useState(false);

    const fWantToBuy = (decrease = true) => {
        const wantToBuy =
            decrease && appContext?.wantToBuy !== 0
                ? appContext?.wantToBuy - 1
                : appContext?.wantToBuy + 1;

        appContext?.dispatch({
            type: "UPDATE_WANT_TO_BUY",
            payload: wantToBuy,
        });
    };

    const feedback = () => {
        const data = {
            ...appContext?.data[0],
            wantToBuy: appContext?.wantToBuy,
        };

        appContext?.dispatch({
            type: "ADD_TO_CART",
            payload: data,
        });
    };

    return (
        <div className="mainRight">
            <h1 className="mainTitle">
                <span className="mainTitleSub">SNEAKER COMPANY</span>
                <br />
                {appContext?.name}
            </h1>

            <p className="mainDiscribtion">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <Popup trigger={btnpopup}>
                 
                </Popup>

            <div className="mainPriceHold">
                <h1 className="mainPrice">
                    ${appContext?.price}
                    <span className="mainDiscount">
                        {appContext?.discount}%
                    </span>
                </h1>
                <p className="mainPriceOld">${appContext?.oldPrice}</p>
            </div>

            <div className="mainOpts">
                

                <Btn
                    className="mainAddToCart"
                    txt="Feedback"
                    onClick={()=>{
                        Setbtnpopup(true)
                    }}
                />
                
            </div>
        </div>
    );
}
