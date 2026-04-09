export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 text-center mt-20">
        {/* section intro */}
        <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* KIRI - FOTO */}
          <div className="relative z-0 flex justify-center md:justify-start">
            {/* Glow */}
            <div className="absolute z-[-1] w-80 h-80 bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
            {/* Foto */}
            <img
              src="/img/foto.png"
              alt="Profile"
              className="relative w-64 h-auto max-h-[400px]"
            />
          </div>
          {/* className="relative w-64 h-auto max-h-[400px] rounded-2xl object-cover object-top shadow-xl border border-gray-200" */}

          {/* KANAN - TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span>Febri indra</span>
            </h1>

            <p className="mt-3 text-xl">Fullstack Developer</p>

            <p className="mt-4 text-gray-600 max-w-lg">
              Saya berpengalaman dalam pengembangan website menggunakan Laravel,
              CodeIgniter, dan JavaScript.
            </p>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a
                href="/CV - Febri indra valentino.pdf"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex gap-6 justify-center md:justify-start">
              <a
                href="mailto:febriindravalentino@gmail.com"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
    bg-transparent hover:bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                Hire me
              </a>

              <a
                href="https://github.com/febriindra14"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
    bg-transparent hover:bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                GitHub
              </a>

              <a
                href="http://www.linkedin.com/in/febriindra"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
    bg-transparent hover:bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* SKILLS BERGERAK */}
        <section className="py-20 mt-16 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-2">
            Technology Stack
          </h2>

          <div className="overflow-hidden py-10">
            <div className="flex gap-10 items-center animate-scroll w-max">
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
              ]
                .concat([
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
                ])
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center px-5 py-4 my-4 
            rounded-xl bg-white/70 backdrop-blur border border-gray-200 
            min-w-[130px] 
            shadow-sm hover:shadow-2xl 
            hover:scale-110 hover:-translate-y-1 
            hover:border-blue-400
            transition duration-300"
                  >
                    <i className={`${skill.icon} colored text-4xl mb-2`}></i>
                    <span className="text-sm font-semibold text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              My Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8 w-full">
              {/* PROJECT 1 */}
              <div className="group overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                <img
                  src="/img/Lms.jpg"
                  alt="LMS Project"
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">
                    Learning Management System
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Sistem pembelajaran online dengan fitur login, materi,
                    video, quiz, dan sertifikat.
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    CodeIgniter 4 • MySQL • Bootstrap
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#"
                      target="_blank"
                      className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
                    >
                      GitHub
                    </a>

                    <a
                      href="#"
                      className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJECT 2 */}
              <div className="group overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                <img
                  src="/img/assessment.png"
                  alt="Assessment Project"
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold">
                    Online Personal Assessment
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Sistem Online Personal Assessment (OPA) untuk membantu
                    jobseeker memahami diri dan meningkatkan kesiapan karier.
                    Seperti fitur gaya kepribadian, minat karier, kesiapan
                    karir, dan pemetaan potensi.
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Laravel 10 • REST API • PostgreSQL
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#"
                      target="_blank"
                      className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
                    >
                      GitHub
                    </a>

                    <a
                      href="#"
                      className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTON LIHAT SEMUA */}
            <div className="text-center mt-10">
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
