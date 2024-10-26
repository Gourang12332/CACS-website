

export default function ContactDetails() {
    return (
        <div>
            <p className="text-3xl font-bold text-white mb-5">Our Contact Details</p>
            <ContactCard 
                title="123 Main Street, City" 
                imageurl="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" 
            />
            <ContactCard 
                title="123-456-780" 
                imageurl="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" 
            />
            <ContactCard 
                title="info@cacs.org" 
                imageurl="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" 
            />
        </div>
    );
}

function ContactCard({ title, imageurl }: { title: string; imageurl: string }) {
    return (
        <div>
            <div className="flex justify-between p-3 items-center w-[40rem] bg-[#2B2B2E] mb-3">
                <img src={imageurl} alt="icon" className="w-5 h-5 rounded-full" />
                <p className="text-white">{title}</p>
                <button className="p-3 text-white bg-gray-900">Contact</button>
            </div>
        </div>
    );
}
