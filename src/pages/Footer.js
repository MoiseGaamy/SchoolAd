import React, { Component } from 'react'
import {  FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <FaFacebookF />
            <FaInstagramSquare />
            <FaYoutube />
            <p>© Copyright 2021 SchoolAds</p>
        </footer>
        )
    }
}
