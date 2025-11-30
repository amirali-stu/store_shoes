import OrderHistoryRecent from "@/components/templates/Account/Dashboard/OrderHistoryRecent";
import Profile from "@/components/templates/Account/Dashboard/Profile";
import UserInfo from "@/components/templates/Account/Dashboard/UserInfo";

function Dashboard() {
  return (
    <div className="w-full grid gap-6">
      <div className="col-span-6 xl:min-w-[385px] max-xl:col-span-4 max-md:col-span-12 border-2 border-gray-100 bg-white rounded-lg p-4">
        <Profile />
      </div>
      <div className="col-span-6 xl:min-w-[565px] max-xl:col-span-8 max-md:col-span-12 border-2 border-gray-100 bg-white rounded-lg p-4">
        <UserInfo />
      </div>
      <div className="col-span-12 h-40 border-2 border-gray-100 bg-white rounded-lg p-4">
        <OrderHistoryRecent />
      </div>
    </div>
  );
}

export default Dashboard;
