import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Image from "next/image";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center py-20 flex-col font-sans-demibold">
      <h1 className="text-2xl mb-8">عکس خراب است و باید با هوش مصنوعی درست شود</h1>
      <Image
        src={"/images/404/not-found.png"}
        alt="not found page"
        width={500}
        height={500}
      />
    </div>
  );
}

export default NotFoundPage;
