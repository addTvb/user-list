type EmploymentText = 'Employed' | 'Unemployed';

export const getEmploymentText = (employment: boolean): EmploymentText => {
	if (employment) return 'Employed';
	else return 'Unemployed';
};
