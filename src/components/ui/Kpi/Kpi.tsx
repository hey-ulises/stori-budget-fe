import Container from "../Container/Container";
import type { SquareCorner, ContainerVariant } from "../Container/ContainerTypes";
import styles from "./Kpi.module.scss";

interface KpiProps {
    squareCorner?: SquareCorner;
    variant?: ContainerVariant;
    title: string;
    metric: number;
    detail?: string;
    valueType?: "money" | "number";
}

function Kpi({
    squareCorner = "none",
    variant = "white",
    title,
    metric,
    detail,
    valueType = "number"
}: KpiProps) {
    let formattedMetric: number | string = metric;

    if (valueType === "money") {
        formattedMetric = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
            }).format(metric);
    }
    
    return (
        <Container squareCorner={squareCorner} variant={variant} className={`${styles["kpi"]} ${styles[variant]}`}>
            <p>{title}</p>
            <h1>{formattedMetric}</h1>
            <p>{detail}</p>
        </Container>
    )
};

export default Kpi;