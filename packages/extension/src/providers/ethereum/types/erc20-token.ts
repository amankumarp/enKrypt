import { BaseToken, BaseTokenOptions, SendOptions } from "@/types/base-token";
import EvmAPI from "../libs/api";

interface Erc20TokenOptions extends BaseTokenOptions {
  contract: string;
}

export class Erc20Token extends BaseToken {
  public contract: string;

  constructor(options: Erc20TokenOptions) {
    super(options);
    this.contract = options.contract;
  }

  public async getLatestUserBalance(
    api: EvmAPI,
    address: string
  ): Promise<string> {
    return "";
  }

  public async send(
    api: EvmAPI,
    to: string,
    amount: string,
    options?: SendOptions
  ): Promise<any> {
    return null;
  }
}
