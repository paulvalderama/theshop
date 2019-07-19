import React from "react";

export default function Navigation() {
  return (
    <div>
      <ul className="nav">
        <li>
          <a href="/home/">Home</a>
        </li>
        <li>
          <a href="/stylist/">Stylist of the Week</a>
        </li>
        <li>
          <a href="/haircut/">Haircut of the Week</a>
        </li>
        <li>
          <a href="/store/">Store</a>
        </li>
      </ul>
    </div>
  );
}
