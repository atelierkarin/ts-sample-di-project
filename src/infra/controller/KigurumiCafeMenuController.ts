import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import ISearchCafeMenuUseCase from '../../core/usecase/ISearchCafeMenuUseCase';
import TYPES from '../../core/config/inversify.types';
import ICafeMenuController from '../../core/controller/ICafeMenuController';

@injectable()
export default class KigurumiCafeMenuController implements ICafeMenuController {
  private _searchCafeMenuUseCase: ISearchCafeMenuUseCase;

  public constructor(
    @inject(TYPES.ISearchCafeMenuUseCase) private searchCafeMenuUseCase: ISearchCafeMenuUseCase
  ) {
    this._searchCafeMenuUseCase = searchCafeMenuUseCase;
  }

  async search(): Promise<string> {
    const searchResult = await this._searchCafeMenuUseCase.searchAllItems();
    return JSON.stringify(searchResult);
  }
}
