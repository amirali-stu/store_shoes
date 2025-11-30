import AddressInfo from "@/components/templates/Account/Setting/AddressInfo";
import ChangePassword from "@/components/templates/Account/Setting/ChangePassword";
import UserInfo from "@/components/templates/Account/Setting/UserInfo";

function Setting() {
  return (
    <div className="w-full grid gap-6">
      <div className="w-full col-span-12">
        <UserInfo />
      </div>
      <div className="w-full col-span-12">
        <AddressInfo />
      </div>
      <div className="w-full col-span-12">
        <ChangePassword />
      </div>
    </div>
  );
}

export default Setting;
