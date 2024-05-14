import React from 'react';
import { Form } from 'react-bootstrap';

function Search(props) {
    return (
        <div className="search-container">
            <Form className="search-box">
                <Form.Group controlId="searchQuery">
                    <Form.Control type="text" placeholder="Search by Name" onChange={e => props.setQuery(e.target.value)} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Search;