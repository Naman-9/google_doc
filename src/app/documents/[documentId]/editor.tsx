'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import { useEditorStore } from '@/store/use-editor-store';


export const Editor = () => {

const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({editor}) {
        setEditor(editor);
    },
    onDestroy() {
        setEditor(null);
    },
    onUpdate({editor}) {
        setEditor(editor)
    },
    onSelectionUpdate({editor}) {
        setEditor(editor)
    },
    onTransaction({editor}) {
        setEditor(editor)
    },
    onFocus({editor}) {
        setEditor(editor)
    },
    onBlur({editor}) {
        setEditor(editor)
    },
    onContentError({editor}) {
        setEditor(editor)
    },
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text ',
      },
    },
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink:true,
        defaultProtocol:"https"
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Dropcursor,
      Image,
      ImageResize,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      })
    ],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <div className="size-full overflow-x-auto bg-[#FAFBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
