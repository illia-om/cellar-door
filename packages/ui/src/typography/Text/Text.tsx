import { PropsWithChildren } from "react";

export type TTextProps = PropsWithChildren;

export function Text(props: TTextProps) {
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    )
}