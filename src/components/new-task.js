import React, { useEffect, useState } from "react";
import { useContextStates, useContextUpdateStates } from "../context/state";
import {
  appContextActions, appStates, cardStatuses,
} from "../constance/consts";
import NewTaskUi from "./new-task-ui";



const initialCard = {
  title: "",
  description: "",
  status: cardStatuses.ToDo
};

const NewTask = (props) => {
  const appStatesContext = useContextStates();
  const dispatch = useContextUpdateStates();
  const [card, setCard] = useState(initialCard);
  const [allowedStates, setAllowedStates] = useState([]);
  const [currentCardStatus, setCurrentCardStatus] = useState(cardStatuses.ToDo)

  useEffect(() => {
    setAllowedStates(props.allowedState(currentCardStatus))
  }, [currentCardStatus, props]);

  useEffect(() => {
    if (appStatesContext.editCardId !== null) {
      const currentCard =
        appStatesContext.allTask[appStatesContext.editCardId];
      setCard({ ...currentCard });
      setCurrentCardStatus(currentCard.status)
    }
  }, [appStatesContext]);

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setCard({ ...card, title: value });
  };

  const handleChagneDescription = (e) => {
    const value = e.target.value;
    setCard({ ...card, description: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.title) {
      if (props.appStatus === appStates.Home) {
        dispatch({ type: appContextActions.ADD_NEW_TASK, payload: card });
      } else {
        dispatch({ type: appContextActions.UPDATE_TASK_STATUS, payload: card });
        dispatch({
          type: appContextActions.UPDATE_APP_STATUS,
          payload: { status: appStates.Home, editCardId: null }
        });
      }
      resetForm();
    }
  };

  const cancelEdit = () => {
    dispatch({
      type: appContextActions.UPDATE_APP_STATUS,
      payload: { status: appStates.Home, editCardId: null }
    });
    resetForm();
  };

  const resetForm = () => {
    setCard({ title: "", description: "", status: cardStatuses.ToDo });
  };

  const handleChangeCardStatus = (e) => {
    // @ts-ignore
    const status = e.target.value;
    setCard({ ...card, status });
  };

  return (
    <NewTaskUi
      allowedStates={allowedStates}
      appStatus={props.appStatus}
      cancelEdit={cancelEdit}
      card={card}
      handleChagneDescription={handleChagneDescription}
      handleChangeCardStatus={handleChangeCardStatus}
      handleChangeTitle={handleChangeTitle}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewTask;
