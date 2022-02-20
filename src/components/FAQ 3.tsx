/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="bg-white max-w-7xl mb-10 mx-auto rounded-xl shadow-xl">
      <div className="divide-gray-200 divide-y-2 max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-semibold text-3xl text-gray-900 tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:gap-x-8 md:gap-y-12 md:grid md:grid-cols-2 md:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-medium leading-6 text-gray-900 text-lg">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}