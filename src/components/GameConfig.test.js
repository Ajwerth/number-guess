import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import GameConfig from "./GameConfig";

// Normally I configure the adapter in a setupTests.js file.
// Everytime I tried it didn't seem to work.
// Might be an issue with codesandbox?
configure({ adapter: new Adapter() });

describe("Guess Tests", () => {
  let wrapper = shallow(<GameConfig />);

  it("renders", () => {
    shallow(<GameConfig />);
  });

  it("should have 2 fields", () => {
    expect(wrapper.find("Input").length).toEqual(2);
  });

  it("should initialy not be displayed", () => {
    expect(wrapper.find("#config").hasClass("configHide")).toEqual(true);
  });
});