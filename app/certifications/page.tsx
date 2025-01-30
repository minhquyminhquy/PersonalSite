import Image from 'next/image'

const certifications = [
  { id: 1, name: "Data Science Specialization", issuer: "IBM", year: 2024, image: "/images/certifications/IBMDataScience.jpg", description: "This course teaches essential data science skills, including Python, SQL, data cleaning, analysis, visualization, and machine learning." },
  { id: 2, name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: 2024, image: "/images/certifications/MachineLearning.jpg", description: "This course covers building and training machine learning models, using best practices, and creating advanced recommender systems.." },
  { id: 3, name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", year: 2024, image: "/images/certifications/Neural_Networks.jpg", description: "I learn how deep neural networks works, its application, and train one by myself using Tensorflow." },
  { id: 4, name: "Convolutional Neural Networks", issuer: "DeepLearning.AI", year: 2025, image: "/images/certifications/CNN.jpg", description: "I learn about what powers state-of-the-art computer vision model; this motivates me to take the course DATA.ML.300 Computer Vision in my freshman year." },
  { id: 5, name: "Improving Deep Neural Networks", issuer: "DeepLearning.AI", year: 2024, image: "/images/certifications/ImprovingDNN.jpg", description: "I learn about how to improve Deep Learning models with techniques like hyperparamters tuning." },
  { id: 6, name: "Neural Network with PyTorch", issuer: "IBM", year: 2025, image: "/images/certifications/NNPyTorch.jpg", description: "This course teachs how to implement neural network in PyTorch." },
  { id: 7, name: "MATLAB Fundamentals", issuer: "MathWorks", year: 2024, image: "/images/certifications/MATLAB_Fundamentals.jpg", description: "I learn the basics of MATLAB, including data types, matrices, plotting, and programming to perform numerical computations and data analysis." }
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

