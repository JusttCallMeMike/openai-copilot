import * as fs from 'node:fs'
import * as path from 'node:path'
import {packageDirectory} from 'pkg-dir'

export const syncPackageJson = async () => {
  const root = await packageDirectory()
  
  if (!root) {
    throw Error('app root not found')
  }
  
  const packageJson = fs.readFileSync(path.join(root, 'package.json'))
  const formated = `export const packageJson = ${packageJson.toString()}`
  const lastIndex = formated.lastIndexOf('}')
  const content = formated.slice(0, lastIndex) + '} as const' + formated.slice(lastIndex + 1)
  
  fs.writeFileSync(path.join(root, 'src', 'json-config-autogen', 'package.ts'), content)
}

