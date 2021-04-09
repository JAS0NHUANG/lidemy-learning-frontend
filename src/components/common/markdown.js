import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import RemarkGfm from "remark-gfm";

import React from "react";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      showLineNumbers={true}
      customStyle={{
        maxWidth: "80vw"
      }}
    >
      {value || ""}
    </SyntaxHighlighter>
  );
};

const Markdown = ({ source, allowHtml }) => {
  const Comp = allowHtml ? ReactMarkdownWithHtml : ReactMarkdown;
  return (
    <Comp
      plugins={[RemarkGfm]}
      source={source}
      renderers={{ code: CodeBlock }}
      linkTarget="_blank"
      allowDangerousHtml={allowHtml}
    />
  );
};

export default Markdown;
