import React from 'react';

const students = [
  { no: 1, nim: '12345', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Sistem Informasi', kelas: 'A', semester: 4, alamat: 'Jl. Merdeka No. 1', hobby: 'Bermain Musik', citaCita: 'Software Engineer' },
  { no: 2, nim: '67890', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'B', semester: 4, alamat: 'Jl. Pahlawan No. 2', hobby: 'Membaca', citaCita: 'Data Scientist' },
  { no: 3, nim: '11223', nama: 'Michael Johnson', gender: 'Laki-laki', prodi: 'Sistem Informasi', kelas: 'C', semester: 4, alamat: 'Jl. Pemuda No. 3', hobby: 'Berkebun', citaCita: 'Cloud Architect' },
  // Add more students here as needed
];

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Data Mahasiswa</h1>
      
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">NIM</th>
            <th className="px-4 py-2 text-left">Nama</th>
            <th className="px-4 py-2 text-left">Gender</th>
            <th className="px-4 py-2 text-left">Prodi</th>
            <th className="px-4 py-2 text-left">Kelas</th>
            <th className="px-4 py-2 text-left">Semester</th>
            <th className="px-4 py-2 text-left">Alamat</th>
            <th className="px-4 py-2 text-left">Hobby</th>
            <th className="px-4 py-2 text-left">Cita-cita</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.no} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-center">{student.no}</td>
              <td className="px-4 py-2 text-center">{student.nim}</td>
              <td className="px-4 py-2">{student.nama}</td>
              <td className="px-4 py-2 text-center">{student.gender}</td>
              <td className="px-4 py-2">{student.prodi}</td>
              <td className="px-4 py-2 text-center">{student.kelas}</td>
              <td className="px-4 py-2 text-center">{student.semester}</td>
              <td className="px-4 py-2">{student.alamat}</td>
              <td className="px-4 py-2">{student.hobby}</td>
              <td className="px-4 py-2">{student.citaCita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
