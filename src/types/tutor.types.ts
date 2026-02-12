export type TutorProfile = {
  tutor_id?: string | undefined;
  user_id?: string | undefined;
  tutor_category?: string | undefined;
  subjects?: string[] | string | undefined;
  isFeatured?: boolean | undefined;
  price?: number | undefined;
  about?: string | undefined;
  education?: string[] | string | undefined;
  isVerified?: boolean | undefined;
  language?: string[] | string | undefined;
};
