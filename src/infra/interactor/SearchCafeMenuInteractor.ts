import { injectable, inject, tagged } from 'inversify';
import 'reflect-metadata';

import TYPES from "../../core/config/inversify.types";
import ICafeMenuRepository from '../../core/repository/ICafeMenuRepository';
import CafeMenu from '../../core/entity/CafeMenu';
import CafeResponseModel from '../../core/models/CafeResponseModel';
import ISearchCafeMenuUseCase from '../../core/usecase/ISearchCafeMenuUseCase';

@injectable()
export default class SearchCafeMenuInteractor implements ISearchCafeMenuUseCase {
  private _amausaanMenuRepository: ICafeMenuRepository;
  private _rabbitHouseMenuRepository: ICafeMenuRepository;

  public constructor(
    @inject(TYPES.ICafeMenuRepository) @tagged("shop", "Amausaan") amausaanMenuRepository: ICafeMenuRepository,
    @inject(TYPES.ICafeMenuRepository) @tagged("shop", "RabbitHouse") rabbitHouseMenuRepository: ICafeMenuRepository
  ) {
    this._amausaanMenuRepository = amausaanMenuRepository;
    this._rabbitHouseMenuRepository = rabbitHouseMenuRepository;
  }

  public async searchAllItems(): Promise<CafeResponseModel[]> {
    const amausaanItems: Readonly<CafeMenu>[] = await this._amausaanMenuRepository.getAll();
    const rabbitHouseItems: Readonly<CafeMenu>[] = await this._rabbitHouseMenuRepository.getAll();

    return [
      ...amausaanItems.map(item => new CafeResponseModel("甘兎庵", item.name, item.price)),
      ...rabbitHouseItems.map(item => new CafeResponseModel("ラビットハウス", item.name, item.price)),
    ];
  }
}
