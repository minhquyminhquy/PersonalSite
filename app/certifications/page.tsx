import Image from 'next/image'

const certifications = [
  { id: 1, name: "IBM Data Science Specialization", issuer: "IBM", year: 2024, image: "/images/certifications/IBMDataScience.jpg", description: "This course teaches essential data science skills, including Python, SQL, data cleaning, analysis, visualization, and machine learning." },
  { id: 2, name: "MATLAB Fundamentals", issuer: "MathWorks", year: 2024, image: "/images/certifications/MATLAB_Fundamentals.jpg", description: "I learn the basics of MATLAB, including data types, matrices, plotting, and programming to perform numerical computations and data analysis." }
]

export default function Certifications() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">My Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={cert.image}
              alt={cert.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
              <p className="text-lightGray mb-2">Issued by: {cert.issuer} ({cert.year})</p>
              <p className="text-lightGray">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

