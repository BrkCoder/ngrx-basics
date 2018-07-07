import { todosReducer, initialState } from './todos.reducer';

describe('Todos Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = todosReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
