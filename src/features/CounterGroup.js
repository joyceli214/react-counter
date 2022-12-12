import React from "react";
import Counter from "./Counter";

export default function CounterGroup(props) {
    return Array(props.size)
        .fill(0)
        .map((item, index) => {
            return <Counter key={index} />;
        });
}
