/**
 * Converts array to object as const having same key and value pairs - just like enum but better :)
 *
 * @template T An array of readonly PropertyKey.
 * @param {T} entries The array of PropertyKeys.
 * @param {string} [separator='.'] The separator used to split the keys. Defaults to ".".
 * @returns {Readonly<{ [K in T[number] as K extends `${string}${Separator}${string}` ? K extends `${infer F}${Separator}${infer L}` ? L : never : never ]: K }>} Returns a readonly object with identical keys and values.
 */
export const typeSafeObjectFromArrayWithSeparator = <
  T extends readonly string[],
  Separator extends string = '.'
>(
  entries: T,
  separator?: Separator
): Readonly<{
  [K in T[number] as K extends `${string}${Separator}${string}`
    ? K extends `${infer F}${Separator}${infer L}`
      ? `${L}`
      : never
    : never]: K
}> => {
  const actualSeparator = (separator ?? '.') as Separator

  return Object.fromEntries(
    entries.map((entry) => {
      const value = entry.split(actualSeparator).pop()
      return [entry, value ?? entry] as const
    })
  ) as Readonly<{
    [K in T[number] as K extends `${string}${Separator}${string}`
      ? K extends `${infer F}${Separator}${infer L}`
        ? `${L}`
        : never
      : never]: K
  }>
}
