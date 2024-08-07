import { injectable } from 'inversify';
import 'reflect-metadata';

import CafeMenu from "../../core/entity/CafeMenu";
import ICafeMenuRepository from "../../core/repository/ICafeMenuRepository";

@injectable()
export default class RabbitHouseMenuRepository implements ICafeMenuRepository {

  private menuItem: CafeMenu[] = [
    new CafeMenu(1, "オリジナルブレンド", 400, 50),
    new CafeMenu(2, "アメリカンブレンド", 400, 50),
    new CafeMenu(3, "アイスコーヒー", 400, 50),
    new CafeMenu(4, "サンドイッチ", 700, 30),
    new CafeMenu(5, "ナポリタン", 650, 20),
    new CafeMenu(6, "パンケーキ", 600, 15),
  ];

  getAll(): Promise<CafeMenu[]> {
    const items = [...this.menuItem];
    return Promise.resolve(items);
  }
}