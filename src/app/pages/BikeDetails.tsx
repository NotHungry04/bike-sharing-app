import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { mockBikes } from "../data/mockData";
import { Star, MapPin, Calendar, ArrowLeft, Check, Battery, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BikeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = mockBikes.find((b) => b.id === id);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("18:00");
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!bike) {
    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">未找到该电动车</h2>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (startDate && endDate && startTime && endTime) {
      setShowConfirmation(true);
      setTimeout(() => {
        navigate("/bookings");
      }, 2000);
    }
  };

  const timeOptions = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h.toString().padStart(2, '0');
      const minute = m.toString().padStart(2, '0');
      timeOptions.push(`${hour}:${minute}`);
    }
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          返回
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-4">
              <ImageWithFallback
                src={bike.image}
                alt={bike.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {bike.brand} · {bike.type}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{bike.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{bike.rating}</span>
                    <span className="text-gray-600">({bike.reviews} 评价)</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Battery className="w-5 h-5" />
                    <span className="font-medium">续航 {bike.batteryRange}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{bike.description}</p>

              {/* Collection and Drop-off Areas */}
              <div className="mb-6 space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">取车地点</div>
                    <div className="font-medium text-gray-900">{bike.collectionArea}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">还车地点</div>
                    <div className="font-medium text-gray-900">{bike.dropOffArea}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">车辆特性</h3>
                <div className="grid grid-cols-2 gap-2">
                  {bike.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Owner Info */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">车主信息</h3>
                <div className="flex items-center gap-3">
                  <img
                    src={bike.ownerAvatar}
                    alt={bike.owner}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{bike.owner}</div>
                    <div className="text-sm text-gray-600">加入于 2024年</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                预约使用
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      开始日期
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      开始时间
                    </label>
                    <select
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      结束日期
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      结束时间
                    </label>
                    <select
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {startDate && endDate && startTime && endTime && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">预约时间段</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {startDate} {startTime} - {endDate} {endTime}
                    </div>
                  </div>
                )}
                <button
                  onClick={handleBooking}
                  disabled={!startDate || !endDate || !startTime || !endTime || !bike.available}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
                >
                  {bike.available ? "立即预约" : "暂不可用"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">预约成功！</h3>
            <p className="text-gray-600 mb-4">
              您已成功预约 {bike.name}。正在跳转到我的预约...
            </p>
            <div className="text-sm text-gray-500">
              {startDate} {startTime} - {endDate} {endTime}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
