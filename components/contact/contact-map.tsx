export function ContactMap() {
  return (
    <section className="h-96 bg-muted">
      <div className="w-full h-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.33974322998677!2d3.1630232588349068!3d6.681821161975895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9f43add55c67%3A0x2fc6ad4ebb6fe0d5!2sFeto%20Travels%20Limited!5e0!3m2!1sen!2sng!4v1760775788451!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Feto Travels Office Location"
        />
      </div>
    </section>
  )
}
