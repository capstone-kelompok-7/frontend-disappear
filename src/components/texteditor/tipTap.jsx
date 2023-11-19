import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

const TextEditor = ({ setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: ``,
    onBlur: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="box-content">
      <div className="box-border">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
