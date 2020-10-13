import fs from "fs";
import path from "path";

const testsPath = path.resolve(
  __dirname,
  "../slashing-protection-interchange-tests/tests/generated"
);

export interface ISlashingProtectionInterchangeTest {
  name: string; // "single_validator_genesis_attestation",
  should_succeed: boolean; // true,
  genesis_validators_root: string; // "0x0000000000000000000000000000000000000000000000000000000000000000",
  interchange: any;
  blocks: {
    pubkey: string; // "0xa99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c",
    should_succeed: boolean; // false,
    slot: number; // 1,
    signing_root?: string;
  }[];
  attestations: {
    pubkey: string; // "0xa99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c";
    should_succeed: boolean; // false;
    source_epoch: number; // 0;
    target_epoch: number; // 0;
    signing_root?: string;
  }[];
}

export function loadTestCases(): ISlashingProtectionInterchangeTest[] {
  const files = fs.readdirSync(testsPath);
  if (files.length === 0) {
    throw Error(`Not tests found in ${testsPath}`);
  }

  return files.map((file) => {
    const filepath = path.join(testsPath, file);
    return JSON.parse(fs.readFileSync(filepath, "utf8"));
  });
}
