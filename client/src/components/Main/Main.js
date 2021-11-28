import { useState } from "react";
import {
    MainDiv,
    ProductSection,
    Title,
    TitleAndLayoutSelector,
    SwitchInput,
    SwitchInputDiv,
    SwitchLabel,
} from "./Styles";
import { labelVariants } from "./mainVariants";
import ProductsDiv from "./ProductListOrGrid/ProductListOrGrid";

const Main = () => {
    const [layout, setLayout] = useState("column");
    return (
        <MainDiv>
            <ProductSection>
                <TitleAndLayoutSelector>
                    <Title>Products</Title>
                    <SwitchInputDiv>
                        <SwitchLabel
                            for="column"
                            animate={layout === "column" ? "active" : "static"}
                            variants={labelVariants}
                            whileHover={layout === "column" ? "" : "hover"}
                        >
                            Column
                        </SwitchLabel>
                        <SwitchInput
                            type="radio"
                            value="column"
                            name="layout-selector"
                            defaultChecked
                            id="column"
                            onChange={() => setLayout("column")}
                        />
                        <SwitchLabel
                            right
                            for="grid"
                            animate={layout === "grid" ? "active" : "static"}
                            variants={labelVariants}
                            whileHover={layout === "grid" ? "" : "hover"}
                        >
                            Grid
                        </SwitchLabel>
                        <SwitchInput
                            type="radio"
                            value="grid"
                            id="grid"
                            name="layout-selector"
                            onChange={() => setLayout("grid")}
                        />
                    </SwitchInputDiv>
                </TitleAndLayoutSelector>
                <ProductsDiv grid={layout === "grid" ? true : false} />
            </ProductSection>
        </MainDiv>
    );
};
export default Main;
