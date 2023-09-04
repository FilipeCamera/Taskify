interface VerifyUser {
  exec(email: VerifyUser.request): Promise<VerifyUser.response>;
}

namespace VerifyUser {
  export type request = string;
  export type response = Boolean;
}

export { VerifyUser };
