import React, { useEffect } from "react";
import postscribe from "postscribe";
import "./styles/TPSurvey.css";

export default function TPSurvey() {
  useEffect(() => {
    postscribe(
      "#wrapper",
      "<script src='//embed.typeform.com/next/embed.js'></script>"
    );
  });

  return (
    <div
      id="wrapper"
      data-tf-widget="LjX9FL18"
      data-tf-inline-on-mobile
      data-tf-medium="snippet"
    ></div>
  );
}
