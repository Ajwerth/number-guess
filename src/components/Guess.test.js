import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Guess from "./Guess";

// Normally I configure the adapter in a setupTests.js file.
// Everytime I tried it didn't seem to work.
// Might be an issue with codesandbox?
configure({ adapter: new Adapter() });

describe("Guess Tests", () => {
  const wrapper = shallow(<Guess />);

  it("renders", () => {
    shallow(<Guess />);
  });

  it("should have a guess field", () => {
    expect(wrapper.find("Input").length).toEqual(1);
  });

  it("should have 2 buttons", () => {
    expect(wrapper.find("Button").length).toEqual(2);
  });
});