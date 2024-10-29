import BaseText from "./text/BaseText";
import Heading1 from "./text/Heading1";
import Heading2 from "./text/Heading2";
import ListText from "./text/ListText";

export default function EthereumText() {
  return (
    <div className="max-w-screen-xl space-y-8 mx-auto my-10">
      <Heading1 text="What Is Ethereum?" />
      <BaseText text="The official Ethereum website defines Ethereum as “a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.”" />
      <BaseText text="Unfortunately, that isn’t too handy a definition for beginners. Simply put, Ethereum is a digital platform does two things:" />
      <ListText
        textArray={[
          {
            text: "It allows anyone to make use of unused computing power, and,",
          },
          {
            text: "It allows anyone to write failproof applications, called smart contracts.",
          },
        ]}
      />
      <BaseText text="Ethereum comes with its own cryptocurrency called Ether. As users donate their computing power to fuel the highly-informational system, a process known as mining, the system rewards them with Ether. Anyone who wants to make use of Ethereum’s contract platform has to pay using Ether, which they need to mine themselves or purchase from others." />
      <Heading1 text="How does Ethereum differ from Bitcoin?" />
      <BaseText text="Bitcoin is the most widely discussed cryptocurrency, so many newcomers find it helpful to draw comparisons and contrasts between the two." />
      <BaseText text="The difference lies in the scopes of the platforms. Bitcoin, like Ether, is solely a currency. Miners can trade their computer’s processing power in exchange for virtual money. It’s that processing power which is used to make sure that every transaction is verified and no money goes unaccounted for." />
      <BaseText text="Ethereum adds another layer to this, allowing users to create applications which make use of the platform’s collective processing power, in exchange for an Ether fee." />
      <Heading1 text="Ethereum’s Price Chart & Historial Ethereum Prices" />
      <BaseText text="The Ethereum platform went live on the 30th July 2015, making way for the first transactions." />
      <BaseText text="Within a month, Ether coins were being sold for between one and three US dollars. In late August, the price stabilized to around $1, which held constant until the end of the year." />
      <BaseText text="From the start of January 2016, the price of Ether increased steadily. By mid-June, coins were being sold for upwards of US $18." />
      <BaseText text="It was around this time that a project referred to as “The DAO” began crowdfunding through Ether. However, on the 17th June 2016, an exploit was found allowing a hacker to drain millions of Ethereum from The DAO’s crowdfunding pool." />
      <BaseText text="The price of Ether crashed down to around $11 per coin and did not recover until March 2017, when the previously-set $18 threshold was broken. One of the reasons for this was a widespread conflict in the community between those who believed that Ethereum’s protocol should be updated in light of the recent conundrum, and those who believed that the protocol should remain unchanged." />
      <BaseText text="Since then, the price has increased to $350 per coin (mid-June, 2017), having capped out previously just below $400." />
      <Heading1 text="ICOs and Ethereum" />
      <BaseText text="A hot topic in the crypto world is that of Initial Coin Offerings. Like their real-world stock exchange ancestors — Initial Public Offerings — Initial Coin Offerings (known shortly as ICOs) give investors the chance to fund a new project for the first time." />
      <BaseText text="In exchange for the investor’s cryptocurrency, they get some form of share in the project — often referred to as a token. This means that ICOs can be used to fund anything from new cryptocurrencies (where investors could be rewarded with already-mined coins) to digital services (where investors could be rewarded with subscription periods)." />
      <BaseText text="Ethereum was itself funded by a Bitcoin-based Initial Coin Offering, allowing the public to exchange their Bitcoins for Ether in the hopes that the project would succeed." />
      <BaseText text="Funnily enough, Ethereum is now an extremely popular platform for conducting ICOs, with many new cryptocurrencies and other digital services willing to receive funding in the form of Ether. Coinschedule shows a number of current ICOs." />
      <Heading1 text="Ethereum Wallets and Where to Buy Ethereum" />
      <BaseText text="To use Ethereum, you first need to have a Wallet from which you can conduct transactions. Wallets are pieces of software which can connect to the Ethereum platform, giving you an alphanumeric address through which you can receive Ether. You can use this same wallet to send Ether." />
      <Heading2 text="Popular Ethereum Wallets" />
      <ListText
        hrefShow={true}
        textArray={[
          { text: "MyEthereumWallet", href: "/" },
          { text: "Mist", href: "/" },
          { text: "Parity", href: "/" },
          { text: "Harmony", href: "/" },
        ]}
      />
      <BaseText text="Acquiring cryptocurrencies can be a confusing topic, and Ethereum is no different. The key understanding when purchasing Ethereum is that there is no centralized agency for doing so. This means that you have to purchase Ethereum directly from others; whether you choose to do so with the help of a middleman is up to you." />
      <Heading1 text="How to Buy Ethereum" />
      <Heading2 text="Buy Ethereum P2P" />
      <BaseText text="The most straightforward way of buying Ethereum is doing it directly with someone who already owns Ethereum. Simply have them send the Ether to your wallet’s address, and pay them back as required (via PayPal, intl. bank transfer, or in person with a fiat currency). The problem with doing this is that both parties have to trust eachother, which makes it tough for first-time buyers." />
      <Heading2 text="Ethereum Service" />
      <BaseText text="Thankfully, there are plenty of established services whose primary aim is to sell cryptocurrencies, including Ether, for the fiat money of your choice. This way, you’ll send them the compensation first and — on the guarantee of their reputation — they’ll credit your wallet’s address with the Ethereum. Such services include Coinbase and Cex.io." />
      <Heading2 text="Exchange Cryptocurrency" />
      <BaseText text="One another way to acquire Ethereum is by exchanging it for other cryptocurrencies which you already own. This involves finding an online cryptocurrency exchange (such as Poloniex or Shapeshift.io), creating an account, crediting it with the cryptocurrency of your choice, and exchanging for Ethereum at the given rate." />
      <Heading1 text="Ethereum Frequently Asked Questions (FAQ)" />
      <BaseText text="The sections above should have given you a working understanding of what Ethereum is, how it works, and what it can be used for. However, in case you have any more questions, we’ve compiled a list of Frequently Asked Questions." />
      <Heading2 text="Why is Ethereum gaining popularity so quickly?" />
      <BaseText text="Ethereum isn’t just a currency (if it is at all). Ethereum, unlike cryptocurrencies, is an entire processing platform for running secure applications which just so happens to use the same blockchain technology." />
      <Heading2 text="What is a blockchain?" />
      <BaseText text="A blockchain is a distributed database which keeps track of everything taking place on a network. Blockchains are made up of blocks which store information (such as the specifics of a cryptocurrency’s transaction). The integrity of all this information is guaranteed by the network’s users agreeing on it." />
      <Heading2 text="Where does Ether come from?" />
      <BaseText text="Ether is generated whenever miners complete a new block. The supply of Ether is controlled only by how quickly these blocks can be mined." />
      <Heading2 text="What is Gas?" />
      <BaseText text="Gas is a measurement of how much processing power is needed to secure a transaction or contract. The gas cost of any transaction is paid for with an Ether fee." />
      <Heading2 text="Is Ether supposed to be used as a currency?" />
      <BaseText text="Not necessarily, but it can be. That is to say that it’s primary purpose is to fuel the Ethereum network, like petrol’s primary purpose is to fuel cars, but it can be bought, sold, and exchanged for other goods if there is sufficient supply and demand." />
      <Heading2 text="What does premined mean? Is Ether premined?" />
      <BaseText text="When a cryptocurrency is premined, it means that a certain number of coins are created and distributed at launch. In order to help sustain the Ethereum project, just under 12 million coins were premined. Some of these went to the Ethereum Foundation, while others went to those who had participated in Ethereum’s Initial Coin Offering." />
      <Heading1 text="Additional Ethereum Links" />
      <ListText
        hrefShow={true}
        textArray={[
          { text: "Github Ethereum", href: "/" },
          { text: "Stack Exchange", href: "/" },
          { text: "Reddit Ethereum Community", href: "/" },
          { text: "Wikipedia Ethereum", href: "/" },
        ]}
      />
    </div>
  );
}
