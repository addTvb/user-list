export interface User {
	id: string;
	name: string;
	age: number;
	subscription: Subscription;
	employment: boolean;
}

export type Subscription = 'notSubscribed' | 'subscribed' | 'other';
