import { injectable } from 'inversify';
import 'reflect-metadata';

import CafeMenu from "../../core/entity/CafeMenu";
import ICafeMenuRepository from "../../core/repository/ICafeMenuRepository";

@injectable()
export default class AmausaanCafeMenuRepository implements ICafeMenuRepository {

  private menuItem: CafeMenu[] = [
    new CafeMenu(1, "輝く三宝珠", 600, 10),
    new CafeMenu(2, "雪原の赤宝石", 650, 15),
    new CafeMenu(3, "海に映る月と星々", 600, 10),
    new CafeMenu(4, "花の都三つ子の宝石", 600, 8),
    new CafeMenu(5, "黄金の鯱スペシャル", 900, 5),
    new CafeMenu(6, "姫君の宝石箱", 850, 8),
    new CafeMenu(7, "緑林結晶", 300, 20),
  ];

  getAll(): Promise<CafeMenu[]> {
    const items = [...this.menuItem];
    return Promise.resolve(items);
  }
}