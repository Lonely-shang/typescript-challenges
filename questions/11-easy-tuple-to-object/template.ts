type TupleToObject<T extends readonly any[]> = {
  [name in T[number]] : name
}
