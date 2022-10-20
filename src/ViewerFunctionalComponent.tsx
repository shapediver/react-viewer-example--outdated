import { createViewport, createSession } from "@shapediver/viewer";
import React, { useEffect, useRef } from "react";

export const ViewerFunctionalComponent: React.FC<{}> = (props) => {
  const canvasRef = useRef(null);
  let initialized = false;

  useEffect(() => {

    const init = async () => {
      if(!canvasRef.current) return;
      if(initialized) return;
      
      initialized = true;

      const canvasElement = canvasRef.current!;

      // create a viewport
      const v = await createViewport({
        canvas: canvasElement
      });

      // create a session
      const s = await createSession({
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
