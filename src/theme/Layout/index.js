// src/theme/Layout/index.js
import Layout from "@theme-original/Layout";
import Zoom from "@theme/Zoom";
import React from "react";

export default function LayoutWithZoom(props) {
  return (
    <>
      <Zoom />
      <Layout {...props} />
    </>
  );
}
