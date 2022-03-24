export default {
  username: [
    {
      required: true,
      message: "账号不能为空",
      trigger: ["change", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: ["change", "blur"],
    },
  ],
}