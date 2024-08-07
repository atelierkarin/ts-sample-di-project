import CafeMenu from "../entity/CafeMenu";

export default interface ICafeMenuRepository {
  getAll(): Promise<CafeMenu[]>;
}