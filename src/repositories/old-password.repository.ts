import { IOldPassword } from "../interfaces/old-password.interface";
import { OldPassword } from "../models/old-password.model";

class OldPasswordRepository {
  public async getList(): Promise<IOldPassword[]> {
    return await OldPassword.find();
  }

  public async create(dto: Partial<IOldPassword>): Promise<IOldPassword> {
    return await OldPassword.create(dto);
  }

  public async deleteManyByParams(
    params: Pick<IOldPassword, "_userId" | "createdAt">,
  ): Promise<void> {
    await OldPassword.deleteMany(params);
  }
}

export const oldPasswordRepository = new OldPasswordRepository();
