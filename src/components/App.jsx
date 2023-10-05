import React from 'react';
import { Profile } from 'components/Profile/Profile';
import user from 'dataFiles/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'dataFiles/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'dataFiles/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'dataFiles/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
