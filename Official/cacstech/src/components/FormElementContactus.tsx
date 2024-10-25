export default function FormElementContactUs() {
    return (
      <form className="flex gap-[8px] flex-col">
        <label htmlFor="name" className="mt-8 text-white font-bold text-2xl">
        Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your name"
          className="input-primary"
        />
  
        <label htmlFor="email" className="mt-8 text-white font-bold text-2xl">
          Email Address
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your email"
          className="input-primary"
        />
  
        <label
          htmlFor="message"
          className="text-white font-bold text-2xl mt-8"
        >
          Message
        </label>
        <br />
        <textarea
          className="input-primary"
          placeholder="Your Message"
          rows={10}
        />
  
        <button
          type="submit"
          className="bg-orangebutton text-white p-2 w-[40rem] rounded-[4px] hover:bg-orange-400 mt-8"
        >
          Send Message
        </button>
      </form>
    )
} 