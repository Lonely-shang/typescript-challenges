type MyPick<T, K extends keyof T> = {  [N in K] : T[N]  }
