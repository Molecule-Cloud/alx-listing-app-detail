import Header from "./Header";
import Footer from "./Footer";  

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen w-full">
            <Header />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
