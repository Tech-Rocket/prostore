import { cn } from "@/lib/utils";
import React from "react";

export default function ProductPrice(props: {
  value: number;
  className?: string;
}) {
  // ensure two decimal places
  const stringValue = props.value.toFixed(2);
  // get the int/float
  const [intValue, floatValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", props.className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
