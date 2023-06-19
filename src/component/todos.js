import React from "react";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10 }}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{ paddingLeft: 0 }} color="primary" />
              <ListItemText
                primary={todo.content}
                secondary={
                  <>
                    <div>Pre-Conditions: {todo.preConditions}</div>
                    <div>Acceptance Criteria: {todo.acceptanceCriteria}</div>
                    <div>Date: {todo.date}</div>
                  </>
                }
              />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );

  return <div className="todoCollection">{todoList}</div>;
};

export default Todos;
