import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import HardBreak from "@tiptap/extension-hard-break";
import "@/styles/tiptapArtikel.css";

const configureEditor = (setContent, initialContent = "") => {
  return useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      HardBreak,
    ],
    content: initialContent,
    onBlur: ({ editor }) => {
      const newContent = editor.getHTML();
      setContent(newContent);
    },
  });
};

const TextEditor = ({ setContent, initialContent, error }) => {
  const editor = configureEditor(setContent, initialContent);

  return (
    <div className="text-editor-container">
      <EditorContent editor={editor} />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
};

export default TextEditor;
