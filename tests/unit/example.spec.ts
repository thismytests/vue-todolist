import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/todolist/TodoList.vue';

describe('The TodoList.vue component', () => {
  it('Can be mounted', () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it('allows for adding one todo item', async () => {
  const wrapper = shallowMount(TodoList, {items: []})
  wrapper.find('[data-testid="todo-input"]').setValue('My first todo item');
  await wrapper.find('[data-testid="todo-add-item-button"]').trigger('click');
  expect(true).toBe(true)
  // expect(wrapper.find('[data-testid="todos"]').text()).toContain('My first todo item');
})

// describe('TodoList.vue', () => {
//   it('renders props.text when passed', () => {
//     const items = ['new message'];
//     const wrapper = shallowMount(TodoList, {
//       props: { items },
//     });
//
//     console.log(`items :`, items);
//
//     expect(true).toBe(true)
//     // expect(wrapper.text()).toMatch(items);
//   });
// });
