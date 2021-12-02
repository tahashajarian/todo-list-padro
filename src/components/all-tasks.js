import React from "react";
import Card from "./card";


const AllTasks = (props) => {
  return (
    <div className="flex-1 relative mt-14">
      <span className="absolute h-20 w-full inset-0 bg-brand z-0 rounded-t-3xl text-white text-xl pl-8 pt-4 overflow-hidden -top-14">
        {props.title}
      </span>
      <div className="bg-blue-300 absolute rounded-t-3xl z-10 w-full p-2 pt-4 h-full">
        <div className="overflow-auto flex flex-wrap justify-start items-start h-full">
          {props.tasks.length ? (
            props.tasks.map((task, index) => (
              <Card
                title={task.title}
                description={task.description}
                status={task.status}
                key={index}
                id={index}
              />
            ))
          ) : (
            <span className="flex justify-center items-center w-full h-full text-gray-700 text-2xl whitespace-pre-line text-center">
              {props.noTaskText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
