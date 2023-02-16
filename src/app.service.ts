import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './model/User.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  //create user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  //get all user
  async getAllUser() {
    return this.userModel
      .find({})
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }

  //update user
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  //get user by id
  async getUser(id): Promise<User> {
    return this.userModel.findById(id);
  }

  //user delete by id
  async deleteUser(id): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
