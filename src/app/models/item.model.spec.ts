import { Item } from './item.model';

const item = new Item(1, 'title', '270287', true, 3);
 
describe('Item', () => {
  it('has id', () => {
    expect(item.id).toBe(1);
  });

  it('has title', () => {
    expect(item.title).toBe('title');
  });

  it('has updated data', () => {
    expect(item.updated).toBe('270287');
  });

  it('has editing data', () => {
    expect(item.editing).toBe(true);
  });

  it('has amount', () => {
    expect(item.amount).toBe(3);
  });
});
