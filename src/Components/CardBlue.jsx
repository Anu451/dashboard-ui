import React from 'react';
import { greyDown } from '../Assets/ImageVariables';

function CardBlue({ CardDetails, CardContent }) {
	return (
		<div className={` ${CardDetails.cardBg}`}>
			<div className="flex justify-between">
				<div className={CardDetails.logoBg}>
					<img src={CardDetails.img} alt="" />
				</div>
				<div className="flex justify-center items-center">
					<p className="text-white text-[12px] pr-1">This Week</p>
					<img src={greyDown} alt="Dropdown" />
				</div>
			</div>
			<div className="flex justify-between">
				{CardContent.map((item) => (
					<div
						key={item.id}
						className="flex flex-col justify-start items-start"
					>
						<p className="text-[16px] text-white font-norma">{item.title}</p>
						<div className="flex justify-center items-center">
							<p className="font-poppins-regular text-white text-[20px] font-medium pr-2">
								{item.value}
							</p>
							<p className="text-[12px] text-white font-normal">
								{item.percentage}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CardBlue;
