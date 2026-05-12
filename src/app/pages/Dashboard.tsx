import { mockUserBikes, mockRentals } from "../data/mockData";
import { Bike, TrendingUp, Calendar, Eye, Edit, MapPin, Battery, Navigation } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Dashboard() {
  const activeRentals = mockRentals.filter((r) => r.status === "active").length;
  const totalBikes = mockUserBikes.length;
  const totalRentals = mockRentals.length;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">管理中心</h1>
          <p className="text-gray-600">管理您的电动车和查看借用记录</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Bike className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalBikes}</div>
            <div className="text-sm text-gray-600">已发布电动车</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{activeRentals}</div>
            <div className="text-sm text-gray-600">进行中的借用</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalRentals}</div>
            <div className="text-sm text-gray-600">总借用次数</div>
          </div>
        </div>

        {/* My Bikes */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">我的电动车</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              查看全部
            </button>
          </div>
          <div className="space-y-4">
            {mockUserBikes.map((bike) => (
              <div
                key={bike.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{bike.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                      {bike.brand}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{bike.type}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Battery className="w-4 h-4 text-green-600" />
                      <span>续航 {bike.batteryRange}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        bike.available
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {bike.available ? "可用" : "使用中"}
                    </span>
                  </div>
                  <div className="mt-2 flex items-start gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{bike.collectionArea} → {bike.dropOffArea}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Rentals */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">借用记录</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              查看全部
            </button>
          </div>
          <div className="space-y-4">
            {mockRentals.map((rental) => (
              <div
                key={rental.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src={rental.bikeImage}
                    alt={rental.bikeName}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{rental.bikeName}</h3>
                        <p className="text-sm text-gray-600">借用人: {rental.renterName}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          rental.status === "active"
                            ? "bg-green-100 text-green-700"
                            : rental.status === "completed"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {rental.status === "active" ? "进行中" : rental.status === "completed" ? "已完成" : "待开始"}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(rental.startDate).toLocaleDateString("zh-CN")} {rental.startTime} - {new Date(rental.endDate).toLocaleDateString("zh-CN")} {rental.endTime}
                        </span>
                      </div>
                      
                      {rental.status === "active" && rental.currentLocation && (
                        <div className="flex items-start gap-2 text-blue-600 bg-blue-50 p-2 rounded-lg">
                          <Navigation className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">当前位置</div>
                            <div className="text-sm">{rental.currentLocation}</div>
                          </div>
                        </div>
                      )}
                      
                      {!rental.currentLocation && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{rental.collectionArea} → {rental.dropOffArea}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}