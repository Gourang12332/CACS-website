import ContactDetails from "@/components/ContactDetails";
import FormElementContactUs from "@/components/FormElementContactus";
import HeroContactUs from "@/components/heroContactUsElement";
import Navbar from "@/components/Navbar";


export default function ContactUs() {
    return (
        <>
        <Navbar></Navbar>
    <div className="flex flex-col items-center gap-32" style={{border : "1px solid white"}}>
        <HeroContactUs/>
        <FormElementContactUs/>
        <br />
        <br />
    </div>
    </>

    )

}
