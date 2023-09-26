import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

import Flower from '../public/Group 1000000920.png';



import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Headlogo from '../public/logs.png';
import Image from 'next/image';
import Circles from '../public/Group 6.png';
import Star from '../public/Union.png';
import Rectangle from '../public/Rectangle 349.png';
import One from '../public/one.png';
import Two from '../public/Group.svg';
import Three from '../public/thrs.svg';
import Fourth from '../public/cc.png';
import Mask from '../public/bacu.png'
import Dollar from '../public/ant-design_dollar-outlined.svg';
import Right from '../public/ep_arrow-right-bold.svg';
import Left from '../public/ep_arrow-right-bold (1).svg';

import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import localFont from 'next/font/local';
import Sliders from '../components/slider';
import Green from "../public/grk.png";
import Backt from '../public/BTT.png';
import Chart from '../components/stakechart';
import { ConnectWallet } from '@thirdweb-dev/react';
import PriceView from "../pages/test"
import Cmax from './mintcmax';
import Navbar from '../components/tradenav';
import Footer from '../components/footer';



const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});





import Stakingstats from '../public/Staking Stats.png';
import Totalrewards from '../public/Top Holders.png';

















import Navbs from '../public/dd.svg'


import Greens from '../public/grk.png';
import { useTranslation } from "react-i18next";

import ToolTip from "../components/tool-tip";
import styles from './stakemobile.module.css';
import Homer from '../public/hsss.png';
import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';
import Staks from '../public/s.png';
import Joincom from '../public/Join our community.png';
import Stakingb from '../public/Staking benefits.png';
import StakingPool from '../public/Staking pool.png';
import Cmaxprice from '../public/cmax price.png';
import Dolls from '../public/Frame 54.png';
import Copyright from '../public/Copy Right 2023 - CMax. All Rights Reserved.png';
import Claimrewards from '../public/claim rewards.png';
import Totalamount from '../public/Total amount stake.png';
import LanguageSelector from './mobilelang';



