import React from "react"
import './myStyles.css'

export default function Navigation() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </div>
  );
}
