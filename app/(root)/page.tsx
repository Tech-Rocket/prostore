const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
  await delay(2000);
  return <h1>Prostore</h1>;
}
