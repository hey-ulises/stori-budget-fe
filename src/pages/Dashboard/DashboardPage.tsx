import FinancialOverview from "../../components/layout/FinancialOverview/FinancialOverview";
import Timeline from "../../components/layout/Timeline/Timeline";
import SpendingByCategory from "../../components/layout/SpendingByCategory/SpendingByCategory";
import Advicer from "../../components/layout/Advicer/Advicer";
import styles from "./DashboardPage.module.scss";

function DashboardPage() {
  return (
    <div className={styles["dashboard"]}>
        <div className={styles["column"]}>
            <FinancialOverview />
            <Timeline />
        </div>
        <div className={styles["column"]}>
            <SpendingByCategory />
            <Advicer />
        </div>
    </div>
  )
};

export default DashboardPage;