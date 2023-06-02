import { authOptions } from '@app/server/api/auth';
import NextAuth from 'next-auth';

export default NextAuth(authOptions);
