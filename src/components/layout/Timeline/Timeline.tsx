import Container from "../../ui/Container/Container";
import Transaction from "../../ui/Transaction/Transaction";
import { useTransactions } from "../../../hooks/useTransactions";
import type { TransactionType } from "../../../api/transactions";
import styles from "./Timeline.module.scss";

function Timeline() {
    const { data, isLoading } = useTransactions();

    if (isLoading) return <></>;
    if (data) return (
        <Container squareCorner="bottom-left" className={styles["timeline"]}>
            <h3>Income & Expense Timeline</h3>
            <div className={styles["transactions-container"]}>
                {data.map((t: TransactionType) => (
                    <Transaction
                        key={t.id}
                        reference={t.description || ''}
                        date={new Date(t.date)}
                        amount={Math.abs(t.amount)}
                        type={t.category.type}
                        categoryName={t.category.name}
                    />
                ))}
            </div>
        </Container>
    )
};

export default Timeline;