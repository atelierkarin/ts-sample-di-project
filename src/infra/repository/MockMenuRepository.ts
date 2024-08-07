import CafeMenu from "../../core/entity/CafeMenu";
import ICafeMenuRepository from "../../core/repository/ICafeMenuRepository";

export default class MockMenuRepository implements ICafeMenuRepository {

  private menuItem: CafeMenu[] = [
    new CafeMenu(1, "アイテムA", 100, 10),
    new CafeMenu(2, "アイテムB", 200, 20),
    new CafeMenu(3, "アイテムC", 300, 30),
  ];

  getAll(): Promise<CafeMenu[]> {
    const items = [...this.menuItem];
    return Promise.resolve(items);
  }
}
