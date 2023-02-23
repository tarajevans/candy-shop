import Layout from "@/components/Layout"
import BestSellers from "@/components/BestSellers"

export default function Home() {
  return (

      <Layout criteria={true}>
      <BestSellers />
      </Layout>
  )
}