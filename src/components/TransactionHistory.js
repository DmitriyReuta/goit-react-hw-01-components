import styles from 'components/TransitionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return <table className={styles['transaction-history']}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
                {items.map((transaction) =>
                    <tr key={transaction.id} className={styles[transaction.id]}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>)}
        </tbody>
    </table>
};