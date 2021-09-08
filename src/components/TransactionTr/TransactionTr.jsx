import PropTypes from 'prop-types';
import s from './TransactionTr.module.css';

function TransactionTR({ type, amount, currency, style }) {
  return (
    <tr className={s.transactionTR} style={style}>
      <td className={s.transactionTD}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionTR.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionTR;
