import { Subscription } from 'types/user';

type SubscriptionText = 'Subscribed' | 'Not Subscribed' | 'Other';

export const getSubscriptionText = (subscription: Subscription): SubscriptionText => {
	if (subscription === 'subscribed') return 'Subscribed';
	if (subscription === 'notSubscribed') return 'Not Subscribed';
	else return 'Other';
};
