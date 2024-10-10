declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: string;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
