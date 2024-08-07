const TYPES = {
  ICafeMenuController: Symbol.for('ICafeMenuController'),
  ICafeMenuRepository: Symbol.for('ICafeMenuRepository'),
  ISearchCafeMenuUseCase: Symbol.for('ISearchCafeMenuUseCase')
} as const;

export default TYPES;
