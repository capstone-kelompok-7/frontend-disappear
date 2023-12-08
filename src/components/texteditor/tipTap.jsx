import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import "@/styles/titap.css";

const configureEditor = (setContent, initialContent = "") => {
  return useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: initialContent,
    onBlur: ({ editor }) => {
      const newContent = editor.getHTML();
      setContent(newContent);
    },
  });
};

const TextEditor = ({ setContent, initialContent }) => {
  const editor = configureEditor(setContent, initialContent);

  return (
    <div className="text-editor-container">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
