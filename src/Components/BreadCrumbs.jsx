import React from 'react';
import { homeIcon } from '../Assets/ImageVariables';

function BreadCrum() {
	return (
		<div className=" mt-[2px] bg-white px-[20px] py-[4px]">
			<img src={homeIcon} alt="" />
		</div>
	);
}

export default BreadCrum;
