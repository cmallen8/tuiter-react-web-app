import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;



//import React from "react";
//import TuitItem from "./tuit-item";
//import {useSelector} from "react-redux";

//const TuitsList = () => {
//    const tuitsArray = useSelector(state => state.tuits)
  //  return (
    //    <ul className="list-group">
      //      {
        //        tuitsArray.map(tuit =>
          //      <TuitItem key={tuit._id} tuit={tuit}/> )
//            }
  //      </ul>
    //);
//};

//export default TuitsList;