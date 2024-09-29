import React from 'react';
import Card from '../Components/Card';
import SalesChart from '../Components/SummeryChart';
import {
	customerLight,
	downArrow,
	graphLogo,
	greyDown,
	inventoryLight,
	orderLight,
} from '../Assets/ImageVariables';
import CardLarge from '../Components/CardLarge';
import DonutChart from '../Components/DonutChart';
import Pending from '../Components/Pending';
import Completed from '../Components/Completed';
import CardBlue from '../Components/CardBlue';

function Dashbaord() {
	const CardDetails1 = {
		cardBg: 'card-fixed-white',
		logoBg: 'bg-blue',
		img: graphLogo,
	};
	const CardContent1 = [
		{
			id: 1,
			title: 'Sales',
			value: '₦4,000,000.00',
			percentage: '',
		},
		{
			id: 2,
			title: 'Volume',
			value: '450',
			percentage: '20%',
		},
	];

	const CardDetails2 = {
		cardBg: 'card-fixed-white',
		logoBg: 'bg-yellow',
		img: customerLight,
	};
	const CardContent2 = [
		{
			id: 1,
			title: 'Customers',
			value: '1,250',
			percentage: '+15.80%',
		},
		{
			id: 2,
			title: 'Active',
			value: '1,180',
			percentage: '85%',
		},
	];
	const CardDetails3 = {
		cardBg: 'card-large-white',
		logoBg: 'bg-yellow',
		img: orderLight,
	};
	const CardContent3 = [
		{
			id: 1,
			title: 'All Orders',
			value: '450',
			percentage: '',
		},
		{
			id: 2,
			title: 'Pending',
			value: '5',
			percentage: '85%',
		},
		{
			id: 3,
			title: 'Completed',
			value: '445',
			percentage: '',
		},
	];
	const CardDetails4 = {
		cardBg: 'card-fixed-blue',
		logoBg: 'bg-blue',
		img: inventoryLight,
	};
	const CardContent4 = [
		{
			id: 1,
			title: 'All Products',
			value: '45',
			percentage: '',
		},
		{
			id: 2,
			title: 'Active',
			value: '32',
			percentage: '+24%',
		},
	];

	const CardDetails5 = {
		cardBg: 'card-fixed-white',
		logoBg: 'bg-yellow',
		img: graphLogo,
	};
	const CardContent5 = [
		{
			id: 1,
			title: 'Abandoned Cart',
			value: '20%',
			percentage: '+0.00%',
		},
		{
			id: 2,
			title: 'Customers',
			value: '30',
			percentage: '',
		},
	];

	return (
		<div className=" m-5">
			<div className=" flex gap-5">
				<Card CardContent={CardContent1} CardDetails={CardDetails1} />
				<Card CardContent={CardContent2} CardDetails={CardDetails2} />
				<CardLarge CardContent={CardContent3} CardDetails={CardDetails3} />
			</div>

			<div className=" mt-5 flex gap-5">
				<div className=" flex flex-col gap-5">
					<div className=" flex gap-5  ">
						<div className=" bg-white rounded-lg p-[20px] w-[320px] ">
							<div className=" flex justify-between items-center ">
								<p className=" text-medium ">Marketting</p>
								<div className="flex justify-center items-center">
									<p className="text-grey-10 pr-1">This Week</p>
									<img src={greyDown} alt="Dropdown" />
								</div>
							</div>
							<div className=" flex justify-center items-center">
								<DonutChart />
							</div>
						</div>
						<div className="gap-5 flex flex-col ">
							<CardBlue CardContent={CardContent4} CardDetails={CardDetails4} />
							<Card CardContent={CardContent5} CardDetails={CardDetails5} />
						</div>
					</div>
					<div className=" bg-white p-5 rounded-lg">
						<div className=" flex justify-between items-center mb-5">
							<div className=" flex justify-center items-center gap-5">
								<p className=" text-medium "> Summary</p>
								<button className=" flex justify-center items-center bg-primart-blue-20 px-2 py-1 rounded-lg">
									<p className=" text-primary-blue-100 text-[14px]">Sales</p>
									<img src={downArrow} alt="" />
								</button>
							</div>
							<div className=" flex justify-center items-center">
								<p className=" text-[14px] text-black-60">Last 7 Days</p>
								<img src={downArrow} alt="" />
							</div>
						</div>
						<SalesChart />
					</div>
				</div>

				<div className=" bg-white  w-[425px] p-[20px] rounded-lg">
					<p className="text-medium">Recent Orders</p>
					<div>
						<Pending />
						<div className=" border-t-[1px] border-gray-100 m-4"></div>
						<Completed />
						<div className=" border-t-[1px] border-gray-100 m-4"></div>
						<Completed />
						<div className=" border-t-[1px] border-gray-100 m-4"></div>
						<Pending />
						<div className=" border-t-[1px] border-gray-100 m-4"></div>
						<Completed />
					</div>
				</div>
			</div>
			{/* <div className="  flex gap-5  mt-5 ">
				<div className=" flex gap-5">
					<div className=" bg-white rounded-lg p-[20px] w-[320px] ">
						<div className=" flex justify-between items-center ">
							<p className=" text-medium ">Marketting</p>
							<div className="flex justify-center items-center">
								<p className="text-grey-10 pr-1">This Week</p>
								<img src={greyDown} alt="Dropdown" />
							</div>
						</div>
						<div className=" flex justify-center items-center">
							<DonutChart />
						</div>
					</div>
					<div className="gap-5 flex flex-col ">
						<Card CardContent={CardContent1} CardDetails={CardDetails1} />
						<Card CardContent={CardContent1} CardDetails={CardDetails1} />
					</div>
				</div>
				<div className=" bg-white ">
					<p className="text-medium">Recent Orders</p>
				</div>
			</div> */}
		</div>
	);
}

export default Dashbaord;
