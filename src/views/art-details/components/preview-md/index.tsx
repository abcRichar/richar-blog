// MarkdownRenderer.jsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Terminal } from "lucide-react";
import CopyButton from "../CopyButton";
import MarkNav from "markdown-navbar";
import "./index.css";
import "highlight.js/styles/atom-one-dark.css";
// import "markdown-navbar/dist/navbar.css";
import "./navbar.css";

const MarkdownRenderer = ({ mdFilePath }: any) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      const response = await fetch(mdFilePath);
      const text = await response.text();
      setContent(text);
    };
    fetchMarkdownFile();
  }, [mdFilePath]);

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <ReactMarkdown
            className="markdown-body prose prose-zinc max-w-none dark:prose-invert"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              pre: ({ children }) => <pre className="not-prose">{children}</pre>,
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                if (match?.length) {
                  const id = Math.random().toString(36).substr(2, 9);
                  return (
                    <div className="not-prose rounded-md border">
                      <div className="flex h-12 items-center justify-between bg-zinc-100 px-4 dark:bg-zinc-900">
                        <div className="flex items-center gap-2">
                          <Terminal size={18} />
                          <p className="text-sm text-zinc-600 dark:text-zinc-400" style={{ marginBottom: 0 }}>
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
                      <code {...props} className="not-prose rounded bg-gray-100 px-1 dark:bg-zinc-900 ">
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
        <div className="w-[30%] h-full sticky top-0 border-solid border-[1px] p-2 rounded-[5px]">
          目录
          <MarkNav
            className="article"
            source={content}
            headingTopOffset={40} //离顶部的距离
            ordered={false}
            declarative={true}
          />
        </div>
      </div>
    </>
  );
};

export default MarkdownRenderer;
