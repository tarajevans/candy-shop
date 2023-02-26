import Layout from "@/components/Layout"
import RecomendedProducts from "@/components/RecomendedProducts"
import ShortDesc from "@/components/item/ShortDesc"
import ProductGallery from "@/components/item/ProductGallery"
import AddToCart from "@/components/item/AddToCart"

const item = () => {
  return (
    <Layout criteria={false}>
        <div className="px-4 w-100 mx-auto xl:w-4/6 xl:-mt-14">
            <div className="grid gap-4 grid-cols-1 md:grid-cols2 xl:grid-cols-12 mb-18">
                <ShortDesc />
                <ProductGallery />
                <AddToCart />
            </div>
            <div className="border-2 mt-7 rounded-2xl border-slate-400 p-5 mb-24 mr-0 bg-white">
                <div className="font-fredoka text-xl text-custom-purple mb-4">Description</div>
                <div className="text-custom-purple-lite font-thin">
                    <p className="mb-4">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                    </p>
                    <p className="mb-4">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <RecomendedProducts />
            </div>
        </div>
    </Layout>
  )
}

export default item