const StakeIPadPro1292:NextPage = () => {
  	const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);
  	const [isToolTipOpen, setToolTipOpen] = useState(false);
  	const [isToolTip1Open, setToolTip1Open] = useState(false);
  	
  	const openMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(true);
  	}, []);
  	
  	const closeMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(false);
  	}, []);
  	
  	
  	const openToolTip = useCallback(() => {
    		setToolTipOpen(true);
  	}, []);
  	
  	const closeToolTip = useCallback(() => {
    		setToolTipOpen(false);
  	}, []);
  	
  	
  	const openToolTip1 = useCallback(() => {
    		setToolTip1Open(true);
  	}, []);
  	
  	const closeToolTip1 = useCallback(() => {
    		setToolTip1Open(false);
  	}, []);
  	
  	
  	const onGroupContainer6Click = useCallback(() => {
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
  	
  	
  	const onGroupContainer10Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (<>
    		<div className={styles.stakeIpadPro1292}>
      			<div className={styles.stakeIpadPro1292Child} />
      			<div className={styles.ellipseParent}>
        				<div className={styles.frameChild} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameChild} />
        				<div className={styles.ellipseDiv} />
        				<div className={styles.ellipseDiv} />
        				<div className={styles.ellipseDiv} />
      			</div>

                  <div className={styles.mintcmax} >
                    <Cmax />
                  </div>

                
      			<Image className={styles.stakeIpadPro1292Item} alt="" src={Flower} />
      			<div className={styles.stakeIpadPro1292Inner} />

      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div style={thirdFont.style}  className={styles.stakingPool}>
					<Image src={StakingPool} alt='' />
					
					  </div>
      			<div style={thirdFont.style}   className={styles.stakingStats}>
					<Image src={Stakingstats} alt='' />
					 </div>
      		
      			<div className={styles.joinOurCommunityParent}>
        				<div  style={thirdFont.style}    className={styles.joinOurCommunity1}>
							<Image style={{margin:"auto"}} src={Joincom} alt='' />
							  </div>
        				<div  style={secondFont.style}  className={styles.diveIntoA1}>{t("communityparagraph")}   </div>
        				
                        <div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'290px',gap:'20px'}}>
						    <Image className={styles.groupIte} alt="" src={Github} />
						     <Image className={styles.groupIte} alt="" src={Twitter} />
						    <Image className={styles.groupIte} alt="" src={Linkedin} />
						    <Image className={styles.groupIte} alt="" src={Notion} />
							</div>  




      			</div>


				  <div className={styles.languageone}>
				<LanguageSelector />
				</div>



      			<div className={styles.rectangleParent}>
        				<div className={styles.groupInner} />
        				<Image className={styles.maskGroupIcon3} alt="" src={Headlogo} />
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
          					<div className={styles.copyRight20231}>
								<Image style={{margin:"auto"}} src={Copyright} alt='' />
								  </div>
        				</div>
        				<div className={styles.tradeParent}>
						<div style={fourthFont.style}  className={styles.trade}>< a href='/'>
							  <Image src={Homer} alt='' /> 
								</a>  </div>
          					<div style={fourthFont.style}  className={styles.trade}>< a href='/trade'>
							  <Image src={Tradei} alt='' /> 
								</a>  </div>
          					<div  style={fourthFont.style}   className={styles.trade}>< a href='/stake'>
							  <Image src={Stakei} alt='' />
								</a></div>
          					<div style={fourthFont.style}    className={styles.trade}> < a href='/about'>
							  <Image src={Abouti} alt='' />
								</a> </div>
          				
          					<div style={fourthFont.style}  className={styles.trade}>< a href='/profile'>
							  Profile
								</a>  </div>
        				</div>
      			</div>
      		
      			<div className={styles.stakeParent} onClick={openMenuIPadPro1291}>
        				
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div style={myFont.style} className={styles.stakingBenefits}>
					<Image src={Stakingb} alt='' />
					 </div>
      			<div style={secondFont.style}  className={styles.stakingInBlockchain1}>{t("stakebenefitparagraph")}   </div>
      			<div className={styles.frameParent}>
        				<div className={styles.frameDiv} onClick={openToolTip}>
          					<Image className={styles.groupIcon} alt="" src={One} />
          					<div style={secondFont.style}   className={styles.trade}>{t("earningreward")} </div>
        				</div>
        			
      			</div>
      			<div className={styles.frameGroup}>
        				<div className={styles.frameDiv} onClick={openToolTip1}>
          					<div className={styles.frame2}>
            						<img className={styles.groupIcon1} alt="" src="Group.svg" />
            						
          					</div>
          					<div style={secondFont.style}   className={styles.networkSecurity}>{t("network")}  </div>
        				</div>
        				
      			</div>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer6Click}>
        				<div className={styles.rectangleDiv} />
        				<div className={styles.lineParent}>
          					<div className={styles.lineDiv} />
          					<div className={styles.lineDiv} />
          					<div className={styles.lineDiv} />
          					<div className={styles.frameChild5} />
          					<div className={styles.frameChild5} />
          					<div className={styles.frameChild5} />
          					<div className={styles.frameChild5} />
          					<div className={styles.frameChild5} />
          					<div className={styles.frameChild5} />
        				</div>
        				<div  style={myFont.style}   className={styles.titaEtf}>Tita ETF</div>
        				



						<div className={styles.homepageStakeChild5} >
					

				
					
					</div>

						














        				<div className={styles.frameParent2}>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>1G</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div className={styles.div}>1M</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>3M</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>6M</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>1A</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>3A</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>5A</div>
          					</div>
          					<div className={styles.gWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>YTD</div>
          					</div>
          					<div className={styles.maxWrapper}>
            						<div style={thirdFont.style}  className={styles.div}>MAX</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.groupDiv}>
        				
        				<Image className={styles.maskGroupIcon4} alt="" src={Backt} />
        				<div className={styles.groupParent1}>
          					<div className={styles.totalAmountStakeParent}>
            						<div style={secondFont.style}   className={styles.totalAmountStake1}>
										<Image src={Totalamount} alt='' />
									</div>
            						<div className={styles.aprWrapper}>
              							<div style={secondFont.style}  className={styles.apr}>4 APR%</div>
            						</div>
            						<div style={thirdFont.style}  className={styles.cmax}>{t("cmax")}</div>
          					</div>
          					<img className={styles.frameChild11} alt="" src="Vector 15.svg" />
          					<div className={styles.claimRewardsParent}>
            						<div style={thirdFont.style}   className={styles.claimRewards}>

										<Image src={Claimrewards} alt='' />
									</div>
            						<div className={styles.antDesigndollarOutlinedParent}>
              							
              							<div  style={thirdFont.style}  className={styles.usd}>
											<Image src={Dolls} alt='' />
										</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent3}>
        				<div className={styles.rectangleContainer}>
          					<div className={styles.frameChild12} />
          					<img className={styles.frameChild13} alt="" src="Vector 16.svg" />
          					<img className={styles.frameChild14} alt="" src="Vector 17.svg" />
          					<img className={styles.frameChild15} alt="" src="Vector 18.svg" />
          					<div style={thirdFont.style}  className={styles.topHolders}>
								<Image src={Totalrewards} alt='' />
								 </div>
          					<div className={styles.frameParent22}>
            						<div className={styles.wrapper}>
              							<b style={thirdFont.style}  className={styles.trade}>1</b>
            						</div>
            						<div style={secondFont.style}  className={styles.div1}>09324414</div>
          					</div>
          					<div className={styles.frameParent5}>
            						<div className={styles.container}>
              							<b style={thirdFont.style}  className={styles.trade}>2</b>
            						</div>
            						<div style={secondFont.style}   className={styles.div2}>09324414</div>
          					</div>
          					<div className={styles.frameParent6}>
            						<div className={styles.container}>
              							<b style={thirdFont.style}  className={styles.trade}>3</b>
            						</div>
            						<div style={secondFont.style}  className={styles.div2}>09324414</div>
          					</div>
          					<div className={styles.frameParent7}>
            						<div className={styles.container}>
              							<b style={thirdFont.style}  className={styles.trade}>4</b>
            						</div>
            						<div  style={secondFont.style}  className={styles.div2}>09324414</div>
          					</div>
          					<div style={secondFont.style}   className={styles.div5}>2,337,786</div>
          					<div style={secondFont.style}   className={styles.div6}>2,337,786</div>
          					<div style={secondFont.style}   className={styles.div7}>2,337,786</div>
          					<div style={secondFont.style}  className={styles.div8}>2,337,786</div>
          					
        				</div>
        				<div className={styles.rectangleParent1} onClick={onGroupContainer10Click}>
          					<div className={styles.groupChild1} />
          					
          					<Image className={styles.frameIcon1} alt="" src={Greens} />
          					<div  style={myFont.style}  className={styles.cmaxPrice}>
								<Image src={Cmaxprice} alt='' />
							</div>
        				</div>
      			</div>
    		</div>
    		{isMenuIPadPro1291Open && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeMenuIPadPro1291}
        				>
        				<MenuIPadPro1291 />
      			</PortalPopup>
    		)}
    		{isToolTipOpen && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeToolTip}
        				>
        				<ToolTip onClose={closeToolTip} />
      			</PortalPopup>
    		)}
    		{isToolTip1Open && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeToolTip1}
        				>
        				<ToolTip onClose={closeToolTip1} />
      			</PortalPopup>
    		)}</>);
};

export default StakeIPadPro1292;
