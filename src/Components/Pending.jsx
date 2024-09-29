import React from 'react';
import { iphone12 } from '../Assets/ImageVariables';

function Pending() {
	return (
		<div className=" flex">
			<img src={iphone12} alt="" />
			<div className=" flex justify-between items-center w-full ml-4">
				<div>
					<p className=" text-[14px] text-black-60 font-inter-regular">
						iPhone 13{' '}
					</p>
					<p className=" text-[16px] text-[#33343A] font-inter-medium pt-2">
						₦730,000.00 x 1
					</p>
				</div>
				<div>
					<p className=" text-black-20 text-[13px] ">12 Sept 2022</p>
					<div className=" bg-[#f89d9857] flex justify-center items-center px-4 py-1 rounded-lg mt-2">
						<p className=" text-[#CC5F5F] text-[12px] ">Pending</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pending;
