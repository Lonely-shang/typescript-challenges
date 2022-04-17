type MyReadonly<T> = {
  readonly [name in keyof T]: T[name]
}
