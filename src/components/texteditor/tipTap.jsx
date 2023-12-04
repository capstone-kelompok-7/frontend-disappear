import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import "@/styles/titap.css";

const configureEditor = (setContent) => {
  return useEditor({
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
};

const TextEditor = ({ setContent }) => {
  const editor = configureEditor(setContent);

  return (
    <div className="text-editor-container">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
