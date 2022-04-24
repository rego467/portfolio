import React from "react";
import fb from "../assets/fb.svg";
import ig from "../assets/insta.svg";
import tw from "../assets/Group.svg";
import lk from "../assets/Linkedin.svg";

export default function FooterContent() {
  return (
    <footer
      className="bg-light text-center p-1"
      style={{ position: "fixed", marginTop: "100px", width: "100%" }}
    >
      <div className="mb-3 p-2 text-center">
        <a href="#" className="px-2">
          <img src={fb} alt="" width="25" height="25" />
        </a>
        <a href="#" className="px-2">
          <img src={ig} alt="" width="25" height="25" />
        </a>
        <a href="#" className="px-2">
          <img src={tw} alt="" width="25" height="25" />
        </a>
        <a href="#" className="px-2">
          <img src={lk} alt="" width="25" height="25" />
        </a>
      </div>
      <span className="text-center pt-5">@Rego edwar</span>
    </footer>
  );
}
