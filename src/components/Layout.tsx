import type { ChildrenProps } from '@/utils/interface';
// sections
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';


interface LayoutProps extends ChildrenProps {
    className?: string;
}

export default function Layout({
    children,
}: LayoutProps) {
    return (
        <main className="overflow-hidden">
            <Navbar />
            
            {children}
            
            <Footer />
        </main>
    )
}