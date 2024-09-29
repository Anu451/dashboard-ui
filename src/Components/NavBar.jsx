import React from 'react';
import navBarData from '../Assets/Data/navBarData';
import {
	customerSupport,
	gift,
	logo,
	logoutIcon,
	rightArrow,
} from '../Assets/ImageVariables';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPage } from '../Redux/navSlice';

function NavBar() {
	const dispatch = useDispatch();

	const handlePageChange = (page) => {
		dispatch(setPage(page));
	};

	return (
		<div className="   flex justify-start items-start bg-white w-fit py-5 px-5">
			<div>
				<Link to={'/'} className=" flex justify-start items-center pb-10">
					<img src={logo} alt="" className=" mr-[10px] " />
					<p className=" text-black-60 text-[22px]  font-poppins-bold">
						Metrix
					</p>
				</Link>
				<div className=" flex justify-between items-center flex-col h-screen ">
					<div>
						{navBarData.map((item) => {
							return (
								<Link to={item.path}>
									<div
										className=" w-[230px] flex justify-start items-center px-[20px] py-[10px] "
										key={item.path}
										onClick={() => handlePageChange(item.name)}
									>
										<img
											src={item.logoDefault}
											alt=""
											width={20}
											height={20}
											className=" mr-[20px]"
										/>
										<p className=" font-inter-regular text-black-50 text-[14px]">
											{item.name}
										</p>
										{/* <a href={item.path}>{item.name}</a> */}
									</div>
								</Link>
							);
						})}
					</div>
					<div>
						<div className=" flex justify-start items-center black-bg gap-4">
							<img src={customerSupport} alt="" className="" />
							<p className=" text-[14px]">Contact Support</p>
						</div>
						<div className=" secondary-bg mt-4 gap-4">
							<div className=" flex justify-start items-center  gap-4">
								<img src={gift} alt="" className=" " />
								<p className=" text-[14px]">Free Gift Awaits You!</p>
							</div>

							<div className=" flex justify-start items-center mt-3">
								<p className=" text-[12px] text-black-40">
									Upgrade your account
								</p>
								<img src={rightArrow} alt="arrow" className=" pl-4 " />
							</div>
						</div>
						<div className=" flex justify-start items-center py-[11px] px-[16px] gap-4 mt-6">
							<img src={logoutIcon} alt="" />
							<p className=" text-red text-[14px]"> Logout</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
