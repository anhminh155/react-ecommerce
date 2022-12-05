import { Spinner } from "flowbite-react";
import React from "react";

function CLoading() {
  return (
    <div style={{height:'calc(100vh - 200px)', width: '100vw'}} className="flex justify-center items-center">
      <Spinner size='xl' aria-label="Center-aligned spinner example" />
    </div>
  );
}

export default React.memo(CLoading);
