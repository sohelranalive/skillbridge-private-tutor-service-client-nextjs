"use client";
import {
  Loader,
  FullPageLoader,
  LoadingDots,
} from "@/components/layout/Loader";
import { getTutorAction } from "@/actions/tutor.actions";
import { count } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";
import { any } from "zod";
import { getCategoryAction } from "@/actions/admin.actions";

export default function TutorBrowser() {
  const [tutors, setTutors] = useState([]);

  const [search, setSearch] = useState("");
  const [isFeatured, setIsFeatured] = useState(null);
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [sortBy, setSortBy] = useState("price");
  const [orderBy, setOrderBy] = useState("asc");
  const [count, setCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchTutors() {
      const result = await getTutorAction(
        {
          search: search,
          isFeatured: isFeatured,
          price: price,
          category: selectedCategory,
          ratings: rating,
          page: page,
          limit: limit,
          skip: skip,
          sortBy: sortBy,
          sortOrder: orderBy,
        },
        {
          cache: "no-store",
        },
      );
      const { data, error } = result;
      setTutors(data?.data?.data);

      const { count, totalPage } = data?.data?.pagination;
      setCount(count);
      setTotalPage(totalPage);

      setIsLoading(false);
    }
    fetchTutors();
  }, [
    search,
    isFeatured,
    price,
    selectedCategory,
    rating,
    page,
    limit,
    skip,
    sortBy,
    orderBy,
  ]);

  useEffect(() => {
    async function fetchCategory() {
      const result = await getCategoryAction();
      setCategories(result.data.data);
    }
    fetchCategory();
  }, []);

  return (
    <div className="tutor-profile min-h-screen">
      {/* Header */}

      {/* Search Bar */}
      <section className="bg-linear-to-r from-rose-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3 animate-slide-down">
            Find Your Perfect Tutor
          </h1>
          <p className="text-rose-100 mb-6 animate-slide-down stagger-1">
            Browse for expert tutors ready to help you succeed
          </p>

          <div className="bg-white rounded-2xl p-3 shadow-2xl shadow-rose-900/20 animate-slide-down stagger-2">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-gray-400 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by subject, tutor name, or expertise..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 py-3"
              />
              <button className="px-8 py-3 bg-linear-to-r from-rose-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category: any) => (
                  <button
                    key={category.category_id}
                    onClick={() =>
                      category._count.tutor
                        ? setSelectedCategory(category.category_name)
                        : undefined
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      selectedCategory === category.category_name
                        ? "bg-linear-to-r from-rose-600 to-orange-600 text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">
                      {category.category_name}
                    </span>
                    <span
                      className={`text-sm ${
                        selectedCategory === category.category_id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {category._count.tutor}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade stagger-1">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Filter By Price
              </h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex gap-2">
                  {[20, 40, 60, 80].map((price) => (
                    <button
                      key={price}
                      // onClick={() => setPriceRange([0, price])}
                      className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all"
                    >
                      ${price}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade stagger-2">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Filter By Rating
              </h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((ratingValue) => (
                  <button
                    key={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      rating === ratingValue
                        ? "bg-rose-50 border-2 border-rose-600"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < ratingValue ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 font-medium">& up</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Tutors Grid */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 animate-fade">
              <div className="text-gray-700">
                <span className="font-bold">{count}</span> tutors found
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={orderBy}
                  onChange={(e) => {
                    setOrderBy(e.target.value);
                  }}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            {/* Tutors List */}

            {isLoading ? (
              <Loader />
            ) : (
              <div className="space-y-6">
                {tutors.map((tutor: any, idx: any) => (
                  <div
                    key={tutor.tutor_id}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-rose-300 transition-all cursor-pointer animate-fade stagger-${(idx % 6) + 1}`}
                  >
                    <div className="flex gap-6">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <img
                          src={tutor.user.image}
                          alt={tutor.user.name}
                          className="w-24 h-24 rounded-2xl border-2 border-rose-200"
                        />
                        {tutor.verified && (
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-linear-to-br from-rose-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        {tutor.user.status && (
                          <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {tutor.user.name}
                            </h3>
                            <p className="text-gray-600">
                              {tutor.category?.category_name}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-rose-600">
                              ${tutor.price}
                            </div>
                            <div className="text-sm text-gray-500">
                              per hour
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-bold text-gray-900">
                              {tutor.avgRating}
                            </span>
                            <span className="text-gray-500">
                              ({tutor.reviewCount} reviews)
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutor.subjects.map((subject: any) => (
                            <span
                              key={subject}
                              className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm font-medium rounded-lg"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/tutors/${tutor.tutor_id}`}>
                            <button className="px-6 py-2.5 bg-linear-to-r from-rose-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all w-full">
                              Book Session
                            </button>
                          </Link>

                          <Link href={`/tutors/${tutor.tutor_id}`}>
                            <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all w-full">
                              View Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8 animate-fade stagger-6">
              {/* Previous */}
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  page === 1
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPage }, (_, i) => {
                const pageNumber = i + 1;

                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      page === pageNumber
                        ? "bg-linear-to-r from-rose-600 to-orange-600 text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {/* Next */}
              <button
                disabled={page === totalPage}
                onClick={() => setPage((p) => Math.min(totalPage, p + 1))}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  page === totalPage
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
