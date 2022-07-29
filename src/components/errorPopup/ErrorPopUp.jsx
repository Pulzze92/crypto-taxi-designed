import React from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPopUp.scss";

export const ErrorPopUp = ({ message, url, callback, textCallBack }) => {
  const [isPopUpVisible, setIsPopUpVisible] = React.useState(true);

  console.log(isPopUpVisible);

  return (
    <div className={isPopUpVisible ? "errorPopUp" : "invisiblePopUp"}>
      <div className="errorMsg">{message}</div>
      <div className="buttonAction">
        {url && (
          <Link
            to="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            Download Metamask (Click here)
          </Link>
        )}
        {callback && <button onClick={() => callback()}>{textCallBack}</button>}
      </div>
    </div>
  );
};

export default ErrorPopUp;
