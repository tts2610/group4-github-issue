import React,{useState} from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'
import GithubLogo from './github-logo.png'

export default function SmithNavigationBar(props) {
    let [inputValue, setInputValue] = useState("")

    return (
        <div>
        <form><input type="search" placeholder="Search"></form>
            
        </div>
    )
}
