// 封装用户相关的接口
import request from "@/utils/request";

export function login(data) {
  return request.post("/auth/login", data);
}

export function fn() {}
