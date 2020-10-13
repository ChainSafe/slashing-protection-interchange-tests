export interface ISlashingProtectionInterchangeTest {
  name: string;
  should_succeed: boolean;
  genesis_validators_root: string;
  interchange: any;
  blocks: {
    pubkey: string;
    should_succeed: boolean;
    slot: number;
    signing_root?: string;
  }[];
  attestations: {
    pubkey: string;
    should_succeed: boolean;
    source_epoch: number;
    target_epoch: number;
    signing_root?: string;
  }[];
}

export declare function loadTestCases(): ISlashingProtectionInterchangeTest[];
