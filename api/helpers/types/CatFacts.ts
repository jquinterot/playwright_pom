export type CatFacts = {
  current_page: string;
  data: [
    {
      fact: string;
      length: string;
    },
  ];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
};
