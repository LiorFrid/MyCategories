import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
const MyNav = props => {
    const [routes, setRoutes] = useState(null);
    const [navbarLabel, setNavbarLabel] = useState('Categories');

    useEffect(() => {
        let routesToSet;
        let label;

        if (props.isCategoryChosen) {
            routesToSet = <React.Fragment>
                <Nav.Link as={Link} to="Edit">Edit</Nav.Link>
                <Nav.Link as={Link} to="View">View</Nav.Link>
                <Nav.Link as={Link} to="Delete">Delete</Nav.Link>
            </React.Fragment>;
            label = "Specific Category";
        }
        else {
            routesToSet = <React.Fragment>
                <Nav.Link as={Link} to="/">View Categories</Nav.Link>
                <Nav.Link as={Link} to="AddCategory">New Category</Nav.Link>
            </React.Fragment>;
            label = "Categories";
        }
        setRoutes(routesToSet);
        setNavbarLabel(label);
    }, [props.isCategoryChosen])

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>{navbarLabel}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {routes}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        isCategoryChosen: state.isCategoryChosen
    }
}

export default connect(mapStateToProps)(MyNav);