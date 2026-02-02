// "use client";

// import { useTheme } from "./ThemeProvider";
// import { useState, useEffect, useRef } from "react";

// export default function ThemeToggle() {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const themes = [
//     {
//       value: "light" as const,
//       label: "Light",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//           />
//         </svg>
//       ),
//     },
//     {
//       value: "dark" as const,
//       label: "Dark",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//           />
//         </svg>
//       ),
//     },
//     {
//       value: "system" as const,
//       label: "System",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const currentThemeConfig = themes.find((t) => t.value === theme) || themes[2];

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg group"
//         aria-label="Toggle theme"
//       >
//         <div className="text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
//           {currentThemeConfig.icon}
//         </div>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden animate-scale-in z-50">
//           <div className="p-2">
//             <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2">
//               Theme
//             </div>
//             {themes.map((themeOption) => (
//               <button
//                 key={themeOption.value}
//                 onClick={() => {
//                   setTheme(themeOption.value);
//                   setIsOpen(false);
//                 }}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
//                   theme === themeOption.value
//                     ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-lg"
//                     : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 }`}
//               >
//                 <div
//                   className={theme === themeOption.value ? "text-white" : ""}
//                 >
//                   {themeOption.icon}
//                 </div>
//                 <span className="font-medium">{themeOption.label}</span>
//                 {theme === themeOption.value && (
//                   <svg
//                     className="w-4 h-4 ml-auto"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
