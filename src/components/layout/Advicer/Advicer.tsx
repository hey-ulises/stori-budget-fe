import Container from "../../ui/Container/Container";
import { useAdvice } from "../../../hooks/useAdvice";
import styles from "./Advicer.module.scss";

function Advicer() {
  const { data, isLoading } = useAdvice();

  if (isLoading) return <></>;
  if (data) return (
    <Container className={styles["advicer"]} squareCorner="top-right">
        <h3>Financial Advice</h3>
        <Container variant="green" squareCorner="top-left" className={styles["insight"]}>
            <h4>Smart Insight</h4>
            <p>{data.advice}</p>
        </Container>
    </Container>
  )
};

export default Advicer;