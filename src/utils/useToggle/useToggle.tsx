import React from "react";

/**
 * @param initialValue 
 */
const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: boolean) => void] => {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(
    (nextValue?: boolean) => {
      if (typeof nextValue === "boolean") {
        setValue(nextValue);
      } else {
        setValue(currentValue => !currentValue);
      }
    },
    [setValue]
  );

  return [value, toggle];
};

export default useToggle;
