import { Category } from "./tutor-category.type";
import { User } from "./user.types";

export type TutorProfile = {
  tutor_id: string;
  user_id: string;
  tutor_category: string;
  subjects: string[];
  isFeatured: boolean;
  price: number;
  ratings: number;
  tutor_review: string;
  tutor: User;
  category: Category;
};
