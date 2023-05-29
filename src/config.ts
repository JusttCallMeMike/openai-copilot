import * as vscode from 'vscode'
import {packageJson} from './json-config-autogen/package'
import {keysWithType} from './utils/keys-with-type'
import {typeSafeObjectFromArrayWithSeparator} from './utils/typesafe-object-from-keys-with-separator'
import {getValueWithSpecifiedType} from './utils/get-value-with-specified-type'

export const EXTENSION_NAME = packageJson.name

const [configurationDefinitionContainer] = packageJson.contributes.configuration

const configurationDefinition = configurationDefinitionContainer.properties
type configurationDefinition = typeof configurationDefinition

const configNamesSeparator = '.' as const

export const CONFIGURATION_KEYS = typeSafeObjectFromArrayWithSeparator(
  keysWithType(configurationDefinition),
  configNamesSeparator
)
export type CONFIGURATION_KEYS = (typeof CONFIGURATION_KEYS)[keyof typeof CONFIGURATION_KEYS]

function getConfigurationType<T extends keyof configurationDefinition>(name: T): configurationDefinition[T]['type'] {
  {
    if (name in Object.keys(configurationDefinition)) {
      return configurationDefinition[name].type
    }
    
    throw Error('Wrong configuration key')
  }
}

const configuration = vscode.workspace.getConfiguration(configurationDefinitionContainer.title)

export const getConfig = <T extends keyof configurationDefinition>(name: T) => {
  const vscodeStoredConfig = configuration.get(`${configurationDefinitionContainer.title}.${name}`)
  const definedType = getConfigurationType(name)
  const result = getValueWithSpecifiedType(vscodeStoredConfig, definedType)
  
  return result
}

const _someConfig1 = getConfig(CONFIGURATION_KEYS.APItoken)

