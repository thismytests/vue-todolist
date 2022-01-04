import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/todolist/TodoList.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'new message';
    const wrapper = shallowMount(TodoList, {
      props: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
