export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-blue-50">
        <img
          src={animal.image || "https://place-puppy.com/400x400"}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-base font-bold">
          {animal.type || "Pet"}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-blue-800 mb-2">{animal.name}</h3>
        <p className="text-blue-600 font-bold text-lg mb-4">{animal.breed || "Mixed breed"}</p>
        
        <div className="space-y-3 mb-6 text-base text-gray-700 font-medium">
          {animal.age && <p>📅 Age: {animal.age}</p>}
          {animal.color && <p>🎨 Color: {animal.color}</p>}
          {animal.status && <p>✨ Status: <span className="font-bold text-green-600">{animal.status}</span></p>}
        </div>

        {animal.description && (
          <p className="text-gray-700 text-base mb-6 line-clamp-3">{animal.description}</p>
        )}

        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition text-lg">
            Adopt
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition text-lg">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}