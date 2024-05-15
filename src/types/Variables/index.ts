export interface Variables {
  main_heading: string;
  main_subtitle: string;
  about_me: string;
  my_description: string;
  linked_in: string;
  email: string;
  github: string;
  phone: string;
  whats_app: string;
  share_title: string;
  share_hashtags: string;
  resume: string;
}

export interface VariablesItem {
  key: keyof Variables;
  value: string;
}
