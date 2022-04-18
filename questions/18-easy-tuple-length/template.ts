type Length<T extends any> = T extends readonly any[] ? T["length"] : never;
// type Length<T extends readonly any[]> = T['length']