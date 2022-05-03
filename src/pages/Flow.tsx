import React from "react";
import EdgeWithButtonFlow from "../components/Flow/EdgeWithButtonFlow";
import {DndFlow} from "../components/Flow/DnDFlow";
import SubFlow from "../components/Flow/SubFlow";

const Flow = () => {
  return (
      <div style={{height:500}}>
        {/*<SubFlow/>*/}
          <DndFlow/>
      </div>
  )
};

export default Flow;
