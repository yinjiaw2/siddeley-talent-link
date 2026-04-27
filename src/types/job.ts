export type JobAccent = {
  softBg: string;
  softText: string;
  softBorder: string;
  chipBg: string;
  chipText: string;
};

export type JobContent = {
  id: string;
  slug: string;
  title: string;
  anzsco: string;
  summary: string;
  cardDescription: string;
  location: string;
  category: string;
  workType: string;
  salary: string;
  publishedAt: string;
  intro: string[];
  benefits: string[];
  responsibilities: string[];
  duties: string[];
  requirements: string[];
  skillsets: string[];
  note: string;
  noteUrl: string;
  accent: JobAccent;
};
