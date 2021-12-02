import React from "react";
import { appContextActions, appStates } from "../constance/consts";
import { useContextUpdateStates } from "../context/state";
import EditIcon from "../icons/edit-icon";

const Card = (props) => {
  const dispatch = useContextUpdateStates();
  const handleOnclick = () => {
    dispatch({
      type: appContextActions.UPDATE_APP_STATUS,
      payload: { status: appStates.Edit, editCardId: props.id }
    });
  };
  return (
    <div className="h-48 w-44 shadow-md rounded-lg bg-gray-50 m-2 p-4 pt-2">
      <div className="font-bold  text-lg w-full">
        {props.title || "no title"}
      </div>
      <div className="text-sm  overflow-hidden w-full h-24 mb-3 mt-1">
        {props.description || "no description"}
      </div>
      <div className="flex justify-between items-center">
        <span className="bg-brand text-gray-50 p-1 rounded-md w-24 text-center">
          {props.status}
        </span>
        <div className="w-6 h-6 cursor-pointer" onClick={handleOnclick}>
          <EditIcon width={25} height={25} fill={"#333"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
