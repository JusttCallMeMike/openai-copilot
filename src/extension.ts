import * as vscode from 'vscode'
import {setExtensionContext} from './extension-context'
import {registerTextChangeHandler} from './inline-suggestions/text-listener'

export function activate(context: vscode.ExtensionContext) {
  setExtensionContext(context)
  
  const disposable = vscode.commands.registerCommand(
    'openai-copilot.helloWorld',
    () => {
      void vscode.window.showInformationMessage('Hello World from openai-copilot!')
    }
  )
  
  context.subscriptions.push(disposable, registerTextChangeHandler())
}

// This method is called when your extension is deactivated
export function deactivate() {}
