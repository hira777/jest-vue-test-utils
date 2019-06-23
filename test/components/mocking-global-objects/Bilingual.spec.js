import { shallowMount } from '@vue/test-utils';
import Bilingual from '@/components/mocking-global-objects/Bilingual.vue';

describe('Bilingual', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(Bilingual);
    console.log(wrapper.html());
  });
});
