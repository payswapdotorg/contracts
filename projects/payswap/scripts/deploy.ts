import { ethers, network } from "hardhat";
import config from "../config";

async function main() {
  const [deployer, deployer2, deployer3, deployer4, deployer5, deployer6, deployer7, deployer8, deployer9, deployer10, deployer11, deployer12, deployer13, deployer14, deployer15] = await ethers.getSigners();

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
  const pair = "0x1ddEf42AE2339612A1fD81dcf798AdcC17664844"
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
  const cardAddress = "0x97b9795Dc1375EAA8B657cdc3c008B14b5A6F2C0"
  const contributorVoterAddress = "0xBCb2E030953dC9f2E68C179C19C2C121aF348Abb"
  const vavaFactoryAddress = "0x7ecd58472cD0AED5614238a5D4C90E599755Edd4"
  const vavaHelperAddress = "0x787035b034BB23ad71d50742845672d01CE26b7e"
  const vavaHelper2Address = "0x85b1B94201c5e84c352f62c9Ee7313f721D7e282"
  const veFactoryAddress = "0xF3F37fBB361210ecBaCB6e748c9D550dE4db1175"
  const valuepoolVoterAddress = "0x2B2Bb6Adda65bB3a748B798320d54317780d27e8"
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
  const stakeMarketBribeAddress = "0xeFA1F1eD1a5B01a37ef5eA3eA87943B685209c9A"
  const stakeMarketVoterAddress = "0x9E41eB6e4082643E6Aa50bD3126D38798644e261"
  const contractAddress = "0x214Cb0c088D0992d5ba36Cff283CB1333149E1e7" //"0x997068BaD1417e1d7Be77CFC9123B40a3D9Bdb92"
  const nftsvgAddress = "0x36D1257A7E29E73A345D01F1e5F81d424C12a2c7"
  const nfticketAddress = "0x88db9D87e4D8ecC1f05eA72db52D933E25f88d2A"
  const nfticketHelperAddress = "0x4888CEc598B9115bfC965d714E68e791c2cC1d80"
  const nfticketHelper2Address = "0x517a113a03B7842C1B731b482E89FB4920363aD5"
  const marketPlaceEventsAddress = "0xAD38AFac104D620C079a9FFf7bc0E9B59eB00e6d"
  const marketPlaceCollectionAddress = "0x0970926487E31cF5451b2Ed5Ba7C44cC9f8eA604"
  const marketPlaceOrdersAddress = "0xdc72352eA34141Bf8F72aEFca07b30AcEc155dcf"
  const paywallMarketPlaceOrdersAddress = "0x8E253b889A5c03d35bfc2A9e433Dde4144236fBa"
  const nftMarketPlaceOrdersAddress = "0x9cFE0aEB5f89E5f3A58C36498c42aCDd278ACbfc"
  const marketPlaceTradesAddress = "0xf2904F2325ea229adD6EbCb04951fF1D28C3b891"
  const paywallMarketPlaceTradesAddress = "0x8C4575C706515E2725C64F6c27A60EC2dCd104c2"
  const nftMarketPlaceTradesAddress = "0xb43A592FF03b10D243E3cFc64Ee32ba6912Ed61c"
  const marketPlaceHelperAddress = "0x0B252359e6F81694c11b5Ba4782a9151e3E82579"
  const paywallMarketPlaceHelperAddress = "0x5e54677A9C2803481016E041A8cFeB3fD03770c6"
  const nftMarketPlaceHelperAddress = "0x352ae66Dca43ad2C23D57393D6D5b5adF6B2446C"
  const marketPlaceHelper2Address = "0x78C10070AC5e9Aad679CCdF2d3bE9A2F77EE5F11"
  const paywallMarketPlaceHelper2Address = "0x86973bEbE9233792426Bbb39d7e1356eb1211594"
  const nftMarketPlaceHelper2Address = "0xcA00299bEfd8A4ff57Ac83aEfdb3F1701e7d5C2b"
  const marketPlaceHelper3Address = "0x2affD239CAB6c7ca5643e1e821fa4ddF6072f7cC"
  const paywallMarketPlaceHelper3Address = "0xf82726AbB3b7d854ba07AB8db7f1Afd1f3834d50"
  const nftMarketPlaceHelper3Address = "0xe83a58792EACa44345129141313E16Cae2076d15"
  const paywallARPFactoryAddress = "0xA732c57C3DA59aE51Eb04A842569eb4Ae15B3A0f"
  const paywallARPHelperAddress = "0x5877de59AAf11794396e9bB5950CE58E06557cC3"
  const minterFactoryAddress = "0x5Ed7ae0A1f29389295f4F25A1A679Bc051ae6aD4"
  const trustBountiesAddress = "0x7C694B1A87f56e47b0011fD1CbAEa3cC1974Ef09"
  const trustBountiesHelperAddress = "0x6c9676258026dc4Ce9B55bB8Ad0282e831262897"
  const trustBountiesVoterAddress = "0x3b5E302517DCD59FCeF19b287255b3D68f57A956"
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
  const lotteryAddress = "0x7e8D44C232468E3516627A773443C3709bA032A0"
  const lotteryHelperAddress = "0x8e740851a2DeE2eF78aEFBbD4836eA479A81F56A"
  const lotteryRandomNumberGeneratorAddress = "0xc611188afcD9923fBbaCDea3E110BD73dBE5D70a"
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
  const nftSvg = NFTSVG.attach(nftsvgAddress)
  const minterFactory = MinterFactory.attach(minterFactoryAddress)
  const nfticket = NFTicket.attach(nfticketAddress)
  const nfticketHelper = NFTicketHelper.attach(nfticketHelperAddress)
  const nfticketHelper2 = NFTicketHelper2.attach(nfticketHelper2Address)
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
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  // console.log("prov=============>", (ethers.Wallet.createRandom())._signingKey())
  const privateKeys = [
    "0x91686b7acddb4d1b8417ccfbd72b9f8425d9ddb2993c90ed8f0545a368d4d5ea",
    "0xbd6a130a0a72bee361623ef466f5ca99c5eeb3c21ff73fc59de2b2740821757f",
    "0xc5d17b3d0db9e57cfd1c094c067c0d7210d0aa048ac31f1c9db1edaf739af87b",
    "0xf327e7cfb86685249cfbd411f582c501f5aea567b2777971487f3dd7b52479c7",
    "0xecb4889c1dc4e217e1e2898b9769a2f47b8368646505f01e68d88a5f01d92f47",
    "0xfb2f00bf782ab752f76fc60e5ca13f51e31217d91cc943c055f142cf5373f069",
    "0xd28d94dad4237c3236c3180737158d4cebf3b653e18778acf86d47c29cc13a77",
    "0x476533724dbb4ea7d9cbb6e1dbdc274bdd4853199a683ed6598220157bba39bd",
    "0xf8e0522eac0ceeb62cbcbf18fb322137d897d68346ace5ab3512b0626400c14c",
    "0x72acb1a93e1cdb9b44d0d27cfee00b13f3c39fce9cbd3a3e2789b141ba03fc81",
    "0x8167739f095614765799bb05baa7ed83b931f73eee36f08a53f7469f1b8959d7",
    "0xd83295f8aae95e62e0d2a75066d9016f046233288c8e434b4e538799cc7b95f9",
    "0x6f649ac5419fb52a50e54391adadcd1be5b1ddc6c4b4d2a6f81e7315116b93b7",
    "0x6e57b3c872345cb838c959a5c6c68c1b09c2caf589e3ebfcd21a3f478b69a489",
    "0xa5181418c202cad5fdd747f0d878fc31c0d974ab9278de79a6af220fa6be565e",
    "0x219f2a201fe5a919e7a608f4cb5db7c7d8dfe284780957083aa1eaeeb07ee9e0",
    "0xb684cc454317ec7aae613f9da7091ee059796446abbdfc4ae1f4d3f61c4d54e1",
    "0x9d7cd9a9ea3df2b1a70e1350ab60b02d2ccf9cf01a74e899f8e5ba9d40872267",
    "0x4c940f978110d311b262c5fe5945f30f468455465a9dfa6a2dd3cc1817b6b294",
    "0x1908a0780a78a461ea52af8b81c6915689387301ab18560c4ed44bef7dc2be71",
    "0x59b5403867b96a99f6526b711340349affa6996d74a1d6125ec033522cc72332",
    "0xf484e33ef692b0251ed168a3162caaccdf011cebf8495f23ae1795c9602660a3",
    "0x257d706324f4c17beeb6656f938eccee61751b18e270e3a3eaa6e7ee02ea867c",
    "0x68fd4e4b40a2c3a37f2e4d06fea0dcfeb26116b63e25c022de318094e8af6f0b",
    "0x9548dae9ca03e2a7466ae49260ef23e1a6d349a62361382b9d41f598a540f2d2",
    "0x8289e723d8ae9ae777fb743cebd5ac3f160ece592e42f462b2cee85a4987c679",
    "0x49f9eb16f8fcc1daefd5292575ba749dc4c84bcc3ae94c8065246a9d0f6ea6ce",
    "0x488a13b78de755beeacf28fcf270ad15f19d8811abad452c77bac25ca71367f6",
    "0x77bcf26bc272dd6ec18cd24fecc72e8e2874522d115ef7492b4df8efa725940f",
    "0x14873e03f9651e4aa267e0791937769409e23bd93f2dd1a8245d9c0aae1ed4ad",
    "0x811655d0ab108b9135f4ca19eda09fa3346596f33abc13ac082d96c913c470e1",
    "0xb2ea8fcbad7f68fe735cc295d23d4b0474587416901b8627ce8f2505920c94b4",
    "0x80624ffef1de78e46f4759c409e992823b18eab3b59bebd05d402edead3af6a3",
    "0x861ef53da32c54bf93306a5383b8683204c3611901250f319d8dd7449ca95a43",
    "0x8657e8e577b94de073cc0df31e3cc0c2204681396a71270a67dd64d5d7e6d3d3",
    "0x2f5cfd20d14ac2536fd8990e22f54c20366cc94554955b94ac97ca50068cfc05",
    "0xe1cb9e940dc9be3cb3b0289e6712118a20fb80de822cb86cd81db3cd0742e37d",
    "0x9d5d3e0495d7fc57314ff23778030a855cecc0ec207052fdc5b6991b23cf55f8",
    "0x39c0f1b94c9072edd68a460071294f8a9c6e52a46b170faccc4b709260b9dbf4",
    "0xf27716ebd456529e96d5f61934f4e691c811d01d3a2f44d911272bf524bb1727",
    "0x6f5d47167369e3d755de795238aa35062dc2309fb7fcc4c1bfd9d49f8401adfa",
    "0xde38cf8058bf933833b68e86f77d404fd1e79346e24777e5fdb090d5744e4c68",
    "0xd9f709304337ad644b47e120606823d2c2f7fe1656b11f8cdc0d5e62afd78aa6",
    "0x273b930eaa126e3c90aa5ee04b009079ba5159094a4d65cc291ef08660b20817",
    "0x88bc2a069bc90ad900d7a7d8c902caf55e92182fdccd01d5517224b49c465c5f",
    "0x8e35582adab1a6e2a1e61d36a84feb1179ffe27f724e8f5d14ad354e49fd7953",
    "0x2c6cf913f9e5f8b6b8cbad6da989dbc1d2082fe0c7b305eec3d4103ca153f26b",
    "0x4392aa13734c864e35f63d363e799edeeecc4990f59a55e8cc9288d031ba6797",
    "0xc2da94db077d29f246c4093cfc9b984e7f7a598efffb9c1ac8b37944a6ddcc58",
    "0x35286a5d4ad5f04f2a42772b5b137d2b431cb99f7d6f76145bfa5898b1d3cb22",
    "0x4abdf19a8d0c1c60447e47bfe3dd2053fa6d8ef149d031d5d968acf24c69ae38",
    "0x727dc25c0715ca1b3247d4e85fb69c0e210475b437dd25ae829370b4a99362d8",
    "0x374e845839f931bfe837c587139763c61505edea1bad395cbf76b4d2a1cfe9e9",
    "0xd97a6abb1300b708e55ecb65614fe651b1d40c8e70bda0febb1d01a108b025c9",
    "0x3bad3164cd30eb8d428cda4511d834b56495733f092797d0fa6160ce358f8321",
    "0x625bb856b1066b1d295a3d23a7bf84e9db5b8e7b606720d6f2ab9e3af08944e7",
    "0x4b4a317df46bd1fd40e3ea8db09a5657661d7a7f886b972f6d9e2eb36c603a55",
    "0xd5ac6b52e44f296d47299e6f5a0a709fb40c84c16e739aa77ea05abcd8ac5cad",
    "0xe7def177acf6e42602a63091753b519e4203f8d6991c6b7c379d3d3a8f0702bf",
    "0xef2f09872f535b4e5193f430715cd48c287d958378c438b66d674befafabe310",
    "0x5afcbdb5515181e71207632b66e705670319a5953d96c7167f556321664ed96f",
    "0x6acb558e1f6cd7117558b598faafb3641e49add760c2ec1649d5b6f356daf880",
    "0x289edc1d1a01e57515cbf93c4cc7af3a4cad0ac69bba492c73f7ebbb07e011b6",
    "0xdf820329eccadbe7181a84d133e9caa56045d127089f636d6508181c26a84f76",
    "0x30c54d60ec3efb4c2db996b5958c2fa8919b3de821c45096f7793744f3c0af1b",
    "0xf7b350af5d15695c940dd5984425530fe177ea6ccc3f0575b0f3711440af1c0c",
    "0x3c9d21976726931f07a6cc7c10da7af30903159e12dfac2ae2c72e65a1f25f53",
    "0xf47d44db4b3494a0476cdf90c7e34b8a83650d6f085aeed1404a233583868118",
    "0xf7f12b58ac67bf92c7e593ab9f8a686bfaac378a8d334ea500a8610c83279c06",
    "0xaaf490b73fd756e25f033dd67b4ed10e437ee741ab1303cb576eca9dd19b0d01",
    "0x9c42dabe45bc94bde69981297df225e377f4aa45f31dc1cccdceb1a97dc7434b",
    "0x663b0b611e5c5d19c3c4ce7ba93e6974820fe60cca5d559a690dae729591b30a",
    "0x3ee7258614da617588a462c40714dbdd5b623051792417d2afdfa93315170acf",
    "0xac315ea8f227ca34ce102f396ba0c4a5af260ab521f0bd7f3d30a9bdd30b80d8",
    "0x40b821892d1a0bcfbd023eb4f4a0dfc221b975fd4162356d4ff513bfa7824120",
    "0x5e07ab22468448678db318802b2eb32abaf77ab00ece82f405531ea29baa3925",
    "0xb01431775600b6b9b3d6303eab4f6a2ef955e13c9791e2e03188213ac42d51f8",
    "0xaa9a39d908b4831652a206fb25c80ad0bd54991f8632b83d564e3cef652c48b7",
    "0x67c27ec427bd9de13984087aba6098fa02f1c4ce7e5f8b81a02565a7f48cc568",
    "0x0ab90ce89e6437f98a9d2b682dcb8f3b9e683b59c9de7fa5b82e5bf12d2d5df0",
    "0xe6c0754a2df861842e4023e614c568c4bae7938244bdb375018a57e1bcfb538e",
    "0x30e0f0472c3c5b4ea1cabec18456bd7ffd72fd371fabf7bf3c35bd2b7338482d",
    "0xbef13e4125d74bb843014d3fb2d6bfc7efac9afb6105b555856d3048ee08a98d",
    "0x97d2365b99c9b53d76f73516280981efd1b0c44afbab97fdc4cb9b419ce68087",
    "0x6e80cedbd31019a5d0e4fd3363f6b6ad3f2b52cdcc7e69d00ce9b12e0164e573",
    "0xb222a8e945118fd43aa70caa2807c83597e7235764764860d6fe45ff0b2e0eda",
    "0x577b9c20c7c4b761edecde0fe0bbdfb415e0bbfbe8240db199a95e62dc2c7bfb",
    "0x2df1541745ae4d866ed34a971d43a19cb4df640185e9882525e579c166e97085",
    "0x1b61cf0a64c02db29876d799939966cad037e4977f588f545addb24fdd90d5a7",
    "0x46287ff14e1308ba980c67e2ef9524147834c54f12719827f74d343508b58372",
    "0x1a3d9ae661fbfb998d75bb951f2d995c2202af8d2abd02f3df608126f87cae3d",
    "0xa265d996ebf30b4d9bf623353ce4a2214166104286a236e4765385417ea683be",
    "0x6c906b66ef057fd8bb336352221ee643d648471da9ce886691a1fa8592113ba3",
    "0x7c1d8c2e280ea3bc0ceba21e141098127ed5218244c708d3c106d46cd756a325",
    "0xbf98129a67641e675c09ff26f02b45cbf478246832a1c0efe6b9cab9a65e74a1",
    "0x1f05ac7b0a52fe3073a3c5522d1f80e34914861418af19ff9f4ff1e9ea34ee45",
    "0x04b5711df8b0baa3f0cf0ef9419308e46a7ca050426e0d171ecf9280caffd66f",
    "0x9d449c29a0efae5b8c4348e76b5c1ee4c6c5143400173ec983dfb75f3556cd0b",
    "0x52afd393b3031c0531042ee64778538baa2ff5c036f6005ce17fbe63426ae6c5",
    "0x78971e110033b01fbb937ee28bccce160cdbcecf21bc85dcdcc9b9702a411f8a",
    "0xed604c101fcaff425ce7d5c38b00490cb93db587ec35c1e2767d9d2e29912705",
    "0xfdf8f3d35b7387dff5c961fb3c2232bb17efe6f9eb528975e9521f197421d07f",
    "0xfbcca4f245e2215155158001fb52d00e2b9360c2939221cc897680791f6ee8cf",
    "0xad44e6d96dabd1190d3403f2f0530d8233bba7fc46bcb579de9853423bea01a8",
    "0x2f4f646505479fb0476b5d642d77f0a146886d2b810e95eb5e9421556acb444e",
    "0x147e3f61031c53cfb0fc13d4caafbae8d62eb4815fc97a6e02fdc55f80e82185",
    "0x7cc676fb51f7192d42281e2a6fa121c71eca9747c9fb4ed68f40f496e0c5e870",
    "0x6a6e3795466722dbd712d6a61767df54de01702554fcbee8aa53540c467b6f67",
    "0x9acdc5b1e51c9a41a54bc2e2f85fd3a8ad2e02f02cab4cbe1a9eaeab4f0deb7b",
    "0xf3c08a7aed6e5fdb9f9eb617aa6532682022dc324292819ea331967ad6c33913",
    "0x19129c356ef68ab26adaae69be42b96312ff4a4c0971456e0b8cbff103383377",
    "0x5034d3806a6e87af053dfd0a8c1bf0dbf6714a520faf59a3d79ed2c9a854c832",
    "0xc9789aca4e3a398accfb90bee2ac5d78db8e6b63c72990072edee9344c0cc43c",
    "0xee85ecf88628e23fc3facb889721d52bb0c9b7c73ba81fe39c72a24f3c65f0c9",
    "0x374d7468253709e7d2d6a6ffc2835f60fe6c2b79f3642c729a4a302aa6d25345",
    "0xf35bba7dfd7d66fe2f2ecd4f0f96b70984d21a48ebe44c710f26b59f2eb464de",
    "0xbaa2af52f9fe3c979467aa7814075eafb3eaaa144d1f50e12eb1aa7ae8a478a0",
    "0x0b1e9a44c8e31e606a95b540a62dd9296a5fdc0fa1507f9a51a580892d4fece0",
    "0xa1126b39f414acdaeed11db5080b5a5376862fc52c4f2c324112bffe4f854ef7",
    "0x4d0f6405c64f7357c653b9f2f649bf72b17e75b8e0f46850b9a84768e8c5ce68",
    "0xddb0911e9ed45029964701c66c1aa439072149510cd5becb9d3e31f3c542dc85",
    "0xe91c36f2fb57520cd0320687076d13e9cc86d9d0f071c0abeecea9a9bbf5121c",
    "0x6996c5fb8da647499368dfac08f1b00ac4d33bcaf16048ad9442a5c0d7471f62",
    "0x21f5961f66b13ac57a929c281942f285f73d84cf11a28938d380771a88c27a42",
    "0xbea2e3077af8a6f6df5cde621e2a8cc8e30e88792719fb69d470efb742e62be8",
    "0xf0294fd08808de4b824540de9300ae1879cced73e0946beb970c49db93c62f9b",
    "0x07d04342d730a9af50902c81f2083e64cd3cc75c037f2aae732e0415b7e01d7d",
    "0x3892ba571b4960d7308a9c11705294182855bbb20c43d402193195916594347c",
    "0xcae3612267fe78390804a479f59927d331ad4f11fc1bec5f4e25ac0c26c64ecc",
    "0xb56073911ba7e48bbf25785e03401a98d27a6ea21631ca9d79af1a37dc114af6",
    "0xaf17e28b8b87a222744a1e05a296b26a2d9d36c32802fdc6eea33e3e71373a8f",
    "0xced9748d031009733cd11979b1f5ac43b932f1530ab5669effa908e45f94d9ab",
    "0xe9b5f89b860a9442f99945ffbc970728c20f17b7fe6e0a0cd7b8dd95e43e5481",
    "0xdc3e5f2cd6319275ea83c9fbfd8dce39cca55c5ec37a5b7d6f15657d35ee618e",
    "0x175f982e6c56ad203f275f1212dcfcf5d5022cd9018775f530a73049db4dc4b3",
    "0xe01bbac39cea69f456d593ff5b813f997bb347085c1cdb0c73b22401f0d02b9e",
    "0xf7ab67795ee2faf1787a3396d1bd3176e52fc95fc67aa2210c51cfa058c7d48b",
    "0x16c6566f7ea92dc445644294e97844da11982021bb1b3169c0ec29a8ba9d1c30",
    "0xa79e4427af8a348ce39a5f539b466187704bdb9143b74114be773d778610f4c6",
    "0x3766529c0e82d98430c49fb30f4a6e47d1a17e80df2e011f85b1545a67230c9c",
    "0x4a8ae34c722e14a4a317d15665742048abc839991a1de36cc0a829ddfeb93492",
    "0x8367bcd70fb96515d3319d75404986e27e8f81b191843e7a21ae840c7968a8e7",
    "0xbf9d4314da324c8883caaa3e880053224ae149fd3eea9a7e740e0a4251945f0c",
    "0x74fc0dd86bd0f8e6530a66610ff14c4b8cfb117c373dd6cda1ea87d023dfb793",
    "0xd988ac4d4521b228ac8da83ad60e81d7a01fa7fa40a4269aecd5bda0bc883877",
    "0xe9e140568bd2476a8f0dcdee515e6a9faa0f5b148b93f08b56de9db5bdf5baec",
    "0x57ca2b069269f74635e3e25051a322d6cfd2b06339794bda107fe7ddd535f3fc",
    "0xd41df83190271a6a7b7415a9e8d6079f11b811a341c79ca336ca2f72a85268d5",
    "0x06a66e42dd7dc279a4d0dc74db227a1ec331cc4eab5bf4ee051e3fe422f78a41",
    "0xdbc25f1a82a99ab364bca6467ade76828e5170d7b71350de07666f780a07e3d0",
    "0xb1ef7a5c7829981a24df5ef2b38a54b5436c3920115201720c81b72ea87fd402",
    "0x3cf2db800c7007ae961475736ee29e6ef01cec15f255b7e555c7a6b199fe0188",
    "0x594816ec18dba5c04c79650ea5d8507295ef23ffc523a1058af3f3e9fcaaf5c0",
    "0x830ad6652c941e4d904fc8c4fa3e012d45b532fd81c1caede658ab976b55241e",
    "0xd0e7d083a04d20dfbdc08dac7c7d4fc0d5c7cd68f746f8c3b3570be4bef27ef1",
    "0xfc3a920d8bed76f779c6c0ef327b0bdb2b7015a89a7dea358d8e00f00fa927fc",
    "0x032111c564eedadbd744bdefa352712878a37cf72e4d60d04c85045250057084",
    "0xa5efaff495db7ce3bd4228e1b10d9a2f278ac4d9932de6ee8851ef0d900c5624",
    "0x2920d166d9383e26108a264eb25bd5e3094b48909a1c605e59668fc4a2173881",
    "0x207a2a2878aee86e7ccb91b7a34b705834b268e0dca59db118aac19336b1287b",
    "0x1f525ae5786a2ad660bcaf3aa02a20e58a8de2186e7c005677fa84429b42c864",
    "0xc2523b3c3e53c546bd368918046fb7af49416f43971e2f9819db7857aba2d75f",
    "0x314be14cff72de182048b6442bc6ef8b89d829c2685deda4a03f65700e8b6ea5",
    "0xbac70f4d27ded34c887ab19eeb3d2bce526098bea373a0c4358e448b58ec32d4",
    "0x6b6cc0dbf353e66654b781c3313f8101d39555e5bacf6559c9eae12b40d6b883",
    "0x6173a017c16543b96d736308b7352e107791748256ad46147cb7dd4f66e8436e",
    "0x2839bf3e2193ccd8f32f6d6b02ea66632060928a71cec15351fb79511508f47c",
    "0x6d6b5d32bbf94e6ecec0e018eb425045560c26588ac28c35b444165bcf63541e",
    "0x671df37eed2870e6f9b13d58190c73377fc8c61daaca949df42fc67831466311",
    "0x0b5a7360684804b2ba0b8e258dac0e60356b2eb8e91a913091d45ed9df7f4c71",
    "0x91aba843cd6e083b1da69b6c5d11f4649d42f440473d5730c10367934e838b66",
    "0x91ec010113648710f419311ebc8b88df18a8bb081211d017f6c1c9df22b9b0cc",
    "0xe0ff7dcd4dbff758b563a1dffd353f776682caab7ee82d8835561acc41a9efa2",
    "0x3b8cea5fd89417f22929ff1126ec90df0908461ff1af26c2d600376fd8776644",
    "0x303a711dbf94167953f5dd89693a2e5dfd31b0ba723b7e13e0d2428866fbdba1",
    "0xdfc4903ca570faa3843f57a522e7f51e64e96c2e539c27f6e47b53f958f89e86",
    "0xafc38544fd4e3a48aab91caff303d3e84a5954d6119bf1f38445e9e89a2cd738",
    "0xecc561addee194268896fb7e8ebed96b49047569d5a02ea902112883820950f6",
    "0x8de4bcaa74a6d7caa5efe497d3bb105127ba9a901c87a7315cf8d3867a7454f3",
    "0x20434f56806cb2b6beb2249fbabe017e3e597d3f7cd3d0a171880297f09d57f7",
    "0x799e04a7fbb68d97379de5f342020a40fec37ae45a262a93bf096db18958c4f4",
    "0xf2febf2fac9449464b0b361466ec9c674a4632d71e2e6ef52e90469faa628725",
    "0x17251f28106fb17864987c3abd6d74d4fd7c1c9a1dcbc8b98e96fb83cd4e82f9",
    "0x3f1097f97c3cecbf34769e0ccc2797c871a6752d292805bfadf43e927f0085a5",
    "0x3e040ce1f599014a652afd8d2c4a73c260dff636850e8b4f78ce1091d8e87526",
    "0x64357e9aff2d4a0749463f4fb9bed3f828d9cf5bb4d1ff8e531f7057b992f3c6",
    "0x42c9600b409d5faf7b2416d62b73e867ca7954a4d29c3549593069f3adf4a81e",
    "0x924715cf4559d7bbd2f1897fd4d4063a5c7d747a6898d18d9ed44da3d52f0ded",
    "0x8fe15fe2791a406aaf08a7eecb4a4ad56395fe07038d6ea016a8b15aa0e1958b",
    "0x2958f665a3b0ce20bceb9c0af9b519c963342b5ab1ef99f4ae8463666a0e69da",
    "0xecaa6147329b130908b48e5e58aae90645df1bfc437033f0a801110f77b906ac",
    "0x4bf34b4e5b9efb22b7ae8dd5cf80eef960ef0e7600329094d36a10e63fb42652",
    "0x626eab0eb037d0c99a5d986fc7c20660f32eeb9955e546495777c6b383e99ce5",
    "0x2a0b43f7fd14d2d6b70d76bca73cd219f717d8453a6ca63afc75f97316d97d47",
    "0xa076768260d9bae9ecbabdd2d5d2ed8ef1ac6fe75b65e5648253f55c508e3f04",
    "0xd90fd9e1ff3405c14b9bca1c9d2940ec0322b0c9b16fa5b9830df395132f0fff",
    "0xf397df861bed5d07e376208b34b6935cdf9d2a2f9168c7d896ce6212bbb520ab",
    "0xdc819b414e3d4f569b673786918ac75b8d826437348fc5013f20ae6f9352497d",
    "0xfb8b9ff3672476168098e9a956cd1effc93662b16fc5071839238ad91a8b60ac",
    "0xf1fac028902f167b09803ddaebb86f9dd9c219cb30e4906f6d6e438dd04a5c82",
    "0xec5774fc6333f5666321d7499cc12b3889d42ce823471ec30dc153471329944d",
    "0x7602d2a6505d01d16df6b002638abbec0cb09fd78d5b3feef4fc3c76afd2f310",
    "0xbf3599c88c6d98d802099f68382fbfe395ed56a7982b862cae3ca2e6330994de",
    "0x10fa41cf429c748d13f2c8c780a57fecb8c37d77a73259beadf14f27f800b8d7",
    "0xe7ce3e0b20b295327ae3fc90729736d1af7c19bfecf4d61e652982500b8a5526",
    "0xe15f6dfce90abf07eb81903335d96fa9b952f9670f1c936fe50d5e1928d27386",
    "0x47af830cc0bfe3f8c2a091b5bb0063ddf34935ea193495693931d48b2d950656",
    "0xceefa0622cb56c3064157f1bc66f20354927bf884c881d831172945beeab1884",
    "0x42ca54dd6bb57df7ea14fa1192b348331a7ec1edc603e3fc868a3cbaff14a0cb",
    "0x6f8306e5b649bad9a28f11b6db8afafb04a9156168c10dc588ace0f182400711",
    "0x4c845c71ce8506e600be64b6547e8aae41789ccc6c9b2a58509adc082c94bff4",
    "0x6d2f0d0795bc009e3e127b6e9fc871a63863e12e8c34fe6ee3caa8ce52537665",
    "0x202f777df962325ab5829f67de3a30ae59c5f214017142d15d333c51c80ced62",
    "0x442f235f7a925f90082b49ce6a7b02a20bfef410041244254e9ef2d744367973",
    "0xd14e66a69906a559f7f5648cc28389aa5fd05924afeb4c55c0c7e4ac309bfd2b",
    "0xfef2e9dbeafce989306392828eea964801c798b4f85d93e38396641ee82c850f",
    "0xb787e27556b7b0ff96ef97b62096839e95e23471150a0b63f434db6ee8980ef9",
    "0x376a0c5cbd3f387c9ded1393a812ccb41ac9a52f64abe5d78187e6f4bcc44a83",
    "0x169780f1749f5487a919cacd5ff6dbe552f50dae5264c44ba5ac771db9894ec0",
    "0xbd460f7816be398ee1a2174828bff6d774c0381530b3c3b229fbda027cb0a915",
    "0x18a7c91d5ad8d1d2ab4fbe4b79397af515b408fed60953a7d71e4d206d16e0cb",
    "0x4ed7e7c9d419d62d1d97ef2fd929c1712439b9783f9338c0105862a3be007157",
    "0x0adfbc896b6c609552648c7ebbc9facecbec02c9f4a972eb3bacd9bdb0d649bb",
    "0x5d192342dca49349e3cd70ef8392e77fc84109174d8e0245b630268c0f8ddfe9",
    "0xdeac6abf79a9352b53d01a5854dab7729f9c5b2a063405c7bc00c7ead69b6a29",
    "0x2b963211f66f9c8ab8d73760449e7c7a5be737c62488c9ccced4afb3be997009",
    "0x1375f85d88accdeab7c269498ecb25711459899ff7090fa8b7dfb7b908824534",
    "0xf80a6a51f552e2ad9f17c6011a28c6d38192a903560232196a4a07292422b5d6",
    "0xd2b8a628a37eb0bd69f6f5cee39cec61302efe130f194ad1b7dbc60790e886f1",
    "0x49c65860dedcaaeed5df3de08104a86c055d61bed248b50bec13b936cae18c6d",
    "0xb77807178aa2ae26864a404c9f8e3d6cf7a4941bba0c9020030ff85bd42a3111",
    "0x6a5eee4b3aaf745913d5fae6eb0858df94214dad945b8c7de7186c14138b47d1",
    "0x2d8a6091711710bca5de0f64a971a5f54f10e2d8abd9a0e45f16796c413b7e34",
    "0x0de32064173c9c7d8f97a06f576a622a3530bf6d2639e04a93ae97484a494cd8",
    "0x04c517ff0f59f8557102834f096491cc80b7f160af2997dbb8be9ea60a3254fd",
    "0xa3bb8aac562066194c8babe66c6e0b9d485979c1f79dfdc2dce61f6a52ddb774",
    "0x42b4f96fed270d879ba46b954d4ffd5a0ee3fff78ff0366551436501a37d9085",
    "0xa9869558a9b58691f96a9b67e0885506c9116eab589cc1ca7a6d967016592540",
    "0xa7b51bf367d2143bb44722c68b58eedac3902f7a4b7d35fc3298708996b3f804",
    "0x8901e4a043091afe1a10a4aa959bf0ca390e9d0738569cd9b7ef03faf5e58ef7",
    "0x71e9e7e1414125873616f46e94f7bf3bd621a3828a93c0fc7483bd14e4e3afdf",
    "0xf8a2e5ad1756e020d27d706b3e682050275ee70e1185279d514ebe4939178b52",
    "0x4ce18873d4a8c402ff73d31c24ca7eebb449c5145a980c42b19bde6c821c06a6",
    "0x7d182a16b08332c33ac84e357dcb6335498d5451c69c1be055247e15ffa91f6e",
    "0x19ac83ef175fb9b616afbd1ce315e311e89ecda53717aee0136df87b8f894247",
    "0x31e11b7e76486018fb827682953ed9b67639a83d1a30095f43091f50084994b5",
    "0x08cd06423be08694403e0a9193f4a1149f32b9fe60575c8629c43b8afe1c41da",
    "0x69ca0dbbed6b0be06eca44604d088412132d17f41833f70fd819f25d448101f9",
    "0x6dac06697f0ada2997eb40c5f300debc18828247b86235c74bf18916222973a1",
    "0x3140094f5b6ed2900f4a64621f981f768e36c0f1566ada632e06dfb6d6881284",
    "0x933f950c4d96ff01e93e37e92460c105f985247a5bd09ebedd58de0f99a0cfe3",
    "0x1a4a4a1a723d2fefd7d2854d778b3ea6e5c34acd1954a0ebb95de78cc8d328de",
    "0x8d97da4a0c2bad294fc4c4c4c2cc40da0328a6d528115eb0f91858f6ddbb71b5",
    "0x018983c3b6fd5bf4d019537b6f773d2a9937c0ab246055f41ce29df4e3099f5a",
    "0xdb7659980c5123ec49a3005feca8088fc1890102b94bc102f9cf803afd18e497",
    "0x80b2e4e0c9eda228fd558d60e17bd3acd9c03c09c9fd09a7455e5ea1e9a4ae90",
    "0x712233b668757d5035a5af65cc063f8aad131d648e406f735b7399a09e90dfae",
    "0xe53d214d6d7a6533b507ff68ca085e5ffb4873b796b15c6d382f5a9f63dca65f",
    "0x7d67586ae0cceafe8b9f4492b68f0a76a289f207a1fa162fd8b773d934a44ef9",
    "0xb55203df12b617876c57b8efb9d6c916d307f5c2846dd3c05835f62b66fa3fbf",
    "0x5d5815c3dd013e71206570d19200a5e91ae100d5cbaa806539f8b58338674558",
    "0xea3b1a31754dabf9e06e19ff088b03669f0de874ddd5a9393ae9f9fdda08f88f",
    "0x3dbb06b1c0b0366c896f3873ccb79b5ff249ad322db438fb53e127a1828df535",
    "0x6542423d7c64d31b4ede94d1b53d71c1bcb6c53654c05c82be9e5969663d8e28",
    "0x387b985d638052525a1d0fe4759e44cb6778f4288eeaf7385d89fcd614f5aa45",
    "0xa73452c886f5f663f327888ff2e26cd8c972db66a18816b922f535c1fd032b42",
    "0xfe7144c31a5539af37026cd3d9abbbc10c9d60fd28e35907f22e06a2c27eaa6f",
    "0x1dca6c1034bb5e784eb9bc555e809e68af740d5cb928bf358bcf14dee8e52c57",
    "0x154a22c18e5b792f51a1a7272a492444b85d7895f18124a0412919d370d900a4",
    "0x542d11b130529f65707c9b0f1cdf8dae00c5d9f2bee57ae7f42f22de829bc830",
    "0x2008281223c72ea23b78a588d1b608e0e51622d67a9ec1d2ef5370464208d9e7",
    "0xbf6527cb9064c0d1727c0f135f5cf9d7d738efc6b9f54c553d679d59768408ac",
    "0x9896d12953ec34e85bf78a36e0f06dec952e61b66ac2ca28ecb55901ce2d3a8f",
    "0x0b380e2f4101995bb215b2adc0b8814cea4ad4dbd7a5cbc6d0852b5da86a3c3d",
    "0xc6dbf6bbfccc4b97b3e8776757a16c4f868456634dfcd79a07f0c0988b5732b7",
    "0x999c395a15c792a715cf39d709f8966c9cf933673068c199cb4880efe1ebcdd6",
    "0x1520dd6050ef193f914c3c256f11ab2302aea84c44231e2384453b10404797fa",
    "0xe4e4ca175163875dc07eab89e280d045cff3d40e8459be06fe26c2601e2aee0d",
    "0xf09f673b42030c6a83974ede8cb47cc93409d9e9d96319ed03af8b5f426ec0ff",
    "0x9ab0ba6877ae0d96659d3690618ae768710ab37a0245f70cea8bb87c28ccbe3f",
    "0xb65a3b9d89f1ad69ba9f15cc6a1a1b027f4746bc71aa24e2c770abe579a1ec6c",
    "0xd70ad40611b6a5cd6777b624e24e442b58d0c46e45725b1ed04e2f0c0efea01d",
    "0xfb0696567f05245fe26407c9fe87719f9a00e7eac0b6fb4f8528fecf423382e4",
    "0x84c4e1143bd8b0641f3952db2bbf2c5aad9adf373b44a51dc1383107baac13a6",
    "0x187e185fe563a1051a263025e753e816c7650d3eea51df91e5cb8ae86e15203b",
    "0x569c215fb24e13f5e6ac1be4c179cbb85e6ee93cd6998353ec1917ebe13dddba",
    "0xaadb8376d79339a9ece5b15ac5bf884dabfb7527543b3280b9e8f72163038d3f",
    "0xce41e0d78ce6779e2545b2fa3a942d290b4582fcb7790c5b16a4540fc5d93942",
    "0xaaf105f46424e62f7ca7eb11f3d1106ac65615ededaa0353f7d3b5360a3e5460",
    "0xeff3d0428d1a1d18ced2e23d86c4b4e543ee6a18718fdc5535ea47dfbf9e66af",
    "0x2ff1e09f78479e0ac3415b555870362a667cfceb90ab8b233baf9b733bd26888",
    "0x64c0d7e4c28bbab455c483380e36899f6bf15633d599314511cfba7cbbb80c46",
    "0xee86f751ecf169bdc6e6219cedace4a9f92681d85dab395c25af0ad7899016d7",
    "0xc87821dd76a914fc3954208b84d43aaa7e04be2f1a61ea36230124c5fde89f69",
    "0xaea93c1b402ad6d4951949d7a18b294a6d6da0789fc4b0cf1cc3056df4d9da95",
    "0x964164947102aa24d139512933f63acc1f72640e76eb095e0d1cadd4684ed6e0",
    "0x486204324c3b2797fd71d1865be8e0aa0adc8998de40e4c27f46ef14979d20db",
    "0x19c71a5ff493c21ee9231d6a2739d40f35561d50324e39f4c45d078faabab414",
    "0xc2e91ab233b2a026d998733aeed2c7341596219264734fa1b1a947bb81167e93",
    "0xc79b6ff1835803437ef7e33b68c19e4953ed6b9c1beff30e50aa294065315800",
    "0xac1611ddb17eeadfc09170f7f61eb2ec7583c0511d1a9071a8c8f74c60bdca0e",
    "0x2d444a4429625380b8d7bca3fd01a6dc5bd71b07af8b0d75ea77eb177a74c74f",
    "0xfd7834544fde37b757f36ead104b637736a53cc6d58c7528ad5667bc7c6b7a73",
    "0x334960f48414bc36b8986f2a3b21fac7b4ea2076cd28ab01e4c59eabfd5c7a2b",
    "0xee13d09c7400637b674a8ff9c7b43bda6989de074624cac333a7ce63e25b180d",
    "0x8f9d64ec9faa5552b9502efbea76b59f66a9fb6df4b88fe7b90c24eb37e6a049",
    "0x1a88f7756e9b5b1864d9e507eb5c8e96d87b5356790de72dd5e232a8aa1929fb",
    "0xe9085a6bad6110d0af2e4a3ee89215e9d8a3b894f01b11b4b95d57d68c06b0ee",
    "0x95e17a88eabb792ce649e23255d45d76e8289f357880266602d875eb39bf728f",
    "0x99961fd6284d2aa5dcedc8963870ec63f4461332588fbca8da1b79a01a2e6a38",
    "0xbb6fbb9a8357c95f826d570d9a5bfe67fe6c4c6e10446289caea5be76fe24d9a",
    "0xd78b626b21995439086479ca69afd100c6ef01dd9782b55a5ad29438de352f68",
    "0xdb4a6d02bd53ce9f34a3083df7aa8f54358fb11bf5b69954ee2b8f00f6a76621",
    "0x1e57483dba009f01f2fcb44c31838bee3dd93f29d0e7b5de969b420bdb486bab",
    "0xd7dd7dca2ab846aa18879e9ccf9b7904a1d37028f021f4c9bf3c189cbae7ec8d",
    "0xf3564828f74bce127588ccfaab38e2e9344e9b41aad557445e5b9f9497808ccb",
    "0x0befcab128eaa8e493e9e7ec5dbaf83e55284b7741c7159916221f4c85a4b522",
    "0xf57e334431ed8529147dea082365195a4e6abe2be81099e1a27328d26f267157",
    "0x0740ed8c0429563dc318791d133680bf7d43a6c7e72907d1a489299b02c2fef5",
    "0xe3084c2f4553c71ade154e2481d3d81a3ce41aa852f66f2774de0b40d2484b65",
    "0x9b410cd26f75eb7a78d6634dd32dcda92c0e8bc200bf81c689ef29153dc0df55",
    "0x64200c091aa2f247ac0c23d346372831806e9dc2ee1cec219a738ab417f5d207",
    "0x6999ecbe4ab05b5d46c504f30589deda0b02dc80287f3d3ae3304aaa0365ee71",
    "0xd6e4db352ebd1df1be8ab64a14c38c00c4eaccb3244c1fe8c34e0b10ea11b77d",
    "0x324919f2ec3c1f5cb8c6d6bc21a040f31df3d191c92f6ccf64f749497ff74a97",
    "0xd0c2748ff66c9bc1914d4a2ca7bb131f22c8eb1dcd905c78321fee7d9a58fdc7",
    "0x7109b9fef2d70ef865a6677e92db6d437298e7eccedff61e8662af3d8a1863a0",
    "0x2379da11ba42e066270b260df248324305b3ecfe45e0cd46fc2876d1b47c79ed",
    "0x7da2752a317639038873dfd38c24803fc0d9fed1aeade65b2b817b4a60b139f6",
    "0xa2f11180d0c204294245967edf0e0f965db6ebc942a5a3c23f3741515b2dcc58",
    "0x0551c1dd801d99af17b343f8745e290a76957f87954bf2589be288426ca612cf",
    "0xd7a5499cf022abe91b4d1a1e4315e4c0182d8424e46036d685c2b81abc8ad5d4",
    "0x2ffee83dc6ebc5e11542524353042598b4f6bf76837ec054f68f382a460b352e",
    "0xc58d0a01f232567eba5303d5f3f01b7edb3e162752134fcdd9d6d0422a71fdcc",
    "0x4d0fc21750fd474e425999da7cf8a56924570979eba7358216f799a7f79fd9e1",
    "0xb7d603c8e617e5b25752797ed24f51e3cb4805f0e6e07707a2b3baf3bc4acd08",
    "0x4e98ace7d5263ccaf9059d561d3850613dcb3225bc61cbd17d4578ba59146dd8",
    "0xfb1c1c17b803ade53cf725938ca81ebe757733d404c01bc1c55cee609c0f7c87",
    "0xc9919371da663e39fbeb040a248ac921eda1da029bc13bfbdf527da6850af6b3",
    "0xc40a585ecb683e071440059d531c3eee54e1c18f2b23a722774c782af59f6fb2",
    "0x907d311bf4b5e0b4892fb7f7af0583fd0147c0c5f70bd7cbe14729f9bf9c09b2",
    "0xac9d98661f29a31d9b8fb051d044228fc938527414e6d3d7234f29c107d0e190",
    "0x0c56c802ab406c1d3a0e623e6a9331a45b078362f39b5c7433be71d6f2d85f56",
    "0x03a7c41b04a8aeeb75e0d0d5afad159dfc76827b5de0579d66610d52e210ac3a",
    "0xce7a93e940ab8866bb2306444ad1f76188735e02fe3573a909ad0a5f1c7d8383",
    "0x788aaee8e77869423edcde83bf161b81167a32b0938e6b6b1cd69b584c7c8162",
    "0xb945d2ab8775ac14dc5aebbd4cd2ac0013c2c78b39e5085c8f98ab61d802507f",
    "0xe63de9e5a74331fad1321207abae7c1faedeae9adf20620d63ad4c622ec1943a",
    "0x18a3bd0bd33cb3b01b8e24ea5721735382243f6e6fa6a94a375ef7fdd11b011f",
    "0xc695dac464d9872ae49cdcb80db56176b93148e14858ee4788a54a98c6b8d935",
    "0xcb243b1c94e14fd0528cae719fd1f0c4c57b24183bd385dded43ff1ea8d11241",
    "0xe1536488960a630553425082437eeeb56b853d8a14755dc7674a7bfadc48f0ba",
    "0xa25b25368bc18e9f2fd4a56f9b6d15a1d8994ede92cdd72f436e5052ae70a799",
    "0x5dfcb3275aa46da1203bd4ae666dc199e2217521a745b7f65c9ff121bd93ef09",
    "0x20950a37071ef0e458dab7c32b563f56ca6a1eb51e57ed65bd23d54481228df6",
    "0x2e0897e761ff46a48a6c81597dd2ba8b8d88d837ba2764b8abce749f408ddc64",
    "0x6e877ac048c72651f4fc3ac5c07ae9cfd4c6d6bbe43bf195627e197ad66c97e9",
    "0xcd6d52050a81973778ee4373376af7a0840f0f92ebccfd75f9044cf19e4c996d",
    "0x02529689dbba1b20274c75c6032cf03901eac6dccf369fb64c7c4c34dc8d0ee6",
    "0xfdd9804dc45173e255b33c11cb854b55a3ac796587d8d24b6a7a84b169513ba6",
    "0x4cf30cc1e19ad25ed2200b50b1270f06349f8297ae48a62b087f42faf96c3f1f",
    "0xb4d2913daf89b3eb11191b1bd600d4b8ce2459e1ef62a611a61d99d23806eed1",
    "0x63746496b58651667f1798f889279fb300ebf6396e11c6b28a93780c9ee5a68d",
    "0x76da43e0d0727ed933b4f8ad43aba5afcafec7cad92c3b9943969385d194e890",
    "0xed01d6bc2e06ea692f809b15cd7b897cd874cc4919b7a6ac2b3999be68eeb720",
    "0x0e3706c9871227460154c8e61b1fef776ed2ff3f8c0c9d9cac7cda90e5d7079b",
    "0xe1bed70e8809d5a6685c9da1cbca4075e0a2f7d61d72f8b72f20a513a7e105ae",
    "0x4ee8c956bf64eb7fbf01b34885301b4f81af439cf7a579d8f58a820f146505f7",
    "0xe11e8f63d0788680964d845c8f06a3a74817a216c42d6b59c53486e283cb0c47",
    "0xca505c6785ee1fcd0c46faad0d280b3fd9bdde13c9c14d1390badd2f30f4f915",
    "0x902cb36188d7c8b225cbc3802169661b1e2afba7c362455120125b4fb4a4c670",
    "0x98f2c3720edf6eee3d4f85d620bf5973976195f198703a56bbea55ad03ca3597",
    "0x038285972f15868ed196bdba06f682a79ffbab247ca9a760ec2d340cc840514b",
    "0xb4b38a08166b8c94f3d10683a8a219b2877d0e9f45082e037fad6e9eab14946a",
    "0x7e2b43f48887a8f6b2cd0982437c7795995b84e56354a02a7b5f76b99a203e88",
    "0xf1308a51365b797afa7dab85790ff08b32458b4615ba3a7d5a5d0af54eeb989b",
    "0xa01ecf0d026735685559872ea7ad54f3e17c3c050ada6eb288e1eb7be09e38f6",
    "0x773d326269dda1395690ab226e9e1e422d1674f5991b7560eec38b08f372c16d",
    "0x23887a7703a3ad844dff973dcf7d0154dda7a487fa3bce3116ef3e40fac59272",
    "0x8a8da602aecdb97caff6af8c7fef9bb1a45fed787fbd45d8f13b38965c899a9a",
    "0xdef0bbff4a37b83b677d4b243324eac8f32b0b9f465fe9644f474f1cf3eb7148",
    "0xd8e73d1d2eac6f1970cf4fc5bc3424def2e5d9103e09217ae3c30098d9701fdb",
    "0x2fc93a3b298185e6c4b481db02055e5d7a827a21431a39837733176d98e8a40b",
    "0x7561dc92176b254c22246e6b20d412a7f07ae34025ee7a69796b7fc546e45dda",
    "0xd8b4579952aeb68ef66556f3f214777c3440622b0d0525391caf8ccf85aa0bcd",
    "0x946a1baeecaac9b28e8cf43b6ea129560de840eedac1fd79c9e2ed97fd32be3a",
    "0x583e20aaef19bbc510fa21330a593182a1f604cf7caf739e2ab2d9b6d0eee7ce",
    "0x5168a2779ae7bf41b2b8f1de747ba3c476c72dce3394ebec3f4fba9b7e785d70",
    "0x5c0f3a29ac2cee85c2153bb794613c56833f80d39f6986451e61287184dfd2c9",
    "0x24ef1326888d6b6a508016de0dea23be5e80b26f05c078d3a464b237935c87a8",
    "0x08e2f6f6d5fbbe8a311e336c2fe09e5dbdc8baf27bb6a70f9fd9e9dcec3516c6",
    "0xe53480d66bc8d0b071893b23292352e158655f5168da7a459c1f334cfa80c89c",
    "0x5d61bfd784be0c4db5ce90a3339a2bf88c1f0ff78c34b7de4ea5eb9388c42698",
    "0x01caa560e61da3f4b277319ac896e20096fbc60cb7432797abb5910565d5c25f",
    "0xec97edddea222160ebe36ed7d51d59510fc7c663c846f77312fe5603f3c10908",
    "0x33bcd5634e4493955131dc535e9f7daa8d44a47e5a4b9e2a4ead4a610123a1aa",
    "0x64e8796eee6f489a9cc6f7057f099ba8aeeff127b330673ad382e82674a88daf",
    "0xc815bd1d39cbc6aeeabd66914426a62d18e8a0c077b2ed05fcebd4236cf0ab11",
    "0x1b80a3217c60413ddb6c5c8297fbf35fdf037f6bc2bb8f6bad42988fa1bf55dd",
    "0x1d8dfe9f1b66cf402f3eec638ea16d8bc2fcd29623dec51d0cdbc0b593946a1f",
    "0x1c57ca23791c025163680e41605443f1ab628338819de5a43ec4070062bc2809",
    "0x5c86346a1ec0aeac77c432d807721b6fe9c254dcc431f06617c0fc5b50dc2915",
    "0xbc47795f6cb789477cad8740151ee4f7f6ab81fadc52c59e62e11af2a1fe5956",
    "0x77f713ed3817c3e633ad6b488b72e34bde3e5293837b9fd04d0cf507ea2bfe1e",
    "0x45d0a302bbe7c911b90f1853d1e794ad0b99a76548cc142dfea31fcced6f5208",
    "0x9e0e7175b98daafe64c11b9fbb87e45b8a53de9bccc6443188a9c4339f0c1465",
    "0xebe9116d9fca2c2b36245b6c006e9ae6b1884e0035cbcad2d54dbfa404b1c7ec",
    "0x0da017b62317e0175b747c51143a407b786588525377ccf4fcb70f7d04727306",
    "0xa99cd9fd466ab1f6ed768a254f76b8c03b35c89686bf2ee540e59eef9c9675d0",
    "0xe196334282a6a4d42e90b624db9f0be783ba53445afc56431653adf93815d802",
    "0x214a7d28c980b9125f26d7fe326e011edc6713e1ec2e8642bccda5ed90433dfd",
    "0x401a5fe2df5ca436a06ca7b8aa3ebed6c9d85cd165c55a23510877289857c0ff",
    "0x0044807e483c7bc9eb150422cb1b8b21d8e878669bfe48b60852e32efe38614b",
    "0x63eea631c438e4db925aebf821f5f61cd57b4aac213c55aab259322057791d21",
    "0xa36ab87530025f02d7c877c28473c75978bcd60fbe3d16d2ca17b5fa8f61c862",
    "0x6d6a46c02117f754906b38793f8872fbcadef284ed99c0b088525f9f002e41c4",
    "0x0a0ad65974f01879c89a26d38ca2836ae9bbaf7360830ccefce561d94e6e30b1",
    "0x1cb0ec4a14cc32403af6a9a214e2d7af33b2610966ec1654c82d2a204c7e1c62",
    "0x915a7bbf46fa33a27519896e748dbfe379d42a4e0bb4b2d633306acfea26c061",
    "0xb4f890689a6e19eaf7b37a620fd1d17b944880fa58a3bc22e923fdc32ccdd6bf",
    "0x681bdaad050f176dff7ba3e8cccb0dae724b5131bc5381f514c63a5968b3d6f9",
    "0x5cd77b616c06ee1c651e9f465f503d7e5ce99ff1f553016f25ec52d1919759e0",
    "0x5e712a5de473245e949e9aef9f397518760a36908b6901a202d65e59f6c71222",
    "0x2f04e267ad8024f18b3fecbf0ab0907c7f0b243dda8f3675cdddd7ddebdf00fb",
    "0x64b0d344b6ace1e53bc555f9ab6a2490c17d21a97145938e22b16f225d151738",
    "0x4b35be21c3e8671ccc680d15a9e4fb72c9a7ec2bccdf5a123d99f9e6477b893f",
    "0xdc42c692bd74a336dd1af566ceabfca88dc7b635c737f97dfb39ecb0e9e5e1fd",
    "0x06be1ce8ed948a8703fe3f6acd4e77c34741a3c87f23385930b2512077b8d85b",
    "0xeae1f25e86c0039873414744e0b40e1cfde941b49fbcfe7d32053fb69121edbf",
    "0xdb7a1d90a8de4c09b211199f218386f2afa7175fd4d5019b112f39dbe09adc4b",
    "0x59f794596fc74a4e8d88e5b4c109c7026c538570f10ae136f52c2e1e17f57f15",
    "0x71bf27f51d796dc3400c3edaa2da525f6443692e8e9dcfd4e867a84e8910b610",
    "0xe5ee6ba73053b04ffb8e053ace482c113ab185f2928a6755102dc5f54e38253e",
    "0x1efacc13d856aba5cf1ea5cfa1a21b3fa25bb3260f1d988ee1cf248fd8878d4a",
    "0xdeba4a5da26478ebc69f6912a71c58da990fb081a78cd4e356fa726101611784",
    "0xdd3878c7f3ff0d606836f8e426a353cdf1b5da4c820dcc90d87e214ac6b0a980",
    "0x09c1ac721760705674e83bcef653c134927e4c739c9fa38ecf8cbaf2df1f88c9",
    "0x6f493b44dd5c1f1ccd88c9275cbb80dc8467e8ca534485db73a19c40a5699b88",
  ]
  let wallets = [] as any;
  const k=0
  const nb = privateKeys.length
  for( let i=k; i < nb; i++){
      // Get a new wallet
      // const wallet = ethers.Wallet.createRandom();
      let wallet = new ethers.Wallet(privateKeys[i], ethers.provider);
      // wallet =  wallet.connect(ethers.provider);
      // if (i > 427) { 
      //   await deployer.sendTransaction({to: wallet.address, value: ethers.utils.parseEther("0.03")});
      //   await profile.shareEmail(wallet.address)
      // }
        // ethers.provider.getBalance(wallet.address).then((balance) => {
        //   // convert a currency unit from wei to ether
        //   const balanceInEth = ethers.utils.formatEther(balance)
        //   console.log(`balance: ${balanceInEth} ETH`)
        // })
      wallets.push(wallet)
      console.log("wallet=============>", i, privateKeys[i]
      //, wallet._signingKey()
      )
  }

  // const futureCollateral = await FutureCollateral.deploy(
  //   "Future Collateral",
  //   "FC",
  //   tFiat.address,
  //   contractAddresses.address
  // );
  // await futureCollateral.deployed()
  // console.log("futureCollateral============>", futureCollateral.address)

  // const card = await Card.deploy("0x384582a8d93e91dbf6a399cd8241d374da2d7095");
  // await card.deployed()
  // console.log("card============>", card.address)
  // await tFiat.balanceOf(card.address), await card.balance(
  //   'bXtvzJS/MsPkW4IH30dLcpfN9rkLoiIdmC4XQt1E9uEWOPPqyRbQjblrzW8qR2F/IfKOw6iM2AgiD9OqdoVje1Sapvv3fRgNTd94bBTkI0h9RzwbgD1DGY7WRCVhb6arrUY9sYT/6/e9RsvwG9TIM6vzRClK2snKIMBB0/OLAAjehIvyldg5U7nn2wttJtFXXJUkdzwLPwBr558UmeAWcaZmPj/seEjbQlc34kjVjnzJESd9xAky5O/DE0CXDB2zFLqgxdvyyKKhiPuL84x6XrwxGh3jAqdoKt B91cEi/M6KOY0qA0AKzADYp8MUm1rIiwmCEcXXrSXSFZw9Kh6JQ==',
  //   tFiat.address))

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
  //   deployer.address,
  //   trustBounties.address
  // );
  // await tFiat.deployed()
  // console.log("tFiat============>", tFiat.address)

  // const onramp_tokens = [
  //   { name: "xof", symbol: "xof" },
  //   { name: "ghs", symbol: "ghs" },
  // ]
  // const addrs = await Promise.all(
  //   onramp_tokens.map(async (elt) => {
  //     await fiatContract.deploy(
  //       elt.name,
  //       elt.symbol,
  //       contractAddresses.address,
  //       deployer.address,
  //       trustBounties.address
  //     );
  //     await tFiat.deployed()
  //     return tFiat.address
  //   })
  // )
  // console.log("addrs============>", addrs)
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

  // const stakeMarket = await StakeMarket.deploy(contractAddresses.address)
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
  // await tFiat.updateMinter(deployer.address)/
  // await tFiat.mint(deployer.address, ethers.BigNumber.from("1000000000000000000000000000"))
  // console.log("tFiat balance=============>", await tFiat.balanceOf(deployer.address))

  // await card.setContractAddress(contractAddress)
  // console.log("card.setContractAddress===========> Done!")

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
  // await trustBountiesHelper.updateVes("0x0515c86e557cc59bB575A420B69aFdF41EA873b1", true)
  // await trustBountiesHelper.updateVes("0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc", true)
  // await trustBountiesHelper.updateVes("0xdE46100D142FD66f50697dF99c296796100983de", true)
  // await trustBountiesHelper.updateVes("0x2cc1F3A5A27ef2985768ff98526337db6E05C847", true)
  // await trustBountiesHelper.updateVes("0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d", true)
  // await trustBountiesHelper.updateVes("0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6", true)
  // await trustBountiesHelper.updateVes("0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f", true)
  // await trustBountiesHelper.updateVes("0xC853D1c9B60962a5CDB361379595BC6400aaE722", true)
  // await trustBountiesHelper.updateVes("0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2", true)
  // await trustBountiesHelper.updateVes("0x86130B7eec5561706Ac18877D19ee7D1A584E807", true)
  // await trustBountiesHelper.updateVes("0xb55A821877d473D972B4ECBB18E41739687c539f", true)
  // await trustBountiesHelper.updateVes("0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62", true)
  // await trustBountiesHelper.updateVes("0x017aBa5F9Fe7673a675c9541DF0e792D8118FB41", true)
  // console.log("trustBountiesHelper.updateVes===========> Done!")

  // await trustBountiesHelper.updateWhitelistedTokens([futureCollateral.address, tFiat.address, nfticketHelper2.address], true)
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
  // await marketPlaceHelper3.addDtoken("0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D")
  // await marketPlaceHelper3.addDtoken("0x023803056E3532348E8a6Deac35dafD4732F792b")
  // await marketPlaceHelper3.addDtoken("0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9")
  // await marketPlaceHelper3.addDtoken("0x7D797d2D96EA6187E85008B8B2F386a552C86d6b")
  // await marketPlaceHelper3.addDtoken("0x77B0e504900997eE937c0C10E027236aeCD386EF")
  // await marketPlaceHelper3.addDtoken("0x05Da08335F8B187769E60F3D92254e69ed5dF3EE")
  // await marketPlaceHelper3.addDtoken("0x59013988E3730A66A9A973a812fb94056E6e7855")
  // await marketPlaceHelper3.addDtoken("0xd17C814f5609889609720D95e1A7369f9F798aB4")
  // await marketPlaceHelper3.addDtoken("0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139")
  // await marketPlaceHelper3.addDtoken("0xBa9fCa9130BF46FbB09740A3b02d5Ce9deB6ae11")
  // await marketPlaceHelper3.addDtoken("0x406BD6A54A4807E207823D28AB908b0E9466678E")
  // await marketPlaceHelper3.addDtoken("0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0")
  // console.log("marketPlaceHelper3.addDtoken==========>", await marketPlaceHelper3.dTokenSetContains(tFiat.address))
  // await marketPlaceHelper3.addVetoken(veAddress)
  // await marketPlaceHelper3.addVetoken("0x0515c86e557cc59bB575A420B69aFdF41EA873b1")
  // await marketPlaceHelper3.addVetoken("0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc")
  // await marketPlaceHelper3.addVetoken("0xdE46100D142FD66f50697dF99c296796100983de")
  // await marketPlaceHelper3.addVetoken("0x2cc1F3A5A27ef2985768ff98526337db6E05C847")
  // await marketPlaceHelper3.addVetoken("0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d")
  // await marketPlaceHelper3.addVetoken("0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6")
  // await marketPlaceHelper3.addVetoken("0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f")
  // await marketPlaceHelper3.addVetoken("0xC853D1c9B60962a5CDB361379595BC6400aaE722")
  // await marketPlaceHelper3.addVetoken("0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2")
  // await marketPlaceHelper3.addVetoken("0x86130B7eec5561706Ac18877D19ee7D1A584E807")
  // await marketPlaceHelper3.addVetoken("0xb55A821877d473D972B4ECBB18E41739687c539f")
  // await marketPlaceHelper3.addVetoken("0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62")
  // console.log("marketPlaceHelper3.addVetoken==========>", await marketPlaceHelper3.veTokenSetContains(ve.address))
  
  // await trustBountiesVoter.vote(1,"0x017aBa5F9Fe7673a675c9541DF0e792D8118FB41",1,1,1,1)
  // await trustBountiesVoter.reset("0x017aBa5F9Fe7673a675c9541DF0e792D8118FB41",1,1)
  console.log("totalSupply====================>", await stakeMarketBribe.totalSupply("0xbE04187288D198ed6F0d90eCAAca0fE42Dd434Fe"))
  console.log("balanceOf====================>", await tFiat.balanceOf(stakeMarketBribe.address))
  console.log("weights====================>", await trustBountiesVoter.weights("0x017aBa5F9Fe7673a675c9541DF0e792D8118FB41", "1"))
  console.log("earned====================>", await stakeMarketBribe.earned("0xbE04187288D198ed6F0d90eCAAca0fE42Dd434Fe", 1))

  // await rampHelper.addDtoken(veAddress)
  // console.log("rampHelper.addDtoken==========>Done")
  // await rampHelper.addDtoken(tFiatAddress)
  // console.log("rampHelper.addDtoken==========>Done")
  // await tFiat.updateMinter(rampHelper.address)
  // console.log("tFiat.updateMinter==========>Done")

  // await marketPlaceCollection.connect(deployer2).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer2).updateCollection(
  //   "Money Bank",
  //   "Find and discover the world of the Money Bank",
  //   "https://i.ibb.co/T2SZLbJ/520.jpg",
  //   "https://i.ibb.co/T2SZLbJ/520.jpg",
  //   "https://i.ibb.co/bs9B2mg/221.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer3).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer3).updateCollection(
  //   "Real Estate Leviathan",
  //   "Find and discover the world of the Real Estate Leviathan",
  //   "https://i.ibb.co/BrLzdYN/132.jpg",
  //   "https://i.ibb.co/BrLzdYN/132.jpg",
  //   "https://i.ibb.co/HFrZnbw/222.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer4).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer4).updateCollection(
  //   "Healthcare Leviathan",
  //   "Find and discover the world of the Healthcare Leviathan",
  //   "https://i.ibb.co/jyGLD7k/133.jpg",
  //   "https://i.ibb.co/jyGLD7k/133.jpg",
  //   "https://i.ibb.co/44SXFQM/223.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer5).addCollection(0, 0, 0, 0, 0, 0, "0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer5).updateCollection(
  //   "Energy Leviathan",
  //   "Find and discover the world of the Energy Leviathan",
  //   "https://i.ibb.co/sFF74VP/134.jpg",
  //   "https://i.ibb.co/sFF74VP/134.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer6).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer6).updateCollection(
  //   "Food Leviathan",
  //   "Find and discover the world of the Food Leviathan",
  //   "https://i.ibb.co/2Kng73j/135.jpg",
  //   "https://i.ibb.co/2Kng73j/135.jpg",
  //   "https://i.ibb.co/0XTcvxJ/226.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer7).addCollection(0, 0, 0, 0, 0, 0, "0x77B0e504900997eE937c0C10E027236aeCD386EF", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer7).updateCollection(
  //   "Beverage Leviathan",
  //   "Find and discover the world of the Beverage Leviathan",
  //   "https://i.ibb.co/RTc0Yxt/138.jpg",
  //   "https://i.ibb.co/RTc0Yxt/138.jpg",
  //   "https://i.ibb.co/5G434QR/227.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer8).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer8).updateCollection(
  //   "Law & Order Leviathan",
  //   "Find and discover the world of the Law & Order Leviathan",
  //   "https://i.ibb.co/vHHYWRR/139.jpg",
  //   "https://i.ibb.co/vHHYWRR/139.jpg",
  //   "https://i.ibb.co/sRwTxr5/228.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer9).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer9).updateCollection(
  //   "NSFW Leviathan",
  //   "Find and discover the world of the NSFW Leviathan",
  //   "https://i.ibb.co/S0YDBq4/140.jpg",
  //   "https://i.ibb.co/S0YDBq4/140.jpg",
  //   "https://i.ibb.co/DVZ9bpp/229.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer10).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer10).updateCollection(
  //   "Software & Telecommunication & Other Leviathan",
  //   "Find and discover the world of the Software & Telecommunication & Other Leviathan",
  //   "https://i.ibb.co/9NWcqGP/476.jpg",
  //   "https://i.ibb.co/9NWcqGP/476.jpg",
  //   "https://i.ibb.co/L9Br6k0/230.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer11).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer11).updateCollection(
  //   "Transportation Leviathan",
  //   "Find and discover the world of the Transportation Leviathan",
  //   "https://i.ibb.co/ZczNT9G/142.jpg",
  //   "https://i.ibb.co/ZczNT9G/142.jpg",
  //   "https://i.ibb.co/5hZTrBZ/231.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer12).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer12).updateCollection(
  //   "Culture & Entertainment Leviathan",
  //   "Find and discover the world of the Culture & Entertainment Leviathan",
  //   "https://i.ibb.co/NFRtCvs/143.jpg",
  //   "https://i.ibb.co/NFRtCvs/143.jpg",
  //   "https://i.ibb.co/TvvmDnv/232.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer13).addCollection(0, 0, 0, 0, 0, 0, "0xBa9fCa9130BF46FbB09740A3b02d5Ce9deB6ae11", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer13).updateCollection(
  //   "Mining Leviathan",
  //   "Find and discover the world of the Mining Leviathan",
  //   "https://i.ibb.co/GTfYPyQ/144.jpg",
  //   "https://i.ibb.co/GTfYPyQ/144.jpg",
  //   "https://i.ibb.co/yhxBQLY/233.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0x86130B7eec5561706Ac18877D19ee7D1A584E807",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

  // await marketPlaceCollection.connect(deployer14).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(deployer14).updateCollection(
  //   "Apparel & Beauty & Cosmetics Leviathan",
  //   "Find and discover the world of the Apparel & Beauty & Cosmetics Leviathan",
  //   "https://i.ibb.co/YXCrQJN/145.jpg",
  //   "https://i.ibb.co/YXCrQJN/145.jpg",
  //   "https://i.ibb.co/BKMrjRm/234.jpg",
  //   "email,payswap",
  //   "support@payswap.org,support@payswap.org",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "All",
  //   ""
  // );
  // console.log("marketPlaceCollection.updateCollection===========> Done!")

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
    // await profile.shareEmail(deployer3.address)
    // await profile.shareEmail(deployer4.address)
    // await profile.shareEmail(deployer5.address)
    // await profile.shareEmail(deployer6.address)
    // await profile.shareEmail(deployer7.address)
    // await profile.shareEmail(deployer8.address)
    // await profile.shareEmail(deployer9.address)
    // await profile.shareEmail(deployer10.address)
    // await profile.shareEmail(deployer11.address)
    // await profile.shareEmail(deployer12.address)
    // await profile.shareEmail(deployer13.address)
    // await profile.shareEmail(deployer14.address)
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
  // let paywallAddress = "0x238d804fbbe6c45836085890c42701beb08c81ca" // (await paywallARPHelper.getAllARPs(0))[0]
  //   let paywallARP = Paywall.attach(paywallAddress)
  //   console.log("paywallARP===>", paywallAddress, paywallARP.address)

    // await paywallARP.partner(1,"uber","uber",2592000)
    // console.log("partner==========>", await paywallARP.partners(1,"uber"))

  // await paywallARP.updateProtocol(5, 0, [deployer.address])
  // console.log("referrer==================>", await nfticket.referrer(5))
  // console.log("getTicketInfo==================>", await nfticket.getTicketInfo(5))
  // console.log("userTokenId==================>", await nfticket.userTokenId(5))
  // console.log("getTicketPaywallOptions==================>", await nfticketHelper2.getTicketPaywallOptions(5))
  // console.log("ongoing==================>", await nfticketHelper2.ownerOf(5))
  // console.log("ongoing==================>", await paywallARP.lastProtocolId()) //, await paywallARP.protocolInfo(5))
  // console.log("ongoing==================>", await paywallARP.ongoingSubscription("0x2fbfd5A8B2C31DDB921211933bfb1842FF39B5eA", 4, "netflix"))

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
  // let rampAddress = "0x384582a8d93e91dbf6a399cd8241d374da2d7095" // (await rampHelper.getAllRamps(0))[0]
  //   let ramp = Ramp.attach(rampAddress)
    // console.log("ramp===>", rampAddress, ramp.address)
    // console.log("ramp.protocolInfo============>", await ramp.protocolInfo(tFiat.address))
    // console.log("getParams===============>", await ramp.getParams())
  // await ramp.updateAdmin(deployer.address, true)
    // await ramp.updateAdmin(card.address, true)
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
  //   console.log("vavaHelper.getAllVavas===============>",await vavaHelper.getAllVavas(0))
  // let vavaAddress =  (await vavaHelper.getAllVavas(0))[0]

  //   // // const vava =  await Vava.deploy(
  //   // //   tFiat.address,
  //   // //   deployer.address,
  //   // //   vavaHelper.address,
  //   // //   contractAddresses.address
  //   // // )
  //   // // await vava.deployed()
  // let vava = Vava.attach(vavaAddress)
  // console.log("vava.deployed===============>Done", vavaAddress)
  //   console.log("vava===>", vava.address, await vava.token(), await vavaHelper.getSupplyAvailable(vava.address))
  //   // await veFactory.createVe(tFiat.address, vava.address, false)
  //   // console.log("veFactory.createVe===============>Done")
  //   // // const va = await Va.deploy(
  //   // //   tFiat.address,
  //   // //   vava.address,
  //   // //   // contractAddresses.address,
  //   // //   false
  //   // // );
  //   // // await va.deployed()
    let vaAddress = "0x6f491e004df2e5797f9355f89e4fa4ae6592e89f" //await vava._ve()
    let va = Va.attach(vaAddress)
    // console.log("va.deployed==============>", va.address, await vava._ve())
    // await va.setContractAddress(contractAddresses.address)
    // console.log("va.setContractAddress===============>Done")
    // console.log("va===>", vaAddress, va.address, await va.getParams(), await va.ownerOf(1))
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
    // console.log("vava.getAllSponsors|false===============>", await vava.getAllSponsors(0, 0, false))
    // console.log("vava.getAllSponsors|true===============>", await vava.getAllSponsors(0, 0, true))
    // await vavaHelper2.updateMaxNumMedia(3)
    // console.log("va.tokenURI===============>", await va.ownerOf(1))
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
    // console.log("va.isApprovedOrOwner==============>", await va.ownerOf(1), await va.balanceOfNFT(1), await va.isApprovedOrOwner(deployer.address, 1))

    // // console.log("vavaHelper================>", await vava.contractAddress())
    // // console.log("va================>", await va.valuepoolHelper())
    // console.log("va.balanceOfNFT===============>",await va.balanceOfNFT(1), await va.ownerOf(1))
    // console.log("vavaHelper.getDescription===============>",await vavaHelper.getDescription(vava.address))
    // // // console.log("va._populate===============>",await va._populate(1))
  //   // await vava.notifyPayment("0x68abb07f652d58077f323beda3dd783fd1991e5b")
  // await vava.addSponsor(
  //   "0x68abb07f652d58077f323beda3dd783fd1991e5b",
  //   9,
  //   0
  // )
  // await vava.addSponsor(
  //   "0x8346da1db5924abb113d8044bbd07a5cbf971487",
  //   4,
  //   0
  // )
  // await vava.addSponsor(
  //   "0xfd0d24dA222543d1416E0BB517776E37f023b499",
  //   4,
  //   0
  // )
  // await vavaHelper2.updateMedia(
  //   "0x8346da1db5924aBb113D8044BbD07A5CBF971487",
  //   vavaAddress,
  //   "https://www.youtube.com/embed/c3NWlIJu6PY"
  // )
  // await vavaHelper2.updateMedia(
  //   "0xfd0d24dA222543d1416E0BB517776E37f023b499",
  //   vavaAddress,
  //   "https://www.youtube.com/embed/3EFk40AbO94"
  // )
  // await vavaHelper2.updateMedia(
  //   "0x68abb07f652d58077f323beda3dd783fd1991e5b",
  //   vavaAddress,
  //   "https://www.youtube.com/embed/KRG8229tKeI"
  // )
  // console.log("isPayingSponsor==============>", await vava.isPayingSponsor("0x68abb07f652d58077f323beda3dd783fd1991e5b"))
  // console.log("isPayingSponsor==============>", await vava.isPayingSponsor("0x8346da1db5924abb113d8044bbd07a5cbf971487"))
  // console.log("isPayingSponsor==============>", await vava.isPayingSponsor("0xfd0d24da222543d1416e0bb517776e37f023b499"))
  // // 90 character count
  // await nftSvg.updateDescription(
  //   va.address,
  //   "USD Valuepool USD Valuepool USD Valuepool USD Valuepool USD Valuepool USD Valuepool USD US"
  // )
  // console.log("vavaHelper2.geoTag===============>", await vavaHelper2.geoTag(vava.address, 1))
  // console.log("vavaHelper2.getMedia===============>", await vavaHelper2.getMedia(vava.address, 0))
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

  // console.log("scheduledMedia======================>", await nfticketHelper2.tokenURI(1))
  // console.log("0scheduledMedia======================>", await nfticketHelper.tagRegistrations(290, ""))
  // console.log("1scheduledMedia======================>", await nfticketHelper.getSponsorsMedia(290, ""))

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


  // // 1
  // await marketPlaceCollection.connect(wallets[0]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[0]).updateCollection(
  //   "Auto Insurances",
  //   "Auto insurance value pools represent a collaborative and flexible approach to insurance, allowing individuals or communities to pool their resources to create their insurance coverage. This innovative model has the potential to benefit a wide range of communities, including both economically disadvantaged and affluent ones.",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "https://i.ibb.co/cxywJwC/295.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("1marketPlaceCollection.updateCollection===========> Done!")

  // // 2
  // await marketPlaceCollection.connect(wallets[2]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[2]).updateCollection(
  //   "SBWP",
  //   "We specialize in connecting small businesses that lack a clear succession plan with people willing to acquire them. We believe that every business, regardless of its size, deserves a chance to thrive beyond its current ownership.  If you're a small business owner without a succession plan, send a partnership request to the channel so you can list your business for sale.",
  //   "https://i.ibb.co/4FMPtZq/29.jpg",
  //   "https://i.ibb.co/4FMPtZq/29.jpg",
  //   "https://i.ibb.co/P4P8hY9/29-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("2marketPlaceCollection.updateCollection===========> Done!")

  // // 3
  // await marketPlaceCollection.connect(wallets[3]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[3]).updateCollection(
  //   "LuxurySwap",
  //   "Welcome to LuxurySwap, the premier destination for those who appreciate the finer things in life. We understand that luxury should be timeless, sustainable, and accessible to all, which is why we've created a unique marketplace where you can discover, buy, and sell second-hand luxury items with confidence.",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "https://i.ibb.co/ZBV2VKT/30-2.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("3marketPlaceCollection.updateCollection===========> Done!")

  // // 4
  // await marketPlaceCollection.connect(wallets[4]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[4]).updateCollection(
  //   "PlayList",
  //   "Welcome to PlayList, the ultimate platform for artists of all kinds to showcase their upcoming plays, performances, and artistic events. For artists and fans alike, PlayList is the go-to destination to discover, engage with, and experience the world of live entertainment like never before.",
  //   "https://i.ibb.co/vxPSGXs/31.jpg",
  //   "https://i.ibb.co/vxPSGXs/31.jpg",
  //   "https://i.ibb.co/s6cd4RT/31-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("4marketPlaceCollection.updateCollection===========> Done!")

  // // 5
  // await marketPlaceCollection.connect(wallets[5]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[5]).updateCollection(
  //   "PaypalBridge",
  //   "Introducing PayPal Bridge: Your Solution to PayPal Withdrawals in Restricted Countries! Are you frustrated by the limitations of PayPal withdrawals in your country? Look no further, because PayPal Bridge is here to bridge the gap and provide you with the financial freedom you deserve.",
  //   "https://i.ibb.co/SxBzDyr/34.jpg",
  //   "https://i.ibb.co/SxBzDyr/34.jpg",
  //   "https://i.ibb.co/RQLJcq0/32-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("5marketPlaceCollection.updateCollection===========> Done!")

  // // 6
  // await marketPlaceCollection.connect(wallets[6]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[6]).updateCollection(
  //   "CashDrop",
  //   "Introducing CashDrop: Your Doorstep Cash Withdrawal Solution! Tired of hunting for ATMs or waiting in long bank lines to get cash? CashDrop is here to simplify your life by connecting you with trusted agents who can deliver cash right to your doorstep. Our agents also leave you the option to specify the bills you want your vash in",
  //   "https://i.ibb.co/R3NSB7T/36.jpg",
  //   "https://i.ibb.co/R3NSB7T/36.jpg",
  //   "https://i.ibb.co/0VtKSfX/34-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("6marketPlaceCollection.updateCollection===========> Done!")

  // // 7
  // await marketPlaceCollection.connect(wallets[7]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[7]).updateCollection(
  //   "FoodServiceLink",
  //   "Introducing FoodServiceLink: Bridging the Gap Between Manufacturers and Local Eateries! Are you a small restaurant owner, café manager, or bakery proprietor looking for high-quality ingredients and supplies directly from reliable manufacturers? Or perhaps you're a foodservice manufacturer seeking to expand your reach and connect with local businesses? Look no further than FoodServiceLink!",
  //   "https://i.ibb.co/sqqZ6fc/37.jpg",
  //   "https://i.ibb.co/sqqZ6fc/37.jpg",
  //   "https://i.ibb.co/d287FNg/35-2.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("7marketPlaceCollection.updateCollection===========> Done!")

  // // 8
  // await marketPlaceCollection.connect(wallets[8]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[8]).updateCollection(
  //   "HomeServeHub",
  //   "Introducing HomeServeHub: Your Gateway to Home Service Excellence! Do you ever find yourself in need of reliable home services like house cleaning, carpentry, plumbing, or electrical repairs? Look no further than HomeServeHub - the ultimate platform that connects users with a network of trusted home service providers.",
  //   "https://i.ibb.co/Qnc0CX3/39.jpg",
  //   "https://i.ibb.co/Qnc0CX3/39.jpg",
  //   "https://i.ibb.co/s1mDPGp/37-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("8marketPlaceCollection.updateCollection===========> Done!")

  // // 9
  // await marketPlaceCollection.connect(wallets[9]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[9]).updateCollection(
  //   "NFTMarketX",
  //   "Introducing NFTMarketX: Your Premier Marketplace for NFT Enthusiasts! Are you an artist, collector, or investor interested in the exciting world of Non-Fungible Tokens (NFTs)? Look no further than NFTMarketX, the ultimate online marketplace for buying and selling NFTs.",
  //   "https://i.ibb.co/6vTH6Qr/40.jpg",
  //   "https://i.ibb.co/6vTH6Qr/40.jpg",
  //   "https://i.ibb.co/NV8X2H2/38-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("9marketPlaceCollection.updateCollection===========> Done!")

  // // 10
  // await marketPlaceCollection.connect(wallets[10]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[10]).updateCollection(
  //   "ReVogue",
  //   "Introducing ReVogue: Your Premier Second-Hand Fashion Marketplace! Are you tired of having a closet overflowing with clothes you no longer wear? Do you want to refresh your wardrobe sustainably while earning some extra cash? Welcome to ReVogue, the ultimate online destination for buying and selling second-hand clothing in style.",
  //   "https://i.ibb.co/XL6Pyq3/42.jpg",
  //   "https://i.ibb.co/XL6Pyq3/42.jpg",
  //   "https://i.ibb.co/4tBKnp7/292.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("10marketPlaceCollection.updateCollection===========> Done!")

  // // 11
  // await marketPlaceCollection.connect(wallets[11]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[11]).updateCollection(
  //   "FantasyPlay",
  //   "Introducing FantasyPlay: Your Gateway to Epic Fantasy Gaming! Are you ready to embark on thrilling adventures, build empires, and test your strategic prowess? Look no further than FantasyPlay, your go-to platform for discovering and playing a wide array of captivating fantasy games.",
  //   "https://i.ibb.co/t4KS593/44.jpg",
  //   "https://i.ibb.co/t4KS593/44.jpg",
  //   "https://i.ibb.co/8DgzGWJ/291.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("11marketPlaceCollection.updateCollection===========> Done!")

  // // 12
  // await marketPlaceCollection.connect(wallets[12]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[12]).updateCollection(
  //   "BetTrust",
  //   "Introducing BetTrust: Your Gateway to Decentralized Betting Adventures! Are you tired of traditional betting platforms with cumbersome regulations and intermediaries? Ready to explore the exciting world of decentralized, trustless betting events? Look no further than BetTrust, your go-to platform for discovering and participating in a wide range of transparent, decentralized betting opportunities.",
  //   "https://i.ibb.co/9cY2Y0B/47.jpg",
  //   "https://i.ibb.co/9cY2Y0B/47.jpg",
  //   "https://i.ibb.co/bKtsN1B/290.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("12marketPlaceCollection.updateCollection===========> Done!")

  // // 13
  // await marketPlaceCollection.connect(wallets[13]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[13]).updateCollection(
  //   "Wi-Free",
  //   "Introducing Wi-Free: Discover Free WiFi Near You! Tired of using up your mobile data or searching for WiFi in a new city? Say hello to Wi-Free, your go-to platform for finding free WiFi spots nearby, no matter where you are.",
  //   "https://i.ibb.co/7kgsB0h/49.jpg",
  //   "https://i.ibb.co/7kgsB0h/49.jpg",
  //   "https://i.ibb.co/0XmYrqL/289.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("13marketPlaceCollection.updateCollection===========> Done!")

  // // 14
  // await marketPlaceCollection.connect(wallets[14]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[14]).updateCollection(
  //   "FaithStream",
  //   "Introducing FaithStream: Connecting Believers Worldwide! FaithStream is your window to the spiritual world, offering a unique platform to discover, watch, and connect with live streams and recordings of religious services and masses from multiple faiths around the globe.",
  //   "https://i.ibb.co/hHRBbT9/493.jpg",
  //   "https://i.ibb.co/hHRBbT9/493.jpg",
  //   "https://i.ibb.co/4WQGdhY/288.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("14marketPlaceCollection.updateCollection===========> Done!")

  // // 15
  // await marketPlaceCollection.connect(wallets[15]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[15]).updateCollection(
  //   "VendSpotter",
  //   "Welcome to VendSpotter: Your Ultimate Vending Machine Location Solution! Are you a vending machine owner searching for the perfect spot to maximize your profits? Or maybe you're a business owner interested in hosting a vending machine to boost your foot traffic and revenue? Look no further! VendSpotter is the go-to platform for discovering, connecting, and renting suitable spots for vending machines.",
  //   "https://i.ibb.co/xMpvCKC/495.jpg",
  //   "https://i.ibb.co/xMpvCKC/495.jpg",
  //   "https://i.ibb.co/qyrKwFn/287.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("15marketPlaceCollection.updateCollection===========> Done!")

  // // 16
  // await marketPlaceCollection.connect(wallets[16]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[16]).updateCollection(
  //   "ConcertManiacs",
  //   "Introducing ConcertManiacs: Unite Your City's Music Scene! Are you a music enthusiast longing for your favorite artists to perform in your city? Look no further than ConcertManiacs, the groundbreaking platform that empowers music lovers to come together, pool their resources, and bring artists to their very own city for electrifying concerts.",
  //   "https://i.ibb.co/KWF3DBX/52.jpg",
  //   "https://i.ibb.co/KWF3DBX/52.jpg",
  //   "https://i.ibb.co/vvkLbPQ/286.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("16marketPlaceCollection.updateCollection===========> Done!")

  // // 17
  // await marketPlaceCollection.connect(wallets[17]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[17]).updateCollection(
  //   "FamilyProject",
  //   "Introducing FamilyProject: Where Dreams of Family Come True! Have you ever dreamed of building the perfect family, complete with individuals who share your vision and values? Welcome to FamilyProject, the revolutionary platform where you can pitch your family project and connect with like-minded individuals eager to join you in creating the family of your dreams.",
  //   "https://i.ibb.co/K0TWJx2/53.jpg",
  //   "https://i.ibb.co/K0TWJx2/53.jpg",
  //   "https://i.ibb.co/zfjjqnD/285.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("17marketPlaceCollection.updateCollection===========> Done!")

  // // 18
  // await marketPlaceCollection.connect(wallets[18]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[18]).updateCollection(
  //   "PartyPro",
  //   "PartyPro: Where the Party Comes to You! Are you craving an epic party experience without the hassle of planning and organizing? Look no further than PartyPro, the ultimate platform to discover, hire, and bring the party group to your place!",
  //   "https://i.ibb.co/q02wpZz/54.jpg",
  //   "https://i.ibb.co/q02wpZz/54.jpg",
  //   "https://i.ibb.co/nk1vpbB/284.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("18marketPlaceCollection.updateCollection===========> Done!")

  // // 19
  // await marketPlaceCollection.connect(wallets[19]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[19]).updateCollection(
  //   "PMAAS",
  //   "Welcome to PMAAS: Your Premier Property Management as a Service Platform! Are you seeking top-notch experts to manage your real estate, vending machines, or any other property-related venture? Look no further than PMAAS - your one-stop solution for finding and hiring seasoned professionals in property management and beyond.",
  //   "https://i.ibb.co/pbbQvYS/55.jpg",
  //   "https://i.ibb.co/pbbQvYS/55.jpg",
  //   "https://i.ibb.co/ykF1P86/283.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("19marketPlaceCollection.updateCollection===========> Done!")

  // // 20
  // await marketPlaceCollection.connect(wallets[20]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[20]).updateCollection(
  //   "FundRecruit",
  //   "Introducing FundRecruit: Uniting Investments and Talent Pooling! Are you an aspiring entrepreneur or business owner seeking funding and a pool of skilled professionals to jumpstart your venture? Or are you an individual looking to invest in promising businesses while leveraging your network's talents? Look no further than FundRecruit, the innovative platform where investments meet recruitment.",
  //   "https://i.ibb.co/sRsQ2vw/56.jpg",
  //   "https://i.ibb.co/sRsQ2vw/56.jpg",
  //   "https://i.ibb.co/XkQfFPf/282.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("20marketPlaceCollection.updateCollection===========> Done!")

  // // 21
  // await marketPlaceCollection.connect(wallets[21]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[21]).updateCollection(
  //   "MatchMeet",
  //   "Introducing MatchMeet: Connecting Matches, Creating Memories! Are you tired of endless messaging on dating apps without ever meeting face-to-face? Welcome to MatchMeet, your ultimate solution for turning matches into meaningful connections! We organize fun and engaging group meetings for people who've matched on dating apps like Tinder, Bumble, Badoo, and more.",
  //   "https://i.ibb.co/cYgjL54/58.jpg",
  //   "https://i.ibb.co/cYgjL54/58.jpg",
  //   "https://i.ibb.co/dcPM6Rs/281.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("21marketPlaceCollection.updateCollection===========> Done!")

  // // 22
  // await marketPlaceCollection.connect(wallets[22]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[22]).updateCollection(
  //   "LottoSource",
  //   "Introducing LottoSource: Your Gateway to Outsourced Data Creation! Are you a company seeking a creative and cost-effective way to generate audio, video, or text data for your projects? Welcome to LottoSource, your premier platform for creating lotteries to incentivise people to create specific types of data in specific formats",
  //   "https://i.ibb.co/NrS3Brt/60.jpg",
  //   "https://i.ibb.co/NrS3Brt/60.jpg",
  //   "https://i.ibb.co/Jsw1ntM/280.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("22marketPlaceCollection.updateCollection===========> Done!")

  // // 23
  // await marketPlaceCollection.connect(wallets[23]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[23]).updateCollection(
  //   "DCAHub",
  //   "Introducing DCAHub: Your Destination for Group Dollar-Cost Averaging (DCA)! Are you interested in cryptocurrency or stock investments but prefer the safety and strategy of Dollar-Cost Averaging (DCA)? Welcome to DCAHub, the ultimate platform for discovering and joining groups of like-minded individuals who DCA together.",
  //   "https://i.ibb.co/f8M4pZy/61.jpg",
  //   "https://i.ibb.co/f8M4pZy/61.jpg",
  //   "https://i.ibb.co/qBw8hm9/279.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("23marketPlaceCollection.updateCollection===========> Done!")

  // // 24
  // await marketPlaceCollection.connect(wallets[24]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[24]).updateCollection(
  //   "ArtiFind",
  //   "Discover and Book Local Artisans with ArtiFind! Are you in need of skilled artisans for your home improvement projects, repairs, or creative endeavors? Look no further! Welcome to ArtiFind, your one-stop platform to discover and book talented local artisans right in your neighborhood.",
  //   "https://i.ibb.co/K9gfFZf/62.jpg",
  //   "https://i.ibb.co/K9gfFZf/62.jpg",
  //   "https://i.ibb.co/935S3bf/278.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("24marketPlaceCollection.updateCollection===========> Done!")

  // // 25
  // await marketPlaceCollection.connect(wallets[25]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[25]).updateCollection(
  //   "DatingPortfolio",
  //   "DatingPortfolio is not your typical dating app. We believe that the best way to get to know someone is by seeing them in action, and that's why we've introduced the concept of dating portfolios. A dating portfolio is a collection of videos that showcase you on various dates. It's like having a sneak peek into what it's really like to date you.",
  //   "https://i.ibb.co/TWdDjbd/63.jpg",
  //   "https://i.ibb.co/TWdDjbd/63.jpg",
  //   "https://i.ibb.co/ggLzJTZ/277.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("25marketPlaceCollection.updateCollection===========> Done!")

  // // 26
  // await marketPlaceCollection.connect(wallets[26]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[26]).updateCollection(
  //   "TrafficStop",
  //   "Introducing TrafficStop: Transforming Your Commute Experience! Tired of getting stuck in endless traffic jams during your daily commute? Frustrated with unpredictable travel times? Say hello to TrafficStop, the revolutionary platform that puts you in control of your journey like never before.",
  //   "https://i.ibb.co/H4FWz1c/64.jpg",
  //   "https://i.ibb.co/H4FWz1c/64.jpg",
  //   "https://i.ibb.co/6HQhYTX/276.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("26marketPlaceCollection.updateCollection===========> Done!")

  // // 27
  // await marketPlaceCollection.connect(wallets[27]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[27]).updateCollection(
  //   "DAAS",
  //   "Introducing DAAS: Driving As A Service! Imagine your car making money for you when you're not busy driving it. Welcome to DAAS, the revolutionary platform that turns your car into a source of income by connecting you with trusted drivers. With DAAS, your car is always on the road, ensuring it's not just an expense but a valuable asset.",
  //   "https://i.ibb.co/WnxTVmH/65.jpg",
  //   "https://i.ibb.co/WnxTVmH/65.jpg",
  //   "https://i.ibb.co/Z2CDrtz/275.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("27marketPlaceCollection.updateCollection===========> Done!")

  // // 28
  // await marketPlaceCollection.connect(wallets[28]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[28]).updateCollection(
  //   "GuestSub",
  //   "Introducing GuestSub: Your Portal to Exclusive Interviews and Engaging Content! Are you a podcast host or social media creator looking to elevate your content with remarkable guests? Welcome to GuestSub, your gateway to paywalls that let you book exclusive interviews and engaging activities with incredible personalities.",
  //   "https://i.ibb.co/YXx2Qdt/66.jpg",
  //   "https://i.ibb.co/YXx2Qdt/66.jpg",
  //   "https://i.ibb.co/f0LkZkq/274.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("28marketPlaceCollection.updateCollection===========> Done!")

  // // 29
  // await marketPlaceCollection.connect(wallets[29]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[29]).updateCollection(
  //   "PacketPals",
  //   "Introducing PacketPals: Your Convenient Delivery Holding Platform! Are you tired of missed deliveries and the hassle of rearranging your schedule for packages? PacketPals connects you with a trusted community of individuals who are happy to help by receiving your packages for you to pick up at a time that suits your schedule",
  //   "https://i.ibb.co/0mjLXVk/67.jpg",
  //   "https://i.ibb.co/0mjLXVk/67.jpg",
  //   "https://i.ibb.co/QMLzfhq/273.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("29marketPlaceCollection.updateCollection===========> Done!")

  // // 30
  // await marketPlaceCollection.connect(wallets[30]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[30]).updateCollection(
  //   "ExpertBot",
  //   "Introducing ExpertBot: Transforming Knowledge into Chatbots with Ease! Have you ever wished to turn your expertise, documents, or even a loved one's personality into a chatbot effortlessly? Look no further than ExpertBot, the revolutionary platform that connects you with experts who can convert any knowledge source into chatbot prompts, or helps you discover existing prompts from a vast pool of publicly available resources.",
  //   "https://i.ibb.co/SBcPLxt/68.jpg",
  //   "https://i.ibb.co/SBcPLxt/68.jpg",
  //   "https://i.ibb.co/tm9266Q/272.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("30marketPlaceCollection.updateCollection===========> Done!")

  // // 31
  // await marketPlaceCollection.connect(wallets[31]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[31]).updateCollection(
  //   "PrankMasters",
  //   "Welcome to PrankMasters: Where Pranks Turn Into Memorable Moments! Do you believe that laughter is the best gift you can give? Are you looking to create unforgettable, light-hearted memories with your loved ones? Look no further than PrankMasters – the ultimate platform to discover prank experts and plan hilarious pranks on your closed ones together!",
  //   "https://i.ibb.co/19nqzFv/69.jpg",
  //   "https://i.ibb.co/19nqzFv/69.jpg",
  //   "https://i.ibb.co/sqJDw2Q/271.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("31marketPlaceCollection.updateCollection===========> Done!")

  // // 32
  // await marketPlaceCollection.connect(wallets[32]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[32]).updateCollection(
  //   "MOOCPromotions",
  //   "Introducing MOOCPromotions: Your Path to Collaborative Learning! Are you tired of the isolation that often comes with taking Massive Open Online Courses (MOOCs)? Do you wish there was a way to connect with fellow learners and create a collaborative learning experience? Welcome to MOOCPromotions, your go-to platform for discovering and joining groups of like-minded individuals taking MOOCs together!",
  //   "https://i.ibb.co/MDK24YH/70.jpg",
  //   "https://i.ibb.co/MDK24YH/70.jpg",
  //   "https://i.ibb.co/2Ps3XTT/270.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("32marketPlaceCollection.updateCollection===========> Done!")

  // // 33
  // await marketPlaceCollection.connect(wallets[33]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[33]).updateCollection(
  //   "OFDiscovery",
  //   "Discover the Best OnlyFans Content with OFDiscovery! Are you tired of searching through endless OnlyFans channels to find the content you love? Welcome to OFDiscovery, your ultimate platform for discovering and exploring the finest OnlyFans creators and their exclusive content. Think of us as the Yelp for OnlyFans, where you can find, review, and enjoy the best adult content.",
  //   "https://i.ibb.co/gWDFcb8/71.jpg",
  //   "https://i.ibb.co/gWDFcb8/71.jpg",
  //   "https://i.ibb.co/NmzxxCb/269.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("33marketPlaceCollection.updateCollection===========> Done!")

  // // 34
  // await marketPlaceCollection.connect(wallets[34]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[34]).updateCollection(
  //   "30.Dates",
  //   "At 30.Dates, we believe that love is not a game of chance but a journey of commitment and discovery. Our platform is designed to help you forge meaningful connections, one date at a time by requiring you to commit to a series of 30 consecutive dates with users to choose to meet. It's either 30 dates or no dates.",
  //   "https://i.ibb.co/qm1j2Td/72.jpg",
  //   "https://i.ibb.co/qm1j2Td/72.jpg",
  //   "https://i.ibb.co/52pQ4m5/268.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("34marketPlaceCollection.updateCollection===========> Done!")

  // // 35
  // await marketPlaceCollection.connect(wallets[35]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[35]).updateCollection(
  //   "30.FoundingDays",
  //   "Welcome to 30.FoundingDays: Where New Ventures Are Born! Are you an aspiring entrepreneur with a brilliant idea but seeking the right partners and motivation to kickstart your dream venture? Look no further! 30.FoundingDays is here to revolutionize the way startups are born by connecting you with like-minded founders and forcing you through 30 consecutive days of intense collaboration on your next big thing.",
  //   "https://i.ibb.co/wW449gL/300.jpg",
  //   "https://i.ibb.co/wW449gL/300.jpg",
  //   "https://i.ibb.co/mq0gKYL/267.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("35marketPlaceCollection.updateCollection===========> Done!")

  // // 36
  // await marketPlaceCollection.connect(wallets[36]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[36]).updateCollection(
  //   "RAAS",
  //   "Introducing RAAS: Your Gateway to Blockchain Fund Transfers! Are you navigating the complex world of blockchain and cryptocurrencies and need expert guidance to transfer funds securely? Look no further than RAAS – your Ramp As A Service network.",
  //   "https://i.ibb.co/f2p5kdv/74.jpg",
  //   "https://i.ibb.co/f2p5kdv/74.jpg",
  //   "https://i.ibb.co/Ypx9FLR/266.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("36marketPlaceCollection.updateCollection===========> Done!")

  // // 37
  // await marketPlaceCollection.connect(wallets[37]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[37]).updateCollection(
  //   "FeetFinder",
  //   "FeetFinder is a one-of-a-kind platform where individuals can sell pictures of their feet, their painties, fart in a jar or any other intimate item of theirs",
  //   "https://i.ibb.co/sq0VNrQ/301.jpg",
  //   "https://i.ibb.co/sq0VNrQ/301.jpg",
  //   "https://i.ibb.co/nBNqDxJ/265.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("37marketPlaceCollection.updateCollection===========> Done!")

  // // 38
  // await marketPlaceCollection.connect(wallets[38]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[38]).updateCollection(
  //   "ConnecTech",
  //   "Introducing ConnecTech: Where Brilliance Meets Inquiry! Are you fascinated by the world of creators, artists, scientists, and experts? Do you ever wish you could pick their brains, ask them questions, or seek their advice directly? Look no further than ConnecTech, your gateway to engaging with the brightest minds in a personalized, interactive way.",
  //   "https://i.ibb.co/4Rkq2vx/302.jpg",
  //   "https://i.ibb.co/4Rkq2vx/302.jpg",
  //   "https://i.ibb.co/z7sMPYC/264.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("38marketPlaceCollection.updateCollection===========> Done!")

  // // 39
  // await marketPlaceCollection.connect(wallets[39]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[39]).updateCollection(
  //   "QualiHire",
  //   "Introducing QualiHire: Elevating Trust in Job Search! Are you tired of sifting through countless job applications, wondering if applicants truly possess the qualifications they claim? Welcome to QualiHire, where applicants have collaterals to guarantee their qualifications.",
  //   "https://i.ibb.co/4PnG90f/303.jpg",
  //   "https://i.ibb.co/4PnG90f/303.jpg",
  //   "https://i.ibb.co/wgF98tj/263.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("39marketPlaceCollection.updateCollection===========> Done!")

  // // 40
  // await marketPlaceCollection.connect(wallets[40]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[40]).updateCollection(
  //   "JobExams",
  //   "Introducing JobExams: Powering Your Career Aspirations Together! Are you aspiring to excel in your career, land your dream job, or move up the corporate ladder? Welcome to JobExams, where like-minded individuals pool their resources to create and access top-tier exam materials for various job positions, from junior roles to senior roles and beyond in various domains like engineering, medecine, finance, etc.",
  //   "https://i.ibb.co/syrcCf0/79.jpg",
  //   "https://i.ibb.co/syrcCf0/79.jpg",
  //   "https://i.ibb.co/tP3b6tf/262.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("40marketPlaceCollection.updateCollection===========> Done!")

  // // 41
  // await marketPlaceCollection.connect(wallets[41]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[41]).updateCollection(
  //   "MaleBikini",
  //   "Introducing MaleBikini: a platform to discover and subscribe to paywalls that get groups of women to act like they are in love with you so other women can fall in love with you",
  //   "https://i.ibb.co/Wz5WyyQ/80.jpg",
  //   "https://i.ibb.co/Wz5WyyQ/80.jpg",
  //   "https://i.ibb.co/HG35ztb/261.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("41marketPlaceCollection.updateCollection===========> Done!")

  // // 42
  // await marketPlaceCollection.connect(wallets[42]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[42]).updateCollection(
  //   "Familotto",
  //   "Introducing Familotto: Build Your Family's Future with Every Ticket! Are you dreaming of starting but worried about the financial challenges? Familotto is here to turn your dreams into reality. We are the platform that combines the excitement of lotteries with the opportunity to build a family and secure its financial future.",
  //   "https://i.ibb.co/j6WB5jV/81.jpg",
  //   "https://i.ibb.co/j6WB5jV/81.jpg",
  //   "https://i.ibb.co/MnC3702/260.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("42marketPlaceCollection.updateCollection===========> Done!")

  // // 43
  // await marketPlaceCollection.connect(wallets[43]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[43]).updateCollection(
  //   "TrainingHouses",
  //   "Welcome to TrainingHouses: Where Education Meets Innovation! Are you tired of traditional educational models that focus solely on lectures and exams? Do you crave hands-on learning experiences and an educational model that does not seperate learning from working ? Look no further than TrainingHouses, the new way to do Universities.",
  //   "https://i.ibb.co/ThsBzLC/82.jpg",
  //   "https://i.ibb.co/ThsBzLC/82.jpg",
  //   "https://i.ibb.co/ZMnLyS1/259.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("43marketPlaceCollection.updateCollection===========> Done!")

  // // 44
  // await marketPlaceCollection.connect(wallets[44]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[44]).updateCollection(
  //   "CookDate",
  //   "Guys list their favorite dishes and girls list all dishes they can make. When a guy sends a successful DM to a girl and they have they plan their first date, the guys sends money for groceries to the girl so she can make the dish he likes for their first date at either her place or his. Girls cook for guys and guys pay for the groceries, not the other way around. All users need bounties to guarantee trustworthiness and that the rules are respected. This creates a dynamic where both parties invest at the very start of the relationship so they both stand to lose something if things don't work out",
  //   "https://i.ibb.co/PmF91q5/305.jpg",
  //   "https://i.ibb.co/PmF91q5/305.jpg",
  //   "https://i.ibb.co/0Jg0twR/258.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("44marketPlaceCollection.updateCollection===========> Done!")

  // // 45
  // await marketPlaceCollection.connect(wallets[45]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[45]).updateCollection(
  //   "RealEstateTontines",
  //   "Welcome to RealEstateTontines: Revolutionizing Real Estate Investment! Are you looking for a fresh, innovative way to invest in real estate? Look no further than RealEstateTontines – your gateway to a new era of collaborative real estate investment.",
  //   "https://i.ibb.co/CQJb4c9/304.jpg",
  //   "https://i.ibb.co/CQJb4c9/304.jpg",
  //   "https://i.ibb.co/0qS11Tt/257.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("45marketPlaceCollection.updateCollection===========> Done!")

  // // 46
  // await marketPlaceCollection.connect(wallets[46]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[46]).updateCollection(
  //   "RentalInsurance",
  //   "Introducing RentalInsurance: Transforming Rental Flexibility! Are you a renter tired of being tied to long lease agreements? Or perhaps you're a landlord looking to fill vacancies without the hassle of year-long commitments? Welcome to RentalInsurance, the revolutionary platform that empowers landlords and renters to embrace flexible rental periods like never before.",
  //   "https://i.ibb.co/CJ60QpW/85.jpg",
  //   "https://i.ibb.co/CJ60QpW/85.jpg",
  //   "https://i.ibb.co/yP1b15F/256.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("46marketPlaceCollection.updateCollection===========> Done!")

  // // 47
  // await marketPlaceCollection.connect(wallets[47]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[47]).updateCollection(
  //   "RentalMap",
  //   "Discover Your Next Home with RentalMap: Your Ultimate Rental Destination! Are you on the hunt for the perfect place to call home? Welcome to RentalMap, your go-to platform for discovering rental properties in your desired location. Whether you're a landlord, real estate agent, or someone who's simply spotted a 'For Rent' sign, RentalMap enables you to list it",
  //   "https://i.ibb.co/vQc1JSr/307.jpg",
  //   "https://i.ibb.co/vQc1JSr/307.jpg",
  //   "https://i.ibb.co/YcxgXf6/255.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("47marketPlaceCollection.updateCollection===========> Done!")

  // // 48
  // await marketPlaceCollection.connect(wallets[48]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[48]).updateCollection(
  //   "CommodityBarter",
  //   "CommodityBarter: Tokenizing the World of Commodities! Welcome to CommodityBarter, your gateway to the future of commodity trading. We've revolutionized the age-old practice of trading physical commodities by combining it with the power of blockchain and NFTs. Now, you can discover, trade, and invest in commodities like never before.",
  //   "https://i.ibb.co/gFYv7HP/308.jpg",
  //   "https://i.ibb.co/gFYv7HP/308.jpg",
  //   "https://i.ibb.co/rm9ghLY/254.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("48marketPlaceCollection.updateCollection===========> Done!")

  // // 49
  // await marketPlaceCollection.connect(wallets[49]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[49]).updateCollection(
  //   "ShopSwift",
  //   "Introducing ShopSwift: Your Ultimate Delivery Partner! ShopSwift is your one-stop platform for all your shopping and delivery needs. We're here to make your life easier, our delivery agents specialize in helping you buy items online and then bringing them right to your doorstep. You can even pick an agent based on body or foot size if you're buying apparel and you need them to try it on, to see how well it will fit you. Whether you're too busy to hit the store or simply prefer the convenience of online shopping, ShopSwift has you covered. Our delivery agents are here to satisfy your every request, whether you want a specific meal no matter where it is bought at or you want it to be bought at a specific store.",
  //   "https://i.ibb.co/YTBHrkf/309.jpg",
  //   "https://i.ibb.co/YTBHrkf/309.jpg",
  //   "https://i.ibb.co/hyQ4xjW/253.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("49marketPlaceCollection.updateCollection===========> Done!")

  // // 50
  // await marketPlaceCollection.connect(wallets[50]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[50]).updateCollection(
  //   "Resolutions",
  //   "Introducing Resolutions: Resolution Collaboration Platform! Are you struggling to stick to your resolutions? Looking for a fun and engaging way to stay accountable and achieve your goals? Welcome to ResoCollab, the innovative platform where users create collaterals around their resolutions and collaborate with others to achieve them.",
  //   "https://i.ibb.co/DGTBgJn/92.jpg",
  //   "https://i.ibb.co/DGTBgJn/92.jpg",
  //   "https://i.ibb.co/PQNhbf2/252.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("50marketPlaceCollection.updateCollection===========> Done!")

  // // 51
  // await marketPlaceCollection.connect(wallets[51]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[51]).updateCollection(
  //   "LaundroLocate",
  //   "Introducing LaundroLocate: Discover and Book Laundromats Nearby! Tired of endless searches for a convenient and clean laundromat? Look no further! LaundroLocate is your go-to platform for effortlessly finding and booking laundromats nearby. Say goodbye to laundry day hassles and hello to convenience.",
  //   "https://i.ibb.co/vZmLvfm/94.jpg",
  //   "https://i.ibb.co/vZmLvfm/94.jpg",
  //   "https://i.ibb.co/Ky6gWQn/251.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("51marketPlaceCollection.updateCollection===========> Done!")

  // // 52
  // await marketPlaceCollection.connect(wallets[52]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[52]).updateCollection(
  //   "ConterfeitMap",
  //   "Introducing ConterfeitMap: Unveiling the Counterfeit Marketplace! Are you passionate about exposing counterfeit goods and protecting consumers from dangerous fakes? Look no further than ConterfeitMap, your go-to platform for investigative videos that reveal the truth about sellers peddling counterfeit products, be it drugs, phones, bags, or more.",
  //   "https://i.ibb.co/YX7Lk5Q/95.jpg",
  //   "https://i.ibb.co/YX7Lk5Q/95.jpg",
  //   "https://i.ibb.co/RCZHGMj/250.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("52marketPlaceCollection.updateCollection===========> Done!")

  // // 53
  // await marketPlaceCollection.connect(wallets[53]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[53]).updateCollection(
  //   "FinPlanner",
  //   "Welcome to FinPlanner: Your Gateway to Financial Prosperity! Are you seeking expert guidance to secure your financial future? Look no further! FinPlanner is your one-stop platform for discovering and consulting with seasoned financial planners who can help you achieve your financial goals.",
  //   "https://i.ibb.co/vwqw41j/96.jpg",
  //   "https://i.ibb.co/vwqw41j/96.jpg",
  //   "https://i.ibb.co/YTgvmx7/249.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("53marketPlaceCollection.updateCollection===========> Done!")

  // // 54
  // await marketPlaceCollection.connect(wallets[54]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[54]).updateCollection(
  //   "BuildDeliver",
  //   "Introducing BuildDeliver: Your Last-Mile Delivery Solution for the Construction Industry! Are you in the construction business and tired of the hassles of last-mile deliveries? Do you need a reliable, on-demand solution to transport people, materials, and equipment from point A to point B? Look no further than BuildDeliver, the ultimate platform tailored for the construction industry's unique needs.",
  //   "https://i.ibb.co/sbz5spT/97.jpg",
  //   "https://i.ibb.co/sbz5spT/97.jpg",
  //   "https://i.ibb.co/G3Q4jgY/248.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("54marketPlaceCollection.updateCollection===========> Done!")

  // // 55
  // await marketPlaceCollection.connect(wallets[55]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[55]).updateCollection(
  //   "IRLMeet",
  //   "Introducing IRLMeet: Where Real Life Meets Rewards! Are you tired of the same routine and eager to make new connections? Welcome to IRLMeet, the innovative platform that turns meeting new people into an exciting game. Get ready to step out into the real world, engage in meaningful conversations, and earn rewards while doing it!",
  //   "https://i.ibb.co/qyyS4L5/98.jpg",
  //   "https://i.ibb.co/qyyS4L5/98.jpg",
  //   "https://i.ibb.co/0KBLkbY/247.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("55marketPlaceCollection.updateCollection===========> Done!")

  // // 56
  // await marketPlaceCollection.connect(wallets[56]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[56]).updateCollection(
  //   "VirtualDating",
  //   "Introducing VirtualDating: Where Connections Thrive in the Virtual Realm! Are you seeking meaningful connections and exciting conversations without the pressure of meeting someone in person? Welcome to VirtualDating, the revolutionary platform where you can discover and connect with new friends, girlfriends, or boyfriends while guaranteeing that you'll never meet in real life.",
  //   "https://i.ibb.co/KVLH83Q/100.jpg",
  //   "https://i.ibb.co/KVLH83Q/100.jpg",
  //   "https://i.ibb.co/VCSygQV/246.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("56marketPlaceCollection.updateCollection===========> Done!")

  // // 57
  // await marketPlaceCollection.connect(wallets[57]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[57]).updateCollection(
  //   "OnlineDiagnosis",
  //   "Introducing OnlineDiagnosis: Gamifying Healthcare, One Symptom at a Time! Are you ready to revolutionize the way we approach healthcare? Welcome to OnlineDiagnosis, the innovative platform that transforms the diagnostic process into an engaging game for both patients and participants.",
  //   "https://i.ibb.co/1KRyhZP/106.jpg",
  //   "https://i.ibb.co/1KRyhZP/106.jpg",
  //   "https://i.ibb.co/K0rSK8y/245.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("57marketPlaceCollection.updateCollection===========> Done!")

  // // 58
  // await marketPlaceCollection.connect(wallets[58]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[58]).updateCollection(
  //   "MovingIn",
  //   "users buy subscriptions to promotions and start meeting each other with the goal of finding a boyfriend/girlfriend they can move in together with for at least one year. The promotion ends when everybody has met everybody. Each promotion has 50 men and 50 women. At the end of the promotion, the people that have found each other create requests to let the community know. Depending on the type of the promotion, only the first couple, the first 10, 20, 30, etc, will get to be part of the platform's couples' program. During that program, all the funds from the subscription to the promotion are used to provide a living space and other amenities to all the winning couples. All couples must live together as real couples for at least a year. Some promotions have a reality TV component which might add to the rewards the winning couples get to enjoy. After the year of living together, couples that are willing to get pay-married, are followed by the channel's valuepool which helps them financially.",
  //   "https://i.ibb.co/phdPk9Z/310.jpg",
  //   "https://i.ibb.co/phdPk9Z/310.jpg",
  //   "https://i.ibb.co/Khhk0wg/244.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("58marketPlaceCollection.updateCollection===========> Done!")

  // // 59
  // await marketPlaceCollection.connect(wallets[59]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[59]).updateCollection(
  //   "PeoplesLeagues",
  //   "Introducing PeoplesLeagues: Where Fantasy Sports Ignite New Sports Leagues! Are you a die-hard sports fan who's always dreamed of having a say in how sports leagues are run? Do you believe that athletes should have more opportunities to get paid for their incredible talents? Welcome to PeoplesLeagues, the revolutionary platform that empowers fans like you to shape and launch new sports leagues through fantasy games.",
  //   "https://i.ibb.co/3fsLMRD/108.jpg",
  //   "https://i.ibb.co/3fsLMRD/108.jpg",
  //   "https://i.ibb.co/vvNBkvM/243.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("59marketPlaceCollection.updateCollection===========> Done!")

  // // 60
  // await marketPlaceCollection.connect(wallets[60]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[60]).updateCollection(
  //   "LegalPitch",
  //   "Introducing LegalPitch: Your Gateway to Justice and Investment Opportunities! Are you facing a legal challenge that could potentially earn you money, but lack the necessary funds to pursue it? Welcome to LegalPitch, the groundbreaking platform that empowers individuals with valid legal cases to pitch their claims, raise the necessary funds, and share the journey to justice with savvy investors.",
  //   "https://i.ibb.co/TBS5qfZ/109.jpg",
  //   "https://i.ibb.co/TBS5qfZ/109.jpg",
  //   "https://i.ibb.co/xMtBGQW/242.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("60marketPlaceCollection.updateCollection===========> Done!")

  // // 61
  // await marketPlaceCollection.connect(wallets[61]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[61]).updateCollection(
  //   "PeoplesCinema",
  //   "Introducing PeoplesCinema: Where Movie Magic Meets Fan Empowerment! Are you a movie enthusiast with a passion for storytelling? Do you dream of seeing your favorite actors and actresses shine on the silver screen while supporting independent filmmaking? Look no further than PeoplesCinema – the revolutionary platform that's transforming the world of cinema through fantasy games.",
  //   "https://i.ibb.co/4N0hjN7/110.jpg",
  //   "https://i.ibb.co/4N0hjN7/110.jpg",
  //   "https://i.ibb.co/WVSDKVK/241.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("61marketPlaceCollection.updateCollection===========> Done!")

  // // 62
  // await marketPlaceCollection.connect(wallets[62]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[62]).updateCollection(
  //   "NutriHeal",
  //   "Introducing NutriHeal: Your Personalized Health Food Platform! Are you or a loved one on a journey to prevent or manage a medical condition like high blood pressure, cancer, or any other health concern? Welcome to NutriHeal, the revolutionary platform that empowers you to discover, order, and enjoy meals tailored to your specific health needs.",
  //   "https://i.ibb.co/vBqNYHp/111.jpg",
  //   "https://i.ibb.co/vBqNYHp/111.jpg",
  //   "https://i.ibb.co/dgG19rS/240.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("62marketPlaceCollection.updateCollection===========> Done!")

  // // 63
  // await marketPlaceCollection.connect(wallets[63]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[63]).updateCollection(
  //   "SocialChannelFinder",
  //   "Introducing SocialChannelFinder: Your Gateway to Acquiring Social Media Channels! Are you looking to expand your online presence, reach new audiences, or diversify your social media portfolio? Look no further than SocialChannelFinder, your one-stop platform for discovering, acquiring, and managing social media channels.",
  //   "https://i.ibb.co/RbbhBjt/112.jpg",
  //   "https://i.ibb.co/RbbhBjt/112.jpg",
  //   "https://i.ibb.co/5Bhg9F5/239.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("63marketPlaceCollection.updateCollection===========> Done!")

  // // 64
  // await marketPlaceCollection.connect(wallets[64]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[64]).updateCollection(
  //   "TowDotCom",
  //   "Introducing TowDotCom: Your Ultimate Roadside Assistance Companion! Are you stuck on the side of the road with a car issue? Whether it's a flat tire, a dead battery, or you simply need a tow, TowDotCom is here to rescue you! We're your go-to platform for discovering nearby cars, towing companies, mechanics, and more to get you back on the road with peace of mind.",
  //   "https://i.ibb.co/6wkQ8Kh/114.jpg",
  //   "https://i.ibb.co/6wkQ8Kh/114.jpg",
  //   "https://i.ibb.co/8z5NKck/238.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("64marketPlaceCollection.updateCollection===========> Done!")

  // // 65
  // await marketPlaceCollection.connect(wallets[65]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[65]).updateCollection(
  //   "CrimeMap",
  //   "Introducing CrimeMap: Your Guardian Against Crime! Are you concerned about your safety and the safety of your community? Do you want to contribute to making the world a safer place? Welcome to CrimeMap, a revolutionary platform where users unite to share crucial information about criminals, helping to keep everyone informed and safe.",
  //   "https://i.ibb.co/V3jFCZG/115.jpg",
  //   "https://i.ibb.co/V3jFCZG/115.jpg",
  //   "https://i.ibb.co/rsPyb2F/237.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("65marketPlaceCollection.updateCollection===========> Done!")

  // // 66
  // await marketPlaceCollection.connect(wallets[66]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[66]).updateCollection(
  //   "Worlds",
  //   "Welcome to Worlds: Your Portal to Metaverse Discoveries and Green World Initiatives! Are you ready to explore the boundless realms of the metaverse, where the real world meets the limitless possibilities of imagination? Do you want to stay informed about groundbreaking initiatives aimed at creating a greener and more sustainable planet? Look no further—Worlds is your gateway to these exciting discoveries!",
  //   "https://i.ibb.co/bQXv3qP/116.jpg",
  //   "https://i.ibb.co/bQXv3qP/116.jpg",
  //   "https://i.ibb.co/sWRfbhZ/236.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("66marketPlaceCollection.updateCollection===========> Done!")

  // // 67
  // await marketPlaceCollection.connect(wallets[67]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[67]).updateCollection(
  //   "DisasterDeals",
  //   "Introducing DisasterDeals: Transforming Disaster Response into Sustainable Reconstruction! DisasterDeals is revolutionizing the way we respond to natural disasters by turning crisis into opportunity. Our platform empowers construction companies and skilled professionals to make a positive impact in disaster-stricken areas while securing long-term business stability. In addition to that, our auditors can deliver badges to companies (for either helping out during a disaster or helping to prevent one) which they can display on their product pages in order to make more sales. We also partner with any such companies to enable them to list their products on our channel.",
  //   "https://i.ibb.co/bWGzycj/117.jpg",
  //   "https://i.ibb.co/bWGzycj/117.jpg",
  //   "https://i.ibb.co/ZHzpFpB/235.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("67marketPlaceCollection.updateCollection===========> Done!")

  // // 68
  // await marketPlaceCollection.connect(wallets[68]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[68]).updateCollection(
  //   "Auditors",
  //   "Introducing Auditors: Your Gateway to Audit Excellence! Are you seeking the expertise of skilled auditors for your business, project, or financial needs? Look no further than Auditors, your comprehensive platform to discover, connect, and collaborate with a wide array of auditing professionals.",
  //   "https://i.ibb.co/Gc7d5kQ/119.jpg",
  //   "https://i.ibb.co/Gc7d5kQ/119.jpg",
  //   "https://i.ibb.co/BKMrjRm/234.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("68marketPlaceCollection.updateCollection===========> Done!")

  // // 69
  // await marketPlaceCollection.connect(wallets[69]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[69]).updateCollection(
  //   "InteriorDesign",
  //   "Welcome to InteriorDesign: Where Creativity Meets Home Transformation! Are you looking to breathe new life into your living space or real estate interiors? Do you want to collaborate with talented interior designers who can turn your vision into reality? Look no further than InteriorDesign, your go-to platform for discovering, designing, and revitalizing your spaces.",
  //   "https://i.ibb.co/5WhbpmT/120.jpg",
  //   "https://i.ibb.co/5WhbpmT/120.jpg",
  //   "https://i.ibb.co/yhxBQLY/233.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("69marketPlaceCollection.updateCollection===========> Done!")

  // // 70
  // await marketPlaceCollection.connect(wallets[70]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[70]).updateCollection(
  //   "ParkSpotter",
  //   "Introducing ParkSpotter: Your Passport to Stress-Free Parking Worldwide! Tired of endlessly circling the block in search of parking? Frustrated with crowded lots and uncertain availability? Say goodbye to parking headaches and hello to ParkSpotter – your go-to platform for discovering, reserving, and subscribing to parking spaces around the world.",
  //   "https://i.ibb.co/DDb6k7p/121.jpg",
  //   "https://i.ibb.co/DDb6k7p/121.jpg",
  //   "https://i.ibb.co/TvvmDnv/232.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("70marketPlaceCollection.updateCollection===========> Done!")

  // // 71
  // await marketPlaceCollection.connect(wallets[71]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[71]).updateCollection(
  //   "CloudVenue",
  //   "Introducing CloudVenue: Where Imagination Meets Real Estate! Are you ready to revolutionize the way you think about venues and real estate? Look no further than CloudVenue, the cutting-edge platform that lets you discover, book, and transform any space into your dream venue, or even find the perfect real estate for your cloud venue. Imagine a nightclub, bar, restaurant, rage room, escape room, or any venue you can dream of. Now, picture it as a mobile masterpiece, ready to be hosted in any real estate you desire. That's the essence of a Cloud Venue - a versatile, adaptable, and ever-changing space that can be designed to look exactly as you envision it, hosted in one location for a period, and effortlessly moved to another. It's the future of flexible event spaces.",
  //   "https://i.ibb.co/ZmpjFvb/500.jpg",
  //   "https://i.ibb.co/ZmpjFvb/500.jpg",
  //   "https://i.ibb.co/5hZTrBZ/231.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("71marketPlaceCollection.updateCollection===========> Done!")

  // // 72
  // await marketPlaceCollection.connect(wallets[72]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[72]).updateCollection(
  //   "LanguageGames",
  //   "Welcome to LanguageGames: Where Learning a New Language Becomes a Thrilling Adventure! Are you ready to embark on an exciting journey of language learning? LanguageGames is your gateway to a world of linguistic exploration, where learning a new language isn't just educational but incredibly fun.",
  //   "https://i.ibb.co/G3zrMn0/501.jpg",
  //   "https://i.ibb.co/G3zrMn0/501.jpg",
  //   "https://i.ibb.co/L9Br6k0/230.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("72marketPlaceCollection.updateCollection===========> Done!")

  // // 73
  // await marketPlaceCollection.connect(wallets[73]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[73]).updateCollection(
  //   "Games",
  //   "Introducing Games: Your Gateway to Play-to-Earn Gaming Galore! Are you ready to embark on a gaming adventure like never before? Say hello to Games, the ultimate platform for discovering and playing a wide array of play-to-earn games across various categories. Whether you're a seasoned gamer or just starting your gaming journey, Games has something exciting for everyone.",
  //   "https://i.ibb.co/mBKSHbc/124.jpg",
  //   "https://i.ibb.co/mBKSHbc/124.jpg",
  //   "https://i.ibb.co/DVZ9bpp/229.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("73marketPlaceCollection.updateCollection===========> Done!")

  // // 74
  // await marketPlaceCollection.connect(wallets[74]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[74]).updateCollection(
  //   "BookClubs",
  //   "Introducing BookClubs: Where Literature Meets Cinematography! Are you an aspiring writer dreaming of seeing your stories come to life on the big screen? Are you a book club looking for fresh and captivating stories to explore? Welcome to BookClubs, the groundbreaking platform that bridges the world of literature and cinema.",
  //   "https://i.ibb.co/FB4tT79/125.jpg",
  //   "https://i.ibb.co/FB4tT79/125.jpg",
  //   "https://i.ibb.co/sRwTxr5/228.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("74marketPlaceCollection.updateCollection===========> Done!")

  // // 75
  // await marketPlaceCollection.connect(wallets[75]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[75]).updateCollection(
  //   "SexBank",
  //   "Are you looking to have a more consistent and vibrant sex life, find and join a group of your peers and pool resources together with them to provide payroll for your sexual partners.",
  //   "https://i.ibb.co/Cwwhsck/126.jpg",
  //   "https://i.ibb.co/Cwwhsck/126.jpg",
  //   "https://i.ibb.co/5G434QR/227.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("75marketPlaceCollection.updateCollection===========> Done!")

  // // 76
  // await marketPlaceCollection.connect(wallets[76]).addCollection(0, 0, 0, 0, 0, 0, "0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[76]).updateCollection(
  //   "GenShare",
  //   "Introducing GenShare: Power Your Adventures with Ease! Are you planning an outdoor adventure or facing an unexpected power outage? Look no further than GenShare, your trusted platform for discovering nearby diesel and solar generators with or without charge, as well as portable solar blankets available for rent. With GenShare, you can access reliable power sources whenever and wherever you need them.",
  //   "https://i.ibb.co/X20ksVP/128.jpg",
  //   "https://i.ibb.co/X20ksVP/128.jpg",
  //   "https://i.ibb.co/0XTcvxJ/226.jpg",
  //   "",
  //   "",
  //   "0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("76marketPlaceCollection.updateCollection===========> Done!")

  // // 77
  // await marketPlaceCollection.connect(wallets[77]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[77]).updateCollection(
  //   "LearnHub",
  //   "Welcome to LearnHub: Your Gateway to Knowledge! Are you eager to expand your horizons, acquire new skills, or explore exciting subjects? Look no further than LearnHub, your one-stop platform for discovering and enrolling in a diverse array of online courses.",
  //   "https://i.ibb.co/d6sMn9K/129.jpg",
  //   "https://i.ibb.co/d6sMn9K/129.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("77marketPlaceCollection.updateCollection===========> Done!")

  // // 78
  // await marketPlaceCollection.connect(wallets[78]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[78]).updateCollection(
  //   "ProductizedServices",
  //   "Introducing ProductizedServices: Your Gateway to Expert Productized Services! Are you searching for specialized services tailored to your exact needs? Look no further than ProductizedServices, your go-to platform for discovering and booking experts who offer precisely what you're looking for.",
  //   "https://i.ibb.co/3WcT2Dt/130.jpg",
  //   "https://i.ibb.co/3WcT2Dt/130.jpg",
  //   "https://i.ibb.co/HFrZnbw/222.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("78marketPlaceCollection.updateCollection===========> Done!")

  // // 79
  // await marketPlaceCollection.connect(wallets[79]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[79]).updateCollection(
  //   "SMMP",
  //   "Welcome to SMMP: your Social Media Master Plan! Are you an active user of social media platforms like Instagram, Twitter, or TikTok? Do you enjoy engaging with content creators and influencers? Get ready for a revolutionary way to interact with your favorite creators while earning exciting rewards. Welcome to SMMP!",
  //   "https://i.ibb.co/bP7F8qd/451.jpg",
  //   "https://i.ibb.co/bP7F8qd/451.jpg",
  //   "https://i.ibb.co/44SXFQM/223.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("79marketPlaceCollection.updateCollection===========> Done!")

  // // 80
  // await marketPlaceCollection.connect(wallets[80]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[80]).updateCollection(
  //   "IfNotBy",
  //   "Introducing IfNotBy: Find Your Marriage Mate! Are you tired of the traditional dating scene and ready to take a more serious step towards finding your life partner? Welcome to IfNotBy, the revolutionary platform that helps you discover and meet people with whom you can enter into meaningful engagements, leading to marriage if neither of you is already married before a certain date.",
  //   "https://i.ibb.co/LNTK64v/452.jpg",
  //   "https://i.ibb.co/LNTK64v/452.jpg",
  //   "https://i.ibb.co/bs9B2mg/221.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("80marketPlaceCollection.updateCollection===========> Done!")

  // // 81
  // await marketPlaceCollection.connect(wallets[81]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[81]).updateCollection(
  //   "StatusTravelers",
  //   "Introducing StatusTravelers: Elevating Your Luxury Travel Experience! Are you passionate about luxury travel experiences but haven't had the opportunity to indulge? Do you dream of joining first-class flyers, jet setters, or yacht enthusiasts on their journeys? Welcome to StatusTravelers, the exclusive platform where you can discover unique opportunities to join luxury travelers on their adventures, all while enjoying the lavish comfort you deserve.",
  //   "https://i.ibb.co/9HkK4N9/455.jpg",
  //   "https://i.ibb.co/9HkK4N9/455.jpg",
  //   "https://i.ibb.co/KD398kB/220.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("81marketPlaceCollection.updateCollection===========> Done!")

  // // 82
  // await marketPlaceCollection.connect(wallets[82]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[82]).updateCollection(
  //   "PowerCircles",
  //   "Introducing PowerCircles: Empowering Favor Networks for All! Do you believe in the power of community and reciprocity? Welcome to PowerCircles, a groundbreaking platform that connects like-minded individuals, allowing them to form groups dedicated to granting favors to one another, whether in politics, business, or daily life.",
  //   "https://i.ibb.co/G0CpgQn/458.jpg",
  //   "https://i.ibb.co/G0CpgQn/458.jpg",
  //   "https://i.ibb.co/GT87pBX/219.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("82marketPlaceCollection.updateCollection===========> Done!")

  // // 83
  // await marketPlaceCollection.connect(wallets[83]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[83]).updateCollection(
  //   "ReversePension",
  //   "Introducing ReversePension: a platform that takes regular cotisations from kids and teens throughout the world as they are growing up in order to support them between ages 20 to 30 so they can take more risks, focus on wealth creation and not have to worry about health, housing, transportation, energy, etc. Create your kids' ReversePension account now!",
  //   "https://i.ibb.co/tY1dZRN/461.jpg",
  //   "https://i.ibb.co/tY1dZRN/461.jpg",
  //   "https://i.ibb.co/D1Q5Zbk/218.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("83marketPlaceCollection.updateCollection===========> Done!")

  // // 84
  // await marketPlaceCollection.connect(wallets[84]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[84]).updateCollection(
  //   "FutureCollaterals",
  //   "Welcome to FutureCollaterals: Your Innovative Loan Marketplace! At FutureCollaterals, we're reshaping the way you think about loans and collateral. Imagine a world where your collateral isn't just a security measure but an asset that grows in value with certainty. That's the future we're building.",
  //   "https://i.ibb.co/V062h6F/465.jpg",
  //   "https://i.ibb.co/V062h6F/465.jpg",
  //   "https://i.ibb.co/mRryjPD/217.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("84marketPlaceCollection.updateCollection===========> Done!")

  // // 85
  // await marketPlaceCollection.connect(wallets[85]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[85]).updateCollection(
  //   "Leviathans",
  //   "This platform enables you to discover and understand various Leviathans as well as their whole ecosystem",
  //   "https://i.ibb.co/2vMbyw0/468.jpg",
  //   "https://i.ibb.co/2vMbyw0/468.jpg",
  //   "https://i.ibb.co/w7DTrnC/216.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("85marketPlaceCollection.updateCollection===========> Done!")

  // // 86
  // await marketPlaceCollection.connect(wallets[86]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[86]).updateCollection(
  //   "CelebrateJoy",
  //   "CelebrateJoy: Where Generosity Meets Special Moments! Welcome to CelebrateJoy, the unique platform where you can share your special occasions, like anniversaries and birthdays, and receive gifts or monetary blessings from a community of generous individuals. But it doesn't stop there – the more you give, the more you can receive, thanks to Payswap's badge system!",
  //   "https://i.ibb.co/CtfjqbD/472.jpg",
  //   "https://i.ibb.co/CtfjqbD/472.jpg",
  //   "https://i.ibb.co/YX89X0R/215.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("86marketPlaceCollection.updateCollection===========> Done!")

  // // 87
  // await marketPlaceCollection.connect(wallets[87]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[87]).updateCollection(
  //   "GroupEvents",
  //   "Introducing GroupEvents: Redefining Event Coordination Together! Have you ever wished for an easier way to organize events while reducing costs and making new friends who share your interests? Look no further! GroupEvents is your innovative platform for connecting with like-minded individuals planning similar events. Let's make your event planning experience more collaborative, cost-effective, and enjoyable.",
  //   "https://i.ibb.co/LpHkjsX/503.jpg",
  //   "https://i.ibb.co/LpHkjsX/503.jpg",
  //   "https://i.ibb.co/0Q7YJBC/214.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("87marketPlaceCollection.updateCollection===========> Done!")

  // // 88
  // await marketPlaceCollection.connect(wallets[88]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[88]).updateCollection(
  //   "MarketShare",
  //   "Introducing MarketShare Collective: Where ValuePools Thrive! Are you ready to be part of a revolutionary movement in the business world? Welcome to MarketShare Collective, the platform where individuals, entrepreneurs, and investors unite to form dynamic ValuePools, all with the common goal of accumulating market share in diverse industries and countries.",
  //   "https://i.ibb.co/6bwxCB1/477.jpg",
  //   "https://i.ibb.co/6bwxCB1/477.jpg",
  //   "https://i.ibb.co/vj7vcSh/213.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("88marketPlaceCollection.updateCollection===========> Done!")

  // // 89
  // await marketPlaceCollection.connect(wallets[89]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[89]).updateCollection(
  //   "PharmaFinder",
  //   "Introducing PharmaFinder: Your Global Pharmacy Connection! In a world where access to medications is crucial, PharmaFinder brings pharmacies from around the globe right to your fingertips. We're the platform that simplifies the process of discovering and ordering pharmaceutical products from pharmacies worldwide.",
  //   "https://i.ibb.co/pLjpPmK/480.jpg",
  //   "https://i.ibb.co/pLjpPmK/480.jpg",
  //   "https://i.ibb.co/ZKp73zV/212.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("89marketPlaceCollection.updateCollection===========> Done!")

  // // 90
  // await marketPlaceCollection.connect(wallets[90]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[90]).updateCollection(
  //   "SharedDistribution",
  //   "Welcome to SharedDistribution: Powering Retailers with Collective Buying! Are you a retailer looking to supercharge your purchasing power while reducing costs? Say hello to SharedDistribution, the ultimate platform that empowers retailers to join forces through valuepools.",
  //   "https://i.ibb.co/nz9fJdd/483.jpg",
  //   "https://i.ibb.co/nz9fJdd/483.jpg",
  //   "https://i.ibb.co/Pw5GB8c/211.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("90marketPlaceCollection.updateCollection===========> Done!")

  // // 91
  // await marketPlaceCollection.connect(wallets[91]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[91]).updateCollection(
  //   "BuildToSell",
  //   "Introducing BuildToSell: Unlocking Collective Success in Software Building! Are you a software developer, engineer, or entrepreneur looking to amplify your impact and profits by collaborating with like-minded individuals? Welcome to SharedDistribution, the groundbreaking platform that connects you with ValuePools - groups of talented people building software and products to sell to tech giants.",
  //   "https://i.ibb.co/JyRLf12/486.jpg",
  //   "https://i.ibb.co/JyRLf12/486.jpg",
  //   "https://i.ibb.co/sv7nQ0F/210.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("91marketPlaceCollection.updateCollection===========> Done!")

  // // 92
  // await marketPlaceCollection.connect(wallets[92]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[92]).updateCollection(
  //   "DealBanks",
  //   "Welcome to DealBanks: Empowering the 99% in Entertainment, Sports, and More! In the worlds of music, entertainment, sports, and beyond, it often feels like only the top 1% get to experience the glitz, glamour, and financial success. At DealBanks, we're here to change that narrative by empowering the 99% to come together, pool their resources, and support each other on the journey to success.",
  //   "https://i.ibb.co/G26jM4x/504.jpg",
  //   "https://i.ibb.co/G26jM4x/504.jpg",
  //   "https://i.ibb.co/RvSSybP/209.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("92marketPlaceCollection.updateCollection===========> Done!")

  // // 93
  // await marketPlaceCollection.connect(wallets[93]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[93]).updateCollection(
  //   "PleasurePools",
  //   "Welcome to PleasurePools: Fueling Innovation in Sexual Wellness! PleasurePools is your gateway to a world of groundbreaking sexual products and experiences. We are a unique platform dedicated to discovering and supporting Valuepools that fund the research and development of innovative sexual products, all with the aim of enhancing intimacy, pleasure, and overall sexual wellness.",
  //   "https://i.ibb.co/59KWK4j/506.jpg",
  //   "https://i.ibb.co/59KWK4j/506.jpg",
  //   "https://i.ibb.co/D7m32qZ/208.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("93marketPlaceCollection.updateCollection===========> Done!")

  // // 94
  // await marketPlaceCollection.connect(wallets[94]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[94]).updateCollection(
  //   "SwapNShop",
  //   "Introducing SwapNShop: Your Ultimate Local Item Exchange Platform! Are you tired of overpaying for items that are expensive in your area but cheaper elsewhere? Do you wish you could swap those items with someone in the opposite situation? Look no further! Welcome to SwapNShop, the innovative platform that connects users looking to swap items for mutual benefit.",
  //   "https://i.ibb.co/MDQ7fjq/508.jpg",
  //   "https://i.ibb.co/MDQ7fjq/508.jpg",
  //   "https://i.ibb.co/SxCtmx5/207.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("94marketPlaceCollection.updateCollection===========> Done!")

  // // 95
  // await marketPlaceCollection.connect(wallets[95]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[95]).updateCollection(
  //   "FundFolks",
  //   "Welcome to FundFolks: Where Your Voice Shapes Financial Choices! FundFolks is not just a platform; it's a community-driven financial revolution. Imagine having a say in how your favorite brands, influencers, or partners spend their money. With FundFolks, you have the power to make it happen.",
  //   "https://i.ibb.co/6tG48tf/510.jpg",
  //   "https://i.ibb.co/6tG48tf/510.jpg",
  //   "https://i.ibb.co/PGS08rk/206.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("95marketPlaceCollection.updateCollection===========> Done!")

  // // 96
  // await marketPlaceCollection.connect(wallets[96]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[96]).updateCollection(
  //   "CelebPap",
  //   "Introducing CelebPap: Your Exclusive Celebrity Content Subscription Platform! Have you ever wanted to get closer to your favorite celebrities, see their behind-the-scenes moments, and access exclusive content? Welcome to CelebPap, the ultimate platform that connects you with paparazzi photographers who capture the real lives of stars.",
  //   "https://i.ibb.co/0V0JbNC/512.jpg",
  //   "https://i.ibb.co/0V0JbNC/512.jpg",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("96marketPlaceCollection.updateCollection===========> Done!")

  // // 97
  // await marketPlaceCollection.connect(wallets[97]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[97]).updateCollection(
  //   "MarriageGuard",
  //   "Introducing MarriageGuard: Redefining Matrimony with Trust and Accountability! Are you looking to embark on the journey of marriage with transparency, trust, and shared responsibility? Welcome to MarriageGuard, a revolutionary platform that reimagines the institution of marriage, allowing couples to create bounty contracts to safeguard their commitments. Those contracts are called pay-marriage contracts.",
  //   "https://i.ibb.co/Srp8W0d/514.jpg",
  //   "https://i.ibb.co/Srp8W0d/514.jpg",
  //   "https://i.ibb.co/Smr3X1b/204.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("97marketPlaceCollection.updateCollection===========> Done!")

  // // 98
  // await marketPlaceCollection.connect(wallets[98]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[98]).updateCollection(
  //   "JobInsight",
  //   "Welcome to JobInsight: Your Career Navigator! Are you on the hunt for the perfect job or seeking valuable insights about companies? Look no further than JobInsight, your go-to platform for comprehensive information and reviews about workplaces, salaries, interviews, and so much more.",
  //   "https://i.ibb.co/GvZkn2V/517.jpg",
  //   "https://i.ibb.co/GvZkn2V/517.jpg",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("98marketPlaceCollection.updateCollection===========> Done!")

  // // 99
  // await marketPlaceCollection.connect(wallets[99]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[99]).updateCollection(
  //   "ConnectPro",
  //   "ConnectPro: Your Ultimate Professional Networking Platform! Welcome to ConnectPro, where professional networking meets innovation. Just like LinkedIn, ConnectPro offers a wide array of services to help you build and grow your career. Whether you're looking for new job opportunities, seeking to expand your professional network, or aiming to stay updated on industry trends, ConnectPro has you covered. ConnectPro also help you discover experts to help you write and tailor your resume/cover letter to specific positions/companies.",
  //   "https://i.ibb.co/R6WwBSw/521.jpg",
  //   "https://i.ibb.co/R6WwBSw/521.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("99marketPlaceCollection.updateCollection===========> Done!")

  // // 100
  // await marketPlaceCollection.connect(wallets[100]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[100]).updateCollection(
  //   "SalesMap",
  //   "Introducing SalesMap: Your Personal Shopping Concierge! Tired of running errands and wish you had a convenient way to get the items you need without leaving your home? Meet SalesMap, the innovative platform that connects you with nomad sellers who can bring your desired items right to your doorstep. You can even pick someone with the same size as you in case you are going to be buying apparel and you would like them to try it on for you before buying the right one.",
  //   "https://i.ibb.co/Dg5Lgf5/523.jpg",
  //   "https://i.ibb.co/Dg5Lgf5/523.jpg",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("100marketPlaceCollection.updateCollection===========> Done!")

  // // 101
  // await marketPlaceCollection.connect(wallets[101]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[101]).updateCollection(
  //   "UtilityBills",
  //   "Introducing UtilityBills: Your Hassle-Free Utility Bill Solution! Tired of the hassle of paying your utility bills every month? Looking for a convenient way to manage your expenses and avoid late fees? Say hello to UtilityBills, your one-stop platform for discovering trusted agents who can take care of your utility bills promptly.",
  //   "https://i.ibb.co/PFw6mk8/388.jpg",
  //   "https://i.ibb.co/PFw6mk8/388.jpg",
  //   "https://i.ibb.co/DfVRgnH/293.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("101marketPlaceCollection.updateCollection===========> Done!")

  // // 102
  // await marketPlaceCollection.connect(wallets[102]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[102]).updateCollection(
  //   "BuyPatentsOnline",
  //   "Introducing BuyPatentsOnline: Your Gateway to Patent Acquisitions! Are you an innovator, entrepreneur, or business looking to purchase patents to fuel your next big idea? Welcome to BuyPatentsOnline, the ultimate platform that connects you with trusted patent agents and inventors ready to help you acquire the intellectual property you need.",
  //   "https://i.ibb.co/XWCQZN8/390.jpg",
  //   "https://i.ibb.co/XWCQZN8/390.jpg",
  //   "https://i.ibb.co/VtSC751/294.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("102marketPlaceCollection.updateCollection===========> Done!")

  // // 103
  // await marketPlaceCollection.connect(wallets[103]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[103]).updateCollection(
  //   "PetDayCare",
  //   "Introducing PetDayCare: Where Your Pet's Happiness Comes First! Are you a loving pet owner seeking the perfect daycare for your furry friend while you're away? Look no further than PetDayCare, your go-to platform for discovering top-notch pet daycares in your area.",
  //   "https://i.ibb.co/D4sBhZ7/392.jpg",
  //   "https://i.ibb.co/D4sBhZ7/392.jpg",
  //   "https://i.ibb.co/cwsnptG/300-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("103marketPlaceCollection.updateCollection===========> Done!")

  // // 104
  // await marketPlaceCollection.connect(wallets[104]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[104]).updateCollection(
  //   "LostAndFound",
  //   "Introducing LostAndFound: Your Ultimate Lost Item Reunification Platform! Have you ever lost something valuable and wished there was an easy way to find it? Or perhaps you've found a lost item and wanted to help return it to its rightful owner. Look no further than LostAndFound, your go-to platform for reconnecting lost items, including beloved pets and, most importantly, missing loved ones! This site can also be used to find someone you met but lost contacts with.",
  //   "https://i.ibb.co/m5Phkz0/394.jpg",
  //   "https://i.ibb.co/m5Phkz0/394.jpg",
  //   "https://i.ibb.co/2t8FF7W/296.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("104marketPlaceCollection.updateCollection===========> Done!")

  // // 105
  // await marketPlaceCollection.connect(wallets[105]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[105]).updateCollection(
  //   "AdmitGuru",
  //   "Introducing AdmitGuru: Your Exclusive College Admissions Insights Platform! AdmitGuru is a revolutionary platform where college students confidentially share their successful and unsuccessful applications to top schools behind paywalls. Gain unparalleled insights into what gets you accepted by subscribing to the paywall of your dream school. AdmitGuru is your gateway to invaluable, firsthand knowledge of college admissions, helping you make informed decisions on your path to academic success.",
  //   "https://i.ibb.co/9GX4L6C/396.jpg",
  //   "https://i.ibb.co/9GX4L6C/396.jpg",
  //   "https://i.ibb.co/djCTcQy/297.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("105marketPlaceCollection.updateCollection===========> Done!")

  // // 106
  // await marketPlaceCollection.connect(wallets[106]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[106]).updateCollection(
  //   "HangMates",
  //   "Introducing HangMates: Your Social Hangout Connection! Are you tired of working out alone at the gym? Want to meet new people for a drink, study session, or even a workout buddy? Welcome to HangMates, your go-to platform for discovering and connecting with like-minded individuals at your favorite spots.",
  //   "https://i.ibb.co/RcBbzh2/400.jpg",
  //   "https://i.ibb.co/RcBbzh2/400.jpg",
  //   "https://i.ibb.co/qWXh6d7/298.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("106marketPlaceCollection.updateCollection===========> Done!")

  // // 107
  // await marketPlaceCollection.connect(wallets[107]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[107]).updateCollection(
  //   "BrandBoost",
  //   "Introducing BrandBoost, the ultimate platform that empowers you to amplify your brand or message's reach across diverse social media platforms by seamlessly sponsoring ValuePool members who share your content, ensuring maximum exposure and engagement within your target audience.",
  //   "https://i.ibb.co/wQXwwkG/402.jpg",
  //   "https://i.ibb.co/wQXwwkG/402.jpg",
  //   "https://i.ibb.co/Pcc4GQp/299.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("107marketPlaceCollection.updateCollection===========> Done!")

  // // 108
  // await marketPlaceCollection.connect(wallets[108]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[108]).updateCollection(
  //   "RoamHub",
  //   "Introducing RoamHub, the innovative platform that simplifies the way you discover and rent flexible living and working spaces for your team or farmlands. Whether it's a short-term project, a remote work arrangement, or team-building in unique locations, RoamHub connects you with a curated selection of inspiring spaces worldwide. From cozy cottages in the countryside to urban lofts in bustling cities, we offer diverse accommodations with dedicated workspaces to enhance productivity and foster creativity. With RoamHub, finding the perfect blend of work and life has never been easier.",
  //   "https://i.ibb.co/TY9QCMV/404.jpg",
  //   "https://i.ibb.co/TY9QCMV/404.jpg",
  //   "https://i.ibb.co/mSjmYFK/300.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("108marketPlaceCollection.updateCollection===========> Done!")

  // // 109
  // await marketPlaceCollection.connect(wallets[109]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[109]).updateCollection(
  //   "InfluenceGame",
  //   "Introducing InfluenceGame, the groundbreaking platform where influencers (on platforms such as YouTube, Instagram, Snapchat, Twitter, Substack, etc.) can level up their engagement by participating in exciting games that allow users to bet on the growth of their social media metrics, from new subscribers and likes to comments and more. InfluenceGame not only turns content creation into a thrilling competition but also offers a unique opportunity for influencers and their fans to interact in a whole new way, making the journey to online stardom even more exhilarating and rewarding. Join us today and let the games begin!",
  //   "https://i.ibb.co/CPHh1XP/407.jpg",
  //   "https://i.ibb.co/CPHh1XP/407.jpg",
  //   "https://i.ibb.co/7Smyk24/301.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("109marketPlaceCollection.updateCollection===========> Done!")

  // // 110
  // await marketPlaceCollection.connect(wallets[110]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[110]).updateCollection(
  //   "StayLink",
  //   "Welcome to StayLink, your premier platform for accommodation rentals worldwide. With StayLink, you can discover a vast array of unique, comfortable, and conveniently located places to stay during your travels. Our user-friendly platform connects you with hospitable hosts, ensuring memorable and authentic travel experiences wherever you go. Whether it's for a short city break or an extended adventure, StayLink is your trusted companion in finding the perfect place to call home while you explore the world. With StayLink, you can also subscribe to a catalog of rentals such that, as long as you're paying your subscription, you can move from any of the rentals to another as long as you agree with the current owner of the rental you are moving to. There are multiple schemes like 3-way swaps involving 3 rentals or x-way swaps involving x rentals that could help you get access to any rental you want.",
  //   "https://i.ibb.co/TmVdG2C/409.jpg",
  //   "https://i.ibb.co/TmVdG2C/409.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("110marketPlaceCollection.updateCollection===========> Done!")

  // // 111
  // await marketPlaceCollection.connect(wallets[111]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[111]).updateCollection(
  //   "WhiteHats",
  //   "Introducing WhiteHats: WhiteHats is your premier platform for connecting with and subscribing to groups of cybersecurity experts who specialize in identifying and fortifying vulnerable points in your systems and devices. With WhiteHats, you gain instant access to a global network of ethical hackers and security professionals who can help safeguard your digital assets, providing peace of mind in an increasingly interconnected world. Subscribe to the expertise you need, bolster your defenses, and stay one step ahead of potential threats with WhiteHats.",
  //   "https://i.ibb.co/p16j2Gw/411.jpg",
  //   "https://i.ibb.co/p16j2Gw/411.jpg",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("111marketPlaceCollection.updateCollection===========> Done!")

  // // 112
  // await marketPlaceCollection.connect(wallets[112]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[112]).updateCollection(
  //   "WhiteCheaters",
  //   "Introducing WhiteCheaters, a unique platform designed for those seeking to test their partner's faithfulness. With WhiteCheaters, you can subscribe to groups of experts who will tactfully assess your partner's loyalty without encouraging infidelity. Our discreet and ethical approach allows you to gain peace of mind or address concerns in a safe and confidential manner, ensuring your relationship's trust and integrity are paramount.",
  //   "https://i.ibb.co/G91BWNJ/413.jpg",
  //   "https://i.ibb.co/G91BWNJ/413.jpg",
  //   "https://i.ibb.co/sWGRP6j/202.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("112marketPlaceCollection.updateCollection===========> Done!")

  // // 113
  // await marketPlaceCollection.connect(wallets[113]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[113]).updateCollection(
  //   "FoodSub",
  //   "Introducing FoodSub, your gateway to discovering and subscribing to specialized paywalls that deliver a regular supply of fresh, locally sourced crops, fish, meat, and more right to your doorstep. Say goodbye to supermarket runs and hello to convenience as you explore a variety of subscription options from trusted producers. With FoodSub Subscriptions, you can enjoy the finest, sustainably harvested goods, fruits, etc, directly supporting local farmers and fishermen while ensuring your kitchen is always stocked with the best nature has to offer. You can also subscribe to courses offered by the fishermen/farmers/etc. that produce items you are willing to learn how to produce yourself. Subscribe today and elevate your dining experience with quality you can taste, delivered on your schedule.",
  //   "https://i.ibb.co/vXJyJn5/415.jpg",
  //   "https://i.ibb.co/vXJyJn5/415.jpg",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("113marketPlaceCollection.updateCollection===========> Done!")

  // // 114
  // await marketPlaceCollection.connect(wallets[114]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[114]).updateCollection(
  //   "RSVPShield",
  //   "Introducing RSVPShield, the innovative platform that adds a new level of commitment to event attendance. With RSVPShield, event hosts can ensure that guests are punctual and committed by requiring them to put up valuable collaterals as a guarantee. If attendees RSVP but fail to show up or arrive late, the collaterals are claimed, providing a strong incentive for guests to honor their commitments and prioritize punctuality. This platform not only helps hosts manage their events more effectively but also fosters a culture of reliability and respect among attendees, ensuring that every event is a success from start to finish.",
  //   "https://i.ibb.co/LxK6pcJ/417.jpg",
  //   "https://i.ibb.co/LxK6pcJ/417.jpg",
  //   "https://i.ibb.co/Smr3X1b/204.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("114marketPlaceCollection.updateCollection===========> Done!")

  // // 115
  // await marketPlaceCollection.connect(wallets[115]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[115]).updateCollection(
  //   "WalkingBillboards",
  //   "Introducing WalkingBillboards, your go-to platform where users can effortlessly request companies to provide them with free branded clothing, phone cases, and more. Imagine having the latest trends and branded gear delivered straight to your doorstep without spending a dime. With WalkingBillboards, you can do just that. Simply make your requests, and let companies turn you into a walking advertisement. Join WalkingBillboards today and redefine your wardrobe and accessories with the latest branded merchandise, all at your fingertips.",
  //   "https://i.ibb.co/1v7S36b/419.jpg",
  //   "https://i.ibb.co/1v7S36b/419.jpg",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("115marketPlaceCollection.updateCollection===========> Done!")

  // // 116
  // await marketPlaceCollection.connect(wallets[116]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[116]).updateCollection(
  //   "DriveOn",
  //   "Introducing DriveOn, the on-demand mobility platform that seamlessly connects passengers with reliable drivers in their area. With just a few taps on your smartphone, you can book a ride, whether it's for your daily commute, a night out, or an airport transfer. DriveOn offers a fleet of safe and comfortable vehicles (cars, boats, jets, buses, bikes, etc.), transparent pricing, and the convenience of cashless transactions. Our mission is to make transportation accessible, efficient, and stress-free for everyone, ensuring you reach your destination comfortably and on time. Say goodbye to waiting for taxis; DriveOn is your go-to solution for hassle-free rides whenever you need them.",
  //   "https://i.ibb.co/2vDDNfJ/421.jpg",
  //   "https://i.ibb.co/2vDDNfJ/421.jpg",
  //   "https://i.ibb.co/PGS08rk/206.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("116marketPlaceCollection.updateCollection===========> Done!")

  // // 117
  // await marketPlaceCollection.connect(wallets[117]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[117]).updateCollection(
  //   "CitizenSeed",
  //   "Introducing CitizenSeed: Your Pathway to US Citizenship for Your Children — our unique platform connects expectant parents with compassionate individuals in the United States who are willing to provide support, guidance, and assistance during the crucial period before childbirth. By forging meaningful connections, we aim to help parents navigate the process of giving birth in the US, ensuring their children become US citizens, and ultimately providing them with expanded opportunities for their future. CitizenSeed is your trusted partner in realizing the American dream for your family.",
  //   "https://i.ibb.co/yyWyQyn/423.jpg",
  //   "https://i.ibb.co/yyWyQyn/423.jpg",
  //   "https://i.ibb.co/SxCtmx5/207.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("117marketPlaceCollection.updateCollection===========> Done!")

  // // 118
  // await marketPlaceCollection.connect(wallets[118]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[118]).updateCollection(
  //   "ShopStocks",
  //   "Introducing ShopStocks, the innovative platform that revolutionizes your supermarket shopping experience. With ShopStocks, you can effortlessly discover products you'd like your local supermarket to keep in stock for you simply by purchasing them, ensuring your favorite items are always available. But it doesn't stop there; we also allow stores to list upcoming products, enabling you to pre-order and reserve items, which not only guarantees you get what you want but also helps stores minimize waste by sourcing precisely what's needed. Say goodbye to grocery shopping uncertainties and hello to a smarter, more sustainable way to stock up on your essentials with ShopStocks.",
  //   "https://i.ibb.co/Cs7YjFz/425.jpg",
  //   "https://i.ibb.co/Cs7YjFz/425.jpg",
  //   "https://i.ibb.co/D7m32qZ/208.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("118marketPlaceCollection.updateCollection===========> Done!")

  // // 119
  // await marketPlaceCollection.connect(wallets[119]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[119]).updateCollection(
  //   "WashRover",
  //   "Introducing WashRover, the hassle-free platform that connects you with trusted car wash agents ready to pamper your vehicle right at your doorstep. Say goodbye to long queues and inconvenient car wash appointments. With WashRover, you can effortlessly schedule a professional car cleaning at your preferred time, ensuring your vehicle stays sparkling without you lifting a finger.",
  //   "https://i.ibb.co/zhspYVK/427.jpg",
  //   "https://i.ibb.co/zhspYVK/427.jpg",
  //   "https://i.ibb.co/RvSSybP/209.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("119marketPlaceCollection.updateCollection===========> Done!")

  // // 120
  // await marketPlaceCollection.connect(wallets[120]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[120]).updateCollection(
  //   "SwapCircle",
  //   "Introducing SwapCircle, the innovative platform that revolutionizes the way you acquire and exchange items within a community. With SwapCircle, you can join or create groups of like-minded individuals who collectively buy items they need and seamlessly swap them as often as needed among group members. Whether you're looking to share resources, reduce waste, or simply enjoy the benefits of a collaborative and sustainable approach to consumer goods, SwapCircle is your go-to platform for smarter, eco-friendly, and cost-effective item swapping. Join the sharing revolution with SwapCircle and experience the future of communal consumption today.",
  //   "https://i.ibb.co/c3SNsLs/429.jpg",
  //   "https://i.ibb.co/c3SNsLs/429.jpg",
  //   "https://i.ibb.co/sv7nQ0F/210.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("120marketPlaceCollection.updateCollection===========> Done!")

  // // 121
  // await marketPlaceCollection.connect(wallets[121]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[121]).updateCollection(
  //   "SponsorConnect",
  //   "Introducing SponsorConnect, the all-in-one platform that revolutionizes the way individuals, organizations, and events connect with potential sponsors. Whether you're an aspiring athlete, an event organizer, or a content creator seeking sponsorship opportunities, SponsorConnect simplifies the process. Our intuitive interface allows you to browse through a diverse range of sponsors, from local businesses to global brands, while our messaging system makes it easy to initiate conversations and secure those crucial sponsorship deals. Say goodbye to the complexities of sponsorship hunting and hello to a seamless and efficient way of forging valuable partnerships with SponsorConnect.",
  //   "https://i.ibb.co/cQqRB6t/431.jpg",
  //   "https://i.ibb.co/cQqRB6t/431.jpg",
  //   "https://i.ibb.co/Pw5GB8c/211.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("121marketPlaceCollection.updateCollection===========> Done!")

  // // 122
  // await marketPlaceCollection.connect(wallets[122]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[122]).updateCollection(
  //   "WinnersFund",
  //   "Introducing WinnersFund, the revolutionary platform where lottery winners become active investors in the next big companies. WinnersFund seamlessly connects fortunate lottery winners with innovative startups seeking funding. Winners can pool their resources in ValuePools, and entrepreneurs present their compelling business ideas for a chance to secure investments from these newly minted venture capitalists",
  //   "https://i.ibb.co/s2mxrc8/433.jpg",
  //   "https://i.ibb.co/s2mxrc8/433.jpg",
  //   "https://i.ibb.co/ZKp73zV/212.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("122marketPlaceCollection.updateCollection===========> Done!")

  // // 123
  // await marketPlaceCollection.connect(wallets[123]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[123]).updateCollection(
  //   "PaywallsForSale",
  //   "Introducing PaywallsForSale, the innovative platform that empowers users to create customized paywalls for premium access to their unique services, gather a dedicated subscriber base, and seamlessly connect with businesses seeking to offer those specialized services.",
  //   "https://i.ibb.co/nMHRVdn/435.jpg",
  //   "https://i.ibb.co/nMHRVdn/435.jpg",
  //   "https://i.ibb.co/vj7vcSh/213.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("123marketPlaceCollection.updateCollection===========> Done!")

  // // 124
  // await marketPlaceCollection.connect(wallets[124]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[124]).updateCollection(
  //   "NetLove",
  //   "Find and pay for somebody to be your virtual boyfriend/girlfriend. The duration of the relationship, its character (romantic, sexual, submission, etc) as well as whether it will be exclusive or not will be options you can pick. All partners will have bounties to guarantee they will offer nothing less than the experience their user(s) paid for",
  //   "https://i.ibb.co/Wn6fgwb/437.jpg",
  //   "https://i.ibb.co/Wn6fgwb/437.jpg",
  //   "https://i.ibb.co/0Q7YJBC/214.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("124marketPlaceCollection.updateCollection===========> Done!")

  // // 125
  // await marketPlaceCollection.connect(wallets[125]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[125]).updateCollection(
  //   "HomelyEstate",
  //   "Introducing HomelyEstate, the ultimate online real estate platform that offers an extensive range of services akin to Zillow. Whether you're searching for your dream home, exploring market trends, or seeking to sell your property, HomelyEstate provides a user-friendly interface and a wealth of real estate resources at your fingertips. With detailed property listings, neighborhood insights, and a team of dedicated professionals, we're your go-to destination for all your real estate needs. Discover your next abode, stay updated on market values, and connect with trusted agents seamlessly on HomelyEstate, where your housing aspirations become a reality. You can also create requests to get someone to buy your favorite house so you can rent it until you totally pay it off.",
  //   "https://i.ibb.co/yNzXTCm/499.jpg",
  //   "https://i.ibb.co/yNzXTCm/499.jpg",
  //   "https://i.ibb.co/YX89X0R/215.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("125marketPlaceCollection.updateCollection===========> Done!")

  // // 126
  // await marketPlaceCollection.connect(wallets[126]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[126]).updateCollection(
  //   "SCatalyst",
  //   "Introducing SCatalyst, a dynamic platform dedicated to fostering innovation and accelerating the growth of early-stage startups. Just like YCombinator, we offer comprehensive support, including mentorship, funding opportunities, and access to a thriving entrepreneurial network. Whether you're a tech trailblazer with a groundbreaking idea or a visionary founder ready to scale, SCatalyst is your launchpad to success, providing the resources and expertise needed to transform your startup dreams into reality. Join us today and propel your venture to new heights.",
  //   "https://i.ibb.co/ry62QXJ/439.jpg",
  //   "https://i.ibb.co/ry62QXJ/439.jpg",
  //   "https://i.ibb.co/w7DTrnC/216.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("126marketPlaceCollection.updateCollection===========> Done!")

  // // 127
  // await marketPlaceCollection.connect(wallets[127]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[127]).updateCollection(
  //   "LottoDiscover",
  //   "Introducing LottoDiscover, your go-to platform for effortlessly exploring and staying up-to-date with the newest and most exciting lotteries from around the world including those deployed on PaySwap. Whether you're a passionate lottery enthusiast or a casual player looking for a thrilling opportunity, LottoDiscover offers a user-friendly hub where you can discover, compare, and participate in a diverse range of lotteries, all in one convenient place. Stay in the know about the latest jackpots, odds, and draw dates, ensuring you never miss a chance to turn your dreams into reality. Join LottoDiscover today and embark on your journey to potential riches!",
  //   "https://i.ibb.co/G3hcm1v/497.jpg",
  //   "https://i.ibb.co/G3hcm1v/497.jpg",
  //   "https://i.ibb.co/mRryjPD/217.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("127marketPlaceCollection.updateCollection===========> Done!")

  // // 128
  // await marketPlaceCollection.connect(wallets[128]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[128]).updateCollection(
  //   "ElderMates",
  //   "Introducing ElderMates: Connecting Older Souls for Lifelong Bonds. ElderMates is a heartfelt platform designed to foster connections among older individuals seeking companionship, friendship, or even deeper bonds. Our user-friendly interface allows mature adults to explore profiles, share their life experiences, and discover like-minded souls who share their interests and values. Whether you're seeking a new friend to share stories with or a companion for life's adventures, ElderMates is the welcoming digital space where aging beautifully means forging meaningful connections. Join ElderMates today to embark on a journey of rediscovery, friendship, and enduring connections.",
  //   "https://i.ibb.co/tQpNq55/443.jpg",
  //   "https://i.ibb.co/tQpNq55/443.jpg",
  //   "https://i.ibb.co/D1Q5Zbk/218.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("128marketPlaceCollection.updateCollection===========> Done!")

  // // 129
  // await marketPlaceCollection.connect(wallets[129]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[129]).updateCollection(
  //   "Contributors",
  //   "Discover talented contributors who are eager to assist your business in exchange for your valuable vote. Whether you're seeking skilled designers, marketing experts, developers, or creative minds, connect with a diverse community of professionals willing to offer their expertise. By casting your vote, you gain access to their wealth of skills and insights, empowering your business to thrive. Your vote, their expertise – together, unstoppable.",
  //   "https://i.ibb.co/cyt59bd/445.jpg",
  //   "https://i.ibb.co/cyt59bd/445.jpg",
  //   "https://i.ibb.co/GT87pBX/219.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("129marketPlaceCollection.updateCollection===========> Done!")

  // // 130
  // await marketPlaceCollection.connect(wallets[130]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[130]).updateCollection(
  //   "GriefConnect",
  //   "Introducing GriefConnect, a compassionate and supportive online platform where individuals navigating the challenging journey of grief can find solace and connection with others who have experienced the loss of close relatives. GriefConnect offers a safe and empathetic space for members to share their stories, exchange coping strategies, and foster meaningful relationships with those who understand the unique complexities of mourning. Through discussion forums, virtual support groups, and a nurturing community, GriefConnect aims to provide comfort, healing, and a sense of belonging during one of life's most difficult times.",
  //   "https://i.ibb.co/7zKbx3s/447.jpg",
  //   "https://i.ibb.co/7zKbx3s/447.jpg",
  //   "https://i.ibb.co/KD398kB/220.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("130marketPlaceCollection.updateCollection===========> Done!")

  // // 131
  // await marketPlaceCollection.connect(wallets[131]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[131]).updateCollection(
  //   "GroupHacks",
  //   "Find and join valuepools of people that attempt multiple system hacks and distribute the proceeds through a lottery to the members. Examples of hacks: make a YouTube video/Spotify album viral, create a star, etc. Sponsorship funds of the valuepools are also distributed through lotteries",
  //   "https://i.ibb.co/zhpJsh4/449.jpg",
  //   "https://i.ibb.co/zhpJsh4/449.jpg",
  //   "https://i.ibb.co/bs9B2mg/221.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("131marketPlaceCollection.updateCollection===========> Done!")

  // // 132
  // await marketPlaceCollection.connect(wallets[132]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[132]).updateCollection(
  //   "PayItForward",
  //   "Help somebody out for an IOU, the goal is for everybody to have an IOU meaning they've paid it forward.",
  //   "https://i.ibb.co/5YHwjPH/502.jpg",
  //   "https://i.ibb.co/5YHwjPH/502.jpg",
  //   "https://i.ibb.co/HFrZnbw/222.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("132marketPlaceCollection.updateCollection===========> Done!")

  // // 133
  // await marketPlaceCollection.connect(wallets[133]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[133]).updateCollection(
  //   "LabTest",
  //   "Introducing LabTest, your convenient healthcare companion for seamless medical testing. With LabTest, you can easily order a wide range of medical tests from the comfort of your home or office and schedule a convenient time for sample collection. Our platform connects you with accredited laboratories and skilled professionals, ensuring accurate results and a stress-free testing experience. Say goodbye to long waiting times and hello to accessible, efficient healthcare with LabTest.",
  //   "https://i.ibb.co/mGLfcSS/453.jpg",
  //   "https://i.ibb.co/mGLfcSS/453.jpg",
  //   "https://i.ibb.co/44SXFQM/223.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("133marketPlaceCollection.updateCollection===========> Done!")

  // // 134
  // await marketPlaceCollection.connect(wallets[134]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[134]).updateCollection(
  //   "InvestorConference",
  //   "Introducing InvestorConference: InvestorConference is your go-to platform for discovering and publishing investor conferences that fuel the growth of innovative companies. Our unique approach transforms conferences into dynamic fundraising opportunities, where sponsors, ticket sales, and donations come together to invest directly in the promising ventures showcased at each event. Whether you're an investor seeking the next big opportunity or a company eager to connect with potential backers, InvestorConference provides the ideal platform to make meaningful financial connections and drive innovation forward.",
  //   "https://i.ibb.co/ryVgY2V/456.jpg",
  //   "https://i.ibb.co/ryVgY2V/456.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("134marketPlaceCollection.updateCollection===========> Done!")

  // // 135
  // await marketPlaceCollection.connect(wallets[135]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[135]).updateCollection(
  //   "ProductMarketFit",
  //   "Introducing ProductMarketFit: Discover a revolutionary platform that brings you closer to companies addressing real-life problems you encounter daily. With ProductMarketFit, you can effortlessly book sessions with these companies, allowing them to gain deeper insights into your pain points, needs, and preferences. Your valuable input helps shape their products and services, ensuring they align perfectly with what truly matters to customers like you. Join us in revolutionizing product development by bridging the gap between consumers and innovative companies, making sure your voice is heard in the creation of solutions that cater to your needs.",
  //   "https://i.ibb.co/3dymWQb/459.jpg",
  //   "https://i.ibb.co/3dymWQb/459.jpg",
  //   "https://i.ibb.co/0XTcvxJ/226.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("135marketPlaceCollection.updateCollection===========> Done!")

  // // 136
  // await marketPlaceCollection.connect(wallets[136]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[136]).updateCollection(
  //   "ePluribusUnum",
  //   "Introducing ePluribusUnum: Transform your dreams of a billionaire's lifestyle into reality with ePluribusUnum, a groundbreaking platform that empowers individuals to unite within ValuePools. Here, you can pool your resources with like-minded enthusiasts to collectively acquire high-end items, experiences, and investments, creating a lifestyle of opulence previously reserved for the ultra-wealthy. Whether it's luxury cars, vacation homes, art collections, or exclusive events, ePluribusUnum is your ticket to experiencing the extraordinary, one shared investment at a time. Join the movement and live the billionaire's lifestyle you've always desired, all within your reach through the power of collective wealth-building.",
  //   "https://i.ibb.co/Qbf6nvR/463.jpg",
  //   "https://i.ibb.co/Qbf6nvR/463.jpg",
  //   "https://i.ibb.co/5G434QR/227.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("136marketPlaceCollection.updateCollection===========> Done!")

  // // 137
  // await marketPlaceCollection.connect(wallets[137]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[137]).updateCollection(
  //   "ThriftWise",
  //   "Introducing ThriftWise, the innovative platform that transforms budgeting into an engaging game. ThriftWise not only helps you discover valuable tips and tricks for budgeting effectively but also turns your financial journey into a rewarding challenge. By gamifying the budgeting process and providing personalized scores based on your ability to save and budget over time, ThriftWise motivates you to achieve your financial goals while making the path to financial stability both fun and educational. Join ThriftWise today and level up your budgeting skills while securing your financial future!",
  //   "https://i.ibb.co/5nr9C1m/466.jpg",
  //   "https://i.ibb.co/5nr9C1m/466.jpg",
  //   "https://i.ibb.co/sRwTxr5/228.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("137marketPlaceCollection.updateCollection===========> Done!")

  // // 138
  // await marketPlaceCollection.connect(wallets[138]).addCollection(0, 0, 0, 0, 0, 0, "0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[138]).updateCollection(
  //   "ChargeHub",
  //   "Introducing ChargeHub: Your go-to platform for effortlessly discovering nearby EV charging stations. Whether you're an electric vehicle owner seeking a quick charge or just curious about the growing world of sustainable transportation, ChargeHub provides real-time information on the closest and most convenient charging points, making electric vehicle journeys accessible, efficient, and eco-friendly. Users can also list their homes as charging spots. Join our community and embark on a greener, smarter way to explore the world with ChargeHub.",
  //   "https://i.ibb.co/BzGYgWr/469.jpg",
  //   "https://i.ibb.co/BzGYgWr/469.jpg",
  //   "https://i.ibb.co/DVZ9bpp/229.jpg",
  //   "",
  //   "",
  //   "0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("138marketPlaceCollection.updateCollection===========> Done!")

  // // 139
  // await marketPlaceCollection.connect(wallets[139]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[139]).updateCollection(
  //   "SourceConnect",
  //   "Introducing SourceConnect, the premier platform that seamlessly connects reporters with their sources. In today's fast-paced journalism landscape, finding reliable and diverse sources can be a challenge, but SourceConnect streamlines this process, providing reporters with a vast network of credible experts, eyewitnesses, and interviewees across various fields and industries. With an easy-to-use interface and powerful search features, SourceConnect empowers journalists to access the information they need efficiently, ensuring that their stories are well-informed, insightful, and ready to captivate audiences worldwide. Say goodbye to source-hunting headaches and hello to the future of journalism with SourceConnect.",
  //   "https://i.ibb.co/R0nPdKN/473.jpg",
  //   "https://i.ibb.co/R0nPdKN/473.jpg",
  //   "https://i.ibb.co/L9Br6k0/230.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("139marketPlaceCollection.updateCollection===========> Done!")

  // // 140
  // await marketPlaceCollection.connect(wallets[140]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[140]).updateCollection(
  //   "ConsentGuard",
  //   "Introducing ConsentGuard: Our groundbreaking platform utilizes blockchain technology to securely record and verify users' explicit and voluntary consent for intimate encounters, fostering a safer and more accountable environment. By digitally timestamping and encrypting consent records, ConsentGuard seeks to prevent false rape accusations while empowering individuals to make informed decisions about their interactions. With privacy and security at the forefront, we aim to redefine the boundaries of consent in intimate relationships, promoting trust and transparency in today's dating landscape.",
  //   "https://i.ibb.co/gJqYQV7/141.jpg",
  //   "https://i.ibb.co/gJqYQV7/141.jpg",
  //   "https://i.ibb.co/5hZTrBZ/231.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("140marketPlaceCollection.updateCollection===========> Done!")

  // // 141
  // await marketPlaceCollection.connect(wallets[141]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[141]).updateCollection(
  //   "CoReview",
  //   "Introducing CoReview, the confidential workplace voting platform that empowers employees to express their opinions, feedback, and votes on coworker and manager performance anonymously. We understand the importance of fostering open communication and a healthy work environment. With CoReview, you can provide constructive input, recognize exceptional colleagues, or flag concerns without the fear of repercussions. Join us in shaping a more transparent and accountable workplace culture today. Your voice matters, and at CoReview, it's heard.",
  //   "https://i.ibb.co/NCVnmnK/478.jpg",
  //   "https://i.ibb.co/NCVnmnK/478.jpg",
  //   "https://i.ibb.co/TvvmDnv/232.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("141marketPlaceCollection.updateCollection===========> Done!")

  // // 142
  // await marketPlaceCollection.connect(wallets[142]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[142]).updateCollection(
  //   "TaxMasters",
  //   "Introducing TaxMasters: Your Trusted Platform for Finding Expert Tax Professionals! TaxMasters connects individuals and businesses with a network of certified tax experts, making the process of finding a qualified professional to handle your tax needs effortless. Whether you require assistance with personal income taxes, business tax planning, or complex financial matters, our platform simplifies the search for experienced professionals who can provide expert guidance, ensuring that your taxes are handled efficiently, accurately, and in compliance with the latest regulations. Say goodbye to tax-related stress and hello to peace of mind with TaxMasters.",
  //   "https://i.ibb.co/sVcVJgS/481.jpg",
  //   "https://i.ibb.co/sVcVJgS/481.jpg",
  //   "https://i.ibb.co/yhxBQLY/233.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("142marketPlaceCollection.updateCollection===========> Done!")

  // // 143
  // await marketPlaceCollection.connect(wallets[143]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[143]).updateCollection(
  //   "HealVoyage",
  //   "Introducing HealVoyage: Your Path to Healing and Connection. HealVoyage offers a unique opportunity for individuals battling depression to embark on a transformative journey. Our platform connects you with foreign tribes around the world, providing the chance to immerse yourself in their rich cultures and healing practices. Through carefully curated programs spanning a few weeks, you can escape the daily grind and find solace in the wisdom of ancient traditions, forming deep connections with both the tribe and yourself. Discover the healing power of nature, community, and self-discovery with HealVoyage, where the path to recovery is intertwined with the exploration of foreign lands and cultures.",
  //   "https://i.ibb.co/pdbKhx6/484.jpg",
  //   "https://i.ibb.co/pdbKhx6/484.jpg",
  //   "https://i.ibb.co/BKMrjRm/234.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("143marketPlaceCollection.updateCollection===========> Done!")

  // // 144
  // await marketPlaceCollection.connect(wallets[144]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[144]).updateCollection(
  //   "Faucets",
  //   "Send free test tokens to users in exchange for IOUs which you can use to have free tokens sent to you in case you need them",
  //   "https://i.ibb.co/YRJLMpt/487.jpg",
  //   "https://i.ibb.co/YRJLMpt/487.jpg",
  //   "https://i.ibb.co/ZHzpFpB/235.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("144marketPlaceCollection.updateCollection===========> Done!")

  // // 145
  // await marketPlaceCollection.connect(wallets[145]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[145]).updateCollection(
  //   "FertilitySpecialists",
  //   "Introducing FertilitySpecialists: Your Path to Parenthood. Embarking on your journey to parenthood is deeply personal, and at FertilitySpecialists, we understand that every path is unique. Whether you're exploring modern or traditional fertility treatments or considering surrogacy, we're here to guide you. Our platform is your compass to discover highly qualified fertility specialists, both in modern medicine and alternative therapies, tailored to your needs. We're also dedicated to facilitating connections with experienced surrogates, ensuring comprehensive support as you take each step toward realizing your dream of becoming a parent. With FertilitySpecialists, you're not alone on this path; you're empowered with choices and compassionate care.",
  //   "https://i.ibb.co/m9rZ3x6/505.jpg",
  //   "https://i.ibb.co/m9rZ3x6/505.jpg",
  //   "https://i.ibb.co/sWRfbhZ/236.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("145marketPlaceCollection.updateCollection===========> Done!")

  // // 146
  // await marketPlaceCollection.connect(wallets[146]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[146]).updateCollection(
  //   "SalonSeeker",
  //   "Introducing SalonSeeker, your go-to platform for effortlessly discovering salons and booking experienced barbers and hairstylists in your vicinity. Whether you're in need of a quick trim, a fresh haircut, or a full salon experience, SalonSeeker connects you with a network of top-notch professionals in the beauty industry. Say goodbye to long waits and hello to convenience as you explore a range of salon services and personalized hair care options, all at your fingertips. Discover, book, and step into the salon chair with confidence, courtesy of SalonSeeker. Your perfect hair day is just a click away.",
  //   "https://i.ibb.co/bB2zBZN/507.jpg",
  //   "https://i.ibb.co/bB2zBZN/507.jpg",
  //   "https://i.ibb.co/rsPyb2F/237.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("146marketPlaceCollection.updateCollection===========> Done!")

  // // 147
  // await marketPlaceCollection.connect(wallets[147]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[147]).updateCollection(
  //   "Relaxify",
  //   "Introducing Relaxify: Your Ultimate Destination for Massages On-Demand! Whether you're in search of a nearby massage center for some self-pampering or craving a soothing massage delivered right to your doorstep, Relaxify has you covered. Our user-friendly platform connects you with a network of certified massage therapists and top-rated spas in your area, allowing you to effortlessly book appointments or request a skilled masseuse to bring the relaxation to your home. With a few taps, you can schedule the perfect massage tailored to your preferences, ensuring that tranquility and rejuvenation are always just a click away. Welcome to the future of stress relief and wellness with Relaxify!",
  //   "https://i.ibb.co/k1nbRLf/509.jpg",
  //   "https://i.ibb.co/k1nbRLf/509.jpg",
  //   "https://i.ibb.co/8z5NKck/238.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("147marketPlaceCollection.updateCollection===========> Done!")

  // // 148
  // await marketPlaceCollection.connect(wallets[148]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[148]).updateCollection(
  //   "ArtSupport",
  //   "Introducing ArtSupport: Your all-in-one creative platform, where artists, content creators, and innovators of all kinds can thrive. ArtSupport offers a dynamic space for creators to share their work, connect with their audiences, and receive direct support. Whether you're a musician, writer, visual artist, podcaster, or any type of creator, our platform empowers you to monetize your passion through subscriptions, exclusive content, and meaningful interactions with your dedicated supporters. Join ArtSupport today and turn your creativity into a sustainable income while fostering a vibrant community around your work.",
  //   "https://i.ibb.co/Db0TcM3/511.jpg",
  //   "https://i.ibb.co/Db0TcM3/511.jpg",
  //   "https://i.ibb.co/5Bhg9F5/239.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("148marketPlaceCollection.updateCollection===========> Done!")

  // // 149
  // await marketPlaceCollection.connect(wallets[149]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[149]).updateCollection(
  //   "Desh",
  //   "Introducing Desh -Decentralized Shipping-, the innovative platform that seamlessly connects users looking to ship items with fellow users who are traveling to the same destination. Whether you need to send a package across the country or simply want to take advantage of available luggage space, Desh simplifies the process by matching travelers with shipping needs. Say goodbye to shipping hassles and high costs; Desh harnesses the power of shared journeys to make shipping reliable, cost-effective, and eco-friendly. Join our community today and embark on a new era of collaborative shipping convenience.",
  //   "https://i.ibb.co/51rvjgk/513.jpg",
  //   "https://i.ibb.co/51rvjgk/513.jpg",
  //   "https://i.ibb.co/dgG19rS/240.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("149marketPlaceCollection.updateCollection===========> Done!")

  // // 150
  // await marketPlaceCollection.connect(wallets[150]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[150]).updateCollection(
  //   "CopReview",
  //   "Introducing CopReview: Empowering Transparency and Accountability in Law Enforcement. CopReview is a user-friendly platform that allows individuals to share photos of police officers along with location tags, offering reviews based on their experiences to foster transparency and accountability in law enforcement. Users can evaluate officers' professionalism, ensuring good conduct is acknowledged, while any concerns are addressed constructively. Positive reviews can even attract donations to their respective agencies, incentivizing excellence in policing and promoting trust between communities and law enforcement. Join us in shaping a fairer, safer, and more accountable future for law enforcement today with CopReview!",
  //   "https://i.ibb.co/NnQXg9q/515.jpg",
  //   "https://i.ibb.co/NnQXg9q/515.jpg",
  //   "https://i.ibb.co/WVSDKVK/241.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("150marketPlaceCollection.updateCollection===========> Done!")

  // // 151
  // await marketPlaceCollection.connect(wallets[151]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[151]).updateCollection(
  //   "GameReviews",
  //   "Introducing GameReviews, your gateway to the world of gaming feedback and community collaboration. Dive into a dynamic platform where gamers unite to discover and join specialized game review groups, offering comprehensive insights and reporting on the latest titles. Share your experiences, critique gameplay mechanics, and uncover hidden bugs while connecting with fellow gamers who share your passion for in-depth game analysis. GameReviews transforms game reviewing into a social adventure, providing an interactive space for both casual and professional gamers to elevate their gaming experiences and contribute to the improvement of their favorite titles. Join us today and become a vital part of the gaming evolution!",
  //   "https://i.ibb.co/8cYH7Wr/518.jpg",
  //   "https://i.ibb.co/8cYH7Wr/518.jpg",
  //   "https://i.ibb.co/xMtBGQW/242.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("151marketPlaceCollection.updateCollection===========> Done!")

  // // 152
  // await marketPlaceCollection.connect(wallets[152]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[152]).updateCollection(
  //   "ValueSolve",
  //   "Introducing ValueSolve, the innovative platform where you take the reins in addressing the issues that matter to you most from healthcare to mining. ValueSolve empowers users to create value pools focused on specific problems; as these pools gain sufficient funding, companies keen on solving these issues present proposals, including funding requirements. It's a democratic process where members of the pool cast their votes to determine which proposals receive funding, ensuring that the problems that resonate with you find effective solutions through community-driven support. Join ValueSolve today to be the catalyst for positive change in the areas that align with your concerns.",
  //   "https://i.ibb.co/0GhP4zj/522.jpg",
  //   "https://i.ibb.co/0GhP4zj/522.jpg",
  //   "https://i.ibb.co/vvNBkvM/243.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("152marketPlaceCollection.updateCollection===========> Done!")

  // // 153
  // await marketPlaceCollection.connect(wallets[153]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[153]).updateCollection(
  //   "HealthConnect",
  //   "Introducing HealthConnect, the premier platform revolutionizing healthcare access. With HealthConnect, you can effortlessly find and book appointments with top-rated healthcare providers, from general doctors and dentists to surgeons and eye specialists, all in one place. Say goodbye to long wait times and frustrating scheduling hassles; our user-friendly interface and extensive network of trusted professionals ensure that you receive the care you need, precisely when you need it. Prioritize your health with HealthConnect, where booking appointments is as easy as a few clicks.",
  //   "https://i.ibb.co/5krS3jQ/376.jpg",
  //   "https://i.ibb.co/5krS3jQ/376.jpg",
  //   "https://i.ibb.co/xMwt58W/25-2.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("153marketPlaceCollection.updateCollection===========> Done!")

  // // 154
  // await marketPlaceCollection.connect(wallets[154]).addCollection(0, 0, 0, 0, 0, 0, "0x77B0e504900997eE937c0C10E027236aeCD386EF", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[154]).updateCollection(
  //   "AquaWells",
  //   "Introducing AquaWells, the innovative platform that empowers communities to discover nearby wells for accessible water sources. Whether you seek a free water supply, are willing to reciprocate with an IOU, or prefer a convenient fee-based service, AquaWells connects you with wells in your vicinity. Our user-friendly app provides real-time well locations, water quality insights, and payment options, ensuring everyone has easy access to clean, life-sustaining water while fostering community cooperation and resource sharing. Join AquaWells today to make finding water a seamless experience for all.",
  //   "https://i.ibb.co/4Fm4L0P/374.jpg",
  //   "https://i.ibb.co/4Fm4L0P/374.jpg",
  //   "https://i.ibb.co/Pj8PpKK/302-2.jpg",
  //   "",
  //   "",
  //   "0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("154marketPlaceCollection.updateCollection===========> Done!")

  //   // 155
  //   await marketPlaceCollection.connect(wallets[155]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[155]).updateCollection(
  //     "LifelineRide",
  //     "Introducing LifelineRide: Your On-Demand Emergency Transport Platform! When every second counts, LifelineRide is here to provide swift, reliable, and lifesaving transportation to hospitals. Our platform seamlessly connects users with a network of private ambulances and trusted drivers, ensuring immediate assistance during critical moments. Whether you require medical attention or need to reach the hospital urgently, LifelineRide offers a lifeline to safety. With just a few taps on your smartphone, you can request a ride, track your vehicle in real-time, and receive the essential care you or your loved ones deserve. Your safety is our top priority, making LifelineRide the go-to solution for emergency transport when it matters most.",
  //     "https://i.ibb.co/59q4MZN/372.jpg",
  //     "https://i.ibb.co/59q4MZN/372.jpg",
  //     "https://i.ibb.co/v1XTLCG/304-2.jpg",
  //     "",
  //     "",
  //     "0xdE46100D142FD66f50697dF99c296796100983de",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("155marketPlaceCollection.updateCollection===========> Done!")

  //     // 156
  // await marketPlaceCollection.connect(wallets[156]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[156]).updateCollection(
  //   "CareLink",
  //   "Introducing CareLink, a revolutionary platform where users can seamlessly request caregivers for their elderly or handicapped loved ones. Whether it's companionship, medical assistance, or specialized care, CareLink connects individuals with compassionate caregivers who can provide the support and attention needed. What sets CareLink apart is its unique IOU system, where users can offer IOUs for caregiving services that can be traded within our dedicated NFT section, ensuring flexibility and trust within our community. Join CareLink today and experience a caring community dedicated to enhancing the lives of those in need.",
  //   "https://i.ibb.co/1XynScR/370.jpg",
  //   "https://i.ibb.co/1XynScR/370.jpg",
  //   "https://i.ibb.co/cQ3qrST/306-2.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("156marketPlaceCollection.updateCollection===========> Done!")

  //   // 157
  //   await marketPlaceCollection.connect(wallets[157]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[157]).updateCollection(
  //     "FundEdX",
  //     "Introducing FundEdX, the innovative platform revolutionizing the world of education and research funding. FundEdX provides a unique opportunity for passionate individuals, investors, and institutions to discover groundbreaking school and university projects, supporting them in exchange for shared or total intellectual property rights over the resulting content. Scientists and researchers can utilize FundEdX to offer paywalls that grant exclusive access to real-time documentation of their findings and ongoing research, all while securing the necessary funding to drive their projects forward. Join us at FundEdX and be part of the future of education and research, where knowledge knows no bounds, and collaboration paves the way for groundbreaking discoveries.",
  //     "https://i.ibb.co/ngNnMdB/368.jpg",
  //     "https://i.ibb.co/ngNnMdB/368.jpg",
  //     "https://i.ibb.co/CQxbvnm/308-2.jpg",
  //     "",
  //     "",
  //     "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("157marketPlaceCollection.updateCollection===========> Done!")

  //     // 158
  // await marketPlaceCollection.connect(wallets[158]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[158]).updateCollection(
  //   "TechSupport",
  //   "Introducing TechSupport: Your gateway to streamlined tech solutions. TechSupport is your go-to platform, connecting businesses and users across diverse industries, including the restaurant sector, with on-demand tech support services. Whether you seek subscription-based assistance for ongoing tech needs or pay-as-you-go solutions for immediate support, TechSupport offers a curated selection of channels to cater to your unique requirements. Say goodbye to tech-related woes and hello to efficient, accessible, and hassle-free support, all at your fingertips with TechSupport.",
  //   "https://i.ibb.co/d6htQzw/366.jpg",
  //   "https://i.ibb.co/d6htQzw/366.jpg",
  //   "https://i.ibb.co/QkQBFRT/310-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("158marketPlaceCollection.updateCollection===========> Done!")

  //   // 159
  //   await marketPlaceCollection.connect(wallets[159]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[159]).updateCollection(
  //     "CodeReviews",
  //     "Introducing CodeReviews, your go-to platform for code scrutiny and improvement. Whether you're a developer seeking constructive feedback or a business in need of secure and confidential code audits, CodeReviews connects you with a network of trusted auditors. Exchange IOUs or monetary rewards for comprehensive code reviews, and if confidentiality is paramount, enlist the expertise of auditors with bounties or badges to ensure your code remains confidential and your software reaches its full potential. Join CodeReviews today and elevate your code quality with the help of a reliable and skilled community of reviewers.",
  //     "https://i.ibb.co/ssybqYz/364.jpg",
  //     "https://i.ibb.co/ssybqYz/364.jpg",
  //     "https://i.ibb.co/4ZyCPxR/312-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("159marketPlaceCollection.updateCollection===========> Done!")

  //     // 160
  // await marketPlaceCollection.connect(wallets[160]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[160]).updateCollection(
  //   "LotteryWin",
  //   "Introducing LotteryWin, your passport to a world of unprecedented lottery opportunities. LotteryWin is not just a platform; it's a global community where members pool their resources, contribute towards lottery ticket purchases worldwide, and elect trustworthy representatives to acquire those tickets. Imagine having a shot at winning lotteries from every corner of the globe. But that's not all; LotteryWin goes beyond that by providing a unique resale market for lottery tickets, allowing members to trade and participate in lotteries they might have missed otherwise. It's a game-changer in the world of lotteries, opening doors to a realm of possibilities like never before. Join LotteryWin today and amplify your chances of hitting the jackpot.",
  //   "https://i.ibb.co/1rQTcpY/524.jpg",
  //   "https://i.ibb.co/1rQTcpY/524.jpg",
  //   "https://i.ibb.co/Khhk0wg/244.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("160marketPlaceCollection.updateCollection===========> Done!")

  // // 161
  // await marketPlaceCollection.connect(wallets[161]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[161]).updateCollection(
  //   "PitchPro",
  //   "Introducing PitchPro, your go-to platform for discovering and connecting with seasoned professional pitchers to elevate your pitch gigs. Whether you're organizing an event, seeking investment, or pitching your groundbreaking idea, PitchPro simplifies the process. Our curated network of accomplished pitch experts spans industries and expertise levels, ensuring you find the perfect match for your pitching needs. Say goodbye to generic pitches, and welcome tailored, impactful presentations by connecting with the pros. Join PitchPro today to transform your pitch gigs into memorable successes.",
  //   "https://i.ibb.co/1vXrbsK/516.jpg",
  //   "https://i.ibb.co/1vXrbsK/516.jpg",
  //   "https://i.ibb.co/WVSDKVK/241.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("161marketPlaceCollection.updateCollection===========> Done!")

  // // 162
  // await marketPlaceCollection.connect(wallets[162]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[162]).updateCollection(
  //   "AutoAccelerate",
  //   "Introducing AutoAccelerate, the innovative platform where startups present their visions through structured pitches, answering crucial questions about their companies. Here, the entrepreneurial spirit meets collective decision-making. When a ValuePool member encounters an intriguing pitch, they initiate a proposal within the ValuePool, enabling fellow members to cast their votes on whether to embrace the startup for the upcoming batch or not. AutoAccelerate revolutionizes the way startups connect with communities, fostering collaboration, and propelling innovative ventures towards success through a dynamic and inclusive process.",
  //   "https://i.ibb.co/MZkHgw6/519.jpg",
  //   "https://i.ibb.co/MZkHgw6/519.jpg",
  //   "https://i.ibb.co/xMtBGQW/242.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("162marketPlaceCollection.updateCollection===========> Done!")

  // // 163
  // await marketPlaceCollection.connect(wallets[163]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[163]).updateCollection(
  //   "FriendsNFamily",
  //   "Introducing FriendsNFamily, the innovative platform where startups and entrepreneurial family members come together to create ValuePools, pooling resources and support for family-led businesses. At FriendsNFamily, decisions are made democratically through proposal votes, empowering every member to have a say in the success of their family ventures. It's the ultimate collaborative space where the power of family bonds meets entrepreneurial aspirations, driving the growth of family businesses through collective effort and shared decision-making.",
  //   "https://i.ibb.co/M10YSws/361.jpg",
  //   "https://i.ibb.co/M10YSws/361.jpg",
  //   "https://i.ibb.co/PYL3gZg/313-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("163marketPlaceCollection.updateCollection===========> Done!")

  // // 164
  // await marketPlaceCollection.connect(wallets[164]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[164]).updateCollection(
  //   "CoworkerFunds",
  //   "Introducing CoworkerFunds, the innovative platform where colleagues unite within ValuePools to collectively accumulate resources, nurturing the growth of businesses initiated by their coworkers. Through a seamless process of proposal votes, CoworkerFunds empowers users to collaboratively support and invest in the entrepreneurial ventures of their fellow coworkers, fostering a dynamic and mutually beneficial ecosystem within the workplace.",
  //   "https://i.ibb.co/sPHBLRx/359.jpg",
  //   "https://i.ibb.co/sPHBLRx/359.jpg",
  //   "https://i.ibb.co/c6wR5Y8/316-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("164marketPlaceCollection.updateCollection===========> Done!")

  // // 165
  // await marketPlaceCollection.connect(wallets[165]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[165]).updateCollection(
  //   "SchoolFunds",
  //   "Introducing SchoolFunds, the innovative platform that unites school or college communities in a shared mission to foster entrepreneurship among their own members. Here, users come together to participate in ValuePools, collaborative financial resources designed to empower fellow students and alumni who are launching their own businesses. Through a transparent and democratic process of proposal votes, SchoolFunds ensures that every member has a say in supporting and shaping the entrepreneurial ventures within their school ecosystem, fostering a dynamic environment of innovation, support, and collective success.",
  //   "https://i.ibb.co/D1gfXVX/357.jpg",
  //   "https://i.ibb.co/D1gfXVX/357.jpg",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("165marketPlaceCollection.updateCollection===========> Done!")

  //   // 166
  //   await marketPlaceCollection.connect(wallets[166]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[166]).updateCollection(
  //     "TownFunds",
  //     "Introducing TownFunds, the innovative platform that fosters local economic growth and community support. TownFunds empowers users to become active participants in their town's prosperity by joining ValuePools, collaborative financial resources dedicated to nurturing and funding businesses initiated by fellow townspeople. Through a transparent and democratic process of proposal votes, community members collectively decide which local ventures to support, creating a thriving ecosystem where entrepreneurship flourishes, and towns thrive together. Join TownFunds today and be part of the movement that strengthens communities one entrepreneurial idea at a time.",
  //     "https://i.ibb.co/RQFG3ZS/354.jpg",
  //     "https://i.ibb.co/RQFG3ZS/354.jpg",
  //     "https://i.ibb.co/sWGRP6j/202.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("166marketPlaceCollection.updateCollection===========> Done!")

  //     // 167
  // await marketPlaceCollection.connect(wallets[167]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[167]).updateCollection(
  //   "DiasporaFunds",
  //   "Introducing DiasporaFunds: DiasporaFunds is a groundbreaking platform designed to foster economic empowerment and collaboration within diaspora communities worldwide. Here, users come together to participate in ValuePools, collectively pooling their resources to provide crucial support for entrepreneurial endeavors initiated by fellow diaspora members. Through a transparent and democratic process of proposal votes, the community decides which projects to back, ensuring that each investment is driven by the shared vision and aspirations of the diaspora. DiasporaFunds represents a powerful force for economic growth, solidarity, and the realization of diaspora-driven initiatives across the globe.",
  //   "https://i.ibb.co/ZJ9GS2w/352.jpg",
  //   "https://i.ibb.co/ZJ9GS2w/352.jpg",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("167marketPlaceCollection.updateCollection===========> Done!")

  //   // 168
  //   await marketPlaceCollection.connect(wallets[168]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[168]).updateCollection(
  //     "HOA",
  //     "Introducing HOA, the groundbreaking platform that empowers homeowners by enabling them to join value pools associated with their homeowner associations. HOA provides users with a secure and anonymous environment to vote on essential matters, including decisions related to fines and neighborhood concerns. By fostering a transparent and collaborative community, HOA ensures that homeowners have a direct say in shaping the future of their neighborhoods while preserving their privacy and promoting collective well-being. Join HOA today and be an active participant in the decisions that matter most to your community.",
  //     "https://i.ibb.co/986FMVJ/350.jpg",
  //     "https://i.ibb.co/986FMVJ/350.jpg",
  //     "https://i.ibb.co/Smr3X1b/204.jpg",
  //     "",
  //     "",
  //     "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("168marketPlaceCollection.updateCollection===========> Done!")

  //     // 169
  // await marketPlaceCollection.connect(wallets[169]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[169]).updateCollection(
  //   "FixIT",
  //   "Introducing FixIT: FixIT is your go-to platform for aspiring mechanics, electricians, carpenters, plumbers, and more. Here, users can seamlessly discover items in need of repair, access comprehensive repair courses, watch instructional videos of others fixing similar items, and even get hands-on by receiving the actual item from its owner. You'll document every step of the repair process via video, ensuring a complete learning experience, and then send the item back, all while gaining invaluable repair skills and helping people reclaim their treasured possessions. Join FixIT today and be part of a thriving community dedicated to mastering the art of fixing and making a real difference, one repair at a time.",
  //   "https://i.ibb.co/S0DHC0S/348.jpg",
  //   "https://i.ibb.co/S0DHC0S/348.jpg",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("169marketPlaceCollection.updateCollection===========> Done!")

  //   // 170
  //   await marketPlaceCollection.connect(wallets[170]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[170]).updateCollection(
  //     "OfflineAds",
  //     "Introducing OfflineAds, the ultimate platform for all your billboard advertising needs. Whether you're an advertiser looking for prime ad space or a business owner seeking to monetize your property, OfflineAds has you covered. Discover and purchase billboards in any location, from prominent buildings to bustling streets or even vehicles. Our comprehensive marketplace connects advertisers with suitable billboards and offers professional installation services, making outdoor advertising more accessible and efficient than ever before. Join OfflineAds and unlock a world of advertising opportunities today!",
  //     "https://i.ibb.co/M7tsH7j/346.jpg",
  //     "https://i.ibb.co/M7tsH7j/346.jpg",
  //     "https://i.ibb.co/PGS08rk/206.jpg",
  //     "",
  //     "",
  //     "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("170marketPlaceCollection.updateCollection===========> Done!")

  //     // 171
  // await marketPlaceCollection.connect(wallets[171]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[171]).updateCollection(
  //   "ShareGoods",
  //   "Introducing ShareGoods, the innovative platform where users can freely borrow a wide range of items, from tools and electronics to sports equipment and household goods, for a specified duration, fostering a community of sharing, sustainability, and resource optimization. Whether you need that special tool for a DIY project or camping gear for a weekend adventure, ShareGoods connects individuals within your community, promoting a culture of lending and borrowing while reducing waste and promoting sustainability. Join us in redefining ownership and sharing resources for a brighter, more collaborative future.",
  //   "https://i.ibb.co/FstpBJ9/344.jpg",
  //   "https://i.ibb.co/FstpBJ9/344.jpg",
  //   "https://i.ibb.co/SxCtmx5/207.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("171marketPlaceCollection.updateCollection===========> Done!")

  // // 172
  // await marketPlaceCollection.connect(wallets[172]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[172]).updateCollection(
  //   "RentEase",
  //   "Introducing RentEase: Your Go-To Platform for Hassle-Free Rentals! RentEase offers a seamless solution for users to rent a wide range of items for any desired duration, whether it's a day, a week, or longer. From tools and electronics to outdoor gear and party supplies, RentEase connects individuals looking to rent with those willing to lend their items, creating a convenient and cost-effective sharing economy. With secure transactions, user reviews, and an extensive inventory, RentEase makes renting and lending items a breeze, saving you both time and money while promoting sustainability through the efficient use of resources.",
  //   "https://i.ibb.co/f2Zr9DP/342.jpg",
  //   "https://i.ibb.co/f2Zr9DP/342.jpg",
  //   "https://i.ibb.co/D7m32qZ/208.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("172marketPlaceCollection.updateCollection===========> Done!")

  // // 173
  // await marketPlaceCollection.connect(wallets[173]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[173]).updateCollection(
  //   "DealHub",
  //   "Introducing DealHub, your ultimate destination for unbeatable discounts and exclusive offers. Just like Groupon, DealHub brings you the best local deals, from dining and entertainment to wellness and travel experiences. Discover exciting deals, save money, and explore your city like never before. Whether you're planning a night out, a weekend getaway, or simply looking for everyday savings, DealHub has you covered, making every experience more affordable and enjoyable. Join DealHub today and unlock a world of incredible deals right at your fingertips.",
  //   "https://i.ibb.co/HgxXz6G/340.jpg",
  //   "https://i.ibb.co/HgxXz6G/340.jpg",
  //   "https://i.ibb.co/RvSSybP/209.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("173marketPlaceCollection.updateCollection===========> Done!")

  // // 174
  // await marketPlaceCollection.connect(wallets[174]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[174]).updateCollection(
  //   "LenderPools",
  //   "Introducing LenderPools, the innovative platform revolutionizing borrowing by bringing individuals together to form ValuePools, where members collectively borrow funds. In this dynamic ecosystem, the more funds borrowers within a ValuePool successfully reimburse, the greater their access to future borrowed funds within the pool, fostering a mutually beneficial lending environment that empowers members to achieve their financial goals collectively.",
  //   "https://i.ibb.co/gJs7Z2y/338.jpg",
  //   "https://i.ibb.co/gJs7Z2y/338.jpg",
  //   "https://i.ibb.co/sv7nQ0F/210.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("174marketPlaceCollection.updateCollection===========> Done!")

  // // 175
  // await marketPlaceCollection.connect(wallets[175]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[175]).updateCollection(
  //   "AutoGleam",
  //   "Introducing AutoGleam: Your One-Stop Solution for Vehicle Interior Cleaning Specialists! AutoGleam is the ultimate platform for connecting you with top-tier companies specializing in the meticulous cleaning of vehicle interiors, regardless of size or type. Whether you need your car, bus, plane, or train interior to shine, our curated network of experts is at your service. Our platform simplifies the process, allowing you to discover, compare, and book cleaning services with ease. Experience a new level of cleanliness and hygiene for your vehicles with AutoGleam, where every interior sparkles like new.",
  //   "https://i.ibb.co/7SqRMcX/335.jpg",
  //   "https://i.ibb.co/7SqRMcX/335.jpg",
  //   "https://i.ibb.co/Pw5GB8c/211.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("175marketPlaceCollection.updateCollection===========> Done!")

  // // 176
  // await marketPlaceCollection.connect(wallets[176]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[176]).updateCollection(
  //   "Amegle",
  //   "Meet strangers and have fun interactions with them on Paychat video chat and post it on the platform as well as on any other video platform. Users can buy tickets to it to participate in the associated game. A video ticket's score= video weight/total videos weight. Video weight= ticket weight * number of likes of interaction on the platform where it got the most likes. Ticket weight= number of days since the ticket was purchased",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/ZKp73zV/212.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("176marketPlaceCollection.updateCollection===========> Done!")

  // // 177
  // await marketPlaceCollection.connect(wallets[177]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[177]).updateCollection(
  //   "MarketPrime",
  //   "Introducing MarketPrime, a cutting-edge e-commerce platform that offers an extensive range of products, lightning-fast deliveries, and a seamless shopping experience. With a user-friendly interface, a vast network of trusted sellers, and a commitment to customer satisfaction, MarketPrime is your go-to destination for everything from electronics and fashion to home goods and beyond. Discover a world of convenience, reliability, and endless choices, all under one digital roof at MarketPrime, where shopping meets excellence.",
  //   "https://i.ibb.co/VxPkw8x/496.jpg",
  //   "https://i.ibb.co/VxPkw8x/496.jpg",
  //   "https://i.ibb.co/vj7vcSh/213.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("177marketPlaceCollection.updateCollection===========> Done!")

  // // 178
  // await marketPlaceCollection.connect(wallets[178]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[178]).updateCollection(
  //   "Heaven",
  //   "Memorialization platform where you can share memories of loved ones so that people that may have known them can leave a review with their Paychat handle, their own memories of the person along with possible pictures or videos. This will help connect all the people that knew your loved ones to you and to each other.",
  //   "https://i.ibb.co/d26cRSR/494.jpg",
  //   "https://i.ibb.co/d26cRSR/494.jpg",
  //   "https://i.ibb.co/0Q7YJBC/214.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("178marketPlaceCollection.updateCollection===========> Done!")

  // // 179
  // await marketPlaceCollection.connect(wallets[179]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[179]).updateCollection(
  //   "SwiftCart",
  //   "Introducing SwiftCart's exclusive platform, designed for delivery agents of our partner channels. With SwiftCart, delivery agents are granted a unique key to unlock partner stores, enabling seamless self-checkout for ordered items. Our innovative solution streamlines the delivery process, empowering agents to efficiently collect and dispatch orders, ensuring swift and secure deliveries while enhancing overall customer satisfaction.",
  //   "https://i.ibb.co/28RKFKc/331.jpg",
  //   "https://i.ibb.co/28RKFKc/331.jpg",
  //   "https://i.ibb.co/YX89X0R/215.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("179marketPlaceCollection.updateCollection===========> Done!")

  // // 180
  // await marketPlaceCollection.connect(wallets[180]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[180]).updateCollection(
  //   "ShopEase",
  //   "Welcome to ShopEase, the innovative platform that simplifies your shopping experience by helping you discover stores that offer convenient self-checkout options for their members. Say goodbye to long lines and waiting at the counter. With ShopEase, you can easily locate and explore a variety of stores, from supermarkets to retail outlets, where you can breeze through your shopping with self-checkout, saving you time and providing a hassle-free way to shop. Download the app today and unlock a world of seamless shopping at your fingertips.",
  //   "https://i.ibb.co/tPvcZyT/329.jpg",
  //   "https://i.ibb.co/tPvcZyT/329.jpg",
  //   "https://i.ibb.co/w7DTrnC/216.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("180marketPlaceCollection.updateCollection===========> Done!")

  // // 181
  // await marketPlaceCollection.connect(wallets[181]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[181]).updateCollection(
  //   "TastySurprise",
  //   "Introducing TastySurprise, the innovative food discovery platform that adds a thrilling twist to your dining experience. With TastySurprise, you simply choose a cuisine or type of meal, and our network of talented local chefs and food artisans takes care of the rest. No more decision fatigue or endless scrolling through menus – let our culinary experts surprise you with their finest creations, delivering a delectable surprise meal straight to your doorstep. It's a delightful culinary adventure every time you order, making every meal an exciting and mouthwatering surprise. Embrace the unexpected with TastySurprise today!",
  //   "https://i.ibb.co/RcWFFwR/327.jpg",
  //   "https://i.ibb.co/RcWFFwR/327.jpg",
  //   "https://i.ibb.co/mRryjPD/217.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("181marketPlaceCollection.updateCollection===========> Done!")

  // // 182
  // await marketPlaceCollection.connect(wallets[182]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[182]).updateCollection(
  //   "GiftCrafter",
  //   "Introducing GiftCrafter, the ultimate gifting subscription platform that empowers you to effortlessly send joy-packed surprises to your loved ones or even treat yourself, all with just a few clicks. With GiftCrafter, you can choose from an array of personalized options, from gourmet treats to curated gift boxes, and set the frequency of deliveries to perfectly suit your needs, ensuring that thoughtful gifts arrive at your doorstep or that of your chosen recipients like clockwork, making every month or year filled with heartwarming surprises. You can even book consultations with gift experts to figure out the appropriate gift to give. Say goodbye to gift-giving stress and hello to the convenience of GiftCrafter, where thoughtful gifting is made easy, ensuring smiles and appreciation abound.",
  //   "https://i.ibb.co/m5qT51p/325.jpg",
  //   "https://i.ibb.co/m5qT51p/325.jpg",
  //   "https://i.ibb.co/D1Q5Zbk/218.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("182marketPlaceCollection.updateCollection===========> Done!")

  // // 183
  // await marketPlaceCollection.connect(wallets[183]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[183]).updateCollection(
  //   "GreenBloom",
  //   "Welcome to GreenBloom, your go-to platform for ordering trees, flowers, and indoor plants to enhance your surroundings. Whether you're looking to transform your home into a lush oasis, beautify your office space, or contribute to a greener planet, GreenBloom has you covered. With an extensive selection of botanical wonders and expert guidance on planting and care, we're here to make every space a bit more vibrant, one plant at a time. Join us in nurturing nature's beauty, delivered right to your doorstep.",
  //   "https://i.ibb.co/NCmqtz4/323.jpg",
  //   "https://i.ibb.co/NCmqtz4/323.jpg",
  //   "https://i.ibb.co/GT87pBX/219.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("183marketPlaceCollection.updateCollection===========> Done!")

  // // 184
  // await marketPlaceCollection.connect(wallets[184]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[184]).updateCollection(
  //   "AgriFeed",
  //   "Introducing AgriFeed: Your One-Stop Platform for Discovering, Buying, and Subscribing to Trusted Agricultural Feed Suppliers. AgriFeed revolutionizes the way farmers and livestock owners source feed, offering a comprehensive digital marketplace where users can effortlessly explore, purchase, or subscribe to a wide range of high-quality agricultural feed products. From grains to supplements, our platform connects you with reliable suppliers, providing transparency, convenience, and competitive pricing, ultimately ensuring the health and productivity of your agricultural endeavors. AgriFeed also enables you to find and book farmers/fishermen to work for you as contractors. Join AgriFeed today and streamline your feed procurement process while nurturing the growth of your agricultural business.",
  //   "https://i.ibb.co/gjGqhGc/321.jpg",
  //   "https://i.ibb.co/gjGqhGc/321.jpg",
  //   "https://i.ibb.co/KD398kB/220.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("184marketPlaceCollection.updateCollection===========> Done!")

  // // 185
  // await marketPlaceCollection.connect(wallets[185]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[185]).updateCollection(
  //   "GoShare",
  //   "Introducing GoShare, the innovative platform that efficiently connects commuters and travelers heading in the same direction, ensuring that empty bus, car, and bike seats are optimally utilized. Whether you're a daily commuter looking to share your ride and reduce costs or an eco-conscious traveler seeking a sustainable way to journey, GoShare's smart matching system brings convenience, affordability, and environmental consciousness together in one seamless experience. Say goodbye to empty seats and hello to shared rides with GoShare, your go-to platform for collaborative transportation solutions.",
  //   "https://i.ibb.co/Lnpcxhm/319.jpg",
  //   "https://i.ibb.co/Lnpcxhm/319.jpg",
  //   "https://i.ibb.co/bs9B2mg/221.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("185marketPlaceCollection.updateCollection===========> Done!")

  // // 186
  // await marketPlaceCollection.connect(wallets[186]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[186]).updateCollection(
  //   "StayShare",
  //   "Introducing StayShare, a revolutionary platform that transforms your hospitality into a valuable currency. With StayShare, you can earn IOUs by offering your home for accommodation, whether you're there or not. These IOUs can then be used to request stays at other users' places, creating a unique network of trust and shared experiences. It's a win-win for travelers and hosts, where your extra space becomes a gateway to new adventures, and your wanderlust knows no bounds. Join StayShare today and unlock a world of limitless, reciprocal hospitality.",
  //   "https://i.ibb.co/Z1Cqvj8/317.jpg",
  //   "https://i.ibb.co/Z1Cqvj8/317.jpg",
  //   "https://i.ibb.co/HFrZnbw/222.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("186marketPlaceCollection.updateCollection===========> Done!")

  // // 187
  // await marketPlaceCollection.connect(wallets[187]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[187]).updateCollection(
  //   "TuneBoost",
  //   "Introducing TuneBoost: Your Ultimate Music Promotion Ecosystem! TuneBoost is the innovative platform where musicians can effortlessly discover and collaborate with ValuePools of passionate users who are eager to promote their music on various social media platforms in exchange for the artist sponsoring their ValuePool. Whether you're an aspiring artist seeking exposure or an established musician looking to expand your reach, TuneBoost is your gateway to a supportive community that believes in the power of music and mutual support. Join TuneBoost today to amplify your music's presence and engage with a network of dedicated supporters who will help you grow your fanbase while you contribute to their ValuePools in return.",
  //   "https://i.ibb.co/WgVbC7C/315.jpg",
  //   "https://i.ibb.co/WgVbC7C/315.jpg",
  //   "https://i.ibb.co/44SXFQM/223.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("187marketPlaceCollection.updateCollection===========> Done!")

  // // 188
  // await marketPlaceCollection.connect(wallets[188]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[188]).updateCollection(
  //   "PodPromote",
  //   "Introducing PodPromote, the groundbreaking platform designed to supercharge your podcast's reach through collaborative ValuePools. With PodPromote, you'll discover communities of enthusiastic users eager to promote your podcast across their social media networks in exchange for you sponsoring their ValuePool. It's a win-win partnership that amplifies your podcast's visibility while fostering a network of engaged supporters, all seamlessly orchestrated on our user-friendly platform. Join PodPromote today and unlock the true potential of your podcast's growth through the power of community-driven promotion.",
  //   "https://i.ibb.co/x3Kc3Yz/313.jpg",
  //   "https://i.ibb.co/x3Kc3Yz/313.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("188marketPlaceCollection.updateCollection===========> Done!")

  // // 189
  // await marketPlaceCollection.connect(wallets[189]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[189]).updateCollection(
  //   "TalenTrack",
  //   "Introducing TalenTrack, the innovative platform that provides you with exclusive access to profiles of top-notch candidates currently navigating the interview process with various companies. TalenTrack empowers you to proactively engage with these candidates, whether to make enticing counter offers to secure top talent, initiate interview processes, or streamline your hiring strategies. Stay ahead in the competitive hiring landscape with TalenTrack, where you gain an invaluable edge in connecting with candidates who are in high demand and at the brink of making career-defining decisions.",
  //   "https://i.ibb.co/VQSjyCL/491.jpg",
  //   "https://i.ibb.co/VQSjyCL/491.jpg",
  //   "https://i.ibb.co/0XTcvxJ/226.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("189marketPlaceCollection.updateCollection===========> Done!")

  // // 190
  // await marketPlaceCollection.connect(wallets[190]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[190]).updateCollection(
  //   "RecruitAssured",
  //   "Introducing RecruitAssured, where the recruitment process goes beyond the resume and interviews. At RecruitAssured, we believe in giving job seekers a genuine preview of their potential workplace. When you apply for a job through our platform, you have the unique opportunity to work within the company for a minimum of one week, immersing yourself in the culture, tasks, and team dynamics. If both you and the company find it to be a perfect fit, you'll receive a formal employment offer, ensuring that your career move is a confident and informed decision. Say goodbye to traditional hiring guesswork; with RecruitAssured, your next job is more than just a job – it's a tailored employment experience.",
  //   "https://i.ibb.co/kSjvBKh/311.jpg",
  //   "https://i.ibb.co/kSjvBKh/311.jpg",
  //   "https://i.ibb.co/5G434QR/227.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("190marketPlaceCollection.updateCollection===========> Done!")

  // // 191
  // await marketPlaceCollection.connect(wallets[191]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[191]).updateCollection(
  //   "TalentHub",
  //   "Introducing TalentHub, your one-stop platform for connecting with top freelance talent and skilled professionals across a wide range of industries. Whether you need web development, graphic design, content writing, or any other expertise, TalentHub simplifies the process of finding, hiring, and collaborating with the perfect freelancers for your projects. Our user-friendly interface, robust talent pool, and secure payment system ensure a seamless experience, making it easier than ever to bring your ideas to life while working with the best in the business. Join TalentHub today and elevate your projects with unmatched expertise and efficiency.",
  //   "https://i.ibb.co/8X7S3pV/489.jpg",
  //   "https://i.ibb.co/8X7S3pV/489.jpg",
  //   "https://i.ibb.co/sRwTxr5/228.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("191marketPlaceCollection.updateCollection===========> Done!")

  // // 192
  // await marketPlaceCollection.connect(wallets[192]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[192]).updateCollection(
  //   "CareerLeap",
  //   "Introducing CareerLeap, the groundbreaking platform dedicated to connecting individuals with no or low qualifications, diplomas, or those who may have dropped out of college, with companies that offer transformative career opportunities. We understand that traditional paths aren't for everyone, and CareerLeap is here to bridge the gap by showcasing a diverse range of companies committed to providing training, mentorship, and a clear path to meaningful and prosperous careers. Whether you're seeking a fresh start or a chance to upskill, CareerLeap empowers you to discover, apply, and embark on a journey towards a brighter professional future. Join us today and take the leap toward a fulfilling career that celebrates your unique journey and potential.",
  //   "https://i.ibb.co/Lz0ZF7w/154.jpg",
  //   "https://i.ibb.co/Lz0ZF7w/154.jpg",
  //   "https://i.ibb.co/DVZ9bpp/229.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("192marketPlaceCollection.updateCollection===========> Done!")

  // // 193
  // await marketPlaceCollection.connect(wallets[193]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[193]).updateCollection(
  //   "AFFAJ",
  //   "Introducing AFFAJ - A Fix For A Job -, a groundbreaking platform that revolutionizes the job application process. With AFFAJ, users can seamlessly apply for positions at companies by booking interviews and proposing solutions to real-time challenges faced by these organizations. Companies share video insights into their ongoing issues, processes, and areas open for recruitment, fostering a unique and proactive approach to talent acquisition. It's a dynamic space where job seekers can showcase their problem-solving skills, and companies can find innovative solutions while discovering top talent – all in one platform. Say goodbye to traditional resumes and hello to the future of recruitment with AFFAJ!",
  //   "https://i.ibb.co/KGJq9cw/153.jpg",
  //   "https://i.ibb.co/KGJq9cw/153.jpg",
  //   "https://i.ibb.co/L9Br6k0/230.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("193marketPlaceCollection.updateCollection===========> Done!")

  // // 194
  // await marketPlaceCollection.connect(wallets[194]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[194]).updateCollection(
  //   "OpportunityLink",
  //   "Introducing OpportunityLink, the innovative platform that bridges the worlds of entrepreneurship and employment by allowing startup founders to create requests for potential job opportunities if their ventures don't achieve their desired goals. Companies seeking to acquire an equity stake in those founders' ventures offer them job guarantees in the event their ventures don't work out, all while setting specific criteria, such as minimum milestones achieved, to ensure a mutually beneficial arrangement. OpportunityLink empowers founders to secure a safety net for their professional future.",
  //   "https://i.ibb.co/yQb3ZDT/152.jpg",
  //   "https://i.ibb.co/yQb3ZDT/152.jpg",
  //   "https://i.ibb.co/5hZTrBZ/231.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("194marketPlaceCollection.updateCollection===========> Done!")

  // // 195
  // await marketPlaceCollection.connect(wallets[195]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[195]).updateCollection(
  //   "InterviewMastery",
  //   "Introducing InterviewMastery, the groundbreaking platform that revolutionizes the hiring process. With InterviewMastery, users can book and successfully pass interviews conducted by auditors who assess their skills and qualifications, assigning a grade on a scale of 0-100% with a defined expiry date. These grades serve as a comprehensive and validated measure of their abilities, allowing companies to make direct hires with absolute confidence, eliminating the need for further interviews. Say goodbye to traditional hiring hassles and hello to a streamlined, efficient, and transparent recruitment process with InterviewMastery. Your dream job is just one successful interview away!",
  //   "https://i.ibb.co/hFbv35s/151.jpg",
  //   "https://i.ibb.co/hFbv35s/151.jpg",
  //   "https://i.ibb.co/TvvmDnv/232.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("195marketPlaceCollection.updateCollection===========> Done!")

  // // 196
  // await marketPlaceCollection.connect(wallets[196]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[196]).updateCollection(
  //   "InterviewLink",
  //   "Introducing InterviewLink, the revolutionary platform where companies showcase their interviewers' profiles, granting users navigating the recruitment process the unique ability to handpick and schedule interviews directly with the interviewers of their choice. With InterviewLink, users can select interviewers they resonate with, fostering a more comfortable and personalized interview experience. Furthermore, our platform encourages transparency and accountability by allowing users to provide invaluable feedback and reviews about their interviewers, ensuring that the recruitment process becomes a collaborative, user-centric journey. Say goodbye to impersonal interviews and hello to a more tailored and user-friendly approach with InterviewLink.",
  //   "https://i.ibb.co/PmMGwjF/150.jpg",
  //   "https://i.ibb.co/PmMGwjF/150.jpg",
  //   "https://i.ibb.co/yhxBQLY/233.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("196marketPlaceCollection.updateCollection===========> Done!")

  // // 197
  // await marketPlaceCollection.connect(wallets[197]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[197]).updateCollection(
  //   "BrainRecruit",
  //   "Introducing BrainRecruit: Revolutionizing Recruitment Through Brain Science. BrainRecruit is at the forefront of a groundbreaking shift in the recruitment industry, where hiring decisions are elevated to a new level of precision. Leveraging cutting-edge neuroscience and AI technology, BrainRecruit allows companies to identify top talent by analyzing candidates' brain scans, providing unparalleled insights into cognitive capabilities, problem-solving skills, and personality traits. Gone are the days of relying solely on resumes and interviews; BrainRecruit enables businesses to assemble teams with unmatched cognitive synergy, ensuring not only a perfect fit for job roles but also fostering innovation and productivity. Welcome to the future of recruitment, where hiring decisions are based on the science of the brain.",
  //   "https://i.ibb.co/JdP1RdG/149.jpg",
  //   "https://i.ibb.co/JdP1RdG/149.jpg",
  //   "https://i.ibb.co/BKMrjRm/234.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("197marketPlaceCollection.updateCollection===========> Done!")

  // // 198
  // await marketPlaceCollection.connect(wallets[198]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[198]).updateCollection(
  //   "Nature Collaterals",
  //   "Find auditors to tokenize your nudes/sex tapes/humiliating videos of yourself/evidence of a deep secret/evidence that might land you in jail/get you fired/evidence of you cheating on your partner, on an exam, etc. The evidence can be on you or someone else but the collateral has to mention that. The auditor rates the level of certainty in the evidence being real on the token. You can then use the token as collateral to borrow money. Anyone that owns the collateral can get the auditor to send them the underlying asset.",
  //   "https://i.ibb.co/jJ3Yxrt/148.jpg",
  //   "https://i.ibb.co/jJ3Yxrt/148.jpg",
  //   "https://i.ibb.co/ZHzpFpB/235.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("198marketPlaceCollection.updateCollection===========> Done!")

  // // 199
  // await marketPlaceCollection.connect(wallets[199]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[199]).updateCollection(
  //   "PensionBank",
  //   "he retirement age is 60. We take cotizations from those below and above 60. We buy tickets from various banks and provide resources from those banks to those above the retirement age with priority in case of scarcity given to those with the highest credit. Excess resources are given to those below the retirement age with priority given to those with the highest credit. Members build credit through deposits and purchases of sponsors' products or services. The pension bank also lends money to the Leviathans and the money bank.",
  //   "https://i.ibb.co/VYpR7KW/147.jpg",
  //   "https://i.ibb.co/VYpR7KW/147.jpg",
  //   "https://i.ibb.co/sWRfbhZ/236.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("199marketPlaceCollection.updateCollection===========> Done!")

  // // 200
  // await marketPlaceCollection.connect(wallets[200]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[200]).updateCollection(
  //   "PensionSelect",
  //   "Introducing PensionSelect, your one-stop platform to explore and select from a diverse range of pension models tailored to your unique financial goals and preferences. With PensionSelect, you can effortlessly navigate through a curated list of retirement propositions, comparing features, benefits, and investment strategies to find the pension plan that suits you best. Say goodbye to the complexities of pension planning – join the future of retirement security with PensionSelect, where securing your financial future is made simple and accessible.",
  //   "https://i.ibb.co/80hFvPX/146.jpg",
  //   "https://i.ibb.co/80hFvPX/146.jpg",
  //   "https://i.ibb.co/rsPyb2F/237.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("200marketPlaceCollection.updateCollection===========> Done!")

  // // 201
  // await marketPlaceCollection.connect(wallets[201]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[201]).updateCollection(
  //   "SharedPayChecks",
  //   "Introducing SharedPayChecks, the innovative platform where users collaborate to maximize their salary savings. SharedPayChecks empowers individuals to efficiently allocate their income, pooling together the surplus funds into a collective investment vehicle through a ValuePool. By harnessing the collective financial wisdom of the community, SharedPayChecks ensures that members can save and invest wisely, securing their financial futures while achieving their short and long-term financial goals. Say goodbye to financial stress and hello to financial prosperity with SharedPayChecks.",
  //   "https://i.ibb.co/4MnxVkR/488.jpg",
  //   "https://i.ibb.co/4MnxVkR/488.jpg",
  //   "https://i.ibb.co/8z5NKck/238.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("201marketPlaceCollection.updateCollection===========> Done!")

  // // 202
  // await marketPlaceCollection.connect(wallets[202]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[202]).updateCollection(
  //   "MatchMingle",
  //   "Introducing MatchMingle, the revolutionary platform that connects you with experienced matchmakers locally and globally. With MatchMingle, you can seamlessly discover and book consultations with skilled matchmakers who will work tirelessly to find your perfect match. What sets us apart is our unique collateral system, ensuring that both you and your potential match provide guarantees of honesty and commitment, creating a trustworthy and authentic matchmaking experience. Say goodbye to endless swiping and hello to meaningful connections – MatchMingle is here to make love happen with a guarantee.",
  //   "https://i.ibb.co/54wqXK4/485.jpg",
  //   "https://i.ibb.co/54wqXK4/485.jpg",
  //   "https://i.ibb.co/5Bhg9F5/239.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("202marketPlaceCollection.updateCollection===========> Done!")

  // // 203
  // await marketPlaceCollection.connect(wallets[203]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[203]).updateCollection(
  //   "WorkConnect",
  //   "Introducing WorkConnect, the innovative platform designed to bridge the gap between work from home professionals who find themselves isolated from the world. On WorkConnect, users can discover and connect with people nearby that also work from home so they can work from home but side by side. WorkConnect seeks to end the isolation that often comes from working from home by connecting you with people in the same situation so you all can work side by side just like you would with your collegues if you were in a normal work environment with the exception that each one of you will be working remotely for a different company.",
  //   "https://i.ibb.co/h7dRnbb/482.jpg",
  //   "https://i.ibb.co/h7dRnbb/482.jpg",
  //   "https://i.ibb.co/dgG19rS/240.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("203marketPlaceCollection.updateCollection===========> Done!")

  // // 204
  // await marketPlaceCollection.connect(wallets[204]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[204]).updateCollection(
  //   "CompliGlobal",
  //   "Introducing CompliGlobal, the revolutionary platform that streamlines the intricate compliance process for global product launches. In a world where regulations differ across borders, CompliGlobal acts as the ultimate centralized hub, offering a single source of truth. Manufacturers can effortlessly input information about their products across various markets, along with specific regulatory requirements, creating a comprehensive database. This enables manufacturers to seamlessly assess whether their products meet the necessary regulations for specific markets, fostering efficiency, confidence, and compliance on a global scale, all in one user-friendly platform. Say goodbye to regulatory complexities and embrace the future of hassle-free global product expansion with CompliGlobal.",
  //   "https://i.ibb.co/WH5D7Hb/479.jpg",
  //   "https://i.ibb.co/WH5D7Hb/479.jpg",
  //   "https://i.ibb.co/WVSDKVK/241.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("204marketPlaceCollection.updateCollection===========> Done!")

  // // 205
  // await marketPlaceCollection.connect(wallets[205]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[205]).updateCollection(
  //   "MatchMinglX",
  //   "Introducing MatchMinglX, the revolutionary platform that connects you with experienced matchmakers locally and globally. With MatchMinglX, you can seamlessly discover and book consultations with skilled matchmakers who will work tirelessly to find your perfect sexual match. What sets us apart is our unique collateral system, ensuring that both you and your potential match provide guarantees of honesty and discretion, creating a trustworthy and authentic matchmaking experience. Say goodbye to endless swiping and hello to meaningful connections – MatchMinglX is here for your sexual needs.",
  //   "https://i.ibb.co/12Cmbgk/475.jpg",
  //   "https://i.ibb.co/12Cmbgk/475.jpg",
  //   "https://i.ibb.co/xMtBGQW/242.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("205marketPlaceCollection.updateCollection===========> Done!")

  // // 206
  // await marketPlaceCollection.connect(wallets[206]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[206]).updateCollection(
  //   "ValuSync",
  //   "Introducing ValuSync: The Ultimate Resource for Bootstrapped Businesses! ValuSync is a groundbreaking platform designed to help bootstrapped business founders discover, join, and thrive within valuepools. In a valuepool, each founder maintains their business independence while collaboratively pooling resources to tackle expenses, offer financial support, and extend a helping hand when needed. If one founder's business faces challenges or setbacks, ValuSync simplifies the process of finding new opportunities within another founder's venture, ensuring resilience and growth within our thriving community of innovative entrepreneurs. Join ValuSync today to unlock the power of collaboration and secure the future of your bootstrapped business.",
  //   "https://i.ibb.co/4N9NVs4/474.jpg",
  //   "https://i.ibb.co/4N9NVs4/474.jpg",
  //   "https://i.ibb.co/vvNBkvM/243.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("206marketPlaceCollection.updateCollection===========> Done!")

  // // 207
  // await marketPlaceCollection.connect(wallets[207]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[207]).updateCollection(
  //   "PoolPay",
  //   "Introducing PoolPay, the innovative platform where users come together to create valuepools, unlocking Buy Now Pay Later capabilities for everyone. With PoolPay, you can pool resources collectively, ensuring that financial constraints no longer hinder your shopping desires. By joining or creating valuepools, you gain access to flexible payment options, making those coveted purchases more affordable and manageable. Say goodbye to traditional constraints and hello to a community-driven approach that empowers you to shop now and pay later on your terms.",
  //   "https://i.ibb.co/WVxsctk/471.jpg",
  //   "https://i.ibb.co/WVxsctk/471.jpg",
  //   "https://i.ibb.co/Khhk0wg/244.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("207marketPlaceCollection.updateCollection===========> Done!")

  // // 208
  // await marketPlaceCollection.connect(wallets[208]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[208]).updateCollection(
  //   "EffectiveAltruism",
  //   "Introducing EffectiveAltruism – Where Equal Earnings Ensure Global Opportunities: In a world where income inequality persists, EffectiveAltruism is a groundbreaking platform that champions equitable wealth distribution. We believe it's better to uplift many with decent salaries than enrich a select few, and our value pool does just that. By pooling the salaries of our members and redistributing them based on the living standards of their counterparts in developed countries, EffectiveAltruism combats brain drain, empowers local talent, and fosters economic sustainability in developing nations. Join us in reshaping the global workforce landscape for a more equitable and prosperous future.",
  //   "https://i.ibb.co/HV3pg3x/467.jpg",
  //   "https://i.ibb.co/HV3pg3x/467.jpg",
  //   "https://i.ibb.co/K0rSK8y/245.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("208marketPlaceCollection.updateCollection===========> Done!")

  // // 209
  // await marketPlaceCollection.connect(wallets[209]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[209]).updateCollection(
  //   "WedFund",
  //   "Introducing WedFund, the innovative platform where engaged couples can discover ValuePools – unique communities of users coming together to pool their resources, support, and expertise to organize and finance dream weddings. Whether you're seeking financial assistance for your big day or looking to connect with others who share wedding planning experiences, WedFund provides a collaborative space where lovebirds can turn their wedding dreams into reality while forging lasting connections with like-minded individuals. Join WedFund today and embark on your wedding journey with a community that understands the true value of love and celebration.",
  //   "https://i.ibb.co/KGmwbGx/464.jpg",
  //   "https://i.ibb.co/KGmwbGx/464.jpg",
  //   "https://i.ibb.co/VCSygQV/246.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("209marketPlaceCollection.updateCollection===========> Done!")

  // // 210
  // await marketPlaceCollection.connect(wallets[210]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[210]).updateCollection(
  //   "AccentsConnect",
  //   "Introducing AccentsConnect, the premier platform for discovering online tutors who specialize in teaching various accents from around the world. Whether you're an actor perfecting a role, a language enthusiast aiming for authentic pronunciation, or simply curious about different accents, AccentsConnect connects you with experienced tutors who offer personalized lessons tailored to your accent goals. Explore a world of linguistic diversity and enhance your communication skills, all from the comfort of your own home, with AccentsConnect.",
  //   "https://i.ibb.co/0QNdSM1/460.jpg",
  //   "https://i.ibb.co/0QNdSM1/460.jpg",
  //   "https://i.ibb.co/0KBLkbY/247.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("210marketPlaceCollection.updateCollection===========> Done!")

  // // 211
  // await marketPlaceCollection.connect(wallets[211]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[211]).updateCollection(
  //   "EduStream",
  //   "Introducing EduStream, your gateway to a global classroom. EduStream is a groundbreaking platform where educators worldwide record their live lectures, making them accessible for eager learners like you. With EduStream, you can effortlessly search for specific teachers, courses, schools, and more to discover a wealth of educational content. Whether you're seeking in-depth knowledge or looking to explore diverse subjects, our platform offers both free and premium content, ensuring that quality education is just a click away. Join EduStream today and unlock a world of learning opportunities at your fingertips.",
  //   "https://i.ibb.co/m5KVj72/457.jpg",
  //   "https://i.ibb.co/m5KVj72/457.jpg",
  //   "https://i.ibb.co/G3Q4jgY/248.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("211marketPlaceCollection.updateCollection===========> Done!")

  // // 213
  // await marketPlaceCollection.connect(wallets[213]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[213]).updateCollection(
  //   "TalkSight",
  //   "Introducing TalkSight: A Language Learning Experience Like No Other! TalkSight is a unique platform that connects language learners with blind individuals seeking assistance in their daily lives. Here's the twist: you become the eyes of a blind person, describing their surroundings in your target language, while they teach you that language in return. It's an incredible opportunity to enhance your language skills through real-world immersion, all while making a meaningful impact in someone else's life. Join TalkSight today and embark on a journey of language learning, empathy, and connection like never before.",
  //   "https://i.ibb.co/jM7Phvz/454.jpg",
  //   "https://i.ibb.co/jM7Phvz/454.jpg",
  //   "https://i.ibb.co/YTgvmx7/249.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("213marketPlaceCollection.updateCollection===========> Done!")

  // // 214
  // await marketPlaceCollection.connect(wallets[214]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[214]).updateCollection(
  //   "LinguaSwap",
  //   "Introducing LinguaSwap, the innovative language learning platform that fosters a global community of linguistic exchange. Whether you're eager to master a widely spoken language, or sign language or delve into fictional or created languages like Dothraki or Klingon, LinguaSwap connects you with a diverse network of language enthusiasts. Simply create a request for the language you want to learn and offer an IOU in return, which can be redeemed for tutoring in a language of your tutor's choice. It's a unique and inclusive way to expand your language skills while helping others do the same, making language learning an exciting journey of reciprocity and exploration.",
  //   "https://i.ibb.co/r7YNgnH/131.jpg",
  //   "https://i.ibb.co/r7YNgnH/131.jpg",
  //   "https://i.ibb.co/RCZHGMj/250.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("214marketPlaceCollection.updateCollection===========> Done!")

  // // 215
  // await marketPlaceCollection.connect(wallets[215]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[215]).updateCollection(
  //   "SkillSwap",
  //   "Introducing SkillSwap: The innovative platform that enables you to seamlessly connect with experienced tutors to learn technical skills while fostering a culture of reciprocity. With SkillSwap, you can create requests to find a tutor for the skill you're eager to acquire, and in exchange, offer them an IOU which they can use to get other users to teach them something valuable in return. It's a dynamic marketplace where the pursuit of knowledge meets the spirit of collaboration, allowing you to expand your skill set while contributing your own expertise to a community of lifelong learners. After all, in SkillSwap's belief, all hard skills are both teachable and learnable, creating a vibrant ecosystem of skill sharing and personal growth. Join SkillSwap today and embark on a journey of skill development and mutual empowerment!",
  //   "https://i.ibb.co/DMZDx4j/450.jpg",
  //   "https://i.ibb.co/DMZDx4j/450.jpg",
  //   "https://i.ibb.co/Ky6gWQn/251.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("215marketPlaceCollection.updateCollection===========> Done!")

  // // 216
  // await marketPlaceCollection.connect(wallets[216]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[216]).updateCollection(
  //   "NaughtyTreasureHunt",
  //   "Girls go through guys that pay to become participants, this enables them to figure out who has the biggest/smallest dick/last the longest/etc. They can then use that information to pick the right bet or they can just guess. Participants' payments are used to pay auditor fees as well as sponsor the betting events. Guys can also do the same to vote on the girl that's the tightest/best rider/best dick sucker/etc.",
  //   "https://i.ibb.co/GV35HyD/448.jpg",
  //   "https://i.ibb.co/GV35HyD/448.jpg",
  //   "https://i.ibb.co/PQNhbf2/252.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("216marketPlaceCollection.updateCollection===========> Done!")

  // // 217
  // await marketPlaceCollection.connect(wallets[217]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[217]).updateCollection(
  //   "PlayToEarnAssets",
  //   "Auditors develop various game assets and avatars in order to sell them to game developers. An asset can have multiple versions for different game engines but keeps the same name to enable play-to-earn mechanisms when writing an asset on a game NFT or loading it from the game NFT. Gaming studios can also offer up their game assets for sale or for free for other game developers to include in their games in order to grow their play to earn reach. This can also add an open-source aspect to the game in that it gives the ability to indie devs to propose new extensions/assets to existing games",
  //   "https://i.ibb.co/n0q0PPm/446.jpg",
  //   "https://i.ibb.co/n0q0PPm/446.jpg",
  //   "https://i.ibb.co/hyQ4xjW/253.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("217marketPlaceCollection.updateCollection===========> Done!")

  // // 218
  // await marketPlaceCollection.connect(wallets[218]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[218]).updateCollection(
  //   "GamersMap",
  //   "Find gamers nearby to challenge to a duel or create/apply to a request to meet at a specific date for a session of video game or IRL game (football, soccer, tennis, etc.). All challenges are streamed or posted on the platform and players get to bet on ongoing games. Non-livestreamed games don't get betting events but count in the player classification.  Any game is eligible from team games like tug of war and soccer to individual games like tennis, poker, or some video games. The venues, equipments, etc can be rented straight from the platform from other users.",
  //   "https://i.ibb.co/nrYP5cc/444.jpg",
  //   "https://i.ibb.co/nrYP5cc/444.jpg",
  //   "https://i.ibb.co/rm9ghLY/254.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("218marketPlaceCollection.updateCollection===========> Done!")

  // // 219
  // await marketPlaceCollection.connect(wallets[219]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[219]).updateCollection(
  //   "TheRatingGame",
  //   "Girls/guys post videos/photos/Livestream/do meetups/etc, everything they can to try and attract as many ratings as possible. Players rate girls/guys from a score of 1-10 based purely on looks through the betting contract. The actual rating is the ceiling of the product of their most voted-for rating and their percentile of total money spent on tickets. Each event lasts 1 month and renews every month. Participants that get a score under 10 get relegated into the cold league and those 5 and above get to stay in the hot category. 20% of all participants' tickets sold get put in the channel's valuepool for them and used to buy tickets into various banks for them. The valuepool's goal is to invest as much of the money as possible in order to provide participants with enough financial security that even when they stop making lots of money from the game, they can still lead a comfortable life",
  //   "https://i.ibb.co/jWDgq41/442.jpg",
  //   "https://i.ibb.co/jWDgq41/442.jpg",
  //   "https://i.ibb.co/YcxgXf6/255.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("219marketPlaceCollection.updateCollection===========> Done!")

  // // 220
  // await marketPlaceCollection.connect(wallets[220]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[220]).updateCollection(
  //   "TriumphGames",
  //   "Users stream their gameplay and receive bets on their ongoing games. 20% of ticket sales go into a valuepool that offers tickets into the various banks to participants in the 50th percentile",
  //   "https://i.ibb.co/brjvJ3j/440.jpg",
  //   "https://i.ibb.co/brjvJ3j/440.jpg",
  //   "https://i.ibb.co/LxvZrHQ/440-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("220marketPlaceCollection.updateCollection===========> Done!")

  // // 221
  // await marketPlaceCollection.connect(wallets[221]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[221]).updateCollection(
  //   "TerraToken",
  //   "Introducing TerraToken: TerraToken is your gateway to the future of real estate investment. We offer a cutting-edge platform where you can discover, invest in, and trade tokenized real-world lands, houses, or any other real estate seamlessly. Harnessing the power of blockchain technology, TerraToken empowers you to diversify your portfolio by owning fractions of prime properties, making real estate accessible and liquid like never before. Whether you're a seasoned investor or just entering the world of real estate, TerraToken provides a secure and user-friendly environment to explore and acquire a stake in the most coveted lands on the planet. Join us in reshaping the way you think about real estate investment with TerraToken.",
  //   "https://i.ibb.co/txG1bCK/123.jpg",
  //   "https://i.ibb.co/txG1bCK/123.jpg",
  //   "https://i.ibb.co/Gs7g9dw/439-2.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("221marketPlaceCollection.updateCollection===========> Done!")

  // // 222
  // await marketPlaceCollection.connect(wallets[222]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[222]).updateCollection(
  //   "LuxuryAuth",
  //   "Introducing LuxuryAuth, your ultimate destination for luxury item authentication. Our platform offers a seamless solution to verify the authenticity of your high-end possessions, providing you with a unique QR code that can be easily affixed to your item. This QR code serves as an irrefutable proof of authenticity, enhancing your confidence in your luxury investments and simplifying the verification process for potential buyers or enthusiasts, ensuring that your prized possessions retain their genuine value in the world of luxury goods. Trust in LuxuryAuth to safeguard the authenticity of your luxury items, preserving their worth and prestige.",
  //   "https://i.ibb.co/SwsSNbx/122.jpg",
  //   "https://i.ibb.co/SwsSNbx/122.jpg",
  //   "https://i.ibb.co/k11SX3n/438-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("222marketPlaceCollection.updateCollection===========> Done!")

  // // 223
  // await marketPlaceCollection.connect(wallets[223]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[223]).updateCollection(
  //   "CharacterTraits",
  //   "Introducing CharacterTraits, the innovative platform that empowers you to showcase your true character with credibility. Whether you're a job seeker looking to prove your reliability, a business professional striving to build trust, or an individual seeking to validate your personal qualities, CharacterTraits connects you with certified auditors who thoroughly assess your character traits. Upon successful evaluation, you'll receive a digital badge that serves as tangible proof of your integrity, honesty, and other essential traits. Join CharacterTraits today and gain a competitive edge in a world where character matters more than ever.",
  //   "https://i.ibb.co/L1QM8wy/436.jpg",
  //   "https://i.ibb.co/L1QM8wy/436.jpg",
  //   "https://i.ibb.co/7YLFb81/437-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("223marketPlaceCollection.updateCollection===========> Done!")

  // // 224
  // await marketPlaceCollection.connect(wallets[224]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[224]).updateCollection(
  //   "AuditEase",
  //   "Introducing AuditEase, your one-stop platform for seamlessly discovering experienced auditors and initiating due diligence investigations in companies you're considering for investment. Whether you're a seasoned investor or new to the world of finance, AuditEase simplifies the process of finding accredited auditors who specialize in various industries, helping you make informed investment decisions. With our user-friendly interface, you can browse auditor profiles, assess their qualifications, and request comprehensive due diligence reports tailored to your specific investment needs. Ensure your investments are backed by thorough financial assessments with AuditEase, your trusted partner in investment due diligence.",
  //   "https://i.ibb.co/PcZHzCH/434.jpg",
  //   "https://i.ibb.co/PcZHzCH/434.jpg",
  //   "https://i.ibb.co/PTzWnV4/436-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("224marketPlaceCollection.updateCollection===========> Done!")

  // // 225
  // await marketPlaceCollection.connect(wallets[225]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[225]).updateCollection(
  //   "CarbonCred",
  //   "Introducing CarbonCred, the premier platform where you can effortlessly discover trusted experts who procure carbon credits from thoroughly vetted sources and make them available for purchase, all tailored to your preferences. Whether you prefer a subscription model for a continuous impact or one-time transactions, CarbonCred connects you with environmentally-conscious professionals dedicated to mitigating carbon footprints. Join us in the global effort to combat climate change and ensure a sustainable future by sourcing and trading carbon credits with ease, transparency, and environmental integrity through CarbonCred.",
  //   "https://i.ibb.co/84sgLCD/432.jpg",
  //   "https://i.ibb.co/84sgLCD/432.jpg",
  //   "https://i.ibb.co/Hdz5c4Y/435-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("225marketPlaceCollection.updateCollection===========> Done!")

  // // 226
  // await marketPlaceCollection.connect(wallets[226]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[226]).updateCollection(
  //   "GlobaLens",
  //   "Introducing GlobaLens, the groundbreaking platform on a mission to capture every corner of our planet through the collective efforts of its users. GlobaLens empowers people worldwide to share and explore firsthand footage of every imaginable location on Earth, creating a comprehensive, ever-expanding visual encyclopedia of our world. Whether you're a traveler documenting your adventures, an explorer uncovering hidden gems, or simply curious about far-off places, GlobaLens invites you to be a part of this global visual journey, connecting us all through the shared beauty and diversity of our planet. Join us today in mapping the world, one lens at a time.",
  //   "https://i.ibb.co/ZSfKG6S/430.jpg",
  //   "https://i.ibb.co/ZSfKG6S/430.jpg",
  //   "https://i.ibb.co/Mc1WdgB/434-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("226marketPlaceCollection.updateCollection===========> Done!")

  // // 227
  // await marketPlaceCollection.connect(wallets[227]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[227]).updateCollection(
  //   "GeoTales",
  //   "Welcome to GeoTales, the global storytelling platform that brings the world's landmarks, cities, and towns to life through the eyes of its users. Here, you'll embark on a captivating journey where anyone can share and explore fascinating stories, historical anecdotes, and firsthand experiences about the most iconic and hidden gems worldwide. Whether you're a seasoned traveler, a curious explorer, or simply eager to learn about new places, GeoTales is your passport to discover the rich tapestry of our world, one captivating story at a time.",
  //   "https://i.ibb.co/tms7JBr/428.jpg",
  //   "https://i.ibb.co/tms7JBr/428.jpg",
  //   "https://i.ibb.co/VSkbQTj/433-2.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("227marketPlaceCollection.updateCollection===========> Done!")

  // // 228
  // await marketPlaceCollection.connect(wallets[228]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[228]).updateCollection(
  //   "NutriInfluence",
  //   "Introducing NutriInfluence, the revolutionary platform that transforms health-conscious individuals into trusted food influencers! Here, users committed to maintaining a balanced diet and healthy lifestyle can become certified food influencers through comprehensive audits conducted by registered dietitians and nutritionists. These food influencers dedicate themselves to sharing every meal they consume daily, offering valuable insights and inspiration to their followers. With diverse influencers following various diets, from vegan to keto and beyond, NutriInfluence empowers users to discover and adopt the best dietary choices tailored to their individual health goals, making healthy eating accessible, engaging, and personalized for all.",
  //   "https://i.ibb.co/PCtzJR5/426.jpg",
  //   "https://i.ibb.co/PCtzJR5/426.jpg",
  //   "https://i.ibb.co/p222Jr2/432-2.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("228marketPlaceCollection.updateCollection===========> Done!")

  // // 229
  // await marketPlaceCollection.connect(wallets[229]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[229]).updateCollection(
  //   "LegalSaver",
  //   "Introducing LegalSaver, your go-to platform for tackling tickets, fines, and legal issues with ease. Have a traffic ticket, parking fine, or legal concern weighing you down? Simply create a request on LegalSaver, and our network of experienced professionals will bid to help you resolve it for a small percentage of the associated fees. It's your ticket to affordable, hassle-free legal assistance, connecting you with experts who can save you time, money, and potential headaches. Say goodbye to legal stress and hello to peace of mind with LegalSaver.",
  //   "https://i.ibb.co/J3wt8Nt/424.jpg",
  //   "https://i.ibb.co/J3wt8Nt/424.jpg",
  //   "https://i.ibb.co/nzgT3nX/431-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("229marketPlaceCollection.updateCollection===========> Done!")

  // // 230
  // await marketPlaceCollection.connect(wallets[230]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[230]).updateCollection(
  //   "SnitchesGetRich",
  //   "Introducing SnitchesGetRich, the groundbreaking platform empowering individuals to make communities safer by anonymously sharing crucial crime-related information they've witnessed. Our secure and user-friendly platform allows users to upload evidence, from photos to videos, helping law enforcement solve cases more efficiently. What sets us apart? Users not only contribute to justice but can also earn rewards through tips from the community amongst other things for their valuable contributions, ensuring that doing the right thing benefits everyone. Join SnitchesGetRich and be a part of the solution, where integrity meets incentives for a safer tomorrow.",
  //   "https://i.ibb.co/SmTcCxL/422.jpg",
  //   "https://i.ibb.co/SmTcCxL/422.jpg",
  //   "https://i.ibb.co/87JCtgL/430-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("231marketPlaceCollection.updateCollection===========> Done!")

  // // 232
  // await marketPlaceCollection.connect(wallets[232]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[232]).updateCollection(
  //   "PerishableGuard",
  //   "Introducing PerishableGuard, your go-to platform for managing and monitoring the condition of perishable goods. Whether you're a farmer seeking to optimize crop storage or a healthcare professional in charge of safeguarding temperature-sensitive products such as vaccines and insulin, PerishableGuard offers cutting-edge solutions. Our platform empowers you to track and maintain the quality of perishable items, providing real-time data and insights that not only prevent losses but also ensure the highest standards of quality and safety. Join us in revolutionizing the way you manage perishable goods, because with PerishableGuard, staying informed means staying ahead.",
  //   "https://i.ibb.co/s3TdJNJ/420.jpg",
  //   "https://i.ibb.co/s3TdJNJ/420.jpg",
  //   "https://i.ibb.co/cF4HV7C/429-2.jpg",
  //   "",
  //   "",
  //   "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("232marketPlaceCollection.updateCollection===========> Done!")

  // // 233
  // await marketPlaceCollection.connect(wallets[233]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[233]).updateCollection(
  //   "SocialAvatars",
  //   "Welcome to SocialAvatars, your one-stop platform for bringing life to your social media content! Need a captivating voice or a charismatic face for your videos? Look no further. With SocialAvatars, you can easily connect with a diverse array of models, actors, and virtual characters who can either lend their voices to your content or make a stunning appearance, adding that extra flair to your social media presence. Whether you're a content creator, marketer, or just someone looking to make your social media posts shine, SocialAvatars is your creative partner in crafting engaging and memorable content that stands out in the digital crowd. Join us today and let your imagination run wild as you discover the perfect avatar to elevate your online content!",
  //   "https://i.ibb.co/mG2LJxz/418.jpg",
  //   "https://i.ibb.co/mG2LJxz/418.jpg",
  //   "https://i.ibb.co/TPdRtjB/428-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("233marketPlaceCollection.updateCollection===========> Done!")

  // // 234
  // await marketPlaceCollection.connect(wallets[234]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[234]).updateCollection(
  //   "CelebStyle",
  //   "Introducing CelebStyle – the exclusive platform that lets you step into the stylist's seat and curate the fashion choices of your favorite celebrities. With CelebStyle, you can pay to select the outfits your beloved stars will don at red carpet events, premieres, or even during specific hours of their day, giving you the power to influence their fashion and make a statement in the world of celebrity style. Whether you're seeking to see your icons in stunning couture gowns, casual chic attire, or bold fashion statements, CelebStyle brings you closer to the glamour of Hollywood and the thrill of fashion choices like never before.",
  //   "https://i.ibb.co/k4L2QSn/416.jpg",
  //   "https://i.ibb.co/k4L2QSn/416.jpg",
  //   "https://i.ibb.co/983xqvS/427-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("234marketPlaceCollection.updateCollection===========> Done!")

  // // 235
  // await marketPlaceCollection.connect(wallets[235]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[235]).updateCollection(
  //   "CelebFounder",
  //   "CelebFounder is the pioneering platform that bridges the gap between aspiring entrepreneurs and the world of celebrity by offering a unique opportunity to find and recruit a celebrity co-founder for your business venture. With CelebFounder, you can transform your startup dreams into reality by partnering with high-profile celebrities who bring not only their star power but also their expertise and passion to your entrepreneurial journey. Whether you're seeking a co-founder with influence, industry connections, or a shared passion for your business idea, CelebFounder opens doors to unprecedented collaborations, propelling your venture to new heights of success and visibility.",
  //   "https://i.ibb.co/9rbR88Q/414.jpg",
  //   "https://i.ibb.co/9rbR88Q/414.jpg",
  //   "https://i.ibb.co/6gNvDMd/426-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("235marketPlaceCollection.updateCollection===========> Done!")

  // // 236
  // await marketPlaceCollection.connect(wallets[236]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[236]).updateCollection(
  //   "AdaLunch",
  //   "Find and subscribe to paywalls that curate for you a list of current ongoing purchases of high end products/services as well as contact information about the buyers so you can swoop in and make a better offer for the same products/services. There is a paywall for various industries: real estate, transportation, energy, b2b sales, nsfw, finding a better",
  //   "https://i.ibb.co/6mDHT9d/412.jpg",
  //   "https://i.ibb.co/6mDHT9d/412.jpg",
  //   "https://i.ibb.co/0CYF5Jy/425-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("236marketPlaceCollection.updateCollection===========> Done!")

  // // 237
  // await marketPlaceCollection.connect(wallets[237]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[237]).updateCollection(
  //   "DatedIn",
  //   "Introducing DatedIn, the innovative platform where career and love aspirations align! On DatedIn, you'll discover unique job postings that come bundled with the possibility of finding your ideal partner. It's a two-in-one opportunity: apply for a job, and if you successfully navigate both the professional interview and the personal chemistry assessment, you'll either land the job and a potential girlfriend, boyfriend, wife, or husband, or gracefully decline both offers. It's a modern approach to finding meaningful connections while advancing your career, all in one convenient place.",
  //   "https://i.ibb.co/NmnJzzf/410.jpg",
  //   "https://i.ibb.co/NmnJzzf/410.jpg",
  //   "https://i.ibb.co/X4KTjZ2/424-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("237marketPlaceCollection.updateCollection===========> Done!")

  // // 238
  // await marketPlaceCollection.connect(wallets[238]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[238]).updateCollection(
  //   "GirlsInShowers",
  //   "Browse and subscribe to live streams of normal girls taking their bath.",
  //   "https://i.ibb.co/ncQpZtV/408.jpg",
  //   "https://i.ibb.co/ncQpZtV/408.jpg",
  //   "https://i.ibb.co/yhSz2pj/423-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("238marketPlaceCollection.updateCollection===========> Done!")

  // // 239
  // await marketPlaceCollection.connect(wallets[239]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[239]).updateCollection(
  //   "XclusiveHub",
  //   "Introducing XclusiveHub: Your premier platform for adult content creators and their dedicated fans! XclusiveHub offers a safe, supportive, and subscription-based space for adult content creators from all walks of life to share their exclusive content, connect with their audience, and earn from their craft. With XclusiveHub, you can enjoy an array of adult content, from behind-the-scenes glimpses to exclusive performances, while creators monetize their talents and build meaningful relationships with their fans. Join us today and experience a new era of porn!",
  //   "https://i.ibb.co/Wpz3Gst/406.jpg",
  //   "https://i.ibb.co/Wpz3Gst/406.jpg",
  //   "https://i.ibb.co/Sxq1KZp/422-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("239marketPlaceCollection.updateCollection===========> Done!")

  // // 240
  // await marketPlaceCollection.connect(wallets[240]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[240]).updateCollection(
  //   "SexGames",
  //   "Participants compete in various sex positions. They have intercourse in those positions, oral, cunnis, anal, threesomes, trains, gangbangs, masturbation, boob masturbation, sex without penetration, big boob fuckers, big ass fuckers, sex at work (with nurses fucking patients, air hostesses fucking clients, teachers fucking students, secretaries their bosses, shop workers with their clients, at bars with servers, maids with their bosses, delivery guys, taxi drivers, real estate agents, police officers, doctors with their patients, hotels with cleaning staff, job interviews, etc.), weirdest partners( extremely large people between each other, with extremely thin people, etc), etc with every single user that subscribes to their paywall unless the user is not in the same town/country. Participants are free to decide how many users they are willing to let subscribe. The score is based on how long it takes on average for the subscribers to nut in that position * the percentile in terms of the number of subscribers had sex with. The more subscribers they have sex with and the faster they nut, the better the score. All intercourse is filmed and posted on the platform. Guys can play too and have paywalls(which can be free or not) to collect participants. Guys are scored on how long the last * the percentile in terms of the number of subscribers fucked. All proceeds from the subscriptions and the associated game go to the valuepool which provides the first 50th percentile of partners with tickets to various banks. There are also betting events associated to enable players to bet on the participants.",
  //   "https://i.ibb.co/vBY5ZYj/403.jpg",
  //   "https://i.ibb.co/vBY5ZYj/403.jpg",
  //   "https://i.ibb.co/tBdXyV1/421-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("240marketPlaceCollection.updateCollection===========> Done!")

  // // 241
  // await marketPlaceCollection.connect(wallets[241]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[241]).updateCollection(
  //   "Sex.map",
  //   "Find people nearby willing to fuck. All intercourse is reposted on the platform behind a paywall or for free. Users are not allowed to post intercourse with someone that they don't meet on the platform. They have a bounty to guarantee that. Users of the channel can find a sexual partner on the platform by going through nearby profiles and booking a time for intercourse with a partner.  Partners can not have options to book a time any day that is not the current day. All sales go to the channel's creators' valuepool which buys tickets into various banks for the creators with priority given to those that pull in the most revenue for the valuepool. The channel also has a valuepool to enable users to pay for the bookings.",
  //   "https://i.ibb.co/LQ2tK7b/401.jpg",
  //   "https://i.ibb.co/LQ2tK7b/401.jpg",
  //   "https://i.ibb.co/L55v3Ln/420-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("241marketPlaceCollection.updateCollection===========> Done!")

  // // 242
  // await marketPlaceCollection.connect(wallets[242]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[242]).updateCollection(
  //   "SexualMarketValue",
  //   "Guys and girls create paywalls and receive subscriptions from people willing to have sex with them. The more subscription you receive, the highest value you are in the sexual market. All paywall subscriptions go to the channel's valuepool which is used to buy tickets in the various banks for the partners. Users can also bet on the future value of participants over time which is the percentile of subscriptions in terms of the total amount of tokens raised. 20% of ticket sales go to the channel's valuepool",
  //   "https://i.ibb.co/k9M3TJp/397.jpg",
  //   "https://i.ibb.co/k9M3TJp/397.jpg",
  //   "https://i.ibb.co/ZH9KrYt/419-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("241marketPlaceCollection.updateCollection===========> Done!")

  // // 243
  // await marketPlaceCollection.connect(wallets[243]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[243]).updateCollection(
  //   "Sex4Loans",
  //   "Find people willing to lend you money if you have sex (oral, anal, with pets, etc.), the intercourse is filmed and posted on their paywalls or entered in betting events in case you fail to reimburse.",
  //   "https://i.ibb.co/XV03hfN/395.jpg",
  //   "https://i.ibb.co/XV03hfN/395.jpg",
  //   "https://i.ibb.co/T16vJ2w/418-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("243marketPlaceCollection.updateCollection===========> Done!")

  // // 244
  // await marketPlaceCollection.connect(wallets[244]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[244]).updateCollection(
  //   "DareX",
  //   "People put up stakes to have girls/guys apply and post videos of them performing sexual challenges (fucking pets, fucking in public, fitting fruits in their genitals, etc.) or only send them those challenges. They can later decide to repost them publicly or behind paywalls but that would have to be mentioned in the terms of the stake.",
  //   "https://i.ibb.co/qNQ3xrF/393.jpg",
  //   "https://i.ibb.co/qNQ3xrF/393.jpg",
  //   "https://i.ibb.co/xCGhCLK/417-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("244marketPlaceCollection.updateCollection===========> Done!")

  // // 245
  // await marketPlaceCollection.connect(wallets[245]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[245]).updateCollection(
  //   "HitOnMe",
  //   "HitOnMe is the daring and unconventional platform that lets you add a unique twist to your social interactions. Whether you want to boost your confidence in front of a crowd or simply enjoy some playful attention when you're flying solo, HitOnMe connects you with charismatic individuals ready to hit on you, creating unforgettable moments that can range from hilarious to empowering. Dive into this entertaining experience where confidence meets humor, and see how HitOnMe can make any occasion more exciting and engaging.",
  //   "https://i.ibb.co/r7YrHrL/391.jpg",
  //   "https://i.ibb.co/r7YrHrL/391.jpg",
  //   "https://i.ibb.co/JkcKb5b/416-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("245marketPlaceCollection.updateCollection===========> Done!")

  // // 246
  // await marketPlaceCollection.connect(wallets[246]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[246]).updateCollection(
  //   "NewsLetter",
  //   "Find and subscribe to a newsletter you like",
  //   "https://i.ibb.co/6ngWqZh/389.jpg",
  //   "https://i.ibb.co/6ngWqZh/389.jpg",
  //   "https://i.ibb.co/ynrtwMD/415-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("246marketPlaceCollection.updateCollection===========> Done!")

  // // 247
  // await marketPlaceCollection.connect(wallets[247]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[247]).updateCollection(
  //   "SciPod",
  //   "Introducing SciPod, the groundbreaking platform that seamlessly integrates scientific research and insightful discussions. At SciPod, scientists worldwide can publish their research papers and schedule engaging podcasts with fellow experts to delve into the intricate details, methodologies, and rationale behind their findings. Our platform fosters collaborative knowledge sharing and bridges the gap between complex research and accessible understanding, making cutting-edge science not only accessible but engaging for all curious minds. Join us at SciPod and embark on a journey of scientific exploration like never before.",
  //   "https://i.ibb.co/hmvV0Pw/387.jpg",
  //   "https://i.ibb.co/hmvV0Pw/387.jpg",
  //   "https://i.ibb.co/HVtD5gY/414-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("247marketPlaceCollection.updateCollection===========> Done!")

  // // 248
  // await marketPlaceCollection.connect(wallets[248]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[248]).updateCollection(
  //   "InterviewClub",
  //   "Are you influential enough, apply and join a valuepool of your peers and get people to book interviews with you. A good strategy for becoming very popular would be to book a series of interviews, select options regarding how many interviews you want, the timeframe, specs around the interviewers. Some other valuepools are for influential people to get interviewed. This might even be offered in a subscription format. Individual offers do also exist where you book a time to interview an influential/interesting person or to be interviewed by such a person. This can work for creators, radio/tv/blogs/etc.",
  //   "https://i.ibb.co/HT34cNz/386.jpg",
  //   "https://i.ibb.co/HT34cNz/386.jpg",
  //   "https://i.ibb.co/X7Ws5pg/413-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("248marketPlaceCollection.updateCollection===========> Done!")

  // // 249
  // await marketPlaceCollection.connect(wallets[249]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[249]).updateCollection(
  //   "MoralCredit",
  //   "Introducing MoralCredit: A groundbreaking platform that connects users with unique valuepools representing social systems driven by moral values. MoralCredit revolutionizes lending by employing auditors who meticulously evaluate borrowers' social credits based on their alignment with the moral values upheld by these valuepools. The higher your social credit, the greater your borrowing capacity from these value-driven ecosystems, fostering responsible lending while rewarding individuals who prioritize and contribute to the shared moral fabric of their communities. Join MoralCredit and be part of a transformative movement that blends finance, ethics, and social responsibility.",
  //   "https://i.ibb.co/nQtDzNq/385.jpg",
  //   "https://i.ibb.co/nQtDzNq/385.jpg",
  //   "https://i.ibb.co/y0FQ9m6/412-2.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("249marketPlaceCollection.updateCollection===========> Done!")

  // // 250
  // await marketPlaceCollection.connect(wallets[250]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[250]).updateCollection(
  //   "DatingCredit",
  //   "People date according to traditional values people that they've found on the platform. The more trad-points they get, the better their credit score and the more money they can borrow. Guys and girls need to subscribe to the paywall with guys paying double the subscription of girls. ",
  //   "https://i.ibb.co/Y2LcBnP/384.jpg",
  //   "https://i.ibb.co/Y2LcBnP/384.jpg",
  //   "https://i.ibb.co/cXxSVLC/410-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("250marketPlaceCollection.updateCollection===========> Done!")

  // // 251
  // await marketPlaceCollection.connect(wallets[251]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[251]).updateCollection(
  //   "10PercentReturn",
  //   "Users deposit their money in the money bank and come partner with the channel. Each week the channel accepts a certain number of account creation requests to its ARP with the entry fee calculated as 0.20% * total money in the money bank accounts of the current members at the time of their entry / total number of new entrants. This entry fee is distributed to the previous members such that each week they all get a 0.20% return on their money in their money bank at the time of their entry (or their current balance if their current balance is lower than their entry balance). This will give them a 10% after 52 weeks or 1 year",
  //   "https://i.ibb.co/G74TW6m/383.jpg",
  //   "https://i.ibb.co/G74TW6m/383.jpg",
  //   "https://i.ibb.co/vBrM4jf/409-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("251marketPlaceCollection.updateCollection===========> Done!")

  // // 252
  // await marketPlaceCollection.connect(wallets[252]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[252]).updateCollection(
  //   "FIRE",
  //   "FIRE, short for Financial Independence, Retire Early, is your gateway to a vibrant world of like-minded individuals and communities all striving for the common goal of achieving financial independence and early retirement. Whether you're seeking invaluable insights, practical tips, or mutual support on your journey towards financial freedom, FIRE connects you with passionate individuals who share your aspirations. Join us in exploring innovative strategies, sharing success stories, and building a path to retire on your terms, all while enjoying the journey towards a financially liberated future.",
  //   "https://i.ibb.co/5hvXv6Z/382.jpg",
  //   "https://i.ibb.co/5hvXv6Z/382.jpg",
  //   "https://i.ibb.co/4YSV8hM/408-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("252marketPlaceCollection.updateCollection===========> Done!")

  // // 253
  // await marketPlaceCollection.connect(wallets[253]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[253]).updateCollection(
  //   "DataLotteries",
  //   "Fnd lotteries only people who shared data with the lottery creator can play. Find lotteries trying to collect data for medical research, pandemic monitoring, market research, data brokers(collect corpora of data to resell to companies), etc. Partners include auditors that collect/create user data. Some lotteries can have users annotating data into JSON files on IPFS, then creating SSI data that point to the files, to help optimize AGIs.",
  //   "https://i.ibb.co/5cFPRqV/381.jpg",
  //   "https://i.ibb.co/5cFPRqV/381.jpg",
  //   "https://i.ibb.co/3CXYKZM/407-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("253marketPlaceCollection.updateCollection===========> Done!")

  // // 254
  // await marketPlaceCollection.connect(wallets[254]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[254]).updateCollection(
  //   "ThoughtMatch",
  //   "Users post articles expressing their thoughts about various aspects of life instead of posting photos of themselves. If you like the thought process of someone, you can contact that person and go on a date together. You cannot see what each other looks like before the date. Each user has a bounty to guarantee honesty",
  //   "https://i.ibb.co/tC3vYPX/380.jpg",
  //   "https://i.ibb.co/tC3vYPX/380.jpg",
  //   "https://i.ibb.co/NNZVjBf/406-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("254marketPlaceCollection.updateCollection===========> Done!")

  // 255
  // await marketPlaceCollection.connect(wallets[255]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[255]).updateCollection(
  //   "Playbook",
  //   "Find and subscribe to partners to get access to their playbooks which are extensive step by step guidelines on how to do a specific thing like have a night out with your friends tailored to residents of specific locations, how to have the perfect date or get a new girlfriend tailored to specific types of people living in specific locations, etc Basically a good playbook is like a good recipe, you blindly follow a step by step instructions and you get the promised result at the end.",
  //   "https://i.ibb.co/t23Stdg/379.jpg",
  //   "https://i.ibb.co/t23Stdg/379.jpg",
  //   "https://i.ibb.co/bdtXHnV/405-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("255marketPlaceCollection.updateCollection===========> Done!")

  // // 256
  // await marketPlaceCollection.connect(wallets[256]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[256]).updateCollection(
  //   "DateToLearn",
  //   "Meet and go on learning dates with people. A learning date is a date during which you learn to fish/sail/hunt/box/do martial arts/mathematics/ride a horse/drive a car/a truck/etc. either from your date or a date facilitator",
  //   "https://i.ibb.co/85XJ05P/378.jpg",
  //   "https://i.ibb.co/85XJ05P/378.jpg",
  //   "https://i.ibb.co/tqJ9HTM/322-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("256marketPlaceCollection.updateCollection===========> Done!")

  // // 257
  // await marketPlaceCollection.connect(wallets[257]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[257]).updateCollection(
  //   "PickMyBoo",
  //   "Users join various valuepools so the members of the valuepool can match them with other members. Each valuepool has its own gender roles and phylosophy about the dynamics inside a marriage or a couple and each member matched by a valuepool is expected to follow its phylosophy. Users that join a valuepool don't get more say on who they end up dating than any other member of their valuepool and are required to date whomever the valuepool picks for them unless that person is found out later to be a fraud",
  //   "https://i.ibb.co/72PbTtc/377.jpg",
  //   "https://i.ibb.co/72PbTtc/377.jpg",
  //   "https://i.ibb.co/WVsqwMT/321-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("257marketPlaceCollection.updateCollection===========> Done!")

  // 258
  // await marketPlaceCollection.connect(wallets[258]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[258]).updateCollection(
  //   "SplitIf",
  //   "Dating site where users need bounties, if after a date, the girl is not willing to go to a second one, the guy can claim half the amount he spent on the date. This is only valid if the guy is willing to go on an additional date and the girl does not want to and only the previous date is elligible. On the other side, if the date goes well and there is intercourse and the guy is not willing to keep dating the girl for at least one year, the girl can claim his bounty provided she's willing to date him for that long and has been faithful to him",
  //   "https://i.ibb.co/vZ1KnKd/375.jpg",
  //   "https://i.ibb.co/vZ1KnKd/375.jpg",
  //   "https://i.ibb.co/DfVRgnH/293.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("258marketPlaceCollection.updateCollection===========> Done!")

  // // 259
  // await marketPlaceCollection.connect(wallets[259]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[259]).updateCollection(
  //   "Hangouts",
  //   "A platform where users connect then go on dates during which they are not allowed to spend a single cent apart from transportation. They have bounties to guarantee compliance",
  //   "https://i.ibb.co/2tBdZrY/373.jpg",
  //   "https://i.ibb.co/2tBdZrY/373.jpg",
  //   "https://i.ibb.co/VtSC751/294.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("259marketPlaceCollection.updateCollection===========> Done!")

  // // 260
  // await marketPlaceCollection.connect(wallets[260]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[260]).updateCollection(
  //   "BurnToDate",
  //   "Burn fat to date. find girls to date. In the gaming component, guys buy minutes for girls and win money for them by building muscles. The more muscle you build, the more money you make for your girl. That will incentivize girls to get with guys that are not yet in the shape and incentivizes guys to lose weight and build muscle. This also can help you prove how much you like your girl. Girls can also buy minutes for their guys and lose weight to make them money. Works for homosexual couples as well. No steroid allowed.",
  //   "https://i.ibb.co/FmzNQZ9/371.jpg",
  //   "https://i.ibb.co/FmzNQZ9/371.jpg",
  //   "https://i.ibb.co/1zR3Kc1/301-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("260marketPlaceCollection.updateCollection===========> Done!")

  // // 261
  // await marketPlaceCollection.connect(wallets[261]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[261]).updateCollection(
  //   "AllDating",
  //   "Channels have a game component where users buy minutes for their partner and rate them on how interesting they were on the date. The guy can only rate the girl 3 times (1st, 2nd and 3rd date) and the score is between 0 and 9 (a score to judge if she was on time;  a score to judge how considerate she was with your finances i.e. doesn't order too many expensive stuffs; a score to judge how interesting she was during the date; each score is any number between 0 and 3. The final score for each date is a number between 0-9) he buys minutes onto her ticket, equivalent to the duration of the date and gives her a rating. He does this for each of the dates he's able to go to with her. All fraudsters of the game can be reported through a proposal in the game's valuepool and if the players agree, they get blacklisted. All players have a bounty and their photo + that of users they've been on a date with show so people who know them can report them if they're having dates with people they haven't met through the app but knew already. The bounty amount can limit the score so as to prevent claiming higher sums. There is a second game only opened to users that have played the first and succeeded so are now dating each other. Users have up to one week after the 3rd date to decide whether they are willing to progress to the second game. Every couple has to put up a bounty to guarantee they were not a couple before and that they met through app. Anyone that knows them can claim the bounty if they can prove the couple didn't meet through the app. All users' profiles are unique. The guy pays for the minutes and the girl owns the tickets to claim the scores. The second game is a couples' game where the guy still pays for the minutes and the girl still owns the ticket. A game auditor rates the girl on faithfulness, submissiveness, sex life and duration of the relationship.",
  //   "https://i.ibb.co/5cxXpVw/369.jpg",
  //   "https://i.ibb.co/5cxXpVw/369.jpg",
  //   "https://i.ibb.co/2t8FF7W/296.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("261marketPlaceCollection.updateCollection===========> Done!")

  // 262
  // await marketPlaceCollection.connect(wallets[262]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[262]).updateCollection(
  //   "ExpertCourse",
  //   "Find and partner with experts at specific skills that do not have time to create a course to create course together where you will do all the heavy lifting",
  //   "https://i.ibb.co/XsBVWWp/367.jpg",
  //   "https://i.ibb.co/XsBVWWp/367.jpg",
  //   "https://i.ibb.co/djCTcQy/297.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("262marketPlaceCollection.updateCollection===========> Done!")

  // // 263
  // await marketPlaceCollection.connect(wallets[263]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[263]).updateCollection(
  //   "DateTwins",
  //   "Find twins/triplets/quadruplets/etc. to date, create a request for what you want, either a monogamous relationship with one twin or a polygamous one with both twins at the same time",
  //   "https://i.ibb.co/1G1N5KK/365.jpg",
  //   "https://i.ibb.co/1G1N5KK/365.jpg",
  //   "https://i.ibb.co/qWXh6d7/298.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("263marketPlaceCollection.updateCollection===========> Done!")

  // // 264
  // await marketPlaceCollection.connect(wallets[264]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[264]).updateCollection(
  //   "PathConnect",
  //   "Welcome to PathConnect, the inclusive platform where meaningful connections happen. We're dedicated to fostering friendships and relationships for individuals with disabilities, providing a safe and supportive environment where everyone can explore, connect, and build lasting bonds based on shared experiences, interests, and empathy. Whether you're looking for a friend who understands your unique journey or seeking a deeper connection, PathConnect is here to help you find companionship, support, and love within a warm and inclusive community. Join us today and discover the power of genuine connections.",
  //   "https://i.ibb.co/kqnQcq2/362.jpg",
  //   "https://i.ibb.co/kqnQcq2/362.jpg",
  //   "https://i.ibb.co/Pcc4GQp/299.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("264marketPlaceCollection.updateCollection===========> Done!")

  // // 265
  // await marketPlaceCollection.connect(wallets[265]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[265]).updateCollection(
  //   "BlindDate",
  //   "BlindDate is a daring and exciting platform where serendipity takes the reins of romance. On BlindDate, users embark on mystery-filled dates with fellow users, armed only with knowledge of their date's gender and sexual preferences. What sets BlindDate apart is the thrilling anonymity it offers, allowing connections to flourish based on personalities, interests, and genuine chemistry rather than superficial judgments. It's a refreshingly unpredictable way to explore meaningful connections and kindle the sparks of genuine attraction, making every encounter an adventure waiting to be written.",
  //   "https://i.ibb.co/Xj7T3Kf/360.jpg",
  //   "https://i.ibb.co/Xj7T3Kf/360.jpg",
  //   "https://i.ibb.co/7Smyk24/301.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("265marketPlaceCollection.updateCollection===========> Done!")

  // // 266
  // await marketPlaceCollection.connect(wallets[266]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[266]).updateCollection(
  //   "TheDatingScheme",
  //   "Guys pool resources together in the channel's valuepool to fund the channel's R&D efforts on increasing their level of testosterone and making them more attractive to the opposite gender. 80% of the fund is used to buy tickets to various banks for guys from the fund that get married under a staking contract. The resources they get depend on their couple score which is the average of 5 scores (number of kids - any number above 2 gives you the max score -; the number of years with the current partner -any number above 20 gives you the max score -; are the current partners the biological parents of the kids - this core is the number of kids for which that is the case divided by the total number of kids -; are the partners faithful to their staking marriage). We only recognize one wife at a time for each guy until all guys get a wife, after which we recognize as many as a member gets staked married to.",
  //   "https://i.ibb.co/ZS6w9s0/358.jpg",
  //   "https://i.ibb.co/ZS6w9s0/358.jpg",
  //   "https://i.ibb.co/mSjmYFK/300.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("266marketPlaceCollection.updateCollection===========> Done!")

  // // 267
  // await marketPlaceCollection.connect(wallets[267]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[267]).updateCollection(
  //   "VirginBank",
  //   "Users pool funds together to attract applications from virgin girls around the world. The girls first contact members of the bank to get to know them in order to pick one. Once they've picked one, they apply for coverage by the valuepool. The applications are processed through the bank's auditors who testify on applicants' effective virginity. Once accepted, both partners create bounties to certify they didn't know each other before meeting on the platform as well as to the terms of their lives together (who has what role and what it implies: the available roles are masculine/metro/feminine man/girl each with clear and unambiguous definitions provided by the channel). After this only can the valuepool provide them with access to tickets to various banks with respect to the guys' credit in the valuepool. 20% of the fund is invested.",
  //   "https://i.ibb.co/vqvSRSW/356.jpg",
  //   "https://i.ibb.co/vqvSRSW/356.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("267marketPlaceCollection.updateCollection===========> Done!")

  // // 268
  // await marketPlaceCollection.connect(wallets[268]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[268]).updateCollection(
  //   "VirginDowries",
  //   "Virgin girls get authenticated as such by auditors, partner with the channel, then put up a stake that suitors apply to with their terms and the period over which the virgin will touch the totality of the fund. The virgin can either decide straight away or go on a date with a potential suitor to figure out if she will marry him or not. Virgins have a bounty claimable by anyone, in place to guarantee to maintain their virginity until they find a husband.",
  //   "https://i.ibb.co/h7KfVVz/353.jpg",
  //   "https://i.ibb.co/h7KfVVz/353.jpg",
  //   "https://i.ibb.co/tJ0GsZg/201.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("268marketPlaceCollection.updateCollection===========> Done!")

  // // 269
  // await marketPlaceCollection.connect(wallets[269]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[269]).updateCollection(
  //   "LotteryVirgins",
  //   "Introducing LotteryVirgins, a unique platform that combines elements of matchmaking, financial security, and sustainable investment. Here, virginal individuals are authenticated by auditors and added to an exclusive chat group of lottery winners. Men participate in lotteries, contributing varying amounts, and when 1000 participants join, the lottery concludes, and winners gain access to a pool of virginal individuals. Partners can interact and eventually decide on marriage, but intimate interactions are postponed until then. Virgins offer a bounty, ensuring their virginity until they find a husband. Half of the winnings go into a valuepool, where elected VCs invest in businesses with the aim of generating at least 10% annual returns to sustain the fund. The other half covers couples' financial needs, including mortgages, food, education, and more, promoting financial stability for newlyweds. Couples adhere to specific rules, ensuring respect, fidelity, and shared responsibilities, with the fund offering support in conflict resolution and more. It's a revolutionary platform redefining relationships, finance, and investment for a brighter future.",
  //   "https://i.ibb.co/nwyjgd7/351.jpg",
  //   "https://i.ibb.co/nwyjgd7/351.jpg",
  //   "https://i.ibb.co/sWGRP6j/202.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("269marketPlaceCollection.updateCollection===========> Done!")

  // // 270
  // await marketPlaceCollection.connect(wallets[270]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[270]).updateCollection(
  //   "MintingLove",
  //   "Couples put up a description of their recipes on their channel (financial status of all partners, body count of all partners: null/extremely low/low/medium/high/extremely high, as well as the rules and roles of each partner), then partner with the channel, document their couple's conflicts as well as any relevant news about their couple they can share; they can create proposals in the channel's valuepool to get votes on litigations with the other partner(s). Their content can be offered through a paywall, or for free. Users buy their Nftickets to play the associated game. Auditors of that game interview the couples to figure out how far along in the couple minting process they are (from 0-99%; questions are asked to figure out how much they know each other; a great couple can predict each other's reaction in most situations. Partners might need to actually get put in said situation to get the actual reaction)",
  //   "https://i.ibb.co/Pts8X76/349.jpg",
  //   "https://i.ibb.co/Pts8X76/349.jpg",
  //   "https://i.ibb.co/5LqVjTh/203.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("270marketPlaceCollection.updateCollection===========> Done!")

  // // 271
  // await marketPlaceCollection.connect(wallets[271]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[271]).updateCollection(
  //   "ArrangedMarriage",
  //   "Users create requests with badges from auditors attesting to each one of their qualities/defaults/resources/etc. They specify the qualities of their partner along with the terms of the marriage and then pick from the requests they receive, from their marriage partner. There is no dating involved, pick and marry. Marriage is done by a priest or whichever partner of the channel users want, then either a couple's stake is created in the appropriate channel, or users choose to involve a specific government or both.",
  //   "https://i.ibb.co/2vbrXyt/347.jpg",
  //   "https://i.ibb.co/2vbrXyt/347.jpg",
  //   "https://i.ibb.co/Smr3X1b/204.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("271marketPlaceCollection.updateCollection===========> Done!")

  // // 272
  // await marketPlaceCollection.connect(wallets[272]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[272]).updateCollection(
  //   "SpiritualMates",
  //   "SpiritualMates is your sacred haven for connecting with like-minded individuals and groups to embark on profound spiritual journeys together. Whether you're seeking a partner for prayer, meditation, or any other religious practice, our platform harmonizes souls in pursuit of spiritual growth. Discover companions who share your faith, values, and aspirations, and nurture your spiritual connection. Join SpiritualMates and let the power of shared devotion guide you to meaningful partnerships and transformative experiences on your spiritual path.",
  //   "https://i.ibb.co/sWXVdBn/345.jpg",
  //   "https://i.ibb.co/sWXVdBn/345.jpg",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("272marketPlaceCollection.updateCollection===========> Done!")

  // // 273
  // await marketPlaceCollection.connect(wallets[273]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[273]).updateCollection(
  //   "Awaards",
  //   "Introducing Awaards, a groundbreaking platform set to revolutionize the world of awards ceremonies. Awaards aims to transcend traditional accolades like the Oscars, Grammys, Ballon d'Or, and others by providing a dynamic, inclusive, and transparent stage for artists, sportspeople, and creators of all kinds to be recognized and celebrated. With a global community at its heart and a commitment to fairness, Awaards empowers fans and industry experts alike to honor excellence, redefine prestige, and give rise to a new era of recognition where everyone has a voice in applauding the extraordinary talents that shape our world. Say goodbye to the old guard; Awaards is ushering in a future where recognition knows no bounds.",
  //   "https://i.ibb.co/KzZ15J4/343.jpg",
  //   "https://i.ibb.co/KzZ15J4/343.jpg",
  //   "https://i.ibb.co/PGS08rk/206.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("273marketPlaceCollection.updateCollection===========> Done!")

  // // 274
  // await marketPlaceCollection.connect(wallets[274]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[274]).updateCollection(
  //   "BettingFounders",
  //   "Find betting contracts by entrepreneurs/artists/athletes/etc. that enable you to bet on the success or failure of their company/catalog to reach various metrics by specific milestones. This enables them to raise money to reach those milestones by taking a percentage on each winnings and you to make money as well by winning. Companies or athletes cannot create betting events they have direct control over and should disclose any action they are taking or planning to take that might influence an event outcome (such as future or current discounts, ads, etc.) before they enable users to bet on them. The channel's auditors do regular audits of the companies to make sure they disclose all needed information accurately and there's no insider trading. The information is published on the channel's announcement page. Only a company or an artist can have an admin fee on bets that are about their performance.",
  //   "https://i.ibb.co/3mdMPF6/341.jpg",
  //   "https://i.ibb.co/3mdMPF6/341.jpg",
  //   "https://i.ibb.co/SxCtmx5/207.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("274marketPlaceCollection.updateCollection===========> Done!")

  // // 275
  // await marketPlaceCollection.connect(wallets[275]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[275]).updateCollection(
  //   "SharedMerch",
  //   "Find the valuepool of your favorite sports team, city, country, company, celebrity, etc. Join and make cotisations to fund new merch. A share of the revenue from the merch sale is distributed through the associated ARP",
  //   "https://i.ibb.co/b2Kn309/339.jpg",
  //   "https://i.ibb.co/b2Kn309/339.jpg",
  //   "https://i.ibb.co/D7m32qZ/208.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("275marketPlaceCollection.updateCollection===========> Done!")

  // // 276
  // await marketPlaceCollection.connect(wallets[276]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[276]).updateCollection(
  //   "CoupleGame",
  //   "Buy minutes and get an auditor to audit your couple and rate it. You make money when your rating is above average. The score is based on factors from the duration of your couple, the submissiveness of the woman to the guy, the number of kids wrt to the level of life (having more or fewer kids than you can financially handle penalizes you. You can make up for your biological kids with adoption), cheating penalizes the woman, conjugal violence or criminal activities penalizes both.",
  //   "https://i.ibb.co/hDr8rGb/336.jpg",
  //   "https://i.ibb.co/hDr8rGb/336.jpg",
  //   "https://i.ibb.co/RvSSybP/209.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("276marketPlaceCollection.updateCollection===========> Done!")

  // // 277
  // await marketPlaceCollection.connect(wallets[277]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[277]).updateCollection(
  //   "HouseSitting",
  //   "Travel the world staying at people's places for free when they are gone in exchange for taking care of their house/garden/pet/etc. House sitters need to have a bounty in place. Homeowners, even if they are not currently looking for one, can list their houses to recruit future house sitters for their houses.",
  //   "https://i.ibb.co/nRmcvk7/334.jpg",
  //   "https://i.ibb.co/nRmcvk7/334.jpg",
  //   "https://i.ibb.co/sv7nQ0F/210.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("277marketPlaceCollection.updateCollection===========> Done!")

  // // 278
  // await marketPlaceCollection.connect(wallets[278]).addCollection(0, 0, 0, 0, 0, 0, "0x77B0e504900997eE937c0C10E027236aeCD386EF", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[278]).updateCollection(
  //   "LiquorOnline",
  //   "Introducing LiquorOnline: Experience the ultimate convenience in spirits shopping with LiquorOnline. Whether you're looking for that special bottle of whiskey, a fine wine, curated selections of craft beers, or cigarettes, our platform offers an extensive range of premium liquors for every palate. Choose to purchase individual bottles for immediate delivery or unlock a world of spirits through our subscription paywall, ensuring a steady flow of your favorite libations delivered right to your doorstep on your schedule. With LiquorOnline, your ideal liquor shopping experience is just a click away, making quality spirits accessible and enjoyable for all. Cheers to effortless, elevated imbibing!",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "https://i.ibb.co/nRY33tn/205.jpg",
  //   "https://i.ibb.co/Pw5GB8c/211.jpg",
  //   "",
  //   "",
  //   "0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("278marketPlaceCollection.updateCollection===========> Done!")

  // // 279
  // await marketPlaceCollection.connect(wallets[279]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[279]).updateCollection(
  //   "XPromo",
  //   "Users create bounties with a balance of at least $100 US to be able to partner with the channel and be able to post content they have produced with adult content creators who are trying to advertise their channels/paywalls. Partners' bounties must state the terms of the channel which are: they cannot have a content up for more than 24hrs, they cannot post the same content more than once, they cannot advertise their own platforms, they cannot post non adult content (only nudes, oral sex or intercourse). The more viewers this platform gets, the more adult content creators will contact our partners for content and anyone with the right bounty setup can become a partner. So REGISTER NOW to increase the channel's user count and you might be contacted by an adult content creator looking to create content with you to advertise her channel.",
  //   "https://i.ibb.co/Smr3X1b/204.jpg",
  //   "https://i.ibb.co/Smr3X1b/204.jpg",
  //   "https://i.ibb.co/ZKp73zV/212.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("279marketPlaceCollection.updateCollection===========> Done!")

  // // 280
  // await marketPlaceCollection.connect(wallets[280]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[280]).updateCollection(
  //   "DashDeliver",
  //   "Introducing DashDeliver, your go-to platform for quick and convenient food delivery, bringing a world of culinary delights right to your doorstep. With an extensive network of local restaurants and eateries, DashDeliver ensures you can savor your favorite meals from the comfort of your home or office, all at the tap of a button. Whether it's a busy workday, a cozy night in, or a gathering with friends, DashDeliver makes dining easy, efficient, and exceptionally delicious. Explore a diverse menu, track your orders in real-time, and experience the ultimate in food delivery convenience with DashDeliver.",
  //   "https://i.ibb.co/jkLL2Qn/332.jpg",
  //   "https://i.ibb.co/jkLL2Qn/332.jpg",
  //   "https://i.ibb.co/vj7vcSh/213.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("280marketPlaceCollection.updateCollection===========> Done!")

  // // 282
  // await marketPlaceCollection.connect(wallets[282]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[282]).updateCollection(
  //   "PrivateEquity",
  //   "Find, buy, and refactor distressed companies to turn them around. As a distressed business, find experts at turning distressed businesses around. ",
  //   "https://i.ibb.co/dJfDszD/330.jpg",
  //   "https://i.ibb.co/dJfDszD/330.jpg",
  //   "https://i.ibb.co/0Q7YJBC/214.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("282marketPlaceCollection.updateCollection===========> Done!")

  // // 281
  // await marketPlaceCollection.connect(wallets[281]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[281]).updateCollection(
  //   "ConstructionInsurance",
  //   "Find valuepools that insure any unplanned expenses in construction projects. Businesses can also pool funds together to fund their collective expenses, purchase subscriptions, marketing, as well as subscribe to staff services",
  //   "https://i.ibb.co/nmSRk3f/328.jpg",
  //   "https://i.ibb.co/nmSRk3f/328.jpg",
  //   "https://i.ibb.co/YX89X0R/215.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("281marketPlaceCollection.updateCollection===========> Done!")

  //   // 212
  //   await marketPlaceCollection.connect(wallets[212]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[212]).updateCollection(
  //     "SoundStream",
  //     "Introducing SoundStream, the ultimate platform for artists to connect, share, and engage with their fans through exclusive music streaming. With SoundStream, artists can effortlessly broadcast their latest tracks, live performances, and behind-the-scenes content directly to their dedicated subscribers, creating an intimate and interactive music experience. Join our community of musicians and music enthusiasts, where artists can monetize their craft, and fans can access an unparalleled world of musical creativity, all in real-time. Start streaming your passion with SoundStream and let the music flow like never before.",
  //     "https://i.ibb.co/bNhCCCW/326.jpg",
  //     "https://i.ibb.co/bNhCCCW/326.jpg",
  //     "https://i.ibb.co/BVXSv6c/411-2.jpg",
  //     "",
  //     "",
  //     "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("212marketPlaceCollection.updateCollection===========> Done!")

  //   // 285
  //   await marketPlaceCollection.connect(wallets[285]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[285]).updateCollection(
  //     "Wills",
  //     "Find documentation about Wills as well as how to guides on how to use them",
  //     "https://i.ibb.co/wwc5D0Y/324.jpg",
  //     "https://i.ibb.co/wwc5D0Y/324.jpg",
  //     "https://i.ibb.co/Khgv5Y5/314-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("285marketPlaceCollection.updateCollection===========> Done!")

  //   // 286
  //   await marketPlaceCollection.connect(wallets[286]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[286]).updateCollection(
  //     "Bills",
  //     "Find documentation about Bills as well as how to guides on how to use them",
  //     "https://i.ibb.co/5RbJf1g/322.jpg",
  //     "https://i.ibb.co/5RbJf1g/322.jpg",
  //     "https://i.ibb.co/wyWRV09/320-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("286marketPlaceCollection.updateCollection===========> Done!")

  //   // 287
  //   await marketPlaceCollection.connect(wallets[287]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[287]).updateCollection(
  //     "ARPs",
  //     "Find documentation about ARPs as well as how to guides on how to use them",
  //     "https://i.ibb.co/k6d7nF6/320.jpg",
  //     "https://i.ibb.co/k6d7nF6/320.jpg",
  //     "https://i.ibb.co/tLsDs0x/315-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("287marketPlaceCollection.updateCollection===========> Done!")

  //   // 288
  //   await marketPlaceCollection.connect(wallets[288]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[288]).updateCollection(
  //     "SSI",
  //     "Find documentation about SSI as well as how to guides on how to use them",
  //     "https://i.ibb.co/L0zZRsW/318.jpg",
  //     "https://i.ibb.co/L0zZRsW/318.jpg",
  //     "https://i.ibb.co/mbFz3yP/311-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("288marketPlaceCollection.updateCollection===========> Done!")

  //   // 289
  //   await marketPlaceCollection.connect(wallets[289]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[289]).updateCollection(
  //     "Marketplace",
  //     "Find documentation about CanCan & eCollectible as well as how to guides on how to use them",
  //     "https://i.ibb.co/RPTsx1P/316.jpg",
  //     "https://i.ibb.co/RPTsx1P/316.jpg",
  //     "https://i.ibb.co/tDFGphs/309-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("289marketPlaceCollection.updateCollection===========> Done!")

  //   // 290
  //   await marketPlaceCollection.connect(wallets[290]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[290]).updateCollection(
  //     "Social Graph",
  //     "Find documentation about Profiles as well as how to guides on how to use them",
  //     "https://i.ibb.co/yfWc58N/314.jpg",
  //     "https://i.ibb.co/yfWc58N/314.jpg",
  //     "https://i.ibb.co/P6GZvMk/307-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("290marketPlaceCollection.updateCollection===========> Done!")

  //   // 291
  //   await marketPlaceCollection.connect(wallets[291]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //   console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //   await marketPlaceCollection.connect(wallets[291]).updateCollection(
  //     "PayCards",
  //     "Find documentation about PayCards as well as how to guides on how to use them",
  //     "https://i.ibb.co/tYt1QhM/492.jpg",
  //     "https://i.ibb.co/tYt1QhM/492.jpg",
  //     "https://i.ibb.co/s31v9Yh/305-2.jpg",
  //     "",
  //     "",
  //     "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //     "All",
  //     "",
  //     ""
  //   );
  //   console.log("291marketPlaceCollection.updateCollection===========> Done!")


  // // 292
  // await marketPlaceCollection.connect(wallets[292]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[292]).updateCollection(
  //   "XBets",
  //   "Enter into naughty bets with other users where if you win, you get to fuck them and if you lose, they get to keep your money",
  //   "https://i.ibb.co/y0bv1XC/312.jpg",
  //   "https://i.ibb.co/y0bv1XC/312.jpg",
  //   "https://i.ibb.co/HHk1ZxW/303-2.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("292marketPlaceCollection.updateCollection===========> Done!")

  // // 293
  // await marketPlaceCollection.connect(wallets[293]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[293]).updateCollection(
  //   "SipServe",
  //   "Introducing SipServe, a cutting-edge platform offering a comprehensive suite of services for the hospitality industry, much like Toast. SipServe provides restaurants, bars, and cafes with an all-in-one solution, including point-of-sale systems, inventory management, and customer engagement tools. With user-friendly interfaces, seamless payment processing, and powerful analytics, SipServe empowers businesses to streamline operations, enhance customer experiences, and boost their bottom line, making it the go-to choice for modernizing your hospitality business.",
  //   "https://i.ibb.co/BzLzsCG/490.jpg",
  //   "https://i.ibb.co/BzLzsCG/490.jpg",
  //   "https://i.ibb.co/xMwt58W/25-2.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("293marketPlaceCollection.updateCollection===========> Done!")

  // // 294
  // await marketPlaceCollection.connect(wallets[283]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[283]).updateCollection(
  //   "NotyCall",
  //   "Introducing NotyCall, your platform for booking one on one calls with partners all over the world either for a free virtual striptease or some other freaky activity during the call",
  //   "https://i.ibb.co/x5x3r5v/398.jpg",
  //   "https://i.ibb.co/x5x3r5v/398.jpg",
  //   "https://i.ibb.co/HCqK6C9/224.jpg",
  //   "",
  //   "",
  //   "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("294marketPlaceCollection.updateCollection===========> Done!")

  // // 295
  // await marketPlaceCollection.connect(wallets[294]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[294]).updateCollection(
  //   "FaithMate",
  //   "Introducing FaithMate, a purpose-driven platform dedicated to helping religious individuals forge meaningful connections based on shared values, beliefs, and faith. In a world where finding like-minded partners can be a challenge, FaithMate provides a safe and inclusive space for Christians, Muslims, Jews, Hindus, and practitioners of various faiths to meet and build authentic relationships. With FaithMate, you can embark on a journey towards love and companionship while staying true to your religious convictions. Join us today and discover a community that celebrates faith-centered dating like never before.",
  //   "https://i.ibb.co/P4z2Nrr/399.jpg",
  //   "https://i.ibb.co/P4z2Nrr/399.jpg",
  //   "https://i.ibb.co/tP3b6tf/262.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("295marketPlaceCollection.updateCollection===========> Done!")

  // // 296
  // await marketPlaceCollection.connect(wallets[295]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[295]).updateCollection(
  //   "SpotMap",
  //   "Introducing SpotMap, your all-in-one platform for discovering and reviewing local businesses. With an extensive database of restaurants, shops, services, and more, SpotMap empowers users to explore their neighborhoods, find top-rated businesses, read and write detailed reviews, and make informed decisions about where to dine, shop, and seek services. Whether you're looking for a cozy café, a trusted mechanic, or the latest hotspots in your city, SpotMap is your go-to destination for uncovering the best local experiences and sharing your insights with the community. Discover, review, and support local businesses with SpotMap today.",
  //   "https://i.ibb.co/99sGyNv/525.jpg",
  //   "https://i.ibb.co/99sGyNv/525.jpg",
  //   "https://i.ibb.co/wgF98tj/263.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("296marketPlaceCollection.updateCollection===========> Done!")

  // // 297
  // await marketPlaceCollection.connect(wallets[296]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[296]).updateCollection(
  //   "HelpRise",
  //   "Introducing HelpRise, a compassionate platform dedicated to empowering individuals and communities in times of need. Much like GoFundMe, HelpRise offers a seamless and user-friendly experience for creating personal fundraising campaigns. Whether it's for medical emergencies, educational pursuits, community projects, or any other worthy cause, HelpRise provides a supportive space for users to share their stories and mobilize support. With a trustworthy community of auditors that can testify to fund raisers genuine need for the funds they are raising, HelpRise ensures that every campaign has the potential to make a real impact. Someone's big problem can be an easy fix for a community. Join us in making a difference today, because together, we rise.",
  //   "https://i.ibb.co/vLc3vkV/526.jpg",
  //   "https://i.ibb.co/vLc3vkV/526.jpg",
  //   "https://i.ibb.co/z7sMPYC/264.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("297marketPlaceCollection.updateCollection===========> Done!")

  // // 298
  // await marketPlaceCollection.connect(wallets[297]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[297]).updateCollection(
  //   "ThriftSquad",
  //   "Introducing ThriftSquad, a revolutionary platform designed to transform the way you shop and save! ThriftSquad connects like-minded individuals looking to pool their purchasing power and collectively save on everyday expenses. Here's how it works: whenever you come into money, big or small, you contribute it to your valuepool. When you have something you want to buy, you submit a proposal. If no one can find a way to get it for you for free or at a discount, the valuepool votes on whether the purchase aligns with your savings goals and taking into account the urgency of your need. This innovative community-driven approach ensures that every expense is carefully considered, helping you maximize your savings while still getting what you need. Join ThriftSquad today and revolutionize the way you shop and spend!",
  //   "https://i.ibb.co/wRYC8xS/527.jpg",
  //   "https://i.ibb.co/wRYC8xS/527.jpg",
  //   "https://i.ibb.co/nBNqDxJ/265.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("298marketPlaceCollection.updateCollection===========> Done!")

  // // 299
  // await marketPlaceCollection.connect(wallets[298]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[298]).updateCollection(
  //   "TodaysNews",
  //   "Introducing TodaysNews, your personalized gateway to global events and perspectives. With TodaysNews, you can effortlessly track and connect with your preferred news reporters spanning diverse regions worldwide. Never miss a beat on current affairs, from the bustling streets of New York to the serene landscapes of Tokyo. Stay informed, gain nuanced insights, and engage with the world's most trusted journalists, all in one seamless platform. Join TodaysNews today and embark on an immersive journey through the lens of your favorite reporters, ensuring you're always in the know, no matter where the news breaks.",
  //   "https://i.ibb.co/jvFJsqR/528.jpg",
  //   "https://i.ibb.co/jvFJsqR/528.jpg",
  //   "https://i.ibb.co/Ypx9FLR/266.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("299marketPlaceCollection.updateCollection===========> Done!")

  // // 300
  // await marketPlaceCollection.connect(wallets[299]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[299]).updateCollection(
  //   "PlaceHolder",
  //   "Introducing PlaceHolder, the ingenious platform that puts an end to the frustration of long queues. Need to secure a spot but can't afford to wait for hours? PlaceHolder connects you with reliable individuals who will hold your place and provide real-time updates on queue progress. Whether it's a popular restaurant, concert, or a must-visit event, our trusted queue-holders ensure you're always in the loop, allowing you to arrive just in time. Say goodbye to wasted hours and hello to convenience with PlaceHolder!",
  //   "https://i.ibb.co/bvdgKhJ/529.jpg",
  //   "https://i.ibb.co/bvdgKhJ/529.jpg",
  //   "https://i.ibb.co/mq0gKYL/267.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("300marketPlaceCollection.updateCollection===========> Done!")

  // // 301
  // await marketPlaceCollection.connect(wallets[300]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[300]).updateCollection(
  //   "NeighborInsight",
  //   "Introducing NeighborInsight, your passport to informed decisions on global neighborhoods! Whether you're relocating for work, seeking a new place to call home, or planning a travel adventure, NeighborInsight offers a comprehensive platform for users to share and explore candid reviews of neighborhoods worldwide. From safety and amenities to local culture and community vibes, our community-driven insights provide an invaluable resource for anyone looking to make an informed move. Join us in building a network of well-informed neighbors, ensuring that wherever life takes you, you'll find a welcoming and comfortable place to settle in. Explore, share, and connect with NeighborInsight today!",
  //   "https://i.ibb.co/xJ4JRmx/530.jpg",
  //   "https://i.ibb.co/xJ4JRmx/530.jpg",
  //   "https://i.ibb.co/52pQ4m5/268.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("301marketPlaceCollection.updateCollection===========> Done!")

  // // 302
  // await marketPlaceCollection.connect(wallets[301]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[301]).updateCollection(
  //   "Episcribe",
  //   "Introducing Episcribe, your ultimate platform for seamless content creation and distribution. Much like Substack, Episcribe empowers writers, journalists, and creators of all kinds to effortlessly share their insights, stories, and expertise with a global audience. With a user-friendly interface and powerful customization tools, Episcribe offers a unique space for content creators to build their own dedicated communities. From personalized newsletters to in-depth articles, our platform supports various content formats, ensuring that your message reaches your audience exactly as you envision it. Join us at Episcribe, and embark on a journey where your voice is not just heard, but celebrated.",
  //   "https://i.ibb.co/g7qvC1q/531.jpg",
  //   "https://i.ibb.co/g7qvC1q/531.jpg",
  //   "https://i.ibb.co/mq0gKYL/267.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("302marketPlaceCollection.updateCollection===========> Done!")

  // // 303
  // await marketPlaceCollection.connect(wallets[302]).addCollection(0, 0, 0, 0, 0, 0, "0x77B0e504900997eE937c0C10E027236aeCD386EF", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[302]).updateCollection(
  //   "AquaOptima",
  //   "Introducing AquaOptima, your gateway to a sustainable water future! We connect individuals, businesses, and communities with cutting-edge companies specializing in water optimization services. With AquaOptima, you can access a curated network of experts who provide tailored solutions to reduce water wastage, enhance efficiency, and implement eco-friendly technologies. Whether you're a homeowner aiming to create a water-efficient household or a corporation seeking industrial-scale conservation strategies, AquaOptima empowers you to make impactful changes for a more sustainable, water-conscious world. Join us today and be a part of the movement towards responsible water consumption!",
  //   "https://i.ibb.co/89xCZ3z/532.jpg",
  //   "https://i.ibb.co/89xCZ3z/532.jpg",
  //   "https://i.ibb.co/Ypx9FLR/266.jpg",
  //   "",
  //   "",
  //   "0xdC94F841AedDe3Bb8fD311a61c2b4Fe40a47393d",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("303marketPlaceCollection.updateCollection===========> Done!")

  // // 304
  // await marketPlaceCollection.connect(wallets[303]).addCollection(0, 0, 0, 0, 0, 0, "0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[303]).updateCollection(
  //   "Greenify",
  //   "Introducing Greenify, the groundbreaking platform that democratizes incentive programs for planting trees or venturing in any green project. Through Greenify, anyone that has started a green project, can create a paywall in order to enable users to subscribe to the project. Upon subscription, users get a receipt which is proof of their participation in a green project. Auditors authenticate the carbon credits generated by the various projects so that subscribers can know exactly how much carbon credits they are individually responsible of generating. Greenify provides a simple, transparent and effective way for ordinary people to participate in the green transition by making it as simple as a NetFlix subscription.",
  //   "https://i.ibb.co/c3RVkx1/533.jpg",
  //   "https://i.ibb.co/c3RVkx1/533.jpg",
  //   "https://i.ibb.co/nBNqDxJ/265.jpg",
  //   "",
  //   "",
  //   "0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("304marketPlaceCollection.updateCollection===========> Done!")

  // // 305
  // await marketPlaceCollection.connect(wallets[304]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[304]).updateCollection(
  //   "JeonseConnect",
  //   "Introducing JeonseConnect, a groundbreaking platform revolutionizing the way we approach apartment rentals. Inspired by the proven Korean jeonse model, we offer a unique opportunity for tenants to enjoy a rent-free living experience for two years. In exchange, tenants contribute 70% of the apartment's value, which is securely held and returned at the end of the term. This innovative approach benefits both tenants and landlords, allowing the latter to strategically invest, stake, or deposit the funds to maximize returns during the two-year period. Join us at JeonseConnect and unlock a new era of flexible, cost-effective, and financially rewarding living arrangements.",
  //   "https://i.ibb.co/dcFhCBZ/534.jpg",
  //   "https://i.ibb.co/dcFhCBZ/534.jpg",
  //   "https://i.ibb.co/z7sMPYC/264.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("305marketPlaceCollection.updateCollection===========> Done!")

  // // 306
  // await marketPlaceCollection.connect(wallets[305]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[305]).updateCollection(
  //   "OrganDonor",
  //   "Find and join a valuepool for organ donors. Each valuepool mentions the organ(s) to be donated either after the death or while the host is still alive. Multiple people are either buried/burnt with precious organs that could save lives, the valuepools are sponsored by companies willing to advertise to the donors or support the valuepools. To be able to vest assets into the valuepool, the organ donor contacts an auditor of the valuepool for the legal formalities",
  //   "https://i.ibb.co/4pgckfP/535.jpg",
  //   "https://i.ibb.co/4pgckfP/535.jpg",
  //   "https://i.ibb.co/wgF98tj/263.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("306marketPlaceCollection.updateCollection===========> Done!")

  // // 307
  // await marketPlaceCollection.connect(wallets[306]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[306]).updateCollection(
  //   "Wardrobe",
  //   "Introducing Wardrobe, the revolutionary platform that grants you access to an entire community's fashion repertoire. With Wardrobe, you can subscribe to curated wardrobes and effortlessly acquire the latest styles, delivered straight to your doorstep the moment they become available. Imagine having a limitless array of fashion choices at your fingertips, from casual wear to high-end couture, all without the commitment of ownership. Say goodbye to the hassle of shopping and hello to a dynamic and ever-evolving wardrobe tailored to your unique taste. Join Wardrobe today and experience fashion like never before.",
  //   "https://i.ibb.co/MGPTcCZ/536.jpg",
  //   "https://i.ibb.co/MGPTcCZ/536.jpg",
  //   "https://i.ibb.co/tP3b6tf/262.jpg",
  //   "",
  //   "",
  //   "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("307marketPlaceCollection.updateCollection===========> Done!")

  // // 308
  // await marketPlaceCollection.connect(wallets[307]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[307]).updateCollection(
  //   "DDay",
  //   "Introducing DDay: Imagine effortlessly managing your special event invitations, whether it's your birthday bash, wedding extravaganza, or any cherished occasion. DDay simplifies the process by allowing you to sell tickets to your event or gift them in exchange for heartfelt promises, ensuring that your celebration is not only memorable but also perfectly tailored to your desires. Experience the future of event planning with DDay, where convenience meets the joy of sharing unforgettable moments with your loved ones.",
  //   "https://i.ibb.co/5rtHF5X/537.jpg",
  //   "https://i.ibb.co/5rtHF5X/537.jpg",
  //   "https://i.ibb.co/HG35ztb/261.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("308marketPlaceCollection.updateCollection===========> Done!")

  // // 309
  // await marketPlaceCollection.connect(wallets[308]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[308]).updateCollection(
  //   "YardShare",
  //   "Introducing YardShare, the innovative platform that empowers homeowners to transform their outdoor spaces into valuable, rentable amenities. Whether you have a spacious backyard, a sparkling swimming pool, or a sprawling football field, YardShare connects you with individuals in search of unique outdoor experiences. Earn extra income while sharing the joy of your well-maintained spaces, from hosting events to providing a serene retreat for relaxation. Our user-friendly interface ensures a seamless process, handling everything from listings to payments, so you can focus on enjoying the benefits of your inviting outdoor oasis. Embrace the potential of your property with YardShare and join our community of hosts today!",
  //   "https://i.ibb.co/rQsK1xk/538.jpg",
  //   "https://i.ibb.co/rQsK1xk/538.jpg",
  //   "https://i.ibb.co/MnC3702/260.jpg",
  //   "",
  //   "",
  //   "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("309marketPlaceCollection.updateCollection===========> Done!")

  // // 310
  // await marketPlaceCollection.connect(wallets[309]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[309]).updateCollection(
  //   "fIOU",
  //   "Users accumulate IOUs from rendering services to others on the platform in exchange for IOUs from an auditor after completion of the stake used to request the favor/service. After having accumulated enough IOUs, a user can apply for or request friendship applications from other users with a certain minimum number of IOUs or with a certain type of IOUs (house crashing, lending of gaming console/phone/laptop..., wingman, school/work favors...). It's against the rules to use the platform to lend/borrow money",
  //   "https://i.ibb.co/2sbnjB1/539.jpg",
  //   "https://i.ibb.co/2sbnjB1/539.jpg",
  //   "https://i.ibb.co/ZMnLyS1/259.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("310marketPlaceCollection.updateCollection===========> Done!")

  // // 311
  // await marketPlaceCollection.connect(wallets[310]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[310]).updateCollection(
  //   "LegalFounders",
  //   "Introducing LegalFounders, the groundbreaking platform designed to streamline and elevate your international business ventures. We understand the unique challenges of establishing companies in countries where local founders are a prerequisite. With LegalFounders, you gain access to a curated network of accomplished entrepreneurs and professionals who are nationals of the countries you're targeting. Our platform simplifies the recruitment process, ensuring you find the right co-founders with the essential local expertise and insights needed to navigate regulatory landscapes and cultural nuances. Say goodbye to the complexities of international entrepreneurship and embark on your global business journey with confidence, backed by a team of dedicated, locally-rooted founders from LegalFounders.",
  //   "https://i.ibb.co/6XksxXJ/540.jpg",
  //   "https://i.ibb.co/6XksxXJ/540.jpg",
  //   "https://i.ibb.co/0Jg0twR/258.jpg",
  //   "",
  //   "",
  //   "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("311marketPlaceCollection.updateCollection===========> Done!")

  // // 312
  // await marketPlaceCollection.connect(wallets[311]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[311]).updateCollection(
  //   "SurgeryAbroad",
  //   "Introducing SurgeryAbroad, your seamless gateway to a world of global healthcare options. Our platform specializes in connecting individuals with trusted channels that facilitate overseas surgical procedures. Whether you're seeking cutting-edge treatments, specialized expertise, or cost-effective solutions, SurgeryAbroad streamlines the entire process, from booking to recovery. We provide a curated selection of accredited clinics and hospitals, ensuring your journey towards better health is smooth and worry-free. Say goodbye to the complexities of medical travel; with SurgeryAbroad, you can confidently book, undergo surgery, and return home, knowing you've accessed world-class healthcare on your terms. Explore a new horizon in healthcare with SurgeryAbroad.",
  //   "https://i.ibb.co/qshPWWJ/541.jpg",
  //   "https://i.ibb.co/qshPWWJ/541.jpg",
  //   "https://i.ibb.co/0qS11Tt/257.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("312marketPlaceCollection.updateCollection===========> Done!")

  // // 313
  // await marketPlaceCollection.connect(wallets[312]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[312]).updateCollection(
  //   "StudyGroups",
  //   "Introducing StudyGroups, the revolutionary platform designed to effortlessly connect students with study groups in their vicinity. Say goodbye to the struggle of finding like-minded peers for collaborative learning! With StudyGroups, you can seamlessly browse through a wide array of study groups tailored to your subjects and interests, all conveniently located nearby. The intuitive interface allows you to apply to these groups with just a few clicks, ensuring a smooth and hassle-free experience. Whether you're seeking to ace your exams or simply enhance your understanding of a specific topic, StudyGroups is your go-to destination for productive and engaging group study sessions. Join us today and unlock a world of collaborative learning opportunities right at your fingertips!",
  //   "https://i.ibb.co/7JLr9tM/542.jpg",
  //   "https://i.ibb.co/7JLr9tM/542.jpg",
  //   "https://i.ibb.co/yP1b15F/256.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("313marketPlaceCollection.updateCollection===========> Done!")

  // // 314
  // await marketPlaceCollection.connect(wallets[313]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[313]).updateCollection(
  //   "GetGo",
  //   "Introducing GetGo, your all-in-one platform for seamless vehicle rentals! Whether you're in need of a sleek city car, a rugged mountain bike, a serene sailboat, or even a high-flying private jet, GetGo connects you with a vast network of trusted vehicle owners. With user-friendly listings, secure transactions, and a wide range of options to suit every adventure, GetGo ensures that your journey, be it on land, sea, or air, is tailored to perfection. Explore, experience, and embark on your next adventure with GetGo today!",
  //   "https://i.ibb.co/8gWRKgy/543.jpg",
  //   "https://i.ibb.co/8gWRKgy/543.jpg",
  //   "https://i.ibb.co/YcxgXf6/255.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("314marketPlaceCollection.updateCollection===========> Done!")

  // // 316
  // await marketPlaceCollection.connect(wallets[315]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[315]).updateCollection(
  //   "TrashCompress",
  //   "Introducing TrashCompress: Your Hassle-Free Waste Management Solution! Say goodbye to overflowing trash bins and the hassle of finding reliable waste management services. With TrashCompress, connecting with certified experts to efficiently compress and clean up your trash bin has never been easier. Our platform streamlines the process, ensuring you have access to trusted professionals who specialize in waste compression and bin sanitation. Experience the convenience of a clutter-free, odor-free environment while contributing to a more sustainable future. Join TrashCompress today and let us handle the dirty work, so you can enjoy a cleaner, greener space hassle-free!",
  //   "https://i.ibb.co/Wf5BzmD/544.jpg",
  //   "https://i.ibb.co/Wf5BzmD/544.jpg",
  //   "https://i.ibb.co/rm9ghLY/254.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("316marketPlaceCollection.updateCollection===========> Done!")

  // // 317
  // await marketPlaceCollection.connect(wallets[316]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[316]).updateCollection(
  //   "CoParent",
  //   "Introducing CoParent, a groundbreaking platform designed to facilitate secure and legally binding co-parenting arrangements. For individuals seeking a caring and committed environment for their child's upbringing, CoParent offers a revolutionary solution. Our platform connects you with like-minded individuals who are not only eager to adopt and co-parent but are also willing to navigate the legalities of this unique partnership. With CoParent, you can embark on a collaborative parenting journey, ensuring your child receives the love, support, and stability they deserve, all under a legally structured framework. Say goodbye to the complexities of traditional adoption processes and embrace a new era of co-parenting with CoParent.",
  //   "https://i.ibb.co/bvRj5Kf/545.jpg",
  //   "https://i.ibb.co/bvRj5Kf/545.jpg",
  //   "https://i.ibb.co/hyQ4xjW/253.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("317marketPlaceCollection.updateCollection===========> Done!")

  // // 318
  // await marketPlaceCollection.connect(wallets[317]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[317]).updateCollection(
  //   "LoadLink",
  //   "Introducing LoadLink, your seamless solution for connecting truck owners with individuals or businesses in need of reliable transportation services. Whether you're a seasoned truck owner or a business with goods to move, LoadLink streamlines the process, ensuring efficient and cost-effective logistics. Our user-friendly platform allows you to post your load requirements or available trucks with just a few clicks. With a vast network of trusted drivers, we prioritize safety, timeliness, and competitive pricing. Say goodbye to logistical headaches and hello to a simplified, efficient way to move your loads. Join LoadLink today and experience a new era of hassle-free transportation.",
  //   "https://i.ibb.co/VMdzKhc/546.jpg",
  //   "https://i.ibb.co/VMdzKhc/546.jpg",
  //   "https://i.ibb.co/PQNhbf2/252.jpg",
  //   "",
  //   "",
  //   "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("318marketPlaceCollection.updateCollection===========> Done!")

  // // 319
  // await marketPlaceCollection.connect(wallets[318]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[318]).updateCollection(
  //   "TarzanPal",
  //   "Introducing TarzanPal, your ultimate destination for sourcing captivating wild animals for video shoots. Whether you're working on a film, commercial, or photography project that requires the mesmerizing presence of nature's most majestic creatures, TarzanPal has you covered. Our platform connects you with a carefully vetted network of professional animal handlers and trainers, ensuring a safe and controlled environment for both the animals and your crew. With a wide range of species available, from exotic birds to big cats, TarzanPal makes it seamless to add an authentic touch of the wild to your visual productions. Elevate your content with TarzanPal and bring a new level of awe-inspiring authenticity to your creative endeavors.",
  //   "https://i.ibb.co/LPrvR1z/413-jpg.jpg",
  //   "https://i.ibb.co/LPrvR1z/413-jpg.jpg",
  //   "https://i.ibb.co/Ky6gWQn/251.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("319marketPlaceCollection.updateCollection===========> Done!")

  // // 320
  // await marketPlaceCollection.connect(wallets[319]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[319]).updateCollection(
  //   "StarShot",
  //   "Introducing StarShot Tickets, your gateway to exclusive photoshoot events with your favorite celebrities! Imagine getting up close and personal with the stars you admire most, capturing moments that will last a lifetime. With StarShot, you have direct access to a curated selection of photoshoot events featuring renowned celebrities from various industries. From Hollywood icons to sports legends and musical superstars, our platform ensures you don't just attend an event, but leave with treasured memories and professionally shot photographs. Say goodbye to long queues and uncertain entry – secure your spot at the hottest celebrity photoshoots with StarShot Tickets!",
  //   "https://i.ibb.co/dQs9LT1/24.jpg",
  //   "https://i.ibb.co/dQs9LT1/24.jpg",
  //   "https://i.ibb.co/RCZHGMj/250.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("320marketPlaceCollection.updateCollection===========> Done!")

  // // 321
  // await marketPlaceCollection.connect(wallets[320]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[320]).updateCollection(
  //   "DrAAS",
  //   "Introducing DrAAS, your gateway to seamless Drone-as-a-Service solutions. DrAAS revolutionizes the way businesses leverage drone technology by offering a comprehensive platform for on-demand aerial services. Whether it's aerial surveys, mapping, surveillance, or specialized missions, DrAAS connects you with a network of certified drone operators equipped with state-of-the-art equipment. With user-friendly interfaces and robust safety protocols, DrAAS ensures efficient, reliable, and fully compliant drone operations, empowering industries from agriculture to construction with unprecedented aerial insights. Elevate your operations with DrAAS and experience the future of on-demand drone services at your fingertips.",
  //   "https://i.ibb.co/4FMPtZq/29.jpg",
  //   "https://i.ibb.co/4FMPtZq/29.jpg",
  //   "https://i.ibb.co/YTgvmx7/249.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("3201marketPlaceCollection.updateCollection===========> Done!")

  // // 322
  // await marketPlaceCollection.connect(wallets[321]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[321]).updateCollection(
  //   "WhatchParty",
  //   "Introducing WhatchParty, the ultimate platform for socializing through shared experiences! Whether it's catching a thrilling game, a blockbuster movie, or a live show, WhatchParty connects enthusiasts looking for a vibrant group atmosphere. Say goodbye to solo viewings and hello to a dynamic community of like-minded party-goers. With WhatchParty, finding and purchasing tickets to the hottest events has never been easier. Join us and be part of a revolution in entertainment, where the fun multiplies when shared!",
  //   "https://i.ibb.co/pn1sv1j/30.jpg",
  //   "https://i.ibb.co/pn1sv1j/30.jpg",
  //   "https://i.ibb.co/G3Q4jgY/248.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("322marketPlaceCollection.updateCollection===========> Done!")

  // // 323
  // await marketPlaceCollection.connect(wallets[322]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[322]).updateCollection(
  //   "JobShare",
  //   "Introducing JobShare Connect, the innovative platform revolutionizing the job market. Designed for both employers seeking dynamic solutions and employees looking for flexible work arrangements, JobShare Connect seamlessly matches full-time job opportunities with two part-time working individuals. This groundbreaking platform not only boosts workforce productivity but also empowers employees to achieve better work-life balance. Say goodbye to the rigid nine-to-five and embrace a new era of collaborative, shared employment. Join JobShare Connect today and unlock a world of possibilities for both employers and job seekers alike!",
  //   "https://i.ibb.co/vxPSGXs/31.jpg",
  //   "https://i.ibb.co/vxPSGXs/31.jpg",
  //   "https://i.ibb.co/0KBLkbY/247.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("323marketPlaceCollection.updateCollection===========> Done!")

  // // 324
  // await marketPlaceCollection.connect(wallets[323]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[323]).updateCollection(
  //   "CareMate",
  //   "Introducing CareMate, the dedicated platform revolutionizing elderly care. We understand the importance of finding compassionate, reliable live-in caregivers for your loved ones, and that's why we've created a seamless marketplace connecting families with experienced caregivers. Our carefully vetted professionals offer personalized support, ensuring the elderly can comfortably age in place. From assistance with daily activities to companionship and specialized care, CareMate provides a trusted space for families to find the perfect live-in caregiver tailored to their unique needs, bringing peace of mind and a higher quality of life to both seniors and their loved ones.",
  //   "https://i.ibb.co/SxBzDyr/34.jpg",
  //   "https://i.ibb.co/SxBzDyr/34.jpg",
  //   "https://i.ibb.co/VCSygQV/246.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("324marketPlaceCollection.updateCollection===========> Done!")

  // // 325
  // await marketPlaceCollection.connect(wallets[324]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[324]).updateCollection(
  //   "MatchBounty",
  //   "Introducing MatchBounty, the innovative platform revolutionizing the way we find meaningful connections. Here, users set bounties to reward individuals who successfully introduce them to potential life partners. Whether you're seeking a soulmate, or a lifelong companion, MatchBounty empowers you to put a value on meaningful introductions. It's a dynamic space where friendships can flourish into romantic relationships, and where genuine connections are celebrated and rewarded. Join MatchBounty today and let the power of human connections redefine your journey to love.",
  //   "https://i.ibb.co/R3NSB7T/36.jpg",
  //   "https://i.ibb.co/R3NSB7T/36.jpg",
  //   "https://i.ibb.co/K0rSK8y/245.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("325marketPlaceCollection.updateCollection===========> Done!")

  //  // 326
  //  await marketPlaceCollection.connect(wallets[325]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[325]).updateCollection(
  //    "CSAAS",
  //    "Introducing CSAAS, the revolutionary Cold Storage as a Service platform that seamlessly connects users with surplus cold storage to those in need of additional refrigeration space. Whether you're a business with excess storage capacity or one in search of temporary or long-term cold storage solutions, CSAAS simplifies the process. With our user-friendly interface and secure transactions, finding or renting out cold storage has never been more efficient. Join CSAAS today and be a part of the future of flexible and convenient cold storage solutions.",
  //    "https://i.ibb.co/sqqZ6fc/37.jpg",
  //    "https://i.ibb.co/sqqZ6fc/37.jpg",
  //    "https://i.ibb.co/Khhk0wg/244.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("326marketPlaceCollection.updateCollection===========> Done!")

  //  // 327
  //  await marketPlaceCollection.connect(wallets[326]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[326]).updateCollection(
  //    "AirConnect",
  //    "Introducing AirConnect, the seamless platform that bridges users to dedicated agents, ensuring hassle-free airtime purchases whenever and wherever you need it. Whether you're topping up your mobile phone credit, recharging data, or sending airtime to a loved one, AirConnect simplifies the process. With a few taps, you can connect with a trusted agent who will swiftly process your airtime purchase, saving you time and providing peace of mind. Say goodbye to the inconvenience of running out of credit; AirConnect keeps you connected effortlessly.",
  //    "https://i.ibb.co/Qnc0CX3/39.jpg",
  //    "https://i.ibb.co/Qnc0CX3/39.jpg",
  //    "https://i.ibb.co/vvNBkvM/243.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("327marketPlaceCollection.updateCollection===========> Done!")

  //  // 328
  //  await marketPlaceCollection.connect(wallets[327]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[327]).updateCollection(
  //    "MarketLink",
  //    "Introducing MarketLink, your gateway to a vast network of trusted wholesale suppliers across industries. Whether you're a retailer looking to source products in bulk or a business owner seeking reliable suppliers, MarketLink simplifies the process. Our platform streamlines communication, ensuring seamless transactions and timely deliveries. With a diverse range of categories and verified suppliers, finding the right products at competitive prices has never been easier. Join MarketLink today and unlock a world of wholesale opportunities at your fingertips.",
  //    "https://i.ibb.co/6vTH6Qr/40.jpg",
  //    "https://i.ibb.co/6vTH6Qr/40.jpg",
  //    "https://i.ibb.co/xMtBGQW/242.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("328marketPlaceCollection.updateCollection===========> Done!")

  //  // 329
  //  await marketPlaceCollection.connect(wallets[328]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[328]).updateCollection(
  //    "PartyStream",
  //    "Introducing PartyStream: The Ultimate Social Hub for Live Event Sharing! Elevate your party experience to a whole new level with PartyStream, where users can instantly live stream or share captivating snapshots of the hottest parties and events they're attending in real-time. Whether it's a pulsating nightclub, an intimate gathering with friends, or a lively outdoor festival, PartyStream allows you to virtually invite your followers into the heart of the action. Join a vibrant community of party enthusiasts, discover trending events, and immerse yourself in the electrifying atmosphere, all through a seamless, user-friendly platform. Don't miss a beat—download PartyStream now and let the good times roll!",
  //    "https://i.ibb.co/XL6Pyq3/42.jpg",
  //    "https://i.ibb.co/XL6Pyq3/42.jpg",
  //    "https://i.ibb.co/WVSDKVK/241.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("329marketPlaceCollection.updateCollection===========> Done!")

  //  // 330
  //  await marketPlaceCollection.connect(wallets[329]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[329]).updateCollection(
  //    "DreamTales",
  //    "Introducing DreamTales, where enchanting bedtime stories come to life! With DreamTales, parents can now treat their children to a nightly dose of magic, as professional storytellers weave captivating tales that transport young minds to extraordinary worlds. Subscribing is a breeze, and each night, like clockwork, a new story arrives, ready to whisk your little ones away on an adventure of imagination and wonder. Watch as their eyes light up with anticipation, creating cherished bedtime memories that will stay with them forever. Give your child the gift of DreamTales, and let the power of storytelling inspire their dreams.",
  //    "https://i.ibb.co/t4KS593/44.jpg",
  //    "https://i.ibb.co/t4KS593/44.jpg",
  //    "https://i.ibb.co/dgG19rS/240.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("330marketPlaceCollection.updateCollection===========> Done!")

  //  // 331
  //  await marketPlaceCollection.connect(wallets[330]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[330]).updateCollection(
  //    "Tourify",
  //    "Introducing Tourify, your gateway to seamless property exploration! Whether you're in search of your dream home or a promising investment, Tourify connects you with experienced agents who offer both virtual and in-person tours of properties you're interested in. Our platform ensures that you never miss a detail, allowing you to explore every nook and cranny from the comfort of your home or in real life. Say goodbye to the hassle of scheduling tours and hello to a personalized, convenient, and efficient property-hunting experience. Join Tourify today and embark on your journey towards finding the perfect place to call your own!",
  //    "https://i.ibb.co/9cY2Y0B/47.jpg",
  //    "https://i.ibb.co/9cY2Y0B/47.jpg",
  //    "https://i.ibb.co/5Bhg9F5/239.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("331marketPlaceCollection.updateCollection===========> Done!")

  //  // 332
  //  await marketPlaceCollection.connect(wallets[331]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[331]).updateCollection(
  //    "MicroLendPro",
  //    "Our company, MicroLendPro, is dedicated to providing accessible and affordable financing options for individuals and small businesses. We understand that traditional banking systems often fail to meet the needs of those who require smaller loans or have less than perfect credit. That's why we've created a platform that connects borrowers with a network of reputable micro lenders, offering flexible repayment terms and competitive interest rates. Our cutting-edge technology allows us to streamline the loan process, making it faster and more convenient for both borrowers and lenders. With MicroLendPro, you can easily find and borrow from trusted micro lenders, giving you the financial freedom to achieve your goals.",
  //    "https://i.ibb.co/7kgsB0h/49.jpg",
  //    "https://i.ibb.co/7kgsB0h/49.jpg",
  //    "https://i.ibb.co/8z5NKck/238.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("332marketPlaceCollection.updateCollection===========> Done!")

  //  // 333
  //  await marketPlaceCollection.connect(wallets[332]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[332]).updateCollection(
  //    "DateVote",
  //    "Introducing DateVote - the revolutionary new way to find love. At DateVote, we believe that the best way to find your perfect match is by letting a group of like-minded individuals vote on whether or not they think you're compatible with their friend. It's simple: sign up for our service and then start browsing profiles of potential matches. Once you see someone you're interested in, submit your profile to their valuepool and wait for the results. If a majority of voters say yes, it's a match made in heaven! And the best part? Our system ensures that everyone has an equal say in the matching process, so there's no pressure or awkwardness when asking someone out. Depending on the valuepool, you will need the approval of the other party you are planning to date before submitting a proposal. Join DateVote today and let the power of democracy guide you towards true love!",
  //    "https://i.ibb.co/3C4r6MW/50.jpg",
  //    "https://i.ibb.co/3C4r6MW/50.jpg",
  //    "https://i.ibb.co/rsPyb2F/237.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("333marketPlaceCollection.updateCollection===========> Done!")

  //  // 334
  //  await marketPlaceCollection.connect(wallets[333]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[333]).updateCollection(
  //    "NaTours",
  //    "Are you looking for an immersive experience that combines education and adventure? Look no further than Nature Tours Online! Our innovative platform connects travelers with guided excursions to some of the most renowned wildlife conservations sites across the globe. From majestic zoos to breathtaking national parks and remote nature reserves, we offer a wide range of tours led by knowledgeable experts who will bring the beauty and wonder of the natural world to life. Booking is easy and convenient, allowing you to plan your next unforgettable vacation with just a few simple clicks. Let us take you on an unforgettable journey into the heart of nature!",
  //    "https://i.ibb.co/KGHQZwr/51.jpg",
  //    "https://i.ibb.co/KGHQZwr/51.jpg",
  //    "https://i.ibb.co/sWRfbhZ/236.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("334marketPlaceCollection.updateCollection===========> Done!")

  //  // 335
  //  await marketPlaceCollection.connect(wallets[334]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[334]).updateCollection(
  //    "InsuranceMatch",
  //    "Meet InsuranceMatch, the ultimate solution for anyone seeking personalized guidance on their insurance needs. Our cutting-edge platform pairs users with experienced professionals who understand the complexities of the industry and can recommend tailored policies based on individual circumstances. Whether you need coverage for healthcare, homeownership, auto, or any other aspect of your life, our team of experts has got you covered. With InsuranceMatch, you can rest assured knowing that you'll receive expert advice and support every step of the way. Trust us to help you make informed decisions about protecting yourself and those you love.",
  //    "https://i.ibb.co/KWF3DBX/52.jpg",
  //    "https://i.ibb.co/KWF3DBX/52.jpg",
  //    "https://i.ibb.co/ZHzpFpB/235.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("335marketPlaceCollection.updateCollection===========> Done!")

  //  // 336
  //  await marketPlaceCollection.connect(wallets[335]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[335]).updateCollection(
  //    "ATherapy",
  //    "Introducing ATherapy, the premier platform connecting athletes of all levels with top-notch therapists and practitioners offering a variety of therapeutic services and products. As an amateur or professional athlete, taking care of your physical well-being is crucial to achieving peak performance. Our network of qualified professionals provides customized treatment plans tailored to meet your specific needs, whether you're recovering from injury, managing chronic pain, or simply looking to optimize your training regimen. With ATherapy, you can trust that you'll receive expert guidance and support every step of the way towards optimal physical health.",
  //    "https://i.ibb.co/K0TWJx2/53.jpg",
  //    "https://i.ibb.co/K0TWJx2/53.jpg",
  //    "https://i.ibb.co/BKMrjRm/234.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("336marketPlaceCollection.updateCollection===========> Done!")

  //  // 337
  //  await marketPlaceCollection.connect(wallets[336]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[336]).updateCollection(
  //    "TruthTip",
  //    "Presenting TruthTip, the revolutionary platform empowering citizens everywhere to expose corrupt practices and hold wrongdoers accountable. By leveraging blockchain technology and cryptocurrency rewards, TruthTip enables users to securely share evidence of fraudulent activities and receive financial compensation from like-minded supporters committed to upholding transparency and integrity. This groundbreaking initiative fosters a community dedicated to exposing corruption and promoting positive change in government, corporate, and social institutions. Embrace your role as a responsible citizen and join the movement towards a fairer, more equitable society with TruthTip.",
  //    "https://i.ibb.co/q02wpZz/54.jpg",
  //    "https://i.ibb.co/q02wpZz/54.jpg",
  //    "https://i.ibb.co/yhxBQLY/233.jpg",
  //    "",
  //    "",
  //    "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("337marketPlaceCollection.updateCollection===========> Done!")

  //  // 338
  //  await marketPlaceCollection.connect(wallets[337]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[337]).updateCollection(
  //    "Shield",
  //    "Protecting high-profile individuals requires utmost discretion and expertise. That's why Shield was created - a premium platform connecting elite clients with seasoned security professionals vetted for exceptional skills and reliability. Whether you're an executive seeking personal protection or a company safeguarding key personnel, our extensive network of trained security agents ensures complete confidentiality and safety. With Shield, you can feel confident knowing that your privacy and well-being are in the hands of highly skilled professionals, providing peace of mind in even the most demanding situations.",
  //    "https://i.ibb.co/pbbQvYS/55.jpg",
  //    "https://i.ibb.co/pbbQvYS/55.jpg",
  //    "https://i.ibb.co/TvvmDnv/232.jpg",
  //    "",
  //    "",
  //    "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("338marketPlaceCollection.updateCollection===========> Done!")

  //  // 339
  //  await marketPlaceCollection.connect(wallets[338]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[338]).updateCollection(
  //    "Lease2Own",
  //    "Introducing Lease2Own Marketplace, the innovative platform transforming the traditional buying and selling process for both tangible goods and real estate assets. Through our unique lease-to-own model, users can now list and purchase items or properties without the constraints of upfront payment or credit checks. Simply set your terms, including monthly rent and option fees, and let interested parties express interest in making regular payments toward eventual ownership. It's never been easier to turn your possessions or property into cash flow generators while giving others access to valuable assets they may not otherwise be able to afford. Experience the future of transactions with Lease2Own Marketplace today.",
  //    "https://i.ibb.co/sRsQ2vw/56.jpg",
  //    "https://i.ibb.co/sRsQ2vw/56.jpg",
  //    "https://i.ibb.co/5hZTrBZ/231.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("339marketPlaceCollection.updateCollection===========> Done!")

  //  // 340
  //  await marketPlaceCollection.connect(wallets[339]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[339]).updateCollection(
  //    "QuizMatch",
  //    "Welcome to QuizMatch, the first-of-its-kind platform combining the power of SurveyMonkey with a unique bounty system to ensure authentic connections between compatible partners. By creating custom quizzes tailored to their preferences, users can gain insightful information about potential suitors before engaging in communication. All users have bounties to guarantee honesty when answering the quizzes. This comprehensive approach encourages honesty and facilitates genuine relationships among members. Join QuizMatch today and discover the true compatibility of your ideal partner.",
  //    "https://i.ibb.co/cYgjL54/58.jpg",
  //    "https://i.ibb.co/cYgjL54/58.jpg",
  //    "https://i.ibb.co/L9Br6k0/230.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("340marketPlaceCollection.updateCollection===========> Done!")

  //  // 341
  //  await marketPlaceCollection.connect(wallets[340]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[340]).updateCollection(
  //    "Chef@Home",
  //    "Meet Chef@Home, the ultimate destination for foodies searching for convenient, personalized culinary experiences within the comfort of their own abodes. Our intuitive platform connects users with talented chefs available on demand, ready to whip up gourmet creations tailored to dietary restrictions, taste buds, and desired ambiance. From intimate dinner parties to family gatherings, Chef@Home eliminates the stress of grocery shopping, menu planning, and cleanup. Enjoy restaurant-quality cuisine crafted just for you, delivered straight to your doorstep. Savor each moment with loved ones and leave the cooking to the pros. Sign up for Chef@Home today!",
  //    "https://i.ibb.co/NrS3Brt/60.jpg",
  //    "https://i.ibb.co/NrS3Brt/60.jpg",
  //    "https://i.ibb.co/DVZ9bpp/229.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("341marketPlaceCollection.updateCollection===========> Done!")

  //  // 342
  //  await marketPlaceCollection.connect(wallets[341]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[341]).updateCollection(
  //    "Plateful",
  //    "Say hello to Plateful, the revolutionary community-driven platform connecting food lovers across the globe. Users can share their meal plans for the week, allowing others to 'buy in' and secure a portion of the same homemade dish. Hosts simply need to cook extra servings, ensuring there's plenty to go around for everyone involved. Imagine enjoying diverse, home-style meals without lifting a finger in the kitchen! As a member of the Plateful community, you'll have access to a wide range of flavors and dietary options, fostering meaningful connections over shared tables. So whether you're looking to try something new or simply want a break from daily cooking routines, Plateful offers a seamless solution for nurturing your appetite and building lasting relationships through the universal language of food. Sign up today and start exploring exciting culinary adventures tomorrow!",
  //    "https://i.ibb.co/f8M4pZy/61.jpg",
  //    "https://i.ibb.co/f8M4pZy/61.jpg",
  //    "https://i.ibb.co/sRwTxr5/228.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("342marketPlaceCollection.updateCollection===========> Done!")

  //  // 343
  //  await marketPlaceCollection.connect(wallets[342]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[342]).updateCollection(
  //    "ToiletFinder",
  //    "Introducing ToiletFinder, the innovative mobile application transforming the way individuals locate and utilize public restrooms. With its user-friendly interface, finding a clean, safe, and accessible bathroom near you is now effortless. Whether you're traveling, running errands, or attending events, ToiletFinder provides real-time availability updates and directions to facilities that fit your needs. Additionally, business owners can monetize their restrooms by listing them on the platform, earning passive income while providing essential services to the community. ToiletFinder empowers users to take control of their bathroom experiences, promoting hygiene, convenience, and financial opportunities. Join today and say goodbye to awkward situations and unpleasant surprises!",
  //    "https://i.ibb.co/K9gfFZf/62.jpg",
  //    "https://i.ibb.co/K9gfFZf/62.jpg",
  //    "https://i.ibb.co/5G434QR/227.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("343marketPlaceCollection.updateCollection===========> Done!")

  //  // 344
  //  await marketPlaceCollection.connect(wallets[343]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[343]).updateCollection(
  //    "PetTrainer",
  //    "Welcome to PetTrainer, the ultimate resource for responsible pet ownership. Our cutting-edge platform pairs pet parents with experienced professionals offering customizable training programs designed to enhance your furry friend's behavior, obedience, and socialization skills. Trust our vetted trainers to provide individual attention and guidance, ensuring a positive learning environment for both pets and owners. Upon completion, return to a well-mannered companion, strengthening the bond between human and animal. With PetTrainer, invest in your pet's future and create a harmonious household. Start your training journey today!",
  //    "https://i.ibb.co/TWdDjbd/63.jpg",
  //    "https://i.ibb.co/TWdDjbd/63.jpg",
  //    "https://i.ibb.co/0XTcvxJ/226.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("344marketPlaceCollection.updateCollection===========> Done!")

  //  // 345
  //  await marketPlaceCollection.connect(wallets[344]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[344]).updateCollection(
  //    "MobileMed",
  //    "Meet MobileMed, the groundbreaking healthcare initiative bringing quality primary care directly to your doorstep. Our fleet of state-of-the-art mobile clinics is equipped with advanced medical technology, enabling us to offer comprehensive on-site testing, diagnosis, treatment, and prescription management services. In addition to standard primary care services, MobileMed units double as mobile pharmacies and blood banks, streamlining your entire healthcare experience into one convenient package. By removing barriers such as transportation, mobility issues, or lack of access to traditional healthcare facilities, we strive to improve overall health outcomes within underserved communities. Join the movement towards better healthcare accessibility and connect with MobileMed today!",
  //    "https://i.ibb.co/H4FWz1c/64.jpg",
  //    "https://i.ibb.co/H4FWz1c/64.jpg",
  //    "https://i.ibb.co/HCqK6C9/224.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("345marketPlaceCollection.updateCollection===========> Done!")

  //  // 346
  //  await marketPlaceCollection.connect(wallets[345]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[345]).updateCollection(
  //    "HeroSphere",
  //    "Unleash the power of non-fungible tokens (NFTs) with HeroSphere, the premier marketplace for unique digital assets representing iconic superhero personas and imaginative creatures. Discover rare and exclusive rights to legendary heroes, including Saiyans, speedsters, vampires, werewolves, and more. Each NFT purchase grants holders legal ownership and bragging rights to these extraordinary characters, opening doors to endless possibilities in gaming, collectibles, and fan engagement. Embrace the thrill of owning a piece of pop culture history with HeroSphere, where imagination meets blockchain technology. Explore our vast catalog today and become part of this emerging digital ecosystem!",
  //    "https://i.ibb.co/WnxTVmH/65.jpg",
  //    "https://i.ibb.co/WnxTVmH/65.jpg",
  //    "https://i.ibb.co/44SXFQM/223.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("346marketPlaceCollection.updateCollection===========> Done!")

  //  // 347
  //  await marketPlaceCollection.connect(wallets[346]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[346]).updateCollection(
  //    "DeliveryDuel",
  //    "Experience the excitement of competitive delivery with DeliveryDuel, the first-ever platform connecting customers with top-rated couriers across various shipping companies. Our expert auditors evaluate each agent based on their efficiency, accuracy, and professionalism, assigning scores reflecting their performance. Utilizing these ratings, participants can place wagers on their preferred courier, potentially earning substantial rewards if their chosen carrier delivers faster than anticipated. With DeliveryDuel, not only do you support skilled professionals but also enjoy an entertaining twist on conventional delivery services. Join the race against time and discover the thrill of winning big with every successful delivery. Register now and see how far your luck will take you!",
  //    "https://i.ibb.co/YXx2Qdt/66.jpg",
  //    "https://i.ibb.co/YXx2Qdt/66.jpg",
  //    "https://i.ibb.co/HFrZnbw/222.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("347marketPlaceCollection.updateCollection===========> Done!")

  //  // 348
  //  await marketPlaceCollection.connect(wallets[347]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[347]).updateCollection(
  //    "Farmify",
  //    "Farmify is an innovative platform that connects consumers with local farmers, allowing them to discover and subscribe to receive regular deliveries of fresh produce directly from the source. By signing up for a Farmify, customers can enjoy a wide variety of seasonal fruits and vegetables sourced from nearby farms, all without any additional delivery fees. This means that members can access high-quality, locally grown food at an affordable price while supporting small-scale agriculture in their community. With Farmify, it has never been easier to eat healthily, support sustainability, and build meaningful connections with the people who grow our food.",
  //    "https://i.ibb.co/0mjLXVk/67.jpg",
  //    "https://i.ibb.co/0mjLXVk/67.jpg",
  //    "https://i.ibb.co/bs9B2mg/221.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("348marketPlaceCollection.updateCollection===========> Done!")

  //  // 349
  //  await marketPlaceCollection.connect(wallets[348]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[348]).updateCollection(
  //    "Insight",
  //    "Meet Insight, a platform where users can answer questions about themselves to people that subscribe to their paywalls without necessarily knowing who those people are. This can be a great way to find out about how and when is the best time to approach a crush for instance",
  //    "https://i.ibb.co/SBcPLxt/68.jpg",
  //    "https://i.ibb.co/SBcPLxt/68.jpg",
  //    "https://i.ibb.co/KD398kB/220.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("349marketPlaceCollection.updateCollection===========> Done!")

  //  // 350
  //  await marketPlaceCollection.connect(wallets[349]).addCollection(0, 0, 0, 0, 0, 0, "0xd1a7aB1a1E1aaDD5CD51F51570885c7896bb3139", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[349]).updateCollection(
  //    "Energify",
  //    "Energize your world with Energify, the cutting-edge platform connecting households and businesses with top-notch energy providers (mini grid operators, etc.) across various regions. Our mission is to help you break free from traditional utility monopolies and switch to cleaner, more efficient alternatives offered by local entrepreneurs. By browsing our extensive database of vetted companies, you can compare features, pricing, and green credentials before making informed decisions. Once you select your preferred energy plan, simply sign up for automatic monthly billing and start enjoying hassle-free services tailored to fit your lifestyle. Join the growing movement towards sustainable energy independence with Energify – let’s energize the planet together!",
  //    "https://i.ibb.co/19nqzFv/69.jpg",
  //    "https://i.ibb.co/19nqzFv/69.jpg",
  //    "https://i.ibb.co/GT87pBX/219.jpg",
  //    "",
  //    "",
  //    "0xae6a2d4DbA638766bD3b522cD397cA90F173fDd2",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("350marketPlaceCollection.updateCollection===========> Done!")

  //  // 351
  //  await marketPlaceCollection.connect(wallets[350]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[350]).updateCollection(
  //    "Jobet",
  //    "post a job that anyone willing to stake the most tokens can take and instantly become your employee. If after a period of time specified in the job offer, you can prove he/she has not been a good employee, you can claim part or all of the staked amount. ",
  //    "https://i.ibb.co/MDK24YH/70.jpg",
  //    "https://i.ibb.co/MDK24YH/70.jpg",
  //    "https://i.ibb.co/D1Q5Zbk/218.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("351marketPlaceCollection.updateCollection===========> Done!")

  //  // 352
  //  await marketPlaceCollection.connect(wallets[351]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[351]).updateCollection(
  //    "SkillSphere",
  //    "Meet SkillSphere, a platform where employers work with partner course creators to create and post courses that teach candidates the skills they're hiring for before they hire a candidate",
  //    "https://i.ibb.co/gWDFcb8/71.jpg",
  //    "https://i.ibb.co/gWDFcb8/71.jpg",
  //    "https://i.ibb.co/mRryjPD/217.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("352marketPlaceCollection.updateCollection===========> Done!")

  //  // 353
  //  await marketPlaceCollection.connect(wallets[352]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[352]).updateCollection(
  //    "MelodicMentors",
  //    "Introducing MelodicMentors - a subscription-based platform offering comprehensive music lessons for both children and adults. Our experienced instructors specialize in teaching piano, guitar, and vocal techniques, providing customized instruction tailored to each student's skill level and learning style. With our easy-to-use interface, users can access engaging lesson plans, practice exercises, and performance evaluations, making it simple to track progress and achieve musical goals. Whether you're a beginner looking to learn the basics or an advanced player seeking to refine your skills, MelodicMentors offers flexible pricing options to fit your budget. Join our thriving community of musicians and discover the joy of playing and singing today!",
  //    "https://i.ibb.co/qm1j2Td/72.jpg",
  //    "https://i.ibb.co/qm1j2Td/72.jpg",
  //    "https://i.ibb.co/w7DTrnC/216.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("353marketPlaceCollection.updateCollection===========> Done!")

  //  // 354
  //  await marketPlaceCollection.connect(wallets[353]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[353]).updateCollection(
  //    "StudySmart",
  //    "Meet StudySmart, a platform where students share video summaries of their classes, content is  categorized by university and courses. This will enable the best students in a class to monetize their notes and understanding of the course just as they are learning it themselves. They post class recordings, notes, exercises, etc, behind paywalls. Auditors will certify their grades in the classes",
  //    "https://i.ibb.co/KLPVPjB/73.jpg",
  //    "https://i.ibb.co/KLPVPjB/73.jpg",
  //    "https://i.ibb.co/YX89X0R/215.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("354marketPlaceCollection.updateCollection===========> Done!")

  //  // 355
  //  await marketPlaceCollection.connect(wallets[354]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[354]).updateCollection(
  //    "Connectify",
  //    "Introducing Connectify - a revolutionary platform designed to simplify the process of finding and subscribing to internet service providers. With Connectify, individuals and businesses alike can easily search for and compare available options based on location, speed, price, and customer reviews. Whether you prefer a traditional ISP or alternative solutions like satellite or wireless connections, our platform offers a comprehensive directory of providers to suit your unique needs. Sign up now to discover the fastest and most reliable way to stay connected to the internet!",
  //    "https://i.ibb.co/f2p5kdv/74.jpg",
  //    "https://i.ibb.co/f2p5kdv/74.jpg",
  //    "https://i.ibb.co/0Q7YJBC/214.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("355marketPlaceCollection.updateCollection===========> Done!")

  //  // 356
  //  await marketPlaceCollection.connect(wallets[355]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[355]).updateCollection(
  //    "SpeakerScope",
  //    "Are you searching for opportunities to share your expertise and expand your network? Look no further than SpeakerScope, the ultimate conference discovery platform. Our cutting-edge technology matches professionals with speaking engagements at events worldwide, helping them gain exposure and establish thought leadership within their respective industries. From small local gatherings to major international conventions, we provide personalized recommendations tailored to your interests, qualifications, and availability. Sign up now to unlock new possibilities and advance your career through SpeakerScope.",
  //    "https://i.ibb.co/n8cXNgF/75.jpg",
  //    "https://i.ibb.co/n8cXNgF/75.jpg",
  //    "https://i.ibb.co/vj7vcSh/213.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("356marketPlaceCollection.updateCollection===========> Done!")

  //  // 357
  //  await marketPlaceCollection.connect(wallets[356]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[356]).updateCollection(
  //    "PartyGirls",
  //    "PartyGirls is a revolutionary new platform designed to make finding and booking groups of girls for parties and other events easier than ever before. Our innovative technology connects hosts with pre-screened, reliable female entertainment groups across the world, allowing you to customize your party or event with confidence. Whether you're looking for beautiful models, talented performers, or experienced hostesses, PartyGirls has you covered. Simply browse our selection of available groups, read reviews from past clients, and book the perfect addition to your next celebration. Trust us to bring the fun and excitement to your next gathering!",
  //    "https://i.ibb.co/3fRQW6T/76.jpg",
  //    "https://i.ibb.co/3fRQW6T/76.jpg",
  //    "https://i.ibb.co/ZKp73zV/212.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("357marketPlaceCollection.updateCollection===========> Done!")

  //  // 358
  //  await marketPlaceCollection.connect(wallets[357]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[357]).updateCollection(
  //    "AdVoyage",
  //    "Introducing AdVoyage - the first-ever platform connecting advertisers with drivers, riders, gas station attendants, and shop owners to promote products and services via in-vehicle audio advertising. By purchasing listening time, agents create a TrustBounty linked to their vehicle identification numbers, ensuring accountability and encouraging compliance. As drivers, riders, and others interact with the platform, they earn rewards for playing ads or music while on the road, fostering a sense of community and shared prosperity. With AdVoyage, advertisers reach targeted audiences effectively, and participants benefit financially from their daily commutes. Experience the power of mobile marketing today with AdVoyage!",
  //    "https://i.ibb.co/RCnyDsg/78.jpg",
  //    "https://i.ibb.co/RCnyDsg/78.jpg",
  //    "https://i.ibb.co/Pw5GB8c/211.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("358marketPlaceCollection.updateCollection===========> Done!")

  //  // 359
  //  await marketPlaceCollection.connect(wallets[358]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[358]).updateCollection(
  //    "RouteSub",
  //    "Introducing RouteSub - a revolutionary platform where to find and subscribe to multiple routes posted by drivers. Each route comes with its own time range so users can subscribe to them according to their own schedule",
  //    "https://i.ibb.co/syrcCf0/79.jpg",
  //    "https://i.ibb.co/syrcCf0/79.jpg",
  //    "https://i.ibb.co/sv7nQ0F/210.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("359marketPlaceCollection.updateCollection===========> Done!")

  //  // 360
  //  await marketPlaceCollection.connect(wallets[359]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[359]).updateCollection(
  //    "MedsOnDemand",
  //    "Meet MedsOnDemand, the game-changing platform transforming the way people access medication. Our easy-to-use app connects people in need of medication with other people that have them and are ready to exchange it for money, other medecines or IOUs.",
  //    "https://i.ibb.co/Wz5WyyQ/80.jpg",
  //    "https://i.ibb.co/Wz5WyyQ/80.jpg",
  //    "https://i.ibb.co/RvSSybP/209.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("360marketPlaceCollection.updateCollection===========> Done!")

  //  // 361
  //  await marketPlaceCollection.connect(wallets[360]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[360]).updateCollection(
  //    "GhostKitchen",
  //    "Welcome to GhostKitchen, the premier online destination for food entrepreneurs seeking flexible kitchen space to grow their culinary empires. Our state-of-the-art platform connects chefs and restaurateurs with underutilized commercial kitchens, creating affordable, convenient, and fully equipped cooking environments ideal for pop-up dining experiences, catering gigs, and product testing. With GhostKitchen, operators can scale operations efficiently, minimizing overhead costs and maximizing profits. Join our thriving community of industry pioneers and take advantage of this groundbreaking opportunity to shape the future of foodservice.",
  //    "https://i.ibb.co/j6WB5jV/81.jpg",
  //    "https://i.ibb.co/j6WB5jV/81.jpg",
  //    "https://i.ibb.co/D7m32qZ/208.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("361marketPlaceCollection.updateCollection===========> Done!")

  //  // 362
  //  await marketPlaceCollection.connect(wallets[361]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[361]).updateCollection(
  //    "GameFinder",
  //    "Introducing GameFinder - the ultimate platform for gamers seeking to discover, purchase, and trade both digital and physical video games. Whether you're a collector searching for rare finds or simply looking to expand your game library, our intuitive interface makes it easy to browse and connect with fellow enthusiasts. From classic titles to modern hits, explore a vast selection of options and engage with a vibrant community of gaming aficionados. Join GameFinder now and elevate your gaming experience!",
  //    "https://i.ibb.co/ThsBzLC/82.jpg",
  //    "https://i.ibb.co/ThsBzLC/82.jpg",
  //    "https://i.ibb.co/SxCtmx5/207.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("362marketPlaceCollection.updateCollection===========> Done!")

  //  // 363
  //  await marketPlaceCollection.connect(wallets[362]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[362]).updateCollection(
  //    "TeamToken",
  //    "Get ready to enter the exciting world of student athlete NFT trading with TeamToken! This innovative marketplace allows high school athletes to monetize their skills by selling non-fungible tokens (NFTs) representing their performance statistics on the field. Coaches, parents, and fans alike can support their favorite young stars by acquiring these unique digital assets, which are stored securely on blockchain platforms. With TeamToken, schools can generate additional revenue streams, students can achieve financial independence, and fantasy sports enthusiasts can invest in tomorrow's superstars. Join our growing ecosystem today and be part of the future of youth sports!",
  //    "https://i.ibb.co/bKN8BzD/83.jpg",
  //    "https://i.ibb.co/bKN8BzD/83.jpg",
  //    "https://i.ibb.co/PGS08rk/206.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("363marketPlaceCollection.updateCollection===========> Done!")

  //  // 364
  //  await marketPlaceCollection.connect(wallets[363]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[363]).updateCollection(
  //    "AdminGuru",
  //    "Empower your organization with AdminGuru, the go-to platform for finding experienced professionals to expedite governmental administrative tasks. Our extensive network includes seasoned consultants, lobbyists, grant writers, and other specialists dedicated to navigating complex regulatory systems and accelerating approval processes. Whether you face immediate challenges or plan ahead for long-term success, AdminGuru provides customized support to simplify interactions with federal, state, and local authorities. Transform your government affairs with our expert guidance - sign up now and unleash your full potential!",
  //    "https://i.ibb.co/8jj1xF8/84.jpg",
  //    "https://i.ibb.co/8jj1xF8/84.jpg",
  //    "https://i.ibb.co/nRY33tn/205.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("364marketPlaceCollection.updateCollection===========> Done!")

  //  // 365
  //  await marketPlaceCollection.connect(wallets[364]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[364]).updateCollection(
  //    "BordersUnited",
  //    "BordersUnited is here to revolutionize international commerce by providing a comprehensive platform for companies seeking expert advice and support during the importing and exporting process. Our cutting-edge technology matches businesses with seasoned trade professionals who possess deep knowledge of regulations, tariffs, logistics, and cultural nuances specific to various countries. By leveraging our services, importers and exporters can overcome barriers, avoid costly mistakes, and optimize supply chain management. Connect with BordersUnited today and embark on a journey towards successful global trade ventures!",
  //    "https://i.ibb.co/CJ60QpW/85.jpg",
  //    "https://i.ibb.co/CJ60QpW/85.jpg",
  //    "https://i.ibb.co/Smr3X1b/204.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("365marketPlaceCollection.updateCollection===========> Done!")

  //  // 366
  //  await marketPlaceCollection.connect(wallets[365]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[365]).updateCollection(
  //    "Declut",
  //    "Say goodbye to clutter and hello to serenity with Declut - the ultimate solution for individuals seeking professional assistance in downsizing their belongings. Our user-friendly platform brings together homeowners and renters with skilled organizers, estate sale coordinators, junk removal specialists, and other experts trained in decluttering techniques. Whether you aim to create more living space, simplify daily routines, or prepare for major life changes, Declut ensures a stress-free and efficient process. Let us help you rediscover joy in your surroundings - join Declut today and embrace a new chapter of minimalism and calmness!",
  //    "https://i.ibb.co/FH2VfFS/86.jpg",
  //    "https://i.ibb.co/FH2VfFS/86.jpg",
  //    "https://i.ibb.co/5LqVjTh/203.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("366marketPlaceCollection.updateCollection===========> Done!")

  //  // 367
  //  await marketPlaceCollection.connect(wallets[366]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[366]).updateCollection(
  //    "Umogy",
  //    "One platform where individuals can discover and enroll in courses related to quilting, knitting, crafting, and DIY projects is Umogy. With thousands of instructors teaching a wide range of topics, users can easily search for classes tailored to their interests and skill level. Whether you're new to sewing or an experienced crafter looking to expand your expertise, Umogy offers affordable and convenient options for learning and honing your crafting abilities.",
  //    "https://i.ibb.co/rmmQtfC/88.jpg",
  //    "https://i.ibb.co/rmmQtfC/88.jpg",
  //    "https://i.ibb.co/sWGRP6j/202.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("367marketPlaceCollection.updateCollection===========> Done!")

  //  // 368
  //  await marketPlaceCollection.connect(wallets[367]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[367]).updateCollection(
  //    "DebtForSale",
  //    "Are you interested in finding and buying debts for less from debt collectors? Our innovative platform connects individuals like you with debt collectors who are looking to sell their accounts at discounted prices. By using our platform, you can browse through a wide range of available debts, negotiate directly with the debt collectors, and purchase the debts that best fit your investment goals. With our user-friendly interface and comprehensive support services, you can start building your portfolio of debts today. Sign up now to explore the opportunities waiting for you on our platform.",
  //    "https://i.ibb.co/1sPnq6Z/90.jpg",
  //    "https://i.ibb.co/1sPnq6Z/90.jpg",
  //    "https://i.ibb.co/tJ0GsZg/201.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("368marketPlaceCollection.updateCollection===========> Done!")

  //  // 369
  //  await marketPlaceCollection.connect(wallets[368]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[368]).updateCollection(
  //    "LanguageData",
  //    "Introducing LanguageData, an attempt to help people learn all possible languages at scale",
  //    "https://i.ibb.co/DGTBgJn/92.jpg",
  //    "https://i.ibb.co/DGTBgJn/92.jpg",
  //    "https://i.ibb.co/Gs7g9dw/439-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("369marketPlaceCollection.updateCollection===========> Done!")

  //  // 370
  //  await marketPlaceCollection.connect(wallets[369]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[369]).updateCollection(
  //    "LiveTranslate",
  //    "Are you struggling to communicate effectively with someone who doesn't speak your native tongue? Look no further than LiveTranslate - the premier online platform connecting individuals with certified interpreters and translators worldwide. From phone calls and video chats to in-person meetups and conferences, our intuitive system makes it easy to schedule and manage real-time translation sessions. Simply select your preferred language pair which can include sign language, enter your details, and choose from our roster of vetted linguists. With LiveTranslate, breaking down communication barriers has never been simpler. Try us out today and experience the power of seamless cross-cultural understanding!",
  //    "https://i.ibb.co/vZmLvfm/94.jpg",
  //    "https://i.ibb.co/vZmLvfm/94.jpg",
  //    "https://i.ibb.co/k11SX3n/438-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("370marketPlaceCollection.updateCollection===========> Done!")

  //  // 371
  //  await marketPlaceCollection.connect(wallets[370]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[370]).updateCollection(
  //    "ToyShare",
  //    "Introducing ToyShare - the ultimate platform for communities centered around shared experiences and needs. Groups on ToyShare are organized by theme, such as newborn parents, elementary school students, and so forth. Members can borrow toys from the group pool, use them as necessary, then return them once finished. Bounties are created to foster trust among participants and ensure proper usage and care of items. ValuePool tokens are utilized to purchase certain assets within the community while others are simply gifted by generous members. With ToyShare, families and educators can collaboratively provide high-quality play materials without the burden of excessive spending or clutter. Join our growing network today and unlock the benefits of communal asset sharing!",
  //    "https://i.ibb.co/YX7Lk5Q/95.jpg",
  //    "https://i.ibb.co/YX7Lk5Q/95.jpg",
  //    "https://i.ibb.co/7YLFb81/437-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("371marketPlaceCollection.updateCollection===========> Done!")

  //  // 372
  //  await marketPlaceCollection.connect(wallets[371]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[371]).updateCollection(
  //    "RentAPet",
  //    "Looking for a furry friend to brighten up your day, but not ready for the long-term commitment of pet ownership? Say hello to RentAPet - the revolutionary platform connecting animal lovers with local pet owners offering temporary rental services. Choose from a variety of animals including dogs, cats, birds, fish, and more, all pre-screened and verified for safety and reliability. Enjoy the companionship of a loving pet without any of the hassle of training, feeding, or cleanup. Book a rental session today and experience the joy of having a furry friend, even if only for a short time!",
  //    "https://i.ibb.co/vwqw41j/96.jpg",
  //    "https://i.ibb.co/vwqw41j/96.jpg",
  //    "https://i.ibb.co/PTzWnV4/436-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("372marketPlaceCollection.updateCollection===========> Done!")

  //  // 373
  //  await marketPlaceCollection.connect(wallets[372]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[372]).updateCollection(
  //    "InflationHedge",
  //    "Welcome to InflationHedge - the innovative platform connecting individuals seeking effective ways to protect their wealth during times of economic uncertainty. Our user-friendly interface allows participants to easily join and contribute to various inflation hedge projects, providing exposure to a diversified range of assets. By leveraging collective buying power, we aim to minimize risk and maximize returns through strategic partnerships and negotiations. Sign up today and become part of a thriving community focused on safeguarding financial stability amidst market volatility.",
  //    "https://i.ibb.co/sbz5spT/97.jpg",
  //    "https://i.ibb.co/sbz5spT/97.jpg",
  //    "https://i.ibb.co/Hdz5c4Y/435-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("373marketPlaceCollection.updateCollection===========> Done!")

  //  // 374
  //  await marketPlaceCollection.connect(wallets[373]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[373]).updateCollection(
  //    "FamCare",
  //    "In today's fast-paced world, finding reliable and trustworthy caregivers for our aging loved ones can be challenging. That's why we created a platform dedicated to providing comprehensive training for family members interested in becoming accredited caregivers. Our platform offers a wide range of courses tailored to meet the unique needs of each individual, including topics such as basic nursing skills, communication techniques, and patient rights. By completing our training program, family members can gain the knowledge and confidence needed to provide high-quality care for their loved ones while also fulfilling state requirements for certification.",
  //    "https://i.ibb.co/qyyS4L5/98.jpg",
  //    "https://i.ibb.co/qyyS4L5/98.jpg",
  //    "https://i.ibb.co/Mc1WdgB/434-2.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("374marketPlaceCollection.updateCollection===========> Done!")

  //  // 375
  //  await marketPlaceCollection.connect(wallets[374]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[374]).updateCollection(
  //    "ShopWall",
  //    "Are you tired of constantly searching for deals at different stores to save money on everyday essentials? Look no further than ShopWall - the premier platform connecting shoppers with retailers offering Costco-like subscription models. Our advanced search features allow you to filter results based on location, product category, and price point, ensuring you always find the best options near you. Plus, with regular updates on promotions and discounts, you'll stay ahead of the curve in terms of savings. Sign up today and discover how easy it is to enjoy bulk shopping convenience.",
  //    "https://i.ibb.co/KVLH83Q/100.jpg",
  //    "https://i.ibb.co/KVLH83Q/100.jpg",
  //    "https://i.ibb.co/VSkbQTj/433-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("375marketPlaceCollection.updateCollection===========> Done!")

  //  // 376
  //  await marketPlaceCollection.connect(wallets[375]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[375]).updateCollection(
  //    "RentAFamily",
  //    "Find bridemaids, first-men, grand-parents, dads, moms, husbands, wives, boy/girlfriends, friends, daughters, and sons to rent",
  //    "https://i.ibb.co/1KRyhZP/106.jpg",
  //    "https://i.ibb.co/1KRyhZP/106.jpg",
  //    "https://i.ibb.co/p222Jr2/432-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("376marketPlaceCollection.updateCollection===========> Done!")

  //  // 377
  //  await marketPlaceCollection.connect(wallets[376]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[376]).updateCollection(
  //    "Clubify",
  //    "Nightlife enthusiasts rejoice! Introducing Clubify - the ultimate destination for club hoppers looking to discover and subscribe to exclusive nightclub experiences. Our cutting-edge platform connects partygoers with top clubs across major cities, featuring personalized recommendations based on music preferences, crowd vibe, and budget constraints. As a subscriber, you'll receive access to VIP treatment, priority entry, special events, and exclusive merchandise. Upgrade your social life and elevate your clubbing experience with Clubify. Sign up now and get ready to dance the night away!",
  //    "https://i.ibb.co/g3pH2Wv/107.jpg",
  //    "https://i.ibb.co/g3pH2Wv/107.jpg",
  //    "https://i.ibb.co/nzgT3nX/431-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("377marketPlaceCollection.updateCollection===========> Done!")

  //  // 378
  //  await marketPlaceCollection.connect(wallets[377]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[377]).updateCollection(
  //    "HomeTest",
  //    "The future of healthcare is here with HomeTest - the groundbreaking platform connecting consumers with companies offering innovative devices for testing multiple diseases at home. No longer do you have to wait for lengthy appointments or expensive lab tests; simply order a device, follow the instructions, and obtain accurate results within minutes. Our extensive database covers a broad spectrum of conditions, allowing you to monitor your health proactively and make informed decisions about your wellbeing. Embrace the comfort and convenience of self-diagnosis with HomeTest. Start exploring today!",
  //    "https://i.ibb.co/3fsLMRD/108.jpg",
  //    "https://i.ibb.co/3fsLMRD/108.jpg",
  //    "https://i.ibb.co/87JCtgL/430-2.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("378marketPlaceCollection.updateCollection===========> Done!")

  //  // 379
  //  await marketPlaceCollection.connect(wallets[378]).addCollection(0, 0, 0, 0, 0, 0, "0xd17C814f5609889609720D95e1A7369f9F798aB4", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[378]).updateCollection(
  //    "CustomTailor",
  //    "Tired of struggling to find the perfect fit when shopping off-the-rack clothing? Say hello to CustomTailor - the revolutionary platform connecting customers with skilled tailors who can create custom garments to suit any body type, style preference, and occasion. Our intuitive interface makes it effortless to browse profiles, read reviews, and place orders directly with local tailors. Whether you need a bespoke wedding dress, a sharp business suit, or casual wear, CustomTailor has got you covered. Experience the luxury of truly personalized fashion and upgrade your wardrobe today.",
  //    "https://i.ibb.co/TBS5qfZ/109.jpg",
  //    "https://i.ibb.co/TBS5qfZ/109.jpg",
  //    "https://i.ibb.co/cF4HV7C/429-2.jpg",
  //    "",
  //    "",
  //    "0xC853D1c9B60962a5CDB361379595BC6400aaE722",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("379marketPlaceCollection.updateCollection===========> Done!")

  //  // 380
  //  await marketPlaceCollection.connect(wallets[379]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[379]).updateCollection(
  //    "HourRoom",
  //    "Looking for a convenient and affordable way to host small gatherings, conduct private meetings, or simply escape the bustle of daily life? Check out HourRoom - the innovative platform connecting users with available rooms and house rentals for short periods ranging from a couple of hours to full days. With our user-friendly interface, you can quickly search for suitable spaces based on location, size, amenities, and pricing. From cozy apartments to spacious event venues, we cater to diverse needs and budgets. So whether you require an intimate setting for a baby shower or a professional environment for client presentations, HourRoom has got you covered. Try us out today and rediscover the joy of flexible and adaptable living arrangements.",
  //    "https://i.ibb.co/4N0hjN7/110.jpg",
  //    "https://i.ibb.co/4N0hjN7/110.jpg",
  //    "https://i.ibb.co/TPdRtjB/428-2.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("380marketPlaceCollection.updateCollection===========> Done!")

  //  // 381
  //  await marketPlaceCollection.connect(wallets[380]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[380]).updateCollection(
  //    "BarterBarter",
  //    "Welcome to BarterBarter - the exciting new platform enabling individuals to trade their unique talents and expertise in a mutually beneficial manner. Users can post service requests, specifying what they are willing to offer in return for the desired assistance. This could include anything from consulting, editing, or design work to photography, software development, or promotion services. With our vast network of professionals representing various industries, finding the right match for your barter request has never been easier. Join BarterBarter today and start leveraging your skills to achieve your goals while helping others do the same. Let's build a thriving community of collaboration and resource sharing!",
  //    "https://i.ibb.co/vBqNYHp/111.jpg",
  //    "https://i.ibb.co/vBqNYHp/111.jpg",
  //    "https://i.ibb.co/983xqvS/427-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("381marketPlaceCollection.updateCollection===========> Done!")

  //  // 382
  //  await marketPlaceCollection.connect(wallets[381]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[381]).updateCollection(
  //    "FlexClass",
  //    "Meet FlexClass - the dynamic platform connecting passionate instructors with eager students seeking fun and engaging ways to stay active. Our disciplines span a wide range of interests, including yoga, swimming, gym training, dancing, and even LARPing (Live Action Role Playing) under the guidance of certified teachers. Instructors list two types of tickets for each class: Girl Tickets and Boy Tickets, ensuring a balanced gender ratio and promoting inclusivity. During classes, exercises are performed in pairs, giving participants the opportunity to interact and potentially form connections. If they wish, students can swap partners throughout the session or choose to stick with their initial pair if the chemistry is right. Join FlexClass today and embark on a journey towards improved physical and mental wellness while meeting like-minded individuals. Discover new hobbies, challenge yourself, and foster lasting relationships through shared passions. Sign up now and unlock a world of possibilities!",
  //    "https://i.ibb.co/RbbhBjt/112.jpg",
  //    "https://i.ibb.co/RbbhBjt/112.jpg",
  //    "https://i.ibb.co/6gNvDMd/426-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("382marketPlaceCollection.updateCollection===========> Done!")

  //  // 383
  //  await marketPlaceCollection.connect(wallets[382]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[382]).updateCollection(
  //    "FounderVlog",
  //    "Introducing FounderVlog - the innovative platform empowering ambitious entrepreneurs to document their startup journeys and share them with a captivated audience. By creating engaging video content showcasing their daily struggles, triumphs, and lessons learned, founders can connect with potential investors, mentors, and supporters. Through subscriptions, viewers gain exclusive access to these authentic stories, offering valuable insights into the realities of starting and growing a business. As founders grow their followings and generate income, they can reinvest this revenue back into their ventures, fueling their growth and success. Join FounderVlog today and become part of a supportive community that celebrates entrepreneurship, resilience, and creativity.",
  //    "https://i.ibb.co/6wkQ8Kh/114.jpg",
  //    "https://i.ibb.co/6wkQ8Kh/114.jpg",
  //    "https://i.ibb.co/0CYF5Jy/425-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("383marketPlaceCollection.updateCollection===========> Done!")

  //  // 384
  //  await marketPlaceCollection.connect(wallets[383]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[383]).updateCollection(
  //    "FireFy",
  //    "Are you planning a special occasion and looking to add some dazzling flair to the festivities? Look no further than FireFy - the premier platform connecting customers with skilled pyrotechnicians who will bring the magic of fireworks to your event. Simply provide details about your venue, date, and preferences, and our intuitive system will match you with licensed professionals equipped to deliver breathtaking displays tailored to your specific requirements. From birthdays and graduations to corporate functions and weddings, FireFy guarantees memorable experiences that leave guests spellbound. Trust us to help create cherished memories that will be talked about for years to come.",
  //    "https://i.ibb.co/V3jFCZG/115.jpg",
  //    "https://i.ibb.co/V3jFCZG/115.jpg",
  //    "https://i.ibb.co/X4KTjZ2/424-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("384marketPlaceCollection.updateCollection===========> Done!")

  //  // 385
  //  await marketPlaceCollection.connect(wallets[384]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[384]).updateCollection(
  //    "FlyCrew",
  //    "FlyCrew is here to revolutionize the aviation industry by providing a convenient solution for passengers, pilots, flight attendants, and airport staff alike. Whether you need a pilot for a single flight, a team of flight attendants for a chartered plane, or additional ground crew for a busy airport terminal, FlyCrew has got you covered. Our user-friendly interface allows clients to easily search for available personnel based on location, experience level, and qualifications. Once a suitable candidate is selected, secure payment processing and scheduling tools ensure seamless transactions and stress-free coordination. With FlyCrew, travelers can enjoy personalized, top-notch service while aviation professionals have access to a steady stream of job opportunities. Experience the future of aviation management today – join FlyCrew now!",
  //    "https://i.ibb.co/bQXv3qP/116.jpg",
  //    "https://i.ibb.co/bQXv3qP/116.jpg",
  //    "https://i.ibb.co/yhSz2pj/423-2.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("385marketPlaceCollection.updateCollection===========> Done!")

  //  // 386
  //  await marketPlaceCollection.connect(wallets[385]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[385]).updateCollection(
  //    "EZTickets",
  //    "EZTickets is the perfect solution for anyone looking to sell unused tickets to events or flights. Our user-friendly platform makes it simple to list your unwanted tickets and reach potential buyers across the globe. We cater to a wide range of events, including concerts, sports games, and cultural performances, ensuring there's something for everyone. In addition, we offer flexible options for delayed flights, allowing passengers to recover some of their costs by selling their tickets to someone else. Join EZTickets today and turn your unused tickets into extra cash – it's fast, easy, and risk-free!",
  //    "https://i.ibb.co/bWGzycj/117.jpg",
  //    "https://i.ibb.co/bWGzycj/117.jpg",
  //    "https://i.ibb.co/Sxq1KZp/422-2.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("386marketPlaceCollection.updateCollection===========> Done!")

  //  // 387
  //  await marketPlaceCollection.connect(wallets[386]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[386]).updateCollection(
  //    "VisaExpert",
  //    "VisaExpert is an online platform designed to assist individuals seeking guidance in navigating the complex process of obtaining a visa for their desired country. Our network of experienced immigration consultants offers customized advice and support tailored to each client's unique situation. Whether you require assistance with documentation preparation, interview coaching, or simply need clarification on visa regulations, our experts are ready to lend their expertise. With VisaExpert, you can rest assured that you'll receive professional, reliable assistance every step of the way. Start your visa application journey with ease – sign up now and discover why we're the go-to resource for successful visa acquisition. The channel also has various country specific Valuepools to help migrants in those countries share or purchase resources they need together. Users are also advised to document their personal experience as a migrant on their own channels.",
  //    "https://i.ibb.co/Gc7d5kQ/119.jpg",
  //    "https://i.ibb.co/Gc7d5kQ/119.jpg",
  //    "https://i.ibb.co/tBdXyV1/421-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("387marketPlaceCollection.updateCollection===========> Done!")

  //  // 388
  //  await marketPlaceCollection.connect(wallets[387]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[387]).updateCollection(
  //    "ContentBids",
  //    "Introducing ContentBids – the innovative platform that empowers content creators to monetize their videos more effectively. Our cutting-edge technology enables users to list their upcoming video projects and attract bids from advertisers interested in purchasing ad space within those videos. Alternatively, creators may choose to set a fixed price for their ad spots, giving them greater control over their earnings. With ContentBids, producers can maximize their profits without compromising artistic integrity, as they retain full autonomy over which brands they partner with. Sign up now and start generating income from your passion project – let ContentBids transform the way you think about video monetization.",
  //    "https://i.ibb.co/5WhbpmT/120.jpg",
  //    "https://i.ibb.co/5WhbpmT/120.jpg",
  //    "https://i.ibb.co/L55v3Ln/420-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("388marketPlaceCollection.updateCollection===========> Done!")

  //  // 389
  //  await marketPlaceCollection.connect(wallets[388]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[388]).updateCollection(
  //    "ShiftSwap",
  //    "Meet ShiftSwap – the game-changing platform that simplifies shift swapping among coworkers. Our intuitive interface enables users to post their availability and create requests to swap shifts with others who share similar schedules. The process is straightforward: log in, select the date(s) you wish to swap, and browse available options. If you find a suitable match, accept the proposal, and both parties are notified of the updated schedule. With ShiftSwap, employers can reduce absenteeism and maintain smooth operations, while employees benefit from increased flexibility and work-life balance. Try us out today and see firsthand how seamless shift swapping can be – join the ShiftSwap community now!",
  //    "https://i.ibb.co/DDb6k7p/121.jpg",
  //    "https://i.ibb.co/DDb6k7p/121.jpg",
  //    "https://i.ibb.co/ZH9KrYt/419-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("389marketPlaceCollection.updateCollection===========> Done!")

   // 390
  // await marketPlaceCollection.connect(wallets[389]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[389]).updateCollection(
  //    "XChats",
  //    "Find and subscribe to nsfw group chats animated by models who share photos of themselves IRL or do video conferencing, etc. you can request for anything and they will do it if you are a subscriber. Add your Paychat handle to the notes section when subscribing so they can send you an invitation link to their chat group",
  //    "https://i.ibb.co/SwsSNbx/122.jpg",
  //    "https://i.ibb.co/SwsSNbx/122.jpg",
  //    "https://i.ibb.co/T16vJ2w/418-2.jpg",
  //    "",
  //    "",
  //    "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("390marketPlaceCollection.updateCollection===========> Done!")

  //  // 391
  //  await marketPlaceCollection.connect(wallets[390]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[390]).updateCollection(
  //    "SexedIn",
  //    "Find jobs willing to accept a less qualified candidate granted she/he also regularly makes up for it in sexual favors. Find various jobs likes maids, secretary, etc",
  //    "https://i.ibb.co/txG1bCK/123.jpg",
  //    "https://i.ibb.co/txG1bCK/123.jpg",
  //    "https://i.ibb.co/xCGhCLK/417-2.jpg",
  //    "",
  //    "",
  //    "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("391marketPlaceCollection.updateCollection===========> Done!")

  //  // 392
  //  await marketPlaceCollection.connect(wallets[391]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[391]).updateCollection(
  //    "AffluentShelves",
  //    "Attention all entrepreneurs and small business owners! Looking for prime retail real estate to showcase your products? Look no further than AffluentShelves – the premium platform connecting high-end stores with vendors seeking exposure to discerning consumers. By renting shelf space in upscale boutiques and department stores, you gain access to a captivated audience eager to explore new luxury items. Our streamlined service connects you with top-tier retail partners, providing a hassle-free opportunity to increase brand visibility and drive sales. Don't miss this chance to elevate your product line – register with AffluentShelves today and take advantage of exclusive retail opportunities.",
  //    "https://i.ibb.co/mBKSHbc/124.jpg",
  //    "https://i.ibb.co/mBKSHbc/124.jpg",
  //    "https://i.ibb.co/JkcKb5b/416-2.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("392marketPlaceCollection.updateCollection===========> Done!")

  //  // 393
  //  await marketPlaceCollection.connect(wallets[392]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[392]).updateCollection(
  //    "JungleShares",
  //    "Welcome to JungleShares – the groundbreaking platform revolutionizing agricultural investment. Our unique approach allows individuals to purchase shares in livestock such as cows, chickens, goats, and fish, providing a tangible stake in sustainable farming practices. Each animal is verified by an independent auditor, who conducts regular inspections and generates detailed reports on the health and well-being of the animals. This level of transparency provides peace of mind for investors and promotes responsible stewardship of these valuable resources. Join JungleShares today and become part of a growing community committed to ethical, eco-conscious agriculture.",
  //    "https://i.ibb.co/FB4tT79/125.jpg",
  //    "https://i.ibb.co/FB4tT79/125.jpg",
  //    "https://i.ibb.co/ynrtwMD/415-2.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("393marketPlaceCollection.updateCollection===========> Done!")

  //  // 394
  //  await marketPlaceCollection.connect(wallets[393]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[393]).updateCollection(
  //    "CropShares",
  //    "Introducing CropShares – the innovative platform empowering individuals to invest in sustainable agriculture. Our cutting-edge technology enables users to purchase shares in farmland, giving them a direct stake in the success of these vital assets. To ensure accountability and transparency, every farm undergoes rigorous validation by an independent auditor, who produces comprehensive reports detailing operational performance, environmental impact, and financial returns. These metrics provide crucial information for investors, fostering confidence in their investments and promoting best practices within the industry. Embrace the future of agricultural investment with CropShares – sign up today and make a positive difference in our planet's food systems.",
  //    "https://i.ibb.co/Cwwhsck/126.jpg",
  //    "https://i.ibb.co/Cwwhsck/126.jpg",
  //    "https://i.ibb.co/HVtD5gY/414-2.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("394marketPlaceCollection.updateCollection===========> Done!")

  //  // 395
  //  await marketPlaceCollection.connect(wallets[394]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[394]).updateCollection(
  //    "Glampers",
  //    "Experience the ultimate fusion of nature and luxury with Glampers – the leading online marketplace connecting travelers with exceptional glamping destinations worldwide. From private yurts nestled amidst towering trees to opulent safari tents overlooking breathtaking vistas, we offer a diverse range of accommodation options tailored to suit any taste. Whether you seek a romantic escape, family getaway, or corporate retreat, our carefully curated selection ensures an unforgettable adventure in style. Plus, our dedicated team handles all logistics, including setup, teardown, and cleanup, so you can focus solely on enjoying your bespoke glamping experience. Discover the magic of Glampers today and embark on a journey beyond ordinary vacations.",
  //    "https://i.ibb.co/X20ksVP/128.jpg",
  //    "https://i.ibb.co/X20ksVP/128.jpg",
  //    "https://i.ibb.co/X7Ws5pg/413-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("395marketPlaceCollection.updateCollection===========> Done!")

  //  // 396
  //  await marketPlaceCollection.connect(wallets[395]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[395]).updateCollection(
  //    "CreditCounselors",
  //    "Meet CreditCounselors – the trusted resource connecting individuals with skilled professionals who specialize in identifying applicable tax credits. As a parent, senior citizen, or member of other eligible groups, you may be entitled to significant savings through various government programs. Our extensive network of certified credit counselors works closely with clients to assess their unique situations and determine which credits they are eligible to claim. Their expert guidance simplifies the process, maximizes refunds, and helps you achieve long-term financial stability. Visit CreditCounselors today and discover how easy it is to secure the credits you deserve.",
  //    "https://i.ibb.co/d6sMn9K/129.jpg",
  //    "https://i.ibb.co/d6sMn9K/129.jpg",
  //    "https://i.ibb.co/y0FQ9m6/412-2.jpg",
  //    "",
  //    "",
  //    "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("396marketPlaceCollection.updateCollection===========> Done!")

  //  // 397
  //  await marketPlaceCollection.connect(wallets[396]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[396]).updateCollection(
  //    "DatingVacation",
  //    "Rent a villa with others willing to find a partner, make friends and maybe find a partner.",
  //    "https://i.ibb.co/3WcT2Dt/130.jpg",
  //    "https://i.ibb.co/3WcT2Dt/130.jpg",
  //    "https://i.ibb.co/BVXSv6c/411-2.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("397marketPlaceCollection.updateCollection===========> Done!")

  //  // 398
  //  await marketPlaceCollection.connect(wallets[397]).addCollection(0, 0, 0, 0, 0, 0, "0x7F52Da327C3a6bbFc1dF348994919a66dcAC33e0", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[397]).updateCollection(
  //    "Sexperience",
  //    "Event organizers organize and sell tickets to experiences that are designed to get people laid. They are rated on the percentage of guys that attend their experiences that they are able to get laid without violating platform terms (no illegal substance, no underage person, no paying for sex, safety precautions are taken to prevent rape or false rape allegations). The experiences can be anything from parties, or yatch parties to trips; anything that will create circumstances that will get the guys laid. The guys pay for the tickets and the girls do not have to pay for most experiences. The girls are rated on 3 metrics (sexiness, promiscuity level, femininity) and the more they score on any of those metrics, the higher their chances of getting invited to most luxurious experiences. As for event organizers, the more guys they are able to get laid (this has to be verified by an auditor), the more tickets they can sell and the more expensive experiences they can organize.",
  //    "https://i.ibb.co/r7YNgnH/131.jpg",
  //    "https://i.ibb.co/r7YNgnH/131.jpg",
  //    "https://i.ibb.co/cXxSVLC/410-2.jpg",
  //    "",
  //    "",
  //    "0x1a8e20B265A9D5D1Cd3BA0b157da15d5EfB8Ea62",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("398marketPlaceCollection.updateCollection===========> Done!")

  //  // 395
  //  await marketPlaceCollection.connect(wallets[314]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[314]).updateCollection(
  //    "SlimmerGames",
  //    "Get ready to transform your body and have fun doing it with SlimmerGames – the innovative platform that combines weight loss goals with interactive gaming challenges. By participating in engaging competitions designed to motivate and support healthy habits, users earn points and climb leaderboards based on their progress towards achieving desired weight loss targets. The friendly competition element not only enhances accountability but also creates a sense of camaraderie among participants. So why wait? Create your profile, join a game, and start shedding pounds while having a blast! SlimmerGames – where fitness meets entertainment.",
  //    "https://i.ibb.co/BrLzdYN/132.jpg",
  //    "https://i.ibb.co/BrLzdYN/132.jpg",
  //    "https://i.ibb.co/vBrM4jf/409-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("395marketPlaceCollection.updateCollection===========> Done!")

  //  // 399
  //  await marketPlaceCollection.connect(wallets[398]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[398]).updateCollection(
  //    "HackathonHub",
  //    "Welcome to HackathonHub – the premier destination for anyone interested in hackathons. Whether you're seeking to attend events, organize your own, or collaborate with fellow enthusiasts, our intuitive platform streamlines the entire process. Search for upcoming hackathons around the globe, connect with organizers, and even submit applications for participation. For those eager to host their own events, our tools simplify planning, promotion, and management tasks, allowing you to focus on crafting memorable experiences. At HackathonHub, we believe in the power of collaboration, creativity, and innovation. Join us today and discover the limitless opportunities awaiting you in this thriving global community.",
  //    "https://i.ibb.co/jyGLD7k/133.jpg",
  //    "https://i.ibb.co/jyGLD7k/133.jpg",
  //    "https://i.ibb.co/4YSV8hM/408-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("399marketPlaceCollection.updateCollection===========> Done!")

  //  // 400
  //  await marketPlaceCollection.connect(wallets[399]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[399]).updateCollection(
  //    "LandscapeLink",
  //    "Introducing LandscapeLink – the go-to source for homeowners and commercial property managers seeking top-notch landscaping services. Our comprehensive directory showcases pre-screened professionals offering everything from lawn care and garden design to hardscaping and irrigation solutions. Navigate user-friendly features such as photo galleries, customer reviews, and service listings to easily compare and select the ideal landscape contractor for your specific needs. Trust LandscapeLink to connect you with reputable experts committed to bringing your outdoor visions to life. Transform your surroundings with ease and confidence – begin your search today!",
  //    "https://i.ibb.co/sFF74VP/134.jpg",
  //    "https://i.ibb.co/sFF74VP/134.jpg",
  //    "https://i.ibb.co/3CXYKZM/407-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("400marketPlaceCollection.updateCollection===========> Done!")

  //  // 401
  //  await marketPlaceCollection.connect(wallets[400]).addCollection(0, 0, 0, 0, 0, 0, "0x7D797d2D96EA6187E85008B8B2F386a552C86d6b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[400]).updateCollection(
  //    "MisFarms",
  //    "Discover MisFarms – the revolutionary marketplace connecting local farmers with consumers hungry for fresh produce at affordable prices. Our platform empowers growers to showcase surplus or cosmetically imperfect crops, providing an opportunity to reduce waste and increase profits. Meanwhile, shoppers can access delicious deals on farm-fresh goods, supporting sustainable agriculture practices within their communities. Easy-to-use features include customizable search options, direct communication between buyers and sellers, and convenient delivery arrangements. Experience the benefits of buying locally and saving money with MisFarms – good for you, great for the environment.",
  //    "https://i.ibb.co/2Kng73j/135.jpg",
  //    "https://i.ibb.co/2Kng73j/135.jpg",
  //    "https://i.ibb.co/NNZVjBf/406-2.jpg",
  //    "",
  //    "",
  //    "0x2cc1F3A5A27ef2985768ff98526337db6E05C847",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("401marketPlaceCollection.updateCollection===========> Done!")

  //  // 402
  //  await marketPlaceCollection.connect(wallets[401]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[401]).updateCollection(
  //    "UsedOnes",
  //    "Unlock the full potential of your assets with UsedOnes – the all-encompassing online hub for buying and selling pre-owned cars, motorcycles, boats, planes, and other recreational vehicles. Our dynamic platform simplifies the sales process, connecting private parties and dealerships alike through detailed listings, secure transactions, and transparent communications. Explore a vast inventory of unique items, ranging from classic collectibles to modern marvels, all backed by trustworthy reputation and expertise. Whether you're a seasoned collector or simply seeking adventure on a budget, UsedOnes is your gateway to endless possibilities. Start shopping or listing today!",
  //    "https://i.ibb.co/RTc0Yxt/138.jpg",
  //    "https://i.ibb.co/RTc0Yxt/138.jpg",
  //    "https://i.ibb.co/bdtXHnV/405-2.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("402marketPlaceCollection.updateCollection===========> Done!")

  //  // 403
  //  await marketPlaceCollection.connect(wallets[402]).addCollection(0, 0, 0, 0, 0, 0, "0x6E91468E9685bF6Ddd9Ef0a7Cce5597698878E9D", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[402]).updateCollection(
  //    "PlugNProp",
  //    "Imagine transforming your outdoor space with just a few clicks – welcome to PlugNProp. Our innovative platform offers a seamless experience for ordering customized fencing and various small construction projects, including artistic designs tailored to your preferences. Simply browse available options, place your order, and schedule installation directly with vetted contractors in your area. With our extensive network of skilled professionals, you can rest assured that your vision will come to life efficiently and cost-effectively. Upgrade your home's curb appeal and overall functionality with PlugNProp – convenience and quality at your fingertips.",
  //    "https://i.ibb.co/vHHYWRR/139.jpg",
  //    "https://i.ibb.co/vHHYWRR/139.jpg",
  //    "https://i.ibb.co/tqJ9HTM/322-2.jpg",
  //    "",
  //    "",
  //    "0x0515c86e557cc59bB575A420B69aFdF41EA873b1",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("403marketPlaceCollection.updateCollection===========> Done!")

  //  // 404
  //  await marketPlaceCollection.connect(wallets[403]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[403]).updateCollection(
  //    "Daycarify",
  //    "Welcome to Daycarify – the premier destination for parents searching for exceptional child care facilities. Our user-friendly platform enables easy exploration of licensed daycares, preschools, and afterschool programs based on location, age group, curriculum, and more. Glean valuable insights from parent reviews, photos, and descriptions before scheduling tours and making informed decisions. As a bonus, our resources section offers helpful articles, tips, and checklists to guide families throughout their journey. Find peace of mind knowing your little ones are receiving nurturing care and education with Daycarify",
  //    "https://i.ibb.co/S0YDBq4/140.jpg",
  //    "https://i.ibb.co/S0YDBq4/140.jpg",
  //    "https://i.ibb.co/WVsqwMT/321-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("404marketPlaceCollection.updateCollection===========> Done!")

  //  // 405
  //  await marketPlaceCollection.connect(wallets[404]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[404]).updateCollection(
  //    "SurveillanceGuard",
  //    "Introducing SurveillanceGuard – the groundbreaking solution for individuals and business owners seeking reliable remote monitoring assistance. Our intuitive platform connects users with trained security specialists who can remotely view live footage, detect anomalies, and promptly alert you of any suspicious activities or write reports on the content of the footages. By leveraging state-of-the-art technologies and human vigilance, we offer unparalleled protection against burglaries, property damage, and other safety threats as well as a good way to detect a fix inefficiencies in your processes. Sign up now to gain instant access to our pool of qualified guardians, ensuring round-the-clock coverage and total piece of mind. Join the ranks of satisfied customers safeguarded by SurveillanceGuard.",
  //    "https://i.ibb.co/gJqYQV7/141.jpg",
  //    "https://i.ibb.co/gJqYQV7/141.jpg",
  //    "https://i.ibb.co/wyWRV09/320-2.jpg",
  //    "",
  //    "",
  //    "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("405marketPlaceCollection.updateCollection===========> Done!")

  //  // 406
  //  await marketPlaceCollection.connect(wallets[405]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[405]).updateCollection(
  //    "Cleanup",
  //    "Meet Cleanup – the collaborative community platform uniting residents, organizations, and volunteer groups dedicated to maintaining the beauty and wellbeing of shared spaces. Our interactive map highlights active initiatives across different locations, allowing users to easily locate opportunities to participate in beach cleanups, park maintenance, roadside trash pickups, and more. Contribute funds or physical labor towards these worthy causes, fostering environmental stewardship and social cohesion. Together, let's create cleaner, safer, and happier neighborhoods with Cleanup.",
  //    "https://i.ibb.co/ZczNT9G/142.jpg",
  //    "https://i.ibb.co/ZczNT9G/142.jpg",
  //    "https://i.ibb.co/c6wR5Y8/316-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("406marketPlaceCollection.updateCollection===========> Done!")

  //  // 407
  //  await marketPlaceCollection.connect(wallets[406]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[406]).updateCollection(
  //    "GuaranteedHiring",
  //    "Find and apply to companies that guarantee to hire a specific percentage of people that buy its tickets. The process is, you buy a ticket, add a link to your resume in the ticket's note section if you want to apply. They will contact you for an interview if interested. You can also buy a ticket just to support the program",
  //    "https://i.ibb.co/NFRtCvs/143.jpg",
  //    "https://i.ibb.co/NFRtCvs/143.jpg",
  //    "https://i.ibb.co/tLsDs0x/315-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("407marketPlaceCollection.updateCollection===========> Done!")

  //  // 408
  //  await marketPlaceCollection.connect(wallets[407]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[407]).updateCollection(
  //    "DojoFinder",
  //    "Discover the path to personal empowerment through DojoFinder – your ultimate destination for finding local martial arts, yoga, and fitness classes tailored to your interests and skill level. From traditional Karate and Taekwondo to contemporary disciplines such as Mixed Martial Arts (MMA) and Brazilian Jiu-Jitsu, explore engaging virtual or in-person sessions led by experienced instructors. Connect with fellow practitioners, track progress, and elevate your mental and physical prowess with ease. Embrace your inner warrior and embark upon a fulfilling journey with DojoFinder.",
  //    "https://i.ibb.co/GTfYPyQ/144.jpg",
  //    "https://i.ibb.co/GTfYPyQ/144.jpg",
  //    "https://i.ibb.co/Khgv5Y5/314-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("408marketPlaceCollection.updateCollection===========> Done!")

  //  // 409
  //  await marketPlaceCollection.connect(wallets[408]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[408]).updateCollection(
  //    "NurseShift",
  //    "Navigating the complex world of healthcare staffing has never been easier thanks to NurseShift – the leading online marketplace connecting nurses with short-notice shift opportunities at top hospitals, clinics, and long-term care centers near you. Benefit from flexible scheduling options, competitive pay rates, and customized notifications tailored to your availability and preferred settings. Whether you're looking for full-time, part-time, per diem, or travel assignments, our streamlined platform simplifies the search process and helps you achieve work-life balance. Experience seamless integration into new environments with NurseShift.",
  //    "https://i.ibb.co/YXCrQJN/145.jpg",
  //    "https://i.ibb.co/YXCrQJN/145.jpg",
  //    "https://i.ibb.co/PYL3gZg/313-2.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("409marketPlaceCollection.updateCollection===========> Done!")

  //  // 410
  //  await marketPlaceCollection.connect(wallets[409]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[409]).updateCollection(
  //    "FuneralWiz",
  //    "Welcome to FuneralWiz – the revolutionary platform transforming how communities come together to plan, fund, and execute meaningful end-of-life celebrations. Our user-friendly interface enables members to contribute financially towards group funeral arrangements, share essential items like flowers, and coordinate services collectively. By joining forces, participants not only reduce costs but also benefit from emotional support during difficult times. Join a valuepool today and discover the power of communal strength and solidarity on FuneralWiz.",
  //    "https://i.ibb.co/80hFvPX/146.jpg",
  //    "https://i.ibb.co/80hFvPX/146.jpg",
  //    "https://i.ibb.co/4ZyCPxR/312-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("410marketPlaceCollection.updateCollection===========> Done!")

  //  // 411
  //  await marketPlaceCollection.connect(wallets[410]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[410]).updateCollection(
  //    "CallCenter",
  //    "Elevate your business operations with the help of CallCenter – the premier directory showcasing established customer service providers offering phone, email, chat, and social media assistance. Our intuitive platform allows you to browse various channel types, response time guarantees, language capabilities, and pricing structures to suit your unique needs. Collaborate with seasoned professionals delivering exceptional experiences to clients around the clock. Enhance your brand reputation and boost customer satisfaction with CallCenter.",
  //    "https://i.ibb.co/VYpR7KW/147.jpg",
  //    "https://i.ibb.co/VYpR7KW/147.jpg",
  //    "https://i.ibb.co/mbFz3yP/311-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("411marketPlaceCollection.updateCollection===========> Done!")

  //  // 412
  //  await marketPlaceCollection.connect(wallets[411]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[411]).updateCollection(
  //    "KeyFree",
  //    "Unleash the potential of smart home technology with KeyFree – the innovative platform connecting property owners with certified installers of keyless entry systems for doors, vehicles, and any locked item. Say goodbye to fumbling for keys and worrying about misplaced accessories with our cutting-edge solutions. Control who gains entry remotely using mobile apps or voice commands, ensuring maximum security and convenience. Upgrade your living experience with KeyFree.",
  //    "https://i.ibb.co/jJ3Yxrt/148.jpg",
  //    "https://i.ibb.co/jJ3Yxrt/148.jpg",
  //    "https://i.ibb.co/QkQBFRT/310-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("412marketPlaceCollection.updateCollection===========> Done!")

  //  // 413
  //  await marketPlaceCollection.connect(wallets[412]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[412]).updateCollection(
  //    "OpenCouple",
  //    "Explore the realm of romantic connections with OpenCouple – the groundbreaking dating site and app designed for individuals seeking non-monogamous relationships or those curious about polyamory lifestyles. Our inclusive community welcomes diverse preferences and provides a safe space for open communication, mutual respect, and love without boundaries. Join us now and discover a world of possibilities beyond conventional dating norms with OpenCouple.",
  //    "https://i.ibb.co/JdP1RdG/149.jpg",
  //    "https://i.ibb.co/JdP1RdG/149.jpg",
  //    "https://i.ibb.co/tDFGphs/309-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("413marketPlaceCollection.updateCollection===========> Done!")

  //  // 414
  //  await marketPlaceCollection.connect(wallets[413]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[413]).updateCollection(
  //    "OnDemandInterviews",
  //    "Independent recruiters receive bookings for interviews for typical positions. The interview is recorded and reposted on their channel so potential employers can go through each video a pick the candidate they want to move forward with",
  //    "https://i.ibb.co/PmMGwjF/150.jpg",
  //    "https://i.ibb.co/PmMGwjF/150.jpg",
  //    "https://i.ibb.co/CQxbvnm/308-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("414marketPlaceCollection.updateCollection===========> Done!")

  //  // 415
  //  await marketPlaceCollection.connect(wallets[414]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[414]).updateCollection(
  //    "DeathReport",
  //    "Find auditors you can report new deaths to so they can publish or reward you in case they ever make money from the information. You can also book sessions with auditors to find out whether someone that went missing is dead",
  //    "https://i.ibb.co/hFbv35s/151.jpg",
  //    "https://i.ibb.co/hFbv35s/151.jpg",
  //    "https://i.ibb.co/P6GZvMk/307-2.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("415marketPlaceCollection.updateCollection===========> Done!")

  //  // 416
  //  await marketPlaceCollection.connect(wallets[415]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[415]).updateCollection(
  //    "Mistiq",
  //    "Embrace spiritual exploration with Mistiq – the online destination bridging seekers with gifted Voodoo practitioners, tarot card readers, empaths, and other mystical advisors. Whether you're looking for guidance, healing, or self-discovery, our curated selection of experienced practitioners caters to various beliefs and practices. Schedule confidential sessions conveniently through our secure platform and embark on a journey of introspection and enlightenment with Mistiq.",
  //    "https://i.ibb.co/yQb3ZDT/152.jpg",
  //    "https://i.ibb.co/yQb3ZDT/152.jpg",
  //    "https://i.ibb.co/cQ3qrST/306-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("416marketPlaceCollection.updateCollection===========> Done!")

  //  // 417
  //  await marketPlaceCollection.connect(wallets[416]).addCollection(0, 0, 0, 0, 0, 0, "0x023803056E3532348E8a6Deac35dafD4732F792b", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[416]).updateCollection(
  //    "FlyMeOut",
  //    "Find people to fly you out to places or people you can fly out to places",
  //    "https://i.ibb.co/KGJq9cw/153.jpg",
  //    "https://i.ibb.co/KGJq9cw/153.jpg",
  //    "https://i.ibb.co/s31v9Yh/305-2.jpg",
  //    "",
  //    "",
  //    "0x4E53C05E933CE8281CfaBe75b456528d40fcBAFc",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("417marketPlaceCollection.updateCollection===========> Done!")

  //  // 418
  //  await marketPlaceCollection.connect(wallets[417]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[417]).updateCollection(
  //    "TeerAbroad",
  //    "Make a meaningful impact across borders with TeerAbroad – the pioneering platform offering immersive volunteer tourism experiences in healthcare facilities around the globe. By purchasing a ticket, compassionate travelers can contribute their skills and time to support patients, families, and medical staff in underprivileged communities. Our carefully selected projects ensure ethical engagement, cultural sensitivity, and lasting positive change. Transform lives and broaden perspectives with TeerAbroad.",
  //    "https://i.ibb.co/Lz0ZF7w/154.jpg",
  //    "https://i.ibb.co/Lz0ZF7w/154.jpg",
  //    "https://i.ibb.co/v1XTLCG/304-2.jpg",
  //    "",
  //    "",
  //    "0xdE46100D142FD66f50697dF99c296796100983de",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("418marketPlaceCollection.updateCollection===========> Done!")

  //  // 419
  //  await marketPlaceCollection.connect(wallets[418]).addCollection(0, 0, 0, 0, 0, 0, "0x05Da08335F8B187769E60F3D92254e69ed5dF3EE", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[418]).updateCollection(
  //    "OpenRegulate",
  //    "Find valuepools funding international regulation efforts in various sectors like education, healthcare, food, etc",
  //    "https://i.ibb.co/wW449gL/300.jpg",
  //    "https://i.ibb.co/wW449gL/300.jpg",
  //    "https://i.ibb.co/HHk1ZxW/303-2.jpg",
  //    "",
  //    "",
  //    "0x06BF8AF06Bf883D8124EF7466ABc68Dd8036a5C6",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("419marketPlaceCollection.updateCollection===========> Done!")

  //  // 420
  //  await marketPlaceCollection.connect(wallets[419]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[419]).updateCollection(
  //    "WingBook",
  //    "Elevate your dating game with WingBook – the innovative matchmaking service connecting singles with reliable wingmen and women who excel at making introductions, breaking ice, and ensuring enjoyable interactions. Our rigorous screening process guarantees compatibility and professionalism, so you can focus on building genuine connections and potential romance. Unlock your full dating potential with WingBook.",
  //    "https://i.ibb.co/sq0VNrQ/301.jpg",
  //    "https://i.ibb.co/sq0VNrQ/301.jpg",
  //    "https://i.ibb.co/Pj8PpKK/302-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("420marketPlaceCollection.updateCollection===========> Done!")

  //  // 421
  //  await marketPlaceCollection.connect(wallets[420]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[420]).updateCollection(
  //    "DiasporaHub",
  //    "Strengthen diaspora bonds worldwide with DiasporaHub – the exclusive social networking platform designed specifically for community event organization within each country. Members can effortlessly create, promote, and attend gatherings tailored to their unique heritage, culture, and traditions. Connect with fellow expats, exchange ideas, and celebrate shared identities through DiasporaHub.",
  //    "https://i.ibb.co/4Rkq2vx/302.jpg",
  //    "https://i.ibb.co/4Rkq2vx/302.jpg",
  //    "https://i.ibb.co/1zR3Kc1/301-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("421marketPlaceCollection.updateCollection===========> Done!")

  //  // 422
  //  await marketPlaceCollection.connect(wallets[421]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  //  await marketPlaceCollection.connect(wallets[421]).updateCollection(
  //    "FutureEarn",
  //    "Find social media channels offering the subscribe to earn model where creators sell the rights to future earnings on their videos.",
  //    "https://i.ibb.co/4PnG90f/303.jpg",
  //    "https://i.ibb.co/4PnG90f/303.jpg",
  //    "https://i.ibb.co/cwsnptG/300-2.jpg",
  //    "",
  //    "",
  //    "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("422marketPlaceCollection.updateCollection===========> Done!")

  //  // 423
  // await marketPlaceCollection.connect(wallets[422]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[422]).updateCollection(
  //    "COM",
  //    "Empower migrant communities with COM – the groundbreaking platform facilitating collective resource pooling towards establishing independent states that reflect their values, cultures, and aspirations. Navigate complex processes, collaborate with likeminded individuals, and pave the way for alternative forms of governance with COM. Also find and recruit migrants willing to come back home.",
  //    "https://i.ibb.co/4PnG90f/303.jpg",
  //    "https://i.ibb.co/4PnG90f/303.jpg",
  //    "https://i.ibb.co/cwsnptG/300-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("423marketPlaceCollection.updateCollection===========> Done!")

   // 424
  // await marketPlaceCollection.connect(wallets[423]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  //  console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[423]).updateCollection(
  //   "PayrollDates",
  //   "Guys create payrolls that program monthly payments over a minimum period of 2 years for a girl they will match with on the platform. Girls apply to the payrolls of the guys the want to their boyfriends. If the guy agrees, they have a first date and if they are willing to move forward, they girl must also invest either the same amount as the guy in a bounty or have sex with the guy and skip the first month of payment. If after the 2 years they are willing to get married, they can join the community of couples that were created due to the platform and benefit from its valuepool",
  //   "https://i.ibb.co/Lnpcxhm/319.jpg",
  //   "https://i.ibb.co/Lnpcxhm/319.jpg",
  //    "https://i.ibb.co/1zR3Kc1/301-2.jpg",
  //    "",
  //    "",
  //    "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //    "All",
  //    "",
  //    ""
  //  );
  //  console.log("424marketPlaceCollection.updateCollection===========> Done!")

  // // 425
  // await marketPlaceCollection.connect(wallets[424]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[424]).updateCollection(
  //   "HealthManager",
  //   "Find and subscribe yourself or closed ones to a health manager. Health managers take charge of all healthcare needs of their subscribers and make sure not only are they healthy but also that they don't spend much money to be healthy. Health managers can specialize in various forms of care (mental health, chronic care, elderly, at-home, emergency responses, etc.)",
  //   "https://i.ibb.co/k6d7nF6/320.jpg",
  //   "https://i.ibb.co/k6d7nF6/320.jpg",
  //   "https://i.ibb.co/Pj8PpKK/302-2.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("425marketPlaceCollection.updateCollection===========> Done!")

  // // 426
  // await marketPlaceCollection.connect(wallets[425]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[425]).updateCollection(
  //   "RichDad",
  //   "Find valuepools that let you buy the right to ask for an amount of money. This enables rich people that are afraid of people coming after them for their money to protect their money by using it to buy the right to ask for the totality or part of the money back whenever they need it. To ask for the money, users create a request in their valuepool and if their request is deemed fair by their valuepool members, they can get the money back. Some valuepools can make investments on behalf of their members or just manage the totality of the fund to increase its value which also increases the amount of money members can ask for. Members of a valuepool that makes 10% return every year will  see the amount of money they can ask for increase by 10% every year.",
  //   "https://i.ibb.co/gjGqhGc/321.jpg",
  //   "https://i.ibb.co/gjGqhGc/321.jpg",
  //   "https://i.ibb.co/HHk1ZxW/303-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("426marketPlaceCollection.updateCollection===========> Done!")

  // // 427
  // await marketPlaceCollection.connect(wallets[426]).addCollection(0, 0, 0, 0, 0, 0, "0x406BD6A54A4807E207823D28AB908b0E9466678E", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[426]).updateCollection(
  //   "NatDat",
  //   "Date people based on their nationalities",
  //   "https://i.ibb.co/5RbJf1g/322.jpg",
  //   "https://i.ibb.co/5RbJf1g/322.jpg",
  //   "https://i.ibb.co/v1XTLCG/304-2.jpg",
  //   "",
  //   "",
  //   "0xb55A821877d473D972B4ECBB18E41739687c539f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("427marketPlaceCollection.updateCollection===========> Done!")

  // // 428
  // await marketPlaceCollection.connect(wallets[427]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[427]).updateCollection(
  //   "MentalMeet",
  //   "Find and connect with people that are dealing with the same mental health issues as you. Auditors and bounties help users certify they are really going through what they say they are going through.",
  //   "https://i.ibb.co/5RbJf1g/322.jpg",
  //   "https://i.ibb.co/5RbJf1g/322.jpg",
  //   "https://i.ibb.co/v1XTLCG/304-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("428marketPlaceCollection.updateCollection===========> Done!")

  // // 429
  // await marketPlaceCollection.connect(wallets[284]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[284]).updateCollection(
  //   "EmailList",
  //   "Find and join email list paywalls that will send you the emails of their new subscribers. You get the emails sent to you at the end of each day as long as you keep being a subscriber",
  //   "https://i.ibb.co/NCmqtz4/323.jpg",
  //   "https://i.ibb.co/NCmqtz4/323.jpg",
  //   "https://i.ibb.co/tqJ9HTM/322-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("429marketPlaceCollection.updateCollection===========> Done!")

  // // 430
  // await marketPlaceCollection.connect(wallets[231]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[231]).updateCollection(
  //   "Customersist",
  //   "Find and book a professional to help you assist your customers with disabilities, navigate your services whether you are an airport, hospital, bank, etc. People with disabilities can book their own personal assistant as well.",
  //   "https://i.ibb.co/wwc5D0Y/324.jpg",
  //   "https://i.ibb.co/wwc5D0Y/324.jpg",
  //   "https://i.ibb.co/bdtXHnV/405-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("430marketPlaceCollection.updateCollection===========> Done!")

  // // 431
  // await marketPlaceCollection.connect(wallets[428]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[428]).updateCollection(
  //   "Distraid",
  //   "Do you have an aid to distribute? Partner with the channel and post information about the aid as well as the type of collateral you can accept from the field agents you are willing to work with for the distribution. Receive agent applications on your channel, pick the right field agents and distribute away in a transparent, trustless & traceable manner. The channel also enables you to document the lives of people in need for aid so the channel's valuepool can vote on ways to help them out.",
  //   "https://i.ibb.co/m5qT51p/325.jpg",
  //   "https://i.ibb.co/m5qT51p/325.jpg",
  //   "https://i.ibb.co/NNZVjBf/406-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("431marketPlaceCollection.updateCollection===========> Done!")

  // // 432
  // await marketPlaceCollection.connect(wallets[429]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[429]).updateCollection(
  //   "HomeSchool",
  //   "Find parents to home-school your kids with.",
  //   "https://i.ibb.co/bNhCCCW/326.jpg",
  //   "https://i.ibb.co/bNhCCCW/326.jpg",
  //   "https://i.ibb.co/nzgT3nX/431-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("432marketPlaceCollection.updateCollection===========> Done!")

  // // 433
  // await marketPlaceCollection.connect(wallets[430]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[430]).updateCollection(
  //   "InvestaWed",
  //   "Do you plan to start a business, find a user willing to become your wife, and pitch your business idea to channel's valuepool so its members can vote to fund your business or not. If funded you get to start the business, the valuepool holds 100% ownership but you become the CEO of the business and get performance based bonuses. Your wife that you must have found on the platform works for you in the business. You as the guy are subject to the channel's male terms and she is subject to the channel's female terms. If any of you violates the terms or you don't have kids after 5 years, you get replaced in the business by the next mate your partner picks (also from the channel).",
  //   "https://i.ibb.co/RcWFFwR/327.jpg",
  //   "https://i.ibb.co/RcWFFwR/327.jpg",
  //   "https://i.ibb.co/p222Jr2/432-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("433marketPlaceCollection.updateCollection===========> Done!")

  // // 434
  // await marketPlaceCollection.connect(wallets[431]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[431]).updateCollection(
  //   "FitMe",
  //   "Find and book experts to help you pick an outfit for an event you're going to.",
  //   "https://i.ibb.co/nmSRk3f/328.jpg",
  //   "https://i.ibb.co/nmSRk3f/328.jpg",
  //   "https://i.ibb.co/VSkbQTj/433-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("434marketPlaceCollection.updateCollection===========> Done!")

  // // 435
  // await marketPlaceCollection.connect(wallets[432]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[432]).updateCollection(
  //   "AnimalControl",
  //   "Find and book experts to help you get rid of rats, mosquitoes, bed bugs, or other insects or wild animals that invade your home, office or community. You can also buy some pets (cats, dogs, etc.) trained to rid you of these wild life creatures.",
  //   "https://i.ibb.co/tPvcZyT/329.jpg",
  //   "https://i.ibb.co/tPvcZyT/329.jpg",
  //   "https://i.ibb.co/Mc1WdgB/434-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("435marketPlaceCollection.updateCollection===========> Done!")

  // // 436
  // await marketPlaceCollection.connect(wallets[433]).addCollection(0, 0, 0, 0, 0, 0, "0x272D5d2E5Be74ec1216162D3418be7EDF929d2a9", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[433]).updateCollection(
  //   "Pegasus",
  //   "Pegasus is your platform of choice to access a comprehensive database of all business divisions in the medical filed, equipped with a mapping system that allows entities to easily map their products and services. This platform will serve as a gateway for customers and interested parties to easily access the products and services of various divisions.",
  //   "https://i.ibb.co/dJfDszD/330.jpg",
  //   "https://i.ibb.co/dJfDszD/330.jpg",
  //   "https://i.ibb.co/Hdz5c4Y/435-2.jpg",
  //   "",
  //   "",
  //   "0xdE46100D142FD66f50697dF99c296796100983de",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("436marketPlaceCollection.updateCollection===========> Done!")

  // // 437
  // await marketPlaceCollection.connect(wallets[434]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[434]).updateCollection(
  //   "DateFeedback",
  //   "Find a love consultant for your couple that you can both talk to either one at a time or both at the same time. If you have a feedback to give to your partner that you do not want to say to them yourself, you can talk to your consultant who in turn will find a way to communicate that to your partner in a way not to reveal the feedback might be coming from you. Some love consultants might be a little more traditional than others and that is disclosed in their products descriptions. You can vote for/against them and leave a review to share your impressions of their competencies when dealing with them.",
  //   "https://i.ibb.co/28RKFKc/331.jpg",
  //   "https://i.ibb.co/28RKFKc/331.jpg",
  //   "https://i.ibb.co/PTzWnV4/436-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("437marketPlaceCollection.updateCollection===========> Done!")

  // // 438
  // await marketPlaceCollection.connect(wallets[435]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[435]).updateCollection(
  //   "Neibor",
  //   "To join the platform, users need at least 2 profiles, theirs and that of their neighbor(s). Guys' neighbors must be females but there is no requirement on the gender of the girls' neighbors. Every profile must be that of a single person. Whenever you find someone you like, you can get his/her neighbor to swap appartment with you for at least 1 week so you can become neighbor with the person you like and get the chance to know him/her better. If things work out between you two, the channel's bank will accompany your couple and help it acquire a house, transportation, etc.",
  //   "https://i.ibb.co/jkLL2Qn/332.jpg",
  //   "https://i.ibb.co/jkLL2Qn/332.jpg",
  //   "https://i.ibb.co/7YLFb81/437-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("438marketPlaceCollection.updateCollection===========> Done!")

  // // 439
  // await marketPlaceCollection.connect(wallets[436]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[436]).updateCollection(
  //   "GigDate",
  //   "On GigDate, users market their dating profile with things they are ready to do in exchange for one or multiple dates with other users, this can be anything from delivering items, ridehailing, or coding, to helping out with taxes/administrative procedures, etc. Both party can agree of how many dates a service is worth. At GigDate, we beleive in the idea of being useful to one another as a good foundation for a relationship, so we launched a platform through which users pick their dates based on how useful they can be to them. Each user has a bounty to guarantee trustworthiness.",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/k11SX3n/438-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("439marketPlaceCollection.updateCollection===========> Done!")

  // // 440
  // await marketPlaceCollection.connect(wallets[437]).addCollection(0, 0, 0, 0, 0, 0, "0x59013988E3730A66A9A973a812fb94056E6e7855", false, false);
  // console.log("marketPlaceCollection.addCollonnect(wallets[0]).addCollection===========> Done!")
  // await marketPlaceCollection.connect(wallets[437]).updateCollection(
  //   "Leviathana",
  //   "The Leviathana is the philosophy that governs members of the Leviathans' communities. It is not a religion and it accepts any member of any religion, race, gender or ethnic background. Members of all 12 Leviathans that adhere to the Leviathana are called leviats.",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/f2xhTGn/333.jpg",
  //   "https://i.ibb.co/k11SX3n/438-2.jpg",
  //   "",
  //   "",
  //   "0x6f491e004Df2e5797F9355F89E4fa4Ae6592e89f",
  //   "All",
  //   "",
  //   ""
  // );
  // console.log("440marketPlaceCollection.updateCollection===========> Done!")

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