import VueTestUtils from '@vue/test-utils';
import translations from './src/translations.js';

const locale = 'en';

// デフォルトのモックを設定することでどのテストでも`this.$t`が利用できる
VueTestUtils.config.mocks['$t'] = msg => translations[locale][msg];
