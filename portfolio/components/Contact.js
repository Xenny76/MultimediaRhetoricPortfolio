// components/Contact.js
export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-full bg-gray-900 text-gray-200 flex items-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg mb-2">Darrian Redford</p>
        <p className="text-lg">
          <a
            href="mailto:darrian.redford04@gmail.com"
            className="text-green-400 hover:underline"
          >
            darrian.redford04@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}