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
  const containerArtikel = `text-editor-container ${error ? "has-error" : ""}`;

  return (
    <div className={containerArtikel}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
