import React from "react";
import Checkbox from "./Checkbox";
import { render, fireEvent } from "react-native-testing-library";
import renderer from "react-test-renderer";

describe("<Checkbox />", () => {
  it("fire onPress event", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        checked
        touchableTestID="button"
        onPress={onPressMock}
        label="button"
      />
    );

    const button = getByTestId("button");

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("fire onPress event and change the checked value", () => {
    let checked = false;
    const onPressMock = () => {
      checked = !checked;
    };
    const { getByTestId, update, toJSON } = render(
      <Checkbox
        checked={checked}
        touchableTestID="button"
        onPress={onPressMock}
        label="button"
      />
    );

    const button = getByTestId("button");
    expect(toJSON()).toMatchSnapshot();

    fireEvent.press(button);

    update(<Checkbox
      checked={checked}
      touchableTestID="button"
      onPress={onPressMock}
      label="button"
    />)

    expect(toJSON()).toMatchSnapshot();
  });

  it("test props checked={false}", () => {
    const onPressMock = jest.fn();
    const { toJSON } = render(
      <Checkbox
        checked={false}
        onPress={onPressMock}
        label="button"
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it("test props checked={true}", () => {
    const onPressMock = jest.fn();
    const { toJSON } = render(
      <Checkbox
        checked={false}
        onPress={onPressMock}
        label="button"
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});