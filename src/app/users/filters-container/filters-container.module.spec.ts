import { FiltersContainerModule } from './filters-container.module';

describe('FiltersContainerModule', () => {
  let filtersContainerModule: FiltersContainerModule;

  beforeEach(() => {
    filtersContainerModule = new FiltersContainerModule();
  });

  it('should create an instance', () => {
    expect(filtersContainerModule).toBeTruthy();
  });
});
