"use client";

import { useActionState, useEffect, useState } from "react";
import { apiRequest } from "../../../../../services/axios/config/apiRequest";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { createNewProduct } from "@/actions/brands";

const initialState = { success: null, error: null, data: null };

function ProductsForm() {
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [colorsStock, setColorsStock] = useState([{ colorId: "", sizes: [] }]);
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await createNewProduct(formData);
    },
    initialState
  );

  useEffect(() => {
    const getSize = async () => {
      try {
        const res = await apiRequest("/productVariant/size");
        setSize(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("error size -> ", error);
      }
    };
    const getColor = async () => {
      try {
        const res = await apiRequest("/productVariant/color");
        setColor(res.data.data);
      } catch (error) {
        console.log("error color -> ", error);
      }
    };
    const getCategory = async () => {
      try {
        const res = await apiRequest("/productVariant/category");
        setCategory(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("error category -> ", error);
      }
    };
    const getBrand = async () => {
      try {
        const res = await apiRequest("/productVariant/brand");
        setBrand(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("error brand -> ", error);
      }
    };

    getSize();
    getColor();
    getCategory();
    getBrand();
  }, []);

  useEffect(() => {
    if (state?.success) {
      toast.success("محصول با موفقیت ایجاد شد", successStyle);
    } else if (state?.success === false) {
      if (state.error === "NO_FILE")
        toast.error("لطفاً عکس را انتخاب کنید", errorStyle);
      else if (state.error === "INVALID_FILE_TYPE")
        toast.error("فقط فایل تصویر مجاز است", errorStyle);
      else if (state.error === "PRODUCT_EXISTS")
        toast.error("این محصول قبلا ثبت شده است", errorStyle);
      else if (state.error === "INVALID_DATA")
        toast.error("دیتا ها به درستی وارد نشده است", errorStyle);
      else if (state.error === "INVALID_DATA_PRICE")
        toast.error("مبلغ را وارد کنید", errorStyle);
      else if (state.error === "FILE_TOO_LARGE")
        toast.error("حجم عکس ها زیاد است", errorStyle);
      else toast.error("خطای سرور", errorStyle);
    }
  }, [state]);

  const addColorRow = () => {
    setColorsStock([...colorsStock, { colorId: "", stock: "", sizeIds: [] }]);
  };

  const removeColorRow = (index) => {
    setColorsStock((prev) => prev.filter((_, i) => i !== index));
  };

  const updateRow = (index, patch) => {
    setColorsStock((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...patch };
      return updated;
    });
  };

  const selectSizes = (e, index) => {
    const selected = Array.from(e.target.selectedOptions, (o) => o.value);

    if (selected.length > 4) {
      toast.error("حداکثر میتوان 4 سایز انتخاب کرد", errorStyle);
      return;
    }

    setColorsStock((prev) => {
      const updated = [...prev];
      const row = updated[index];

      const old = new Map(
        (row.sizes ?? []).map((x) => [String(x.sizeId), x.stock])
      );

      const newSizes = selected.map((sizeId) => ({
        sizeId,
        stock: old.get(String(sizeId)) ?? "",
      }));

      updated[index] = { ...row, sizes: newSizes };
      return updated;
    });
  };

  const updateStockForSize = (rowIndex, sizeId, value) => {
    setColorsStock((prev) => {
      const updated = [...prev];
      const row = updated[rowIndex];

      row.sizes = row.sizes.map((s) =>
        String(s.sizeId) === String(sizeId) ? { ...s, stock: value } : s
      );

      return updated;
    });
  };

  useEffect(() => {
    console.log(colorsStock);
  }, [colorsStock]);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        {colorsStock.map((row, index) => (
          <div key={index} className="border p-3 rounded flex flex-col gap-3">
            <div className="flex items-end gap-4">
              {/* رنگ */}
              <div>
                <label>رنگ</label>
                <select
                  className="w-60 bg-green-400 text-gray-200"
                  value={row.colorId}
                  onChange={(e) =>
                    updateRow(index, { colorId: e.target.value })
                  }
                >
                  <option value="" disabled>
                    انتخاب رنگ
                  </option>
                  {color?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* سایز */}
              <div>
                <label>سایز (حداکثر ۴)</label>
                <select
                  multiple
                  size={4}
                  onChange={(e) => selectSizes(e, index)}
                  className="w-60 bg-green-400 text-gray-200"
                  value={(row.sizes ?? []).map((s) => s.sizeId)}
                >
                  {size?.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.value}
                    </option>
                  ))}
                </select>
              </div>

              <span
                onClick={() => removeColorRow(index)}
                className="text-black dark:text-white text-2xl cursor-pointer"
                title="حذف"
              >
                *
              </span>
            </div>

            {/* ✅ تعداد برای هر سایز */}
            {row?.sizes?.length > 0 && (
              <div className="flex flex-col gap-2">
                <div className="text-sm">تعداد هر سایز:</div>
                <div className="flex flex-wrap gap-3">
                  {row.sizes.map((s) => {
                    const sizeLabel =
                      size.find((x) => String(x._id) === String(s.sizeId))
                        ?.value ?? "";

                    return (
                      <div key={s.sizeId} className="flex items-center gap-2">
                        <span className="text-sm">{sizeLabel}</span>
                        <input
                          type="number"
                          min="0"
                          className="w-28 bg-green-400 text-gray-200"
                          value={s.stock}
                          onChange={(e) =>
                            updateStockForSize(index, s.sizeId, e.target.value)
                          }
                          placeholder="تعداد"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* ✅ همون چیزی که سرور می‌خواد */}
        <input
          type="hidden"
          name="colorsStock"
          value={JSON.stringify(colorsStock)}
        />

        <span
          onClick={addColorRow}
          className="text-black dark:text-white text-2xl cursor-pointer"
          title="اضافه کردن رنگ"
        >
          +
        </span>
      </div>

      <div>
        <label>دسته بندی</label>
        <select name="category" className="w-60 bg-green-400 text-gray-200">
          {category?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-x-5 my-5">
        <div>
          <label>از سایز</label>
          <input
            type="number"
            name="sizeFrom"
            className="w-60 bg-green-400 text-gray-200"
          />
        </div>
        <div>
          <label>تا سایز</label>
          <input
            type="number"
            name="sizeTo"
            className="w-60 bg-green-400 text-gray-200"
          />
        </div>
      </div>

      <div>
        <label>برند</label>
        <select name="brand" className="w-60 bg-green-400 text-gray-200">
          {brand?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>تایتل</label>
        <input
          name="title"
          type="text"
          className="w-60 bg-green-400 text-gray-200"
        />
      </div>

      <div>
        <label>توضیحات</label>
        <textarea
          name="description"
          className="w-60 bg-green-400 text-gray-200"
        />
      </div>

      <div>
        <label>انتخاب عکس</label>
        <input
          name="images"
          type="file"
          multiple
          accept="image/*"
          className="w-60 bg-green-400 text-gray-200"
        />
      </div>

      <div>
        <label>مبلغ</label>
        <input
          name="price"
          type="text"
          className="w-60 bg-green-400 text-gray-200"
        />
      </div>

      <button type="submit" disabled={isPending} className="p-4 bg-gray-400">
        {isPending ? "در حال ساخت..." : "ساختن"}
      </button>
    </form>
  );
}

export default ProductsForm;
