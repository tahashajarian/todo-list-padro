import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {
  appStates,
  EDIT_TASK_TITLE,
  NEW_TASK_TITLE
} from "../constance/consts";
import EditIcon from "../icons/edit-icon";
import PlusIcon from "../icons/plus-icon";



const NewTaskUi = (props) => {
  return (
    <form
      className="flex flex-col p-8 py-2 w-full m-auto md:max-w-2xl h-full"
      onSubmit={props.handleSubmit}
    >
      <span className="font-bold text-xl text-gray-800">
        {props.appStatus === appStates.Edit ? EDIT_TASK_TITLE : NEW_TASK_TITLE}
      </span>
      <TextField
        label="title *"
        variant="filled"
        value={props.card.title}
        onChange={props.handleChangeTitle}
      />
      <TextField
        label="description"
        multiline
        rows={3}
        variant="standard"
        value={props.card.description}
        onChange={props.handleChagneDescription}
      />
      {props.appStatus === appStates.Edit ? (
        <div className="mt-4">
          <div className="my-4">
            <FormControl variant="filled" className="w-full">
              <InputLabel id="demo-simple-select-filled-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={props.card.status}
                onChange={(value) => props.handleChangeCardStatus(value)}
              >
                {props.allowedStates.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center mt-8">
            <div className="w-full mb-3 md:mb-0 md:mr-2">
              <Button
                className="h-10 w-full"
                variant="contained"
                startIcon={<EditIcon width={20} height={20} fill={"#eee"} />}
                type="submit"
              >
                Edit
              </Button>
            </div>
            <div className="w-full md:ml-2">
              <Button
                className="h-10 w-full"
                variant="outlined"
                color={"inherit"}
                type="button"
                onClick={props.cancelEdit}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full mt-4" >
          <Button
            className="h-10 w-full"
            variant="contained"
            startIcon={<PlusIcon width={20} height={20} fill={"#fff"} />}
            type="submit"
          >
            Add
          </Button>
        </div>
      )}
    </form>
  );
};

export default NewTaskUi;
