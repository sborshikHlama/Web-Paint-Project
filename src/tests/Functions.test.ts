import { checkIsColor } from "../types/TypeCheckFunctions";
import { checkIsTool } from "../types/TypeCheckFunctions";
import { checkIsWeight } from "../types/TypeCheckFunctions";

describe("Cheking type functions", () => {
  test("checking the value of color", () => {
    expect(checkIsColor("some string")).toBe(false);
  });

  test("cheking the value of tool", () => {
    expect(checkIsTool("wrong Type")).toBe(false);
  });

  test("cheking the value of color", () => {
    expect(checkIsWeight("random string")).toBe(false);
  });
});
