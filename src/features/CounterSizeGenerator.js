import React, { useState } from "react";

export default function CounterSizeGenerator(props) {
    const { updateSize, resetSum } = props;
    const [size, setSize] = useState(0);
    const onSizeChange = (event) => {
        console.log("size change");
        const inputValue = event.target.value;
        const sizeValue = inputValue.length === 0 ? 0 : parseInt(inputValue);
        setSize(sizeValue);
        updateSize(sizeValue);
        resetSum();
    };
    return (
        <div>
            Size:
            <input
                type="number"
                name="size"
                min={0}
                value={size}
                onChange={onSizeChange}
            />
        </div>
    );
}
