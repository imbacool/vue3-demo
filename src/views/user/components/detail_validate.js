export default {
  name: [
    {
      required: true,
      message: "姓名不能为空",
      trigger: ["change", "blur"],
    },
  ],
  gender: [
    {
      required: true,
      message: "性别不能为空",
      trigger: ["change", "blur"],
    },
  ],
  date: [
    {
      required: true,
      message: "出生日期不能为空",
      trigger: ["change", "blur"],
    },
  ],
  address: [
    {
      required: true,
      message: "地址不能为空",
      trigger: ["change", "blur"],
    },
  ],
}