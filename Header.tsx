import React,{useState,useEffect,useContext} from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assests/eth.png'
import uniswapLogo from '../assests/uniswap.png'
import { TransactionContext } from '../context/TransactionContext'

export default function Header()
{
    const style = {
        wrapper:`p-4 w-screen flex justify-between items-center text-white`,
        headerLogo:'w-1/4 flex  items-center justify-start',
        nav:"flex-1 flex justify-center items-center",
        navItemContainer:"flex bg-[#191B1F] rounded-3xl",
        navItem:"px-4 py-2 m-1 text-white flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl",
        activeNavItem:"bg-[#20242A]",
        buttonsContainer:"flex w-1/4 justify-end items-center",
        button:"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer",
        buttonPadding:"p-2",
        buttonIconContainer:"flex items-center justify-center w-8 h-8",
        buttonTextContainer: `h-8 flex items-center`,
        buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
    }

    const [selectedNav,setSelectedNav] = useState('swap')
    const {connectWallet,currentAccount}: any = React.useContext(TransactionContext)
    const [userName,setUserName] : any = useState()

    useEffect( () =>{
        if(typeof currentAccount ==='string'){
            setUserName(`${currentAccount.toString().slice(0,7)}...${currentAccount.toString().slice(35,42)}`)
        }
    },[currentAccount])

    return(
        <div className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image src={uniswapLogo} alt="uniswap"height={70} width={70}></Image>
             </div>
             <div className={style.nav}>
                <div className={style.navItemContainer}>
                    <div 
                      onClick={()=>setSelectedNav('swap')}
                      className={`${style.navItem} ${selectedNav==='swap' && style.activeNavItem}`}>
                        swap
                    </div>
                    <div 
                      onClick={()=>setSelectedNav('pool')}
                      className={`${style.navItem} ${selectedNav==='pool' && style.activeNavItem}`}>
                        pool
                    </div>
                    <div 
                      onClick={()=>setSelectedNav('vote')}
                      className={`${style.navItem} ${selectedNav==='vote' && style.activeNavItem}`}>
                        vote
                    </div>
                    <a
                     href='https://info.uniswap.org/#/'
                     target='_blank'
                     rel='noreferrer'
                    >
                    <div className={style.navItem}>
                        charts <FiArrowUpRight/>
                    </div>
                    </a>
                </div>
             </div>
             <div className={style.buttonsContainer}>
                    <div className={`${style.button} ${style.buttonPadding}`}>
                            <div className={style.buttonIconContainer}>
                                <Image src={ethLogo} alt="Ethereum Logo" height={20} width={20}></Image>
                            </div>
                            <p>Ethereum</p>
                            <div className={style.buttonIconContainer}>
                                <AiOutlineDown/>
                            </div>
                    </div>
             </div>
             {
                currentAccount ? (
                    <div className={`${style.button} ${style.buttonPadding}`}>
                        <div className={`${style.buttonTextContainer}`}>{userName}</div>
                    </div>
                ):(
                    <div
                    onClick={() => connectWallet()}
                    className={`${style.button} ${style.buttonPadding}`}
                    >
                    <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                    Connect Wallet </div>
                    </div>
                )
             }
        </div>
    )
}