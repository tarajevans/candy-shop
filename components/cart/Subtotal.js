const Subtotal = () => {
  return (
    <div className="border-2 rounded-2xl border-slate-400 bg-white p-5">
        <div className="flex justify-between mb-4">
            <div className="font-poppins text-sm text-custom-purple">
                Subtotal:
            </div>
            <div className="font-poppins text-sm text-custom-red-2">
                $32.68
            </div>
        </div>
        <div className="flex justify-between mb-4">
            <div className="font-poppins text-sm text-custom-purple">
                Shipping cost:
            </div>
            <div className="font-poppins text-sm text-custom-red-2">
                $5.00
            </div>
        </div>
        <div className="flex justify-between mb-4">
            <div className="font-poppins text-sm text-custom-purple">
                Estimated Total:
            </div>
            <div className="font-poppins text-lg text-custom-red-2">
                $37.68
            </div>
        </div>
        <div className="flex justify-between">
            <button type='button' className="bg-custom-pink font-poppinsbold w-full rounded-full p5 text-white text-center">
                Checkout
            </button>
        </div>
    </div>
  )
}

export default Subtotal