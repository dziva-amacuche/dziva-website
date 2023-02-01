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
      <div className="container">
        <img src={dell}></img>
        <img src={engage}></img>
        <img src={hp}></img>
        <img src={kaspersky}></img>
        <img src={lenovoIsp}></img>
        <img src={lenovoPP}></img>
        <img src={phc}></img>
        <img src={sophos}></img>
        <img src={VVAR}></img>
      </div>
    </Parcerias>
  );
}

const Parcerias = styled.div`
  overflow: auto;
  .container {
    display: flex;
    overflow: auto;
    height: fit-content;
    margin: 0 4rem 0 4rem;
    justify-content: space-between;
    width: 100%;

    img {
      width: 12rem;
      height: 6rem;
    }
  }
`;
export default Partners;
