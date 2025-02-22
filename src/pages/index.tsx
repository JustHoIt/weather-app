
export default function Home() {
  console.log("secure", process.env.ENV);
  console.log("open", process.env.NEXT_PUBLIC_ENV);
  
  return (
    <main> HOME</main>
  )
}
