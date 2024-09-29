import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function FilterDate({ setFilterDateModal }) {
	const [date, setDate] = useState(new Date());
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [showCalendar, setShowCalendar] = useState(false);
	const [value, setValue] = useState(new Date());

	const handleDateRangeClick = () => {
		setShowCalendar(!showCalendar);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
			<div className="bg-white p-6 rounded-lg w-96">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">By Date</h2>
					<button
						onClick={() => {
							setFilterDateModal(false);
						}}
						className="text-black-50"
					>
						X
					</button>
				</div>
				<div className=" flex gap-10 items-center">
					<div className="">
						<div>
							<input type="checkbox" id="thisWeek" />
							<label htmlFor="thisWeek" className="ml-2 text-black-30">
								This Week
							</label>
						</div>
						<div>
							<input type="checkbox" id="lastWeek" />
							<label htmlFor="lastWeek" className="ml-2 text-black-30">
								Last Week
							</label>
						</div>
						<div>
							<input type="checkbox" id="thisMonth" />
							<label htmlFor="thisMonth" className="ml-2 text-black-30">
								This Month
							</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="lastMonth" />
							<label htmlFor="lastMonth" className="ml-2 text-black-30">
								Last Month
							</label>
						</div>
						<div>
							<input type="checkbox" id="thisYear" />
							<label htmlFor="thisYear" className="ml-2 text-black-30">
								This Year
							</label>
						</div>

						<input type="checkbox" id="lastYear" />
						<label htmlFor="lastYear" className="ml-2 text-black-30">
							Last Year
						</label>
					</div>
				</div>
				<div className=" border-t-[1px] border-gray-100 m-4"></div>

				<div>
					<div className=" my-5">
						<input
							type="checkbox"
							id="dateRange"
							checked={showCalendar}
							onChange={handleDateRangeClick}
						/>
						<label htmlFor="dateRange" className="ml-2">
							Date Range
						</label>
					</div>
					{showCalendar && (
						<div className="flex justify-between items-center">
							<div>
								<label className="block text-sm" htmlFor="from">
									From:
								</label>

								<input
									type="date"
									name=""
									id="from"
									className=" p-2 border-[1px] border-gray-200 rounded-lg "
								/>
							</div>
							<div>
								<label className="block text-sm" htmlFor="to">
									To:
								</label>
								<input
									type="date"
									name=""
									id="to"
									className=" p-2 border-[1px] border-gray-200 rounded-lg "
								/>
							</div>
						</div>
					)}
				</div>
				<div className="mt-4 ">
					<button
						type="submit"
						className=" bg-primary-blue-100 text-white px-4 py-2 rounded-lg w-full"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
}

export default FilterDate;
