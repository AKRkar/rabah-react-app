import { useContext } from "react";
import { LevelContext } from "./LevelContext";

function Heading({children}){
    const level=useContext(LevelContext);
    switch (level){
        case 0:
            throw Error('there no level 0');
        case 1:
            return <><h1>{level}{children}</h1></>;
        case 2:
            return <><h2>{level}{children}</h2></>;
        case 3:
            return <><h3>{level}{children}</h3></>;
        case 4:
            return <><h4>{level}{children}</h4></>;
        case 5:
            return <><h5>{level}{children}</h5></>;
        case 6:
            return <><h6>{level}{children}</h6></>;
        default:
            throw Error('there no level 7');
    }
}

export default Heading;