import CartList from "@/components/cart/cart-list";
import Checkout from "@/components/Checkout/Checkout";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      {/* <div className="flex flex-col"> */}
       

          <Checkout />
        
       

          {/* <CartList /> */}
       
      {/* </div> */}
    </MaxWidthWrapper>
  );
}
