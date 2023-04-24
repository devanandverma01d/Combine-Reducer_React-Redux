import { combineReducers } from "redux";
import { AddSubRed } from "./AddSubRed";
import { MulDivRed } from "./MulDivRed";

export default combineReducers({
    AddSubRed:AddSubRed,
    MulDivRed:MulDivRed
})