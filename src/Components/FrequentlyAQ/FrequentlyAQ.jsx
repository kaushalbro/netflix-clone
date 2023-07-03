import React, { useState } from "react";
import "./FrequentlyAQ.scss";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
function FrequentlyAQ(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="faq_container">
      <div className="faq_question" onClick={() => setToggle(!toggle)}>
        <p>{props.question}</p>
        {(toggle && <AddIcon className="show_ans" />) || (
          <CloseIcon className="close_ans" />
        )}
      </div>
      {toggle && (
        <div className="faq_answer">
          <p>
         {
         props.answer.split(".")[0] +"."
         
         }
         <br />
         <br />
        {props.answer.split(".").slice(1)}



          
          </p>
        </div>
      )}
    </div>
  );
}

export default FrequentlyAQ;
