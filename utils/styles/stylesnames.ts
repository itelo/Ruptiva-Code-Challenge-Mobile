import { mergeAll } from "ramda";

// @ts-ignore
export default style => {
  // @ts-ignore
  const handleArgs = args => {
    // @ts-ignore
    const concatedStyles = [];

    // @ts-ignore
    args.map(argument => {
      const constructor = argument && argument.constructor;

      if (constructor === String && style[argument]) {
        // @ts-ignore
        concatedStyles.push(style[argument]);
      } else if (constructor === Array) {
        // @ts-ignore
        concatedStyles.push(...handleArgs(argument));
      } else if (constructor === Object) {
        // @ts-ignore
        Object.entries(argument).map(([prop, value]: [string, any]) => {
          if (!!value && style[prop]) {
            // @ts-ignore
            concatedStyles.push(style[prop]);
          }
        });
      }
    });
    // @ts-ignore
    return mergeAll(concatedStyles);
  };
  // @ts-ignore
  return (...args) => handleArgs(args);
};
