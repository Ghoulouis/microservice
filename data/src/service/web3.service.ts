import { Injectable } from '@nestjs/common';
import { ethers, BigNumberish } from 'ethers';
import { PoolAbi } from 'src/abi/pool';
import bn from 'bignumber.js';
@Injectable()
export class Web3Serivce {
  private provider;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      'https://arbitrum-mainnet.infura.io/v3/083fc7ca8366489f8ff9a502a1943031',
    );
  }

  async getPoolInfo() {
    setInterval(async () => {
      console.time('response in');
      let poolAddress = '0xc31e54c7a869b9fcbecc14363cf510d1c41fa443';
      let poolContract = new ethers.Contract(
        poolAddress,
        PoolAbi,
        this.provider,
      );
      let result = await poolContract.slot0();

      //  console.log(' value = ', BigInt(new bn(2).pow(96).toNumber()));

      console.log(
        ' value2 = ',
        Number(
          new bn(result[0])
            .div(new bn(2).pow(96))
            .pow(2)
            .div(new bn(10).pow(6).div(new bn(10).pow(18))),
        ),
      );

      console.timeEnd('response in');
    }, 3000);
  }
}
