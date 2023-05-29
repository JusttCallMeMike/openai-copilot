interface basicTypes {
  string: string
  number: number
  boolean: boolean
  null: null
  undefined: undefined
}

type basicTypesKeys = keyof basicTypes

export const getValueWithSpecifiedType = <const K extends Readonly<basicTypesKeys> | Readonly<basicTypesKeys[]>>(value: unknown, _type: K) => {
  return value as K extends Readonly<basicTypesKeys>
  ? basicTypes[K]
  : K extends Readonly<basicTypesKeys[]>
  ? basicTypes[K[number]]
  : undefined
}

const _test1 = getValueWithSpecifiedType('', 'string' as const)
const _test2 = getValueWithSpecifiedType(44, 'number' as const)
const _test3 = getValueWithSpecifiedType(undefined, [
  //   ^?
  'number',
  'undefined',
] as const)

//@ts-expect-error it is a test and argument is not one of possible option
const _test4 = getValueWithSpecifiedType(undefined, 'float' as const)

//@ts-expect-error it is a test and argument is not one of possible option
const _test5 = getValueWithSpecifiedType(undefined, 2_423_423)
