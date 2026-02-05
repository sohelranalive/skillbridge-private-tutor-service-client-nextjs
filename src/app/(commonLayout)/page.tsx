import Banner from "@/components/home-layout/Banner";
import FeaturedTutors from "@/components/home-layout/FeaturedTutors";
import Footer from "@/components/home-layout/Footer";
import SearchBar from "@/components/home-layout/SearchBar";
import TeachingCategory from "@/components/home-layout/TeachingCategory";
import TestimonialPage from "@/components/home-layout/Testimonial";
import { tutorService } from "@/service/tutor.service";
import { userService } from "@/service/user.service";
import Link from "next/link";

export default async function Home() {
  const isUserSignedIn = await userService.getSession();
  const user = isUserSignedIn.data.user;

  const featuredTutors = await tutorService.getTutors(
    {
      isFeatured: true,
      search: "",
      subject: "",
      ratings: 0,
      price: 0,
      category: "",
    },
    {
      cache: "no-store",
    },
  );

  const tutors = featuredTutors.data?.data || [];

  const teachingCategory = await tutorService.getCategory();

  const categories = teachingCategory.data?.data || [];

  return (
    <div className="landing-page min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="landing-page min-h-screen">
        {/* Banner Section */}
        <Banner />
        {/* All Categories*/}
        <TeachingCategory categories={categories} />
        {/* Featured Tutors */}
        <FeaturedTutors tutors={tutors} />
        {/* Testimonial */}
        <TestimonialPage />
        {/* CTA Section */}
        <Footer />
      </div>
    </div>
  );
}
