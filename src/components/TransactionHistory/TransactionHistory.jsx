import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionTBody from '../TransactionTBody/TransactionTBody';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transactionTHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionTBody items={items} />
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
