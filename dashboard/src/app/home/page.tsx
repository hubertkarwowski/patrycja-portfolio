'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Page = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect('/');
  }
  return (
    <div>
      <h1>ure logged in</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Page;
