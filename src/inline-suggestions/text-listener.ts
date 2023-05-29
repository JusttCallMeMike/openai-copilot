import { Disposable, TextDocumentChangeEvent, workspace, window } from 'vscode';

const getTime = () => Date.now() / 1000;
let lastChangeTime = getTime();

export const textListener = async ({
  document,
  contentChanges,
}: TextDocumentChangeEvent): Promise<void> => {
  let activeEditor = window.activeTextEditor;
  let _document = activeEditor?.document;
  let curPos = activeEditor?.selection.active;
  let offset = document.offsetAt(curPos);
  console.log(currentTextPosition);
};
export function registerTextChangeHandler(): Disposable {
  return workspace.onDidChangeTextDocument(textListener);
}
