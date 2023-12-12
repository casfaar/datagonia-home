import type { s } from 'vitest/dist/types-198fd1d9';
import type { User } from '@auth/core/types';

interface UserWithCustomerAndRoles extends User {
	customer?: string;
	roles: string[];
}

type LoginDataType = {
	email: string;
	password: string;
};

type batchType = {
	title: string;
	uploadDate: Date;
	downloadDate?: Date;
	size: number;
	status: 'RAW' | 'PROCESSED';
	nature: 'PENDING' | 'UPLOADED' | 'DOWNLOADED' | 'FAILED';
};
