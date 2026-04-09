"use client";
import { useState } from "react";
import { certificates } from "@/data/certificates";

export default function About() {
  // pagination sertifikat
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentData = certificates.slice(start, start + itemsPerPage);
  // end pagination

  return (
    <section className="mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16"></h1>
        {/* SECTION 1 - INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hi, I'm Febri indra</h2>

            <p className="text-gray-600 leading-relaxed">
              Lulusan S1 Informatika dengan pengalaman sebagai Fullstack
              Developer melalui program magang dan studi independen
              bersertifikat. Berpengalaman dalam pengembangan sistem berbasis
              web menggunakan Laravel, CodeIgniter, dan REST API, serta
              JavaScript modern seperti React dan Next.js. Memiliki kemampuan
              komunikasi yang baik, mampu bekerja dalam tim maupun individu,
              serta memiliki motivasi untuk terus belajar dan berkembang.
            </p>

            <h2 className="text-xl font-semibold mt-6">Tools</h2>
            <div className="mt-6 flex flex-wrap gap-1">
              {[
                { name: "Laravel", icon: "devicon-laravel-plain" },
                { name: "CodeIgniter", icon: "devicon-codeigniter-plain" },
                { name: "JavaScript", icon: "devicon-javascript-plain" },
                { name: "MySQL", icon: "devicon-mysql-plain" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
                { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
                { name: "React", icon: "devicon-react-original" },
                { name: "Next.js", icon: "devicon-nextjs-plain" },
                { name: "Git", icon: "devicon-git-plain" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition hover:scale-110"
                >
                  <i className={`${skill.icon} colored text-2xl`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/img/foto.png"
              alt="Profile"
              className="relative w-64 h-auto max-h-[400px]"
            />
          </div>
        </div>

        {/* SECTION 2 - EXPERIENCE */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {/* EXPERIENCE 1 */}
            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">
                Fullstack Developer - Internship
              </h3>
              <p className="text-sm text-gray-500">
                Ikatan Nasional Konsultan Indonesia (INKINDO) • Yogyakarta
              </p>
              <p className="text-xs text-gray-400">Aug 2024 - Dec 2024</p>
              <ul className="mt-3 text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>
                  Mengembangkan Learning Management System (LMS) berbasis web.
                </li>
                <li>
                  Berkolaborasi menggunakan Jira untuk monitoring progres
                  proyek.
                </li>
                <li>Mempresentasikan hasil pengembangan kepada stakeholder.</li>
              </ul>
            </div>

            {/* EXPERIENCE 2 */}
            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">
                Fullstack Developer - Internship
              </h3>
              <p className="text-sm text-gray-500">
                PT Engineering Career Center (ECC) • Yogyakarta
              </p>
              <p className="text-xs text-gray-400">Feb 2024 - Jun 2024</p>
              <ul className="mt-3 text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>Mengembangkan REST API untuk tes potential mapping.</li>
                <li>Berkontribusi 70% backend dan 30% frontend.</li>
                <li>Mempresentasikan hasil pengembangan kepada stakeholder.</li>
              </ul>
            </div>

            {/* EXPERIENCE 3 */}
            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">
                Junior Programmer - Internship
              </h3>
              <p className="text-sm text-gray-500">
                CV Intermedia Solusindo • Yogyakarta
              </p>
              <p className="text-xs text-gray-400">Jun 2018 - Aug 2018</p>
              <ul className="mt-3 text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>
                  Menerapkan konsep MVC dalam pengembangan aplikasi berbasis
                  PHP.
                </li>
                <li>
                  Berkolaborasi dalam tim menyelesaikan proyek website toko
                  online.
                </li>
                <li>Menyelesaikan proyek lebih cepat dari target.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* sertifikat */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Sertifikat
          </h2>
          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.map((cert, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer"
                onClick={() => window.open(cert.img, "_blank")}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-xs text-center px-2">
                  <p className="font-semibold">{cert.title}</p>

                  <span className="text-[10px] bg-white/20 px-2 py-1 rounded mt-1">
                    {cert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              {/* PREV */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
              >
                Prev
              </button>
              {/* NUMBER */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "border hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* NEXT */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* SECTION 4 - CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
          <a
            href="mailto:febriindravalentino@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
