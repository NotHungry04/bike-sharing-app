export interface Bike {
  id: string;
  name: string;
  type: string;
  description: string;
  collectionArea: string;
  dropOffArea: string;
  owner: string;
  ownerAvatar: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  available: boolean;
  batteryRange: string;
  brand: string;
}

export interface Booking {
  id: string;
  bikeId: string;
  bikeName: string;
  bikeImage: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  collectionArea: string;
  dropOffArea: string;
  status: "upcoming" | "active" | "completed";
  renterName?: string;
  currentLocation?: string; // 当前位置（仅用于进行中的预约）
  licensePlate: string; // 车牌号
  ownerName?: string; // 车主姓名
  ownerAvatar?: string; // 车主头像
}

export const mockBikes: Bike[] = [
  {
    id: "1",
    name: "小米电动自行车Pro",
    type: "电动自行车",
    description: "高性能电动自行车，配备智能显示屏和长续航电池。适合校园通勤和往返教学楼。",
    collectionArea: "第一教学楼",
    dropOffArea: "图书馆",
    owner: "张伟",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    rating: 4.9,
    reviews: 45,
    image: "/bike1.jpg",
    features: ["智能显示屏", "长续航电池", "LED前灯", "碟刹系统"],
    available: true,
    batteryRange: "80公里",
    brand: "小米",
  },
  {
    id: "2",
    name: "雅迪电动车Z3",
    type: "电动自行车",
    description: "时尚轻便的电动自行车，配备高性能锂电池和舒适座椅。校园代步首选。",
    collectionArea: "第二教学楼",
    dropOffArea: "食堂一",
    owner: "李娜",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
    rating: 4.8,
    reviews: 32,
    image: "/bike2.jpg",
    features: ["轻量设计", "快速充电", "防盗报警", "USB充电口"],
    available: true,
    batteryRange: "60公里",
    brand: "雅迪",
  },
  {
    id: "3",
    name: "爱玛电动车TDR",
    type: "电动自行车",
    description: "智能电动自行车，支持手机APP控制，配备GPS定位系统。适合校园内短途出行。",
    collectionArea: "图书馆",
    dropOffArea: "体育中心",
    owner: "王强",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
    rating: 5.0,
    reviews: 58,
    image: "/bike3.jpg",
    features: ["手机APP控制", "GPS定位", "智能锁", "三档变速"],
    available: true,
    batteryRange: "100公里",
    brand: "爱玛",
  },
  {
    id: "4",
    name: "九号电动车E100",
    type: "电动自行车",
    description: "高端电动自行车，采用航空铝材车架，动力强劲。校园通勤更快捷。",
    collectionArea: "第三教学楼",
    dropOffArea: "第一教学楼",
    owner: "刘芳",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liu",
    rating: 4.7,
    reviews: 28,
    image: "/bike4.jpg",
    features: ["航空铝车架", "强劲动力", "液压减震", "大容量电池"],
    available: true,
    batteryRange: "90公里",
    brand: "九号",
  },
  {
    id: "5",
    name: "台铃电动车M6",
    type: "电动自行车",
    description: "经济实用型电动车，稳定可靠，适合日常校园通勤。配有置物篮方便携带物品。",
    collectionArea: "食堂一",
    dropOffArea: "第二教学楼",
    owner: "陈明",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
    rating: 4.6,
    reviews: 36,
    image: "/bike5.jpg",
    features: ["经济实用", "稳定可靠", "舒适座垫", "大容量置物篮"],
    available: true,
    batteryRange: "70公里",
    brand: "台铃",
  },
  {
    id: "6",
    name: "新日电动车XC2",
    type: "电动自行车",
    description: "运动型电动自行车，外观时尚，性能卓越。往返教学楼和宿舍的理想选择。",
    collectionArea: "体育中心",
    dropOffArea: "第四教学楼",
    owner: "赵丽",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao",
    rating: 4.9,
    reviews: 41,
    image: "/bike6.jpg",
    features: ["运动外观", "高性能电机", "智能仪表", "双重制动"],
    available: true,
    batteryRange: "85公里",
    brand: "新日",
  },
];

export const mockUserBikes: Bike[] = [
  mockBikes[0],
  mockBikes[2],
];

export const mockBookings: Booking[] = [
  {
    id: "b1",
    bikeId: "2",
    bikeName: "雅迪电动车Z3",
    bikeImage: "/bike2.jpg",
    startDate: "2026-03-20",
    startTime: "09:00",
    endDate: "2026-03-22",
    endTime: "18:00",
    collectionArea: "第二教学楼",
    dropOffArea: "食堂一",
    status: "upcoming",
    licensePlate: "浙A·88888",
    ownerName: "李娜",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
  },
  {
    id: "b2",
    bikeId: "4",
    bikeName: "九号电动车E100",
    bikeImage: "/bike4.jpg",
    startDate: "2026-03-15",
    startTime: "08:30",
    endDate: "2026-03-16",
    endTime: "20:00",
    collectionArea: "第三教学楼",
    dropOffArea: "第一教学楼",
    status: "active",
    licensePlate: "浙A·66666",
    ownerName: "刘芳",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liu",
  },
  {
    id: "b3",
    bikeId: "6",
    bikeName: "新日电动车XC2",
    bikeImage: "/bike6.jpg",
    startDate: "2026-03-01",
    startTime: "10:00",
    endDate: "2026-03-03",
    endTime: "17:00",
    collectionArea: "体育中心",
    dropOffArea: "第四教学楼",
    status: "completed",
    licensePlate: "浙A·99999",
    ownerName: "赵丽",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao",
  },
];

export const mockRentals: Booking[] = [
  {
    id: "r1",
    bikeId: "1",
    bikeName: "小米电动自行车Pro",
    bikeImage: "/bike1.jpg",
    startDate: "2026-03-16",
    startTime: "07:00",
    endDate: "2026-03-18",
    endTime: "19:00",
    collectionArea: "第一教学楼",
    dropOffArea: "图书馆",
    status: "active",
    renterName: "孙建国",
    currentLocation: "图书馆附近 (距离图书馆约50米)",
    licensePlate: "浙A·77777",
    ownerName: "张伟",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
  },
  {
    id: "r2",
    bikeId: "3",
    bikeName: "爱玛电动车TDR",
    bikeImage: "/bike3.jpg",
    startDate: "2026-03-10",
    startTime: "09:30",
    endDate: "2026-03-12",
    endTime: "18:00",
    collectionArea: "图书馆",
    dropOffArea: "体育中心",
    status: "completed",
    renterName: "周敏",
    licensePlate: "浙A·55555",
    ownerName: "王强",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
  },
];

export const chinaAreas = [
  "第一教学楼",
  "第二教学楼",
  "第三教学楼",
  "第四教学楼",
  "图书馆",
  "食堂一",
  "体育中心",
];