import PromoHeading from "./PromoHeading";

export default function Promo(){
    const data = {
        heading: "99% off all items!",
        callToAction: "Everything must go!"
    }
    return(
        <div>
            <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}/>
        </div>
    )
}
