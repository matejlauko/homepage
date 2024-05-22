import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="min-h-dvh pt-20">
      <div className="container max-w-2xl pb-10">
        <div>
          <h1 className="font-medium mb-1">Matej Lauko</h1>
          <h2 className="-skew-x-6">product engineer</h2>
        </div>

        <div className="pt-12" />

        <div className="flex items-center space-x-4">
          <EnvelopeClosedIcon width="20px" height="20px" />
          <span>matej@lauko.io</span>
        </div>
      </div>
    </main>
  );
}
