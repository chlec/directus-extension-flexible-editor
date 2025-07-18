// https://tiptap.dev/api/marks/underline

import Underline from "@tiptap/extension-underline";
import customMessages from "../i18n/custom-messages";
import { defineTool, extendMarkRangeIfUnselected } from "../lib";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "underline",
    name: customMessages.tools.underline,
    icon: "format_underline",
    extension: [Underline],
    shortcut: ["meta", "U"],
    action: (editor: Editor) =>
        extendMarkRangeIfUnselected(editor, "underline").toggleUnderline().run(),
    disabled: (editor) => !editor.can().chain().focus().toggleUnderline().run(),
    active: (editor: Editor) => editor.isActive("underline"),
});
