// MarkdownRenderer.jsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Terminal } from "lucide-react";
import CopyButton from "../CopyButton";
// import MarkNav from "markdown-navbar";
import "./index.css";
/** 高亮代码 */
import "highlight.js/styles/atom-one-dark.css";
// import "markdown-navbar/dist/navbar.css";
import "./navbar.css";

const MarkdownRenderer = ({ mdContent }: any) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // const fetchMarkdownFile = async () => {
    //   const response = await fetch(mdFilePath);
    //   const text = await response.text();
    //   setContent(text);
    // };
    // fetchMarkdownFile();
    // import(/* @vite-ignore */ "../../../../assets/md/" + mdFilePath + ".md")
    //   .then(async (e) => {
    //     console.log(e.default, "cccc");
    //     const response = await fetch(e.default);
    //     const text = await response.text();
    //     setContent(text);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    setContent(mdContent);
  }, [mdContent]);

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <ReactMarkdown
            className="markdown-body prose prose-zinc max-w-none dark:prose-invert"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              pre: ({ children }) => (
                <pre className="not-prose">{children}</pre>
              ),
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                if (match?.length) {
                  const id = Math.random().toString(36).substr(2, 9);
                  return (
                    <div className="not-prose rounded-md border">
                      <div className="flex h-12 items-center justify-between bg-zinc-100 px-4 ">
                        <div className="flex items-center gap-2">
                          <Terminal size={18} />
                          <p
                            className="text-sm text-zinc-600 "
                            style={{ marginBottom: 0 }}
                          >
                            {node?.data?.meta}
                          </p>
                        </div>
                        <CopyButton id={id} />
                      </div>
                      <div className="overflow-x-auto">
                        <div id={id} className="p-4">
                          {children}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="p-4">
                      <code
                        {...props}
                        className="not-prose rounded bg-gray-100 px-1 "
                      >
                        {children}
                      </code>
                    </div>
                  );
                }
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        {/* <div className="w-[20%] h-full sticky top-0 border-solid border-[1px] p-2 rounded-[5px]">
          目录
          <MarkNav
            className="article"
            source={content}
            headingTopOffset={40} //离顶部的距离
            ordered={false}
            declarative={false}
          />
        </div> */}
      </div>
    </>
  );
};

export default MarkdownRenderer;
