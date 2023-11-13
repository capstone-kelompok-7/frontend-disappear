import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

const TextEditor = ({ setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    onBlur: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="mt-4 h-full">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
