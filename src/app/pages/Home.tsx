import { useState } from "react";
import { BikeCard } from "../components/BikeCard";
import { mockBikes } from "../data/mockData";
import { Search, SlidersHorizontal } from "lucide-react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const brands = ["all", "小米", "雅迪", "爱玛", "九号", "台铃", "新日"];

  const filteredBikes = mockBikes.filter((bike) => {
    const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.collectionArea.includes(searchQuery) ||
      bike.dropOffArea.includes(searchQuery);
    const matchesBrand = selectedBrand === "all" || bike.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">
              校园电动车共享平台
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              让闲置的电动车发挥价值，减少校园车辆过饱和，共建绿色校园
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="搜索电动车或地点..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 py-3 outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <SlidersHorizontal className="w-5 h-5 text-gray-600 flex-shrink-0" />
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedBrand === brand
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {brand === "all" ? "全部品牌" : brand}
            </button>
          ))}
        </div>
      </div>

      {/* Bike Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            可用电动车 ({filteredBikes.length})
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
        {filteredBikes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">未找到符合条件的电动车</p>
          </div>
        )}
      </div>
    </div>
  );
}