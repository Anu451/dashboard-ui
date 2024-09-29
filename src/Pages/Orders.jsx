import React, { useState } from 'react';
import {
	calander,
	copy,
	downArrow,
	filterIcon,
	orderLight,
	plusIcon,
	search,
	share,
} from '../Assets/ImageVariables';
import Card from '../Components/Card';
import CardLarge from '../Components/CardLarge';
import FilterModal from '../Components/FilterModal';
import FilterDate from '../Components/FilterDate';

function Orders() {
	const [filterModal, setFilterModal] = useState(false);
	const [filterDateModal, setFilterDateModal] = useState(false);

	const CardDetails1 = {
		cardBg: 'card-large-white',
		logoBg: 'bg-yellow',
		img: orderLight,
	};
	const CardContent1 = [
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
			percentage: '',
		},
		{
			id: 3,
			title: 'Completed',
			value: '320',
			percentage: '',
		},
	];

	const CardDetails2 = {
		cardBg: 'card-large-white',
		logoBg: 'bg-yellow',
		img: orderLight,
	};
	const CardContent2 = [
		{
			id: 1,
			title: 'Canceled',
			value: '30',
			percentage: '-20%',
		},
		{
			id: 2,
			title: 'Returned',
			value: '20',
			percentage: '',
		},
		{
			id: 3,
			title: 'Damaged',
			value: '5',
			percentage: '',
		},
	];

	const CardDetails3 = {
		cardBg: 'card-fixed-white',
		logoBg: 'bg-yellow',
		img: orderLight,
	};
	const CardContent3 = [
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

	const orderData = [
		{
			customerName: 'Janet Adebayo',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Completed',
			status: 'completed',
		},
		{
			customerName: 'Samuel Johnson',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'In-Progress',
			status: 'in-progress',
		},
		{
			customerName: 'Francis Doe',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Pick Up',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Pending',
			status: 'pending',
		},
		{
			customerName: 'Janet Adebayo',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Completed',
			status: 'completed',
		},
		{
			customerName: 'Samuel Johnson',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'In-Progress',
			status: 'in-progress',
		},
		{
			customerName: 'Francis Doe',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Pick Up',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Pending',
			status: 'pending',
		},
		{
			customerName: 'Janet Adebayo',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Completed',
			status: 'completed',
		},
		{
			customerName: 'Samuel Johnson',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Home Delivery',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'In-Progress',
			status: 'in-progress',
		},
		{
			customerName: 'Francis Doe',
			orderDate: '12 Aug 2022 - 12:25 am',
			orderType: 'Pick Up',
			trackingID: '9348fj73',
			orderTotal: '₦25,000.00',
			action: 'Pending',
			status: 'pending',
		},
	];

	function getStatusClass(status) {
		switch (status) {
			case 'completed':
				return 'bg-[#32936F29] text-green rounded-lg px-2 py-1';
			case 'in-progress':
				return 'bg-blue-100 text-blue-600 rounded-lg px-2 py-1';
			case 'pending':
				return 'bg-yellow-100 text-yellow-600 rounded-lg px-2 py-1';
			default:
				return '';
		}
	}

	return (
		<div className=" m-4">
			{filterModal ? (
				<div className="fixed right-10 bottom-10">
					<FilterModal setFilterModal={setFilterModal} />
				</div>
			) : null}
			{filterDateModal ? (
				<div className="fixed right-10 bottom-10">
					<FilterDate setFilterDateModal={setFilterDateModal} />
				</div>
			) : null}
			<div className=" flex justify-between items-center ">
				<p className=" text-medium ">Orders Summary</p>
				<button className=" bg-primary-blue-100 px-3 py-1 rounded-lg  flex justify-center items-center">
					<img src={plusIcon} alt="" />
					<p className=" text-white text-[14px]">Create a New Order</p>
				</button>
			</div>
			<div className=" flex justify-start items-center gap-5 mt-4">
				<CardLarge CardContent={CardContent1} CardDetails={CardDetails1} />
				<CardLarge CardContent={CardContent2} CardDetails={CardDetails2} />
				<Card CardContent={CardContent3} CardDetails={CardDetails3} />
			</div>
			<div className=" bg-white mt-5 p-4 rounded-lg">
				<div className=" flex justify-between items-center">
					<p className=" text-medium ">Customer Orders</p>
					<div className=" flex justify-center items-center gap-3">
						<div className=" flex gap-2 justify-center items-center ">
							<img src={search} alt="" />
							<input
								type="search"
								name=""
								id=""
								placeholder=" Search"
								className=" p-2 border-[1px] border-gray-200 rounded-lg "
							/>
						</div>
						<button
							className=" px-2 py-1 flex justify-center items-center gap-2 border-[1px] border-gray-500 rounded-lg"
							onClick={() => {
								setFilterModal(true);
							}}
						>
							<img src={filterIcon} alt="" />
							<p className=" text-black-50">Filter</p>
						</button>
						<button
							className=" px-2 py-1 flex justify-center items-center gap-2 border-[1px] border-gray-500 rounded-lg"
							onClick={() => {
								setFilterDateModal(true);
							}}
						>
							<img src={calander} alt="" />
							<p className=" text-black-50">Filter</p>
						</button>
						<button className=" px-2 py-1 flex justify-center items-center gap-2 border-[1px] border-gray-500 rounded-lg">
							<img src={share} alt="" />
							<p className=" text-black-50">Share</p>
						</button>
						<button className=" px-2 py-1 flex justify-center items-center gap-2 border-[1px] border-gray-500 rounded-lg">
							<p className=" text-black-50">Bulk Action</p>
							<img src={downArrow} alt="" />
						</button>
					</div>
				</div>
				<table className="min-w-full bg-white mt-5">
					<thead>
						<tr>
							<th className="table-head">Customer Name</th>
							<th className="table-head">Order Date</th>
							<th className="table-head">Order Type</th>
							<th className="table-head">Tracking ID</th>
							<th className="table-head">Order Total</th>
							<th className="table-head">Action</th>
							<th className="table-head">Status</th>
						</tr>
					</thead>
					<tbody>
						{orderData.map((order, index) => (
							<tr key={index} className="even:bg-gray-100 ">
								<td className=" table-body ">{order.customerName}</td>
								<td className="table-body">{order.orderDate}</td>
								<td className="table-body">{order.orderType}</td>
								<td className="table-body flex gap-2 justify-center items-center">
									<p>{order.trackingID}</p>
									<img src={copy} alt="" />
								</td>
								<td className="table-body">{order.orderTotal}</td>
								<td className="table-body">{order.action}</td>
								<td
									className={`py-2 px-4 border-b ${getStatusClass(
										order.status
									)}`}
								>
									{order.status}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className=" flex justify-between items-center my-5">
					<div className=" flex justify-center items-center gap-3 ">
						<div className=" bg-gray-100 px-3 py-1 flex justify-center items-center rounded-lg gap-2">
							<p className=" text-black-60 text-[10px]">10</p>
							<img src={downArrow} alt="" />
						</div>
						<p className=" text-[10px] text-black-20">Items per page</p>
						<p className="text-[10px] text-black-50">1-10 of 200 items</p>
					</div>
					<div className=" flex justify-center items-center gap-3">
						<div className=" bg-gray-100 px-3 py-1 flex justify-center items-center rounded-lg gap-2">
							<p className=" text-black-60 text-[10px]">1</p>
							<img src={downArrow} alt="" />
						</div>
						<p className=" text-black-50 text-[10px]">of 44 pages</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Orders;
