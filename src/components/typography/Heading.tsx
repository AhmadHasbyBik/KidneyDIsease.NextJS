import type { ChildrenProps } from '@/utils/interface';
export interface TextProps<T> extends ChildrenProps {
    className?: T;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export default function Heading<T extends string>({
    children,
    className,
    variant = 'h1',
}: TextProps<T>) {

    const component = {
        h1: (
            <h1 className={`font-bold text-4xl lg:text-6xl ${className}`}>
                {children}
            </h1>
        ),
        h2: (
            <h2 className={`font-bold text-3xl lg:text-5xl ${className}`}>
                {children}
            </h2>
        ),
        h3: (
            <h3 className={`font-bold text-2xl lg:text-3xl ${className}`}>
                {children}
            </h3>
        ),
        h4: (
            <h4 className={`font-bold text-xl lg:text-2xl ${className}`}>
                {children}
            </h4>
        ),
        h5: (
            <h5 className={`font-bold text-lg lg:text-xl ${className}`}>
                {children}
            </h5>
        ),
    };

    return component[variant];
}
