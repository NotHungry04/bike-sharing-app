import { useState } from "react";
import { mockBookings } from "../data/mockData";
import { Calendar, MapPin, Clock, CreditCard, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from "../components/ui/dialog";

export function MyBookings() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "active" | "completed"> ("active");

  const filteredBookings = mockBookings.filter((booking) => booking.status === activeTab);

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">我的预约</h1>
          <p className="text-gray-600">查看和管理您的电动车预约</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "upcoming"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              待开始 ({mockBookings.filter((b) => b.status === "upcoming").length})
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "active"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              进行中 ({mockBookings.filter((b) => b.status === "active").length})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "completed"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              已完成 ({mockBookings.filter((b) => b.status === "completed").length})
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                暂无{activeTab === "upcoming" ? "待开始" : activeTab === "active" ? "进行中" : "已完成"}的预约
              </h3>
              <p className="text-gray-600">
                {activeTab === "upcoming"
                  ? "您还没有即将开始的预约。"
                  : activeTab === "active"
                  ? "您目前没有进行中的预约。"
                  : "您还没有完成任何预约。"}
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <ImageWithFallback
                    src={booking.bikeImage}
                    alt={booking.bikeName}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {booking.bikeName}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === "active"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "completed"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {booking.status === "active" ? "进行中" : booking.status === "completed" ? "已完成" : "待开始"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2 text-gray-700">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium mb-1">开始时间</div>
                          <div className="text-sm">
                            {new Date(booking.startDate).toLocaleDateString("zh-CN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              weekday: "short",
                            })} {booking.startTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium mb-1">结束时间</div>
                          <div className="text-sm">
                            {new Date(booking.endDate).toLocaleDateString("zh-CN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              weekday: "short",
                            })} {booking.endTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium mb-1">取车地点</div>
                          <div className="text-sm">{booking.collectionArea}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium mb-1">还车地点</div>
                          <div className="text-sm">{booking.dropOffArea}</div>
                        </div>
                      </div>
                      {booking.status === "upcoming" && (
                        <>
                          <div className="flex items-start gap-2 text-gray-700">
                            <CreditCard className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium mb-1">车牌号</div>
                              <div className="text-sm font-semibold">{booking.licensePlate}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-gray-700">
                            <User className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium mb-1">车主</div>
                              <div className="text-sm flex items-center gap-2">
                                <img
                                  src={booking.ownerAvatar}
                                  alt={booking.ownerName}
                                  className="w-6 h-6 rounded-full"
                                />
                                {booking.ownerName}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      {booking.status === "upcoming" && (
                        <>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                                🔓 一键开锁
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>开锁成功</DialogTitle>
                              </DialogHeader>
                              <div className="py-4 text-center">
                                <p className="text-lg">请在 {new Date(booking.endDate).toLocaleDateString("zh-CN", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  weekday: "short",
                                })} {booking.endTime} 归还钥匙</p>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                    确认
                                  </button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            取消预约
                          </button>
                        </>
                      )}
                      {booking.status === "active" && (
                        <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                          联系车主
                        </button>
                      )}
                      {booking.status === "completed" && (
                        <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                          再次预约
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
