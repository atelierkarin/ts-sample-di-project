import { Container } from 'inversify';

import ICafeMenuRepository from '../repository/ICafeMenuRepository';
import TYPES from './inversify.types';
import AmausaanCafeMenuRepository from '../../infra/repository/AmausaanCafeMenuRepository';
import SearchCafeMenuInteractor from '../../infra/interactor/SearchCafeMenuInteractor';
import ISearchCafeMenuUseCase from '../usecase/ISearchCafeMenuUseCase';
import KigurumiCafeMenuController from '../../infra/controller/KigurumiCafeMenuController';
import ICafeMenuController from '../controller/ICafeMenuController';
import RabbitHouseMenuRepository from '../../infra/repository/RabbitHouseMenuRepository';

const container = new Container();

container
  .bind<ICafeMenuRepository>(TYPES.ICafeMenuRepository)
  .to(AmausaanCafeMenuRepository)
  .whenTargetTagged("shop", "Amausaan");
container
  .bind<ICafeMenuRepository>(TYPES.ICafeMenuRepository)
  .to(RabbitHouseMenuRepository)
  .whenTargetTagged("shop", "RabbitHouse");
container
  .bind<ISearchCafeMenuUseCase>(TYPES.ISearchCafeMenuUseCase)
  .to(SearchCafeMenuInteractor)
  .inSingletonScope();
container
  .bind<ICafeMenuController>(TYPES.ICafeMenuController)
  .to(KigurumiCafeMenuController)

export default container;