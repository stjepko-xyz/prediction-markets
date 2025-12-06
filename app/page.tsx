import { Events } from "@/components/index";

interface HomeProps {
  searchParams: Promise<{ cursor?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { cursor } = await searchParams;

  return (
    <main className="flex">
      <Events cursor={cursor ? parseInt(cursor, 10) : undefined} />
    </main>
  );
}
