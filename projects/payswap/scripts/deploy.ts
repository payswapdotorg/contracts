import { ethers, network } from "hardhat";
import config from "../config";

async function main() {
    const [deployer, deployer2] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
      const Card =  await ethers.getContractFactory("Card")
      const PoolGauge =  await ethers.getContractFactory("PoolGauge")
      const Encode =  await ethers.getContractFactory("Encode")
      const FutureCollateral =  await ethers.getContractFactory("FutureCollateral")
      const AcceleratorVoter =  await ethers.getContractFactory("AcceleratorVoter")
      const ContributorVoter =  await ethers.getContractFactory("ContributorVoter")
      const ContractAddresses =  await ethers.getContractFactory("contracts/MarketPlace.sol:ContractAddresses")
      const NFTicket = await ethers.getContractFactory("contracts/MarketPlace.sol:NFTicket");
      const NFTicketHelper = await ethers.getContractFactory("contracts/MarketPlace.sol:NFTicketHelper");
      const NFTicketHelper2 = await ethers.getContractFactory("contracts/MarketPlace.sol:NFTicketHelper2");
      const MarketPlaceEvents = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceEvents");
      const MarketPlaceCollection = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceCollection");
      const MarketPlaceOrders = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceOrders");
      const MarketPlaceTrades = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceTrades");
      const MarketPlaceHelper = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceHelper");
      const MarketPlaceHelper3 = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceHelper3");
      const ValuepoolVoter = await ethers.getContractFactory("ValuepoolVoter");
      const BusinessGaugeFactory = await ethers.getContractFactory("BusinessGaugeFactory");
      const BusinessBribeFactory = await ethers.getContractFactory("BusinessBribeFactory");
      const ReferralBribeFactory = await ethers.getContractFactory("ReferralBribeFactory");
      const VavaHelper = await ethers.getContractFactory("ValuepoolHelper");
      const VavaHelper2 = await ethers.getContractFactory("ValuepoolHelper2");
      const RandomNumberGenerator = await ethers.getContractFactory("contracts/Vava.sol:RandomNumberGenerator");
      const Auditor = await ethers.getContractFactory("Auditor");
      const AuditorHelper = await ethers.getContractFactory("AuditorHelper");
      const AuditorHelper2 = await ethers.getContractFactory("AuditorHelper2");
      const AuditorFactory = await ethers.getContractFactory("AuditorFactory");
      const StakeMarket = await ethers.getContractFactory("StakeMarket");
      const StakeMarketNote = await ethers.getContractFactory("StakeMarketNote");
      const StakeMarketHelper = await ethers.getContractFactory("StakeMarketHelper");
      const SSI = await ethers.getContractFactory("SSI");
      const Sponsor = await ethers.getContractFactory("Sponsor");
      const SponsorFactory = await ethers.getContractFactory("SponsorFactory");
      const TrustBounties = await ethers.getContractFactory("TrustBounties");
      const TrustBountiesHelper = await ethers.getContractFactory("TrustBountiesHelper");
      const BusinessVoter = await ethers.getContractFactory("BusinessVoter");
      const ReferralVoter = await ethers.getContractFactory("ReferralVoter");
      const Profile = await ethers.getContractFactory("Profile");
      const ve_distContract = await ethers.getContractFactory("contracts/ve_dist.sol:ve_dist");
      const StakeMarketBribe =  await ethers.getContractFactory("Bribe")
      const CustomMinter = await ethers.getContractFactory('contracts/CustomMinter.sol:CustomMinter')
      const Percentile = await ethers.getContractFactory("contracts/Library.sol:Percentile")
      const PlusCodes = await ethers.getContractFactory("contracts/Library.sol:PlusCodes")
      const Betting = await ethers.getContractFactory("contracts/Betting.sol:Betting")
      const BettingHelper = await ethers.getContractFactory("contracts/Betting.sol:BettingHelper")
      const BettingMinter = await ethers.getContractFactory("contracts/Betting.sol:BettingMinter")
      const BettingFactory = await ethers.getContractFactory("contracts/Betting.sol:BettingFactory")
  
      // const percentiles = await Percentile.deploy()
      // console.log("percentiles=====================>", percentiles.address)
  
      // const plusCodes = await PlusCodes.deploy()
      // console.log("plusCodes=====================>", plusCodes.address)
      
      const percentilesAddress = "0x50bb56b15BCb4D5c8bD4af625178cf9b42838809"
      const percentiles = Percentile.attach(percentilesAddress)
  
      const plusCodesAddress = "0x090936699c27398199a84F6d233E9260A7bfc2ce"
      const plusCodes = PlusCodes.attach(plusCodesAddress)
  
      const BusinessBribe = await ethers.getContractFactory("BusinessBribe");
      const BusinessGauge = await ethers.getContractFactory("BusinessGauge");
      const ReferralBribe = await ethers.getContractFactory("ReferralBribe");
      
      const VeFactory = await ethers.getContractFactory("contracts/Vava.sol:veFactory",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const VavaFactory = await ethers.getContractFactory("ValuepoolFactory",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const AuditorNote = await ethers.getContractFactory("AuditorNote",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
  
      const Va = await ethers.getContractFactory("contracts/Vava.sol:Ve",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const Vava = await ethers.getContractFactory("contracts/Vava.sol:Valuepool",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const ProfileHelper = await ethers.getContractFactory("ProfileHelper",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const StakeMarketVoter = await ethers.getContractFactory("StakeMarketVoter", {
        libraries: {
          Percentile: percentiles.address,
        },
      })
      
      const TrustBountiesVoter = await ethers.getContractFactory("TrustBountiesVoter", {
        libraries: {
          Percentile: percentiles.address,
        },
      })
  
      const SponsorNote = await ethers.getContractFactory("SponsorNote",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
  
      const PaywallMarketPlaceOrders = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallMarketPlaceOrders");
      const PaywallMarketPlaceTrades = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallMarketPlaceTrades");
      const PaywallMarketPlaceHelper = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallMarketPlaceHelper");
      const PaywallMarketPlaceHelper3 = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallMarketPlaceHelper3");
      const Paywall = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:Paywall");
      const PaywallARPHelper = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallARPHelper");
      const PaywallARPFactory = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallARPFactory");
      const ARPFactory = await ethers.getContractFactory("contracts/ARP.sol:ARPFactory");
      const ARP = await ethers.getContractFactory("contracts/ARP.sol:ARP");
      const ARPHelper = await ethers.getContractFactory("contracts/ARP.sol:ARPHelper");
      const ARPNote = await ethers.getContractFactory("contracts/ARP.sol:ARPNote");
      const BILL = await ethers.getContractFactory("contracts/BILL.sol:BILL");
      const BILLFactory = await ethers.getContractFactory("contracts/BILL.sol:BILLFactory");
      const BILLNote = await ethers.getContractFactory("contracts/BILL.sol:BILLNote");
      const BILLMinter = await ethers.getContractFactory("contracts/BILL.sol:BILLMinter");
  
      const NFTMarketPlaceOrders = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTMarketPlaceOrders");
      const NFTMarketPlaceTrades = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTMarketPlaceTrades");
      const NFTMarketPlaceHelper = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTMarketPlaceHelper");
      const NFTMarketPlaceHelper3 = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTMarketPlaceHelper3");
      const NFTSVG = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTSVG")
      const MinterFactory = await ethers.getContractFactory("MinterFactory");
      const WILLNote = await ethers.getContractFactory("WILLNote");
      const WILLFactory = await ethers.getContractFactory("WILLFactory");
      const WILL = await ethers.getContractFactory("WILL");
      const GameHelper = await ethers.getContractFactory("GameHelper");
      const GameHelper2 = await ethers.getContractFactory("GameHelper2");
      const GameFactory = await ethers.getContractFactory("GameFactory");
      const Lottery = await ethers.getContractFactory("contracts/Lottery.sol:LotteryContract");
      const LotteryHelper = await ethers.getContractFactory("contracts/Lottery.sol:LotteryHelper");
      const LotteryRandomNumberGenerator = await ethers.getContractFactory("contracts/Lottery.sol:RandomNumberGenerator");
      const World = await ethers.getContractFactory("contracts/Worlds.sol:World");
      const WorldHelper = await ethers.getContractFactory("contracts/Worlds.sol:WorldHelper");
      const WorldHelper3 = await ethers.getContractFactory("contracts/Worlds.sol:WorldHelper3");
      const WorldFactory = await ethers.getContractFactory("contracts/Worlds.sol:WorldFactory");
      const RampFactory = await ethers.getContractFactory("contracts/Ramp.sol:RampFactory");
      const Ramp = await ethers.getContractFactory("contracts/Ramp.sol:Ramp");
      const RampHelper = await ethers.getContractFactory("contracts/Ramp.sol:RampHelper");
      const RampAds = await ethers.getContractFactory("contracts/Ramp.sol:RampAds");
      const ExtraTokenFactory = await ethers.getContractFactory("contracts/Ramp.sol:ExtraTokenFactory");
      const BusinessMinter =  await ethers.getContractFactory("BusinessMinter")
      const FeeTo =  await ethers.getContractFactory("FeeTo")
  
      const PaywallMarketPlaceHelper2 = await ethers.getContractFactory("contracts/PaywallMarketPlace.sol:PaywallMarketPlaceHelper2",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const MarketPlaceHelper2 = await ethers.getContractFactory("contracts/MarketPlace.sol:MarketPlaceHelper2",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const NFTMarketPlaceHelper2 = await ethers.getContractFactory("contracts/NFTMarketPlace.sol:NFTMarketPlaceHelper2",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const ARPMinter = await ethers.getContractFactory("contracts/ARP.sol:ARPMinter",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const BILLHelper = await ethers.getContractFactory("contracts/BILL.sol:BILLHelper",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const GameMinter = await ethers.getContractFactory("contracts/GameFactory.sol:GameMinter",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const RampHelper2 = await ethers.getContractFactory("contracts/Ramp.sol:RampHelper2",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const WorldNote = await ethers.getContractFactory("contracts/Worlds.sol:WorldNote",{
        libraries: {
          Percentile: percentiles.address,
        },
      });
      const WorldHelper2 = await ethers.getContractFactory("contracts/Worlds.sol:WorldHelper2",{
        libraries: {
          PlusCodes: plusCodes.address,
        },
      });
      
    const fiatContract = await ethers.getContractFactory("tFIAT");
    const vecontract = await ethers.getContractFactory("contracts/ve.sol:mve",{
      libraries: {
        Percentile: percentiles.address,
      },
    });
    const lpAddress = "0x7eB9763f5eF3bFb84CE6f31b324e7619bFA1ca37"
    const veAddress = "0xfd045C059AC6423F9B21A456a432Ead97a93F706"
    const ve_distAddress = "0x47d59AF489bCd9A959AD80B045766305c793293D"
    const tFiatAddress = "0xbE04187288D198ed6F0d90eCAAca0fE42Dd434Fe"
    const feeToAddress = "0x0Fe2B9DAE99b685ce57c7160eF01022e49843Ca6"
    const payswapFactory = "0x843b8C96676018024cb14C9429De8293b9ED9Eda"
    const payswapRouter = "0xF314FC209E6f52BE35a876206a1ec7CC18AAb25f"
    const WFTM = "0xB8406F928784221b2dDD72a50Cf7563C45e8Ed9c"
    const INIT_CODE_PAIR_HASH = "0xc686be96020737842c8d1dc73f500c20206f43ad5e5928a27a00cbf05cf911fa"
    const businessMinterAddress = "0xfF4d74eD76bBF5b6Da80F3b5D493d3f23D52eB55"
    const auditorNoteAddress = "0x51ccF98593809607bdB08509e8b8d670658f86C0"
    const auditorHelperAddress = "0xEE0A3DE3952B71cfadaA155182878Ed49a6D93a2"
    const auditorHelper2Address = "0x0e5d8abf5F9A31b8A17e0f35dd89cCcDd1227DC8"
    const auditorFactoryAddress = "0xa78F0762FAFd64B90B2F8fb52A8aF923cD399ddD"
    const acceleratorVoterAddress = "0x84779D6bCf31E90DE81Ac4155EFA9A725a60B7f9"
    const futureCollateralAddress = "0xD2b2435aa749E42F3523033Fe167Ae543082375F"
    const cardAddress = "0x9899019bb90D216d1DD2Db790daf2dB7dFb6D827"
    const contributorVoterAddress = "0xBCb2E030953dC9f2E68C179C19C2C121aF348Abb"
    const vavaFactoryAddress = "0x183D70a3cf5e467049A82e79f7C50B488A46D477"
    const vavaHelperAddress = "0x350499C782d15Df1839E74A3E8999FbC86A49c33"
    const vavaHelper2Address = "0x55B4098BF974fec1387aBE50329027142Bf1f7c9"
    const veFactoryAddress = "0xd01A8bb066Ee9cb795366b91a632eFD492B200Bc"
    const valuepoolVoterAddress = "0x312B3E91e01D87F46B45A23368B0fDE988aFdddD"
    const businessBribeFactoryAddress = "0xee1388EeFb6F9206836eB6C64F12bFBAEa14d9Cd"
    const businessGaugeFactoryAddress = "0x3a5F4F01Bbe5729b8EC35f453d4a92A364F9eF66"
    const referralBribeFactoryAddress = "0x3D262AD24C4ff3F8598367a23bA5288Df3581da2"
    const businessVoterAddress = "0x3Fd9F56dE77002e267104d106A92967cd000EEC9" 
    const referralVoterAddress = "0xF72AEF17B06C69d1c2329e8966B7821875BCd21E"
    const sponsorFactoryAddress = "0x71324803103f17D00e2E2Fe6449f27d301693c0A"
    const sponsorNoteAddress = "0xDF1Fd12D700110CF763A540e059349ce4a453C5A"
    const ssiAddress = "0x1de9D006f209E9A7556270cae74D1F0D6864168a" //"0xFEc4d4A1aad9cE28dA66D86609c3B47aaeF5e527"
    const profileAddress = "0x810EBEa7d4330B6A6EFa2f73FF7E7773c57F98CD" //"0x8D531506a9Eb2E5931235a09e5192201B38b12b6"
    const profileHelperAddress = "0xf2Ca8333888cf3C673E81225228a000F9b7b4338" //"0xa71B00c519d6573E0cFC37638FE712aC6dD65a2c"
    const stakeMarketAddress = "0xe11515741E0048914Fccb80a2C700d41b757F60A"
    const stakeMarketNoteAddress = "0x1697d2E8c40c3f7c437934fce8FcC37f18B88cdd"
    const stakeMarketHelperAddress = "0x4aFde7B1E5Eb048fdd7dA0253F1461fB59Fb2D1C"
    const stakeMarketBribeAddress = "0xa4Cd94FA5d590f8B8cA844C6B7FFD347c5443Ce4"
    const stakeMarketVoterAddress = "0x9E41eB6e4082643E6Aa50bD3126D38798644e261"
    const contractAddress = "0x214Cb0c088D0992d5ba36Cff283CB1333149E1e7" //"0x997068BaD1417e1d7Be77CFC9123B40a3D9Bdb92"
    const nftsvgAddress = "0x36D1257A7E29E73A345D01F1e5F81d424C12a2c7"
    const nfticketAddress = "0x3A05ea8F22940769745d5ea656Be1E6C35Aec5a2"
    const nfticketHelperAddress = "0xE976C7932F28105F065f90a73706299F66185219"
    const nfticketHelper2Address = "0xA1eCa5aC14274ad02F04b62F8620B2767e350d47"
    const marketPlaceEventsAddress = "0xc8990a7A65360785Cabc5f5543adB901c8E0e58e"
    const marketPlaceCollectionAddress = "0xd6C2ab767fbc268Dae92843f7efa31cE0E96535E"
    const marketPlaceOrdersAddress = "0x2c55aaCB688D8d4F5Bd9dF45A40bF856871F6255"
    const paywallMarketPlaceOrdersAddress = "0x1698119e5a012720e9e07e457bDDAd8128b6cfDf"
    const nftMarketPlaceOrdersAddress = "0xC5C9c4b254cE2Cfab00f79557A26dEa764027d94"
    const marketPlaceTradesAddress = "0xcA601fFaA2CeA3E9ADCe8487294966633BCEE8ed"
    const paywallMarketPlaceTradesAddress = "0xdF7eC193e256be3D43173e0908db697700d661DB"
    const nftMarketPlaceTradesAddress = "0xeA96ac3F3a509bAeB9E9C77d4823789BB3Bb90BB"
    const marketPlaceHelperAddress = "0xEc9e1fc04f0a6F4A5fFCE6Cd77E0788487cE6366"
    const paywallMarketPlaceHelperAddress = "0xc64161384CdCf691CF6448668afA4c96f513A904"
    const nftMarketPlaceHelperAddress = "0x32DE3407C4921B8A4da4C80131DCb55f64Ab2FF8"
    const marketPlaceHelper2Address = "0x4C5FF05F3b66132b14faDC60942B64c9f5C568C8"
    const paywallMarketPlaceHelper2Address = "0x20c4Aeb567E2f9553A67084C8B85fAa784FE1862"
    const nftMarketPlaceHelper2Address = "0x0a05c01FD0686F95D0977F66916FB4791d04E0bb"
    const marketPlaceHelper3Address = "0xbf659F592BEe5505D08Bf49F6A7532F35DdC0bAC"
    const paywallMarketPlaceHelper3Address = "0xA006FfC14C034938E3cC11dc558D92E800c1b4e6"
    const nftMarketPlaceHelper3Address = "0x959bfE6e3285f981fb40641272f7d891Dc3260AD"
    const paywallARPFactoryAddress = "0x86F775CD9EA6200e4C61ABC450D8b7491D4fa880"
    const paywallARPHelperAddress = "0x75d802791F0B1974cf64827c5807d908DD6A7E28"
    const minterFactoryAddress = "0x0c5B5dBa4893277440d13FFf3Dd273f8b7A7a580"
    const trustBountiesAddress = "0xb93E4F7ea004A644a5521E5877B5d5ba851Bb45f"
    const trustBountiesHelperAddress = "0x1AA7C08cfA80Ef06Ac5bB3F4b6Ea6D6bCC8Ce8b5"
    const trustBountiesVoterAddress = "0xf94e32A706470af60a752C2167444D5218B1cF77"
    const customMinterAddress = "0xB6c2E68a43a092973512a9C154D81C5559B5eBbA"
    const arpFactoryAddress = "0xbfD75c6C25B6045e24a5C446dE04A70c99C76f70"
    const arpMinterAddress = "0x1996caA9a6CDe7CE28D0690B2C0dC37Fd77b6447"
    const arpHelperAddress = "0x854059066aD7BDF6d18E069bdC6b2DE477Ba8949"
    const arpNoteAddress = "0xC429AbCb98f3565af5e051fdC5Ff081a43b6B803"
    const billFactoryAddress = "0xB061A49504aa7b6DF228E556954bD58A4Cad3574"
    const billMinterAddress = "0x39d546Ce9737f5B377b703C4fE5Dc621D162540b"
    const billHelperAddress = "0x995a88e7120fC55a23E82adbdc50a14efA67A2dC"
    const billNoteAddress = "0xFf3254b1e3980fDA97FD7a4A245dC43FE8B9E53f"
    const extraTokenFactoryAddress = "0x87EDbF47a1e2373282c34298F4041c0c80e328E8"
    const willFactoryAddress = "0x43CeAaa09f54cCd58B29904BAC64dDe058FcBE87"
    const willNoteAddress = "0x86EB24C62635573f0dbc52B1b07660f6B3FA8fdA"
    const gameFactoryAddress = "0x87b5235830038Dc8b874fa5700BC3492E5Fd96bF"
    const gameMinterAddress = "0x45160eA1079e7A07160C2EA122A760cee0Ffcc71"
    const gameHelperAddress = "0x6Ff847c7EbDf92bA9E6D1DBD9c172d912f61C4D4"
    const gameHelper2Address = "0xD3A538C35fEA83F7C696Fc5b80783dA5B3c4812A"
    const lotteryAddress = "0x1557Be5c647Db440fB0C36Da69A3f4583358A512"
    const lotteryHelperAddress = "0x3D3664BBFe3B16C367C8f1ccB43d6B77226aC601"
    const lotteryRandomNumberGeneratorAddress = "0x08d6D5DA5e45F6a6516F0029b9317e5405A97D62"
    const worldFactoryAddress = "0x0Bb7F9c3dDb587A8843D92f2De22B936c0537545"
    const worldNoteAddress = "0xfC28F508032e3D18e3130791F0b376Bd99aB1374"
    const worldHelperAddress = "0x0691B361313da730d1528f3100fD4ab7d95370B3"
    const worldHelper2Address = "0x350aB48Ad25003D1887a17D269f947f7DD27a2C8"
    const worldHelper3Address = "0x29cF710FA955E4F3A6e8E672d4885fd9A43F380F"
    const rampFactoryAddress = "0xdC6fAb469dcF7D94fdf525e4DED83FC5C717B059"
    const rampHelperAddress = "0x9BEC19D775a197fDc8A0249c612c95B06b449945"
    const rampHelper2Address = "0xB845Bd32afF5d57Bf7CD6F4b672704f27929Bf8B"
    const rampAdsAddress = "0xB69C2F1ceB9e8eCa8B40cD0935E3160ecb065EC5"
    const bettingHelperAddress = "0xE7c267Fa69166Cc6431916Cd0612F74BEb52E19D"
    const bettingMinterAddress = "0xB486008DcD9770d452bF82A22bb6ae1FceE85bDE"
    const bettingFactoryAddress = "0x03b92F38DD4d6B66aFd5679F84f0A22291A325B3"
    const poolGaugeAddress = "0xf67A37d9431C7A87e0674978960B525D6487CFa6"

    const poolGauge = PoolGauge.attach(poolGaugeAddress)
    const customMinter = CustomMinter.attach(customMinterAddress)
    const contractAddresses = ContractAddresses.attach(contractAddress)
    const arpFactory = ARPFactory.attach(arpFactoryAddress)
    const arpHelper = ARPHelper.attach(arpHelperAddress)
    const arpMinter = ARPMinter.attach(arpMinterAddress)
    const arpNote = ARPNote.attach(arpNoteAddress)
    const billFactory = BILLFactory.attach(billFactoryAddress)
    const billHelper = BILLHelper.attach(billHelperAddress)
    const billMinter = BILLMinter.attach(billMinterAddress)
    const billNote = BILLNote.attach(billNoteAddress)
    const willFactory = WILLFactory.attach(willFactoryAddress)
    const willNote = WILLNote.attach(willNoteAddress)
    const lottery = Lottery.attach(lotteryAddress)
    const lotteryHelper = LotteryHelper.attach(lotteryHelperAddress)
    const lotteryRandomNumberGenerator = LotteryRandomNumberGenerator.attach(lotteryRandomNumberGeneratorAddress)
    const gameFactory = GameFactory.attach(gameFactoryAddress)
    const gameMinter = GameMinter.attach(gameMinterAddress)
    const gameHelper = GameHelper.attach(gameHelperAddress)
    const gameHelper2 = GameHelper2.attach(gameHelper2Address)
    const worldFactory = WorldFactory.attach(worldFactoryAddress)
    const worldNote = WorldNote.attach(worldNoteAddress)
    const worldHelper = WorldHelper.attach(worldHelperAddress)
    const worldHelper2 = WorldHelper2.attach(worldHelper2Address)
    const worldHelper3 = WorldHelper3.attach(worldHelper3Address)
    const trustBounties = TrustBounties.attach(trustBountiesAddress)
    const trustBountiesHelper = TrustBountiesHelper.attach(trustBountiesHelperAddress)
    const trustBountiesVoter = TrustBountiesVoter.attach(trustBountiesVoterAddress)
    const vavaFactory = VavaFactory.attach(vavaFactoryAddress)
    const vavaHelper = VavaHelper.attach(vavaHelperAddress)
    const vavaHelper2 = VavaHelper2.attach(vavaHelper2Address)
    const veFactory = VeFactory.attach(veFactoryAddress)
    const valuepoolVoter = ValuepoolVoter.attach(valuepoolVoterAddress)
    const businessBribeFactory = BusinessBribeFactory.attach(businessBribeFactoryAddress)
    const businessGaugeFactory = BusinessGaugeFactory.attach(businessGaugeFactoryAddress)
    const referralBribeFactory = ReferralBribeFactory.attach(referralBribeFactoryAddress)
    const auditorNote = AuditorNote.attach(auditorNoteAddress)
    const auditorHelper = AuditorHelper.attach(auditorHelperAddress)
    const auditorHelper2 = AuditorHelper2.attach(auditorHelper2Address)
    const auditorFactory = AuditorFactory.attach(auditorFactoryAddress)
    const businessVoter = BusinessVoter.attach(businessVoterAddress)
    const referralVoter = ReferralVoter.attach(referralVoterAddress)
    const sponsorFactory = SponsorFactory.attach(sponsorFactoryAddress)
    const sponsorNote = SponsorNote.attach(sponsorNoteAddress)
    const ssi = SSI.attach(ssiAddress)
    const profile = Profile.attach(profileAddress)
    const profileHelper = ProfileHelper.attach(profileHelperAddress)
    const stakeMarket = StakeMarket.attach(stakeMarketAddress)
    const stakeMarketNote = StakeMarketNote.attach(stakeMarketNoteAddress)
    const stakeMarketHelper = StakeMarketHelper.attach(stakeMarketHelperAddress)
    const stakeMarketVoter = StakeMarketVoter.attach(stakeMarketVoterAddress)
    const stakeMarketBribe = StakeMarketBribe.attach(stakeMarketBribeAddress)
    const minterFactory = MinterFactory.attach(minterFactoryAddress)
    const nfticket = NFTicket.attach(nfticketAddress)
    const nfticketHelper = NFTicketHelper.attach(nfticketHelperAddress)
    const nfticketHelper2 = NFTicketHelper2.attach(nfticketHelper2Address)
    const nftSvg = NFTSVG.attach(nftsvgAddress)
    const marketPlaceEvents = MarketPlaceEvents.attach(marketPlaceEventsAddress)
    const marketPlaceCollection = MarketPlaceCollection.attach(marketPlaceCollectionAddress)
    const marketPlaceOrders = MarketPlaceOrders.attach(marketPlaceOrdersAddress)
    const paywallMarketPlaceOrders = PaywallMarketPlaceOrders.attach(paywallMarketPlaceOrdersAddress)
    const nftMarketPlaceOrders = NFTMarketPlaceOrders.attach(nftMarketPlaceOrdersAddress)
    const marketPlaceTrades = MarketPlaceTrades.attach(marketPlaceTradesAddress)
    const paywallMarketPlaceTrades = PaywallMarketPlaceTrades.attach(paywallMarketPlaceTradesAddress)
    const nftMarketPlaceTrades = NFTMarketPlaceTrades.attach(nftMarketPlaceTradesAddress)
    const marketPlaceHelper = MarketPlaceHelper.attach(marketPlaceHelperAddress)
    const paywallMarketPlaceHelper = PaywallMarketPlaceHelper.attach(paywallMarketPlaceHelperAddress)
    const nftMarketPlaceHelper = NFTMarketPlaceHelper.attach(nftMarketPlaceHelperAddress)
    const marketPlaceHelper2 = MarketPlaceHelper2.attach(marketPlaceHelper2Address)
    const paywallMarketPlaceHelper2 = PaywallMarketPlaceHelper2.attach(paywallMarketPlaceHelper2Address)
    const marketPlaceHelper3 = MarketPlaceHelper3.attach(marketPlaceHelper3Address)
    const paywallMarketPlaceHelper3 = PaywallMarketPlaceHelper3.attach(paywallMarketPlaceHelper3Address)
    const nftMarketPlaceHelper2 = NFTMarketPlaceHelper2.attach(nftMarketPlaceHelper2Address)
    const nftMarketPlaceHelper3 = NFTMarketPlaceHelper3.attach(nftMarketPlaceHelper3Address)
    const paywallARPHelper = PaywallARPHelper.attach(paywallARPHelperAddress)
    const paywallARPFactory = PaywallARPFactory.attach(paywallARPFactoryAddress)
    const rampFactory = RampFactory.attach(rampFactoryAddress)
    const rampAds = RampAds.attach(rampAdsAddress)
    const rampHelper = RampHelper.attach(rampHelperAddress)
    const rampHelper2 = RampHelper2.attach(rampHelper2Address)
    const extraTokenFactory = ExtraTokenFactory.attach(extraTokenFactoryAddress)
    const tFiat = fiatContract.attach(tFiatAddress)
    const ve = vecontract.attach(veAddress)
    const ve_dist = ve_distContract.attach(ve_distAddress)
    const bettingHelper = BettingHelper.attach(bettingHelperAddress)
    const bettingMinter = BettingMinter.attach(bettingMinterAddress)
    const bettingFactory = BettingFactory.attach(bettingFactoryAddress)
    const businessMinter = BusinessMinter.attach(businessMinterAddress)
    const acceleratorVoter = AcceleratorVoter.attach(acceleratorVoterAddress)
    const contributorVoter = ContributorVoter.attach(contributorVoterAddress)
    const futureCollateral = FutureCollateral.attach(futureCollateralAddress)
    const card = Card.attach(cardAddress)
    const feeTo = FeeTo.attach(feeToAddress)
    
    // const poolGauge =  await PoolGauge.deploy();
    // await poolGauge.deployed()
    // console.log("poolGauge============>", poolGauge.address)

    // const futureCollateral = await FutureCollateral.deploy(
    //   "Future Collateral",
    //   "FC",
    //   tFiat.address,
    //   contractAddresses.address
    // );
    // await futureCollateral.deployed()
    // console.log("futureCollateral============>", futureCollateral.address)
  
    // const card = await Card.deploy();
    // await card.deployed()
    // console.log("card============>", card.address)
  
    // const feeTo = await FeeTo.deploy();
    // await feeTo.deployed()
    // console.log("feeTo============>", feeTo.address)
    
    // const acceleratorVoter = await AcceleratorVoter.deploy();
    // await acceleratorVoter.deployed()
    // console.log("acceleratorVoter============>", acceleratorVoter.address)
  
    // const contributorVoter = await ContributorVoter.deploy();
    // await contributorVoter.deployed()
    // console.log("contributorVoter============>", contributorVoter.address)
  
    // const businessMinter = await BusinessMinter.deploy();
    // await businessMinter.deployed()
    // console.log("businessMinter============>", businessMinter.address)
  
    
    // const ve_dist = await ve_distContract.deploy(ve.address);
    // await ve_dist.deployed()
    // console.log("ve_dist============>", ve_dist.address)
  
    // const customMinter = await CustomMinter.deploy("customNFT", "customNFT")
    // await customMinter.deployed()
    // console.log("customMinter============>", customMinter.address)
  
    // const tFiat = await fiatContract.deploy(
    //   "usd",
    //   "usd",
    //   contractAddresses.address,
        // deployer.address,
    //   trustBounties.address
    // );
    // await tFiat.deployed()
    // console.log("tFiat============>", tFiat.address)
    
    // const ve = await vecontract.deploy(tFiat.address)
    // console.log("ve============>", ve.address)
  
    // await tFiat.approve(ve.address, ethers.BigNumber.from("500000000000000000"));
    // await ve.create_lock(ethers.BigNumber.from("500000000000000000"), 4 * 365 * 86400);
    // console.log("balanceOf===========>", await ve.balanceOfNFT(1))
  
    // const contractAddresses = await ContractAddresses.deploy()
    // await contractAddresses.deployed()
    // console.log("contractAddresses============>", contractAddresses.address)
  
    // const bettingFactory = await BettingFactory.deploy();
    // await bettingFactory.deployed()
    // console.log("bettingFactory============>", bettingFactory.address)
  
    // const bettingMinter = await BettingMinter.deploy();
    // await bettingMinter.deployed()
    // console.log("bettingMinter============>", bettingMinter.address)
  
    // const bettingHelper = await BettingHelper.deploy();
    // await bettingHelper.deployed()
    // console.log("bettingHelper============>", bettingHelper.address)
  
    // const arpFactory = await ARPFactory.deploy();
    // await arpFactory.deployed()
    // console.log("arpFactory============>", arpFactory.address)
  
    // const arpHelper = await ARPHelper.deploy();
    // await arpHelper.deployed()
    // console.log("arpHelper============>", arpHelper.address)
  
    // const arpMinter = await ARPMinter.deploy();
    // await arpMinter.deployed()
    // console.log("arpMinter============>", arpMinter.address)
  
    // const arpNote = await ARPNote.deploy(contractAddresses.address);
    // await arpNote.deployed()
    // console.log("arpNote============>", arpNote.address)
  
    // const lotteryRandomNumberGenerator = await LotteryRandomNumberGenerator.deploy(
    //   "0x0000000000000000000000000000000000000000",
    //   "0x0000000000000000000000000000000000000000",
    //   contractAddresses.address
    // );
    // await lotteryRandomNumberGenerator.deployed()
    // console.log("lotteryRandomNumberGenerator============>", lotteryRandomNumberGenerator.address)
  
    // const lotteryHelper = await LotteryHelper.deploy();
    // await lotteryHelper.deployed()
    // console.log("lotteryHelper============>", lotteryHelper.address)
  
    // const lottery = await Lottery.deploy(lotteryRandomNumberGenerator.address);
    // await lottery.deployed()
    // console.log("lottery============>", lottery.address)
    
    // const billFactory = await BILLFactory.deploy(contractAddresses.address);
    // await billFactory.deployed()
    // console.log("billFactory============>", billFactory.address)
  
    // const billHelper = await BILLHelper.deploy();
    // await billHelper.deployed()
    // console.log("billHelper============>", billHelper.address)
  
    // const billMinter = await BILLMinter.deploy();
    // await billMinter.deployed()
    // console.log("billMinter============>", billMinter.address)
  
    // const billNote = await BILLNote.deploy();
    // await billNote.deployed()
    // console.log("billNote============>", billNote.address)
  
    // const willFactory = await WILLFactory.deploy(contractAddresses.address);
    // await willFactory.deployed()
    // console.log("willFactory============>", willFactory.address)
  
    // const willNote = await WILLNote.deploy();
    // await willNote.deployed()
    // console.log("willNote============>", willNote.address)
  
    // const gameFactory = await GameFactory.deploy();
    // await gameFactory.deployed()
    // console.log("gameFactory============>", gameFactory.address)
  
    // const gameMinter = await GameMinter.deploy();
    // await gameMinter.deployed()
    // console.log("gameMinter============>", gameMinter.address)
  
    // const gameHelper = await GameHelper.deploy();
    // await gameHelper.deployed()
    // console.log("gameHelper============>", gameHelper.address)
  
    // const gameHelper2 = await GameHelper2.deploy();
    // await gameHelper2.deployed()
    // console.log("gameHelper2============>", gameHelper2.address)
    
    // const worldFactory = await WorldFactory.deploy();
    // await worldFactory.deployed()
    // console.log("worldFactory============>", worldFactory.address)
  
    // const worldNote = await WorldNote.deploy();
    // await worldNote.deployed()
    // console.log("worldNote============>", worldNote.address)
  
    // const worldHelper = await WorldHelper.deploy();
    // await worldHelper.deployed()
    // console.log("worldHelper============>", worldHelper.address)
  
    // const worldHelper2 = await WorldHelper2.deploy();
    // await worldHelper2.deployed()
    // console.log("worldHelper2============>", worldHelper2.address)
  
    // const worldHelper3 = await WorldHelper3.deploy();
    // await worldHelper3.deployed()
    // console.log("worldHelper3============>", worldHelper3.address)
  
    // const businessBribeFactory = await BusinessBribeFactory.deploy();
    // await businessBribeFactory.deployed()
    // console.log("businessBribeFactory============>", businessBribeFactory.address)
  
    // const businessGaugeFactory = await BusinessGaugeFactory.deploy();
    // await businessGaugeFactory.deployed()
    // console.log("businessGaugeFactory============>", businessGaugeFactory.address)
  
    // const referralBribeFactory = await ReferralBribeFactory.deploy();
    // await referralBribeFactory.deployed()
    // console.log("referralBribeFactory============>", referralBribeFactory.address)
  
    // const auditorNote = await AuditorNote.deploy();
    // await auditorNote.deployed()
    // console.log("auditorNote============>", auditorNote.address)
  
    // const auditorHelper = await AuditorHelper.deploy();
    // await auditorHelper.deployed()
    // console.log("auditorHelper============>", auditorHelper.address)
  
    // const auditorHelper2 = await AuditorHelper2.deploy();
    // await auditorHelper2.deployed()
    // console.log("auditorHelper2============>", auditorHelper2.address)
  
    // const auditorFactory = await AuditorFactory.deploy();
    // await auditorFactory.deployed()
    // console.log("auditorFactory============>", auditorFactory.address)
    
    // const businessVoter = await BusinessVoter.deploy();
    // await businessVoter.deployed()
    // console.log("businessVoter============>", businessVoter.address)
  
    // const referralVoter = await ReferralVoter.deploy();
    // await referralVoter.deployed()
    // console.log("referralVoter============>", referralVoter.address)
  
    // const sponsorFactory = await SponsorFactory.deploy();
    // await sponsorFactory.deployed()
    // console.log("sponsorFactory============>", sponsorFactory.address)
  
    // const sponsorNote = await SponsorNote.deploy();
    // await sponsorNote.deployed()
    // console.log("sponsorNote============>", sponsorNote.address)
  
    // const ssi = await SSI.deploy()
    // await ssi.deployed()
    // console.log("ssi============>", ssi.address)
  
    // const profile = await Profile.deploy()
    // await profile.deployed()
    // console.log("profile============>", profile.address)
  
    // const profileHelper = await ProfileHelper.deploy()
    // await profileHelper.deployed()
    // console.log("profileHelper============>", profileHelper.address)
    
    // const stakeMarket = await StakeMarket.deploy()
    // await stakeMarket.deployed()
    // console.log("stakeMarket============>", stakeMarket.address)
  
    // const stakeMarketNote = await StakeMarketNote.deploy()
    // await stakeMarketNote.deployed()
    // console.log("stakeMarketNote============>", stakeMarketNote.address)
  
    // const stakeMarketHelper = await StakeMarketHelper.deploy()
    // await stakeMarketHelper.deployed()
    // console.log("stakeMarketHelper============>", stakeMarketHelper.address)
  
    // const stakeMarketBribe = await StakeMarketBribe.deploy()
    // await stakeMarketBribe.deployed()
    // console.log("stakeMarketBribe============>", stakeMarketBribe.address)
  
    // const stakeMarketVoter = await StakeMarketVoter.deploy()
    // await stakeMarketVoter.deployed()
    // console.log("stakeMarketVoter============>", stakeMarketVoter.address)
  
    // const nftSvg = await NFTSVG.deploy()
    // await nftSvg.deployed()
    // console.log("nftSvg============>", nftSvg.address)
  
    // const nfticket = await NFTicket.deploy()
    // await nfticket.deployed()
    // console.log("nfticket============>", nfticket.address)
  
    // const nfticketHelper = await NFTicketHelper.deploy()
    // await nfticketHelper.deployed()
    // console.log("nfticketHelper============>", nfticketHelper.address)
  
    // const nfticketHelper2 = await NFTicketHelper2.deploy(contractAddresses.address)
    // await nfticketHelper2.deployed()
    // console.log("nfticketHelper2============>", nfticketHelper2.address)
  
    // const marketPlaceEvents = await MarketPlaceEvents.deploy()
    // await marketPlaceEvents.deployed()
    // console.log("marketPlaceEvents============>", marketPlaceEvents.address)
  
    // const marketPlaceCollection = await MarketPlaceCollection.deploy(
    //   deployer.address,
    //   contractAddresses.address
    // )
    // console.log("marketPlaceCollection============>", marketPlaceCollection.address)
  
    // const marketPlaceOrders = await MarketPlaceOrders.deploy()
    // await marketPlaceOrders.deployed()
    // console.log("marketPlaceOrders============>", marketPlaceOrders.address)
  
    // const paywallMarketPlaceOrders = await PaywallMarketPlaceOrders.deploy()
    // await paywallMarketPlaceOrders.deployed()
    // console.log("paywallMarketPlaceOrders============>", paywallMarketPlaceOrders.address)
  
    // const nftMarketPlaceOrders = await NFTMarketPlaceOrders.deploy()
    // await nftMarketPlaceOrders.deployed()
    // console.log("nftMarketPlaceOrders============>", nftMarketPlaceOrders.address)
    
    // const marketPlaceTrades = await MarketPlaceTrades.deploy()
    // await marketPlaceTrades.deployed()
    // console.log("marketPlaceTrades============>", marketPlaceTrades.address)
  
    // const paywallMarketPlaceTrades = await PaywallMarketPlaceTrades.deploy()
    // await paywallMarketPlaceTrades.deployed()
    // console.log("paywallMarketPlaceTrades============>", paywallMarketPlaceTrades.address)
    
    // const nftMarketPlaceTrades = await NFTMarketPlaceTrades.deploy()
    // await nftMarketPlaceTrades.deployed()
    // console.log("nftMarketPlaceTrades============>", nftMarketPlaceTrades.address)
  
    // const marketPlaceHelper = await MarketPlaceHelper.deploy()
    // await marketPlaceHelper.deployed()
    // console.log("marketPlaceHelper============>", marketPlaceHelper.address)
  
    // const paywallMarketPlaceHelper = await PaywallMarketPlaceHelper.deploy()
    // await paywallMarketPlaceHelper.deployed()
    // console.log("paywallMarketPlaceHelper============>", paywallMarketPlaceHelper.address)
    
    // const nftMarketPlaceHelper = await NFTMarketPlaceHelper.deploy()
    // await nftMarketPlaceHelper.deployed()
    // console.log("nftMarketPlaceHelper============>", nftMarketPlaceHelper.address)
  
    // const marketPlaceHelper2 = await MarketPlaceHelper2.deploy()
    // await marketPlaceHelper2.deployed()
    // console.log("marketPlaceHelper2============>", marketPlaceHelper2.address)
    
    // const paywallMarketPlaceHelper2 = await PaywallMarketPlaceHelper2.deploy()
    // await paywallMarketPlaceHelper2.deployed()
    // console.log("paywallMarketPlaceHelper2============>", paywallMarketPlaceHelper2.address)
  
    // const nftMarketPlaceHelper2 = await NFTMarketPlaceHelper2.deploy()
    // await nftMarketPlaceHelper2.deployed()
    // console.log("nftMarketPlaceHelper2============>", nftMarketPlaceHelper2.address)
    
    // const marketPlaceHelper3 = await MarketPlaceHelper3.deploy()
    // await marketPlaceHelper3.deployed()
    // console.log("marketPlaceHelper3============>", marketPlaceHelper3.address)
    
    // const paywallMarketPlaceHelper3 = await PaywallMarketPlaceHelper3.deploy()
    // await paywallMarketPlaceHelper3.deployed()
    // console.log("paywallMarketPlaceHelper3============>", paywallMarketPlaceHelper3.address)
  
    // const nftMarketPlaceHelper3 = await NFTMarketPlaceHelper3.deploy()
    // await nftMarketPlaceHelper3.deployed()
    // console.log("nftMarketPlaceHelper3============>", nftMarketPlaceHelper3.address)
  
    // const paywallARPFactory = await PaywallARPFactory.deploy();
    // await paywallARPFactory.deployed()
    // console.log("paywallARPFactory============>", paywallARPFactory.address)
  
    // const paywallARPHelper = await PaywallARPHelper.deploy();
    // await paywallARPHelper.deployed()
    // console.log("paywallARPHelper============>", paywallARPHelper.address)
    
    // const minterFactory = await MinterFactory.deploy();
    // await minterFactory.deployed()
    // console.log("minterFactory============>", minterFactory.address)
  
    // const vavaFactory = await VavaFactory.deploy(contractAddresses.address)
    // await vavaFactory.deployed()
    // console.log("vavaFactory============>", vavaFactory.address)
  
    // const vavaHelper = await VavaHelper.deploy()
    // await vavaHelper.deployed()
    // console.log("vavaHelper============>", vavaHelper.address)
    
    // const vavaHelper2 = await VavaHelper2.deploy()
    // await vavaHelper2.deployed()
    // console.log("vavaHelper2============>", vavaHelper2.address)
  
    // const veFactory = await VeFactory.deploy()
    // await veFactory.deployed()
    // console.log("veFactory============>", veFactory.address)
  
    // const valuepoolVoter = await ValuepoolVoter.deploy()
    // await valuepoolVoter.deployed()
    // console.log("valuepoolVoter============>", valuepoolVoter.address)
    
    // const trustBountiesVoter = await TrustBountiesVoter.deploy()
    // await trustBountiesVoter.deployed()
    // console.log("trustBountiesVoter============>", trustBountiesVoter.address)
  
    // const trustBounties = await TrustBounties.deploy()
    // await trustBounties.deployed()
    // console.log("trustBounties============>", trustBounties.address)
  
    // const trustBountiesHelper = await TrustBountiesHelper.deploy()
    // await trustBountiesHelper.deployed()
    // console.log("trustBountiesHelper============>", trustBountiesHelper.address)
  
    // const extraTokenFactory = await ExtraTokenFactory.deploy(contractAddresses.address)
    // await extraTokenFactory.deployed()
    // console.log("extraTokenFactory============>", extraTokenFactory.address)
  
    // const rampHelper = await RampHelper.deploy(tFiat.address, 1)
    // await rampHelper.deployed()
    // console.log("rampHelper============>", rampHelper.address)
  
    // const rampHelper2 = await RampHelper2.deploy()
    // await rampHelper2.deployed()
    // console.log("rampHelper2============>", rampHelper2.address)
  
    // const rampFactory = await RampFactory.deploy()
    // await rampFactory.deployed()
    // console.log("rampFactory============>", rampFactory.address)
  
    // const rampAds = await RampAds.deploy()
    // await rampAds.deployed()
    // console.log("rampAds============>", rampAds.address)
  
    // set ups
    // await tFiat.updateMinter(deployer.address)
    // await tFiat.mint(deployer.address, ethers.BigNumber.from("1000000000000000000000000000"))
    // console.log("tFiat balance=============>", await tFiat.balanceOf(deployer.address))
  
    // await card.updateVe(veAddress)
    // console.log("card.updateVe============> Done!")
  
    // await feeTo.setContractAddress(contractAddresses.address)
    // console.log("feeTo.setContractAddress===========> Done!")
    
    // await acceleratorVoter.setContractAddress(contractAddresses.address)
    // console.log("acceleratorVoter.setContractAddress===========> Done!")
  
    // await contributorVoter.setContractAddress(contractAddresses.address)
    // console.log("contributorVoter.setContractAddress===========> Done!")
  
    // await arpFactory.setContractAddress(contractAddresses.address)
    // console.log("arpFactory.setContractAddress===========> Done!")
  
    // await arpHelper.setContractAddress(contractAddresses.address)
    // console.log("arpHelper.setContractAddress===========> Done!")
  
    // await arpMinter.setContractAddress(contractAddresses.address)
    // console.log("arpMinter.setContractAddress===========> Done!")
  
    // await businessMinter.setContractAddress(contractAddresses.address)
    // console.log("businessMinter.setContractAddress===========> Done!")
  
    // await worldFactory.setContractAddress(contractAddresses.address)
    // console.log("worldFactory.setContractAddress===========> Done!")
  
    // await worldNote.setContractAddress(contractAddresses.address)
    // console.log("worldNote.setContractAddress===========> Done!")
  
    // await worldHelper.setContractAddress(contractAddresses.address)
    // console.log("worldHelper.setContractAddress===========> Done!")
  
    // await worldHelper2.setContractAddress(contractAddresses.address)
    // console.log("worldHelper2.setContractAddress===========> Done!")
  
    // await worldHelper3.setContractAddress(contractAddresses.address)
    // console.log("worldHelper3.setContractAddress===========> Done!")
  
    // await billHelper.setContractAddress(contractAddresses.address)
    // console.log("billHelper.setContractAddress===========> Done!")
  
    // await billMinter.setContractAddress(contractAddresses.address)
    // console.log("billMinter.setContractAddress===========> Done!")
  
    // await billNote.setContractAddress(contractAddresses.address)
    // console.log("billNote.setContractAddress===========> Done!")
  
    // await willNote.setContractAddress(contractAddresses.address)
    // console.log("willNote.setContractAddress===========> Done!")
  
    // await lottery.setContractAddress(contractAddresses.address)
    // console.log("lottery.setContractAddress===========> Done!")
  
    // await lotteryHelper.setContractAddress(contractAddresses.address)
    // console.log("lotteryHelper.setContractAddress===========> Done!")
  
    // await gameFactory.setContractAddress(contractAddresses.address)
    // console.log("gameFactory.setContractAddress===========> Done!")
  
    // await gameMinter.setContractAddress(contractAddresses.address)
    // console.log("gameMinter.setContractAddress===========> Done!")
  
    // await gameHelper.setContractAddress(contractAddresses.address)
    // console.log("gameHelper.setContractAddress===========> Done!")
  
    // await gameHelper2.setContractAddress(contractAddresses.address)
    // console.log("gameHelper2.setContractAddress===========> Done!")
  
    // await businessGaugeFactory.setContractAddress(contractAddresses.address)
    // console.log("businessGaugeFactory.setContractAddress===========> Done!")
  
    // await businessBribeFactory.setContractAddress(contractAddresses.address)
    // console.log("businessBribeFactory.setContractAddress===========> Done!")
    
    // await referralBribeFactory.setContractAddress(contractAddresses.address)
    // console.log("referralBribeFactory.setContractAddress===========> Done!")
  
    // await businessVoter.setContractAddress(contractAddresses.address)
    // console.log("businessVoter.setContractAddress===========> Done!")
    
    // await referralVoter.setContractAddress(contractAddresses.address)
    // console.log("referralVoter.setContractAddress===========> Done!")
  
    // await trustBounties.setContractAddress(contractAddresses.address)
    // console.log("trustBounties.setContractAddress===========> Done!")
    
    // await trustBountiesHelper.setContractAddress(contractAddresses.address)
    // console.log("trustBountiesHelper.setContractAddress===========> Done!")
  
    // await trustBountiesVoter.setContractAddress(contractAddresses.address)
    // console.log("trustBountiesVoter.setContractAddress===========> Done!")
    
    // await auditorNote.setContractAddress(contractAddresses.address)
    // console.log("auditorNote.setContractAddress===========> Done!")
  
    // await auditorHelper.setContractAddress(contractAddresses.address)
    // console.log("auditorHelper.setContractAddress===========> Done!")
  
    // await auditorHelper2.setContractAddress(contractAddresses.address)
    // console.log("auditorHelper2.setContractAddress===========> Done!")
  
    // await auditorFactory.setContractAddress(contractAddresses.address)
    // console.log("auditorFactory.setContractAddress===========> Done!")
    
    // await sponsorFactory.setContractAddress(contractAddresses.address)
    // console.log("sponsorFactory.setContractAddress===========> Done!")
  
    // await sponsorNote.setContractAddress(contractAddresses.address)
    // console.log("sponsorNote.setContractAddress===========> Done!")
  
    // await valuepoolVoter.setContractAddress(contractAddresses.address)
    // console.log("valuepoolVoter.setContractAddress===========> Done!")
    
    // await vavaHelper2.setContractAddress(contractAddresses.address)
    // console.log("vavaHelper2.setContractAddress===========> Done!")
    
    // await vavaHelper.setContractAddress(contractAddresses.address)
    // console.log("vavaHelper.setContractAddress===========> Done!")
  
    // await ssi.setContractAddress(contractAddresses.address)
    // console.log("ssi.setContractAddress===========> Done!")
  
    // await bettingHelper.setContractAddress(contractAddresses.address)
    // console.log("bettingHelper.setContractAddress===========> Done!")
  
    // await bettingMinter.setContractAddress(contractAddresses.address)
    // console.log("bettingMinter.setContractAddress===========> Done!")
  
    // await bettingFactory.setContractAddress(contractAddresses.address)
    // console.log("bettingFactory.setContractAddress===========> Done!")
  
    // await stakeMarket.setContractAddress(contractAddresses.address)
    // console.log("stakeMarket.setContractAddress===========> Done!")
  
    // await stakeMarketNote.setContractAddress(contractAddresses.address)
    // console.log("stakeMarketNote.setContractAddress===========> Done!")
  
    // await stakeMarketHelper.setContractAddress(contractAddresses.address)
    // console.log("stakeMarketHelper.setContractAddress===========> Done!")
    
    // await stakeMarketBribe.setContractAddress(contractAddresses.address)
    // console.log("stakeMarketBribe.setContractAddress===========> Done!")
  
    // await stakeMarketVoter.setContractAddress(contractAddresses.address)
    // console.log("stakeMarketVoter.setContractAddress===========> Done!")
    
    // await profile.setContractAddress(contractAddresses.address)
    // console.log("profile.setContractAddress===========> Done!")
  
    // await profileHelper.setContractAddress(contractAddresses.address)
    // console.log("profileHelper.setContractAddress===========> Done!")
  
    // await nftSvg.setContractAddress(contractAddresses.address)
    // console.log("nftSvg.setContractAddress===========> Done!")
  
    // await nfticket.setContractAddress(contractAddresses.address)
    // console.log("nfticket.setContractAddress===========> Done!")
    
    // await nfticketHelper.setContractAddress(contractAddresses.address)
    // console.log("nfticketHelper.setContractAddress===========> Done!")
    
    // await marketPlaceOrders.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceOrders.setContractAddress===========> Done!")
  
    // await paywallMarketPlaceOrders.setContractAddress(contractAddresses.address)
    // console.log("paywallMarketPlaceOrders.setContractAddress===========> Done!")
  
    // await nftMarketPlaceOrders.setContractAddress(contractAddresses.address)
    // console.log("nftMarketPlaceOrders.setContractAddress===========> Done!")
    
    // await marketPlaceTrades.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceTrades.setContractAddress===========> Done!")
  
    // await paywallMarketPlaceTrades.setContractAddress(contractAddresses.address)
    // console.log("paywallMarketPlaceTrades.setContractAddress===========> Done!")
  
    // await nftMarketPlaceTrades.setContractAddress(contractAddresses.address)
    // console.log("nftMarketPlaceTrades.setContractAddress===========> Done!")
    
    // await marketPlaceHelper.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceHelper.setContractAddress===========> Done!")
  
    // await paywallMarketPlaceHelper.setContractAddress(contractAddresses.address)
    // console.log("paywallMarketPlaceHelper.setContractAddress===========> Done!")
  
    // await nftMarketPlaceHelper.setContractAddress(contractAddresses.address)
    // console.log("nftMarketPlaceHelper.setContractAddress===========> Done!")
    
    // await marketPlaceHelper2.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceHelper2.setContractAddress===========> Done!")
  
    // await paywallMarketPlaceHelper2.setContractAddress(contractAddresses.address)
    // console.log("paywallMarketPlaceHelper2.setContractAddress===========> Done!")
  
    // await nftMarketPlaceHelper2.setContractAddress(contractAddresses.address)
    // console.log("nftMarketPlaceHelper2.setContractAddress===========> Done!")
    
    // await marketPlaceHelper3.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceHelper3.setContractAddress===========> Done!")
  
    // await paywallMarketPlaceHelper3.setContractAddress(contractAddresses.address)
    // console.log("paywallMarketPlaceHelper3.setContractAddress===========> Done!")
  
    // await nftMarketPlaceHelper3.setContractAddress(contractAddresses.address)
    // console.log("nftMarketPlaceHelper3.setContractAddress===========> Done!")
  
    // await marketPlaceEvents.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceEvents.setContractAddress===========> Done!")
  
    // await marketPlaceCollection.setContractAddress(contractAddresses.address)
    // console.log("marketPlaceCollection.setContractAddress===========> Done!")
  
    // await paywallARPFactory.setContractAddress(contractAddresses.address)
    // console.log("paywallARPFactory.setContractAddress===========> Done!")
  
    // await paywallARPHelper.setContractAddress(contractAddresses.address)
    // console.log("paywallARPHelper.setContractAddress===========> Done!")
  
    // await minterFactory.setContractAddress(contractAddresses.address)
    // console.log("minterFactory.setContractAddress===========> Done!")
  
    // await rampFactory.setContractAddress(contractAddresses.address)
    // console.log("rampFactory.setContractAddress===========> Done!")
  
    // await rampHelper.setContractAddress(contractAddresses.address)
    // console.log("rampHelper.setContractAddress===========> Done!")
  
    // await rampHelper2.setContractAddress(contractAddresses.address)
    // console.log("rampHelper2.setContractAddress===========> Done!")
  
    // await rampAds.setContractAddress(contractAddresses.address)
    // console.log("rampAds.setContractAddress===========> Done!")
  
    // // ####################### setDev
    // await contractAddresses.setDevaddr(deployer.address)
    // console.log("contractAddresses.setDevaddr===========> Done!")  
  
    // await contractAddresses.setToken(tFiat.address)
    // console.log("contractAddresses.setToken===========> Done!")  
    
    // await contractAddresses.setPoolGauge(poolGauge.address)
    // console.log("contractAddresses.setPoolGauge===========> Done!")  

    // await contractAddresses.addContent('nsfw')
    // console.log("contractAddresses.addContent===========> Done!")  
    
    // await businessGaugeFactory.updateVoter([businessVoter.address, referralVoter.address], true)
    // console.log("businessGaugeFactory.updateVoter===========> Done!")  
  
    // await contractAddresses.setBusinessMinter(businessMinter.address)
    // console.log("contractAddresses.setBusinessMinter===========> Done!")
    
    // await contractAddresses.setLotteryAddress(lottery.address)
    // console.log("contractAddresses.setLotteryAddress===========> Done!")
  
    // await contractAddresses.setLotteryHelper(lotteryHelper.address)
    // console.log("contractAddresses.setLotteryHelper===========> Done!")
  
    // await contractAddresses.setARPFactory(arpFactory.address)
    // console.log("contractAddresses.setARPFactory===========> Done!")
  
    // await contractAddresses.setARPHelper(arpHelper.address)
    // console.log("contractAddresses.setARPHelper===========> Done!")
  
    // await contractAddresses.setARPMinter(arpMinter.address)
    // console.log("contractAddresses.setARPMinter===========> Done!")
  
    // await contractAddresses.setARPNote(arpNote.address)
    // console.log("contractAddresses.setARPNote===========> Done!")
  
    // await contractAddresses.setBILLFactory(billFactory.address)
    // console.log("contractAddresses.setBILLFactory===========> Done!")
  
    // await contractAddresses.setBILLHelper(billHelper.address)
    // console.log("contractAddresses.setBILLHelper===========> Done!")
  
    // await contractAddresses.setBILLMinter(billMinter.address)
    // console.log("contractAddresses.setBILLMinter===========> Done!")
  
    // await contractAddresses.setBILLNote(billNote.address)
    // console.log("contractAddresses.setBILLNote===========> Done!")
  
    // await contractAddresses.setWillFactory(willFactory.address)
    // console.log("contractAddresses.setWillFactory===========> Done!")
  
    // await contractAddresses.setWillNote(willNote.address)
    // console.log("contractAddresses.setWillNote===========> Done!")
  
    // await contractAddresses.setGameFactory(gameFactory.address)
    // console.log("contractAddresses.setGameFactory===========> Done!")
  
    // await contractAddresses.setGameMinter(gameMinter.address)
    // console.log("contractAddresses.setGameMinter===========> Done!")
  
    // await contractAddresses.setGameHelper(gameHelper.address)
    // console.log("contractAddresses.setGameHelper===========> Done!")
  
    // await contractAddresses.setGameHelper2(gameHelper2.address)
    // console.log("contractAddresses.setGameHelper2===========> Done!")
  
    // await contractAddresses.setPaywallARPFactory(paywallARPFactory.address)
    // console.log("contractAddresses.setPaywallARPFactory===========> Done!")
  
    // await contractAddresses.setPaywallARPHelper(paywallARPHelper.address)
    // console.log("contractAddresses.setPaywallARPHelper===========> Done!")
  
    // await contractAddresses.setBusinessGaugeFactory(businessGaugeFactory.address)
    // console.log("contractAddresses.setBusinessGaugeFactory===========> Done!")
  
    // await contractAddresses.setBusinessBribeFactory(businessBribeFactory.address)
    // console.log("contractAddresses.setBusinessBribeFactory===========> Done!")
  
    // await contractAddresses.setReferralBribeFactory(referralBribeFactory.address)
    // console.log("contractAddresses.setReferralBribeFactory===========> Done!")
  
    // await contractAddresses.setBusinessVoter(businessVoter.address)
    // console.log("contractAddresses.setBusinessVoter===========> Done!")
    
    // await contractAddresses.setReferralVoter(referralVoter.address)
    // console.log("contractAddresses.setReferralVoter===========> Done!")
  
    // await contractAddresses.setAuditorHelper(auditorHelper.address)
    // console.log("contractAddresses.setAuditorHelper===========> Done!")
  
    // await contractAddresses.setAuditorHelper2(auditorHelper2.address)
    // console.log("contractAddresses.setAuditorHelper2===========> Done!")
    
    // await contractAddresses.setAuditorFactory(auditorFactory.address)
    // console.log("contractAddresses.setAuditorFactory===========> Done!")
  
    // await contractAddresses.setAuditorNote(auditorNote.address)
    // console.log("contractAddresses.setAuditorNote===========> Done!")
  
    // await contractAddresses.setAcceleratorVoter(acceleratorVoter.address)
    // console.log("contractAddresses.setAcceleratorVoter===========> Done!")
  
    // await contractAddresses.setContributorVoter(contributorVoter.address)
    // console.log("contractAddresses.setContributorVoter===========> Done!")
  
    // await contractAddresses.setTrustBounty(trustBounties.address)
    // console.log("contractAddresses.setTrustBounty===========> Done!")
  
    // await contractAddresses.setTrustBountyHelper(trustBountiesHelper.address)
    // console.log("contractAddresses.setTrustBountyHelper===========> Done!")
  
    // await contractAddresses.setTrustBountyVoter(trustBountiesVoter.address)
    // console.log("contractAddresses.setTrustBountyVoter===========> Done!")
  
    // await trustBountiesHelper.updateVes(veAddress, true)
    // console.log("trustBountiesHelper.updateVes===========> Done!")
  
    // await trustBountiesHelper.updateWhitelistedTokens([futureCollateral.address, tFiat.address], true)
    // console.log("trustBountiesHelper.updateWhitelistedTokens===========> Done!")
  
    // await trustBountiesHelper.updateCanAttach(marketPlaceEvents.address, true)
    // console.log("trustBountiesHelper.updateCanAttach===========> Done!")
  
    // await trustBountiesHelper.updateCanAttach(futureCollateral.address, true)
    // console.log("trustBountiesHelper.updateCanAttach===========> Done!")
      
    // await businessMinter.updateVes([ve.address], [ve_dist.address], true)
    // console.log("businessMinter.updateVes===========> Done!")
  
    // await businessMinter.initialize()
    // console.log("businessMinter.initialize===========> Done!")
  
    // await ve_dist.setDepositor(businessMinter.address)
    // console.log("ve_dist.setDepositor===========> Done!")
  
    // await ve.setVoter(acceleratorVoter.address)
    // console.log("ve.setVoter(acceleratorVoter)===========> Done!")
  
    // await ve.setVoter(businessVoter.address)
    // console.log("ve.setVoter(businessVoter)===========> Done!")
  
    // await ve.setVoter(contributorVoter.address)
    // console.log("ve.setVoter(contributorVoter)===========> Done!")
  
    // await ve.setVoter(referralVoter.address)
    // console.log("ve.setVoter(referralVoter)===========> Done!")
  
    // await businessGaugeFactory.updateVoter([
    //   acceleratorVoter.address, 
    //   businessVoter.address, 
    //   contributorVoter.address, 
    //   referralVoter.address
    // ], true)
    // console.log("businessGaugeFactory.updateVoter==================>Done!")
  
    // await contractAddresses.setSponsorFactory(sponsorFactory.address)
    // console.log("contractAddresses.setSponsorFactory===========> Done!")
  
    // await contractAddresses.setSponsorNote(sponsorNote.address)
    // console.log("contractAddresses.setSponsorNote===========> Done!")
  
    // await contractAddresses.setValuepoolFactory(vavaFactory.address)
    // console.log("contractAddresses.setVavaFactory===========> Done!")
  
    // await contractAddresses.setValuepoolHelper(vavaHelper.address)
    // console.log("contractAddresses.setValuepoolHelper===========> Done!")
  
    // await contractAddresses.setValuepoolHelper2(vavaHelper2.address)
    // console.log("contractAddresses.setValuepoolHelper2===========> Done!")
  
    // await contractAddresses.setVeFactory(veFactory.address)
    // console.log("contractAddresses.setVeFactory===========> Done!")
  
    // await contractAddresses.setValuepoolVoter(valuepoolVoter.address)
    // console.log("contractAddresses.setValuepoolVoter===========> Done!")
  
    // await contractAddresses.setSSI(ssi.address)
    // console.log("contractAddresses.setSSI===========> Done!")
  
    // await contractAddresses.setStakeMarket(stakeMarket.address)
    // console.log("contractAddresses.setStakeMarket===========> Done!")
  
    // await contractAddresses.setStakeMarketNote(stakeMarketNote.address)
    // console.log("contractAddresses.setStakeMarketNote===========> Done!")
  
    // await contractAddresses.setStakeMarketHelper(stakeMarketHelper.address)
    // console.log("contractAddresses.setStakeMarketHelper===========> Done!")
  
    // await contractAddresses.setStakeMarketBribe(stakeMarketBribe.address)
    // console.log("contractAddresses.setStakeMarketBribe===========> Done!")
  
    // await contractAddresses.setStakeMarketVoter(stakeMarketVoter.address)
    // console.log("contractAddresses.setStakeMarketVoter===========> Done!")
    
    // await contractAddresses.setProfile(profile.address)
    // console.log("contractAddresses.setProfile===========> Done!")
  
    // await contractAddresses.setProfileHelper(profileHelper.address)
    // console.log("contractAddresses.setProfileHelper===========> Done!")
  
    // await contractAddresses.setToken(tFiat.address)
    // console.log("contractAddresses.setToken===========> Done!")
  
    // await contractAddresses.setNfticket(nfticket.address)
    // console.log("contractAddresses.setNfticket===========> Done!")
    
    // await contractAddresses.setNfticketHelper(nfticketHelper.address)
    // console.log("contractAddresses.setNfticketHelper===========> Done!")
    
    // await contractAddresses.setNfticketHelper2(nfticketHelper2.address)
    // console.log("contractAddresses.setNfticketHelper2===========> Done!")
    
    // await contractAddresses.setPaywallMarketHelpers3(paywallMarketPlaceHelper3.address)
    // console.log("contractAddresses.setPaywallMarketHelpers3===========> Done!")
  
    // await contractAddresses.setMarketHelpers3(marketPlaceHelper3.address)
    // console.log("contractAddresses.setMarketHelpers3===========> Done!")
  
    // await contractAddresses.setNFTMarketHelpers3(nftMarketPlaceHelper3.address)
    // console.log("contractAddresses.setNFTMarketHelpers3===========> Done!")
    
    // await contractAddresses.setPaywallMarketHelpers2(paywallMarketPlaceHelper2.address)
    // console.log("contractAddresses.setPaywallMarketHelpers2===========> Done!")
  
    // await contractAddresses.setMarketHelpers2(marketPlaceHelper2.address)
    // console.log("contractAddresses.setMarketHelpers2===========> Done!")
  
    // await contractAddresses.setNFTMarketHelpers2(nftMarketPlaceHelper2.address)
    // console.log("contractAddresses.setNFTMarketHelpers2===========> Done!")
    
    // await contractAddresses.setMarketHelpers(marketPlaceHelper.address)
    // console.log("contractAddresses.setMarketHelpers===========> Done!")
  
    // await contractAddresses.setPaywallMarketHelpers(paywallMarketPlaceHelper.address)
    // console.log("contractAddresses.setPaywallMarketHelpers===========> Done!")
  
    // await contractAddresses.setNFTMarketHelpers(nftMarketPlaceHelper.address)
    // console.log("contractAddresses.setNFTMarketHelpers===========> Done!")
    
    // await contractAddresses.setMarketTrades(marketPlaceTrades.address)
    // console.log("contractAddresses.setMarketTrades===========> Done!")
  
    // await contractAddresses.setPaywallMarketTrades(paywallMarketPlaceTrades.address)
    // console.log("contractAddresses.setPaywallMarketTrades===========> Done!")
  
    // await contractAddresses.setNFTMarketTrades(nftMarketPlaceTrades.address)
    // console.log("contractAddresses.setNFTMarketTrades===========> Done!")
  
    // await contractAddresses.setMarketCollections(marketPlaceCollection.address)
    // console.log("contractAddresses.setMarketCollections===========> Done!")
  
    // await contractAddresses.setMarketPlaceEvents(marketPlaceEvents.address)
    // console.log("contractAddresses.setMarketPlaceEvents===========> Done!")
  
    // await contractAddresses.setMarketOrders(marketPlaceOrders.address)
    // console.log("contractAddresses.setMarketOrders===========> Done!")
  
    // await contractAddresses.setPaywallMarketOrders(paywallMarketPlaceOrders.address)
    // console.log("contractAddresses.setPaywallMarketOrders===========> Done!")
  
    // await contractAddresses.setNFTMarketOrders(nftMarketPlaceOrders.address)
    // console.log("contractAddresses.setNFTMarketOrders===========> Done!")
  
    // await contractAddresses.setMinterFactory(minterFactory.address)
    // console.log("contractAddresses.setMinterFactory===========> Done!")
  
    // await contractAddresses.setNftSvg(nftSvg.address)
    // console.log("contractAddresses.setNftSvg===========> Done!")
  
    // await contractAddresses.setWorldFactory(worldFactory.address)
    // console.log("contractAddresses.setWorldFactory===========> Done!")
  
    // await contractAddresses.setWorldNote(worldNote.address)
    // console.log("contractAddresses.setWorldNote===========> Done!")
  
    // await contractAddresses.setWorldHelper(worldHelper.address)
    // console.log("contractAddresses.setWorldHelper===========> Done!")
  
    // await contractAddresses.setWorldHelper2(worldHelper2.address)
    // console.log("contractAddresses.setWorldHelper2===========> Done!")
  
    // await contractAddresses.setWorldHelper3(worldHelper3.address)
    // console.log("contractAddresses.setWorldHelper3===========> Done!")
  
    // await contractAddresses.setRampHelper(rampHelper.address)
    // console.log("contractAddresses.setRampHelper===========> Done!")
  
    // await contractAddresses.setRampHelper2(rampHelper2.address)
    // console.log("contractAddresses.setRampHelper2===========> Done!")
  
    // await contractAddresses.setRampFactory(rampFactory.address)
    // console.log("contractAddresses.setRampFactory===========> Done!")
  
    // await contractAddresses.setRampAds(rampAds.address)
    // console.log("contractAddresses.setRampAds===========> Done!")
  
    // await contractAddresses.setBettingFactory(bettingFactory.address)
    // console.log("contractAddresses.setBettingFactory===========> Done!")
  
    // await contractAddresses.setBettingHelper(bettingHelper.address)
    // console.log("contractAddresses.setBettingHelper===========> Done!")
  
    // await contractAddresses.setBettingMinter(bettingMinter.address)
    // console.log("contractAddresses.setBettingMinter===========> Done!")
      
    // await gameFactory.updateWhitelist(tFiat.address, true)
    // console.log("gameFactory.isWhitelisted==========>")
  
    // await marketPlaceHelper3.addDtoken(tFiat.address)

    // console.log("marketPlaceHelper3.addDtoken==========>", await marketPlaceHelper3.dTokenSetContains(tFiat.address))
    // await marketPlaceHelper3.addVetoken(veAddress)
    // console.log("marketPlaceHelper3.addVetoken==========>", await marketPlaceHelper3.veTokenSetContains(ve.address))
    
    // await rampHelper.addDtoken(veAddress)
    // console.log("rampHelper.addDtoken==========>Done")
    // await rampHelper.addDtoken(tFiatAddress)
    // console.log("rampHelper.addDtoken==========>Done")
    // await tFiat.updateMinter(rampHelper.address)
    // console.log("tFiat.updateMinter==========>Done")
  
    // await marketPlaceCollection.addCollection(0, 0, 0, 0, 0, 0, tFiat.address, false, false);
    // console.log("marketPlaceCollection.addCollection===========> Done!")
    // await marketPlaceCollection.updateCollection(
    //   "Payswap",
    //   "Neural Pepe (NP) is a genesis collection of the Neural Frens project which consists of 7,777 AI-generated frogs turned into NFTs. Wearing a Neural Pepe on your avatar increases your chances to get a girlfriend.",
    //   "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/banner-lg.png",
    //   "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/banner-sm.png",
    //   "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/avatar.png",
    //   "email,telegram",
    //   "ekontetevi@gmail.com,+22892227100",
    //   "0xfd045C059AC6423F9B21A456a432Ead97a93F706",
    //   "Togo",
    //   "Lome-Togo",
    //   "All"
    // );
    // console.log("marketPlaceCollection.updateCollection===========> Done!")
    // await marketPlaceOrders.createAskOrder(
    //   "uber",
    //   ethers.BigNumber.from("1000000000000000000"),
    //   0,
    //   0,
    //   true,
    //   true,
    //   true,
    //   0,
    //   10,
    //   0, 
    //   tFiat.address, 
    //   ve.address
    // );
    // console.log("marketPlaceOrders.createAskOrder===========> Done!")
    // await marketPlaceCollection.emitAskInfo(
    //   "uber",
    //   "Book a car in minutes",
    //   [],
    //   0,
    //   0,
    //   0,
    //   true,
    //   "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/neural-pepe-1266-1000.png,https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/neural-pepe-1266.png",
    //   "Togo",
    //   "Lome-Togo",
    //   "All"
    // )
    // console.log("marketPlaceCollection.emitAskInfo===========> Done!")
    // await paywallMarketPlaceOrders.createAskOrder(
    //   "uber",
    //   ethers.BigNumber.from("1000000000000000000"),
    //   0,
    //   0,
    //   true,
    //   true,
    //   true,
    //   0,
    //   10,
    //   0, 
    //   tFiat.address, 
    //   ve.address
    // );
    // console.log("paywallMarketPlaceOrders.createAskOrder===========> Done!")
    // await marketPlaceCollection.emitAskInfo(
    //   "uber",
    //   "Book a car in minutes",
    //   [],
    //   0,
    //   0,
    //   1,
    //   true,
    //   "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/neural-pepe-1266-1000.png,https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/neural-pepe-1266.png",
    //   "Togo",
    //   "Lome-Togo",
    //   "All"
    // )
    // console.log("marketPlaceCollection.emitAskInfo===========> Done!")
    // // partner
    // await marketPlaceOrders.addReferral(
    //   deployer.address,
    //   deployer.address,
    //   "",
    //   [0,0,0] //[_referrerFee, _bountyId, type]
    // )
    // // add paywall
    // await paywallMarketPlaceOrders.addReferral(
    //   deployer.address,
    //   deployer.address,
    //   "uber",
    //   "",
    //   "",
    //   [0,0,5] //[_referrerFee, _bountyId, type]
    // )
    // console.log("paywallMarketPlaceOrders.addReferral===========> Done!", await marketPlaceHelper2.partnerShip(1,1))
    // await nftSvg.updateDescription(nfticketHelper2.address, "This is a receipt of your purchase of a collectible in the eCollectible marketplace. This is a receipt of your purchase of a collectible in the eCollectible ma.")
    
    // await tFiat.approve(marketPlaceTrades.address, ethers.BigNumber.from("1000000000000000000"))
    // await marketPlaceTrades.buyWithContract(
    //   deployer.address,
    //   deployer.address,
    //   "0x0000000000000000000000000000000000000000", 
    //   "uber",
    //   0,
    //   0,
    //   []
    // )
    // console.log("nfticketHelper2.ownerOf(6)==============>", deployer.address, await nftSvg.contractAddress(), await nftSvg.description(deployer.address))
    // console.log("nftSvg.constructTokenURI================>", await nftSvg.constructTokenURI(
    //     1,
    //     "", 
    //     veAddress, 
    //     tFiatAddress, 
    //     deployer.address,
    //     "0x0000000000000000000000000000000000000000",
    //     ["http://www.youtube.com/embed/X0NsiBzPoEI","https://player.vimeo.com/video/601252574","http://www.youtube.com/embed/ICScK1ST0xU", "https://www.youtube.com/embed/qqbD8VBkh3s","https://www.youtube.com/embed/88e4alx1_0c"],
    //     ["ID", "Name", "Rating", "Age", "Gender", "Last Name", "First Name", "Email", "Location", "Citizenship", "Status", "Height"],
    //     ["55", "Tepa", "5/5", "31", "Male", "Ekon", "Tetevi", "ekontetevi@gmail.com", "Agoe/Lome/Togo", "Togolese", "Single", "5.10 FT"],
    //     ["This is a receipt of your purchase of a collectible in the eCollectible marketplace. This is a receipt of your purchase of a collectible in the eCollectible marketplace.", "Appreciate that buddy. Appreciate that buddy. Appreciate that buddy. Appreciate that buddy."]
    // ))
    // console.log("nfticketHelper2.tokenURI(1)==============>", await nfticketHelper2.tokenURI(1))
    // console.log("nfticketHelper2.tokenURI(6)==============>", await nfticketHelper2.tokenURI(6))
    // console.log("nfticketHelper2.tokenURI(3)==============>", await nfticketHelper2.tokenURI(3))
    // await profile.createSpecificProfile("Tepa",1,0)
    // console.log("profile1==============>", await profile.profileInfo(1))
    // await profile.shareEmail(deployer.address)
    // console.log("profile.shareEmail==============>", await profile.sharedEmail(deployer.address))
    // await ssi.generateIdentityProof(deployer.address,1,1,86700 * 7,"ssid","tepa")
    // await ssi.generateIdentityProof(deployer.address,1,1,86700 * 7 * 4,"testify_age","gt_18")
    // console.log("ssi.generateIdentityProof==============>", await ssi.metadata(1), await ssi.metadata(2))
    // await ssi.updateSSID(1,1)
    // console.log("ssi.updateSSID==============>", await ssi.ssid(1), await ssi.getSSID(1))
    // console.log("ssi.getSSIData==============>", await ssi.getSSIData(1))
    // await profile.updateSSID()
    // console.log("profile.updateSSID==============>", await profile.isUnique(1), await profile.profileInfo(1))
    // await profileHelper.updateIdentityProofs(1, [1])
    // console.log("profileHelper.updateIdentityProofs==============>Done")
    // await nftSvg.updateDescription(deployer.address, "World NFTs")
    // console.log("nftSvg.updateDescription==============>", await nftSvg.description(deployer.address))
  
      // await willFactory.createGauge(deployer.address)
      // let willAddress = (await willNote.getAllWills(0))[0]
      // let will = WILL.attach(willAddress)
      // console.log("willAddress==================>", willAddress, will.address)
      // await will.updateProtocol(
      //   1,
      //   deployer.address,
      //   [tFiat.address],
      //   [10000],
      //   "https://www.youtube.com/watch?v=skFUffelVU4",
      //   "my desicrption"
      // )
      // console.log("will.updateProtocol==================>Done")
      // console.log("will.protocolInfo(1)==================>", await will.protocolInfo(1))
  
      // await willNote.transferDueToNotePayable(
      //   will.address,
      //   deployer.address,
      //   1,
      //   0,
      //   0
      // )
      // console.log("willNote.transferDueToNotePayable==================>Done")
      // console.log("willNote.notes(1)==================>", await willNote.notes(1))
      // console.log("willNote.tokenURI(1)==================>", await willNote.tokenURI(1))
    
    // await worldFactory.createGauge(1, deployer.address)
    // let worldAddress = (await worldNote.getAllWorlds(0))[0]
    // let world = World.attach(worldAddress)
    // console.log("worldAddress==================>", worldAddress, world.address)
    // await worldHelper2.updateCategory(worldAddress, 1)
    // console.log("updateCategory==================>", await worldHelper2.getWorldType(worldAddress))
    // await worldNote.updateProfile(worldAddress)
    // console.log("updateProfile==================>Done")
    // await world.updateProtocol(
    //   deployer.address,
    //   tFiat.address,
    //   [10,87700,0,0],
    //   0,
    //   0,
    //   1,
    //   "https://www.youtube.com/embed/skFUffelVU4?list=TLPQMzEwNTIwMjP6YRv-oSA6cA",
    //   "my description"
    // )
    // await worldHelper2.batchMint(
    //   deployer.address, 
    //   worldAddress, 
    //   1, 
    //   [["6","f","r","3"], ["6","f","r","3"]], 
    //   [["7","6","g","8"], ["7","6","g","8"]],
    //   [["26"], ["27"]]
    // )
    // console.log("worldHelper2.batchMint==================>Done")
    // console.log("worldHelper2.tokenURI==================>", await worldHelper2.tokenURI(1))
    
    // await worldHelper3.transferDueToNoteReceivable(
    //   worldAddress,
    //   deployer.address,
    //   1,
    //   0
    // )
    // console.log("worldHelper3.transferDueToNoteReceivable==================>Done")
    // console.log("worldNote.getDueReceivable==================>", await worldNote.getDueReceivable(worldAddress, 1, 0))
    // console.log("worldHelper3.notes==================>", await worldHelper3.notes(1))
    // console.log("worldHelper3.tokenURI==================>", await worldHelper3.tokenURI(1))
  
    // await bettingFactory.createGauge(1, deployer.address, "0x0000000000000000000000000000000000000000")
    // let bettingAddress = (await bettingHelper.getAllBettings(0))[0]
    // betting = Betting.attach(bettingAddress)
    // console.log("bettingAddress==================>", bettingAddress, betting.address)
    // await betting.updateBettingEvent(
    //   tFiatAddress,
    //   false,
    //   0,
    //   0,
    //   0,
    //   [0,0,3000,ethers.BigNumber.from("1000000000000000000"),1000],
    //   [7500,2500,0,0,0,0],
    //   "scores",
    //   "media",
    //   "desicription",
    //   ["P1","P2","P3","P4","P5","P6"]
    // )
    // console.log("bettingEvent=========>", await betting.protocolInfo(1))
    // await tFiat.approve(betting.address, ethers.BigNumber.from("1000000000000000000"))
    // await betting.buyWithContract(
    //   1, 
    //   deployer.address, 
    //   "0x0000000000000000000000000000000000000000", 
    //   0, 
    //   0,
    //   [1120000]
    // )
  
    // await lotteryHelper.startLottery(
    //     deployer.address,
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     7 * 3600,
    //     ethers.BigNumber.from("1000000000000000000"),
    //     0,
    //     false,
    //     [1000,1000,ethers.BigNumber.from("1000000000000000000"),1000],
    //     [250, 375, 625, 1250, 2500, 5000]
    // );
    // console.log("lotteryHelper.startLottery=================>Done!")
    // await tFiat.approve(lottery.address, ethers.BigNumber.from("1000000000000000000"))
    // await lottery.buyWithContract(
    //   deployer.address,
    //   deployer.address,
    //   "0x0000000000000000000000000000000000000000",
    //   "Name",
    //   0,
    //   0, 
    //   ["1999999"]
    // )
    // console.log("lottery.buyWithContract=================>Done!")
    // await lottery.claimTickets(1,[1],[5])
    // console.log("lottery.claimTickets=================>Done!")
    
    // await lotteryRandomNumberGenerator.setLotteryAddress(lottery.address)
    // console.log("lotteryRandomNumberGenerator.setLotteryAddress=================>Done!")
    // await lotteryRandomNumberGenerator.setNextRandomResult(199999999)
    // console.log("lotteryRandomNumberGenerator.setNextRandomResult=================>Done!")
    
    // // paywallARP
    // let paywallAddress = (await paywallARPHelper.getAllARPs(0))[0]
    // paywallARP = Paywall.attach(paywallAddress)
    // console.log("paywallARP===>", paywallAddress, paywallARP.address)
  
    // await paywallARP.partner(1,"uber","uber",2592000)
    // console.log("partner==========>", await paywallARP.partners(1,"uber"))
  
    // // create future collateral
    // await trustBounties.createBounty(
    //   deployer.address,
    //   futureCollateral.address,
    //   ve.address,
    //   deployer.address,
    //   0,
    //   1,
    //   86700 * 7 * 54,
    //   1,
    //   false,
    //   "http://link-to-avatar.com",
    //   "1"
    // )
  
    // console.log("trustBounties===========>", await trustBounties.getBalance(1))
  
    // await trustBounties.createBounty(
    //   deployer.address,
    //   tFiat.address,
    //   ve.address,
    //   "0x0000000000000000000000000000000000000000", 
    //   0,
    //   1,
    //   86700 * 7 * 54,
    //   0,
    //   false,
    //   "http://link-to-avatar.com",
    //   "1"
    // )
    // console.log("bountyInfo(1)===========>", await trustBounties.bountyInfo(1))
    // console.log("bountyInfo(2)===========>", await trustBounties.bountyInfo(2))
  
    // await futureCollateral.updateValidChannel(1, true)
    // await futureCollateral.addToChannel(1, 1)
  
    // await tFiat.approve(stakeMarket.address, 10)
    // await stakeMarket.createStake(
    //   [ve.address, tFiat.address, futureCollateral.address, "0x0000000000000000000000000000000000000000", deployer.address, deployer.address],
    //   "uber",
    //   "1",
    //   [], 
    //   0,
    //   0,
    //   [0,10,0,0,0,0,0],
    //   true
    // );
  
    // await tFiat.approve(stakeMarket.address, 10)
    // await stakeMarket.createAndApply(
    //   deployer.address, 
    //   [10,0,0,0,0,0,0],
    //   86400,
    //   0,
    //   1,
    //   "1"
    // );
    // await stakeMarket.lockStake(2,1,0,true)
    // console.log("stake(1)================>", await stakeMarket.getStake(1))
    // console.log("stake(2)================>", await stakeMarket.getStake(2))
  
    // await tFiat.approve(trustBounties.address, ethers.BigNumber.from("10000000000000000000"))
    // await futureCollateral.mint(
    //   deployer.address,
    //   deployer.address, 
    //   2,
    //   1, 
    //   2, 
    //   1
    // )
    // console.log("futureCollateral========>Done", await futureCollateral.ownerOf(1))
    // console.log("futureCollateral.tokenURI========>", await futureCollateral.tokenURI(1))
  
    // // create ramp
    // const ramp = await Ramp.deploy(
    //   deployer.address,
    //   rampHelper.address,
    //   contractAddresses.address
    // )
    // await ramp.deployed()
    // console.log("ramp==============>", ramp.address)
    // let rampAddress = (await rampHelper.getAllRamps(0))[0]
    // ramp = Ramp.attach(rampAddress)
    // console.log("ramp===>", rampAddress, ramp.address)
    // console.log("ramp.protocolInfo============>", await ramp.protocolInfo(tFiat.address))
    // console.log("getParams===============>", await ramp.getParams())
    // await ramp.updateAdmin(deployer.address, true)
    // console.log("ramp.updateAdmin===============>Done")
  
    // await trustBounties.createBounty(
    //   deployer.address,
    //   tFiat.address,
    //   ve.address,
    //   rampHelper.address,
    //   0,
    //   1,
    //   86700 * 7 * 4,
    //   0,
    //   false,
    //   "http://link-to-avatar.com",
    //   "ramps"
    // )
    // console.log("trustBounties===========>", await trustBounties.getBalance(2))
    // console.log("bountyInfo===========>", await trustBounties.bountyInfo(2))
  
    // await tFiat.approve(trustBountiesHelper.address, ethers.BigNumber.from("1000000000000000000"))
    // await trustBounties.addBalance(
    //   2, 
    //   trustBounties.address,
    //   0, 
    //   ethers.BigNumber.from("1000000000000000000")
    // )
    // console.log("balance===========>", await trustBounties.getBalance(2))
    
    // await rampAds.mint(tFiat.address)
    // console.log("rampAds.notes(1)===================>", await rampAds.notes(1))
    // console.log("rampAds.tokenURI(1)================>", await rampAds.tokenURI(1))
    // console.log("trustBounties.bountyInfo================>", await trustBounties.bountyInfo(1), rampHelper.address)
    // console.log("rampHelper.tradingFee================>", await rampHelper.tradingFee(), await ramp.totalRevenue(tFiat.address))
    // console.log("rampHelper.convert================>", await rampHelper.convert(tFiat.address, 1))
    // console.log("rampAds.mintAvailable==================>", await rampAds.mintAvailable(
    //   ramp.address, 
    //   tFiat.address
    // ))
  
    // // create game
    // await gameFactory.addProtocol(
    //   tFiat.address,
    //   deployer.address,
    //   10,
    //   0,
    //   0,
    //   true
    // )
    // console.log("gameFactory.addProtocol================>Done", await gameFactory.ticketInfo_(1))
  
    // // await gameFactory.createGamingNFT(deployer.address,1)
    // await gameMinter.mint(deployer.address,1)
    // console.log("gameFactory.createGamingNFT================>Done")
    // console.log("gameMinter.gameInfo_================>", await gameMinter.gameInfo_(1))
    // console.log("gameHelper.ownerOf================>", await gameHelper.ownerOf(1))
    
    // await gameFactory.buyWithContract(
    //   deployer.address,
    //   deployer.address,
    //   "0x0000000000000000000000000000000000000000",
    //   "",
    //   1,
    //   0,
    //   [1]
    // )
    // console.log("gameFactory.buyWithContract================>Done")
    // await nftSvg.updateDescription(gameHelper.address, "This is a receipt of your purchase of minutes in the gaming marketplace.")
    // console.log("gameHelper._getToken(1)================>", await gameHelper._getToken(1))
    // // console.log("gameHelper._populate(1,1)================>", await gameHelper._populate(1, 1, 0, 0, 0, 0, 0, 0, 0, 0))
    // // console.log("gameHelper._getOptions(1,1)================>", await gameHelper._getOptions(1, 1))
    // console.log("gameHelper2.getTaskContract(1)================>", await gameHelper2.getTaskContract(1,1))
    // console.log("gameHelper2.getMedia(1)================>", await gameHelper2.getMedia(1))
    // // console.log("gameHelper._tokenURI(1)================>", await gameHelper._tokenURI(1,1,[]))
    // console.log("gameMinter.tokenIdToCollectionId(1)================>", await gameMinter.tokenIdToCollectionId(1))
    // console.log("gameMinter.gameInfo_(1)================>", await gameMinter.gameInfo_(1))
    // console.log("gameHelper2.uriGenerator(1)================>", await gameHelper2.uriGenerator(1))
    // console.log("gameHelper.tokenURI(1)================>", await gameHelper.tokenURI(1))
  
    // create sponsor
    // const sponsor = await Sponsor.deploy(
    //   deployer.address,
    //   sponsorNote.address,
    //   contractAddresses.address
    // )
    // await sponsor.deployed()
    // let sponsorAddress = (await sponsorNote.getAllSponsors(0))[0]
    // sponsor = Sponsor.attach(sponsorAddress)
    // console.log("sponsor===>", sponsorAddress, sponsor.address)
    
    // await sponsor.updateProtocol(
    //   deployer.address,
    //   tFiat.address,
    //   100,
    //   1000,
    //   1000,
    //   0,
    //   0,
    //   "https://link-to-media.com",
    //   "description"
    // )
    // console.log("protocolInfo============>", await sponsor.protocolInfo(1))
    
    // await sponsorNote.transferDueToNote(sponsor.address, deployer.address, 1)
    // console.log("sponsorNote.notes(1)==========>", await sponsorNote.notes(1))
    // console.log("sponsorNote.tokenURI(1)==========>", await sponsorNote.tokenURI(1))
  
    // await sponsorNote.updateMinBountyPercent(0)
    // console.log("sponsorNote.updateMinBountyPercent==============>Done", await sponsorNote.minBountyPercent())
    
    
    // // create bill
    // const bill = await BILL.deploy(
    //   deployer.address,
    //   billMinter.address,
    //   contractAddresses.address,
    //   false
    // )
    // await bill.deployed()
  
    // let billAddress = (await billMinter.getAllBills(0))[0]
    // bill = BILL.attach(billAddress)
    // console.log("bill===>", billAddress, bill.address)
  
    // await bill.updateProtocol(
    //   deployer.address,
    //   tFiat.address,
    //   0,
    //   [0,1000,3000,3000,3000],
    //   0,
    //   0,
    //   "link_to_media",
    //   "description"
    // )
    // console.log("protocolInfo============>", await bill.protocolInfo(1))
    // console.log("description============>", await bill.description(1))
    // console.log("billHelper.getMedia============>", await billHelper.getMedia(bill.address,1))
    // console.log("billMinter._getOptions============>", await billMinter._getOptions(bill.address,1,1))
    // console.log("billMinter._tokenURI(1)==========>", await billMinter._tokenURI(1))
    // console.log("billMinter.tokenURI(1)==========>", await billMinter.tokenURI(1))
  
    // await billNote.transferDueToNoteReceivable(bill.address, deployer.address, 1)
    // console.log("billNote.notes(1)==========>", await billNote.notes(1))
    // console.log("billNote.tokenURI(1)==========>", await billNote.tokenURI(1))
  
    // create arp
    // const arp = await ARP.deploy(
    //   deployer.address,
    //   arpHelper.address,
    //   "0x0000000000000000000000000000000000000000",
    //   contractAddresses.address,
    //   false,
    //   false,
    //   false
    // )
    // await arp.deployed()
  
    // let arpAddress = (await arpHelper.getAllARPs(0))[0]
    // arp = ARP.attach(arpAddress)
    // console.log("arp===>", arpAddress, arp.address)
  
    // await arp.updateProtocol(
    //   deployer.address,
    //   tFiat.address,
    //   [1000,3000,0,2000,3000,0,0],
    //   0,
    //   0,
    //   0,
    //   "link_to_media",
    //   "description"
    // )
    // console.log("protocolInfo============>", await arp.protocolInfo(1))
    // console.log("description============>", await arp.description(1))
    // // console.log("arpHelper._getOptions============>", await arpHelper._getOptions(arp.address,1,1))
    // console.log("arpHelper.tokenIdToARP============>", await arpHelper.tokenIdToARP(1))
    // console.log("arpHelper.tokenIdToParent============>", await arpHelper.tokenIdToParent(1))
    // console.log("arpMinter.percentiles============>", arp.address, await arpMinter.percentiles(arp.address))
    // console.log("arpMinter.getMedia============>", await arpMinter.getMedia(arp.address,1))
    // // console.log("arpHelper._tokenURI(1)==========>", await arpHelper._tokenURI(1))
    // console.log("arpHelper.tokenURI(1)==========>", await arpHelper.tokenURI(1))
    
    // await arpNote.transferDueToNoteReceivable(
    //   arp.address,
    //   deployer.address,
    //   1,
    //   0
    // )
    // console.log("arpNote.notes(1)==========>", await arpNote.notes(1))
    // console.log("arpNote.tokenURI(1)==========>", await arpNote.tokenURI(1))
  
    // // create stake
    // await tFiat.approve(stakeMarket.address, 150);
    // await stakeMarket.createStake(
    //   [veAddress, tFiat.address, marketPlaceTrades.address, "0x0000000000000000000000000000000000000000", deployer.address, deployer.address],
    //   "uber",
    //   "1",
    //   [], 
    //   0,
    //   0,
    //   [0,10,0,0,0,0,0],
    //   true
    // )
    // console.log("stakeMarket.createStake=================>Done")
    // // apply to stake
    // await stakeMarket.createAndApply(deployer.address, [10,0,0,0,0,0,0],86400,0,1,"1");
    // console.log("stakeMarket.createAndApply=================>Done")
    // // signal client still wants item
    // await stakeMarket.lockStake(2,1,0,true);
    // console.log("stakeMarket.lockStake=================>Done")
    // console.log("stakeMarket.getStake=================>", await stakeMarket.getStake(1))
    // console.log("stakeMarket.getStake=================>", await stakeMarket.getStake(2))
    // // transfer note
    // await stakeMarket.mintNote(1,0)
    // console.log("stakeMarket.mintNote=================>Done")
    // // // console.log("stakeMarket.getStake=================>", await stakeMarket.getStake(1))
    // // // console.log("stakeMarketNote.getDuePayable=================>", await stakeMarketNote.getDuePayable(1, 0))
    // console.log("stakeMarket.notes(1)===========>", await stakeMarket.notes(1))
    // // console.log("stakeMarketHelper._tokenURI(1)===========>", await stakeMarketHelper._tokenURI(1))
    // // // console.log("stakeMarketHelper._tokenURIiou(1)===========>", await stakeMarketHelper._tokenURIiou(1))
    // console.log("stakeMarketHelper.tokenURI(1)===========>", await stakeMarketHelper.tokenURI(1))
    // // createIOU
    // await stakeMarketNote.createIOU(1, 2, 0, "DAAS")
    // console.log("stakeMarketNote.createIOU=================>Done")
    // console.log("stakeMarket.getAllPartners=================>", await stakeMarket.getAllPartners(1,0), await stakeMarket.getAllPartners(2,0))
    // console.log("stakeMarketNote.IOU=================>", await stakeMarketNote.IOU(2))
    // console.log("stakeMarketHelper.tokenURI(2)===========>", await stakeMarketHelper.tokenURI(2))
    
    // let auditorAddress = (await auditorNote.getAllAuditors(0))[0]
    // auditor = Auditor.attach(auditorAddress)
    // console.log("auditorAddress===============>", auditor.address, auditorAddress)
    // await auditor.updateProtocol(
    //   deployer.address,
    //   tFiat.address,
    //   [10, 86400, 0, 0],
    //   0,
    //   5,
    //   0,
    //   [1],
    //   "https://link-to-media.com",
    //   "auditor's description of protocol"
    // )
    // console.log("protocol=======================>", await auditor.protocolInfo(1), auditorNote.address)
    // console.log("auditorHelper.tokenURI======================>", await auditorHelper.tokenURI(1))
    // console.log("auditor.description======================>", await auditor.description(1))
    // console.log("auditorHelper._getOptions======================>", await auditorHelper._getOptions(auditorAddress, 1))
    // console.log("auditorHelper2.getMedia======================>", await auditorHelper2.getMedia(1))
    // console.log("auditorNote.isGauge===============>", await auditorNote.isGauge(auditorAddress),  await auditorNote.check())
    
    // await auditorNote.transferDueToNoteReceivable(
    //   auditorAddress,
    //   deployer.address,
    //   1,
    //   0
    // )
    // console.log("auditorNote.notes======================>", await auditorNote.notes(1))
    // console.log("auditorNote.tokenURI======================>", await auditorNote.tokenURI(1))
    
    // await vavaFactory.createValuePool(
    //   tFiatAddress,
    //   deployer.address,
    //   marketPlaceTrades.address,
    //   false,
    //   false
    // )
    // console.log("vavaFactory.createValuePool===============>Done")
    // console.log("vavaHelper.getAllVavas===============>",await vavaHelper.getAllVavas(0))
    // let vavaAddress = (await vavaHelper.getAllVavas(0))[0]
  
    // // const vava =  await Vava.deploy(
    // //   tFiat.address,
    // //   deployer.address,
    // //   vavaHelper.address,
    // //   contractAddresses.address
    // // )
    // // await vava.deployed()
    // // console.log("vava.deployed===============>Done")
    // vava = Vava.attach(vavaAddress)
    // console.log("vava===>", vava.address, await vava.token(), await vavaHelper.getSupplyAvailable(vava.address))
    // // await veFactory.createVe(tFiat.address, vava.address, false)
    // // console.log("veFactory.createVe===============>Done", await veFactory.last_ve())
    // // const va = await Va.deploy(
    // //   tFiat.address,
    // //   vava.address,
    // //   // contractAddresses.address,
    // //   false
    // // );
    // // await va.deployed()
    // let vaAddress = await vava._ve()
    // va = Va.attach(vaAddress)
    // console.log("va.deployed==============>", va.address, await vava._ve())
    // // await va.setContractAddress(contractAddresses.address)
    // // console.log("va.setContractAddress===============>Done")
    // // console.log("va===>", vaAddress, va.address, await va.getParams(), await va.ownerOf(1))
    // await va.setParams(
    //   "vaNFT", 
    //   "vaNFT", 
    //   18,
    //   0,
    //   0,
    //   ethers.BigNumber.from("1000000000000000000"),
    //   0,
    //   true
    // )
    // console.log("va.setParams===============>Done", await va.getParams())
    // // console.log("vava.getAllSponsors===============>", await vava.getAllSponsors(0,0,true))
    // // console.log("vavaHelper2.getMedia===============>", await vavaHelper2.getMedia(vava.address, 1))
    // // await valuepoolVoter.addVa(
    // //   vavaAddress, 
    // //   1, 
    // //   87700, 
    // //   1,
    // //   1, 
    // //   0, 
    // //   0,
    // //   1
    // // )
    // // // console.log("valuepoolVoter.addVa===============>Done")
    // await tFiat.approve(va.address, ethers.BigNumber.from("100000000000000000"));
    // await va.create_lock_for(ethers.BigNumber.from("100000000000000000"), 4 * 365 * 86400, 0, deployer.address)
    // console.log("va.create_lock_for===============>Done")
    // // console.log("vavaHelper================>", await vava.contractAddress())
    // // console.log("va================>", await va.valuepoolHelper())
    // console.log("va.balanceOfNFT===============>",await va.balanceOfNFT(1), await va.ownerOf(1))
    // console.log("vavaHelper.getDescription===============>",await vavaHelper.getDescription(vava.address))
    // // // console.log("va._populate===============>",await va._populate(1))
    // console.log("va.tokenURI(1)===============>", await va.tokenURI(1))
    // console.log("getSupplyAvailable================>", await vavaHelper.getSupplyAvailable(vava.address))
    // console.log("scheduledPurchases================>", await vava.scheduledPurchases(1, 1))
    // await tFiat.transfer(vava.address, ethers.BigNumber.from("10000000000000000000"))
    // console.log("liquidity===============>", await tFiat.balanceOf(vava.address))
  
    // console.log("contractAddresses======================>", await nftSvg.contractAddress())
    // console.log("nftSvg======================>", await contractAddresses.nftSvg())
      // console.log("nftSvg.generateSVG================>", await nftSvg.generateSVG(
      //     1,
      //     veAddress, 
      //     tFiatAddress, 
      //     deployer.address,
      //     deployer.address,
      //     "0x0000000000000000000000000000000000000000",
      //     [],
      //     [],
      //     [],
      //     [],
      // ))
    //   console.log("nftSvg.constructTokenURI================>", await nftSvg.constructTokenURI(
    //     1,
    //     "", 
    //     veAddress, 
    //     tFiatAddress, 
    //     deployer.address,
    //     "0x0000000000000000000000000000000000000000",
    //     [],
    //     [],
    //     [],
    //     [],
    // ))
    // console.log("getPendingReward==================>", await lottery.getPendingReward(1, deployer.address, tFiatAddress, false))
    // console.log("calculateRewardsForTicketId0===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 0, tFiatAddress))
    // console.log("calculateRewardsForTicketId1===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 1, tFiatAddress))
    // console.log("calculateRewardsForTicketId2===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 2, tFiatAddress))
    // console.log("calculateRewardsForTicketId3===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 3, tFiatAddress))
    // console.log("calculateRewardsForTicketId4===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 4, tFiatAddress))
    // console.log("calculateRewardsForTicketId5===========>", await lotteryHelper.calculateRewardsForTicketId(1, 1, 5, tFiatAddress))
    // console.log("lottery==================>", await lottery.viewLottery(1))
    // console.log("lottery.viewTicket==================>", await lottery.viewTicket(1))
    // console.log("profileHelper._constructTokenURI(1)==================>", await profileHelper._constructTokenURI(
    //   "0x0000000000000000000000000000000000000000",
    //   1,
    //   [""], 
    //   ["ID", "Name", "Rating"],
    //   ["55", "Tepa", "5/5"],
    //   [""],
    // ))
    // console.log("profileHelper.tokenURI(1)==================>", await profileHelper.tokenURI(1))
    // console.log("ssi.tokenURI(1)==================>", await ssi.tokenURI(1))
    // console.log("nfticketHelper.getSponsorsMedia(1,)===============>", await nfticketHelper.getSponsorsMedia(1, ""))
    // console.log("worldHelper.tokenIdToWorld======================>", await worldHelper.tokenIdToWorld(1),  await worldHelper.tokenIdToWorld(2))
    // console.log("worldNote.worldToProfileId======================>", await worldNote.worldToProfileId(worldAddress))
    // console.log("worldHelper2.ownerOf======================>", await worldHelper2.ownerOf(1), await worldHelper2.ownerOf(2))
    // console.log("worldHelper3.constructTokenURI(1)===============>", await worldHelper3.constructTokenURI(
    //   worldAddress,
    //   1,
    //   ["http://www.youtube.com/embed/X0NsiBzPoEI","http://www.youtube.com/embed/ICScK1ST0xU"], 
    //   ["Love your channel, you always put out amazing content"]
    // //   // ["ID", "Name", "Rating", "Age", "ID", "Name", "Rating", "Age", "ID", "Name", "Rating", "Age"],["55", "Tepa", "5/5", "31", "55", "Tepa", "5/5", "31", "55", "Tepa", "5/5", "31"]
    // ))
  
    // const encode = await Encode.deploy();
    // await encode.deployed()
    // console.log("encode============>", encode.address)
    // const encode = Encode.attach("0x923550B93b3A0C9e7cf8b2F69f9dffB8A1cB3Cd7")
    // console.log("encode(blablacar)============>", await encode.enc('blablacar'), await encode.e())
    // blablacar: 0xb927343f08b783f83b7aba01beff9cc1a9edbefbed4ceb5e4463596dc230e486
  
  
    // console.log("worldHelper2.tokenURI(1)===============>", await worldHelper2.tokenURI(1))
    // console.log("worldHelper2.tokenURI(2)===============>", await worldHelper2.tokenURI(2))
    // console.log("bettingMinter.getOptions=============>", await bettingMinter._getOptions(bettingAddress, 1))
    // console.log("bettingMinter.ownerOf(1)===============>", await bettingMinter.ownerOf(1))
    // console.log("betting.finalNumbers===============>", await betting.finalNumbers(1,0))
    // console.log("betting.tickets===============>", await betting.tickets(1))
    // console.log("bettingMinter.tokenIdToBetting===============>", await bettingMinter.tokenIdToBetting(1))
    // console.log("bettingMinter._constructTokenURI(1)===============>", await bettingMinter._constructTokenURI(
    //   1, 
    //   [], 
    //   ["description"], 
    //   ['BID','CID','EID','Symbol,Decimals','Paid','Period','Rewards','Claimed','','','Pick'],
    //   ['1','0','2','usd,18','99900000000000000','0','0','Not Yet','a-z','scores','1000020005000100000300000000']
    // ))
    // console.log("bettingMinter._getSubjects(1)===============>", await bettingMinter._getSubjects(bettingAddress, 1))
    // console.log("bettingMinter._getOptions(1)===============>", await bettingMinter.getOptions(bettingAddress, 1))
    // console.log("bettingMinter.tokenURI(1)===============>", await bettingMinter.tokenURI(1))
    // console.log("nftMarketPlaceOrders======================>", await nftMarketPlaceOrders.contractAddress())
    // console.log("nftMarketPlaceHelper2======================>", await nftMarketPlaceHelper2.contractAddress())
    // console.log("nftMarketPlaceHelper3======================>", await nftMarketPlaceHelper3.contractAddress())
    // console.log("minterFactory======================>", await minterFactory.contractAddress())
    // console.log("marketcollections======================>", await contractAddresses.marketCollections())
    // console.log("marketcollections1======================>", await marketPlaceCollection.contractAddress(), contractAddresses.address)
    // console.log("marketcollections11======================>", await marketPlaceCollection.addressToCollectionId(deployer.address))
    // console.log("marketEvents======================>", await contractAddresses.marketPlaceEvents())
    // console.log("nfticket.options======================>", await nfticketHelper2.options(1))
    // console.log("nfticket.tokenURI======================>", await nfticketHelper2.tokenURI(1))
    // console.log("nftMarketHelpers2======================>", await contractAddresses.nftMarketHelpers2())
    // console.log("nftMarketHelpers3======================>", await contractAddresses.nftMarketHelpers3())
    // console.log("minterFactory======================>", await contractAddresses.minterFactory())
    // console.log("======================>", await minterFactory.itemToMinter(1,'uber'))
    // console.log("options==============>", await paywallMarketPlaceHelper.options(1,"Techcrunch+",0))
    // console.log("getRecalPrice1======================>", await paywallMarketPlaceHelper.getRealPrice(deployer.address,deployer.address,"Techcrunch+",[],0,0))
    // console.log("getRecalPrice======================>", await paywallMarketPlaceHelper.getRealPrice(deployer.address,deployer.address,"Techcrunch+",[0],0,0))
    // console.log("lottery======================>", await contractAddresses.lotteryAddress())
    // console.log("lotteryHelper======================>", await contractAddresses.lotteryHelper())
    // console.log("bettingHelper======================>", await contractAddresses.bettingHelper())
    // console.log("bettingFactory======================>", await contractAddresses.bettingFactory())
    // console.log("contractAddresses======================>", await bettingFactory.contractAddress())
    // console.log("contractAddresses======================>", await bettingHelper.contractAddress())
    // console.log("contractAddresses======================>", await worldFactory.contractAddress())
    // console.log("worldFactory======================>", await contractAddresses.worldFactory())
    // console.log("worldNote======================>", await contractAddresses.worldNote())
    // console.log("worldHelper======================>", await contractAddresses.worldHelper())
    // console.log("worldHelper2======================>", await contractAddresses.worldHelper2())
    // console.log("worldHelper3======================>", await contractAddresses.worldHelper3())
    // console.log("profile======================>", await contractAddresses.profile(), await profile.addressToProfileId(deployer.address))
    // console.log("contractAddresses0======================>", await worldFactory.contractAddress())
    // console.log("contractAddresses00======================>", await worldNote.getAllWorlds(0))
    // console.log("contractAddresses2======================>", await worldHelper.contractAddress())
    // console.log("contractAddresses3======================>", await worldHelper2.contractAddress())
    // console.log("contractAddresses4======================>", await worldHelper3.contractAddress())
    // console.log("trustbounties======================>", await contractAddresses.trustBounty())
    // console.log("trustbountiesHelper======================>", await contractAddresses.trustBountyHelper())
    // console.log("contractAddress======================>", await lotteryHelper.contractAddress())
    // console.log("isVe======================>", await trustBountiesHelper.isVe(veAddress))
    // console.log("isWhiteListed======================>", await tFiat.balanceOf(deployer.address))
  }
  
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});
  
  
  // https://cryptotools.net/rsagen



  // const tFiat1 = await fiatContract.deploy(
  //   "Free Apparel & Beauty & Cosmetics Token",
  //   "FABT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat1.deployed()
  // console.log("tFiat1====================>", tFiat1.address)
    
  // await rampHelper.addDtoken(tFiat1.address)
  // await marketPlaceHelper3.addVetoken(tFiat1.address)
  // await tFiat1.updateMinter(rampHelper.address)

  // const tFiat2 = await fiatContract.deploy(
  //   "Free Beverage Token",
  //   "FBT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat2.deployed()
  // console.log("tFiat2====================>", tFiat2.address)
    
  // await rampHelper.addDtoken(tFiat2.address)
  // await marketPlaceHelper3.addVetoken(tFiat2.address)
  // await tFiat2.updateMinter(rampHelper.address)

  // const tFiat3 = await fiatContract.deploy(
  //   "Free Culture & Entertainment Token",
  //   "FECT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat3.deployed()
  // console.log("tFiat3====================>", tFiat3.address)
    
  // await rampHelper.addDtoken(tFiat3.address)
  // await marketPlaceHelper3.addVetoken(tFiat3.address)
  // await tFiat3.updateMinter(rampHelper.address)

  // const tFiat4 = await fiatContract.deploy(
  //   "Free Energy Token",
  //   "FET",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat4.deployed()
  // console.log("tFiat4====================>", tFiat4.address)
    
  // await rampHelper.addDtoken(tFiat4.address)
  // await marketPlaceHelper3.addVetoken(tFiat4.address)
  // await tFiat4.updateMinter(rampHelper.address)

  // const tFiat5 = await fiatContract.deploy(
  //   "Free Food Token",
  //   "FFT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat5.deployed()
  // console.log("tFiat5====================>", tFiat5.address)
    
  // await rampHelper.addDtoken(tFiat5.address)
  // await marketPlaceHelper3.addVetoken(tFiat5.address)
  // await tFiat5.updateMinter(rampHelper.address)

  // const tFiat6 = await fiatContract.deploy(
  //   "Free HealthCare Token",
  //   "FHT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat6.deployed()
  // console.log("tFiat6====================>", tFiat6.address)
    
  // await rampHelper.addDtoken(tFiat6.address)
  // await marketPlaceHelper3.addVetoken(tFiat6.address)
  // await tFiat6.updateMinter(rampHelper.address)

  // const tFiat7 = await fiatContract.deploy(
  //   "Free Law & Order Token",
  //   "FLOT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat7.deployed()
  // console.log("tFiat7====================>", tFiat7.address)
    
  // await rampHelper.addDtoken(tFiat7.address)
  // await marketPlaceHelper3.addVetoken(tFiat7.address)
  // await tFiat7.updateMinter(rampHelper.address)

  // const tFiat8 = await fiatContract.deploy(
  //   "Free Mining Token",
  //   "FMT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat8.deployed()
  // console.log("tFiat8====================>", tFiat8.address)
    
  // await rampHelper.addDtoken(tFiat8.address)
  // await marketPlaceHelper3.addVetoken(tFiat8.address)
  // await tFiat8.updateMinter(rampHelper.address)

  // const tFiat9 = await fiatContract.deploy(
  //   "Free NSFW Token",
  //   "FNT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat9.deployed()
  // console.log("tFiat9====================>", tFiat9.address)
    
  // await rampHelper.addDtoken(tFiat9.address)
  // await marketPlaceHelper3.addVetoken(tFiat9.address)
  // await tFiat9.updateMinter(rampHelper.address)

  // const tFiat10 = await fiatContract.deploy(
  //   "Free Real Estate Token",
  //   "FRET",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat10.deployed()
  // console.log("tFiat10====================>", tFiat10.address)
    
  // await rampHelper.addDtoken(tFiat10.address)
  // await marketPlaceHelper3.addVetoken(tFiat10.address)
  // await tFiat10.updateMinter(rampHelper.address)

  // const tFiat11 = await fiatContract.deploy(
  //   "Free Software & Telecommunication Token",
  //   "FSTT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat11.deployed()
  // console.log("tFiat11====================>", tFiat11.address)
    
  // await rampHelper.addDtoken(tFiat11.address)
  // await marketPlaceHelper3.addVetoken(tFiat11.address)
  // await tFiat11.updateMinter(rampHelper.address)

  // const tFiat12 = await fiatContract.deploy(
  //   "Free Transportation Token",
  //   "FTT",
  //   contractAddresses.address,
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat12.deployed()
  // console.log("tFiat12====================>", tFiat12.address)
  // await marketPlaceHelper3.addVetoken(tFiat12.address)
  // await rampHelper.addDtoken(tFiat12.address)
  // await tFiat12.updateMinter(rampHelper.address)