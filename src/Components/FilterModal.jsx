import React from 'react';

function FilterModal({ setFilterModal }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
			<div className="bg-white p-4 rounded-lg w-96   ">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">Filter Orders</h2>
					<button
						onClick={() => {
							setFilterModal(false);
						}}
						className="text-black-50"
					>
						X
					</button>
				</div>
				{/* Add filter details form here */}
				<div>
					{/* <p>Filter by:</p> */}
					{/* Example filter form */}
					<form>
						<div className="mb-4 mt-5 ">
							<label className="block text-sm text-black-40 mb-2">
								Order Type
							</label>
							<div className=" flex  justify-around items-center ">
								<div>
									<input type="checkbox" name="" id="home" />
									<label
										htmlFor="home"
										className=" text-[16px] text-black-30 font-inter-regular ml-2"
									>
										Home Delivery
									</label>
								</div>
								<div>
									<input type="checkbox" name="" id="pick" />
									<label
										htmlFor="pick"
										className=" text-[16px] text-black-30 font-inter-regular ml-2"
									>
										Pick up{' '}
									</label>
								</div>
							</div>
						</div>
						<div className="mb-4 mt-5">
							<label className="block text-sm text-black-40 mb-2">Status</label>
							<select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
								<option value="all">All</option>
								<option value="completed">Completed</option>
								<option value="in-progress">In Progress</option>
								<option value="pending">Pending</option>
							</select>
						</div>
						<div className="mb-4">
							<label className="block text-sm text-black-40 mb-2">
								Customer
							</label>
							<select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
								<option value="all">All</option>
								<option value="home-delivery">Home Delivery</option>
								<option value="pick-up">Pick Up</option>
							</select>
						</div>
						<div>
							<label className="block text-sm text-black-40 mb-2">Amount</label>
							<div className=" flex justify-start items-center gap-5">
								<div>
									<p className=" text-[12px] text-black-60">From</p>
									<input
										type="number"
										name=""
										id=""
										className=" p-1 border-[1px] border-gray-300 rounded-md w-32"
									/>
								</div>
								<div>
									<p className=" text-[12px] text-black-60">To</p>
									<input
										type="number"
										name=""
										id=""
										className=" p-1 border-[1px] border-gray-300 rounded-md w-32"
									/>
								</div>
							</div>
						</div>
						<div className=" mt-5">
							<button
								type="submit"
								className=" bg-primary-blue-100 text-white px-4 py-2 rounded-lg w-full"
							>
								Apply
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default FilterModal;
