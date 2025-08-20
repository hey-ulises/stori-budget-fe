import Container from "../../ui/Container/Container";
import Kpi from "../../ui/Kpi/Kpi";
import { useKpis } from "../../../hooks/useKpis";
import styles from "./FinancialOverview.module.scss";

function FinancialOverview() {
    const { data, isLoading } = useKpis();

    const today = new Date("2024-10-29");
    const dateFormatted = today.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    if (isLoading) return <></>;
    if (data) return (
        <Container className={styles["financial-overview"]} variant="green">
            <div className={styles["title"]}>
                <h2>Financial Overview</h2>
                <p>{dateFormatted}</p>
            </div>
            <div className={styles["kpi-container"]}>
                <Kpi
                    title="Current Balance"
                    metric={data.currentBalance}
                    valueType="money"
                    variant="white"
                    squareCorner="top-left"
                />
                <Kpi
                    title="Monthly Income"
                    metric={data.monthlyIncome}
                    valueType="money"
                    variant="white"
                />
                <Kpi
                    title="Monthly Expenses"
                    metric={data.monthlyExpenses * -1}
                    variant="white"
                    valueType="money"
                />
            </div>
            <div className={styles["mobile-kpi"]}>
                <Kpi
                    title="Current Balance"
                    metric={data.currentBalance}
                    valueType="money"
                    variant="green"
                />
                <div className={styles["bottom-row"]}>
                    <Kpi
                        title="Monthly Income"
                        metric={data.monthlyIncome}
                        valueType="money"
                        variant="mini"
                    />
                    <Kpi
                        title="Monthly Expenses"
                        metric={data.monthlyExpenses * -1}
                        variant="mini"
                        valueType="money"
                    />  
                </div>
            </div>
        </Container>
    )
};

export default FinancialOverview;