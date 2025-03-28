import Link from "next/link"

export default function Home(){
  return (
    <>
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl">Hello, Shopping</h1>
        <p className="mt-3 text-lg text-gray-500">The Gate of shopping</p>
        <Link className="button mt-4" href={"/products"}>Go Shopping</Link>
      </div>
    </>
  )
}