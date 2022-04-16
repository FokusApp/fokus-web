import { CSSInterpolation} from '@emotion/serialize';
import { CSSProperties, FC, ReactNode } from 'react';

export type COmponentChild =
    | ReactNode
    | ReactNode[]
    | null
    | undefined;

export interface ComponentProps {
    children?: COmponentChild;
    className?: string;
    css?: CSSInterpolation;
    style?: CSSProperties;
}

export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
