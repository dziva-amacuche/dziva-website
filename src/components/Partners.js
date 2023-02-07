import React from "react";
import styled from "styled-components";
import dell from "../assets/Partners-logo/dell.png";
import engage from "../assets/Partners-logo/engage.png";
import hp from "../assets/Partners-logo/hp.png";
import kaspersky from "../assets/Partners-logo/kaspersky.png";
import lenovoIsp from "../assets/Partners-logo/lenovo-isp.png";
import lenovoPP from "../assets/Partners-logo/lenovo-pp.png";
import phc from "../assets/Partners-logo/phc.png";
import sophos from "../assets/Partners-logo/sophos.png";
import VVAR from "../assets/Partners-logo/VVAR.png";

function Partners() {
  return (
    <Parcerias>
      <div className="parcerias-container">
        <h1>Parceiros</h1>
        <div className="container">
          <div className="partner">
            <img src={dell}></img>
          </div>
          <div className="partner">
            <img src={engage}></img>
          </div>
          <div className="partner">
            <img src={hp}></img>
          </div>
          <div className="partner">
            <img src={kaspersky}></img>
          </div>
          <div className="partner">
            <img src={lenovoIsp}></img>
          </div>
          <div className="partner">
            {" "}
            <img src={lenovoPP}></img>
          </div>
          <div className="partner">
            <img src={phc}></img>
          </div>
          <div className="partner">
            {" "}
            <img src={sophos}></img>
          </div>
          <div className="partner">
            {" "}
            <img src={VVAR}></img>
          </div>
        </div>
      </div>
    </Parcerias>
  );
}

const Parcerias = styled.div`
  width: 100%;
  text-align: center;
  height: 100vh;

  .parcerias-container {
    height: 100vh;
    margin: 4rem;
    h1 {
      margin: 4rem 0;
    }
    .container {
      display: flex;
      height: 100vh;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .partner {
        width: 30%;
        height: 20vh;
        img {
          width: 10rem;
          aspect-ratio: 3/2;
          object-fit: contain;
        }
      }
    }
  }
`;
export default Partners;
