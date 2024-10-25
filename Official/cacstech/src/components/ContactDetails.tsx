
export default function ContactDetails() {
    return (
        <div>

            <p className="text-3xl font-bold text-white mb-5">Our Contact Details</p> 
            <ContactCard title="123 Main Street, City" imageurl="https://www.google.com/imgres?q=icon%20image&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2815%2F2815428.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fperson_2815428&docid=SE8KMbpZeMWB4M&tbnid=prU1OsesbXY4VM&vet=12ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA"> </ContactCard>
            <ContactCard title="123-456-780" imageurl="https://www.google.com/imgres?q=icon%20image&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2815%2F2815428.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fperson_2815428&docid=SE8KMbpZeMWB4M&tbnid=prU1OsesbXY4VM&vet=12ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA"></ContactCard>
            <ContactCard title="info@cacs.org" imageurl="https://www.google.com/imgres?q=icon%20image&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2815%2F2815428.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fperson_2815428&docid=SE8KMbpZeMWB4M&tbnid=prU1OsesbXY4VM&vet=12ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjG0LqG9veIAxVVTmwGHbyEAbgQM3oECHUQAA"></ContactCard>
        </div>

    )
}


function ContactCard({title, imageurl}: {title: string, imageurl: string}) {
    return (
        <div>        
            <div className="flex justify-between p-3 items-center w-[40rem] bg-[#2B2B2E]">
            <p className="text-3xl"></p>
            <img src={imageurl} alt="icon" className="w-5 h-5 rounded-[100%]"></img>
            <p className="text-white">{title}</p>
            <button className="p-3 text-white bg-gray-900">Contact</button>
        </div>
</div>

    )
}