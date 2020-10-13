const fs = require("fs");
const path = require("path");

const testsPath = path.resolve(
  __dirname,
  "slashing-protection-interchange-tests/tests/generated"
);

exports.loadTestCases = function loadTestCases() {
  const files = fs.readdirSync(testsPath);
  if (files.length === 0) {
    throw Error(`Not tests found in ${testsPath}`);
  }
  return files.map((file) =>
    JSON.parse(fs.readFileSync(path.join(testsPath, file), "utf8"))
  );
};
