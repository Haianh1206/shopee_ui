import Footer from "@/components/Footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <div className="hidden sm:block">
                <Footer />
            </div>
        </div>
    );
}