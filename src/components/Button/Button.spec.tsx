import React from "react";
import Button from "./Button";
import { render, fireEvent } from "react-native-testing-library";
import renderer from "react-test-renderer";

describe("<Button />", () => {
  it("fire onPress event", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        touchableTestID="button"
        onPress={onPressMock}
        label="button"
        loadingLabel="loading"
      />
    );

    const button = getByTestId("button");

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("get the label name", () => {
    const onPressMock = jest.fn();
    const { getByTestId, debug } = render(
      <Button
        labelTestID="label"
        onPress={onPressMock}
        label="An Awesome Label Here"
        loadingLabel="loading"
      />
    );

    const label = getByTestId("label");
    expect(label.props.children).toBe("An Awesome Label Here");
  });

  it("get the loading label", () => {
    const onPressMock = jest.fn();
    const { getByTestId, debug } = render(
      <Button
        labelTestID="label"
        isLoading={true}
        onPress={onPressMock}
        label="button"
        loadingLabel="An Awesome Label Here"
      />
    );

    const label = getByTestId("label");
    expect(label.props.children).toBe("An Awesome Label Here");
  });

  it("test props isLoading={false} label='button'", () => {
    const onPressMock = jest.fn();
    const { toJSON } = render(
      <Button
        onPress={onPressMock}
        label="button"
        loadingLabel="loading"
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it("test props isLoading={true} loadingLabel='loading'", () => {
    const onPressMock = jest.fn();
    const { toJSON } = render(
      <Button
        onPress={onPressMock}
        isLoading={true}
        label="button"
        loadingLabel="loading"
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});