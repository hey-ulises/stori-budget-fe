import Container from "../Container/Container";
import styles from "./Category.module.scss";

interface CategoryProps {
    title: string;
    transactions?: number;
    amount: number;
    budget?: number;
};

function Category({
    title,
    transactions = 0,
    amount,
    budget = 0
}: CategoryProps) {
    const amountFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(amount);

    return (
        <Container className={styles["category"]}>
            <div className={styles["column"]}>
                <h4>{title}</h4>
                <p className={styles["small-text"]}>{transactions} transactions this month</p>
            </div>
            <div className={styles["column"]}>
                <h4>{amountFormatted}</h4>
                {budget > 0 && (
                    <p>{budget}% of budget</p>
                )}
            </div>
        </Container>
    )
};

export default Category;