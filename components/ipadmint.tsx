import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./ipadmint.module.css";

import Image from "next/image";
import Logo from "../public/Group 7.svg";
import CommitLogo from "../public/Group 1000000931.svg";
import Tokens from "../public/Ellipse 74.svg";
import Arrow from "../public/ri_arrow-up-s-line.svg";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Headlogo from "../public/logs.png";
import Circles from "../public/Group 6.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import Minting from "../components/minting";
import Chart from "../components/chart";
import { ConnectKitButton } from "connectkit";
import Mintmobile from "../components/mintmobile";

import localFont from "next/font/local";
import Navbar from "../components/mintnav";
import IpadMint from "../components/ipadmint";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Languageswitch from "../components/desktop";
import Homer from "../public/hsss.png";
import Footer from "./footer";
import GenericMobileNavbar from "./mobileGenericNavbar";

const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

const TradeSubpageIPadPro129: NextPage = () => {
  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIcon1Click = useCallback(() => {
    // Add your code here
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    /* to implement this functions globally and keep the same language when u go to another page, 
		you can store the language code (en, fr, es, it, ar, ru) in localStorage, 
		and run this function in a useEffect on top of every page, 
		with the language code that is in the local storage as a parameter */
  };

  return (
    <div className={styles.tradeSubpageIpadPro129}>
      <GenericMobileNavbar />
      <div className={styles.tradeSubpageIpadPro129Child} />
      <div className={styles.swapMintburn2}>
        <Minting />
      </div>
      <Image className={styles.circleBgIcon} alt="" src={Circles} />
      

      
      <img className={styles.unionIcon2} alt="" src="Union.png" />
      <img className={styles.unionIcon3} alt="" src="Union.png" />
      
      <div className={styles.text7}>{` `}</div>
      <div className={styles.tradeSubpageIpadPro129Inner} />
      <div className={styles.lineParent}>
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
        <div className={styles.frameInner} />
      </div>

      <div style={myFont.style} className={styles.titaEtf}>
        Tita ETF
      </div>
      <div className={styles.wrapper}>
        <div style={secondFont.style} className={styles.home}>
          128.68
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            1G
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            1M
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            3M
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            6M
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            1A
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            3A
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            5A
          </div>
        </div>
        <div className={styles.gWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            YTD
          </div>
        </div>
        <div className={styles.maxWrapper}>
          <div style={thirdFont.style} className={styles.commitMint}>
            MAX
          </div>
        </div>
      </div>

      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon1} alt="" src="Vector.png" />
        <div style={secondFont.style} className={styles.home}>
          +1,03 | +0,83%
        </div>
      </div>
    </div>
  );
};

export default TradeSubpageIPadPro129;
