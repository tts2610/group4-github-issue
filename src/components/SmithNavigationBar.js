import React,{useState} from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'
import GithubLogo from './github-logo.png'

export default function SmithNavigationBar(props) {
    let [inputValue, setInputValue] = useState("")

    return (
        <div>
            <Navbar collapseOnSelect className="sticky top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                src={GithubLogo}
                width="30"
                height="30"
                className="smith d-inline-block align-top"
                id="logo-img"
                alt="Github logo"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Form inline onSubmit={event => {event.preventDefault(); props.getIssues(inputValue, event); setInputValue("")}}>
            <FormControl type="text" id="search-bar" placeholder="owner/repos" className="mr-sm-2" value={inputValue} onChange={event => setInputValue(event.target.value)} />
            </Form>
            </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
