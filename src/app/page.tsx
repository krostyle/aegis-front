import LoginForm from "@/infrastructure/ui/components/molecules/LoginForm";
import Navbar from "@/infrastructure/ui/components/organisms/Navbar";
import Footer from "@/infrastructure/ui/components/organisms/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-between p-24">
          <div className="w-full max-w-md mt-8">
            <LoginForm />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
