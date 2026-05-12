import { Link } from "react-router";
import { Star, MapPin, Battery } from "lucide-react";
import { Bike } from "../data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <Link to={`/bike/${bike.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!bike.available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">
                使用中
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {bike.brand}
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-gray-900">{bike.name}</h3>
            <p className="text-sm text-gray-600">{bike.type}</p>
          </div>
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{bike.rating}</span>
            <span className="text-sm text-gray-600">({bike.reviews} 评价)</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
            <Battery className="w-4 h-4 text-green-600" />
            <span>续航 {bike.batteryRange}</span>
          </div>
          <div className="flex items-start gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <div className="mb-1">取车: {bike.collectionArea}</div>
              <div>还车: {bike.dropOffArea}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
