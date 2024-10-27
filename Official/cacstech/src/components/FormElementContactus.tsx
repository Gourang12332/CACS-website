export default function FormElementContactUs() {
  return (
    <form className="flex flex-col gap-2 px-4 md:px-8 lg:px-16 ">
      <label htmlFor="name" className="mt-4 text-white font-bold text-xl md:text-2xl">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your name"
        className="input-primary p-4 px-40 rounded-md text-gray-900 w-full max-w-xl"
      />

      <label htmlFor="email" className="mt-4 text-white font-bold text-xl md:text-2xl">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your email"
        className="input-primary p-2 rounded-md text-gray-900 w-full max-w-xl"
      />

      <label htmlFor="message" className="mt-4 text-white font-bold text-xl md:text-2xl">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        rows={6}
        className="input-primary p-2 rounded-md text-gray-900 w-full max-w-xl"
      />

      <button
        type="submit"
        className="bg-orangebutton text-white p-3 rounded-md mt-6 w-full max-w-lg hover:bg-orange-400"
      >
        Send Message
      </button>
    </form>
  );
}
