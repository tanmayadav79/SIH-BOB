type Topic = {
  id: number;
  title: string;
  description: string;
  link?: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: "Understanding Anxiety",
    description: "Learn symptoms and coping strategies.",
    link: "https://www.mentalhealth.org.uk/a-to-z/a/anxiety",
  },
  {
    id: 2,
    title: "Depression Awareness",
    description: "Causes, signs, and treatment options.",
    link: "https://www.nimh.nih.gov/health/topics/depression",
  },
  {
    id: 3,
    title: "Mindfulness and Meditation",
    description: "Practices to improve mental wellness.",
    link: "https://www.mindful.org/meditation/mindfulness-getting-started/",
  },
];

export const PsychEducation = () => {
  return (
    <div>
      <h2 className="text-2 xl font-semibold mb-6">Psych Educational Material</h2>
      <div className="flex flex-col items-center">
        {topics.map((topic, index) => (
          <div key={topic.id} className="flex flex-col items-center w-full max-w-md">
            <div className="w-full max-w-6xl px-3 py-2 rounded-xl bg-[#567a7f] shadow-md flex justify-between items-center">
                <div className="flex flex-col max-w-[70%]">
                    <h3 className="text-sm sm:text-base font-semibold mb-2">{topic.title}</h3>
                    <p className="text-xs sm:text-sm">{topic.description}</p>
                </div>
              {topic.link && (
                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-2 inline-block px-4 py-2 text-sm font-semibold bg-blue-500 rounded-full"
                >
                  Read More
                </a>
              )}
            </div>

            {index !== topics.length - 1 && (
              <svg
                className="w-6 h-10 my-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
