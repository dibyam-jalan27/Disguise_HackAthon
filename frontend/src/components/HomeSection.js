import React from "react";
import "./homesection.css";
import { Link } from "react-router-dom";

const HomeSection = ({ myarr }) => {
  console.log(myarr);
  return (
    <div className="section">
      <div className="col">
        <div className="row">
          <img src={myarr[0].images} alt="" />
          <button onClick={()=>{
            
          }}className="relative bottom-5">
            <div>{myarr[0].name}</div>
          </button>
        </div>
        <div className="row">
          <img src={myarr[1].images} alt="" />
          <button className="relative bottom-5">
            <div>{myarr[1].name}</div>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img src={myarr[2].images} alt="" />
          <button className="relative bottom-5">
            <div>{myarr[2].name}</div>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={myarr[3].images} alt="" />
              <button className="relative bottom-5">
                <div>{myarr[3].name}</div>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img src={myarr[4].images} alt="" />
              <button className="relative bottom-5">
                <div>{myarr[4].name}</div>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={myarr[5].images} alt="" />
          <button className="relative bottom-5">
            <div>{myarr[4].name}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
