"use client";

// import AccessibleDialogForm from "@/components/accible-dialog-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  createServiceAction,
  // deleteServiceAction,
  // updateServiceAction,
} from "../actions";
import { CustomDropzoneUploadImage } from "@/components/custom-dropzone";
import { Textarea } from "@/components/ui/textarea";
import Form from "@/components/form";

export const CreateServiceForm = () => {
  return (
    <Form
      submit="إنشاء"
      dontReplace
      action={createServiceAction}
      replaceLink="/dashboard/services"
      success="تم إنشاء الخدمة بنجاح"
    >
      <div className="grid gap-4">
        <CustomDropzoneUploadImage name="poster" title="صورة المنتج" />

        <div>
          <Label htmlFor="title">اسم الخدمة</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="أدخل اسم الخدمة"
            required
          />
        </div>
        <div>
          <Label htmlFor="info">معلومات اساسية</Label>
          <Input
            type="text"
            name="info"
            id="info"
            placeholder="أدخل معلومات اساسية"
            required
            dir="rtl"
            max={200}
          />
        </div>

        <div>
          <Label htmlFor="body">وصف الخدمة</Label>
          <Textarea
            name="body"
            id="body"
            placeholder="أدخل وصف الخدمة"
            required
            dir="rtl"
          />
        </div>
      </div>
    </Form>
  );
};
// export const CreateProductForm = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <AccessibleDialogForm
//       submit="إنشاء"
//       open={open}
//       setOpen={setOpen}
//       dontReplace
//       trigger={<Button>إضافة منتج جديد</Button>}
//       action={createServiceAction}
//       title="إضافة منتج جديد"
//     >
//       <div className="grid gap-4">
//         <CustomDropzoneUploadImage name="image" title="صورة المنتج" />

//         <div>
//           <Label htmlFor="title">اسم المنتج</Label>
//           <Input
//             type="text"
//             name="title"
//             id="title"
//             placeholder="أدخل اسم المنتج"
//             required
//           />
//         </div>
//         <div>
//           <Label htmlFor="originalPrice">السعر الأصلي</Label>
//           <Input
//             type="number"
//             name="originalPrice"
//             id="originalPrice"
//             placeholder="أدخل السعر الأصلي"
//             required
//             dir="rtl"
//           />
//         </div>
//         <div>
//           <Label htmlFor="price">سعر البيع</Label>
//           <Input
//             type="number"
//             name="price"
//             id="price"
//             placeholder="أدخل سعر البيع"
//             required
//             dir="rtl"
//           />
//         </div>
//         <div>
//           <Label htmlFor="description">وصف المنتج</Label>
//           <Textarea
//             name="description"
//             id="description"
//             placeholder="أدخل وصف المنتج"
//             required
//             dir="rtl"
//           />
//         </div>
//       </div>
//     </AccessibleDialogForm>
//   );
// };
