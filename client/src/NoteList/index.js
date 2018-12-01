import React, { Component } from "react";
import * as noteService from "../services/notes";
import NoteView from "./View";

export default class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null
    };
  }

  // async/await is another way to handler promises
  // and asychronous behavior
  async componentDidMount() {
    await this._fetchNotes();
  }
  _fetchNotes = async () => {
    try {
      //this is like the "then"
      const notes = await noteService.getAll();
      this.setState({
        notes: notes
      });
    } catch (err) {
      //this is the "catch"
      this.setState({
        error: err
      });
    }
  };

  remove = async id => {
    try {
      await noteService.remove(id);
      await this._fetchNotes();
    } catch (err) {
      this.setState({
        error: err
      });
    }
  };

  render() {
    return <NoteView {...this.state} {...this.props} remove={this.remove} />;
  }
}
