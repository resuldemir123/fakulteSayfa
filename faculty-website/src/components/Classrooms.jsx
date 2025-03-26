import { Calendar, FlaskConical, Monitor, Users } from 'lucide-react';
import React from 'react';
import { facultyInfo } from '../data/facultyData';

const getClassroomIcon = (type) => {
  switch(type) {
    case "Amfi": return <Users className="text-blue-600" size={20} />;
    case "Laboratuvar": return <FlaskConical className="text-blue-600" size={20} />;
    case "Toplantı": return <Monitor className="text-blue-600" size={20} />;
    default: return <Calendar className="text-blue-600" size={20} />;
  }
};

const Classrooms = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Derslikler ve Tesisler</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyInfo.classrooms.map((room) => (
          <div key={room.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  {getClassroomIcon(room.type)}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{room.name}</h2>
                  <p className="text-gray-500">Kod: {room.id} • Kapasite: {room.capacity}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Özellikler:</h3>
                <ul className="space-y-1">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {room.schedule && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Ders Programı:</h3>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    {Object.entries(room.schedule).map(([day, times]) => (
                      <div key={day} className="mb-1 last:mb-0">
                        <span className="font-medium capitalize">{day}:</span> {times.join(', ')}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {room.reservedFor && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Özel Kullanım:</span> {room.reservedFor.join(', ')}
                </div>
              )}
              
              {room.bookingRequired && (
                <div className="mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Rezervasyon Yap
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classrooms;