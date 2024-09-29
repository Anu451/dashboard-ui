import {
	conversationDark,
	conversationLight,
	customerDark,
	customerLight,
	dashboardDark,
	dashboardLight,
	inventoryDark,
	inventoryLight,
	logo,
	orderDark,
	orderLight,
	settingDark,
	settingLight,
} from '../ImageVariables';

const navBarData = [
	{
		id: 1,
		name: 'Dashboard',
		path: '/',
		logoActive: dashboardDark,
		logoDefault: dashboardLight,
	},
	{
		id: 2,
		name: 'Orders',
		path: '/orders',
		logoActive: orderDark,
		logoDefault: orderLight,
	},
	// {
	// 	id: 3,
	// 	name: 'Customers',
	// 	path: '/customers',
	// 	logoActive: customerDark,
	// 	logoDefault: customerLight,
	// },
	// {
	// 	id: 4,
	// 	name: 'Inventory',
	// 	path: '/inventory',
	// 	logoActive: inventoryDark,
	// 	logoDefault: inventoryLight,
	// },
	// {
	// 	id: 4,
	// 	name: 'Conversations',
	// 	path: '/conversations',
	// 	logoActive: conversationDark,
	// 	logoDefault: conversationLight,
	// },
	// {
	// 	id: 5,
	// 	name: 'Settings',
	// 	path: '/settings',
	// 	logoActive: settingDark,
	// 	logoDefault: settingLight,
	// },
];

export default navBarData;
