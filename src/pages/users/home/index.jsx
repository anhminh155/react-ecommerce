import React from "react";
import CCarousel from "../../../components/CCarousel";

function Home() {
    return ( 
        <div className="h-96 bg-slate-300">
            <CCarousel/>
        </div>
     );
}

export default React.memo(Home);