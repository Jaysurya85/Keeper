import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
    <footer><p>copywrite<copywrite>&copy;</copywrite> {year}</p></footer>    
        );
}
export default Footer;