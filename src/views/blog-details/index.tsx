import { useState } from "react";
import mdDemo from "@/assets/md/vue-md/0001.md";
import gfm from "@bytemd/plugin-gfm";
import {
  Editor,

  // Viewer
} from "@bytemd/react";

// import "bytemd/dist/index.css";

const plugins = [
  gfm(),
  // Add more plugins here
];

const BlogDetails = () => {
  const [value, setValue] = useState("");

  return (
    <Editor
      value={value}
      plugins={plugins}
      onChange={() => {
        setValue(mdDemo);
      }}
    />
  );
};

export default BlogDetails;
