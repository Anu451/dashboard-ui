import React from 'react';
import { greyDown } from '../Assets/ImageVariables';

function CardLarge({ CardDetails, CardContent }) {
	return (
		<div className={` ${CardDetails.cardBg}`}>
			<div className="flex justify-between">
				<div className={CardDetails.logoBg}>
					<img src={CardDetails.img} alt="" />
				</div>
				<div className="flex justify-center items-center">
					<p className="text-grey-10 pr-1">This Week</p>
					<img src={greyDown} alt="Dropdown" />
				</div>
			</div>
			<div className="flex justify-between">
				{CardContent.map((item) => (
					<div
						key={item.id}
						className="flex flex-col justify-start items-start"
					>
						<p className="sub-text">{item.title}</p>
						<div className="flex justify-center items-center">
							<p className="numeric-text pr-2">{item.value}</p>
							<p className="green-text">{item.percentage}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CardLarge;
