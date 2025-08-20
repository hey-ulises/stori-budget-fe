import Container from "../../ui/Container/Container";
import Category from "../../ui/Category/Category";
import { useCategories } from "../../../hooks/useCategories";
import type { CategoryType } from "../../../api/categories";
import styles from "./SpendingByCategory.module.scss";

function SpendingByCategory() {
  const { data, isLoading } = useCategories();

  if (isLoading) return <></>;
  if (data) return (
    <Container squareCorner="bottom-right" className={styles["categories"]}>
      <h3>Spending by Category</h3>
      <div className={styles["categories-container"]}>
          {data.filter((c: CategoryType) => c.type !== 'income').map((c: CategoryType) => (
            <Category
              key={c.id}
              title={c.name}
              transactions={c.transactions.length}
              amount={c.transactions.reduce((acc, t) => acc + Math.abs(t.amount), 0)}
            />
          ))}
      </div>
    </Container>
  )
};

export default SpendingByCategory;