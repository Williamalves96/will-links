import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/feed/ "
      className="container-linkedin links"
      target="_blank"
    >
      <FaLinkedin /> Linkedin <FaLinkedin />
    </a>
  );
}

export default Linkedin;
