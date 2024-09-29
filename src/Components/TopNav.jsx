import React from 'react';
import { useSelector } from 'react-redux';
import {
	downArrow,
	notificationIcon,
	profileImage,
} from '../Assets/ImageVariables';

function TopNav() {
	const currentPage = useSelector((state) => state.navBarReducer.currentPage);

	return (
		<div className=" w-full bg-white h-fit flex justify-between items-center py-[14px] px-[21px]">
			<div className="">
				<p className=" header-medium">{currentPage}</p>
			</div>

			<div className=" flex justify-center items-center gap-[20px] ">
				<div className=" gap-2 flex justify-center items-center secondary-bg">
					<p className=" font-inter-regular text-[14px] text-black-100">
						Nanny’s Shop
					</p>
					<img src={downArrow} alt="" />
				</div>
				<img src={notificationIcon} alt="" />
				<img src={profileImage} alt="" />
			</div>
		</div>
	);
}
export default TopNav;
