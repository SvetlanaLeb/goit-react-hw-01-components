import Profile from '../Profile/Profile';
import user from '../../data/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
