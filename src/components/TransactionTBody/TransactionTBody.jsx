import PropTypes, { shape } from 'prop-types';
import TransactionTR from '../TransactionTr/TransactionTr';

function TransactionTBody({ items }) {
  return (
    <tbody>
      {items.map(item =>
        items.indexOf(item) % 2 === 0 ? (
          <TransactionTR
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            style={{ backgroundColor: 'aliceblue' }}
          />
        ) : (
          <TransactionTR
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ),
      )}
    </tbody>
  );
}

TransactionTBody.propTypes = {
  items: PropTypes.arrayOf(shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default TransactionTBody;
