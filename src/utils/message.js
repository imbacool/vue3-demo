import { ElMessage } from "element-plus";

export default {
  success(msg) {
    ElMessage({
      type: 'success',
      message: msg,
      duration: 1000,
      showClose: true
    })
  },
  error(msg) {
    ElMessage({
      type: 'error',
      message: msg,
      duration: 2000,
      showClose: true
    })
  },
  warning(msg) {
    ElMessage({
      type: 'warning',
      message: msg,
      duration: 3000,
      showClose: true
    })
  },
}