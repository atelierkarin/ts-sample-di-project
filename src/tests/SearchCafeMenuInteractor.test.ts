import SearchCafeMenuInteractor from "../infra/interactor/SearchCafeMenuInteractor";
import MockMenuRepository from "../infra/repository/MockMenuRepository";

describe('SearchCafeMenuInteractor', () => {
  describe('Normal Case', function () {
    const mockShopA = new MockMenuRepository();
    const mockShopB = new MockMenuRepository();
    const target = new SearchCafeMenuInteractor(mockShopA, mockShopB);

    it('There should be 6 items', async () => {
      const result = await target.searchAllItems();
      expect(result.length).toBe(6);
    });
  });
});