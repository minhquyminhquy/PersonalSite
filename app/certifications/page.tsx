import Image from 'next/image'

const certifications = [
  { id: 1, name: "Certification 1", issuer: "Issuer 1", year: 2023, image: "/images/certifications/cert1.jpg", description: "Description of Certification 1" },
  { id: 2, name: "Certification 2", issuer: "Issuer 2", year: 2022, image: "/images/certifications/cert2.jpg", description: "Description of Certification 2" },
  { id: 3, name: "Certification 3", issuer: "Issuer 3", year: 2021, image: "/images/certifications/cert3.jpg", description: "Description of Certification 3" },
  { id: 4, name: "Certification 4", issuer: "Issuer 4", year: 2020, image: "/images/certifications/cert4.jpg", description: "Description of Certification 4" },
  { id: 5, name: "Certification 5", issuer: "Issuer 5", year: 2019, image: "/images/certifications/cert5.jpg", description: "Description of Certification 5" },
  { id: 6, name: "Certification 6", issuer: "Issuer 6", year: 2018, image: "/images/certifications/cert6.jpg", description: "Description of Certification 6" },
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

