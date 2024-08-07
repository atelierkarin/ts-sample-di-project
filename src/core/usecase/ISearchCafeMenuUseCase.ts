import CafeResponseModel from "../models/CafeResponseModel";

export default interface ISearchCafeMenuUseCase {
  searchAllItems(): Promise<CafeResponseModel[]>;
}