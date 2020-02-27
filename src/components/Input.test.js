import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import Input from "./Input";

// Normally I would configure the adapter in a setupTests.js
// file but everytime I tried it didnt seem to work, might be an
// issue with codesandbox?
configure({ adapter: new Adapter() });

describe("Input tests", () => {
  it("renders Input", () => {
    shallow(<Input />);
  });

  it("should update onChange", () => {
    const onChange = jest.fn();
    const component = mount(
      <Input onChange={event => onChange(event.target.value)} />
    );
    const input = component.find("input");
    const event = {
      target: {
        value: "I am your father..."
      }
    };
    input.simulate("change", event);
    expect(onChange).toHaveBeenCalledWith("I am your father...");
  });
});