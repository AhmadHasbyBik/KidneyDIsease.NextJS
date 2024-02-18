import type { ChildrenProps } from '@/utils/interface';

interface ContainerProps extends ChildrenProps {
    className?: string;
}

export default function Container({
    children,
    className = '',
}: ContainerProps) {
    return (
        <div className={`container mx-auto max-w-screen-xl pt-10 px-6 md:px-10 2xl:px-4 ${className}`}>
            {children}
        </div>
    )
}