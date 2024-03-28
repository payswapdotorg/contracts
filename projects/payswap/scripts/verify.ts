import { verifyContract } from '@pancakeswap/common/verify'
import { sleep } from '@pancakeswap/common/sleep'
import { configs } from '@pancakeswap/common/config'

async function main() {
  const networkName = 'ftmTestnet' // network.name
  // const config = configs[networkName as keyof typeof configs]

  // if (!config) {
  //   throw new Error(`No config found for network ${networkName}`)
  // }
  // const deployedContracts_v3_core = await import(`@pancakeswap/v3-core/deployments/${networkName}.json`)
  // const deployedContracts_v3_periphery = await import(`@pancakeswap/v3-periphery/deployments/${networkName}.json`)
  // const deployedContracts_smart_router = await import(`@pancakeswap/smart-router/deployments/${networkName}.json`)
  const payswap_contracts = await import(`../deployments/${networkName}.json`)
  const tFiatAddress = "0xbE04187288D198ed6F0d90eCAAca0fE42Dd434Fe"
  const contractAddress = "0x57Cdd8692eF6FC8d195FcFd7601cF31c0e4e8B75"
  const deployerAddress = "0x0bDabC785a5e1C71078d6242FB52e70181C1F316"
  const lotteryRandomNumberGeneratorAddress = "0x63E751b3b4533918b2adC7b7F7127b5765559e13"
  
  // // Verify dRamp
  // console.log('Verify dRamp')
  // await verifyContract(payswap_contracts.dRampFactory)
  // await sleep(10000)

  // // Verify businessMinter
  // console.log('Verify businessMinter')
  // await verifyContract(payswap_contracts.businessMinter)
  // await sleep(10000)

  // // Verify auditorFactory
  // console.log('Verify auditorFactory')
  // await verifyContract(payswap_contracts.auditorFactory)
  // await sleep(10000)

  // // Verify futureCollateral
  // console.log('Verify futureCollateral')
  // await verifyContract(payswap_contracts.futureCollateral, [
  //   "Future Collateral",
  //   "FC",
  //   tFiatAddress,
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify cardAddress
  // console.log('Verify cardAddress')
  // await verifyContract(payswap_contracts.cardAddress)
  // await sleep(10000)

  // // Verify vavaFactoryAddress
  // console.log('Verify vavaFactoryAddress')
  // await verifyContract(payswap_contracts.vavaFactoryAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify businessBribeFactoryAddress
  // console.log('Verify businessBribeFactoryAddress')
  // await verifyContract(payswap_contracts.businessBribeFactoryAddress)
  // await sleep(10000)

  // // Verify businessGaugeFactoryAddress
  // console.log('Verify businessGaugeFactoryAddress')
  // await verifyContract(payswap_contracts.businessGaugeFactoryAddress)
  // await sleep(10000)

  // // Verify referralBribeFactoryAddress
  // console.log('Verify referralBribeFactoryAddress')
  // await verifyContract(payswap_contracts.referralBribeFactoryAddress)
  // await sleep(10000)

  // // Verify acceleratorVoterAddress
  // console.log('Verify acceleratorVoterAddress')
  // await verifyContract(payswap_contracts.acceleratorVoterAddress)
  // await sleep(10000)

  // // Verify contributorVoterAddress
  // console.log('Verify contributorVoterAddress')
  // await verifyContract(payswap_contracts.contributorVoterAddress)
  // await sleep(10000)

  // // Verify businessVoterAddress
  // console.log('Verify businessVoterAddress')
  // await verifyContract(payswap_contracts.businessVoterAddress)
  // await sleep(10000)

  // // Verify referralVoterAddress
  // console.log('Verify referralVoterAddress')
  // await verifyContract(payswap_contracts.referralVoterAddress)
  // await sleep(10000)

  // // Verify sponsorFactoryAddress
  // console.log('Verify sponsorFactoryAddress')
  // await verifyContract(payswap_contracts.sponsorFactoryAddress)
  // await sleep(10000)

  // // Verify ssiAddress
  // console.log('Verify ssiAddress')
  // await verifyContract(payswap_contracts.ssiAddress, [
  //   5
  // ])
  // await sleep(10000)

  // // Verify profileAddress
  // console.log('Verify profileAddress')
  // await verifyContract(payswap_contracts.profileAddress)
  // await sleep(10000)

  // // Verify stakeMarketAddress
  // console.log('Verify stakeMarketAddress')
  // await verifyContract(payswap_contracts.stakeMarketAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify stakeMarketBribeAddress
  // console.log('Verify stakeMarketBribeAddress')
  // await verifyContract(payswap_contracts.stakeMarketBribeAddress)
  // await sleep(10000)

  // // Verify stakeMarketVoterAddress
  // console.log('Verify stakeMarketVoterAddress')
  // await verifyContract(payswap_contracts.stakeMarketVoterAddress)
  // await sleep(10000)

  // // Verify marketPlaceCollectionAddress
  // console.log('Verify marketPlaceCollectionAddress')
  // await verifyContract(payswap_contracts.marketPlaceCollectionAddress, [
  //   deployerAddress,
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify paywallMarketPlaceOrdersAddress
  // console.log('Verify paywallMarketPlaceOrdersAddress')
  // await verifyContract(payswap_contracts.paywallMarketPlaceOrdersAddress)
  // await sleep(10000)

  // // Verify nftMarketPlaceOrdersAddress
  // console.log('Verify nftMarketPlaceOrdersAddress')
  // await verifyContract(payswap_contracts.nftMarketPlaceOrdersAddress)
  // await sleep(10000)

  // // Verify trustBountiesAddress
  // console.log('Verify trustBountiesAddress')
  // await verifyContract(payswap_contracts.trustBountiesAddress)
  // await sleep(10000)

  // // Verify trustBountiesVoterAddress
  // console.log('Verify trustBountiesVoterAddress')
  // await verifyContract(payswap_contracts.trustBountiesVoterAddress)
  // await sleep(10000)

  // // Verify arpFactoryAddress
  // console.log('Verify arpFactoryAddress')
  // await verifyContract(payswap_contracts.arpFactoryAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify billFactoryAddress
  // console.log('Verify billFactoryAddress')
  // await verifyContract(payswap_contracts.billFactoryAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify willFactoryAddress
  // console.log('Verify willFactoryAddress')
  // await verifyContract(payswap_contracts.willFactoryAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify gameFactoryAddress
  // console.log('Verify gameFactoryAddress')
  // await verifyContract(payswap_contracts.gameFactoryAddress)
  // await sleep(10000)

  // // Verify lotteryAddress
  // console.log('Verify lotteryAddress')
  // await verifyContract(payswap_contracts.lotteryAddress, [
  //   contractAddress,
  //   lotteryRandomNumberGeneratorAddress
  // ])
  // await sleep(10000)

  // Verify worldFactoryAddress
  console.log('Verify worldFactoryAddress')
  await verifyContract(payswap_contracts.worldFactoryAddress)
  await sleep(10000)

  // // Verify bettingFactoryAddress
  // console.log('Verify bettingFactoryAddress')
  // await verifyContract(payswap_contracts.bettingFactoryAddress, [
  //   contractAddress
  // ])
  // await sleep(10000)

  // // Verify fftAddress
  // console.log('Verify fftAddress')
  // await verifyContract(payswap_contracts.fftAddress, [
  //   "Free Food Token",
  //   "FFT",
  //   contractAddress,
  //   deployerAddress,
  //   payswap_contracts.trustBountiesAddress
  // ])
  // await sleep(10000)

  // // Verify SmartRouterHelper
  // console.log('Verify SmartRouterHelper')
  // await verifyContract(deployedContracts_smart_router.SmartRouterHelper)
  // await sleep(10000)

  // // Verify swapRouter
  // console.log('Verify swapRouter')
  // await verifyContract(deployedContracts_smart_router.SmartRouter, [
  //   config.v2Factory,
  //   deployedContracts_v3_core.PancakeV3PoolDeployer,
  //   deployedContracts_v3_core.PancakeV3Factory,
  //   deployedContracts_v3_periphery.NonfungiblePositionManager,
  //   config.stableFactory,
  //   config.stableInfo,
  //   config.WNATIVE,
  // ])
  // await sleep(10000)

  // // Verify mixedRouteQuoterV1
  // console.log('Verify mixedRouteQuoterV1')
  // await verifyContract(deployedContracts_smart_router.MixedRouteQuoterV1, [
  //   deployedContracts_v3_core.PancakeV3PoolDeployer,
  //   deployedContracts_v3_core.PancakeV3Factory,
  //   config.v2Factory,
  //   config.stableFactory,
  //   config.WNATIVE,
  // ])
  // await sleep(10000)

  // // Verify quoterV2
  // console.log('Verify quoterV2')
  // await verifyContract(deployedContracts_smart_router.QuoterV2, [
  //   deployedContracts_v3_core.PancakeV3PoolDeployer,
  //   deployedContracts_v3_core.PancakeV3Factory,
  //   config.WNATIVE,
  // ])
  // await sleep(10000)

  // // Verify tokenValidator
  // console.log('Verify tokenValidator')
  // await verifyContract(deployedContracts_smart_router.TokenValidator, [
  //   config.v2Factory,
  //   deployedContracts_v3_periphery.NonfungiblePositionManager,
  // ])
  // await sleep(10000)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
