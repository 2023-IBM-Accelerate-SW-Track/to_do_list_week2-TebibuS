import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      preConditions: "",
      acceptanceCriteria: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo({
        content: this.state.content,
        date: new Date().toLocaleString("en-US"),
        preConditions: this.state.preConditions,
        acceptanceCriteria: this.state.acceptanceCriteria,
      });
      this.setState({
        content: "",
        preConditions: "",
        acceptanceCriteria: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Task"
          variant="outlined"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pre-Conditions"
          variant="outlined"
          name="preConditions"
          onChange={this.handleChange}
          value={this.state.preConditions}
          fullWidth
          multiline
          rows={2}
          margin="normal"
        />
        <TextField
          label="Acceptance Criteria"
          variant="outlined"
          name="acceptanceCriteria"
          onChange={this.handleChange}
          value={this.state.acceptanceCriteria}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    );
  }
}

export default AddTodo;
