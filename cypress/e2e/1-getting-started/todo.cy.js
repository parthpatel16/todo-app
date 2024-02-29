describe('To-Do App Tests', () => {
  beforeEach(() => {
      // Visit the to-do app before each test
      cy.visit('https://parthpatel16.github.io/todo-app/');
  });

  it('Allows me to add tasks', () => {
      const newItem = 'Feed the cat';
      cy.get('input[id="todo-input"]').type(`${newItem}{enter}`);
      cy.get('button[id="add-todo-btn"]').click();
      cy.get('ul[id="todo-list"]').find('li').should('have.length', 1).and('contain', newItem);
  });

  it('Allows me to mark a task as completed', () => {
      cy.get('input[id="todo-input"]').type('Feed the cat{enter}');
      cy.get('button[id="add-todo-btn"]').click();
      cy.get('ul[id="todo-list"] li').first().find('input.toggle').click();
      cy.get('ul[id="todo-list"] li').first().should('have.class', 'completed');
  });

  it('Allows me to delete a task', () => {
      cy.get('input[id="todo-input"]').type('Feed the cat{enter}');
      cy.get('button[id="add-todo-btn"]').click();
      cy.get('ul[id="todo-list"] li').first().find('button.destroy').invoke('show').click();
      cy.get('ul[id="todo-list"]').should('not.exist');
  });
});
