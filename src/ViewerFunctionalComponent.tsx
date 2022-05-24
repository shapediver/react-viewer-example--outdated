// import { api } from "@shapediver/viewer";
// import React, { useEffect } from "react";

// export const FunctionalComponent: React.FC<{}> = (props) => {
//   useEffect(() => {
//     // const getSession = async () => {
//     //   const s = await api.createSession({
//     //     ticket: 'd2795be17bb5f36ad8e799cd58c35b4fb84e84cb7ef5b8aa1365b7fe76fcaf3234167f0924fa613f03f31f82057b3107631c003bcc9077f785d38ad9a354a489e652d2be97a8e1f69c975bba070727b28f24af7ff68a9c966a124121362de07f6aecbdb9ebc46a-c13747650a644e02d24c0579cc104655', 
//     //     modelViewUrl: 'https://sdeuc1.eu-central-1.shapediver.com', 
//     //   });
//     //   return s;
//     // };
//     // getSession();
//   }, []);

//   return (
//     <div>

//     </div>
//   );
// };

import { api } from "@shapediver/viewer";
import React, { useEffect, useRef } from "react";

export const ViewerFunctionalComponent: React.FC<{}> = (props) => {
  const canvasRef = useRef(null);
  let initialized = false;

  useEffect(() => {

    const init = async () => {
      if(!canvasRef.current) return;
      if(initialized) return;
      
      initialized = true;
      const v = await api.createViewer({
        canvas: canvasRef.current!
      });
      const s = await api.createSession({
        ticket:
          "b6b127d7e06588addc43443617c1eeea7ea316bef7ad1273cdd0c82d67f89b8dd4a67a327037b0a3ba2f52377c7d0e1b2a5657dd245603b0a3771d650ea4fbdd76e8187dc21ed1824063e4041b60a28747ed5a51e48c5e77d0c683bee53fb01fa53255e24a74ae-3a01cf3d24f8366dd64a0e2dfce4d4fc",
        modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com"
      });
    };
    init();
  }, []);

  const divStyle = {
    width: "400px",
    height: "400px"
  };

  return (
    <div style={divStyle}>
      <canvas ref={canvasRef} />
    </div>
  );
};
