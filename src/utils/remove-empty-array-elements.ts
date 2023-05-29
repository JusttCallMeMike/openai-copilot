const removeEmptyArrayElements = <T extends unknown[]>(array: T) => {
  return array.filter(Boolean) as T
}
