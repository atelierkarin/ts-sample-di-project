import container from "./core/config/inversify.config";
import TYPES from "./core/config/inversify.types";
import ICafeMenuController from "./core/controller/ICafeMenuController";

const kigurumiCafeController = container.get<ICafeMenuController>(
  TYPES.ICafeMenuController
);

(async () => {
  const result = await kigurumiCafeController.search();
  console.log(result);
})();