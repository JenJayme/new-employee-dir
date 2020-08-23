
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import searchBooks from "../utils/API"

export const SearchBar = (props) => {

  // Grabs input from bar and assigns to var searchString

  return (
    <div>
      <Form >
        <Form.Group controlId="searchBar">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control type="input" onChange={props.setValue}/>
          <Button type="submit" onClick={props.handleClick}>Search</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
 
export default SearchBar;