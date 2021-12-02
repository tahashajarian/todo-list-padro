import React from "react";
import { cardStatuses } from "../constance/consts";
import { useContextStates } from "../context/state";
import NewTask from "./new-task";

const cardStatusOptions = [
  cardStatuses.ToDo,
  cardStatuses.InProgress,
  cardStatuses.InQA,
  cardStatuses.Done,
  cardStatuses.Blocked,
  cardStatuses.Deploye
];


const NewTaskContainer = (props) => {
  const appStatesContext = useContextStates();

  const getAllowedState = (currentState) => {
    switch (currentState) {
      case cardStatuses.ToDo:
        return [cardStatuses.ToDo, cardStatuses.InProgress];
      case cardStatuses.InProgress:
        return [cardStatuses.InProgress, cardStatuses.InQA, cardStatuses.Blocked];
      case cardStatuses.InQA:
        return [cardStatuses.InQA, cardStatuses.Done, cardStatuses.ToDo];
      case cardStatuses.Done:
        return [cardStatuses.Done, cardStatuses.Deployed];
      case cardStatuses.Blocked:
        return [cardStatuses.Blocked, cardStatuses.ToDo];
      case cardStatuses.Deployed:
        return [cardStatuses.Deployed]
      default:
        return cardStatusOptions;
    }
  };

  return (
    <div className="mb-2 h-full">
      <NewTask
        appStatus={appStatesContext.appStatus}
        allowedState={getAllowedState}
      />
    </div>
  );
};

export default NewTaskContainer;
