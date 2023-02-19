import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js"

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    ); }

export default TuitsList;