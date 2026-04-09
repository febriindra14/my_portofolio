export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
          <img
            src="/img/Lms.jpg"
            alt="LMS Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">
              Learning Management System
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem pembelajaran online dengan fitur login, upload materi,
              video pembelajaran, quiz, dan sertifikat.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              CodeIgniter 4, MySQL, Bootstrap
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="shadow hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden h-full flex flex-col">
          <img
            src="/img/assessment.png"
            alt="Assessment Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">
              Online Personal Assessment
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem Online Personal Assessment (OPA) untuk membantu jobseeker
              memahami diri dan meningkatkan kesiapan karier. Seperti fitur gaya
              kepribadian, minat karier, kesiapan karir, dan pemetaan potensi.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Laravel 10, REST API, PostgreSQL
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
          <img
            src="/img/onedocument.jpg"
            alt="One Document Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">One Document</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem one document untuk memudahkan pengelolaan dokumen menjadi
              satu tempat.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Php native, MySQL, Bootstrap
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
          <img
            src="/img/siangkut.jpg"
            alt="Siangkut Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">Siangkut</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem angkut sampah Bertujuan untuk mendata pelanggan yang
              menggunakan jasa angkut sampah dan riwayat pembayaran pelanggan.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Laravel, MySQL, Bootstrap.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 5 */}
        <div className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
          <img
            src="/img/koperasi.png"
            alt="Koperasi Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">Koperasi</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem manajemen koperasi yang digunakan untuk mengelola bidang
              usaha dan layanan koperasi primkoppol tri sakti polres wonosobo.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              CodeIgniter 4, MySQL, Bootstrap.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 6 */}
        <div className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
          <img
            src="/img/olshop.jpg"
            alt="Toko Online Project"
            className="w-full h-50 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold">Toko Online</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sistem e-commerce sederhana yang digunakan untuk menjual produk
              secara online.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              CodeIgniter 3, MySQL, Bootstrap.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>

              <a href="#" className="px-4 py-2 border rounded">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
