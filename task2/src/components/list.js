import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo, dlttodo } from "../actions";

class list extends Component {
  constructor(props) {
    super(props);
    this.term = "";
  }
  renderList() {
    console.log(this.props.list);
    return this.props.list.map((todo) => {
      return (
        <div className="item" key={todo}>
          <br />
          <br />
          <div>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => this.props.dlttodo(todo)}
              >
                delete
              </button>
            </div>
          </div>

          <div className="content">{todo}</div>
        </div>
      );
    });
  }
  load(e) {
    this.term = e.target.value;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="ui left action input">
          <tr />{" "}
          <input
            className="input"
            id="task"
            onChange={(e) => this.load(e)}
          ></input>
          <button
            className="ui teal labeled icon button"
            onClick={() => {
              document.querySelector("#task").value = "";
              this.props.addtodo(this.term);
            }}
          >
            Add ToDo
          </button>
        </div>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //  console.log(state.todo);
  return { list: state.todo };
};

export default connect(mapStateToProps, { addtodo, dlttodo })(list);
