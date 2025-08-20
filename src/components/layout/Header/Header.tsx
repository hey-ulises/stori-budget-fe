import { Routes, Route} from "react-router-dom";
import CustomLogo from "../../../assets/CustomLogo";
import styles from "./Header.module.scss";
import DashboardPage from "../../../pages/Dashboard/DashboardPage";

function Header() {
  return (
    <div>
        <nav className={styles["header"]}>
            <div>
                <CustomLogo width={120} />
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<DashboardPage />} />
        </Routes>
    </div>
  )
};

export default Header;