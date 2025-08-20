import Container from "../Container/Container";
import styles from "./Transaction.module.scss";

interface TransactionProps {
    reference: string;
    date: Date;
    amount: number;
    type: "income" | "expense";
    categoryName: string;
}

function Transaction({
    reference,
    date,
    amount,
    type,
    categoryName
}: TransactionProps) {
    const dateFormatted = `${date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    })}, ${date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    })}`;

    const amountFormatted = `${type === "income" ? "+" : "-"} ${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
            }).format(amount)}`;

    return (
        <Container className={styles["transaction"]}>
            <div>
                <h4>{reference}</h4>
                <p className={styles["subtitle"]}>{dateFormatted}</p>
            </div>
            <div className={styles["right-align"]}>
                <b className={styles[type]}>
                    {amountFormatted}
                </b>
                <p className={styles["subtitle"]}>{categoryName}</p>
            </div>
        </Container>
    )
};

export default Transaction;