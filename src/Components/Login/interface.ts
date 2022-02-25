import React, { ChangeEvent } from "react";

export interface LoginIprops {
  email: string;
  password: string;
  handleSubmit(e: React.SyntheticEvent): void;
  changeEmail(e: ChangeEvent<HTMLInputElement>): void;
  changePassword(e: ChangeEvent<HTMLInputElement>): void;
  // error={error}
  isFetching: boolean;
  dark_mode: boolean;
  forget_password(): void;
}
