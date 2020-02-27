import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import Button from "./Button";

// Normally I configure the adapter in a setupTests.js file.
// Everytime I tried it didn't seem to work.
// Might be an issue with codesandbox?
configure({ adapter: new Adapter() });

describe("Button tests", () => {
  it("renders button", () => {
    shallow(<Button />);
  });

  it("renders correct text in button", () => {
    const text = "R2D2";
    const wrapper = shallow(<Button text={text} />);

    expect(wrapper.text()).toEqual("R2D2");
  });

  it("should fire callbacks when clicked", () => {
    const handleClick = jest.fn();
    const component = mount(<Button text="R2D2" handleClick={handleClick} />);
    const button = component.find("button");
    button.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});