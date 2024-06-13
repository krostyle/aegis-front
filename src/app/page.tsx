export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-between p-24">
          <div className="w-full max-w-md mt-8">
            <h1 className="text-4xl font-bold text-foreground">
              Welcome to Fraud Management
            </h1>
            <p className="text-xl text-muted-foreground mt-4">
              Manage and prevent fraudulent activities effectively.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
