import React from "react";
import Check from "./Check";
import { render } from "react-native-testing-library";

describe("<Check />", () => {
  it("test props checked={false}", () => {
    const { toJSON } = render(
      <Check checked={false} />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it("test props checked={true}", () => {
    const { toJSON } = render(
      <Check checked={true} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});