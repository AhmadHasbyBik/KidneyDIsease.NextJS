import type { ChildrenProps } from '@/utils/interface';
export interface TextProps<T> extends ChildrenProps {
    className?: T;
    size?: 'small' | 'medium' | 'large';
}

export default function Paragraph<T extends string>({
    children,
    className,
    size = 'large',
}: TextProps<T>) {
    const component = {
        small: (
            <p className={`text-sm ${className}`}>
                {children}
            </p>
        ),
        medium: (
            <p className={`text-md ${className}`}>
                {children}
            </p>
        ),
        large: (
            <p className={`text-lg ${className}`}>
                {children}
            </p>
        ),
    };

    return component[size];
}
