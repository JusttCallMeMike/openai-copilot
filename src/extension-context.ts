import * as vscode from 'vscode'

let _extensionContext: vscode.ExtensionContext | undefined

export function setExtensionContext(context: vscode.ExtensionContext): void {
  _extensionContext = context
}

export function getExtensionContext(): vscode.ExtensionContext | undefined {
  return _extensionContext
}
