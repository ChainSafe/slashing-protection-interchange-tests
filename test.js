const { loadTestCases } = require("./index");

const testCases = loadTestCases();
if (testCases.length === 0) {
  throw Error("Empty testCases");
}
