import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import "@/styles/challenge/tiptap.css";

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

const TextEditor = ({ setContent, initialContent, error, name }) => {
  const editor = configureEditor(setContent, initialContent);

  return (
    <div className="text-container">
      <EditorContent editor={editor} name={name} />
      {error && (
        <p className="absolute text-xs text-left text-[#e50000] top-full left-0 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextEditor;
