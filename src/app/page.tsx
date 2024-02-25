import LoginForm from "@/infrastructure/ui/components/molecules/LoginForm";
import Navbar from "@/infrastructure/ui/components/organisms/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-global">
      <Navbar />
      <div className="flex flex-col items-center justify-between p-24">
        <div className="w-full max-w-md mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
